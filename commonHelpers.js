import{i,S as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(o){return o.hits.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:n,downloads:l})=>`<div class="gallery-item>
        <a class="gallery-link" href="${r}">
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
                <span class="gallery-info-span">Views <span class="tag-span">${t}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Comments <span class="tag-span">${n}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${l}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const u="42701806-8f4bc33de61eec272077c73af",g="https://pixabay.com/api/";function f(o){const s=`${g}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error(`Response error ${r.status}`);return r.json()}).then(r=>r.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"}):r).catch(r=>console.log(`Error: ${r}`))}const m=document.querySelector(".form"),y=document.querySelector(".gallery");let h=new c(".gallery div ",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",d);function d(o){o.preventDefault();const s=o.currentTarget,r=s.elements.query.value.trim();if(r==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"});f(r).then(a=>{y.innerHTML=p(a),s.reset(),h.refresh()}).catch(a=>{console.error("Error:",a)})}
//# sourceMappingURL=commonHelpers.js.map
