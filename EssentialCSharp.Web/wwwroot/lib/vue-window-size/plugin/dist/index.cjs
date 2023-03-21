"use strict";var d=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var l=(i,e)=>{for(var t in e)d(i,t,{get:e[t],enumerable:!0})},f=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of m(e))!v.call(i,r)&&r!==t&&d(i,r,{get:()=>e[r],enumerable:!(n=p(e,r))||n.enumerable});return i};var z=i=>f(d({},"__esModule",{value:!0}),i);var j={};l(j,{VueWindowSizePlugin:()=>R,vueWindowSizeAPI:()=>O});module.exports=z(j);var w=require("vue");var h=typeof window<"u",S=()=>h?window.innerWidth:0,y=()=>h?window.innerHeight:0,W=i=>i??S(),g=i=>i??y(),b=i=>({width:W(i?.width),height:g(i?.height)});var c=i=>{let e=(0,w.reactive)(b()),t=({width:n,height:r})=>{e.width=n,e.height=r};return i().addObserver("option-api",t).subscribe(),{computed:{$windowWidth(){return e.width},$windowHeight(){return e.height}}}};var s=class{#e=new Map;#r;#n;#i=!1;#t;constructor(e){let{delay:t=33}=e??{};this.#r=t,this.#t=this.#d.bind(this)}addObserver(e,t){return this.#e.set(e,t),t(this.#s()),this}deleteObserver(e){return this.#e.delete(e),this}deleteObservers(){return this.#e.clear(),this}notifyObservers(e){return this.#e.forEach(t=>{t(e)}),this}subscribe(){return typeof window>"u"?this:this.#i?this:(window.addEventListener("resize",this.#t),window.addEventListener("orientationchange",this.#t),this.#i=!0,this)}unsubscribe(){return this.#i?(window.removeEventListener("resize",this.#t),window.removeEventListener("orientationchange",this.#t),this.#i=!1,this):this}setDelay(e){return this.#r=e,this}info(){return{delay:this.#r,subscribed:this.#i,observersCount:this.#e.size}}dispatch(){return this.#o(),this}#s(){return typeof window>"u"?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}}#o(){let e=this.#s();this.notifyObservers(e)}#d(){clearTimeout(this.#n),window.setTimeout(()=>{},1),this.#n=window.setTimeout(()=>{this.#o()},this.#r)}};var u,o=()=>(u||(u=new s),u);var a=i=>({config(e){typeof e.delay=="number"&&i().setDelay(e.delay)},init(){i().subscribe()},destroy(){i().unsubscribe()}});var O=a(o);function x(i,{delay:e=33}={}){let t=c(o);o().setDelay(e),i.mixin({mixins:[t]})}var R={install:x};0&&(module.exports={VueWindowSizePlugin,vueWindowSizeAPI});