if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const o=e=>s(e,n),c={module:{uri:n},exports:a,require:o};i[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-ca2b596c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"projact-tabula-design"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/119.70245cd2.css",revision:null},{url:"css/141.3044e9e7.css",revision:null},{url:"css/171.98f38ccb.css",revision:null},{url:"css/23.49423dc4.css",revision:null},{url:"css/393.13ee0872.css",revision:null},{url:"css/502.f89def88.css",revision:null},{url:"css/521.00612595.css",revision:null},{url:"css/545.af4c9aca.css",revision:null},{url:"css/601.3c3eb930.css",revision:null},{url:"css/701.e2607f7d.css",revision:null},{url:"css/720.a9a588e1.css",revision:null},{url:"css/726.c4938974.css",revision:null},{url:"css/783.c0cc9e54.css",revision:null},{url:"css/833.3347ab42.css",revision:null},{url:"css/893.98f38ccb.css",revision:null},{url:"css/app.d58f133c.css",revision:null},{url:"css/vendor.6a27f3ef.css",revision:null},{url:"favicon.ico",revision:"9bede12e33e54e235c3d5a0ed5f7a7ec"},{url:"fonts/Alkaios.331cb248.woff",revision:null},{url:"fonts/Bitter-Medium.a97ad14c.woff",revision:null},{url:"fonts/DrugulinCLM-Bold.0f2f79bb.woff",revision:null},{url:"fonts/centurygothic.b194aa2b.ttf",revision:null},{url:"fonts/esoterica.ad216a15.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.53abdaab.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c4a50508.woff2",revision:null},{url:"fonts/icomoon.903dceaa.ttf",revision:null},{url:"fonts/icomoon.dd57e518.eot",revision:null},{url:"fonts/icomoon.e5e7b1b3.woff",revision:null},{url:"fonts/la-brands-400.3a8109c4.woff2",revision:null},{url:"fonts/la-brands-400.925b340f.woff",revision:null},{url:"fonts/la-regular-400.8dc1cedf.woff2",revision:null},{url:"fonts/la-regular-400.aa859c0d.woff",revision:null},{url:"fonts/la-solid-900.3efd5ba1.woff2",revision:null},{url:"fonts/la-solid-900.89363487.woff",revision:null},{url:"icons/apple-icon-120x120.png",revision:"96e74b2440f3a71cdea4d4e0fd80f2ee"},{url:"icons/apple-icon-152x152.png",revision:"21d546d0e89ac3720534d5c7ce82685d"},{url:"icons/apple-icon-167x167.png",revision:"8830ece2593c2f056f978dad6e151292"},{url:"icons/apple-icon-180x180.png",revision:"41ef1139e3eec76d4db46159fc405c19"},{url:"icons/apple-launch-1125x2436.png",revision:"ffdc7626b442eeabd56f297bb7d6162f"},{url:"icons/apple-launch-1170x2532.png",revision:"ba37996d46f0b139308dcd93111f1ff3"},{url:"icons/apple-launch-1242x2208.png",revision:"23a0ec46a19af9353b7078a13acf19a2"},{url:"icons/apple-launch-1242x2688.png",revision:"f6d61ea1afbb5b93704b3755de9639f9"},{url:"icons/apple-launch-1284x2778.png",revision:"53d26033f60044a0be7a92fb7bd49919"},{url:"icons/apple-launch-1536x2048.png",revision:"26917989241a5d6c8284596fc4b22292"},{url:"icons/apple-launch-1620x2160.png",revision:"b3ad95b9e8aa15698732f6aff6244fc8"},{url:"icons/apple-launch-1668x2224.png",revision:"493857915d6ee6649a1d3803b70879e6"},{url:"icons/apple-launch-1668x2388.png",revision:"38913a2df6097090aacaee73da36b59d"},{url:"icons/apple-launch-750x1334.png",revision:"2c2c94cf7fbc11fafa7d727709899de3"},{url:"icons/apple-launch-828x1792.png",revision:"4ad704d3eada1ef6b486323bf37d8b70"},{url:"icons/favicon-128x128.png",revision:"e18a00706cbf5d520ca1e1d6d1ecf8bf"},{url:"icons/favicon-16x16.png",revision:"ef37993602f777d81060c35952307bf3"},{url:"icons/favicon-32x32.png",revision:"4df8454b0f42c044dc8940a83154792d"},{url:"icons/favicon-96x96.png",revision:"53e801f59408bf320bd870cbc483c84f"},{url:"icons/icon-128x128.png",revision:"e18a00706cbf5d520ca1e1d6d1ecf8bf"},{url:"icons/icon-192x192.png",revision:"ed268318aabb43463e3167d223a5fddb"},{url:"icons/icon-256x256.png",revision:"9e6c73b40a05c877454d9f1b6c84cb72"},{url:"icons/icon-384x384.png",revision:"e8871435d247821affbaf86cc7b0a116"},{url:"icons/icon-512x512.png",revision:"312e3f60ade04fb7e0d11ad95662e011"},{url:"icons/ms-icon-144x144.png",revision:"804f9b152506e11fb366b741324bc457"},{url:"icons/safari-pinned-tab.svg",revision:"7e1587942bdb753d3e3ac5c3d53eaf42"},{url:"images/bg1.jpeg",revision:"bf56ce7ca43107c7f88d6e7ec723dd34"},{url:"images/bg2.jpeg",revision:"b4092a3471d1e3646e66b5f3c7113883"},{url:"images/bg3.jpeg",revision:"eb03c043bbcf2d0078c7def5b0e6f478"},{url:"images/diary-mock/1.jpg",revision:"9474a27698a3fd9247a6b2cbf4119065"},{url:"images/diary-mock/2.jpg",revision:"37dfa74e68a222f0fea8a16cd5b62c41"},{url:"images/diary-mock/3.jpg",revision:"bcc2600e8525d6d15c4c4a364ea6db16"},{url:"images/diary-mock/4.jpg",revision:"404f30f8e9aedc173ec02d9a7f3299a4"},{url:"images/diary-mock/7.jpg",revision:"08e2dd227666a7fb8fdb0a09f2f6c9ce"},{url:"images/diary-mock/8.jpg",revision:"9138b6204c0022f0fff4ce66a166c87f"},{url:"images/diary-mock/9.jpg",revision:"1a21282de3425a44e2aa4a6e7bbb1498"},{url:"images/directories/correspondences.jpg",revision:"1dca06f42626d6f6cb6b07a74165cd39"},{url:"images/directories/numbers.jpg",revision:"121bf810f3a24255591dfcea6e5a1592"},{url:"images/directories/spells.jpg",revision:"78ca89dcf306451bb1705dbe6b0c7240"},{url:"images/directories/tarot.jpg",revision:"f0ccd7095d5b1d816a219eb8b6b4ccbc"},{url:"images/directories/tides.jpg",revision:"48b7c6314af192e809de5768b19e0436"},{url:"images/practices/aa-cover-default.jpg",revision:"7ffe0a316542ef30642d90b7b9ce0bdf"},{url:"images/practices/flo-cover-default.png",revision:"094077509046e6396406f91d771aa74a"},{url:"images/practices/gd-cover-default.jpg",revision:"739b93de571537133597e7156a8276c3"},{url:"images/practices/lrp/cover.jpg",revision:"8f57d2772155e7d97415f8e9c3fff647"},{url:"images/practices/yoga-cover-default.jpg",revision:"4fa800e97070b1f6978e2cf444320a69"},{url:"images/spells/1.jpg",revision:"334c91b4e0193fd3bef60cf21896369a"},{url:"images/spells/2.jpg",revision:"8e2df491a09e7f309555dccb5f77380e"},{url:"images/spells/3.jpg",revision:"1344447d5c2002e83afdba5dc5bef643"},{url:"images/tarot/bota/b_0.jpg",revision:"7bb9941a4a50a0b4d0de64cf6917348e"},{url:"images/tarot/bota/b_i.jpg",revision:"fb018380311cb73d92f1c9a67af733ae"},{url:"images/tarot/bota/b_ii.jpg",revision:"a9a0a157bac88e56695b297f0f762d33"},{url:"images/tarot/bota/b_iii.jpg",revision:"baaad666ac84e055c3224f6c594be7d0"},{url:"images/tarot/bota/b_iv.jpg",revision:"9956bf0ad03b9cc2e20f6667447c7a2e"},{url:"images/tarot/bota/b_ix.jpg",revision:"33554d44c7062dfe6428d9f3e1832c6b"},{url:"images/tarot/bota/b_v.jpg",revision:"d5e309337961d7acd820bb85961b7734"},{url:"images/tarot/bota/b_vi.jpg",revision:"375f92301161a7cb5a53dc6162ff3052"},{url:"images/tarot/bota/b_vii.jpg",revision:"3edc6b9d930689a2145fcceefa4d5604"},{url:"images/tarot/bota/b_viii.jpg",revision:"5b7b11f10f72aa6ae2fe89901c2ff1a8"},{url:"images/tarot/bota/b_x.jpg",revision:"f1715904d71286ac667ed17145eb472d"},{url:"images/tarot/bota/b_xi.jpg",revision:"8594b0f45c9a997e63e403a4ca433a65"},{url:"images/tarot/bota/b_xii.jpg",revision:"60851ae59a0525319f4e98ea69115fb6"},{url:"images/tarot/bota/b_xiii.jpg",revision:"82289c9b4a3a85d2bbeb44ec17770d2d"},{url:"images/tarot/bota/b_xiv.jpg",revision:"55de95b50a9597099028381a05b64b8c"},{url:"images/tarot/bota/b_xix.jpg",revision:"c0efb57fc04e5fc0494d867f7d7f330c"},{url:"images/tarot/bota/b_xv.jpg",revision:"0879f794ebeba1e5074339d0acddcfa7"},{url:"images/tarot/bota/b_xvi.jpg",revision:"156fc38403b3474c37066370e652c14f"},{url:"images/tarot/bota/b_xvii.jpg",revision:"26b1c176159c2c695cd510d6bcd51a78"},{url:"images/tarot/bota/b_xviii.jpg",revision:"77ee01e1aaafcea201bee3df1649a3a3"},{url:"images/tarot/bota/b_xx.jpg",revision:"0c0db87d597cb939dbbdb04b5d91e218"},{url:"images/tarot/bota/b_xxi.jpg",revision:"dd5093271dc8c82c47dd374d9419227d"},{url:"img/postgres.c56c146c.png",revision:null},{url:"img/swagger.a70f5047.png",revision:null},{url:"index.html",revision:"5a377679528c43788dd69d278f720b81"},{url:"js/119.fc05efb9.js",revision:null},{url:"js/126.0b49fe7b.js",revision:null},{url:"js/141.130edd5c.js",revision:null},{url:"js/171.c87b3202.js",revision:null},{url:"js/193.0f242bc9.js",revision:null},{url:"js/207.3ac03853.js",revision:null},{url:"js/225.272d04b3.js",revision:null},{url:"js/23.1e773594.js",revision:null},{url:"js/260.4710ef8b.js",revision:null},{url:"js/266.5f302243.js",revision:null},{url:"js/287.2e32ae28.js",revision:null},{url:"js/304.7c8bfd65.js",revision:null},{url:"js/347.2929f130.js",revision:null},{url:"js/393.313a082f.js",revision:null},{url:"js/435.48134e51.js",revision:null},{url:"js/454.0f5488e4.js",revision:null},{url:"js/502.175b9a51.js",revision:null},{url:"js/521.f3698d51.js",revision:null},{url:"js/545.60827171.js",revision:null},{url:"js/595.de394aff.js",revision:null},{url:"js/601.39220ccb.js",revision:null},{url:"js/672.14b60b70.js",revision:null},{url:"js/701.d09003e0.js",revision:null},{url:"js/720.4ceaaaa7.js",revision:null},{url:"js/726.21d65855.js",revision:null},{url:"js/735.05bbb4a4.js",revision:null},{url:"js/764.a89b6e23.js",revision:null},{url:"js/774.3589df83.js",revision:null},{url:"js/783.a190380f.js",revision:null},{url:"js/793.81dc01bf.js",revision:null},{url:"js/833.35f38a80.js",revision:null},{url:"js/849.b29e47a6.js",revision:null},{url:"js/893.af583ae0.js",revision:null},{url:"js/939.a915a7df.js",revision:null},{url:"js/949.ebdd5531.js",revision:null},{url:"js/chunk-common.e0f612a1.js",revision:null},{url:"js/vendor.6f30d5bb.js",revision:null},{url:"manifest.json",revision:"256ed8f1ac190980dafb546e12941b59"},{url:"profile.jpg",revision:"d63a34b5ec0b3074c5416134a2f15795"},{url:"sounds/bell-tic.mp3",revision:"ddbce37b0b2f6619079ef6537228eebb"},{url:"sounds/finish_session_bell.mp3",revision:"28fdbf2a33a0688405c971995cf3254a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
