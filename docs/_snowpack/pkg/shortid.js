function V(r,e,t){return t={path:e,exports:{},require:function(n,o){return q(n,o??t.path)}},r(t,t.exports),t.exports}function q(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var h=1;function E(){return h=(h*9301+49297)%233280,h/233280}function I(r){h=r}var p={nextValue:E,seed:I},s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",u,y,f;function d(){f=!1}function m(r){if(!r){u!==s&&(u=s,d());return}if(r!==u){if(r.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+r.length+" characters: "+r);var e=r.split("").filter(function(t,n,o){return n!==o.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));u=r,d()}}function b(r){return m(r),u}function j(r){p.seed(r),y!==r&&(d(),y=r)}function k(){u||m(s);for(var r=u.split(""),e=[],t=p.nextValue(),n;r.length>0;)t=p.nextValue(),n=Math.floor(t*r.length),e.push(r.splice(n,1)[0]);return e.join("")}function M(){return f||(f=k(),f)}function C(r){var e=M();return e[r]}function R(){return u||s}var c={get:R,characters:b,seed:j,lookup:C,shuffled:M},g=typeof window=="object"&&(window.crypto||window.msCrypto),w;!g||!g.getRandomValues?w=function(r){for(var e=[],t=0;t<r;t++)e.push(Math.floor(Math.random()*256));return e}:w=function(r){return g.getRandomValues(new Uint8Array(r))};var A=w,B=function(r,e,t){for(var n=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*n*t/e.length),i="";;)for(var a=r(o),x=o;x--;)if(i+=e[a[x]&n]||"",i.length===+t)return i};function D(r){for(var e=0,t,n="";!t;)n=n+B(A,c.get(),1),t=r<Math.pow(16,e+1),e++;return n}var l=D,N=1567752802062,L=7,v,S;function O(r){var e="",t=Math.floor((Date.now()-N)*.001);return t===S?v++:(v=0,S=t),e=e+l(L),e=e+l(r),v>0&&(e=e+l(v)),e=e+l(t),e}var T=O;function U(r){if(!r||typeof r!="string"||r.length<6)return!1;var e=new RegExp("[^"+c.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!e.test(r)}var $=U,F=V(function(r){var e=0;function t(a){return c.seed(a),r.exports}function n(a){return e=a,r.exports}function o(a){return a!==void 0&&c.characters(a),c.shuffled()}function i(){return T(e)}r.exports=i,r.exports.generate=i,r.exports.seed=t,r.exports.worker=n,r.exports.characters=o,r.exports.isValid=$}),G=F;export default G;
