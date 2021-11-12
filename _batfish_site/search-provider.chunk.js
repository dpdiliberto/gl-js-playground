(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-provider"],{

/***/ "NWRP":
/*!**************************************************************!*\
  !*** ./node_modules/@mapbox/dr-ui/search/search-provider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_react_search_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/react-search-ui */ "vfbT");
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-box */ "meuH");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Search extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const {
      connector,
      resultsOnly,
      useModal
    } = this.props;

    function handleMapContext({
      isLoading,
      searchTerm,
      setSearchTerm,
      results,
      trackClickThrough,
      wasSearched,
      reset
    }) {
      return {
        isLoading,
        searchTerm,
        setSearchTerm,
        results,
        trackClickThrough,
        wasSearched,
        reset
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_react_search_ui__WEBPACK_IMPORTED_MODULE_2__["SearchProvider"], {
      config: {
        apiConnector: connector,
        initialState: {
          resultsPerPage: 10
        },
        trackUrlState: resultsOnly ? false : true,
        // do not push search query to URL if using resultsOnly
        searchQuery: {
          facets: {
            site: {
              type: 'value'
            }
          }
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_react_search_ui__WEBPACK_IMPORTED_MODULE_2__["WithSearch"], {
      mapContextToProps: handleMapContext
    }, ({
      isLoading,
      searchTerm,
      setSearchTerm,
      results,
      trackClickThrough,
      wasSearched,
      reset
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_box__WEBPACK_IMPORTED_MODULE_3__["SearchBox"], _extends({
        searchTerm: searchTerm,
        trackClickThrough: trackClickThrough,
        setSearchTerm: setSearchTerm,
        results: results,
        wasSearched: wasSearched,
        isLoading: isLoading,
        reset: reset
      }, this.props, {
        useModal: useModal && !resultsOnly // disable modal if resultsOnly === true

      }));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

}]);
//# sourceMappingURL=search-provider.chunk.js.map