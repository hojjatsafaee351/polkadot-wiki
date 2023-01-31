"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},l=void 0,p={unversionedId:"learn/learn-nft",id:"learn/learn-nft",title:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",source:"@site/../docs/learn/learn-nft.md",sourceDirName:"learn",slug:"/learn-nft",permalink:"/docs/learn-nft",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1675073525,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},sidebar:"docs",previous:{title:"DOT",permalink:"/docs/learn-DOT"},next:{title:"Statemint",permalink:"/docs/learn-statemint"}},h={},d=[{value:"Fungibility",id:"fungibility",level:2},{value:"NFT Standards",id:"nft-standards",level:2},{value:"A typical NFT on Ethereum",id:"a-typical-nft-on-ethereum",level:4},{value:"NFTs 2.0: NFTs in Polkadot &amp; Kusama",id:"nfts-20-nfts-in-polkadot--kusama",level:2},{value:"Unique network",id:"unique-network",level:3},{value:"RMRK",id:"rmrk",level:3},{value:"NFT Legos",id:"nft-legos",level:4},{value:"NFT from Kanaria",id:"nft-from-kanaria",level:4},{value:"Efinity",id:"efinity",level:3},{value:"Astar",id:"astar",level:3},{value:"Moonbeam",id:"moonbeam",level:3},{value:"Uniques",id:"uniques",level:3},{value:"Basilisk",id:"basilisk",level:3},{value:"Bridging",id:"bridging",level:2},{value:"References",id:"references",level:3}],c={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is a high-level overview of NFTs and the various approaches to NFTs within the\nPolkadot network."),(0,r.kt)("h2",{id:"fungibility"},"Fungibility"),(0,r.kt)("p",null,"NFT stands for ",(0,r.kt)("em",{parentName:"p"},"non-fungible token"),". Fungibility means interchangeability inside of a group. In\ntheory, a $20 bill is always worth $20 in a store and identical in value to any other $20 bill. It\nis not, however, fungible with a $1 or $100 dollar bill (outside its group)."),(0,r.kt)("p",null,"A Pokemon\u2122 trading card of a Charizard is non-fungible with a card of Squirtle, whereas editions of\nCharizard are fungible with each other."),(0,r.kt)("p",null,"Fungibility is a spectrum - what is fungible to some might not be fungible to others. In reality,\nPokemon\u2122 cards, the canonical example of non-fungible assets are more fungible than US dollar bills,\neach of which has a unique serial number that may be important to a government agency. The cards\nhave no serial numbers ","[1]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.investopedia.com/thmb/Nr-RLORu5CX_lIWZfLmV5X0eIrc=/613x345/smart/filters:no_upscale()/Clipboard01-d20f6eb9351e4f36a46e11fd87b53b2d.jpg",alt:"one dollar"})),(0,r.kt)("p",null,'Additionally, a digital item like a "purple magic sword" in a game may be fungible with another\nvisually identical sword if all the player cares about is the looks of their character. But if the\nother sword has a different function, and that function influences the outcome of an adventure the\nplayer is about to embark on, then visually identical swords are absolutely non-fungible.'),(0,r.kt)("p",null,"Bearing that in mind, the simplest explanation of NFTs is that ",(0,r.kt)("strong",{parentName:"p"},'NFTs are rows of arbitrary,\nproject-specific, and non-interchangeable data that can be cryptographically proven to "belong" to\nsomeone'),". This data can be anything - concert tickets, attendance badges, simple words, avatars,\nplots of land in a metaverse, audio clips, house deeds, mortgages, and more."),(0,r.kt)("h2",{id:"nft-standards"},"NFT Standards"),(0,r.kt)("p",null,'A general-purpose blockchain is not built to natively understand the concept of NFTs. It is only\nnatively aware and optimized for its own native tokens, but implementations built on such a chain\nare essentially "hacks".'),(0,r.kt)("p",null,'For example, Ethereum is a general-purpose blockchain that does not have the concept of "tokens"\n(fungible or not) built-in. Tokens in Ethereum are essentially spreadsheets of information to be\ninterpreted and read in a certain way by various user interfaces. This ',(0,r.kt)("em",{parentName:"p"},"way")," in which they should\nread them is called a ",(0,r.kt)("em",{parentName:"p"},"standard"),"."),(0,r.kt)("p",null,"The most widespread fungible token standard you may have heard of is ERC20, while the most\nwidespread NFT standard is ERC721, followed closely by ERC1155. The downside of having to define\nthese standards is that they are always instructions for how to read a spreadsheet pretending to\nserve information in a certain way, which by definition cannot be optimized. For this reason, even\non a good day of extremely low network congestion, interactions with NFTs on any EVM chain will cost\na few dollars but were on average around $100 per interaction (transfer, mint, sale) in 2021 on\nEthereum."),(0,r.kt)("p",null,"This prevents use cases that go beyond the current craze of ",(0,r.kt)("em",{parentName:"p"},"digital dust gathering NFTs"),' on\nEthereum - profile pictures, generative "look once and then put away" art, ',(0,r.kt)("a",{parentName:"p",href:"ens"},"ENS")," addresses, and\n",(0,r.kt)("a",{parentName:"p",href:"https://poap.xyz/"},"proof of attendance badges")," (which have since moved to the xDAI chain to save on\ngas fees)."),(0,r.kt)("h4",{id:"a-typical-nft-on-ethereum"},"A typical ",(0,r.kt)("a",{parentName:"h4",href:"https://opensea.io/assets/ethereum/0x2127fe7ffce4380459cced92f2d4793f3af094a4/12598"},"NFT on Ethereum")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"samurai nft",src:a(78101).Z,width:"506",height:"507"})),(0,r.kt)("p",null,"For the sake of comparison, we can refer to these as NFTs 1.0: static NFTs that are almost\nexclusively image-based collectibles of varying rarity."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nfts-20-nfts-in-polkadot--kusama"},"NFTs 2.0: NFTs in Polkadot & Kusama"),(0,r.kt)("p",null,"This is where Polkadot's technology shines and\nwhere NFTs 2.0 come into play. By allowing\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"heterogeneous application-specific shards")," to exist, builders can natively\noptimize for complex NFT use cases without tradeoffs that would make interacting with the system\nprohibitively inefficient and expensive in other environments."),(0,r.kt)("p",null,"The following NFT solutions exist and are under development in the Polkadot and/or Kusama\necosystems:"),(0,r.kt)("h3",{id:"unique-network"},"Unique network"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://unique.network/"},"Unique network"),", an NFT-specific blockchain offering innovations such as\nsponsored transactions, bundling fungible tokens with non-fungibles, and splitting NFTs into\nfungible tokens for partial ownership."),(0,r.kt)("p",null,"Unique Network have launched two NFT projects to date: Substrapunks as part of\n",(0,r.kt)("a",{parentName:"p",href:"https://hackusama.devpost.com/"},"Hackusama"),", and Chelobricks as a promotion during\n",(0,r.kt)("a",{parentName:"p",href:"https://decoded.polkadot.network/"},"Polkadot Decoded"),"."),(0,r.kt)("p",null,"Unique Network focuses on B2B use cases, aiming to be an infrastructure provider for others to build\non, rather than entering the NFT space themselves as an end-product."),(0,r.kt)("p",null,"Unique Network aims to make their marketplace technology open-source and whitelabel-friendly. In\ntheory, it should be trivial to set up a new marketplace for your project using Unique's technology.\nUnique network aims to be a parachain on Polkadot, and Quartz is their Kusama counterpart."),(0,r.kt)("h3",{id:"rmrk"},"RMRK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK")," is a set of NFT 2.0 standards developed in three distinct code flavors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Colored_Coins"},'"Colored coins"'),' approach, as on Bitcoin, originally\ndeveloped as a "hack" on the Kusama chain. This is now deprecated, and it is recommended\nimplementers use any of the other options.'),(0,r.kt)("li",{parentName:"ol"},"Solidity contracts, compatible with any EVM blockchain in and outside the Polkadot ecosystem.\nDocumented ",(0,r.kt)("a",{parentName:"li",href:"https://evm.rmrk.app"},"here")),(0,r.kt)("li",{parentName:"ol"},"Rust code (Substrate pallets), compatible with any Substrate chain. Code is available\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate"},"here"),".")),(0,r.kt)("p",null,"Additionally, two more flavors are in development:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://astar.network/"},"Astar")," are developing the ink! version of RMRK:\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-ink"},"code here"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.gear-tech.io/"},"Gear Technologies")," are developing the Gear implementation:\n",(0,r.kt)("a",{parentName:"li",href:"https://wiki.gear-tech.io/docs/examples/rmrk/"},"code and docs here"),".")),(0,r.kt)("p",null,'The RMRK NFT 2.0 standards are a set of "NFT legos", primitives that, when put together, allow a\nbuilder to compose an NFT system of arbitrary complexity without smart contracts.'),(0,r.kt)("h4",{id:"nft-legos"},"NFT Legos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"NFTs can own other NFTs, NFTs can equip other NFTs for visual change"),(0,r.kt)("li",{parentName:"ol"},"NFTs can have multiple resources (different outputs based on context and resource priority)"),(0,r.kt)("li",{parentName:"ol"},"NFTs can have on-chain emotes (reactions) for price discovery and social mechanics"),(0,r.kt)("li",{parentName:"ol"},"NFTs have conditional rendering (e.g. show Mona Lisa as blushing if she got 50 kissy \ud83d\ude18 emoji)"),(0,r.kt)("li",{parentName:"ol"},"NFTs can be governed by the community via fungible shareholder-tokens (fractionalization of NFTs)")),(0,r.kt)("h4",{id:"nft-from-kanaria"},"NFT from ",(0,r.kt)("a",{parentName:"h4",href:"https://kanaria.rmrk.app"},"Kanaria")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kanaria.png",src:a(19379).Z,width:"1891",height:"799"})),(0,r.kt)("admonition",{title:"Multi-resource NFTs",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'A multi-resource NFT (gif of statue, and SVG-composable dynamic NFT in one) that can also equip\nother NFTs from within its "inventory".')),(0,r.kt)("p",null,"Two marketplaces for RMRK-based NFTs exist with hundreds of projects already launched:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://singular.rmrk.app"},"Singular"),", the official marketplace")),(0,r.kt)("p",null,"For a complete introduction into RMRK, see ",(0,r.kt)("a",{parentName:"p",href:"https://url.rmrk.app/wasmconf"},"this presentation")," or\nread ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rmrk.app"},"the non-technical docs"),"."),(0,r.kt)("h3",{id:"efinity"},"Efinity"),(0,r.kt)("p",null,"Spearheaded by ",(0,r.kt)("a",{parentName:"p",href:"https://enjin.io"},"Enjin"),", the authors of Ethereum's ERC1155 standard and makers of\nthe Enjin wallet and Unity plugin, which allows easy implementation of NFTs into 3D games, Efinity\nis an NFT bridging chain coming to Kusama and Polkadot in 2022."),(0,r.kt)("p",null,"They plan to build a ",(0,r.kt)("em",{parentName:"p"},"paratoken")," which would be a standard for token migration across different\nparachains in the Polkadot ecosystem, but also into and out of Ethereum and other EVM systems."),(0,r.kt)("h3",{id:"astar"},"Astar"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://astar.network"},"Astar Network")," and its sister network\n",(0,r.kt)("a",{parentName:"p",href:"https://shiden.astar.network"},"Shiden Network"),' are the smart contract infrastructure in the Polkadot\nEcosystem. Astar Ecosystem ("Astar") supports NFTs developed with EVM smart contracts and WASM smart\ncontracts.'),(0,r.kt)("p",null,"Astar has all toolings available that every EVM NFT developer knows. The availability of those\ntoolings makes the onboarding to Astar networks very attractive to any developer looking to explore\nthe Polkadot Ecosystem. Astar has an active community of artists and NFT enthusiasts. Besides\nsupporting all EVM toolings, Astar also bootstrapped the WASM smart contract environment for NFT\ndevelopers writing smart contracts with ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink"},"ink!")," based on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md"},"PSP34")," (Polkadot Standards Proposals)."),(0,r.kt)("p",null,"The main advantage of having a multi-virtual machine environment for NFT developers is that it will\ngive more possibilities to the builders for the use case they are developing. With the support of\nWASM smart contracts, developers can develop solutions like ",(0,r.kt)("a",{parentName:"p",href:"./learn-nft#rmrk"},"RMRK")," with smart\ncontracts."),(0,r.kt)("h3",{id:"moonbeam"},"Moonbeam"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," and its Kusama counterpart Moonriver are full EVM deployments\nwith Ethereum RPC endpoints."),(0,r.kt)("p",null,"This means that the entire toolkit offered to other EVM chains (stacks like Hardhat, Remix, Truffle,\nMetamask, etc.) are available to Moonriver / Moonbeam users and developers, giving it a noticeable\nhead start in attracting existing userbases."),(0,r.kt)("p",null,"Several dozen high profile teams are launching their products (or re-launching) on Moonriver /\nMoonbeam, however, it is essential to note that Moonbeam is an EVM chain and will therefore suffer\nfrom the same limitations as any other EVM chain in regards to customization and feature-richness of\nNFTs."),(0,r.kt)("p",null,"A notable advantage, however, is that Moonriver / Moonbeam is still a Substrate chain, meaning\nintegration of custom pallets into the runtime is still possible, making NFT specific optimizations\nat the chain runtime level a reliable way to keep EVM compatibility of tools while at the same time\noptimizing storage and interactions for rich NFTs."),(0,r.kt)("h3",{id:"uniques"},"Uniques"),(0,r.kt)("p",null,"Uniques is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"FRAME pallet"),"\ndeployed on the Statemint and Statemine system parachains. It implements the most basic kind of NFT\n-- a data record referencing some metadata. This metadata reference is mutable until frozen, so NFTs\nand their classes (entities derived from) are mutable unless specifically made immutable by the\nissuer."),(0,r.kt)("p",null,"Uniques takes a very bare-bones approach on purpose, to keep the Statemine / Statemint chain a\nsimple balance-keeping chain for both fungible and non-fungibles."),(0,r.kt)("p",null,"These NFTs can be viewed and interacted with on ",(0,r.kt)("a",{parentName:"p",href:"https://singular.app"},"RMRK's Singular platform"),", by\nswitching the top right menu from Kusama to Statemine or Statemint."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nft-statemine",src:a(74343).Z,width:"2110",height:"617"})),(0,r.kt)("p",null,"The can also be interacted with directly through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-statemine-rpc.paritytech.net#/extrinsics"},"extrinsics tab of Statemine"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uniques.png",src:a(4721).Z,width:"997",height:"608"})),(0,r.kt)("h3",{id:"basilisk"},"Basilisk"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bsx.fi/"},"Basilisk")," is a Kusama parachain that provides liquidity for the ecosystem. It also\nhas a full-featured NFT platform based on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"Uniques pallet"),". One of the key\nfeatures of Basilisk is that it allows minting NFTs with a royalty fee. This royalty fee is\ndistributed to the original creator of the NFT via the runtime pallet. Additionally\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/Basilisk-node/tree/master/pallets/marketplace"},"Basilisk offers a feature"),"\nthat allows creating a buy order for a specific NFT."),(0,r.kt)("p",null,"These NFTs can be viewed and interacted instantly on ",(0,r.kt)("a",{parentName:"p",href:"https://kodadot.xyz"},"KodaDot"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nft-basilisk",src:a(70964).Z,width:"3358",height:"1564"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bridging"},"Bridging"),(0,r.kt)("p",null,"Bridging to and from Substrate chains and EVM chains takes much effort but is a highly desired\nfeature in the NFT industry. Merging the collector and customer base has significant implications,\nso multiple projects focus on making this possible."),(0,r.kt)("p",null,"Apart from RMRK (Substrate-to-Substrate seamless teleportation natively with ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCMP"),")\nand Efinity (Paratoken), the following efforts are underway:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mynft.com/"},(0,r.kt)("strong",{parentName:"a"},"MyNFT")),": an EVM to EVM bridging effort."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Simplification bridge: a bridge developed during the\n",(0,r.kt)("a",{parentName:"li",href:"https://rmrk.devpost.com"},"RMRK hackathon")," for porting RMRK NFTs into simplified IOUs on EVM\nchains")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[1]",": ",(0,r.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/l/liars-poker.asp"},"Investopedia")),(0,r.kt)("li",{parentName:"ul"},"[2]",":\n",(0,r.kt)("a",{parentName:"li",href:"https://unique.network/blog/chelobricks-making-waves-with-10-000-substrate-based-nfts/"},"Unique Network's Chelobrick"))))}u.isMDXComponent=!0},19379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kanaria-55b0060679c6303db0fc91f5c402ba02.png"},70964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nft-basilisk-654977e2e97885e796857fc2e2add909.png"},74343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nft-statemine-48ec78c3fcc8199d7d9164959424d5e3.png"},78101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/samurai-830479330323f7feeae0b981479ad9cc.png"},4721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"}}]);