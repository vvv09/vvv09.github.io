if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,r)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const a=i=>s(i,l),c={module:{uri:l},exports:o,require:a};e[l]=Promise.all(n.map((i=>c[i]||a(i)))).then((i=>(r(...i),o)))}}define(["./workbox-ca2b596c"],(function(i){"use strict";i.setCacheNameDetails({prefix:"projact-tabula-design"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"css/107.f2f5479f.css",revision:null},{url:"css/263.81c40a19.css",revision:null},{url:"css/393.13ee0872.css",revision:null},{url:"css/405.f0e571cf.css",revision:null},{url:"css/495.70245cd2.css",revision:null},{url:"css/521.b51769a3.css",revision:null},{url:"css/587.00612595.css",revision:null},{url:"css/833.3347ab42.css",revision:null},{url:"css/984.f89def88.css",revision:null},{url:"css/app.6a9f98e1.css",revision:null},{url:"css/vendor.18bf2590.css",revision:null},{url:"favicon.ico",revision:"9bede12e33e54e235c3d5a0ed5f7a7ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.53abdaab.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c4a50508.woff2",revision:null},{url:"fonts/la-brands-400.3a8109c4.woff2",revision:null},{url:"fonts/la-brands-400.925b340f.woff",revision:null},{url:"fonts/la-regular-400.8dc1cedf.woff2",revision:null},{url:"fonts/la-regular-400.aa859c0d.woff",revision:null},{url:"fonts/la-solid-900.3efd5ba1.woff2",revision:null},{url:"fonts/la-solid-900.89363487.woff",revision:null},{url:"icons/apple-icon-120x120.png",revision:"96e74b2440f3a71cdea4d4e0fd80f2ee"},{url:"icons/apple-icon-152x152.png",revision:"21d546d0e89ac3720534d5c7ce82685d"},{url:"icons/apple-icon-167x167.png",revision:"8830ece2593c2f056f978dad6e151292"},{url:"icons/apple-icon-180x180.png",revision:"41ef1139e3eec76d4db46159fc405c19"},{url:"icons/apple-launch-1125x2436.png",revision:"ffdc7626b442eeabd56f297bb7d6162f"},{url:"icons/apple-launch-1170x2532.png",revision:"ba37996d46f0b139308dcd93111f1ff3"},{url:"icons/apple-launch-1242x2208.png",revision:"23a0ec46a19af9353b7078a13acf19a2"},{url:"icons/apple-launch-1242x2688.png",revision:"f6d61ea1afbb5b93704b3755de9639f9"},{url:"icons/apple-launch-1284x2778.png",revision:"53d26033f60044a0be7a92fb7bd49919"},{url:"icons/apple-launch-1536x2048.png",revision:"26917989241a5d6c8284596fc4b22292"},{url:"icons/apple-launch-1620x2160.png",revision:"b3ad95b9e8aa15698732f6aff6244fc8"},{url:"icons/apple-launch-1668x2224.png",revision:"493857915d6ee6649a1d3803b70879e6"},{url:"icons/apple-launch-1668x2388.png",revision:"38913a2df6097090aacaee73da36b59d"},{url:"icons/apple-launch-750x1334.png",revision:"2c2c94cf7fbc11fafa7d727709899de3"},{url:"icons/apple-launch-828x1792.png",revision:"4ad704d3eada1ef6b486323bf37d8b70"},{url:"icons/favicon-128x128.png",revision:"e18a00706cbf5d520ca1e1d6d1ecf8bf"},{url:"icons/favicon-16x16.png",revision:"ef37993602f777d81060c35952307bf3"},{url:"icons/favicon-32x32.png",revision:"4df8454b0f42c044dc8940a83154792d"},{url:"icons/favicon-96x96.png",revision:"53e801f59408bf320bd870cbc483c84f"},{url:"icons/icon-128x128.png",revision:"e18a00706cbf5d520ca1e1d6d1ecf8bf"},{url:"icons/icon-192x192.png",revision:"ed268318aabb43463e3167d223a5fddb"},{url:"icons/icon-256x256.png",revision:"9e6c73b40a05c877454d9f1b6c84cb72"},{url:"icons/icon-384x384.png",revision:"e8871435d247821affbaf86cc7b0a116"},{url:"icons/icon-512x512.png",revision:"312e3f60ade04fb7e0d11ad95662e011"},{url:"icons/ms-icon-144x144.png",revision:"804f9b152506e11fb366b741324bc457"},{url:"icons/safari-pinned-tab.svg",revision:"7e1587942bdb753d3e3ac5c3d53eaf42"},{url:"images/directories/correspondences.jpg",revision:"1dca06f42626d6f6cb6b07a74165cd39"},{url:"images/directories/numbers.jpg",revision:"121bf810f3a24255591dfcea6e5a1592"},{url:"images/directories/spells.jpg",revision:"78ca89dcf306451bb1705dbe6b0c7240"},{url:"images/directories/tarot.jpg",revision:"f0ccd7095d5b1d816a219eb8b6b4ccbc"},{url:"images/directories/tides.jpg",revision:"48b7c6314af192e809de5768b19e0436"},{url:"images/spells/1.jpg",revision:"334c91b4e0193fd3bef60cf21896369a"},{url:"images/tarot/bota/b_0.jpg",revision:"7bb9941a4a50a0b4d0de64cf6917348e"},{url:"images/tarot/bota/b_i.jpg",revision:"fb018380311cb73d92f1c9a67af733ae"},{url:"images/tarot/bota/b_ii.jpg",revision:"a9a0a157bac88e56695b297f0f762d33"},{url:"images/tarot/bota/b_iii.jpg",revision:"baaad666ac84e055c3224f6c594be7d0"},{url:"images/tarot/bota/b_iv.jpg",revision:"9956bf0ad03b9cc2e20f6667447c7a2e"},{url:"images/tarot/bota/b_ix.jpg",revision:"33554d44c7062dfe6428d9f3e1832c6b"},{url:"images/tarot/bota/b_v.jpg",revision:"d5e309337961d7acd820bb85961b7734"},{url:"images/tarot/bota/b_vi.jpg",revision:"375f92301161a7cb5a53dc6162ff3052"},{url:"images/tarot/bota/b_vii.jpg",revision:"3edc6b9d930689a2145fcceefa4d5604"},{url:"images/tarot/bota/b_viii.jpg",revision:"5b7b11f10f72aa6ae2fe89901c2ff1a8"},{url:"images/tarot/bota/b_x.jpg",revision:"f1715904d71286ac667ed17145eb472d"},{url:"images/tarot/bota/b_xi.jpg",revision:"8594b0f45c9a997e63e403a4ca433a65"},{url:"images/tarot/bota/b_xii.jpg",revision:"60851ae59a0525319f4e98ea69115fb6"},{url:"images/tarot/bota/b_xiii.jpg",revision:"82289c9b4a3a85d2bbeb44ec17770d2d"},{url:"images/tarot/bota/b_xiv.jpg",revision:"55de95b50a9597099028381a05b64b8c"},{url:"images/tarot/bota/b_xix.jpg",revision:"c0efb57fc04e5fc0494d867f7d7f330c"},{url:"images/tarot/bota/b_xv.jpg",revision:"0879f794ebeba1e5074339d0acddcfa7"},{url:"images/tarot/bota/b_xvi.jpg",revision:"156fc38403b3474c37066370e652c14f"},{url:"images/tarot/bota/b_xvii.jpg",revision:"26b1c176159c2c695cd510d6bcd51a78"},{url:"images/tarot/bota/b_xviii.jpg",revision:"77ee01e1aaafcea201bee3df1649a3a3"},{url:"images/tarot/bota/b_xx.jpg",revision:"0c0db87d597cb939dbbdb04b5d91e218"},{url:"images/tarot/bota/b_xxi.jpg",revision:"dd5093271dc8c82c47dd374d9419227d"},{url:"img/postgres.c56c146c.png",revision:null},{url:"img/swagger.a70f5047.png",revision:null},{url:"index.html",revision:"8065ba9e9eb518b066dd3b4e86e68f09"},{url:"js/107.63990f86.js",revision:null},{url:"js/113.3a91cda6.js",revision:null},{url:"js/126.16e800ce.js",revision:null},{url:"js/193.0f242bc9.js",revision:null},{url:"js/195.9f030482.js",revision:null},{url:"js/207.3ac03853.js",revision:null},{url:"js/220.7dc5bdb1.js",revision:null},{url:"js/263.210035d7.js",revision:null},{url:"js/266.f7db5856.js",revision:null},{url:"js/304.d6ba011a.js",revision:null},{url:"js/314.c89d29ba.js",revision:null},{url:"js/316.de4dc01e.js",revision:null},{url:"js/393.cdfb3d2e.js",revision:null},{url:"js/405.0b1537a6.js",revision:null},{url:"js/454.8bb3c18a.js",revision:null},{url:"js/455.72fdf474.js",revision:null},{url:"js/462.e14e7a25.js",revision:null},{url:"js/495.ce7fda08.js",revision:null},{url:"js/521.54cda150.js",revision:null},{url:"js/545.30fee574.js",revision:null},{url:"js/587.fe21178f.js",revision:null},{url:"js/600.e8284abd.js",revision:null},{url:"js/672.bd350e07.js",revision:null},{url:"js/706.89ac8088.js",revision:null},{url:"js/735.05bbb4a4.js",revision:null},{url:"js/772.5ced4d52.js",revision:null},{url:"js/793.81dc01bf.js",revision:null},{url:"js/833.58d68a0e.js",revision:null},{url:"js/849.b29e47a6.js",revision:null},{url:"js/860.35f359b7.js",revision:null},{url:"js/984.30cf4189.js",revision:null},{url:"js/app.48f56ad4.js",revision:null},{url:"js/chunk-common.1e05a461.js",revision:null},{url:"js/vendor.1bb6200e.js",revision:null},{url:"manifest.json",revision:"256ed8f1ac190980dafb546e12941b59"},{url:"sounds/bell-tic.mp3",revision:"ddbce37b0b2f6619079ef6537228eebb"},{url:"sounds/finish_session_bell.mp3",revision:"28fdbf2a33a0688405c971995cf3254a"}],{}),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
