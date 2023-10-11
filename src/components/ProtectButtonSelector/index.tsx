/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from "react"
import FlashbotsProtectButton, { generateRpcUrl, HintPreferences } from 'protect-button';
import SimpleDropdown from '../SimpleDropdown'
import Checkbox from '../Checkbox'
import AlignItems from '../AlignItems/AlignItems'
import GridBlock from '../GridBlock/GridBlock'
import { Builder, useSupportedBuilders } from '../mev-share/useSupportedBuilders'
import styles from './styles.module.scss';

function ProtectButtonSelector() {
    const [selectedBuilders, setSelectedBuilders] = useState<string[]>([])
    const [calldata, setCalldata] = useState(false)
    const [logs, setLogs] = useState(false)
    const [defaultLogs, setDefaultLogs] = useState(false)
    const [contractAddress, setContractAddress] = useState(false)
    const [functionSelector, setFunctionSelector] = useState(false)
    const [noHints, setNoHints] = useState(false)
    const [allBuilders, setAllBuilders] = useState(false)
    const [advancedOptionsShown, setAdvancedOptionsShown] = useState(false)
    const [fastMode, setFastMode] = useState(false)

    const supportedBuilders = useSupportedBuilders().map(builder => builder.name)

    const hints: HintPreferences = advancedOptionsShown ? {
        calldata,
        logs,
        defaultLogs,
        contractAddress,
        functionSelector,
        txHash: noHints
    } : undefined

    // Generate the RPC URL
    const rpcUrl = generateRpcUrl({
        hints,
        builders: advancedOptionsShown ? selectedBuilders : undefined
        // TODO also accept "fast"
    }).toString();

    const onSetNoHints = (val: boolean) => {
        setNoHints(val);
        if (val === true) {
            // We have to also clear all of the other hints if someone selects no hints.
            setCalldata(false);
            setLogs(false);
            setDefaultLogs(false);
            setContractAddress(false);
            setFunctionSelector(false);
        }
    }

    // If the user selects any other hint, the "none" option should be deselected. TODO Is there
    // a more elegant way to handle this than wrapping each hint update in a callback.

    const onSetCalldata = (val: boolean) => {
        setNoHints(false);
        setCalldata(val);
    }

    const onSetLogs = (val: boolean) => {
        setNoHints(false);
        setLogs(val);
    }

    const onSetDefaultLogs = (val: boolean) => {
        setNoHints(false);
        setDefaultLogs(val);
    }

    const onSetFunctionSelector = (val: boolean) => {
        setNoHints(false);
        setFunctionSelector(val);
    }

    const onSetContractAddress = (val: boolean) => {
        setNoHints(false);
        setContractAddress(val);
    }

    useEffect(() => {
        setAllBuilders(selectedBuilders.length === supportedBuilders.length);
    }, [selectedBuilders, supportedBuilders]);

    const toggleBuilder = (name: string) => {
        if (selectedBuilders.includes(name)) {
            setSelectedBuilders(selectedBuilders.filter(b => b !== name));
        } else {
            setSelectedBuilders(selectedBuilders.concat(name));
        }
    };

    const toggleAllBuilders = (val: boolean) => {
        setAllBuilders(val);
        if (val === true) {
            setSelectedBuilders(supportedBuilders);
        } else {
            setSelectedBuilders([]);
        }
    }

    function BuilderCheckbox({ name }: { name: string }) {
  return <Checkbox label={name} id={`builder_${name}`} checked={selectedBuilders.includes(name) || fastMode === true} disabled={fastMode === true} onChange={(_) => toggleBuilder(name)} />
}

    function RenderRpcUrl() {
  return <div className={styles.rpcUrlContainer}>
            <div className={styles.rpcUrlLabel}>RPC URL:</div>
            <div className={styles.rpcUrl}>{rpcUrl}</div>
        </div>
}

    function RenderHints() {
  return <div>
            <em>MEV-Share Hints</em>
            <hr style={{ padding: 0, margin: 0 }} />
            <AlignItems horizontal='left'>
                <Checkbox label='Calldata' id='calldata' checked={calldata} onChange={onSetCalldata} />
                <Checkbox label='Contract Address' id='contractAddress' checked={contractAddress} onChange={onSetContractAddress} />
                <Checkbox label='Function Selector' id='functionSelector' checked={functionSelector} onChange={onSetFunctionSelector} />
                <Checkbox label='Logs' id='logs' checked={logs} onChange={onSetLogs} />
                <Checkbox label='DefaultLogs' id='defaultLogs' checked={defaultLogs} onChange={onSetDefaultLogs} />
                <Checkbox label='None' id='none' checked={noHints} onChange={onSetNoHints} />
                <div style={{ width: 64 }} /> {/* spacer */}
            </AlignItems>
        </div>
}

    function RenderBuilders() {
  return <div>
            <em>Builders</em>
            <hr style={{ padding: 0, margin: 0 }} />
            {supportedBuilders.map((builder, idx) => <BuilderCheckbox name={builder} key={idx} />)}
            <Checkbox label="all" id="all" checked={allBuilders === true || fastMode === true} disabled={fastMode === true} onChange={toggleAllBuilders} />
        </div>
}

    return (
        <GridBlock>
            <SimpleDropdown header="Advanced options" onClickHeader={() => {
                setAdvancedOptionsShown(!advancedOptionsShown)
            }} isOpen={advancedOptionsShown}>
                <SimpleDropdown.Body>
                    <AlignItems horizontal='center'>
                        <><FlashbotsProtectButton hints={hints} builders={advancedOptionsShown ? selectedBuilders : undefined}>Connect Wallet to Protect</FlashbotsProtectButton></>
                    </AlignItems>
                    <div className={styles.fastContainer}>
                        <Checkbox label="Fast" id="fast" checked={fastMode === true} onChange={setFastMode} />
                    </div>
                    <RenderRpcUrl />
                </SimpleDropdown.Body>
                <SimpleDropdown.HiddenBody>
                    <RenderHints />
                    <RenderBuilders />
                </SimpleDropdown.HiddenBody>
            </SimpleDropdown>
        </GridBlock>
    );
}

export default ProtectButtonSelector
