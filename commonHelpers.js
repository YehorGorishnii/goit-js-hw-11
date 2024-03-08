import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function y(o){return o.hits.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:n,downloads:p})=>`<div class="gallery-item>
        <a class="gallery-link" href="${t}">
            <img 
            class="gallery-image" 
            src="${s}" 
            alt="${a}" 
            width="360px" height="260px"/>
        </a>
        <div class="gallery-info">
            <p class="gallery-info-item">
                <span class="gallery-info-span">Likes <span class="tag-span">${e}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Views <span class="tag-span">${r}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Comments <span class="tag-span">${n}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${p}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const g="42701806-8f4bc33de61eec272077c73af",f="https://pixabay.com/api/",l=document.querySelector(".loader");function m(o){const s=`${f}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;return l.style.display="flex",fetch(s).then(t=>{if(!t.ok)throw new Error(`Response error ${t.status}`);return t.json()}).then(t=>{if(l.style.display="none",t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"});return}return t}).catch(t=>console.log(`Error: ${t}`))}const d=document.querySelector(".form"),h=document.querySelector(".gallery"),i=document.querySelector(".loader");let F=new u(".gallery div ",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",L);function L(o){o.preventDefault();const s=o.currentTarget,t=s.elements.query.value.trim();if(i.textContent="Loading images, please wait...",i.style.display="flex",t===""){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"}),setTimeout(()=>i.style.display="none",1e3);return}setTimeout(()=>{m(t).then(a=>{h.innerHTML=y(a),s.reset(),F.refresh()}).catch(a=>{console.error("Error:",a)})},2e3)}
//# sourceMappingURL=commonHelpers.js.map
