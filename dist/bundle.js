(()=>{"use strict";var n,e,r,t,o,i,a,d,c,l,s,u,p,f,h={802:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(476),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"html, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #1974d2;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    top: 0;\n    height: 15vh;\n    width: 100%;\n    border-bottom: 3px solid black;\n    background-color: navy;\n}\n\nheader h1 {\n    margin-left: 25px;\n    font-size: 3rem;\n    color: #e6e200; \n}\n\n#RightContainer {\n    position: absolute;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: space-around;\n    left: 16vw;\n    width: 90%;\n    height: 82%;\n}\n\n.CardContainer {\n    border: 3px solid black;\n    border-radius: 10px;\n    width: 12.5vw;\n    height: 32vh;\n    margin: 10px;\n    padding: 15px;\n    font-family: 'Vidaloka', serif;\n    background-color: #800080;\n    color: #e6e200;\n    z-index: 1;\n\n}\n\n.CardHeader {\n    border: 1px solid black;\n    border-radius: 5px;\n    font-size: 1.15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: navy;\n}\n\n#SideBar {\n    background-color: #400080;\n    left: 0;\n    width: 15vw;\n    border-right: 2px solid black;\n    height: 80vh;\n    font-size: 1.5rem;\n    color: #e6e200;\n}\n\n#SideBar p {\n    margin-left: 5px;\n    margin-top: 0;\n    padding-top: 2.5vh;\n}\n\n#SideBar ul {\n    list-style: none;\n}\n\n#SideBar ul li {\n    margin-top: 7.5px;\n}\n\n#SideBar ul li:hover, #FormSubmitBtn:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 0;\n    height: 5vh;\n    width: 100%;\n    border-top: 2px solid black;\n    background-color: navy;\n}\n\nfooter p {\n    color: #e6e200;\n}\n\n.Center {\n    margin: 0 auto;\n}\n\n/* Begin Create Project Form CSS*/\n\n#FormContainer {\n    font-family: 'Vidaloka', serif;\n    font-size: 1.25rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    padding: 10px;\n    margin: auto 30% auto 30%;\n    border: 3px solid black;\n    border-radius: 5px;\n    box-shadow: 19px 16px 12px -2px rgba(0,0,0,0.60);\n    z-index: 2;\n    width: 20%;\n    height: 50%;\n    background-color: #d2bc19;\n}\n\n#FormContainer h3 {\n    font-size: 1.75rem;\n\n}\n\n#FormContainer input {\n    margin: 10px 2.5px;\n    box-shadow: 10px 10px 30px -5px rgba(0,0,0,0.67);\n    background: transparent;\n    border: none;\n}\n\n::placeholder {\n    color: black;\n    opacity: 1; \n}\n\n#TitleInputLabel {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n#RadioContainer {\n    display: flex;\n    justify-content: space-around;\n}\n\n#FormContainer input[type=\"radio\"] {\n    margin: -1px;\n    vertical-align: middle;\n}\n\n#FormSubmitBtn {\n    background-color: #d26019;\n    color: white;\n    padding: 0;\n    margin-top: 5px;\n}\n\n/*End Create Project Form CSS*/\n",""]);const i=o},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},892:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],l=t.base?c[0]+t.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:o(f,t),references:1}),a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=r(i[a]);e[d].references--}for(var c=t(n,o),l=0;l<i.length;l++){var s=r(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},311:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},60:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},192:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},760:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},865:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function b(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return h[n](r,r.exports,b),r.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var r in e)b.o(e,r)&&!b.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=b(892),e=b.n(n),r=b(760),t=b.n(r),o=b(311),i=b.n(o),a=b(192),d=b.n(a),c=b(60),l=b.n(c),s=b(865),u=b.n(s),p=b(802),(f={}).styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();