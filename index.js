import"./assets/vendor-Dy2q2e6o.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=d(o);fetch(o.href,r)}})();const t=document.querySelector("input[name='search-text']");t&&(t.style.width="300px",t.style.padding="10px",t.style.border="2px solid #4E35DE",t.style.borderRadius="8px",t.style.fontSize="16px",t.style.color="#333",t.style.backgroundColor="#f9f9f9",t.style.outline="none",t.style.transition="0.3s",t.addEventListener("focus",()=>{t.style.borderColor="#61dafb",t.style.boxShadow="0 0 10px rgba(97, 218, 251, 0.5)"}),t.addEventListener("blur",()=>{t.style.borderColor="#4E35DE",t.style.boxShadow="none"}));const e=document.querySelector("button[type='submit']");e&&(e.style.padding="12px 24px",e.style.fontSize="16px",e.style.fontWeight="bold",e.style.color="#ffffff",e.style.backgroundColor="#4E35DE",e.style.border="none",e.style.borderRadius="8px",e.style.cursor="pointer",e.style.transition="0.3s",e.addEventListener("mouseover",()=>{e.style.backgroundColor="#61dafb"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#4E35DE"}),e.addEventListener("mousedown",()=>{e.style.transform="scale(0.95)"}),e.addEventListener("mouseup",()=>{e.style.transform="scale(1)"}));const s=document.querySelector("form");s&&(s.style.alignItems="center",s.style.gap="16px",s.style.position="absolute",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%, -50%)");
//# sourceMappingURL=index.js.map
