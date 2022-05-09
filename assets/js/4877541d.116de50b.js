"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4523],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,p=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"FAQ"},l=void 0,h={unversionedId:"flashbots-auction/miners/faq",id:"flashbots-auction/miners/faq",isDocsHomePage:!1,title:"FAQ",description:"Check Flashbots Discord #release channel for the latest releases.",source:"@site/docs/flashbots-auction/miners/faq.mdx",sourceDirName:"flashbots-auction/miners",slug:"/flashbots-auction/miners/faq",permalink:"/flashbots-auction/miners/faq",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"demo",permalink:"/flashbots-auction/miners/demo"},next:{title:"source code",permalink:"/flashbots-auction/miners/advanced/source-code"}},c=[{value:"What is MEV?",id:"what-is-mev",children:[]},{value:"How much MEV revenue has been extracted on Ethereum?",id:"how-much-mev-revenue-has-been-extracted-on-ethereum",children:[]},{value:"What is the revenue upside from running Flashbots Alpha?",id:"what-is-the-revenue-upside-from-running-flashbots-alpha",children:[]},{value:"What is Flashbots? How does it plan to make money?",id:"what-is-flashbots-how-does-it-plan-to-make-money",children:[]},{value:"Why MEV-geth?",id:"why-mev-geth",children:[]},{value:"What are the benefits of running MEV-geth vs. partnering directly with a trader (bot operator)?",id:"what-are-the-benefits-of-running-mev-geth-vs-partnering-directly-with-a-trader-bot-operator",children:[]},{value:"What are the main differences between MEV-geth vs. geth?",id:"what-are-the-main-differences-between-mev-geth-vs-geth",children:[]},{value:"How does MEV-geth technically guarantee a net positive outcome for miners?",id:"how-does-mev-geth-technically-guarantee-a-net-positive-outcome-for-miners",children:[]},{value:"When I run MEV-geth, how can I know for sure any additional revenue comes from MEV, rather than normal variance from mining?",id:"when-i-run-mev-geth-how-can-i-know-for-sure-any-additional-revenue-comes-from-mev-rather-than-normal-variance-from-mining",children:[]},{value:"How does MEV revenue work with existing mining pool reward systems, in particular Pay Per Share (PPS) vs. Pay Per Last (luck) N Shares (PPLNS)?",id:"how-does-mev-revenue-work-with-existing-mining-pool-reward-systems-in-particular-pay-per-share-pps-vs-pay-per-last-luck-n-shares-pplns",children:[]},{value:"Does Flashbots run any simulation on how much money can be made by a miner if they were to run MEV-geth now?",id:"does-flashbots-run-any-simulation-on-how-much-money-can-be-made-by-a-miner-if-they-were-to-run-mev-geth-now",children:[]},{value:"How long will it take for me to see significant revenue differences from MEV after I try Flashbots Alpha?",id:"how-long-will-it-take-for-me-to-see-significant-revenue-differences-from-mev-after-i-try-flashbots-alpha",children:[]},{value:"If more mining pools adopt MEV-geth, would my potential revenue from MEV decrease due to competition?",id:"if-more-mining-pools-adopt-mev-geth-would-my-potential-revenue-from-mev-decrease-due-to-competition",children:[]},{value:"What is the impact of Flashbots on gas fees collected from normal transactions?",id:"what-is-the-impact-of-flashbots-on-gas-fees-collected-from-normal-transactions",children:[]},{value:"Has Flashbots done any load testing of MEV-geth? Where can I see the tests/results?",id:"has-flashbots-done-any-load-testing-of-mev-geth-where-can-i-see-the-testsresults",children:[]},{value:"Why should miner(s) and/or mining pool(s) use MEV-relay vs exposing its own MEV-geth node&#39;s RPC endpoint?",id:"why-should-miners-andor-mining-pools-use-mev-relay-vs-exposing-its-own-mev-geth-nodes-rpc-endpoint",children:[]},{value:"Can miners/mining pools choose to include only part of a Flashbots transaction bundle submitted through Flashbots?",id:"can-minersmining-pools-choose-to-include-only-part-of-a-flashbots-transaction-bundle-submitted-through-flashbots",children:[]},{value:"How does Flashbots prevent malicious pool behavior in the system?",id:"how-does-flashbots-prevent-malicious-pool-behavior-in-the-system",children:[]},{value:"Why shouldn&#39;t a miner collaborate with a trader directly by sharing Flashbots transaction bundle flow with them?",id:"why-shouldnt-a-miner-collaborate-with-a-trader-directly-by-sharing-flashbots-transaction-bundle-flow-with-them",children:[]},{value:"Can I test mining on Ropsten?",id:"can-i-test-mining-on-ropsten",children:[]},{value:"Where can I view the health status of Flashbots&#39; infrastructure?",id:"where-can-i-view-the-health-status-of-flashbots-infrastructure",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Check Flashbots Discord ",(0,r.kt)("a",{parentName:"em",href:"https://discord.com/invite/7hvTycdNcK"},"#release")," channel for the latest releases.")),(0,r.kt)("p",null,"Don't see your question answered? Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/7hvTycdNcK"},"#\u26cf\ufe0fminers")," channel on Discord!"),(0,r.kt)("h3",{id:"what-is-mev"},"What is MEV?"),(0,r.kt)("p",null,"MEV stands for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research/issues/24"},"Maximal Extractable Value")," (previously defined as ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?reload=9&v=vR1v7AQ8i3k&ab_channel=IEEESymposiumonSecurityandPrivacy"},"Miner Extractable Value"),"). On any smart-contract blockchain, MEV is the maximal value that can be permissionlessly extracted from transaction ordering. This includes both 'basic' value such as transactions fees and block rewards, as well as 'advanced' value such as any kind of arbitrary inclusion, exclusion and re-ordering of transactions. On Ethereum today, miners have the most permissionless power with respect to transaction ordering. MEV exists on both layer 1 and layer 2 architecture, and will still exist in the future after Ethereum shifts to ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@flashbots/mev-in-eth2"},"2.0"),"."),(0,r.kt)("p",null,"In order to differentiate between the theoretical maximum extractable and what ",(0,r.kt)("em",{parentName:"p"},"is")," extracted from transaction ordering, we introduce the term REV - Realized Extractable Value to denote the value that ",(0,r.kt)("em",{parentName:"p"},"has been")," extracted as opposed to the theoretical maximal value (MEV) that ",(0,r.kt)("em",{parentName:"p"},"could have been")," extracted in a given block from the ordering of transactions. Most REV is captured today by DeFi traders, miners profit from it via the transactions fees these traders pay for their transactions to be prioritized."),(0,r.kt)("h3",{id:"how-much-mev-revenue-has-been-extracted-on-ethereum"},"How much MEV revenue has been extracted on Ethereum?"),(0,r.kt)("p",null,"According to preliminary results from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-inspect-rs"},"data collection and processing efforts"),", a conservative estimate of REV, the total value extracted from transaction ordering on Ethereum since February 2020 is worth over $720 million. This figure accounts for revenue captured by traders who deployed common MEV strategies on DeFi protocols, and gas fees spent on these trades that went to miners who ended up mining the blocks with such MEV strategies. More metrics can be explored through our ",(0,r.kt)("a",{parentName:"p",href:"https://explore.flashbots.net"},"public dashboard"),"."),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"Note: As we expand our data collection efforts to further increase our coverage of major MEV-strategies, we expect REV measured to be significantly higher."),")"),(0,r.kt)("h3",{id:"what-is-the-revenue-upside-from-running-flashbots-alpha"},"What is the revenue upside from running Flashbots Alpha?"),(0,r.kt)("p",null,"We estimate the average MEV opportunity to be worth at least 0.25 ETH per block today, and expect it to grow as more MEV strategies get deployed and more DeFi protocols enter the space. Early Flashbots Alpha adopters will be able to enjoy first-mover advantage and capture a significant margin of the revenue generated by traders."),(0,r.kt)("p",null,"MEV revenue scales with the volume of users. The more users send transaction bundles via MEV-relay to miners who run MEV-geth, the more MEV revenue will go to miner(s) and/or mining pool(s)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Case study transaction:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0xf8333db853d92fd3a26a05a4b524146773ddbfe1bbc32a800efec32ea7eebb36"},"https://etherscan.io/tx/0xf8333db853d92fd3a26a05a4b524146773ddbfe1bbc32a800efec32ea7eebb36")),(0,r.kt)("p",null,"This was a 10.2 ETH arbitrage opportunity between two decentralized exchanges. ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x94d6522c80fb261c147a4111ad9a49407042f9b4"},"The trader")," paid the miner 1.8 ETH through regular transaction fees in order to be the one to secure this opportunity and profited 8.4 ETH from it. This adds up to 18% of the transaction value going to the miner and 82% to the trader."),(0,r.kt)("p",null,"Our open-source arbitrage trading bot was able to identify this same opportunity and submitted a Flashbots bundle for it to a miner running MEV-geth. Unfortunately, the miner didn't win the relevant block and the strategy went to the trader mentioned above. Had the Flashbots bundle been mined and because our bot is currently set to give 100% to miners, the miner running MEV-geth would've made 10.2 ETH or 5.6x more!"),(0,r.kt)("p",null,"This is purely anecdotal as we don't expect Flashbots users to give 100% of their profits to miners. Yet, by having open-sourced this MEV strategy, it means anyone can replicate it anytime, thus creating more competition amongst the traders who will increase the % they give to miners in order to be included. Because transaction bundle submission on Flashbots does not incur gas fee for failed transactions, traders are incentivized to act as an MEV searcher and submit the same strategy on Flashbots as a seal-bid auction."),(0,r.kt)("h3",{id:"what-is-flashbots-how-does-it-plan-to-make-money"},"What is Flashbots? How does it plan to make money?"),(0,r.kt)("p",null,"Flashbots is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm"},"research and development organization")," formed to mitigate the negative externalities and existential risks posed by miner-extractable value (MEV) to smart-contract blockchains. We are building a permissionless, transparent, and fair ecosystem for MEV extraction to reinforce the Ethereum ideals. Read more about our organization and public commitments ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752"},"here"),"."),(0,r.kt)("p",null,"Flashbots Alpha is an open-source software that does not extract any fees. That being said, fair and sustainable MEV revenue distribution across ecosystem stakeholders is a core area of study that our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research"},"research efforts")," are actively looking into."),(0,r.kt)("h3",{id:"why-mev-geth"},"Why MEV-geth?"),(0,r.kt)("p",null,"Transaction inclusion priority and private mempool services become more valuable every day that Ethereum\u2019s DeFi ecosystem grows. The current method to express transaction priority is through gas. Miners are the entity that have the most permissionless control over transaction inclusion and their mempool. We believe there exists a gap between miners and users."),(0,r.kt)("p",null,"MEV-geth bridges that gap. It allows miners to satisfy the user\u2019s need, in exchange for additional revenue, on top of their pre-existing Ethereum transaction fees and block reward. This is done by outsourcing part of the mempool\u2019s transaction selection and ordering process to third-party MEV-searchers who want to include their transactions as soon as possible (e.g. arbitrageurs)."),(0,r.kt)("h3",{id:"what-are-the-benefits-of-running-mev-geth-vs-partnering-directly-with-a-trader-bot-operator"},"What are the benefits of running MEV-geth vs. partnering directly with a trader (bot operator)?"),(0,r.kt)("p",null,"From a short-to-medium term standpoint, we believe the revenue source from a diverse pool of high-quality traders will outweigh any bespoke fee-sharing deal with an individual trader both in size and in stability:"),(0,r.kt)("p",null,"Flashbots provides open access for anyone to become an MEV searcher to submit transaction bundles. The sealed-bid auction mechanism of Flashbots that provides pre-trade privacy is inducive to attracting sophisticated traders who are competitive in the MEV game. From the miners' perspective, this enables profiting from a broad range of high-quality MEV opportunities that cannot be conceivably covered by a single bot operator. This is not only relevant for profitability but also for stability of your revenue: DeFi trading strategies become efficient very quickly and traders will need to constantly preserve their competitive edge by finding new strategies, it is much more likely that the blended average competitive edge of our pool of traders will be consistently higher than of a single trader."),(0,r.kt)("p",null,"From a longer-term standpoint, by running MEV-geth and being a market participant you are contributing to the Flashbots network effect:\nmore hashrate running MEV-geth leads to more MEV-search activity which leads to more MEV revenue for miners, which leads to more hashrate running MEV-geth!"),(0,r.kt)("h3",{id:"what-are-the-main-differences-between-mev-geth-vs-geth"},"What are the main differences between MEV-geth vs. geth?"),(0,r.kt)("p",null,"MEV-geth is a fork of geth that adds an ability to include transaction bundles at the beginning of each block via a new ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," RPC call. You can see a summary of the differences between MEV-geth and geth ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth/blob/master/README.md#what-is-the-difference-between-mev-geth-and-geth"},"here"),", and a detailed list of changes by inspecting the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/compare/master...flashbots:master#diff-c426ecd2f7d247753b9ea8c1cc003f21fa412661c1f967d203d4edf8163da344R1970"},"diff"),"."),(0,r.kt)("h3",{id:"how-does-mev-geth-technically-guarantee-a-net-positive-outcome-for-miners"},"How does MEV-geth technically guarantee a net positive outcome for miners?"),(0,r.kt)("p",null,"MEV-geth ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth/blob/master/miner/worker.go#L1211"},"compares")," a regular block template vs. a template with Flashbots transaction bundles inserted in it. It will only mine the block template that includes the bundles if it results in higher miner revenue."),(0,r.kt)("p",null,"The Flashbots transaction bundles that outcompetes the least profitable transaction(s) at the bottom of a block will be included. If the Flashbots transaction bundles are not as profitable to include comparing to regular transactions, MEV-geth will default to regular block template. Thus the payout of mining on MEV-geth will be strictly more profitable than mining on geth, holding all else constant."),(0,r.kt)("h3",{id:"when-i-run-mev-geth-how-can-i-know-for-sure-any-additional-revenue-comes-from-mev-rather-than-normal-variance-from-mining"},"When I run MEV-geth, how can I know for sure any additional revenue comes from MEV, rather than normal variance from mining?"),(0,r.kt)("p",null,"The are a couple ways to see revenue that results from MEV:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transactions at the beginning of a block that send ETH to mining pool address;"),(0,r.kt)("li",{parentName:"ul"},"Searching MEV-geth logs: ",(0,r.kt)("inlineCode",{parentName:"li"},"grep Flashbots bundle"),".\nResults will look like ",(0,r.kt)("inlineCode",{parentName:"li"},"Flashbots bundle bundlePrice=48471302632  bundleLength=1"),".\nNote: the ",(0,r.kt)("inlineCode",{parentName:"li"},"bundlePrice")," here is an adjusted gas price, not actually ETH."),(0,r.kt)("li",{parentName:"ul"},"Query the ",(0,r.kt)("a",{parentName:"li",href:"https://blocks.flashbots.net"},"Flashbots blocks API")," to find the profit per block:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> curl \'https://blocks.flashbots.net/v1/blocks?block_number=12006597\'\n{\n  "blocks": [\n    {\n      "block_number": 12006597,\n      "miner_reward": 89103402731082940,\n      "miner": "0xd224ca0c819e8e97ba0136b3b95ceff503b79f53",\n      "coinbase_transfers": 51418761731082940,\n      "gas_used": 374858,\n      "gas_price": 237699082668,\n      "transactions": [...]\n\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"or find the most recent 100 blocks mined by an address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> curl 'https://blocks.flashbots.net/v1/blocks?miner=0xd224ca0c819e8e97ba0136b3b95ceff503b79f53\n")),(0,r.kt)("h3",{id:"how-does-mev-revenue-work-with-existing-mining-pool-reward-systems-in-particular-pay-per-share-pps-vs-pay-per-last-luck-n-shares-pplns"},"How does MEV revenue work with existing mining pool reward systems, in particular Pay Per Share (PPS) vs. Pay Per Last (luck) N Shares (PPLNS)?"),(0,r.kt)("p",null,"Dominant mining pool reward systems today has emerged over 10 years ago when pooled mining emerged on Bitcoin network.\nMEV opportunities present on smart contract blockchain, made available to miner(s) and/or mining pool(s) additional revenue source with different distribution from block rewards and transaction fees."),(0,r.kt)("p",null,"Incumbent mining pools already in operation may continue to apply its existing reward system, i.e. PPS or PPLNS, by treating MEV revenue as part of the transaction fee in paying out the miners."),(0,r.kt)("p",null,"Alternatively, we may see MEV mining pools forming, where distribution of MEV revenue takes into account the variance of MEV opportunities modified on top of existing mining pool reward systems."),(0,r.kt)("h3",{id:"does-flashbots-run-any-simulation-on-how-much-money-can-be-made-by-a-miner-if-they-were-to-run-mev-geth-now"},"Does Flashbots run any simulation on how much money can be made by a miner if they were to run MEV-geth now?"),(0,r.kt)("p",null,"Any miner listed on the Flashbots MEV-relay miner registry can track the MEV revenue on Flashbots network by examining the MEV-geth logs. Flashbots would like to work with ecosystem contributors to create open-sourced tooling and dashboards in order to improve visibility of the MEV extraction on the Flashbots ecosystem."),(0,r.kt)("h3",{id:"how-long-will-it-take-for-me-to-see-significant-revenue-differences-from-mev-after-i-try-flashbots-alpha"},"How long will it take for me to see significant revenue differences from MEV after I try Flashbots Alpha?"),(0,r.kt)("p",null,"MEV opportunities are not distributed uniformly within blocks and are unpredictable, yet highly lucrative. Mining a block with Flashbots transaction bundle is a probability game with different distribution on top of proof-of-work mining."),(0,r.kt)("p",null,"It depends on MEV searcher competition on Flashbots. The more competition amongst MEV searchers sending transaction bundles to miners running MEV-geth through MEV-relay, the more likely you will see significant revenue differences soon after you set up MEV-geth and join MEV-relay."),(0,r.kt)("p",null,"It also depends on % of your hashrate relative to the rest of the network. The more frequently you mine a block the more likely it is to include an MEV opportunity."),(0,r.kt)("p",null,"As Flashbots gains more users and DeFi continues to grow, you can expect seeing increased percentage of mining revenue coming from MEV."),(0,r.kt)("h3",{id:"if-more-mining-pools-adopt-mev-geth-would-my-potential-revenue-from-mev-decrease-due-to-competition"},"If more mining pools adopt MEV-geth, would my potential revenue from MEV decrease due to competition?"),(0,r.kt)("p",null,"No. Your revenue from MEV only depends on mining blocks that include an MEV opportunity. Other pools adopting MEV-geth don't impact your revenue as long your hashrate % stays constant."),(0,r.kt)("p",null,"As more miners adopt MEV-geth we can expect more searcher becoming interested in submitting transactions via Flashbots driving increased searcher competition and more revenue for mining pools."),(0,r.kt)("h3",{id:"what-is-the-impact-of-flashbots-on-gas-fees-collected-from-normal-transactions"},"What is the impact of Flashbots on gas fees collected from normal transactions?"),(0,r.kt)("p",null,"If the block is full, including a Flashbots transaction bundle will result in the lowest-priced transaction(s) to be pushed out of the bottom of the block. This will slightly reduce revenue component from gas but compensated by MEV revenue from the Flashbots bundle."),(0,r.kt)("p",null,"Therefore, if a Flashbots transaction bundle is included, the miner revenue is always guaranteed to be higher than a regular block."),(0,r.kt)("h3",{id:"has-flashbots-done-any-load-testing-of-mev-geth-where-can-i-see-the-testsresults"},"Has Flashbots done any load testing of MEV-geth? Where can I see the tests/results?"),(0,r.kt)("p",null,"Load testing results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5 bundles at 12m gas each: 2-3s"),(0,r.kt)("li",{parentName:"ul"},"30 bundles at 3m gas each: ~9s"),(0,r.kt)("li",{parentName:"ul"},"15 bundles at 12m gas each: ~20s")),(0,r.kt)("p",null,"These tests were done on an AWS m5.xlarge running MEV-geth. In practice, this should not matter for miners, since Flashbots Alpha limits the bundles at the MEV-relay level."),(0,r.kt)("h3",{id:"why-should-miners-andor-mining-pools-use-mev-relay-vs-exposing-its-own-mev-geth-nodes-rpc-endpoint"},"Why should miner(s) and/or mining pool(s) use MEV-relay vs exposing its own MEV-geth node's RPC endpoint?"),(0,r.kt)("p",null,"During Flashbots Alpha phase, we suggest miner(s) and/or mining pool(s) use MEV-relay, and do not expose RPC endpoint, for three reasons:"),(0,r.kt)("p",null,"First, exposing your MEV-geth node's RPC endpoint without having taken the proper security measures opens you up to spam. We invest significant engineering resources into spam prevention, rate limiting, bundle simulation and queuing to ensure high reliability for the network. In the future, Flashbots plans to iterate towards a decentralized approach to solving this problem through improving the design of MEV-relay."),(0,r.kt)("p",null,"Secondly, during Alpha phase bootstrapping MEV searcher activities, Flashbots is responsible for keeping the uptime guarantee for the MEV searcher network. Exposing endpoints directly will make your infrastructure susceptible to attack vectors such as DDoS and may put the entire Flashbots network at risk and breaks our obligations to the searchers, which may reduce the MEV revenue on the Flashbots network."),(0,r.kt)("p",null,"Lastly, during Alpha phase, we are collecting data on Flashbots network activities to improve Flashbots infrastructure. Therefore, we would prefer if more MEV transaction bundles are submitted through MEV-relay, which in turn will help us iterate towards next version."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: continuous degraded performance of miner(s) and/or mining pool(s)' endpoint may result in its temporary exclusion from the network.")),(0,r.kt)("h3",{id:"can-minersmining-pools-choose-to-include-only-part-of-a-flashbots-transaction-bundle-submitted-through-flashbots"},"Can miners/mining pools choose to include only part of a Flashbots transaction bundle submitted through Flashbots?"),(0,r.kt)("p",null,"No, miner(s) and/or mining pool(s) running MEV-geth without modification cannot include only part of Flashbots transaction bundle. The current MEV-geth implementation includes entire transaction bundles."),(0,r.kt)("p",null,"Since miner payoff depends on MEV capture strategy success, removing a transaction from the bundle is likely to result in MEV not being captured, resulting in 0 payoff and exclusion of such bundle from the block."),(0,r.kt)("h3",{id:"how-does-flashbots-prevent-malicious-pool-behavior-in-the-system"},"How does Flashbots prevent malicious pool behavior in the system?"),(0,r.kt)("p",null,"During Alpha phase, Flashbots monitors flow of transaction bundles via MEV-relay and compares them vs. on-chain record. If malicious behavior like front-running incoming bundles or selling access to incoming bundles is detected, the miner(s) and/or mining pool(s) may be excluded from MEV-relay."),(0,r.kt)("h3",{id:"why-shouldnt-a-miner-collaborate-with-a-trader-directly-by-sharing-flashbots-transaction-bundle-flow-with-them"},"Why shouldn't a miner collaborate with a trader directly by sharing Flashbots transaction bundle flow with them?"),(0,r.kt)("p",null,"Collusion between miner(s) and mining pool(s) on sharing transaction bundle flow will provide asymmetric advantage to certain traders of the ecosystem and potentially drive the best MEV searchers away, because the auction is no-longer fair."),(0,r.kt)("p",null,"From a short-to-medium term standpoint, we believe the MEV revenue sourced from a diverse set of competitive traders will outweigh any bespoke fee-sharing deal with an individual trader both in revenue amount and in stability:"),(0,r.kt)("p",null,"Flashbots provides open access for anyone to become an MEV searcher to submit transaction bundles. The sealed-bid auction mechanism of Flashbots that provides pre-trade privacy is inducive to attracting sophisticated traders who are competitive in the MEV game."),(0,r.kt)("p",null,"From a miners' perspective, this enables you to profit from a broad range of high-quality MEV opportunities that cannot be conceivably covered by a single bot operator."),(0,r.kt)("p",null,"This is not only relevant for profitability but also for stability of your revenue: DeFi trading strategies become efficient very quickly and traders will need to constantly preserve their competitive edge by finding new strategies, it is likely that the weighted average of Flashbots' traders competitive edge will be consistently higher than of a single trader."),(0,r.kt)("h3",{id:"can-i-test-mining-on-ropsten"},"Can I test mining on Ropsten?"),(0,r.kt)("p",null,"No, there is no Flashbots Ropsten relay. Flashbots team uses Goerli network for testing new releases. Miners are expected to test bundles behaviour against their own disconnected test node or a local test network."),(0,r.kt)("h3",{id:"where-can-i-view-the-health-status-of-flashbots-infrastructure"},"Where can I view the health status of Flashbots' infrastructure?"),(0,r.kt)("p",null,"Status is reported at ",(0,r.kt)("a",{parentName:"p",href:"https://status.flashbots.net/"},"https://status.flashbots.net/")," . Please check this link for any network outages or downtime."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example arbitrage searcher: ",(0,r.kt)("a",{parentName:"li",href:"https://bit.ly/3hGbDtk"},"https://bit.ly/3hGbDtk")),(0,r.kt)("li",{parentName:"ul"},"Miner Proxy: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-proxy"},"https://github.com/flashbots/mev-proxy")),(0,r.kt)("li",{parentName:"ul"},"MEV-Relay repo (deprecated): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-relay-js"},"https://github.com/flashbots/mev-relay-js")),(0,r.kt)("li",{parentName:"ul"},"Flashbots ethers.js provider: ",(0,r.kt)("a",{parentName:"li",href:"https://bit.ly/2MpNFXI"},"https://bit.ly/2MpNFXI")),(0,r.kt)("li",{parentName:"ul"},"Searcher FAQ: ",(0,r.kt)("a",{parentName:"li",href:"https://bit.ly/2Xb3FiI"},"https://bit.ly/2Xb3FiI")),(0,r.kt)("li",{parentName:"ul"},"Ask any questions in Flashbots Discord ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/invite/7hvTycdNcK"},"#\u26cf\ufe0fminers")," Channel, or email us at ",(0,r.kt)("a",{parentName:"li",href:"mailto:info@flashbots.net"},"info@flashbots.net"))))}d.isMDXComponent=!0}}]);