(function(){"use strict";var t={3829:function(t,n,e){var i=e(9242),o=e(3396);function r(t,n,e,i,r,u){const a=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(a)}var u=e(7139);const a={key:0,class:"intro"},s={key:2},h={class:"title"},c={key:3,class:"end"};function l(t,n,e,r,l,k){return(0,o.wg)(),(0,o.iD)("div",null,[0===l.step?((0,o.wg)(),(0,o.iD)("div",a,"请输入你的问题，并按下回车")):(0,o.kq)("",!0),0===l.step?(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,class:"input","onUpdate:modelValue":n[0]||(n[0]=t=>l.inputValue=t),onKeyup:n[1]||(n[1]=(0,i.D2)(((...t)=>k.handleEnter&&k.handleEnter(...t)),["enter"]))},null,544)),[[i.nr,l.inputValue]]):(0,o.kq)("",!0),1===l.step?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",h,(0,u.zw)(l.displayValue),1),(0,o._)("button",{class:"btn confirm",onMouseenter:n[2]||(n[2]=t=>k.swapText("是的！")),onMouseleave:n[3]||(n[3]=(...t)=>k.swapBack&&k.swapBack(...t)),onClick:n[4]||(n[4]=t=>this.step=2)},(0,u.zw)(l.button1Text),33),(0,o._)("button",{class:"btn cancel",onMouseenter:n[5]||(n[5]=t=>k.swapText("不是~")),onMouseleave:n[6]||(n[6]=(...t)=>k.swapBack&&k.swapBack(...t)),onClick:n[7]||(n[7]=t=>this.step=2)},(0,u.zw)(l.button2Text),33),l.thinkShow[0]?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"think think1",onMouseenter:n[8]||(n[8]=(...t)=>k.changeThink&&k.changeThink(...t))},"我再想想",32)):(0,o.kq)("",!0),l.thinkShow[1]?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"think think2",onMouseenter:n[9]||(n[9]=(...t)=>k.changeThink&&k.changeThink(...t))},"我再想想",32)):(0,o.kq)("",!0),l.thinkShow[2]?((0,o.wg)(),(0,o.iD)("button",{key:2,class:"think think3",onMouseenter:n[10]||(n[10]=(...t)=>k.changeThink&&k.changeThink(...t))},"我再想想",32)):(0,o.kq)("",!0),l.thinkShow[3]?((0,o.wg)(),(0,o.iD)("button",{key:3,class:"think think4",onMouseenter:n[11]||(n[11]=(...t)=>k.changeThink&&k.changeThink(...t))},"我再想想",32)):(0,o.kq)("",!0)])):(0,o.kq)("",!0),2===l.step?((0,o.wg)(),(0,o.iD)("div",c,"果然，你就承认吧")):(0,o.kq)("",!0)])}var k={data(){return{button1Text:"是的！",button2Text:"不是~",inputValue:"",step:0,displayValue:"",thinkShow:[0,0,0,1]}},methods:{swapText(t){this.button1Text=t,this.button2Text="是的！"===this.button1Text?"不是~":"是的！"},swapBack(){this.button1Text="是的！",this.button2Text="不是~"},handleEnter(){this.displayValue=this.inputValue,this.inputValue="",this.step=1},changeThink(){let t=0;for(let e=0;e<this.thinkShow.length;e++)if(1===this.thinkShow[e]){this.thinkShow[e]=0,t=e;break}let n=100*Math.random()%4;while(n===t)n=100*Math.random()%4;n=Math.floor(n);for(let e=0;e<this.thinkShow.length;e++)if(e===n){this.thinkShow[e]=1;break}}}},p=e(89);const f=(0,p.Z)(k,[["render",l],["__scopeId","data-v-b79b2798"]]);var w=f,d={name:"App",components:{HelloWorld:w}};const b=(0,p.Z)(d,[["render",r]]);var v=b;(0,i.ri)(v).mount("#app")}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return t[i].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,i,o,r){if(!i){var u=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||u>=r)&&Object.keys(e.O).every((function(t){return e.O[t](i[s])}))?i.splice(s--,1):(a=!1,r<u&&(u=r));if(a){t.splice(c--,1);var h=o();void 0!==h&&(n=h)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var o,r,u=i[0],a=i[1],s=i[2],h=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var c=s(e)}for(n&&n(i);h<u.length;h++)r=u[h],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},i=self["webpackChunktest"]=self["webpackChunktest"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(3829)}));i=e.O(i)})();
//# sourceMappingURL=app.e3d9907a.js.map