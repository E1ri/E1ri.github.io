var s=typeof Element!="undefined",a=typeof Map=="function",c=typeof Set=="function",l=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var f,r,n;if(Array.isArray(e)){if(f=e.length,f!=t.length)return!1;for(r=f;r--!=0;)if(!o(e[r],t[r]))return!1;return!0}var u;if(a&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(r=u.next()).done;)if(!t.has(r.value[0]))return!1;for(u=e.entries();!(r=u.next()).done;)if(!o(r.value[1],t.get(r.value[0])))return!1;return!0}if(c&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(r=u.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(f=e.length,f!=t.length)return!1;for(r=f;r--!=0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(n=Object.keys(e),f=n.length,f!==Object.keys(t).length)return!1;for(r=f;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;if(s&&e instanceof Element)return!1;for(r=f;r--!=0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&e.$$typeof)&&!o(e[n[r]],t[n[r]]))return!1;return!0}return e!==e&&t!==t}var i=function(t,f){try{return o(t,f)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};export{i as r};
