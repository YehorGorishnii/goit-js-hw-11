(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function i(a){return a.hits.map(({webformatURL:t,largeImageURL:r,tags:n,likes:e,views:s,comments:o,downloads:l})=>`<div class="gallery-item>
        <a class="gallery-link" href="${r}">
            <img 
            class="gallery-image" 
            src="${t}" 
            alt="${n}" 
            width="360px" height="260px"/>
        </a>
        <div class="gallery-info">
            <p class="gallery-info-item">
                <span class="gallery-info-span">Likes <span class="tag-span">${e}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Views <span class="tag-span">${s}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Comments <span class="tag-span">${o}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${l}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const c="42701806-8f4bc33de61eec272077c73af",p="https://pixabay.com/api/";function f(a){const t=`${p}?key=${c}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error(`Response error ${r.status}`);return r.json()}).then(r=>(r.hits.length===0&&console.log("Sorry, there are no images matching your search query. Please try again!"),r)).catch(r=>console.log(`Error: ${r}`))}const u=document.querySelector(".form"),g=document.querySelector(".gallery");u.addEventListener("submit",y);function y(a){a.preventDefault();const t=a.currentTarget,r=t.elements.query.value.trim();if(r===""){console.log("error");return}f(r).then(n=>{g.innerHTML=i(n),t.reset()}).catch(n=>{console.error("Error:",n)})}
//# sourceMappingURL=commonHelpers.js.map
