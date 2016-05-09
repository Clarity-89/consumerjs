"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ConsumerObject=exports.ConsumerObject=function(){function ConsumerObject(data,consumer){_classCallCheck(this,ConsumerObject);this.createFromObject(data);this.__consumer__=consumer;}_createClass(ConsumerObject,[{key:"createFromObject",value:function createFromObject(data){var keys=Object.keys(data);for(var i in keys){if(keys.hasOwnProperty(i)){var key=keys[i];this[key]=data[key];}}}}]);return ConsumerObject;}();
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Consumer=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _aureliaCookie=require('aurelia-cookie');var _httpClient=require('aurelia/http-client');var _palBrowser=require('aurelia/pal-browser');var _uri=require('uri');var _uri2=_interopRequireDefault(_uri);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Consumer=exports.Consumer=function(){function Consumer(endpoint,objectClass){var options=arguments.length<=2||arguments[2]===undefined?null:arguments[2];_classCallCheck(this,Consumer);this.client=new _httpClient.HttpClient();this.csrfCookie='csrftoken';this.csrfHeader='X-CSRFToken';this.defaultHeaders={};this.defaultParameters={};this.endpoint=endpoint;this.objectClass=objectClass;this.unserializableFields=['__consumer__'];if(options){Object.assign(this,options);}(0,_palBrowser.initialize)();}_createClass(Consumer,[{key:'delete',value:function _delete(){var path=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var query=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var uri=_uri2.default.build({'path':path,'query':_uri2.default.buildQuery(query)});return this.request('delete',uri,{});}},{key:'get',value:function get(){var path=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var query=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var uri=_uri2.default.build({'path':path,'query':_uri2.default.buildQuery(query)});return this.request('get',uri,{});}},{key:'patch',value:function patch(){var path=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var data=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var query=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var uri=_uri2.default.build({'path':path,'query':_uri2.default.buildQuery(query)});return this.request('patch',uri,data);}},{key:'post',value:function post(){var path=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var data=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var query=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var uri=_uri2.default.build({'path':path,'query':_uri2.default.buildQuery(query)});return this.request('post',uri,data);}},{key:'put',value:function put(){var path=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var data=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var query=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var uri=_uri2.default.build({'path':path,'query':_uri2.default.buildQuery(query)});return this.request('put',uri,data);}},{key:'request',value:function request(method,path,data){var _this=this;this.client.configure(function(x){x.withBaseUrl(_this.endpoint);});if(!this.isSafeMethod(method)&&this.csrfCookie&&this.csrfHeader){this.addCsrfToken();}var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=Object.keys(this.defaultHeaders)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var header=_step.value;this.addHeader(header,this.defaultHeaders[header]);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally {try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally {if(_didIteratorError){throw _iteratorError;}}}var uri=(0,_uri2.default)(path);uri.addQuery(this.defaultParameters);data=this.serialize(data);return this.client[method](uri.toString(),data).then(this.requestSuccess.bind(this)).catch(this.requestFailed.bind(this));}},{key:'isSafeMethod',value:function isSafeMethod(method){var saveMethods=['GET','HEAD','OPTIONS','TRACE'];return saveMethods.includes(method.toUpperCase());}},{key:'addCsrfToken',value:function addCsrfToken(){var csrfToken=this.getCookie(this.csrfCookie);this.defaultHeaders[this.csrfHeader]=csrfToken;this.addHeader(this.csrfHeader,csrfToken);}},{key:'getCookie',value:function getCookie(name){return _aureliaCookie.Cookie.get(name);}},{key:'addHeader',value:function addHeader(name,value){this.client.configure(function(x){x.withHeader(name,value);});}},{key:'serialize',value:function serialize(data){var object={};var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=Object.keys(data)[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var key=_step2.value;if(!this.unserializableFields.includes(key)){object[key]=data[key];}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally {try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}return object;}},{key:'requestSuccess',value:function requestSuccess(data){var result=this.parse(data.response);return Promise.resolve(result);}},{key:'parse',value:function parse(json){var object=JSON.parse(json);if(Array.isArray(object)){return this.parseList(object);}return this.parseScalar(object);}},{key:'parseList',value:function parseList(array){var list=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=array[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var object=_step3.value;list.push(this.parseEntity(object));}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally {try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}return list;}},{key:'parseScalar',value:function parseScalar(object){return this.parseEntity(object);}},{key:'parseEntity',value:function parseEntity(object){return new this.objectClass(object,this);}},{key:'requestFailed',value:function requestFailed(data){return Promise.reject(data);}}]);return Consumer;}();
//# sourceMappingURL=consumerjs.js.map
