import{r as L,a as x,o as u,c as f,b as c,u as h,d as m,w as k,T as A,F as _,e as g,f as S,v as j,n as N,g as V,h as z}from"./vendor.5f45df1d.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};B();class w{constructor(t){if(t.length==0||t.length!=9)this.buf=null;else{this.buf=new Uint8Array(new ArrayBuffer(41));for(let l=0;l<9;l++)if(t[l].length!=9){this.buf=null;break}if(this.buf!=null)for(let l=0;l<t.length;l++){let r=t[l];for(let e=0;e<r.length;e++)this._set_native(l*9+e,r[e])}}}toString(){return this.buf.toString()}get_array(){let t=new Array;for(let r=0;r<81;r++){let e=0;if(r%2==0){let s=r/2;e=this.buf[s]>>4}else{let s=(r-1)/2;e=this.buf[s]&15}t.push(e)}let l=new Array;for(let r=0;r<9;r++){let e=new Array;for(let s=0;s<9;s++)e.push(t[r*9+s]);l.push(e)}return l}get(t,l){if(this.buf==null)return-1;let r=t*9+l,e=0;return r%2==0?(e=r/2,this.buf[e]>>4):(e=(r-1)/2,this.buf[e]&15)}set(t,l,r){this.buf!=null&&this._set_native(t*9+l,r)}_set_native(t,l){if(this.buf==null)return;let r=0;if(t%2==0){r=t/2;let s=this.buf[r]&15|l<<4;this.buf.fill(s,r,r+1)}else{r=(t-1)/2;let s=this.buf[r]>>4<<4|l;this.buf.fill(s,r,r+1)}}_get_number(){let t=new Array;for(let l=0;l<9;l++)t.push(l+1);return new Set(t)}_get_row_candidate(t,l){for(let r=0;r<9;r++){let e=this.get(l,r);t.delete(e)}return t}_get_col_candidate(t,l){for(let r=0;r<9;r++){let e=this.get(r,l);t.delete(e)}return t}_get_square_candidate(t,l,r){let e=l%3,s=r%3,i=l-e,n=r-s;for(let o=0;o<3;o++)for(let d=0;d<3;d++)t.delete(this.get(i+o,n+d));return t}_deep_copy(){return new w(this.get_array())}next(){let t=!1,l=0,r=0;for(let e=0;e<9;e++){for(let s=0;s<9;s++)if(this.get(e,s)==0){l=e,r=s,t=!0;break}if(t)break}if(t){let e=this._get_number();if(e=this._get_row_candidate(e,l),e=this._get_col_candidate(e,r),e=this._get_square_candidate(e,l,r),e.size==0)return null;{let s=new Array;for(let i of e){let n=this._deep_copy();n.set(l,r,i),s.push(n)}return s}}else return null}success(){for(let t=0;t<9;t++){let l=this._get_number(),r=this._get_number();for(let e=0;e<9;e++)l.delete(this.get(t,e)),r.delete(this.get(e,t));if(l.size!=0||r.size!=0)return!1}for(let t=0;t<3;t++)for(let l=0;l<3;l++){let r=t*3,e=l*3,s=this._get_number();for(let i=0;i<3;i++)for(let n=0;n<3;n++)s.delete(this.get(r+i,e+n));if(s.size!=0)return!1}return!0}}class U{constructor(t){this.start=new w(t)}get_result(){let t=new Array;t.push(this.start);let l=new Set,r=null;for(;t.length!=0;){let e=t.shift();if(e.success()){r=e;break}else{let s=e.next();for(let i of s)l.has(i.toString())||(l.add(i.toString()),t.push(i))}}return r!=null?r.get_array():null}}const q={class:"main"},M={class:"fancy-border"},O=["onUpdate:modelValue","disabled"],C={class:"fancy-border"},F=["onUpdate:modelValue"],T={key:0},E={key:1},P={setup(p){let t=[[9,8,7,6,5,4,3,2,1],[3,2,1,9,8,7,6,5,4],[6,5,4,3,2,1,9,8,7],[1,9,8,7,6,5,4,3,2],[4,3,2,1,9,8,7,6,5],[7,6,5,4,3,2,1,9,8],[2,1,9,8,7,6,5,4,3],[0,4,3,2,1,9,8,7,6],[0,0,0,0,0,0,0,0,0]],r=new U(t).get_result(),e=L({});for(let n=0;n<t.length;n++)for(let o=0;o<t[n].length;o++)e["row"+n]||(e["row"+n]={}),e["row"+n]["col"+o]={cur:t[n][o]>0?t[n][o]:null,isNeed:t[n][o]<=0,correct:r[n][o]};console.log("mu",e.value);let s=x(!1);function i(){console.log(22,s),s.value=!s.value}return(n,o)=>(u(),f(_,null,[c("div",q,[h(s)?(u(),m(A,{key:1,name:"fade",appear:""},{default:k(()=>[c("div",C,[(u(!0),f(_,null,g(h(e),(d,y)=>(u(),f("div",{key:y,class:"row"},[(u(!0),f(_,null,g(d,(a,v)=>(u(),f("div",{key:v,class:"col"},[S(c("input",{type:"text",class:N(["text",{green:a.isNeed}]),"onUpdate:modelValue":b=>a.correct=b,disabled:""},null,10,F),[[j,a.correct]])]))),128))]))),128))])]),_:1})):(u(),m(A,{key:0,name:"fade",appear:""},{default:k(()=>[c("div",M,[(u(!0),f(_,null,g(h(e),(d,y)=>(u(),f("div",{key:y,class:"row"},[(u(!0),f(_,null,g(d,(a,v)=>(u(),f("div",{key:v,class:"col"},[S(c("input",{type:"text",class:N(["text",{red:a.isNeed,green:a.cur==a.correct&&a.isNeed}]),"onUpdate:modelValue":b=>a.cur=b,disabled:!a.isNeed},null,10,O),[[j,a.cur]])]))),128))]))),128))])]),_:1}))]),c("div",{class:"fs12 footer",onClick:i},[h(s)?(u(),f("span",E,"\u9690\u85CF\u7B54\u6848")):(u(),f("span",T,"\u67E5\u770B\u7B54\u6848"))])],64))}};const D={setup(p){const t=x(null);return V(()=>{console.log("sudo",t)}),(l,r)=>(u(),m(P,{ref:(e,s)=>{s.sudo=e,t.value=e}},null,512))}};z(D).mount("#app");
