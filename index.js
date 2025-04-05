import{a as g,S as p,i as d}from"./assets/vendor-Db2TdIkw.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const y of i.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const h="49640008-31ceefc585112d8f472f2aefe",x="https://pixabay.com/api/";async function v(e){try{return(await g.get(`${x}?key=${h}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`)).data}catch(l){return console.error("Помилка під час отримання зображень:",l),null}}const n=document.querySelector(".gallery");let c;n&&(n.style.display="none");function E(e){m();const l=e.map(a=>`
    <li class="gallery-item" style="list-style: none;">
      <a href="${a.largeImageURL}">
        <div class="loader"></div>
        <img src="${a.webformatURL}" alt="${a.tags}" loading="lazy" 
        style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); object-fit: cover;">
      </a>
      <div class="image-info">
        <p class="info-item"><span class="info-value">Likes</span> ${a.likes}</p>
        <p class="info-item"><span class="info-value">Views</span> ${a.views}</p>
        <p class="info-item"><span class="info-value">Comments</span> ${a.comments}</p>
        <p class="info-item"><span class="info-value">Downloads</span> ${a.downloads}</p>
      </div>
    </li>
  `).join("");n.innerHTML=l,document.querySelectorAll(".image-container img").forEach(a=>{const t=a.closest(".image-container").querySelector(".loader");t.style.display="block",a.addEventListener("load",()=>{t.style.display="none"})}),c?c.refresh():c=new p(".gallery a")}n.style.listStyle="none";n.style.width="1200px";n.style.display="grid";n.style.textAlign="center";n.style.gridTemplateColumns="repeat(3, 1fr)";n.style.gap="24px";n.style.margin="0 auto";n.style.justifyContent="center";n.style.alignItems="center";n.style.marginTop="108px";const L=document.querySelectorAll(".image-info");L.forEach(e=>{e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.textAlign="center",e.style.fontSize="12px",e.style.border="1px solid #808080",e.style.padding="10px"});const S=document.querySelectorAll(".info-item");S.forEach(e=>{e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.marginLeft="20px"});const b=document.querySelectorAll(".info-value");b.forEach(e=>{e.style.fontWeight="600"});c?c.refresh():c=new p(".gallery a");const w=document.querySelectorAll(".gallery-item");w.forEach(e=>{e.style.overflow="hidden",e.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)",e.style.transition="transform 0.3s ease-in-out",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),document.querySelectorAll(".image-info").forEach(o=>{o.style.display="flex",o.style.flexWrap="wrap",o.style.justifyContent="center",o.style.textAlign="center",o.style.fontSize="12px",o.style.border="1px solid #808080",o.style.padding="10px",o.style.margin="0"})});function m(){n.innerHTML=""}function q(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function f(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}const u=document.querySelector(".form"),r=document.querySelector("input[name='search-text']");u.addEventListener("submit",async e=>{e.preventDefault();const l=r.value.trim();if(!l){d.warning({title:"Увага",message:"Поле пошуку не може бути порожнім!",position:"topRight"});return}if(l.length<3){d.warning({title:"Увага",message:"Мінімальна довжина пошуку - 3 символи!",position:"topRight"});return}q(),m();try{const o=await v(l);if(f(),!o||o.hits.length===0){d.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u.reset(),E(o.hits)}catch(o){f(),console.error("Помилка під час отримання зображень:",o)}});r&&(r.style.width="300px",r.style.padding="10px",r.style.border="2px solid #4E35DE",r.style.borderRadius="8px",r.style.fontSize="16px",r.style.color="#333",r.style.backgroundColor="#f9f9f9",r.style.outline="none",r.style.transition="0.3s",r.addEventListener("focus",()=>{r.style.borderColor="#61dafb",r.style.boxShadow="0 0 10px rgba(97, 218, 251, 0.5)"}),r.addEventListener("blur",()=>{r.style.borderColor="#4E35DE",r.style.boxShadow="none"}));const s=document.querySelector("button[type='submit']");s&&(s.style.padding="12px 24px",s.style.fontSize="16px",s.style.fontWeight="bold",s.style.color="#ffffff",s.style.backgroundColor="#4E35DE",s.style.border="none",s.style.borderRadius="8px",s.style.cursor="pointer",s.style.transition="0.3s",s.addEventListener("mouseover",()=>{s.style.backgroundColor="#61dafb"}),s.addEventListener("mouseout",()=>{s.style.backgroundColor="#4E35DE"}),s.addEventListener("mousedown",()=>{s.style.transform="scale(0.95)"}),s.addEventListener("mouseup",()=>{s.style.transform="scale(1)"}));
//# sourceMappingURL=index.js.map
