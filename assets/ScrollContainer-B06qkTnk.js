var e;import{a as t,o as n,c as r}from"./componentSetting-C8-BnnRr.js";import{r as o,hg as i,b as s,et as a,d as c,s as l,i as u,dN as f,k as h,dm as d,a5 as v,D as p,Y as _,aA as b,V as m,X as y,o as g,c as w,a as z,e as E,w as O,P as S,n as M,bv as A,j as T,a4 as L,h as x,f as R,U as k}from"./index-C6F7-JtS.js";function B({el:e,to:t,duration:n=500,callback:r}){const c=o(!1),l=(e=>e.scrollTop)(e),u=t-l;let f=0;n=i(n)?500:n;const h=function(){if(!s(c))return;f+=20;const t=(o=f,i=l,d=u,(o/=n/2)<1?d/2*o*o+i:-d/2*(--o*(o-2)-1)+i);var o,i,d;((e,t)=>{e.scrollTop=t})(e,t),f<n&&s(c)?requestAnimationFrame(h):r&&a(r)&&r()};return{start:()=>{c.value=!0,h()},stop:()=>{c.value=!1}}}var W=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),C="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,D="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),H="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(D):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var j=["top","right","bottom","left","width","height","size","weight"],q="undefined"!=typeof MutationObserver,F=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&a()}function s(){H(i)}function a(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){C&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),q?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){C&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;j.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),G=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},V=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||D},X=K(0,0,0,0);function Y(e){return parseFloat(e)||0}function $(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+Y(e["border-"+n+"-width"])}),0)}function P(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return X;var r=V(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=Y(i)}return t}(r),i=o.left+o.right,s=o.top+o.bottom,a=Y(r.width),c=Y(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==t&&(a-=$(r,"left","right")+i),Math.round(c+s)!==n&&(c-=$(r,"top","bottom")+s)),!function(e){return e===V(e).document.documentElement}(e)){var l=Math.round(a+i)-t,u=Math.round(c+s)-n;1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u)}return K(o.left,o.top,a,c)}var I="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof V(e).SVGGraphicsElement}:function(e){return e instanceof V(e).SVGElement&&"function"==typeof e.getBBox};function N(e){return C?I(e)?function(e){var t=e.getBBox();return K(0,0,t.width,t.height)}(e):P(e):X}function K(e,t,n,r){return{x:e,y:t,width:n,height:r}}var U=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=K(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=N(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),J=function(){return function(e,t){var n,r,o,i,s,a,c,l=(r=(n=t).x,o=n.y,i=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),G(c,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),c);G(this,{target:e,contentRect:l})}}(),Q=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new W,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new U(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new J(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Z="undefined"!=typeof WeakMap?new WeakMap:new W,ee=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=F.getInstance(),r=new Q(t,n,this);Z.set(this,r)}}();["observe","unobserve","disconnect"].forEach((function(e){ee.prototype[e]=function(){var t;return(t=Z.get(this))[e].apply(t,arguments)}}));var te=void 0!==D.ResizeObserver?D.ResizeObserver:ee;const ne="undefined"==typeof window;function re(e){for(const t of e){const e=t.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}}function oe(e,t){ne||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new te(re),e.__ro__.observe(e)),e.__resizeListeners__.push(t))}function ie(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}const se={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function ae({move:e,size:t,bar:n}){const r={},o=`translate${n.axis}(${e}%)`;return r[n.size]=t,r.transform=o,r.msTransform=o,r.webkitTransform=o,r}const ce=c({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const r=d(),i=o(),s=l("scroll-bar-wrap",{}),a=u((()=>se[e.vertical?"vertical":"horizontal"])),c=o({}),v=o(),p=e=>{var t;e.ctrlKey||2===e.button||(null==(t=window.getSelection())||t.removeAllRanges(),b(e),c.value[a.value.axis]=e.currentTarget[a.value.offset]-(e[a.value.client]-e.currentTarget.getBoundingClientRect()[a.value.direction]))},_=e=>{var t;const n=100*(Math.abs(e.target.getBoundingClientRect()[a.value.direction]-e[a.value.client])-i.value[a.value.offset]/2)/(null==(t=null==r?void 0:r.vnode.el)?void 0:t[a.value.offset]);s.value[a.value.scroll]=n*s.value[a.value.scrollSize]/100},b=e=>{e.stopImmediatePropagation(),v.value=!0,n(document,"mousemove",m),n(document,"mouseup",y),document.onselectstart=()=>!1},m=e=>{var t,n;if(!1===v.value)return;const o=c.value[a.value.axis];if(!o)return;const l=100*(-1*((null==(t=null==r?void 0:r.vnode.el)?void 0:t.getBoundingClientRect()[a.value.direction])-e[a.value.client])-(i.value[a.value.offset]-o))/(null==(n=null==r?void 0:r.vnode.el)?void 0:n[a.value.offset]);s.value[a.value.scroll]=l*s.value[a.value.scrollSize]/100};function y(){v.value=!1,c.value[a.value.axis]=0,t(document,"mousemove",m),document.onselectstart=null}return f((()=>{t(document,"mouseup",y)})),()=>h("div",{class:["scrollbar__bar","is-"+a.value.key],onMousedown:_},h("div",{ref:i,class:"scrollbar__thumb",onMousedown:p,style:ae({size:e.size,move:e.move,bar:a.value})}))}}),{scrollbar:le}=r,ue=c({name:"Scrollbar",components:{Bar:ce},props:{native:{type:Boolean,default:null!=(e=null==le?void 0:le.native)&&e},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"},tabs:{type:Boolean,default:!1}},setup(e){const t=o("0"),n=o("0"),r=o(0),i=o(0),a=o(),c=o();v("scroll-bar-wrap",a);const l=u((()=>Array.isArray(e.wrapStyle)?function(e){const t={};for(let o=0;o<e.length;o++)e[o]&&(n=t,r=e[o],Object.assign(n,r));var n,r;return t}(e.wrapStyle):e.wrapStyle)),f=()=>{if(!s(a))return;const e=100*s(a).clientHeight/s(a).scrollHeight,r=100*s(a).clientWidth/s(a).scrollWidth;n.value=e<100?e+"%":"",t.value=r<100?r+"%":""};return p((()=>{e.native||(_(f),e.noresize||(oe(s(c),f),oe(s(a),f),addEventListener("resize",f)),e.tabs&&function(){const e=s(a);function t(t){const n=t.wheelDelta||t.detail;let r=0;r=1==n||n<0&&-1!=n?20*1:20*-1,e.scrollLeft+=r}e.addEventListener("mousewheel",t,!1)||e.addEventListener("DOMMouseScroll",t,!1)}())})),b((()=>{e.native||e.noresize||(ie(s(c),f),ie(s(a),f),removeEventListener("resize",f))})),{moveX:r,moveY:i,sizeWidth:t,sizeHeight:n,style:l,wrap:a,resize:c,update:f,handleScroll:()=>{e.native||(i.value=100*s(a).scrollTop/s(a).clientHeight,r.value=100*s(a).scrollLeft/s(a).clientWidth)}}}}),fe={class:"scrollbar"};const he=m(ue,[["render",function(e,t,n,r,o,i){const s=y("bar");return g(),w("div",fe,[z("div",{ref:"wrap",class:M([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:A(e.style),onScroll:t[0]||(t[0]=(...t)=>e.handleScroll&&e.handleScroll(...t))},[(g(),E(T(e.tag),{ref:"resize",class:M(["scrollbar__view",e.viewClass]),style:A(e.viewStyle)},{default:O((()=>[S(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?R("",!0):(g(),w(L,{key:0},[x(s,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),x(s,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}]]);const de=m(c({name:"ScrollContainer",components:{Scrollbar:he},props:{isTabs:{type:Boolean,default:!1}},setup(e){const t=o(null);return{tabs:e.isTabs,scrollbarRef:t,scrollTo:function(e,n=500){const r=s(t);r&&_((()=>{const t=s(r.wrap);if(!t)return;const{start:o}=B({el:t,to:e,duration:n});o()}))},scrollBottom:function(){const e=s(t);e&&_((()=>{const t=s(e.wrap);if(!t)return;const n=t.scrollHeight,{start:r}=B({el:t,to:n});r()}))},getScrollWrap:function(){const e=s(t);return e?e.wrap:null}}}}),[["render",function(e,t,n,r,o,i){const s=he;return g(),E(s,k({ref:"scrollbarRef",class:"scroll-container",tabs:e.tabs},e.$attrs),{default:O((()=>[S(e.$slots,"default")])),_:3},16,["tabs"])}]]);export{de as _,B as u};
