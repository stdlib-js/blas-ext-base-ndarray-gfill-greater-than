"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(E,q){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),l=require('@stdlib/ndarray-base-clip-index/dist'),g=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/blas-ext-base-gfill-greater-than/dist').ndarray;function h(e){var r,t,s,d,i,n,u,a;return a=e[0],r=v(e[1]),d=v(e[2]),u=o(a,0),i=l(v(e[3]),u),n=l(v(e[4]),u),i>=n||(t=g(a,0),s=m(a)+t*i,x(n-i,r,d,p(a),t,s)),a}q.exports=h
});var D=f();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
