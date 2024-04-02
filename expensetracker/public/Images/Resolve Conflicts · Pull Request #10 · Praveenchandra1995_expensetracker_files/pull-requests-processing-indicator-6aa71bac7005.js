"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["pull-requests-processing-indicator"],{40578:(e,t,r)=>{let n;function a(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function o(){return n?.locale??"en-US"}r.d(t,{Kd:()=>o,dU:()=>a}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,r)=>{r.d(t,{C:()=>o,x:()=>a});var n=r(71207);let a=n.n4?.readyState==="interactive"||n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),o=n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.iG?.addEventListener("load",e)})},18515:(e,t,r)=>{r.d(t,{$:()=>c,c:()=>l});var n=r(15205),a=r(40578),o=r(71207);function i(){let e=(0,a.dU)().featureFlags,t=e.map(e=>e.toUpperCase());return new Set(t)}let s=o.W6?i:(0,n.Z)(i);function l(e){return s().has(e.toUpperCase())}let c={isFeatureEnabled:l}},79697:(e,t,r)=>{let n;r.d(t,{YT:()=>h,qP:()=>f,yM:()=>m});var a=r(88149),o=r(86058),i=r(56363),s=r(43786);let{getItem:l}=(0,i.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,a.n)("octolytics");delete e.baseContext,n=new o.R(e)}catch(e){}function d(e){let t=(0,a.n)("octolytics").baseContext||{};if(t)for(let[e,r]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=r,delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let e=JSON.parse(atob(r.content));Object.assign(t,e)}let n=new URLSearchParams(window.location.search);for(let[e,r]of n)u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,s.B)().toString(),Object.assign(t,e)}function h(e){n?.sendPageView(d(e))}function f(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,a=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(a[e]=`${r}`);if(n){let t=e||"unknown";d(a),n.sendEvent(t,d(a))}}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},35785:(e,t,r)=>{var n=r(74898),a=r(85893),o=r(87623),i=r(42483),s=r(65379),l=r(88216),c=r(74121),u=r(97011),d=r(67294),h=r(59434),f=r(47658),m=r(44459),p=r(85529);let g={stale:!1,latest_unsynced_push_to_head_ref_at:null};function y({processingIndicatorUrl:e,repositoryId:t,pullRequestId:r}){let[n,s]=(0,d.useState)(g),l=(0,m.Z)(),c=(0,d.useCallback)(async()=>{try{let t=await (0,o.v)(e);if(t.ok){let e=await t.json();l()&&s(e)}}catch(e){l()&&s(g)}},[l,e]);(0,d.useEffect)(()=>{c()},[]);let{stale:u,latest_unsynced_push_to_head_ref_at:h}=n;return(0,a.jsx)(i.Z,{sx:{mt:-2},children:(0,a.jsx)(f.n,{appName:"pull-requests-processing-indicator",category:"render",metadata:{},children:(0,a.jsx)(v,{pullRequestId:r,repositoryId:t,stale:u,latest_unsynced_push_to_head_ref_at:h})})})}function v({pullRequestId:e,repositoryId:t,stale:r,latest_unsynced_push_to_head_ref_at:n}){let{sendAnalyticsEvent:o}=(0,h.z)();if(!r||!n)return null;let d=new Date,f=new Date(n),m=Math.round(d.getTime()-f.getTime())/1e3;return m<20||m>=86400?null:(o("pull_requests.processing_indicator","",{repositoryId:t,pullRequestId:e,secondsSinceLastPush:m}),(0,a.jsx)(s.Z,{"aria-label":"Recent push is still being processed, and will show up in a bit",direction:"s",children:(0,a.jsx)(l.r,{as:"a",href:"https://gh.io/pr-sync-in-progress",variant:"invisible",sx:{color:"fg.muted"},trailingVisual:p.LinkExternalIcon,children:(0,a.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",fontWeight:400},children:[(0,a.jsx)(c.Z,{size:"small",sx:{color:"fg.muted"}}),(0,a.jsx)(u.Z,{sx:{color:"fg.muted",fontSize:0,ml:2},children:"Processing updates"})]})})}))}try{y.displayName||(y.displayName="PullRequestsProcessingIndicatorWithDataFetching")}catch{}try{v.displayName||(v.displayName="PullRequestsProcessingIndicator")}catch{}(0,n.t)("pull-requests-processing-indicator",{Component:y})},83206:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},48968:(e,t,r)=>{r.d(t,{Ac:()=>o,Z_:()=>i,ev:()=>a});var n=r(67294);function a(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function o(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,a]=(0,n.useState)(!1),o=(0,n.useCallback)(()=>{a(!r)},[r,a]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),i(e,o),{ref:t,open:r,setOpen:a}}function i(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},74898:(e,t,r)=>{r.d(t,{t:()=>u});var n=r(83206);let a=new n.e;var o=r(85893),i=r(76006),s=r(60302),l=r(75069);let c=class ReactPartialElement extends s.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,a.getRegistration(t)),n=this.closest("react-partial-anchor");return(0,o.jsx)(l.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:n})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function u(e,t){a.register(e,t)}c=function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([i.Ih],c)},82914:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(56363);let{getItem:a,setItem:o,removeItem:i}=(0,n.Z)("localStorage"),s="REACT_PROFILING_ENABLED",l={enable:()=>o(s,"true"),disable:()=>i(s),isEnabled:()=>!!a(s)}},54508:(e,t,r)=>{r.d(t,{A7:()=>l,ko:()=>s,q1:()=>i});var n=r(15205),a=r(71207);let o=(0,n.Z)(function(){return a.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,n.Z)(function(){return a.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),s=(0,n.Z)(function(){return"enterprise"===o()}),l="webpack"},56363:(e,t,r)=>{r.d(t,{Z:()=>i,_:()=>s});var n=r(71207),a=r(43786);let o=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},r=n.iG,i=e=>e,s=e=>e){let l;try{if(!r)throw Error();l=r[e]||new o}catch{l=new o}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,a.b)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let r=l.getItem(e);if(!r)return null;let n=`${e}:expiry`,a=Number(l.getItem(n));if(a&&t>a)return d(e),d(n),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(r)}catch(e){return null}},setItem:function(e,r,n=new Date().getTime()){try{if(l.setItem(e,s(r)),t.ttl){let r=`${e}:expiry`,a=n+t.ttl;l.setItem(r,a.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},71207:(e,t,r)=>{r.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>a.iG,n4:()=>a.n4,ssrSafeLocation:()=>a.jX,zu:()=>a.zu});var n=r(60327),a=r(66199)},66199:(e,t,r)=>{r.d(t,{iG:()=>a,jX:()=>i,n4:()=>n,zu:()=>o});let n="undefined"==typeof document?void 0:document,a="undefined"==typeof window?void 0:window,o="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,r)=>{r.d(t,{Qg:()=>o,W6:()=>a,cF:()=>i});var n=r(66199);let a=void 0===n.n4,o=!a;function i(){return!!a||!!n.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,r)=>{r.d(t,{B:()=>h,b:()=>l});var n=r(71207),a=r(87274),o=r(54508),i=r(18515);let s=[];function l(e,t=!1,r=1){if(!0!==(0,i.c)("BROWSER_STATS_DISABLED")){if(r<0||r>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!n.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=h(),e.bundler=o.A7,Math.random()<r&&s.push(e),t?d():u()}}let c=null;async function u(){await a.C,null==c&&(c=window.requestIdleCallback(d))}function d(){if(c=null,!s.length)return;let e=n.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=function(e){let t=[],r=e.map(e=>JSON.stringify(e));for(;r.length>0;)t.push(function(e){let t=e.shift(),r=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let a=e.shift();r.push(a),n+=t}else break}return r}(r));return t}(s);for(let r of t)!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${r.join(",")}] }`);s=[]}function h(){return!!n.n4?.head?.querySelector('meta[name="user-staff"]')?.content}n.n4?.addEventListener("pagehide",d),n.n4?.addEventListener("visibilitychange",d)},59434:(e,t,r)=>{r.d(t,{w:()=>s,z:()=>i});var n=r(67294),a=r(79697),o=r(15470);function i(){let e=(0,n.useContext)(o.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:r,metadata:i}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,o={})=>{let s={react:!0,app_name:t,category:r,...i};(0,a.qP)(e,{...s,...o,target:n})},[t,r,i])}}function s(){let{sendAnalyticsEvent:e}=i();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},87623:(e,t,r)=>{function n(e,t={}){if(e.match(/^(https?:|\/\/)/))throw Error("Can not make cross-origin requests from verifiedFetch");let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r=t?.headers??{},a={...r,Accept:"application/json","Content-Type":"application/json"},o=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:o,headers:a})}r.d(t,{Q:()=>n,v:()=>a})},75069:(e,t,r)=>{r.d(t,{S:()=>m});var n=r(85893),a=r(67294),o=r(44100),i=r(12599),s=r(73216),l=r(89250),c=r(22877);function u({children:e,history:t}){let[r,o]=(0,a.useState)({location:t.location});return(0,c.g)(()=>t.listen(o),[t]),(0,n.jsx)(l.F0,{location:r.location,navigator:t,children:e})}try{u.displayName||(u.displayName="PartialRouter")}catch{}var d=r(80491),h=r(7533),f=r(48968);function m({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:m}){let p=a.useRef(),g=globalThis.window;p.current||(p.current=g?(0,h.l)({window:g}):(0,i.PP)({initialEntries:[{pathname:"/"}]}));let y=p.current,v=(0,f.ev)(m);return(0,n.jsx)(o.R,{appName:e,wasServerRendered:l,children:(0,n.jsx)(s.i,{history:y,routes:[],children:(0,n.jsxs)(u,{history:y,children:[(0,n.jsx)(r,{...t.props,...v}),(0,n.jsx)(d.P,{ssrError:c})]})})})}try{m.displayName||(m.displayName="PartialEntry")}catch{}},60302:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var n=r(85893),a=r(76006),o=r(20745),i=r(67294),s=r(82914),l=r(18448);function c(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:o.s,hydrateRoot:o.a};s.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,a=await this.getReactNode(t),l=(0,n.jsx)(i.StrictMode,{children:a});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:()=>{}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,62518,19))}logSSRError(e){if(l.t[e])return console.error("SSR failed with an expected error:",l.t[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ",r=e.stacktrace.map(e=>{let{function:r,filename:n,lineno:a,colno:o}=e,i=`${t} at ${r} (${n}:${a}:${o})`;return t=" ",i});return r.join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};c([a.fA],ReactBaseElement.prototype,"embeddedData",void 0),c([a.fA],ReactBaseElement.prototype,"ssrError",void 0),c([a.fA],ReactBaseElement.prototype,"reactRoot",void 0)}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_Spinner_Spinner_js-node_modules_primer_react_lib-es-a08228","ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_AppContextProvider_ts-809ab9"],()=>t(35785)),e.O()}]);
//# sourceMappingURL=pull-requests-processing-indicator-c473ef0c0580.js.map