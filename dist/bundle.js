(()=>{"use strict";var e,n,t,r,o,a,i,d,l,c,u,p,s,m,h={802:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(476),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #1974d2;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    top: 0;\n    height: 15vh;\n    width: 100%;\n    border-bottom: 3px solid black;\n    background-color: navy;\n}\n\nheader h1 {\n    margin-left: 25px;\n    font-size: 3rem;\n    color: #e6e200; \n}\n\n#RightContainer {\n    position: absolute;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: space-around;\n    left: 16vw;\n    width: 90%;\n    height: 82%;\n}\n\n.CardContainer {\n    position: relative;\n    border: 3px solid black;\n    border-radius: 10px;\n    width: 12.5vw;\n    height: 32vh;\n    margin: 10px;\n    padding: 15px;\n    font-family: 'Vidaloka', serif;\n    background-color: #800080;\n    color: #e6e200;\n    z-index: 1;\n\n}\n\n.CardContainer input[type=\"date\"] {\n    font-family: 'Vidaloka', serif;\n    color: #e6e200;\n    background: transparent;\n    border: 2.5px dotted #e6e200;\n    border-radius: 2.5px;\n    padding: 4px;\n    margin-left: 5px;\n}\n\n.CardHeader {\n    border: 1px solid black;\n    border-radius: 5px;\n    font-size: 1.15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: navy;\n}\n\n.SelectBox {\n    border: 2px solid black;\n    /* background: transparent; */\n}\n\nselect option[value=\"low\"] {\n    background-color: green;\n}\n.SelectMedium:hover {\n    background: yellow;\n}\n.SelectLow:hover {\n    background: rgba(255, 0, 0);\n}\n\n.ProjectDelete {\n    background-color: #800000;\n    color: #e6e200;\n    font-size: 1.025rem;\n    border: 2px solid black;\n    border-radius: 2.5px;\n    position: absolute;\n    bottom: 7.5px;\n    right: 15px;\n    padding: 2px 3px; \n}\n\n#SideBar {\n    background-color: #400080;\n    left: 0;\n    width: 15vw;\n    border-right: 2px solid black;\n    height: 80vh;\n    font-size: 1.5rem;\n    color: #e6e200;\n}\n\n#SideBar p {\n    margin-left: 5px;\n    margin-top: 0;\n    padding-top: 2.5vh;\n}\n\n#SideBar ul {\n    list-style: none;\n}\n\n#SideBar ul li {\n    margin-top: 7.5px;\n}\n\n#SideBar ul li:hover, #FormSubmitBtn:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 0;\n    height: 5vh;\n    width: 100%;\n    border-top: 2px solid black;\n    background-color: navy;\n}\n\nfooter p {\n    color: #e6e200;\n}\n\n.Center {\n    margin: 0 auto;\n}\n\n/* Begin Create Project Form CSS*/\n\n#FormModal {\n    display: none;\n}\n\n#FormContainer {\n    font-family: 'Vidaloka', serif;\n    font-size: 1.25rem;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    z-index: 2;\n    padding: 10px;\n    margin: auto 30% auto 30%;\n    border: 3px solid black;\n    border-radius: 5px;\n    box-shadow: 19px 16px 12px -2px rgba(0,0,0,0.60);\n    width: 20%;\n    height: 52.5%;\n    background-color: #d2bc19;\n}\n\n#FormContainer h3 {\n    font-size: 1.75rem;\n    letter-spacing: 1.25px;\n    margin-bottom: 7.5px;\n}\n\n#FormContainer input {\n    margin: 10px 2.5px;\n    box-shadow: 10px 10px 30px -5px rgba(0,0,0,0.67);\n    background: transparent;\n    border: none;\n}\n\n::placeholder {\n    color: black;\n    opacity: 1; \n}\n\n#CloseForm {\n    text-align: center;\n    border: 1.5px solid black;\n    font-size: 1.05rem;\n    background-color: #800000;\n    color: #d2bc19;\n    padding: 2px 4px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    box-shadow: 10px 10px 30px -5px rgba(0,0,0,0.67);\n}\n\n#CloseForm:hover, .ProjectDelete:hover {\n    cursor: pointer;\n}\n\n#TitleInputLabel {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n#FormContainer input[type=\"radio\"] {\n    margin: -1px;\n    vertical-align: middle;\n}\n\n#FormSubmitBtn {\n    background-color: #d26019;\n    border: 2px solid black;\n    border-radius: 2.5px;\n    color: white;\n    font-size: 1.15rem;\n    padding: 3px;\n    margin: 10px auto 0 auto;\n}\n/*End Create Project Form CSS*/\n",""]);const a=o},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],u=a[c]||0,p="".concat(c," ").concat(u);a[c]=u+1;var s=t(p),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==s?(n[s].references++,n[s].updater(m)):n.push({identifier:p,updater:o(m,r),references:1}),i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var l=r(e,o),c=0;c<a.length;c++){var u=t(a[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=l}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},f={};function x(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return h[e](t,t.exports,x),t.exports}x.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return x.d(n,{a:n}),n},x.d=(e,n)=>{for(var t in n)x.o(n,t)&&!x.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},x.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=x(892),n=x.n(e),t=x(760),r=x.n(t),o=x(311),a=x.n(o),i=x(192),d=x.n(i),l=x(60),c=x.n(l),u=x(865),p=x.n(u),s=x(802),(m={}).styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),n()(s.Z,m),s.Z&&s.Z.locals&&s.Z.locals,function(){const e=document.querySelector("#AddProjectBtn"),n=document.querySelector("#FormContainer"),t=document.querySelector("#CloseForm"),r=document.querySelector("#FormSubmitBtn"),o=document.querySelector("#RightContainer"),a=document.querySelector("#SideBarul"),i=document.querySelector("#TitleInput"),d=document.querySelector("#DescriptionInput"),l=document.querySelector("#DateInput"),c=document.querySelector("#FormSelectBox"),u=document.querySelector("#CompleteStatus");e.addEventListener("click",(e=>{e.preventDefault(),n.style.display="flex"})),t.addEventListener("click",(e=>{e.preventDefault(),n.style.display="none"})),r.addEventListener("click",(e=>{e.preventDefault();let n=i.value,t=document.createElement("li");t.classList.add("Projectli"),t.textContent=n,a.prepend(t);let r=document.createElement("div");r.classList.add("CardContainer"),o.appendChild(r);let p=document.createElement("button");p.classList.add("ProjectDelete"),p.textContent="Delete",r.appendChild(p),p.addEventListener("click",(e=>{r.parentNode.removeChild(r)}));let s=document.createElement("div");s.classList.add("CardHeader"),r.appendChild(s);let m=document.createElement("h3");m.textContent=n,s.appendChild(m);let h=document.createElement("p");h.textContent=d.value,r.appendChild(h);let f=document.createElement("p");f.textContent="Due Date: ",r.appendChild(f);let x=document.createElement("input");x.setAttribute("type","date"),x.defaultValue=l.value,f.appendChild(x);let b=document.createElement("p");b.textContent="Priority Level: ",r.appendChild(b);let g=document.createElement("select");g.classList.add("SelectBox"),b.appendChild(g);let v=document.createElement("option");v.setAttribute("value","Low"),v.classList.add("SelectLow"),v.textContent="Low",g.appendChild(v);let y=document.createElement("option");y.setAttribute("value","Medium"),y.classList.add("SelectMedium"),y.textContent="Medium",g.appendChild(y);let C=document.createElement("option");C.setAttribute("value","High"),C.classList.add("SelectHigh"),C.textContent="High",g.appendChild(C),function(){let e=c.options[c.selectedIndex].text;"Low"==e&&"Medium"!=e&&"High"!=e?g.selectedIndex=0:"Medium"==e&&"Low"!=e&&"High"!=e?g.selectedIndex=1:"High"==e&&"Low"!=e&&"Medium"!=e&&(g.selectedIndex=2)}();let S=document.createElement("input");S.setAttribute("type","checkbox"),S.setAttribute("name","CompleteStatus"),r.appendChild(S);let k=document.createElement("span");k.textContent=" Completed",r.appendChild(k),1==u.checked?S.checked=!0:0==u.checked&&(S.checked=!1)}))}()})();