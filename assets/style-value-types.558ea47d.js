import{_ as o}from"./tslib.2bd10da0.js";var C=function(r,a){return function(t){return Math.max(Math.min(t,a),r)}},f=function(r){return r%1?Number(r.toFixed(5)):r},p=/(-)?([\d]*\.?[\d])+/g,v=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,M=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function c(r){return typeof r=="string"}var b={test:function(r){return typeof r=="number"},parse:parseFloat,transform:function(r){return r}},N=o(o({},b),{transform:C(0,1)}),H=o(o({},b),{default:1}),m=function(r){return{test:function(a){return c(a)&&a.endsWith(r)&&a.split(" ").length===1},parse:parseFloat,transform:function(a){return""+a+r}}},Z=m("deg"),h=m("%"),q=m("px"),E=m("vh"),G=m("vw"),J=o(o({},h),{parse:function(r){return h.parse(r)/100},transform:function(r){return h.transform(r*100)}}),x=function(r,a){return function(t){return Boolean(c(t)&&M.test(t)&&t.startsWith(r)||a&&Object.prototype.hasOwnProperty.call(t,a))}},_=function(r,a,t){return function(n){var e;if(!c(n))return n;var s=n.match(p),l=s[0],i=s[1],u=s[2],F=s[3];return e={},e[r]=parseFloat(l),e[a]=parseFloat(i),e[t]=parseFloat(u),e.alpha=F!==void 0?parseFloat(F):1,e}},d={test:x("hsl","hue"),parse:_("hue","saturation","lightness"),transform:function(r){var a=r.hue,t=r.saturation,n=r.lightness,e=r.alpha,s=e===void 0?1:e;return"hsla("+Math.round(a)+", "+h.transform(f(t))+", "+h.transform(f(n))+", "+f(N.transform(s))+")"}},A=C(0,255),y=o(o({},b),{transform:function(r){return Math.round(A(r))}}),g={test:x("rgb","red"),parse:_("red","green","blue"),transform:function(r){var a=r.red,t=r.green,n=r.blue,e=r.alpha,s=e===void 0?1:e;return"rgba("+y.transform(a)+", "+y.transform(t)+", "+y.transform(n)+", "+f(N.transform(s))+")"}};function O(r){var a="",t="",n="",e="";return r.length>5?(a=r.substr(1,2),t=r.substr(3,2),n=r.substr(5,2),e=r.substr(7,2)):(a=r.substr(1,1),t=r.substr(2,1),n=r.substr(3,1),e=r.substr(4,1),a+=a,t+=t,n+=n,e+=e),{red:parseInt(a,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:e?parseInt(e,16)/255:1}}var w={test:x("#"),parse:O,transform:g.transform},T={test:function(r){return g.test(r)||w.test(r)||d.test(r)},parse:function(r){return g.test(r)?g.parse(r):d.test(r)?d.parse(r):w.parse(r)},transform:function(r){return c(r)?r:r.hasOwnProperty("red")?g.transform(r):d.transform(r)}},k="${c}",R="${n}";function S(r){var a,t,n,e;return isNaN(r)&&c(r)&&((t=(a=r.match(p))===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:0)+((e=(n=r.match(v))===null||n===void 0?void 0:n.length)!==null&&e!==void 0?e:0)>0}function $(r){var a=[],t=0,n=r.match(v);n&&(t=n.length,r=r.replace(v,k),a.push.apply(a,n.map(T.parse)));var e=r.match(p);return e&&(r=r.replace(p,R),a.push.apply(a,e.map(b.parse))),{values:a,numColors:t,tokenised:r}}function j(r){return $(r).values}function I(r){var a=$(r),t=a.values,n=a.numColors,e=a.tokenised,s=t.length;return function(l){for(var i=e,u=0;u<s;u++)i=i.replace(u<n?k:R,u<n?T.transform(l[u]):f(l[u]));return i}}var U=function(r){return typeof r=="number"?0:r};function z(r){var a=j(r),t=I(r);return t(a.map(U))}var D={test:S,parse:j,createTransformer:I,getAnimatableNone:z},P=new Set(["brightness","contrast","saturate","opacity"]);function V(r){var a=r.slice(0,-1).split("("),t=a[0],n=a[1];if(t==="drop-shadow")return r;var e=(n.match(p)||[])[0];if(!e)return r;var s=n.replace(e,""),l=P.has(t)?1:0;return e!==n&&(l*=100),t+"("+l+s+")"}var W=/([a-z-]*)\(.*?\)/g,K=o(o({},D),{getAnimatableNone:function(r){var a=r.match(W);return a?a.map(V).join(" "):r}});export{N as a,J as b,D as c,Z as d,T as e,K as f,h as g,E as h,w as i,d as j,b as n,q as p,g as r,H as s,G as v};