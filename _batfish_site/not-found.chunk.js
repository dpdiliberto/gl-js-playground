(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found"],{

/***/ "Ljyv":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/default-not-found.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapbox_batfish_modules_prefix_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mapbox/batfish/modules/prefix-url */ "yr+R");
/* harmony import */ var _mapbox_batfish_modules_prefix_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapbox_batfish_modules_prefix_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_with_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/with-location */ "p7X8");
var _jsxFileName="/Users/devendiliberto/work/test-react/node_modules/@mapbox/batfish/dist/webpack/default-not-found.js";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}class DefaultNotFound extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{fontFamily:'Arial, sans-serif'},__self:this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:7}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{__self:this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:9}},"Route not found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:9}},"Batfish can't find a route for",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{color:'red',textDecoration:'underline'},__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:11}},this.props.location.pathname),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__self:this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:9}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:Object(_mapbox_batfish_modules_prefix_url__WEBPACK_IMPORTED_MODULE_2__["prefixUrl"])('/'),style:{fontWeight:'bold'},__self:this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:11}},"Go somewhere safe")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{fontSize:'0.8em',marginTop:'2em'},__self:this,__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:9}},"This is Batfish's default ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",{__self:this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:37}},"development only")," 404 page.",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",{__self:this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:11}}),"It will not appear in production builds."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"aria-hidden":true,__self:this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:9}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{style:{fontSize:'3em'},__self:this,__source:{fileName:_jsxFileName,lineNumber:34,columnNumber:11}},"(\u2022\u0301\uFE4F\u2022\u0300)")));}}_defineProperty(DefaultNotFound,"propTypes",{location:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({pathname:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired}).isRequired});/* harmony default export */ __webpack_exports__["default"] = (Object(_public_with_location__WEBPACK_IMPORTED_MODULE_3__["withLocation"])(DefaultNotFound));

/***/ }),

/***/ "p/4J":
/*!******************************!*\
  !*** ./_batfish_tmp/_404.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let Page=__webpack_require__(/*! ./node_modules/@mapbox/batfish/dist/webpack/default-not-found.js */ "Ljyv");Page=Page.default||Page;module.exports={component:Page,props:{"frontMatter":{}}};

/***/ }),

/***/ "p7X8":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/public/with-location.js ***!
  \***************************************************************************/
/*! exports provided: withLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLocation", function() { return withLocation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName="/Users/devendiliberto/work/test-react/node_modules/@mapbox/batfish/dist/webpack/public/with-location.js";function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}//      
function withLocation(Component){function WithLocation(props,context){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component,_extends({location:context.location},props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:12}}));}WithLocation.contextTypes={location:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({pathname:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,hash:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,search:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string}).isRequired};WithLocation.WrappedComponent=Component;return WithLocation;}

/***/ })

}]);
//# sourceMappingURL=not-found.chunk.js.map