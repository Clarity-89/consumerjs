!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(global,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("urijs")},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("aurelia-cookie")},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"diff",function(){return A}),n.d(r,"excludeUnserializableFields",function(){return F}),n.d(r,"isObject",function(){return L});var o=n(2),i=n(0),u=n.n(i),a=n(1),c=n.n(a);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.consumer=e,this.baseURL=this.consumer.endpoint,this.headers=this.consumer.defaultHeaders,this.arrayFormat="repeat",n&&Object.assign(this,n)}var e,n,r;return e=t,(n=[{key:"setBaseURL",value:function(t){this.baseURL=t}},{key:"addHeader",value:function(t,e){this.headers[t]=e}},{key:"delete",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.reject("Not implemented!")}},{key:"get",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.reject("Not implemented!")}},{key:"patch",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.reject("Not implemented!")}},{key:"post",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.reject("Not implemented!")}},{key:"put",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.reject("Not implemented!")}},{key:"getURL",value:function(t){return(t+="").match("://")?t:t?(this.baseURL+"/"+t).replace(/([^:])\/\/+/g,"$1/"):this.baseURL}}])&&s(e.prototype,n),r&&s(e,r),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.headers={},this.response={},this.responseType="text/json",this.statusCode=0,this.statusText="",e&&Object.assign(this,e)}var e,n,r;return e=t,(n=[{key:"toString",value:function(){return"".concat(this.statusCode," ").concat(this.statusText).trim()}}])&&l(e.prototype,n),r&&l(e,r),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(t,n){var r,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(r=!(i=v(e).call(this,t,n))||"object"!==y(i)&&"function"!=typeof i?d(o):i).cancelSource=a.CancelToken.source(),n&&Object.assign(d(r),n),r}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,f),n=e,(r=[{key:"getConfiguration",value:function(t,e){return c.a.configured||(c.a.interceptors.response.use(this.createResponse.bind(this),this.createError.bind(this)),c.a.configured=!0),{cancelToken:this.cancelSource.token,headers:this.headers,params:e,transformResponse:function(t){return t},paramsSerializer:this.serializeParams.bind(this),data:JSON.stringify(t),withCredentials:this.consumer.csrfProtection,xsrfCookieName:this.consumer.csrfCookie,xsrfHeaderName:this.consumer.csrfHeader}}},{key:"serializeParams",value:function(t){var e=this;return Object.entries(t).reduce(function(t,n){var r=h(n,2),o=r[0],i=r[1],u="&".concat(o,"=");return"brackets"===e.arrayFormat&&(u="&".concat(o,"[]=")),Array.isArray(i)&&(i=i.join(u)),t+u+i},"").replace("&","")}},{key:"createResponse",value:function(t){return new p({headers:t.headers,requestMessage:t.request,response:t.data,responseType:"text/json",statusCode:t.status,statusText:t.statusText})}},{key:"createError",value:function(t){var e;try{e="string"==typeof t?parseInt(t.match(/\d+/)[0]):t.response.status}catch(t){e=0}return Promise.reject(new p({statusCode:e,statusText:t,__CANCEL__:Boolean(t.__CANCEL__)}))}},{key:"withAbort",value:function(t){var e=t.catch(function(t){return c.a.isCancel(t)?Promise.reject(new p({response:t,responseType:"abort",statusCode:0,statusText:""})):Promise.reject(t)});return e.abort=this.cancelSource.cancel,e.cancel=this.cancelSource.cancel,e}},{key:"delete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("delete",t,e)}},{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("get",t,e)}},{key:"patch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("patch",t,e)}},{key:"post",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("post",t,e)}},{key:"put",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("put",t,e)}},{key:"request",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=u()(n),i=o.query(!0);return o.query(!1),n=o.toString(),e="get"===(t=t.toLowerCase())||"delete"===t?c.a[t](this.getURL(n),this.getConfiguration(r,i)):c.a[t](this.getURL(n),r,this.getConfiguration(r,i)),this.withAbort(e)}}])&&b(n.prototype,r),o&&b(n,o),e}();function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){var e="function"==typeof Map?new Map:void 0;return(j=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return w(t,arguments,S(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),P(r,t)})(t)}function w(t,e,n){return(w=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&P(o,n.prototype),o}).apply(null,arguments)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){function e(t,n){var r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=O(this,(r=S(e)).call.apply(r,[this].concat(t)))).responseData=i;var u=Object.keys(i);for(var a in u)if(u.hasOwnProperty(a)){var c=u[a];o.responseData[c]=i[c]}return o.__consumer__=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,j(Array)),e}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,E(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,k),e}();function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(t,e){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var i=o[r],u=t?t[i]:null,a=e[i];if(Array.isArray(a)){var c=A(a,u);if(!Object.keys(c).length)continue;n[i]=a}else if(L(a)){var s=A(u,a);if(!Object.keys(s).length)continue;n[i]=s}else{if(a===u)continue;n[i]=a}}for(var f=0,l=Object.keys(t);f<l.length;f++){var p=l[f];e[p]||(n[p]=null)}return n}function F(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__consumer__.unserializableFields,n={},r=0,o=Object.entries(t);r<o.length;r++){var i=R(o[r],2),u=i[0],a=i[1];e.indexOf(u)>-1||(n[u]=a)}return n}function L(t){return"[object Object]"===Object.prototype.toString.call(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.contentType="application/json",this.csrfProtection=!0,this.csrfCookie="csrftoken",this.csrfHeader="X-CSRFToken",this.defaultHeaders={Accept:"application/json"},this.defaultParameters={},this.endpoint=e,this.objectClass=n,this.listClass=q,this.parserDataPath="",this.unserializableFields=["__consumer__"],this.client=new m(this),r&&Object.assign(this,r)}var e,n,r;return e=t,(n=[{key:"delete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u.a.build({path:t,query:u.a.buildQuery(e)});return this.request("delete",n,{})}},{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u.a.build({path:t+"",query:u.a.buildQuery(e)});return this.request("get",n,{})}},{key:"patch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u.a.build({path:t,query:u.a.buildQuery(n)});return this.request("patch",r,e)}},{key:"post",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u.a.build({path:t,query:u.a.buildQuery(n)});return this.request("post",r,e)}},{key:"put",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u.a.build({path:t,query:u.a.buildQuery(n)});return this.request("put",r,e)}},{key:"request",value:function(t){var e,n,r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.client.setBaseURL(this.endpoint),this.addHeader("Content-Type",this.contentType);for(var a=0,c=Object.keys(this.defaultHeaders);a<c.length;a++){var s=c[a];this.addHeader(s,this.defaultHeaders[s])}var f=u()(o);return f.addQuery(this.defaultParameters),i=this.serialize(i),(n=(e=this.client[t](f.toString(),i)).then(function(e){return r.requestSuccess(e,t,f.toString(),i)}).catch(this.requestFailed.bind(this))).abort=e.abort,n.cancel=e.cancel,n}},{key:"getCookie",value:function(t){return o.AureliaCookie.get(t)}},{key:"addHeader",value:function(t,e){this.client.addHeader(t,e)}},{key:"serialize",value:function(t){return L(t)?F(t,this.unserializableFields):t}},{key:"requestSuccess",value:function(t,e,n,r){var o=this.parse(t.response,e,n,r);return Promise.resolve(o)}},{key:"parse",value:function(t,e,n,r){if(t){var o=t;"string"==typeof t&&(o=JSON.parse(t));var i=JSON.parse(JSON.stringify(o));if(this.parserDataPath)this.parserDataPath.split(".").forEach(function(t){i=i[t]});return i||(i=o),Array.isArray(i)?this.parseList(i,o,e,n,r):this.parseScalar(i,o,e,n,r)}}},{key:"parseList",value:function(t,e,n,r,o){var i=this,u=t.map(function(t){return i.parseEntity(t,e,n,r,o)});return new this.listClass(u,this,e,n,r,o)}},{key:"parseScalar",value:function(t,e,n,r,o){return this.parseEntity(t,e,n,r,o)}},{key:"parseEntity",value:function(t,e,n,r,o){return new this.objectClass(t,this)}},{key:"requestFailed",value:function(t){return Promise.reject(t)}}])&&N(e.prototype,n),r&&N(e,r),t}();function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,M(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(e,D),e}();function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var J=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.createFromObject(e),this.__consumer__=n}var e,n,r;return e=t,(n=[{key:"createFromObject",value:function(t){var e=Object.keys(t);for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];this[r]=t[r]}}}])&&I(e.prototype,n),r&&I(e,r),t}();function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,X(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(e,J),e}();function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t,e){return(et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var nt=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Z(this,tt(e).call(this,t,n))).__initial_state__=JSON.parse(JSON.stringify(t)),r}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(e,J),n=e,(r=[{key:"update",value:function(){var t=this,e=this.getPath(),n=F(this),r=this.getChangedFields();if(!e)throw new Error("Can't determine path, please set pk or id or define getPath()");return 0===Object.keys(r).length?Promise.resolve(this):this.__consumer__.patch(e,r).then(function(){return t.__initial_state__=n,Promise.resolve(t)})}},{key:"save",value:function(){var t=this,e=this.getPath(),n=F(this);if(!e)throw new Error("Can't determine path, please set pk or id or define getPath()");return this.__consumer__.put(e,this).then(function(){return t.__initial_state__=n,Promise.resolve(t)})}},{key:"delete",value:function(){var t=this.getPath();if(!t)throw new Error("Can't determine path, please set pk or id or define getPath()");return this.__consumer__.delete(t)}},{key:"getPath",value:function(){var t=this.getPK();return!!t&&t+""}},{key:"getPK",value:function(){return this.pk||this.id||!1}},{key:"getChangedFields",value:function(){for(var t={},e=0,n=Object.entries(this);e<n.length;e++){var r=W(n[e],2),o=r[0],i=r[1];this.__consumer__.unserializableFields.indexOf(o)>-1||(t[o]=i)}return A(this.__initial_state__,F(this))}}])&&Y(n.prototype,r),o&&Y(n,o),e}();function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function it(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ut(t,e,n){return(ut="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=at(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var st=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=it(this,at(e).call(this,t,r,o))).unserializableFields.push("__initial_state__"),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(e,D),n=e,(r=[{key:"create",value:function(t){return ut(at(e.prototype),"post",this).call(this,"",t)}},{key:"read",value:function(t){return ut(at(e.prototype),"get",this).call(this,t)}}])&&ot(n.prototype,r),o&&ot(n,o),e}();function ft(t){return(ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pt(t,e){return!e||"object"!==ft(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var bt=function(t){function e(t,n,r){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"get",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=pt(this,yt(e).call(this,t,n,r,i,u,a))).currentMethod=i,o.currentPath=u,o.currentData=a,o.pageField="page",o.pageQueryParam="page",o.page=parseInt(o.responseData[o.pageField]),o.pageCountField="count",o.pageCount=parseInt(o.responseData[o.pageCountField]),o.pageSize=o.length,o}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(e,k),n=e,(r=[{key:"first",value:function(){return this.goToPage(1)}},{key:"last",value:function(){return this.goToPage(this.pageCount)}},{key:"previous",value:function(){return this.goToPage(Math.max(this.page-1,1))}},{key:"next",value:function(){return this.goToPage(Math.min(this.page+1,this.pageCount))}},{key:"goToPage",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e?"get":this.currentMethod,r=e?{}:this.currentData;return this.requestPage(t,n,r)}},{key:"requestPage",value:function(t,e,n){var r=u()(this.currentPath).setSearch(this.pageQueryParam,t);return this.__consumer__.request(e,r.toString(),n)}}])&&lt(n.prototype,r),o&&lt(n,o),e}();function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){return!e||"object"!==vt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function mt(t,e){return(mt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),dt(this,gt(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mt(t,e)}(e,bt),e}();function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wt(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Pt(t){return(Pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function St(t,e){return(St=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var kt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),wt(this,Pt(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&St(t,e)}(e,bt),n=e,(r=[{key:"previous",value:function(){if("string"!=typeof this.responseData.previous)return Promise.resolve(this);var t=this.responseData.previous;return this.__consumer__.get(t)}},{key:"next",value:function(){if("string"!=typeof this.responseData.next)return Promise.resolve(this);var t=this.responseData.next;return this.__consumer__.get(t)}}])&&jt(n.prototype,r),o&&jt(n,o),e}();n.d(e,"ConsumerObject",function(){return G}),n.d(e,"CrudConsumer",function(){return st}),n.d(e,"CrudConsumerObject",function(){return nt}),n.d(e,"AbstractList",function(){return k}),n.d(e,"AbstractPageNumberList",function(){return bt}),n.d(e,"List",function(){return q}),n.d(e,"PageNumberList",function(){return _t}),n.d(e,"LinkedPageNumberList",function(){return kt}),n.d(e,"AbstractHTTPClient",function(){return f}),n.d(e,"AxiosHTTPClient",function(){return m}),n.d(e,"Consumer",function(){return Q}),n.d(e,"utils",function(){return r});e.default=Q}])});
//# sourceMappingURL=consumerjs.js.map