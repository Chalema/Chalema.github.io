/**
 * @license twgl.js 0.0.26 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
!function(a,b){"function"==typeof define&&define.amd?define([],b):a.twgl=b()}(this,function(){var a,b,c;return function(d){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,b){return function(){var c=w.call(arguments,0);return"string"!=typeof c[0]&&1===c.length&&c.push(null),o.apply(d,c.concat([a,b]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var b=s[a];delete s[a],u[a]=!0,n.apply(d,b)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,b,c,f){var h,k,m,n,o,t,v,w=[],x=typeof c;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(b=!b.length&&c.length?["require","exports","module"]:b,o=0;o<b.length;o+=1)if(n=p(b[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=c?c.apply(r[a],w):void 0,a&&(h&&h.exports!==d&&h.exports!==r[a]?r[a]=h.exports:m===d&&v||(r[a]=m))}else a&&(r[a]=c)},a=b=o=function(a,b,c,e,f){if("string"==typeof a)return q[a]?q[a](b):j(p(a,l(b)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!b)return;b.splice?(a=b,b=c,c=null):a=d}return b=b||function(){},"function"==typeof c&&(c=e,e=f),e?n(d,a,b,c):setTimeout(function(){n(d,a,b,c)},4),o},o.config=function(a){return o(a)},a._defined=r,c=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},c.amd={jQuery:!0}}(),c("node_modules/almond/almond.js",function(){}),c("twgl/twgl",[],function(){function a(a){ea=new Uint8Array([255*a[0],255*a[1],255*a[2],255*a[3]])}function b(a){da=a}function c(a,b){for(var c=["webgl","experimental-webgl"],d=null,e=0;e<c.length;++e){try{d=a.getContext(c[e],b)}catch(f){}if(d)break}return d}function d(a,b){return c(a,b)}function e(a){return a.split("\n").map(function(a,b){return b+1+": "+a}).join("\n")}function f(a,b,c,d){var f=d||ca,g=a.createShader(c);if(a.shaderSource(g,b),a.compileShader(g),!a.getShaderParameter(g,a.COMPILE_STATUS)){var h=a.getShaderInfoLog(g);return f(e(b)+"\n*** Error compiling shader: "+h),a.deleteShader(g),null}return g}function g(a,b,c,d,e){var f=e||ca,g=a.createProgram();if(b.forEach(function(b){a.attachShader(g,b)}),c&&c.forEach(function(b,c){a.bindAttribLocation(g,d?d[c]:c,b)}),a.linkProgram(g),!a.getProgramParameter(g,a.LINK_STATUS))return f("Error in program linking:"+a.getProgramInfoLog(g)),a.deleteProgram(g),null;return g}function h(a,b,c,d){var e,g="",h=document.getElementById(b);if(!h)throw"*** Error: unknown script element"+b;if(g=h.text,!c)if("x-shader/x-vertex"===h.type)e=a.VERTEX_SHADER;else if("x-shader/x-fragment"===h.type)e=a.FRAGMENT_SHADER;else if(e!==a.VERTEX_SHADER&&e!==a.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return f(a,g,c||e,d)}function i(a,b,c,d,e){for(var f=[],i=0;i<b.length;++i){var j=h(a,b[i],a[Fa[i]],e);if(!j)return null;f.push(j)}return g(a,f,c,d,e)}function j(a,b,c,d,e){for(var h=[],i=0;i<b.length;++i){var j=f(a,b[i],a[Fa[i]],e);if(!j)return null;h.push(j)}return g(a,h,c,d,e)}function k(a,b){return b===a.SAMPLER_2D?a.TEXTURE_2D:b===a.SAMPLER_CUBE?a.TEXTURE_CUBE_MAP:void 0}function l(a,b){function c(b,c){var e=a.getUniformLocation(b,c.name),f=c.type,g=c.size>1&&"[0]"===c.name.substr(-3);if(f===a.FLOAT&&g)return function(b){a.uniform1fv(e,b)};if(f===a.FLOAT)return function(b){a.uniform1f(e,b)};if(f===a.FLOAT_VEC2)return function(b){a.uniform2fv(e,b)};if(f===a.FLOAT_VEC3)return function(b){a.uniform3fv(e,b)};if(f===a.FLOAT_VEC4)return function(b){a.uniform4fv(e,b)};if(f===a.INT&&g)return function(b){a.uniform1iv(e,b)};if(f===a.INT)return function(b){a.uniform1i(e,b)};if(f===a.INT_VEC2)return function(b){a.uniform2iv(e,b)};if(f===a.INT_VEC3)return function(b){a.uniform3iv(e,b)};if(f===a.INT_VEC4)return function(b){a.uniform4iv(e,b)};if(f===a.BOOL&&g)return function(b){a.uniform1iv(e,b)};if(f===a.BOOL)return function(b){a.uniform1i(e,b)};if(f===a.BOOL_VEC2)return function(b){a.uniform2iv(e,b)};if(f===a.BOOL_VEC3)return function(b){a.uniform3iv(e,b)};if(f===a.BOOL_VEC4)return function(b){a.uniform4iv(e,b)};if(f===a.FLOAT_MAT2)return function(b){a.uniformMatrix2fv(e,!1,b)};if(f===a.FLOAT_MAT3)return function(b){a.uniformMatrix3fv(e,!1,b)};if(f===a.FLOAT_MAT4)return function(b){a.uniformMatrix4fv(e,!1,b)};if((f===a.SAMPLER_2D||f===a.SAMPLER_CUBE)&&g){for(var h=[],i=0;i<c.size;++i)h.push(d++);return function(b,c){return function(d){a.uniform1iv(e,c),d.forEach(function(d,e){a.activeTexture(a.TEXTURE0+c[e]),a.bindTexture(b,d)})}}(k(a,f),h)}if(f===a.SAMPLER_2D||f===a.SAMPLER_CUBE)return function(b,c){return function(d){a.uniform1i(e,c),a.activeTexture(a.TEXTURE0+c),a.bindTexture(b,d)}}(k(a,f),d++);throw"unknown type: 0x"+f.toString(16)}for(var d=0,e={},f=a.getProgramParameter(b,a.ACTIVE_UNIFORMS),g=0;g<f;++g){var h=a.getActiveUniform(b,g);if(!h)break;var i=h.name;"[0]"===i.substr(-3)&&(i=i.substr(0,i.length-3));var j=c(b,h);e[i]=j}return e}function m(a,b){a=a.uniformSetters||a;for(var c=arguments.length,d=1;d<c;++d){var e=arguments[d];if(Array.isArray(e))for(var f=e.length,g=0;g<f;++g)m(a,e[g]);else for(var h in e){var i=a[h];i&&i(e[h])}}}function n(a,b){function c(b){return function(c){a.bindBuffer(a.ARRAY_BUFFER,c.buffer),a.enableVertexAttribArray(b),a.vertexAttribPointer(b,c.numComponents||c.size,c.type||a.FLOAT,c.normalize||!1,c.stride||0,c.offset||0)}}for(var d={},e=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES),f=0;f<e;++f){var g=a.getActiveAttrib(b,f);if(!g)break;var h=a.getAttribLocation(b,g.name);d[g.name]=c(h)}return d}function o(a,b){for(var c in b){var d=a[c];d&&d(b[c])}}function p(a,b,c){o(b.attribSetters||b,c.attribs),c.indices&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,c.indices)}function q(a,b,c,d,e){b=b.map(function(a){var b=document.getElementById(a);return b?b.text:a});var f=j(a,b,c,d,e);return f?{program:f,uniformSetters:l(a,f),attribSetters:n(a,f)}:null}function r(a,b){b=b||1,b=Math.max(1,b);var c=a.clientWidth*b|0,d=a.clientHeight*b|0;return(a.width!==c||a.height!==d)&&(a.width=c,a.height=d,!0)}function s(a,b,c,d){if(b instanceof WebGLBuffer)return b;c=c||a.ARRAY_BUFFER;var e=a.createBuffer();return a.bindBuffer(c,e),a.bufferData(c,b,d||a.STATIC_DRAW),e}function t(a){return"indices"===a}function u(a){if(a instanceof Int8Array)return ga;if(a instanceof Uint8Array)return ha;if(a instanceof Int16Array)return ia;if(a instanceof Uint16Array)return ja;if(a instanceof Int32Array)return ka;if(a instanceof Uint32Array)return la;if(a instanceof Float32Array)return ma;throw"unsupported typed array type"}function v(a,b){switch(b){case a.BYTE:return Int8Array;case a.UNSIGNED_BYTE:return Uint8Array;case a.SHORT:return Int16Array;case a.UNSIGNED_SHORT:return Uint16Array;case a.INT:return Int32Array;case a.UNSIGNED_INT:return Uint32Array;case a.FLOAT:return Float32Array;default:throw"unknown gl type"}}function w(a){return a instanceof Int8Array||a instanceof Uint8Array}function x(a){return a&&a.buffer&&a.buffer instanceof ArrayBuffer}function y(a,b){var c;if(c=a.indexOf("coord")>=0?2:a.indexOf("color")>=0?4:3,b%c>0)throw"can not guess numComponents. You should specify it.";return c}function z(a,b){if(x(a))return a;if(x(a.data))return a.data;Array.isArray(a)&&(a={data:a});var c=a.type;return c||(c="indices"===b?Uint16Array:Float32Array),new c(a.data)}function A(a,b){var c={};return Object.keys(b).forEach(function(d){if(!t(d)){var e=b[d],f=e.attrib||e.name||e.attribName||da+d,g=z(e,d);c[f]={buffer:s(a,g,void 0,e.drawType),numComponents:e.numComponents||e.size||y(d),type:u(g),normalize:void 0!==e.normalize?e.normalize:w(g),stride:e.stride||0,offset:e.offset||0}}}),c}function B(a,b){var c={attribs:A(a,b)},d=b.indices;return d?(d=z(d,"indices"),c.indices=s(a,d,a.ELEMENT_ARRAY_BUFFER),c.numElements=d.length,c.elementType=d instanceof Uint32Array?a.UNSIGNED_INT:a.UNSIGNED_SHORT):c.numElements=Ga(b),c}function C(a,b){var c={};return Object.keys(b).forEach(function(d){var e="indices"===d?a.ELEMENT_ARRAY_BUFFER:a.ARRAY_BUFFER,f=z(b[d],d);c[d]=s(a,f,e)}),c}function D(a,b,c,d,e){var f=c.indices,g=void 0===d?c.numElements:d;e=void 0===e?0:e,f?a.drawElements(b,g,void 0===c.elementType?a.UNSIGNED_SHORT:c.elementType,e):a.drawArrays(b,e,g)}function E(a,b){var c=null,d=null;b.forEach(function(b){if(!1!==b.active){var e=b.programInfo,f=b.bufferInfo,g=!1;e!==c&&(c=e,a.useProgram(e.program),g=!0),(g||f!==d)&&(d=f,p(a,e,f)),m(e,b.uniforms),D(a,b.type||a.TRIANGLES,f,b.count,b.offset)}})}function F(a,b){void 0!==b.colorspaceConversion&&(Ha.colorSpaceConversion=a.getParameter(a.UNPACK_COLORSPACE_CONVERSION_WEBGL)),void 0!==b.premultiplyAlpha&&(Ha.premultiplyAlpha=a.getParameter(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL)),void 0!==b.flipY&&(Ha.flipY=a.getParameter(a.UNPACK_FLIP_Y_WEBGL))}function G(a,b){void 0!==b.colorspaceConversion&&a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ha.colorSpaceConversion),void 0!==b.premultiplyAlpha&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ha.premultiplyAlpha),void 0!==b.flipY&&a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,Ha.flipY)}function H(a,b,c){var d=c.target||a.TEXTURE_2D;a.bindTexture(d,b),c.min&&a.texParameteri(d,a.TEXTURE_MIN_FILTER,c.min),c.mag&&a.texParameteri(d,a.TEXTURE_MAG_FILTER,c.mag),c.wrap&&(a.texParameteri(d,a.TEXTURE_WRAP_S,c.wrap),a.texParameteri(d,a.TEXTURE_WRAP_T,c.wrap)),c.wrapS&&a.texParameteri(d,a.TEXTURE_WRAP_S,c.wrapS),c.wrapT&&a.texParameteri(d,a.TEXTURE_WRAP_T,c.wrapT)}function I(a){return a=a||ea,x(a)?a:new Uint8Array([255*a[0],255*a[1],255*a[2],255*a[3]])}function J(a){return 0==(a&a-1)}function K(a,b,c,d,e){c=c||fa;var f=c.target||a.TEXTURE_2D;d=d||c.width,e=e||c.height,a.bindTexture(f,b),J(d)&&J(e)?a.generateMipmap(f):(a.texParameteri(f,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(f,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE))}function L(a,b){return b=b||{},b.cubeFaceOrder||[a.TEXTURE_CUBE_MAP_POSITIVE_X,a.TEXTURE_CUBE_MAP_NEGATIVE_X,a.TEXTURE_CUBE_MAP_POSITIVE_Y,a.TEXTURE_CUBE_MAP_NEGATIVE_Y,a.TEXTURE_CUBE_MAP_POSITIVE_Z,a.TEXTURE_CUBE_MAP_NEGATIVE_Z]}function M(a,b){var c=L(a,b),d=c.map(function(a,b){return{face:a,ndx:b}});return d.sort(function(a,b){return a.face-b.face}),d}function N(a){var b={};return Object.keys(a).forEach(function(c){b[c]=a[c]}),b}function O(a,b){var c=new Image;return c.onerror=function(){var d="couldn't load image: "+a;ca(d),b(d,c)},c.onload=function(){b(null,c)},c.src=a,c}function P(a,b,c){c=c||fa;var d=c.target||a.TEXTURE_2D;if(a.bindTexture(d,b),!1!==c.color){var e=I(c.color);if(d===a.TEXTURE_CUBE_MAP)for(var f=0;f<6;++f)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);else a.texImage2D(d,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e)}}function Q(a,b,c,d){return c=c||fa,P(a,b,c),c=N(c),O(c.src,function(e,f){e?d(e,b,f):(Ia(a,b,f,c),d(null,b,f))})}function R(a,b,c,d){function e(e){return function(f,m){--k,f?l.push(f):m.width!==m.height?l.push("cubemap face img is not a square: "+m.src):(F(a,c),a.bindTexture(i,b),5===k?L(a).forEach(function(b){a.texImage2D(b,0,g,g,h,m)}):a.texImage2D(e,0,g,g,h,m),G(a,c),a.generateMipmap(i)),0===k&&d&&d(l.length?l:void 0,j,b)}}var f=c.src;if(6!==f.length)throw"there must be 6 urls for a cubemap";var g=c.format||a.RGBA,h=c.type||a.UNSIGNED_BYTE,i=c.target||a.TEXTURE_2D;if(i!==a.TEXTURE_CUBE_MAP)throw"target must be TEXTURE_CUBE_MAP";P(a,b,c),c=N(c);var j,k=6,l=[],m=L(a,c);j=f.map(function(a,b){return O(a,e(m[b]))})}function S(a){switch(a){case na:case qa:return 1;case ra:return 2;case oa:return 3;case pa:return 4;default:throw"unknown type: "+a}}function T(a,b){return x(b)?u(b):a.UNSIGNED_BYTE}function U(a,b,c,d){d=d||fa;var e=d.target||a.TEXTURE_2D,f=d.width,g=d.height,h=d.format||a.RGBA,i=d.type||T(a,c),j=S(h),k=c.length/j;if(k%1)throw"length wrong size of format: "+Ea(a,h);if(f||g){if(g){if(!f&&(f=k/g)%1)throw"can't guess width"}else if((g=k/f)%1)throw"can't guess height"}else{var l=Math.sqrt(k/(e===a.TEXTURE_CUBE_MAP?6:1));l%1==0?(f=l,g=l):(f=k,g=1)}if(!x(c)){var m=v(a,i);c=new m(c)}if(a.pixelStorei(a.UNPACK_ALIGNMENT,d.unpackAlignment||1),F(a,d),e===a.TEXTURE_CUBE_MAP){var n=k/6*j;M(a,d).forEach(function(b){var d=n*b.ndx,e=c.subarray(d,d+n);a.texImage2D(b.face,0,h,f,g,0,h,i,e)})}else a.texImage2D(e,0,h,f,g,0,h,i,c);return G(a,d),{width:f,height:g}}function V(a,b,c){var d=c.target||a.TEXTURE_2D;a.bindTexture(d,b);var e=c.format||a.RGBA,f=c.type||a.UNSIGNED_BYTE;if(F(a,c),d===a.TEXTURE_CUBE_MAP)for(var g=0;g<6;++g)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,e,c.width,c.height,0,e,f,null);else a.texImage2D(d,0,e,c.width,c.height,0,e,f,null)}function W(a,b,c){b=b||fa;var d=a.createTexture(),e=b.target||a.TEXTURE_2D,f=b.width||1,g=b.height||1;a.bindTexture(e,d),e===a.TEXTURE_CUBE_MAP&&(a.texParameteri(e,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(e,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE));var h=b.src;if(h)if("function"==typeof h&&(h=h(a,b)),"string"==typeof h)Q(a,d,b,c);else if(x(h)||Array.isArray(h)&&("number"==typeof h[0]||Array.isArray(h[0])||x(h[0]))){var i=U(a,d,h,b);f=i.width,g=i.height}else if(Array.isArray(h)&&"string"==typeof h[0])R(a,d,b,c);else{if(!(h instanceof HTMLElement))throw"unsupported src type";Ia(a,d,h,b),f=h.width,g=h.height}else V(a,d,b);return!1!==b.auto&&K(a,d,b,f,g),H(a,d,b),d}function X(a,b,c,d,e){d=d||c.width,e=e||c.height;var f=c.target||a.TEXTURE_2D;a.bindTexture(f,b);var g,h=c.format||a.RGBA,i=c.src;if(g=i&&(x(i)||Array.isArray(i)&&"number"==typeof i[0])?c.type||T(a,i):c.type||a.UNSIGNED_BYTE,f===a.TEXTURE_CUBE_MAP)for(var j=0;j<6;++j)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,h,d,e,0,h,g,null);else a.texImage2D(f,0,h,d,e,0,h,g,null)}function Y(a){return"string"==typeof a||Array.isArray(a)&&"string"==typeof a[0]}function Z(a,b,c){function d(){0===f&&c&&setTimeout(function(){c(g.length?g:void 0,b)},0)}function e(a){--f,a&&g.push(a),d()}var f=0,g=[],h={};return Object.keys(b).forEach(function(c){var d=b[c],g=void 0;Y(d.src)&&(g=e,++f),h[c]=W(a,d,g)}),d(),h}function $(a){return Ka[a]}function _(a){return La[a]}function aa(a,b,c,d){var e=a.FRAMEBUFFER,f=a.createFramebuffer();a.bindFramebuffer(e,f),c=c||a.drawingBufferWidth,d=d||a.drawingBufferHeight,b=b||Ja;var g=0,h={framebuffer:f,attachments:[]};return b.forEach(function(b){var f=b.attachment,i=b.format,j=$(i);if(j||(j=za+g++),!f)if(_(i))f=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,f),a.renderbufferStorage(a.RENDERBUFFER,i,c,d);else{var k=N(b);k.width=c,k.height=d,k.auto=void 0!==b.auto&&b.auto,f=W(a,k)}if(f instanceof WebGLRenderbuffer)a.framebufferRenderbuffer(e,j,a.RENDERBUFFER,f);else{if(!(f instanceof WebGLTexture))throw"unknown attachment type";a.framebufferTexture2D(e,j,b.texTarget||a.TEXTURE_2D,f,b.level||0)}h.attachments.push(f)}),h}function ba(a,b,c,d,e){d=d||a.drawingBufferWidth,e=e||a.drawingBufferHeight,c=c||Ja,c.forEach(function(c,f){var g=b.attachments[f],h=c.format;if(g instanceof WebGLRenderbuffer)a.bindRenderbuffer(a.RENDERBUFFER,g),a.renderbufferStorage(a.RENDERBUFFER,h,d,e);else{if(!(g instanceof WebGLTexture))throw"unknown attachment type";X(a,g,c,d,e)}})}var ca=window.console&&window.console.error?window.console.error.bind(window.console):function(){},da="",ea=new Uint8Array([128,192,255,255]),fa={},ga=5120,ha=5121,ia=5122,ja=5123,ka=5124,la=5125,ma=5126,na=6406,oa=6407,pa=6408,qa=6409,ra=6410,sa=32854,ta=32855,ua=36194,va=33189,wa=6401,xa=36168,ya=34041,za=36064,Aa=36096,Ba=36128,Ca=33071,Da=9729,Ea=function(){function a(a){b||(b={},Object.keys(a).forEach(function(c){"number"==typeof a[c]&&(b[a[c]]=c)}))}var b;return function(c,d){return a(),b[d]||"0x"+d.toString(16)}}(),Fa=["VERTEX_SHADER","FRAGMENT_SHADER"],Ga=function(){var a=["position","positions","a_position"];return function(b){for(var c,d=0;d<a.length&&!((c=a[d])in b);++d);d===a.length&&(c=Object.keys(b)[0]);var e=b[c],f=e.length||e.data.length,g=e.numComponents||y(c,f),h=f/g;if(f%g>0)throw"numComponents "+g+" not correct for length "+f;return h}}(),Ha={},Ia=function(){var a=document.createElement("canvas").getContext("2d");return function(b,c,d,e){e=e||fa;var f=e.target||b.TEXTURE_2D,g=d.width,h=d.height,i=e.format||b.RGBA,j=e.type||b.UNSIGNED_BYTE;if(F(b,e),b.bindTexture(f,c),f===b.TEXTURE_CUBE_MAP){var k,l,m=d.width,n=d.height,o=[0,0,0,0,0,0];if(m/6===n)k=n,l=[0,0,1,0,2,0,3,0,4,0,5,0];else if(m/6==n/2)k=n/2,l=[0,0,1,0,2,0,3,0,4,0,5,0];else if(n/6===m)k=m,l=[0,0,0,1,0,2,0,3,0,4,0,5];else if(m/3==n/2)k=m/3,l=[0,0,1,0,2,0,0,1,1,1,2,1];else if(m/2==n/3)k=m/2,l=[0,0,1,0,0,1,1,1,0,2,1,2];else{if(m/4!=n/3)throw"can't figure out cube map from element: "+(d.src?d.src:d.nodeName);k=m/4,l=[3,1,1,1,1,0,1,2,0,1,2,1],o=[0,0,90,270,0,0]}var p=k;e.isBadGpu&&k>256&&(p=1024),a.canvas.width=p,a.canvas.height=p,g=k,h=k;var q=e.shift?k:0;M(b,e).forEach(function(c){var e=l[2*c.ndx+0]*k,f=l[2*c.ndx+1]*k+q;a.translate(p/2,p/2),a.rotate(o[c.ndx]*Math.PI/180),a.drawImage(d,e,f,k,k,-p/2-1,-p/2-1,p+2,p+2),a.setTransform(1,0,0,1,0,0),b.texImage2D(c.face,0,i,i,j,a.canvas)}),a.canvas.width=1,a.canvas.height=1}else b.texImage2D(f,0,i,i,j,d);G(b,e),!1!==e.auto&&K(b,c,e,g,h),H(b,c,e)}}(),Ja=[{format:pa,type:ha,min:Da,wrap:Ca},{format:ya}],Ka={};Ka[ya]=33306,Ka[wa]=Ba,Ka[xa]=Ba,Ka[6402]=Aa,Ka[va]=Aa;var La={};return La[sa]=!0,La[ta]=!0,La[ua]=!0,La[ya]=!0,La[va]=!0,La[wa]=!0,La[xa]=!0,{createAttribsFromArrays:A,createBuffersFromArrays:C,createBufferInfoFromArrays:B,createAttributeSetters:n,createProgram:g,createProgramFromScripts:i,createProgramFromSources:j,createProgramInfo:q,createUniformSetters:l,drawBufferInfo:D,drawObjectList:E,getWebGLContext:d,resizeCanvasToDisplaySize:r,setAttributes:o,setAttributePrefix:b,setBuffersAndAttributes:p,setUniforms:m,createTexture:W,setEmptyTexture:V,setTextureFromArray:U,loadTextureFromUrl:Q,setTextureFromElement:Ia,setTextureFilteringForSize:K,setTextureParameters:H,setDefaultTextureColor:a,createTextures:Z,resizeTexture:X,createFramebufferInfo:aa,resizeFramebufferInfo:ba}}),c("twgl/v3",[],function(){function a(a){q=a}function b(){return new q(3)}function c(a,b,c){return c=c||new q(3),c[0]=a[0]+b[0],c[1]=a[1]+b[1],c[2]=a[2]+b[2],c}function d(a,b,c){return c=c||new q(3),c[0]=a[0]-b[0],c[1]=a[1]-b[1],c[2]=a[2]-b[2],c}function e(a,b,c,d){return d=d||new q(3),d[0]=(1-c)*a[0]+c*b[0],d[1]=(1-c)*a[1]+c*b[1],d[2]=(1-c)*a[2]+c*b[2],d}function f(a,b,c){return c=c||new q(3),c[0]=a[0]*b,c[1]=a[1]*b,c[2]=a[2]*b,c}function g(a,b,c){return c=c||new q(3),c[0]=a[0]/b,c[1]=a[1]/b,c[2]=a[2]/b,c}function h(a,b,c){return c=c||new q(3),c[0]=a[1]*b[2]-a[2]*b[1],c[1]=a[2]*b[0]-a[0]*b[2],c[2]=a[0]*b[1]-a[1]*b[0],c}function i(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function j(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}function k(a){return a[0]*a[0]+a[1]*a[1]+a[2]*a[2]}function l(a,b){b=b||new q(3);var c=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],d=Math.sqrt(c);return d>1e-5?(b[0]=a[0]/d,b[1]=a[1]/d,b[2]=a[2]/d):(b[0]=0,b[1]=0,b[2]=0),b}function m(a,b){return b=b||new q(3),b[0]=-a[0],b[1]=-a[1],b[2]=-a[2],b}function n(a,b){return b=b||new q(3),b[0]=a[0],b[1]=a[1],b[2]=a[2],b}function o(a,b,c){return c=c||new q(3),c[0]=a[0]*b[0],c[1]=a[1]*b[1],c[2]=a[2]*b[2],c}function p(a,b,c){return c=c||new q(3),c[0]=a[0]/b[0],c[1]=a[1]/b[1],c[2]=a[2]/b[2],c}var q=Float32Array;return{add:c,copy:n,create:b,cross:h,divide:p,divScalar:g,dot:i,lerp:e,length:j,lengthSq:k,mulScalar:f,multiply:o,negate:m,normalize:l,setDefaultType:a,subtract:d}}),c("twgl/m4",["./v3"],function(a){function b(a){VecType=a}function c(a,b){return b=b||new K(16),b[0]=-a[0],b[1]=-a[1],b[2]=-a[2],b[3]=-a[3],b[4]=-a[4],b[5]=-a[5],b[6]=-a[6],b[7]=-a[7],b[8]=-a[8],b[9]=-a[9],b[10]=-a[10],b[11]=-a[11],b[12]=-a[12],b[13]=-a[13],b[14]=-a[14],b[15]=-a[15],b}function d(a,b){return b=b||new K(16),b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15],b}function e(a){return a=a||new K(16),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function f(a,b){if((b=b||new K(16))===a){var c;return c=a[1],a[1]=a[4],a[4]=c,c=a[2],a[2]=a[8],a[8]=c,c=a[3],a[3]=a[12],a[12]=c,c=a[6],a[6]=a[9],a[9]=c,c=a[7],a[7]=a[13],a[13]=c,c=a[11],a[11]=a[14],a[14]=c,b}var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15];return b[0]=d,b[1]=h,b[2]=l,b[3]=p,b[4]=e,b[5]=i,b[6]=m,b[7]=q,b[8]=f,b[9]=j,b[10]=n,b[11]=r,b[12]=g,b[13]=k,b[14]=o,b[15]=s,b}function g(a,b){b=b||new K(16);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],m=a[10],n=a[11],o=a[12],p=a[13],q=a[14],r=a[15],s=m*r,t=q*n,u=i*r,v=q*j,w=i*n,x=m*j,y=e*r,z=q*f,A=e*n,B=m*f,C=e*j,D=i*f,E=k*p,F=o*l,G=g*p,H=o*h,I=g*l,J=k*h,L=c*p,M=o*d,N=c*l,O=k*d,P=c*h,Q=g*d,R=s*h+v*l+w*p-(t*h+u*l+x*p),S=t*d+y*l+B*p-(s*d+z*l+A*p),T=u*d+z*h+C*p-(v*d+y*h+D*p),U=x*d+A*h+D*l-(w*d+B*h+C*l),V=1/(c*R+g*S+k*T+o*U);return b[0]=V*R,b[1]=V*S,b[2]=V*T,b[3]=V*U,b[4]=V*(t*g+u*k+x*o-(s*g+v*k+w*o)),b[5]=V*(s*c+z*k+A*o-(t*c+y*k+B*o)),b[6]=V*(v*c+y*g+D*o-(u*c+z*g+C*o)),b[7]=V*(w*c+B*g+C*k-(x*c+A*g+D*k)),b[8]=V*(E*j+H*n+I*r-(F*j+G*n+J*r)),b[9]=V*(F*f+L*n+O*r-(E*f+M*n+N*r)),b[10]=V*(G*f+M*j+P*r-(H*f+L*j+Q*r)),b[11]=V*(J*f+N*j+Q*n-(I*f+O*j+P*n)),b[12]=V*(G*m+J*q+F*i-(I*q+E*i+H*m)),b[13]=V*(N*q+E*e+M*m-(L*m+O*q+F*e)),b[14]=V*(L*i+Q*q+H*e-(P*q+G*e+M*i)),b[15]=V*(P*m+I*e+O*i-(N*i+Q*m+J*e)),b}function h(a,b,c){c=c||new K(16);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15],t=b[0],u=b[1],v=b[2],w=b[3],x=b[4],y=b[5],z=b[6],A=b[7],B=b[8],C=b[9],D=b[10],E=b[11],F=b[12],G=b[13],H=b[14],I=b[15];return c[0]=d*t+e*x+f*B+g*F,c[1]=d*u+e*y+f*C+g*G,c[2]=d*v+e*z+f*D+g*H,c[3]=d*w+e*A+f*E+g*I,c[4]=h*t+i*x+j*B+k*F,c[5]=h*u+i*y+j*C+k*G,c[6]=h*v+i*z+j*D+k*H,c[7]=h*w+i*A+j*E+k*I,c[8]=l*t+m*x+n*B+o*F,c[9]=l*u+m*y+n*C+o*G,c[10]=l*v+m*z+n*D+o*H,c[11]=l*w+m*A+n*E+o*I,c[12]=p*t+q*x+r*B+s*F,c[13]=p*u+q*y+r*C+s*G,c[14]=p*v+q*z+r*D+s*H,c[15]=p*w+q*A+r*E+s*I,c}function i(a,b,c){return c=c||e(),a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11]),c[12]=b[0],c[13]=b[1],c[14]=b[2],c[15]=1,c}function j(b,c){return c=c||a.create(),c[0]=b[12],c[1]=b[13],c[2]=b[14],c}function k(b,c,d){d=d||a.create();var e=4*c;return d[0]=b[e+0],d[1]=b[e+1],d[2]=b[e+2],d}function l(a,b,c,d,e){e=e||new K(16);var f=Math.tan(.5*Math.PI-.5*a),g=1/(c-d);return e[0]=f/b,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(c+d)*g,e[11]=-1,e[12]=0,e[13]=0,e[14]=c*d*g*2,e[15]=0,e}function m(a,b,c,d,e,f,g){return g=g||new K(16),g[0]=2/(b-a),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(d-c),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=-1/(f-e),g[11]=0,g[12]=(b+a)/(a-b),g[13]=(d+c)/(c-d),g[14]=-e/(e-f),g[15]=1,g}function n(a,b,c,d,e,f,g){g=g||new K(16);var h=b-a,i=d-c,j=e-f;return g[0]=2*e/h,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*e/i,g[6]=0,g[7]=0,g[8]=(a+b)/h,g[9]=(d+c)/i,g[10]=f/j,g[11]=-1,g[12]=0,g[13]=0,g[14]=e*f/j,g[15]=0,g}function o(b,c,d,e){e=e||new K(16);var f=L,g=M,h=N;return a.normalize(a.subtract(b,c,h),h),a.normalize(a.cross(d,h,f),f),a.normalize(a.cross(h,f,g),g),e[0]=f[0],e[1]=f[1],e[2]=f[2],e[3]=0,e[4]=g[0],e[5]=g[1],e[6]=g[2],e[7]=0,e[8]=h[0],e[9]=h[1],e[10]=h[2],e[11]=0,e[12]=b[0],e[13]=b[1],e[14]=b[2],e[15]=1,e}function p(a,b){return b=b||new K(16),b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=a[0],b[13]=a[1],b[14]=a[2],b[15]=1,b}function q(a,b,c){c=c||new K(16);var d=b[0],e=b[1],f=b[2],g=a[0],h=a[1],i=a[2],j=a[3],k=a[4],l=a[5],m=a[6],n=a[7],o=a[8],p=a[9],q=a[10],r=a[11],s=a[12],t=a[13],u=a[14],v=a[15];return a!==c&&(c[0]=g,c[1]=h,c[2]=i,c[3]=j,c[4]=k,c[5]=l,c[6]=m,c[7]=n,c[8]=o,c[9]=p,c[10]=q,c[11]=r),c[12]=g*d+k*e+o*f+s,c[13]=h*d+l*e+p*f+t,c[14]=i*d+m*e+q*f+u,c[15]=j*d+n*e+r*f+v,c}function r(a,b){b=b||new K(16);var c=Math.cos(a),d=Math.sin(a);return b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=c,b[6]=d,b[7]=0,b[8]=0,b[9]=-d,b[10]=c,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}function s(a,b,c){c=c||new K(16);var d=a[4],e=a[5],f=a[6],g=a[7],h=a[8],i=a[9],j=a[10],k=a[11],l=Math.cos(b),m=Math.sin(b);return c[4]=l*d+m*h,c[5]=l*e+m*i,c[6]=l*f+m*j,c[7]=l*g+m*k,c[8]=l*h-m*d,c[9]=l*i-m*e,c[10]=l*j-m*f,c[11]=l*k-m*g,a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]),c}function t(a,b){b=b||new K(16);var c=Math.cos(a),d=Math.sin(a);return b[0]=c,b[1]=0,b[2]=-d,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=d,b[9]=0,b[10]=c,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}function u(a,b,c){c=c||new K(16);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[8],i=a[9],j=a[10],k=a[11],l=Math.cos(b),m=Math.sin(b);return c[0]=l*d-m*h,c[1]=l*e-m*i,c[2]=l*f-m*j,c[3]=l*g-m*k,c[8]=l*h+m*d,c[9]=l*i+m*e,c[10]=l*j+m*f,c[11]=l*k+m*g,a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]),c}function v(a,b){b=b||new K(16);var c=Math.cos(a),d=Math.sin(a);return b[0]=c,b[1]=d,b[2]=0,b[3]=0,b[4]=-d,b[5]=c,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}function A(a,b,c){c=c||new K(16);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=Math.cos(b),m=Math.sin(b);return c[0]=l*d+m*h,c[1]=l*e+m*i,c[2]=l*f+m*j,c[3]=l*g+m*k,c[4]=l*h-m*d,c[5]=l*i-m*e,c[6]=l*j-m*f,c[7]=l*k-m*g,a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]),c}function B(a,b,c){c=c||new K(16);var d=a[0],e=a[1],f=a[2],g=Math.sqrt(d*d+e*e+f*f);d/=g,e/=g,f/=g;var h=d*d,i=e*e,j=f*f,k=Math.cos(b),l=Math.sin(b),m=1-k;return c[0]=h+(1-h)*k,c[1]=d*e*m+f*l,c[2]=d*f*m-e*l,c[3]=0,c[4]=d*e*m-f*l,c[5]=i+(1-i)*k,c[6]=e*f*m+d*l,c[7]=0,c[8]=d*f*m+e*l,c[9]=e*f*m-d*l,c[10]=j+(1-j)*k,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function C(a,b,c,d){d=d||new K(16);var e=b[0],f=b[1],g=b[2],h=Math.sqrt(e*e+f*f+g*g);e/=h,f/=h,g/=h;var i=e*e,j=f*f,k=g*g,l=Math.cos(c),m=Math.sin(c),n=1-l,o=i+(1-i)*l,p=e*f*n+g*m,q=e*g*n-f*m,r=e*f*n-g*m,s=j+(1-j)*l,t=f*g*n+e*m,u=e*g*n+f*m,v=f*g*n-e*m,w=k+(1-k)*l,x=a[0],y=a[1],z=a[2],A=a[3],B=a[4],C=a[5],D=a[6],E=a[7],F=a[8],G=a[9],H=a[10],I=a[11];return d[0]=o*x+p*B+q*F,d[1]=o*y+p*C+q*G,d[2]=o*z+p*D+q*H,d[3]=o*A+p*E+q*I,d[4]=r*x+s*B+t*F,d[5]=r*y+s*C+t*G,d[6]=r*z+s*D+t*H,d[7]=r*A+s*E+t*I,d[8]=u*x+v*B+w*F,d[9]=u*y+v*C+w*G,d[10]=u*z+v*D+w*H,d[11]=u*A+v*E+w*I,a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}function D(a,b){return b=b||new K(16),b[0]=a[0],b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=a[1],b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=a[2],b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}function E(a,b,c){c=c||new K(16);var d=b[0],e=b[1],f=b[2];return c[0]=d*a[0],c[1]=d*a[1],c[2]=d*a[2],c[3]=d*a[3],c[4]=e*a[4],c[5]=e*a[5],c[6]=e*a[6],c[7]=e*a[7],c[8]=f*a[8],c[9]=f*a[9],c[10]=f*a[10],c[11]=f*a[11],a!==c&&(c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]),a}function F(b,c,d){d=d||a.create();var e=c[0],f=c[1],g=c[2],h=e*b[3]+f*b[7]+g*b[11]+b[15];return d[0]=(e*b[0]+f*b[4]+g*b[8]+b[12])/h,d[1]=(e*b[1]+f*b[5]+g*b[9]+b[13])/h,d[2]=(e*b[2]+f*b[6]+g*b[10]+b[14])/h,d}function G(b,c,d){d=d||a.create();var e=c[0],f=c[1],g=c[2];return d[0]=e*b[0]+f*b[4]+g*b[8],d[1]=e*b[1]+f*b[5]+g*b[9],d[2]=e*b[2]+f*b[6]+g*b[10],d}function H(b,c,d){d=d||a.create();var e=g(b),f=c[0],h=c[1],i=c[2];return d[0]=f*e[0]+h*e[1]+i*e[2],d[1]=f*e[4]+h*e[5]+i*e[6],d[2]=f*e[8]+h*e[9]+i*e[10],d}function I(a,b,c){var d=a[0],e=a[1],f=a[2],g=a[3],h=d+d,i=e+e,j=f+f,k=d*h,l=d*i,m=d*j,n=e*i,o=e*j,p=f*j,q=g*h,r=g*i,s=g*j;return c[0]=1-(n+p),c[1]=l+s,c[2]=m-r,c[3]=0,c[4]=l-s,c[5]=1-(k+p),c[6]=o+q,c[7]=0,c[8]=m+r,c[9]=o-q,c[10]=1-(k+n),c[11]=0,c[12]=b[0],c[13]=b[1],c[14]=b[2],c[15]=1,c}function J(a,b,c){var d=Math.cos(a/2),e=Math.sin(a/2),f=Math.cos(b/2),g=Math.sin(b/2),h=Math.cos(c/2),i=Math.sin(c/2),j=d*f,k=e*g;return w=j*h-k*i,x=j*i+k*h,y=e*f*h+d*g*i,z=d*g*h-e*f*i,[x,y,z,w]}var K=Float32Array,L=a.create(),M=a.create(),N=a.create();return{axisRotate:C,axisRotation:B,create:e,copy:d,frustum:n,getAxis:k,getTranslation:j,identity:e,inverse:g,lookAt:o,multiply:h,negate:c,ortho:m,perspective:l,rotateX:s,rotateY:u,rotateZ:A,rotationX:r,rotationY:t,rotationZ:v,scale:E,scaling:D,setDefaultType:b,setTranslation:i,transformDirection:G,transformNormal:H,transformPoint:F,translate:q,translation:p,transpose:f,eularToQuat:J,fromRotationTranslation:I}}),c("twgl/primitives",["./twgl","./m4","./v3"],function(a,b,c){function d(a,b){var c=0;return a.push=function(){for(var b=0;b<arguments.length;++b){var d=arguments[b];if(d instanceof Array||d.buffer&&d.buffer instanceof ArrayBuffer)for(var e=0;e<d.length;++e)a[c++]=d[e];else a[c++]=d}},a.reset=function(a){c=a||0},a.numComponents=b,Object.defineProperty(a,"numElements",{get:function(){return this.length/this.numComponents|0}}),a}function e(a,b,c){return d(new(c||Float32Array)(a*b),a)}function f(a){return"indices"!==a}function g(a){function b(b){for(var f=a[b],h=f.numComponents,i=e(h,g,f.constructor),j=0;j<g;++j)for(var k=c[j],l=k*h,m=0;m<h;++m)i.push(f[l+m]);d[b]=i}var c=a.indices,d={},g=c.length;return Object.keys(a).filter(f).forEach(b),d}function h(a){if(a.indices)throw"can't flatten normals of indexed vertices. deindex them first";for(var b=a.normal,c=b.length,d=0;d<c;d+=9){var e=b[d+0],f=b[d+1],g=b[d+2],h=b[d+3],i=b[d+4],j=b[d+5],k=b[d+6],l=b[d+7],m=b[d+8],n=e+h+k,o=f+i+l,p=g+j+m,q=Math.sqrt(n*n+o*o+p*p);n/=q,o/=q,p/=q,b[d+0]=n,b[d+1]=o,b[d+2]=p,b[d+3]=n,b[d+4]=o,b[d+5]=p,b[d+6]=n,b[d+7]=o,b[d+8]=p}return a}function i(a,b,c){for(var d=a.length,e=new Float32Array(3),f=0;f<d;f+=3)c(b,[a[f],a[f+1],a[f+2]],e),a[f]=e[0],a[f+1]=e[1],a[f+2]=e[2]}function j(a,b,d){d=d||c.create();var e=b[0],f=b[1],g=b[2];return d[0]=e*a[0]+f*a[1]+g*a[2],d[1]=e*a[4]+f*a[5]+g*a[6],d[2]=e*a[8]+f*a[9]+g*a[10],d}function k(a,c){return i(a,c,b.transformDirection),a}function l(a,c){return i(a,b.inverse(c),j),a}function m(a,c){return i(a,c,b.transformPoint),a}function n(a,b){return Object.keys(a).forEach(function(c){var d=a[c];c.indexOf("pos")>=0?m(d,b):c.indexOf("tan")>=0||c.indexOf("binorm")>=0?k(d,b):c.indexOf("norm")>=0&&l(d,b)}),a}function o(a,b,c){return a=a||2,b=b||0,c=c||0,a*=.5,{position:{numComponents:2,data:[b+-1*a,c+-1*a,b+1*a,c+-1*a,b+-1*a,c+1*a,b+1*a,c+1*a]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function p(a,c,d,f,g){a=a||1,c=c||1,d=d||1,f=f||1,g=g||b.identity();for(var h=(d+1)*(f+1),i=e(3,h),j=e(3,h),k=e(2,h),l=0;l<=f;l++)for(var m=0;m<=d;m++){var o=m/d,p=l/f;i.push(a*o-.5*a,0,c*p-.5*c),j.push(0,1,0),k.push(o,p)}
for(var q=d+1,r=e(3,d*f*2,Uint16Array),l=0;l<f;l++)for(var m=0;m<d;m++)r.push((l+0)*q+m,(l+1)*q+m,(l+0)*q+m+1),r.push((l+1)*q+m,(l+1)*q+m+1,(l+0)*q+m+1);return n({position:i,normal:j,texcoord:k,indices:r},g)}function q(a,b,c,d,f,g,h){if(b<=0||c<=0)throw Error("subdivisionAxis and subdivisionHeight must be > 0");d=d||0,f=f||Math.PI,g=g||0,h=h||2*Math.PI;for(var i=f-d,j=h-g,k=(b+1)*(c+1),l=e(3,k),m=e(3,k),n=e(2,k),o=0;o<=c;o++)for(var p=0;p<=b;p++){var q=p/b,r=o/c,s=j*q,t=i*r,u=Math.sin(s),v=Math.cos(s),w=Math.sin(t),x=Math.cos(t),y=v*w,z=x,A=u*w;l.push(a*y,a*z,a*A),m.push(y,z,A),n.push(1-q,r)}for(var B=b+1,C=e(3,b*c*2,Uint16Array),p=0;p<b;p++)for(var o=0;o<c;o++)C.push((o+0)*B+p,(o+0)*B+p+1,(o+1)*B+p),C.push((o+1)*B+p,(o+0)*B+p+1,(o+1)*B+p+1);return{position:l,normal:m,texcoord:n,indices:C}}function r(a){a=a||1;for(var b=a/2,c=[[-b,-b,-b],[+b,-b,-b],[-b,+b,-b],[+b,+b,-b],[-b,-b,+b],[+b,-b,+b],[-b,+b,+b],[+b,+b,+b]],d=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],f=[[1,0],[0,0],[0,1],[1,1]],g=24,h=e(3,g),i=e(3,g),j=e(2,g),k=e(3,12,Uint16Array),l=0;l<6;++l){for(var m=D[l],n=0;n<4;++n){var o=c[m[n]],p=d[l],q=f[n];h.push(o),i.push(p),j.push(q)}var r=4*l;k.push(r+0,r+1,r+2),k.push(r+0,r+2,r+3)}return{position:h,normal:i,texcoord:j,indices:k}}function s(a,b,c,d,f,g,h){if(d<3)throw Error("radialSubdivisions must be 3 or greater");if(f<1)throw Error("verticalSubdivisions must be 1 or greater");for(var i=void 0===g||g,j=void 0===h||h,k=(i?2:0)+(j?2:0),l=(d+1)*(f+1+k),m=e(3,l),n=e(3,l),o=e(2,l),p=e(3,d*(f+k)*2,Uint16Array),q=d+1,r=Math.atan2(a-b,c),s=Math.cos(r),t=Math.sin(r),u=i?-2:0,v=f+(j?2:0),w=u;w<=v;++w){var x,y=w/f,z=c*y;w<0?(z=0,y=1,x=a):w>f?(z=c,y=1,x=b):x=a+w/f*(b-a),-2!==w&&w!==f+2||(x=0,y=0),z-=c/2;for(var A=0;A<q;++A){var B=Math.sin(A*Math.PI*2/d),C=Math.cos(A*Math.PI*2/d);m.push(B*x,z,C*x),n.push(w<0||w>f?0:B*s,w<0?-1:w>f?1:t,w<0||w>f?0:C*s),o.push(A/d,1-y)}}for(var w=0;w<f+k;++w)for(var A=0;A<d;++A)p.push(q*(w+0)+0+A,q*(w+0)+1+A,q*(w+1)+1+A),p.push(q*(w+0)+0+A,q*(w+1)+1+A,q*(w+1)+0+A);return{position:m,normal:n,texcoord:o,indices:p}}function t(a,b){b=b||[];for(var c=[],d=0;d<a.length;d+=4){var e=a[d],f=a.slice(d+1,d+4);f.push.apply(f,b);for(var g=0;g<e;++g)c.push.apply(c,f)}return c}function u(){var a=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],b=[.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0],c=t([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),d=t([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),f=a.length/3,g={position:e(3,f),texcoord:e(2,f),normal:e(3,f),color:e(4,f,Uint8Array),indices:e(3,f/3,Uint16Array)};g.position.push(a),g.texcoord.push(b),g.normal.push(c),g.color.push(d);for(var h=0;h<f;++h)g.indices.push(h);return g}function v(a,b,d,f,g,h,i){function j(a,b,c){return a+(b-a)*c}function k(b,d,e,i,k,l){for(var o=0;o<=g;o++){var s=d/(m-1),t=o/g,u=2*(s-.5),v=(h+t*n)*Math.PI,w=Math.sin(v),x=Math.cos(v),y=j(a,b,w),z=u*f,A=x*a,B=w*y;p.push(z,A,B);var C=c.add(c.multiply([0,w,x],e),i);q.push(C),r.push(s*k+l,t)}}function l(a,b){for(var c=0;c<g;++c)u.push(a+c+0,a+c+1,b+c+0),u.push(a+c+1,b+c+1,b+c+0)}if(g<=0)throw Error("subdivisionDown must be > 0");h=h||0,i=i||1;for(var m=2,n=i-h,o=2*(g+1)*(2+m),p=e(3,o),q=e(3,o),r=e(2,o),s=0;s<m;s++){var t=2*(s/(m-1)-.5);k(b,s,[1,1,1],[0,0,0],1,0),k(b,s,[0,0,0],[t,0,0],0,0),k(d,s,[1,1,1],[0,0,0],1,0),k(d,s,[0,0,0],[t,0,0],0,1)}var u=e(3,2*g*(2+m),Uint16Array),v=g+1;return l(0*v,4*v),l(5*v,7*v),l(6*v,2*v),l(3*v,1*v),{position:p,normal:q,texcoord:r,indices:u}}function w(a,b,c,d,e,f){return s(a,a,b,c,d,e,f)}function x(a,b,c,d,f,g){if(c<3)throw Error("radialSubdivisions must be 3 or greater");if(d<3)throw Error("verticalSubdivisions must be 3 or greater");f=f||0,g=g||2*Math.PI,range=g-f;for(var h=c+1,i=d+1,j=h*i,k=e(3,j),l=e(3,j),m=e(2,j),n=e(3,c*d*2,Uint16Array),o=0;o<i;++o)for(var p=o/d,q=p*Math.PI*2,r=Math.sin(q),s=a+r*b,t=Math.cos(q),u=t*b,v=0;v<h;++v){var w=v/c,x=f+w*range,y=Math.sin(x),z=Math.cos(x),A=y*s,B=z*s,C=y*r,D=z*r;k.push(A,u,B),l.push(C,t,D),m.push(w,1-p)}for(var o=0;o<d;++o)for(var v=0;v<c;++v){var E=1+v,F=1+o;n.push(h*o+v,h*F+v,h*o+E),n.push(h*F+v,h*F+E,h*o+E)}return{position:k,normal:l,texcoord:m,indices:n}}function y(a,b,c,d,f){if(b<3)throw Error("divisions must be at least 3");c=c||1,f=f||1,d=d||0;for(var g=(b+1)*(c+1),h=e(3,g),i=e(3,g),j=e(2,g),k=e(3,c*b*2,Uint16Array),l=0,m=a-d,n=0;n<=c;++n){for(var o=d+m*Math.pow(n/c,f),p=0;p<=b;++p){var q=2*Math.PI*p/b,r=o*Math.cos(q),s=o*Math.sin(q);if(h.push(r,0,s),i.push(0,1,0),j.push(1-p/b,n/c),n>0&&p!==b){var t=l+(p+1),u=l+p,v=l+p-b,w=l+(p+1)-b;k.push(t,u,v),k.push(t,v,w)}}l+=b+1}return{position:h,normal:i,texcoord:j,indices:k}}function z(a){return Math.random()*a|0}function A(a,b){b=b||{};var c=a.position.numElements,d=e(4,c,Uint8Array),f=b.rand||function(a,b){return b<3?z(256):255};if(a.color=d,a.indices)for(var g=0;g<c;++g)d.push(f(g,0),f(g,1),f(g,2),f(g,3));else for(var h=b.vertsPerColor||3,i=c/h,g=0;g<i;++g)for(var j=[f(g,0),f(g,1),f(g,2),f(g,3)],k=0;k<h;++k)d.push(j);return a}function B(b){return function(c){var d=b.apply(this,Array.prototype.slice.call(arguments,1));return a.createBuffersFromArrays(c,d)}}function C(b){return function(c){var d=b.apply(null,Array.prototype.slice.call(arguments,1));return a.createBufferInfoFromArrays(c,d)}}var D=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];return{create3DFBufferInfo:C(u),create3DFBuffers:B(u),create3DFVertices:u,createAugmentedTypedArray:e,createCubeBufferInfo:C(r),createCubeBuffers:B(r),createCubeVertices:r,createPlaneBufferInfo:C(p),createPlaneBuffers:B(p),createPlaneVertices:p,createSphereBufferInfo:C(q),createSphereBuffers:B(q),createSphereVertices:q,createTruncatedConeBufferInfo:C(s),createTruncatedConeBuffers:B(s),createTruncatedConeVertices:s,createXYQuadBufferInfo:C(o),createXYQuadBuffers:B(o),createXYQuadVertices:o,createCresentBufferInfo:C(v),createCresentBuffers:B(v),createCresentVertices:v,createCylinderBufferInfo:C(w),createCylinderBuffers:B(w),createCylinderVertices:w,createTorusBufferInfo:C(x),createTorusBuffers:B(x),createTorusVertices:x,createDiscBufferInfo:C(y),createDiscBuffers:B(y),createDiscVertices:y,deindexVertices:g,flattenNormals:h,makeRandomVertexColors:A,reorientDirections:k,reorientNormals:l,reorientPositions:m,reorientVertices:n}}),c("main",["twgl/twgl","twgl/m4","twgl/v3","twgl/primitives"],function(a,b,c,d){return a.m4=b,a.v3=c,a.primitives=d,a}),b(["main"],function(a){return a},void 0,!0),c("build/js/twgl-includer-full",function(){}),b("main")});
/**
   Modifications to twgl.js:
   MB - added 6x2 stereo cubemap layout to 'setTextureFromElement()', use 'shift=1' to select offset
   MB - added 4X3 stereo cubemap layout to 'setTextureFromElement()' to support cross layout.
   MB - added 'twgl.m4.fromRotationTranslation()' for minimal quaternion webVR support (borrowed from Gregg Tavares's glmatrix library)
   MB - added 'twgl.m4.eularToQuat()' to convert onDeviceOrientation input to quaternion
   MB - added option 'shrink'.  Resize cubemap destination canvas to allow for bad GPU's (ie. where max cube map texture size = 1024) 
*/

/**
   VR support (using WebVR)
*/

var vrHMD, vrSensor, vrEnabled = false;

function initVR(callbackfn) {
    function enumerateVRDevices(vrdevs) {
        // First, find a HMD -- just use the first one we find
        vrdevs.every(function(e) {
            vrHMD = e;
            return (!e instanceof HMDVRDevice)
        })
        if (!vrHMD) return;
        if (callbackfn) callbackfn();

        // Then, find that HMD's position sensor
        vrdevs.every(function(e) {
            getCameraQuaternion = function() {
                var quat = [0, 0, 0, 0];
                if (vrSensor) {
                    var state = vrSensor.getState();
                    if (state.orientation)
                        quat = [state.orientation.x, state.orientation.y, state.orientation.z, state.orientation.w];
                }
                return quat;
            }
            vrSensor = e;
            return !((e.hardwareUnitId == vrHMD.hardwareUnitId) && (e instanceof PositionSensorVRDevice))
        })
    }
    if (navigator.getVRDevices)
        navigator.getVRDevices().then(enumerateVRDevices);
    else if (navigator.mozGetVRDevices)
        navigator.mozGetVRDevices(enumerateVRDevices);
}

initVR(function() {
    setSvgIcon(1);
});

function startVRfullscreen() {
    if (!vrHMD)
        console.log("couldn't find webVR. Opening to full screen, and displaying the info card on how to support Oculus by installing webVR.");

    if (isMobile)
        isDistortion = (isDistortion) ? 0 : 1;

    if (isMobile || vrEnabled)
        isStereo = (isStereo) ? null : 1;
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
        if (document.msExitFullscreen) document.msExitFullscreen();
        if (document.webkitIsFullScreen) document.webkitExitFullscreen();
        if (document.mozFullScreen) document.mozCancelFullScreen();
    } else {
        var t = {
            vrDisplay: vrHMD /*,vrDistortion: false */
        }
        if (document.body.webkitRequestFullScreen) document.body.webkitRequestFullScreen(t)
        if (document.body.mozRequestFullScreen) document.body.mozRequestFullScreen(t)
        if (document.body.msRequestFullscreen) document.body.msRequestFullscreen()
    }
}

function fullScreenChange() {
    var isFullscreen = (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenEnabled);
    vrEnabled = vrHMD && isFullscreen;
    //automatically switch to stereo mode if 'cardboard' or is 'webVR' enabled
    //update icon's
    if (!vrHMD) {
        setSvgIcon((isFullscreen) ? 2 : 0);
    }
}
document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
document.addEventListener('mozfullscreenchange', fullScreenChange, false);
document.addEventListener('fullscreenchange', fullScreenChange, false);
/**
   Command line URL Inputs - stereo=1, flipLR=1, msaa=1, fov=80.
*/

var q = {};
if (location.href.split('?')[1]) location.href.split('?')[1].split('&').forEach(function(i) {
    q[i.split('=')[0]] = i.split('=')[1];
});

var isMobile = navigator.userAgent.match(/iPhone|Android|iPad|iPod/);
var isAndroid = navigator.userAgent.match(/Android/);
var isIEwin = navigator.userAgent.match(/Trident/); //IE11 cannot handle NPOT textures
var isStereo = q.stereo || q.flipLR; // flip left and right eye, for debugging stereo on desktop/ipad (cross your eyes)
var isDistortion = q.distort;
var fov = q.fov || 80; // set the field of view
var useMSAA = q.msaa || 1;



/**
   webgl - using twgl.js helper library.  Based on 'primitives' scenegraph example.  Added stereo and popup labels
*/

twgl.setAttributePrefix("a_");
var m4 = twgl.m4;
var gl = twgl.getWebGLContext(c, {
    depth: true,
    antialias: true
});
var eye = [0, 0, 0];
var camera = m4.identity();
var view = m4.identity();
var viewDirection = m4.identity();
var viewDirectionProjection = m4.identity();
var viewDirectionProjectionInverse = m4.identity();

var objects = [];
var drawObjects = [];

function initStereoSkybox(isLatlong) {
    var programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
    var plane = twgl.primitives.createXYQuadBufferInfo(gl);

    var previewTxture = isLatlong ? 
		twgl.createTexture(gl, {
			target: gl.TEXTURE_2D,
			format: gl.LUMINANCE,
			src: [0xF0]
		})	: twgl.createTexture(gl, {
			target: gl.TEXTURE_CUBE_MAP,
			format: gl.LUMINANCE,
			src: [0xF0, 0xE0, 0xD0, 0xC0, 0xB0, 0xA0, ]
		});

    var uniforms = {
        u_skybox: previewTxture,
        u_color: [1, 1, 1, 1],
        u_viewDirectionProjectionInverse: viewDirectionProjectionInverse,
        u_distortion: [1.0, 0.05, 0.07] // cardboard v1 [1.0,0.15,0.18] // SVR Glass [1.0,0.08,0.09]
    }
    drawObjects.push({
        programInfo: programInfo,
        bufferInfo: plane,
        uniforms: uniforms,
    });

    objects.push({
        skyboxL: previewTxture,
        skyboxR: previewTxture,
        fov: 90,
        uniforms: uniforms,
        type: 0
    });
}

var g_suspendRenderingLoop = false;
var _fov = fov;

function render(time) {
    //time *= 0.001;
    requestAnimationFrame(render);
    if (g_suspendRenderingLoop) return; //check for any movement.  

    var aspect = gl.canvas.width / gl.canvas.height * ((isStereo) ? 0.5 : 1.0);
    var projection = m4.perspective(_fov * Math.PI / 180, aspect, 0.5, 10);
    var quat = getCameraQuaternion();
    _fov += (fov - _fov) * 0.1;

    m4.fromRotationTranslation(quat, eye, camera)
    m4.inverse(camera, view);
    m4.setTranslation(view, eye, viewDirection);
    m4.multiply(viewDirection, projection, viewDirectionProjection);
    m4.inverse(viewDirectionProjection, viewDirectionProjectionInverse);

    objects[0].uniforms.u_distortion[0] = (isDistortion == 1) ? 1 : 0;

    //Render CubeMaps (either stereo or mono)
    if (!isStereo) {
        // Render Mono
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        twgl.drawObjectList(gl, drawObjects);
    } else {
        // Render Stereo
        gl.viewport(0, 0, gl.canvas.width / 2, gl.canvas.height);
        objects.forEach(function(obj) {
            obj.uniforms.u_skybox = obj.skyboxL
        });
        twgl.drawObjectList(gl, drawObjects);
        // Render Right
        gl.viewport(gl.canvas.width / 2, 0, gl.canvas.width / 2, gl.canvas.height);
        objects.forEach(function(obj) {
            obj.uniforms.u_skybox = obj.skyboxR
        });
        twgl.drawObjectList(gl, drawObjects);
    }
}

/**
   Input - Touch/Mouse and html5-DeviceOrientation
*/

var ox, oy, dx, dy, ddx, ddy;
var tx, ty, rx, ry;
ox = 100, oy = 0.0, dx = -40, dy = 0.0, dz = 0.0, ddx = -70.0, ddy = 10.0;
rx = -40.0, ry = -20.0, rz = 0;

var friction = 0.001;
var Pii = Math.PI / 180;

function $(elem) {
    return document.getElementById(elem)
}

function $$(elem) {
    return document.getElementById(elem).style
}
var getCameraQuaternion = function() {
    if (isMobile) friction = 0.7; //sensor refresh is 20Hz on ios8, 60Hz on ios9, and android 60Hz
    if ((Math.abs(ddx + dx - rx) > 90) || (Math.abs(-ddy + dy - ry) > 90)) friction = 1;
    if (Math.abs(dz - rz) > 3) friction = 1;
    rx += (ddx + dx - rx) * friction;
    ry += (-ddy + dy - ry) * friction;
    rz += (dz - rz) * friction;
    return m4.eularToQuat(rx * Pii, rz, ry * Pii);
}

window.onorientationchange = function() {
    var isPortrait = (window.orientation == 0);
    var isLandscape = !isPortrait && isMobile;
    if (isLandscape && q.url) {
        isStereo = 1;
        isDistortion = 1;
        useMSAA = q.msaa || 2;
    }
    twgl.resizeCanvasToDisplaySize(gl.canvas, useMSAA);
    $$('rotatePhone').cssText = (isPortrait && q.url) ? 'display:block' : 'display:none';
    $$('info-icon').cssText = (isMobile) ? 'display:none;' : '';
}
window.onorientationchange();


if (isMobile && window.DeviceOrientationEvent) {
    var ondeviceorientation = function(e) {
        dx = e.alpha + 0.01;
        dy = -(90.0 + e.gamma);
        dz = -e.beta * Pii;

        //Handle orientation quirk, if phone is landscape upside down
        if (window.orientation == -90) {
            dy = (isAndroid) ? -dy : 180.0 - dy;
            dx = (isAndroid) ? dx : 180.0 + dx;
            dz = -dz;
        }

        //Handle portrait
        if (window.orientation == 0) {
            isStereo = 0;
            dx = 90 + dx;
            dy = -(90 + dz / Pii);
            dz = 0;
            isDistortion = null;
        }
    };

    //check whether permission API is supported
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        var btn = document.createElement('DIV');
        btn.innerText = 'Tap here to enable device orientation tracking';
        btn.style.cssText = 'position:absolute;left:0;top:0;z-index:9999;width:auto;padding:10px;color:#fff;font-size:14px;background:rgba(0,0,0,0.2);';
        btn.addEventListener('click', function(){
            DeviceOrientationEvent.requestPermission().then(function(resp){
                if (resp == 'granted') {
                    window.ondeviceorientation = ondeviceorientation;
                }
            }).catch(console.error);
            document.body.removeChild(btn);
        });
        document.body.appendChild(btn);
    } else {
        window.ondeviceorientation = ondeviceorientation;
    }
}

// twgl uses 'c' global for canvas
var suspend_timer, m_button;
c.onmouseup = function(evt) {
    evt.preventDefault();
    m_button = 0;
    window.clearTimeout(suspend_timer);
    suspend_timer = window.setTimeout(function() {
        g_suspendRenderingLoop = true;
    }, 4000);
}

c.onmousedown = function(evt) {
    m_button = 1;
    friction = 0.05; //when the pano first opens, do a slow initial camera pan of the scene, to indicate to the user that this is not just a static image.  Also, the mouse cursor is changed to a spin symbol, to also help indicate that the user can spin the scene with their mouse. 
}

c.ontouchstart = function(evt) {
    evt.preventDefault();
    var tap = (isMobile) ? evt.touches[0] : evt;
    tx = tap.pageX;
    ty = tap.pageY;
}

c.ontouchmove = c.onmousemove = function(evt) {
    evt.preventDefault();
    var tap = (isMobile) ? evt.touches[0] : evt;
    ox = tx;
    oy = ty;
    tx = tap.pageX;
    ty = tap.pageY;
    if (isMobile || m_button) {
        ddx += (tx - ox) / 4;
        ddy -= (ty - oy) / 6;
        g_suspendRenderingLoop = false;
    }

}

window.onresize = function() {
    twgl.resizeCanvasToDisplaySize(gl.canvas, useMSAA)
}
var isviz = false;

function zoom() {
    fov = (fov < 40) ? 110 : (fov - 30);
    g_suspendRenderingLoop = false;
    $$('icon-zoomin').cssText = (fov < 39) ? 'display:none' : '';
}

function showinfo() {
    isviz = !isviz;
    if (isviz) $("infocard").focus();
    else $("webvr-container").focus();
}

function setSvgIcon(n) {
    var szWVR = '<svg viewBox="0 25 185 140"><g><g><path fill="white" stroke="black" stroke-width="1" id="_x3C_Path_x3E__9_" d="M171.2,144.2c0-5.6-3.6-7.2-8.8-7.2H155v26h6v-11h-0.4l6.4,11h6.2l-7.4-11.3    C169.3,151.1,171.2,147.6,171.2,144.2z M161.2,149H161v-9h0.3c2.7,0,4.8,1.2,4.8,4.4C166,147.6,164.1,149,161.2,149z"/>      <polygon fill="white" stroke="black" stroke-width="1" points="132.3,153 132.2,153 125.9,137 120.4,137 130.4,163 133.4,163 143.6,137 138.1,137   "/>      <path fill="white" stroke="black" stroke-width="1" id="_x3C_Path_x3E__8_" d="M105,147.9c1.6-1,2.3-2.5,2.3-4.4c0-5.2-3-6.5-7.9-6.5H93v26h8.1c4.8,0,8.4-2.9,8.4-8    C109.5,152.1,108.1,148.4,105,147.9z M98,140h0.8c2.2,0,3.7,0.8,3.7,3.5c0,2.7-1.2,3.5-3.7,3.5H98V140z M99.3,158H98v-7h1    c2.6,0,5.4,0,5.4,3.4S102,158,99.3,158z"/>      <polygon fill="white" stroke="black" stroke-width="1" points="65,163 79,163 79,158 71,158 71,151 79,151 79,147 71,147 71,140 79,140 79,137 65,137   "/>      <polygon fill="white" stroke="black" stroke-width="1" points="43.3,154 43.2,154 37.8,137 34.7,137 29.5,154 29.4,154 24.1,137 18.8,137 27.1,163 30.9,163 35.8,146 35.9,146     41.1,163 44.9,163 53.8,137 48.4,137 "/>    </g>    <circle fill="white" stroke="black" stroke-width="3" cx="62.4" cy="73.5" r="13.9"/>    <circle fill="white" stroke="black" stroke-width="3" cx="130" cy="73.5" r="13.9"/>    <path fill="white" stroke="black" stroke-width="3" id="_x3C_Path_x3E__5_" d="M129.6,117c34.5,0,56.1-43.9,56.1-43.9s-21.6-43.8-56.1-43.9c0,0-67.2,0.1-67.3,0.1   c-34.5,0-56.1,43.8-56.1,43.8S27.8,117,62.4,117c13.3,0,24.7-6.5,33.6-14.5C105,110.5,116.3,117,129.6,117z M85.7,91.7   c-6.2,5.7-14.1,10.6-23.5,10.6c-23.2,0-37.7-29.3-37.7-29.3s14.5-29.3,37.7-29.3c9.6,0,17.6,5,23.8,10.8c4.1,3.9,7.4,8.2,9.8,11.7   c2.4-3.5,5.8-8,10.1-11.9c6.2-5.7,14.1-10.6,23.6-10.6c23.2,0,37.7,29.3,37.7,29.3s-14.5,29.3-37.7,29.3c-9.3,0-17.1-4.7-23.3-10.3   c-4.4-4.1-7.9-8.6-10.4-12.2C93.4,83.2,90,87.7,85.7,91.7z"/>    <path fill="none" d="M0,0h192v192H0V0z"/></g></svg>'
    var szFull = '<svg viewBox="2 2 19 19"><g fill="white"> <path d="M8.476,7.77l1.367-1.366h-3.44v3.439l1.366-1.366l2.327,2.328c0.098,0.098,0.226,0.146,0.354,0.146        s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L8.476,7.77z"/>      <path d="M12.902,12.196c-0.195-0.195-0.512-0.195-0.707,0c-0.196,0.195-0.196,0.512,0,0.707l2.326,2.326        l-1.365,1.365h3.441v-3.439l-1.367,1.367L12.902,12.196z"/>      <path d="M10.096,12.194l-2.327,2.328l-1.366-1.367v3.441h3.44l-1.367-1.367l2.327-2.328        c0.195-0.195,0.195-0.512,0-0.707S10.292,11.999,10.096,12.194z"/>      <path d="M13.158,6.403l1.365,1.366l-2.326,2.328c-0.195,0.195-0.195,0.512,0,0.707        c0.098,0.098,0.225,0.146,0.354,0.146c0.127,0,0.256-0.049,0.354-0.146l2.326-2.328l1.367,1.367v-3.44H13.158z"/>    </g></svg>'
    var szExit = '<svg viewBox="0 0 24 24"><g fill="white"><path d="M7.341,6.635c-0.195-0.195-0.512-0.195-0.707,0c-0.195,0.195-0.195,0.512,0,0.707l1.749,1.75L7,10.475  h3.441V7.036L9.09,8.385L7.341,6.635z"/><path d="M14.563,13.857l1.367-1.367h-3.441v3.44l1.366-1.366l1.803,1.801c0.098,0.098,0.226,0.146,0.354,0.146  s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L14.563,13.857z"/><path d="M14.582,9.127l1.784-1.786c0.195-0.196,0.195-0.512,0-0.708c-0.195-0.194-0.512-0.195-0.707,0L13.875,8.42  l-1.386-1.386v3.441h3.44L14.582,9.127z"/><path d="M8.401,13.891l-1.766,1.768c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146  s0.256-0.049,0.354-0.146l1.766-1.768l1.332,1.333v-3.44H7.001L8.401,13.891z"/></g></svg>'
    $("webvr-container").innerHTML = (n == 1) ? szWVR : ((n == 2) ? szExit : szFull);
}
setSvgIcon(0);