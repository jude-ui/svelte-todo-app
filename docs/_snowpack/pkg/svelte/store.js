import{v as f,s as m}from"../common/index-4c36df9d.js";export{A as get}from"../common/index-4c36df9d.js";const t=[];function p(n,u=f){let i;const o=new Set;function r(e){if(m(n,e)&&(n=e,i)){const c=!t.length;for(const s of o)s[1](),t.push(s,n);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function b(e){r(e(n))}function d(e,c=f){const s=[e,c];return o.add(s),o.size===1&&(i=u(r)||f),e(n),()=>{o.delete(s),o.size===0&&(i(),i=null)}}return{set:r,update:b,subscribe:d}}export{p as writable};
