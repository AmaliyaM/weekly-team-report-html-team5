if(!self.define){let e,r={};const i=(i,c)=>(i=new URL(i+".js",c).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(r[d])return;let o={};const f=e=>i(e,d),n={module:{uri:d},exports:o,require:f};r[d]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(a(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./edit-profile",revision:"acb9e81e829a7db6eee9180157bf38b1"},{url:"_team-reports_header.scss",revision:"a74de1e3c3a003465e9558f6d178ab5c"},{url:"big-title-brush-background.png",revision:"ed79cfe6a2ef080a4157614c6f162ffa"},{url:"edit-member-info.html",revision:"8d5e50f58602d0b5feecf3c7cf2c7167"},{url:"fill-out-report.html",revision:"7761ce0e835ae5eb8bf8fcb78f5f9d41"},{url:"happy-greyed-out.svg",revision:"3b2d0ab608fe59b13e725e95b7ab927a"},{url:"index.html",revision:"77c4a715cce6afde5faeb8c1f4f0c336"},{url:"invite-your-team.html",revision:"53c453918230d96f23cffe1cfcf30003"},{url:"launch_guide_encourage.png",revision:"b98b7dc065fd1c942b119afb01ef68a5"},{url:"launch_guide_invite.png",revision:"36168b18c6cb4513c8e00e0e0ac4ab4a"},{url:"launch_guide_read.png",revision:"dbdde2d1067b6b3da2642aa33087d0ce"},{url:"launch_guide_remind.png",revision:"5f831ca8759430ae2208f95f3aa3c06e"},{url:"logo3.png",revision:"ce5db7207af88729987409ac03950421"},{url:"logo3bobg.png",revision:"d1a2a1c9876b711481f423c6b0d425ff"},{url:"main.js",revision:"3b211486a1195a9c682ed6feffce0e3c"},{url:"my-company.html",revision:"19d54d82462f8a14d3cd769c8edf1bbd"},{url:"my-reports.html",revision:"885380c4f8606995e037b50aa3fc9e10"},{url:"neutral-greyed-out.svg",revision:"4ebf05c1918e86f7174e423d54a62032"},{url:"sad-greyed-out.svg",revision:"4753e04f8434f8d3a22c5e0744078162"},{url:"sign-in.html",revision:"3d9604bc4d8c6996c40c091a03687c27"},{url:"team-reports.html",revision:"8aa29fd69f092ebb2a98f5d997a8cd4d"},{url:"very-happy-greyed-out.svg",revision:"9288a5ad211374200aa87fd275c8b0c1"},{url:"very-sad-greyed-out.svg",revision:"cbf9fad3e2a6f9278c2679e9d22ac661"},{url:"weekly-report-history.html",revision:"852408cdcbad0418ee0e8036bcb9150e"}],{})}));