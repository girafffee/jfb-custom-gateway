/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Editor/CustomGateway.js":
/*!*********************************!*\
  !*** ./Editor/CustomGateway.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gatewayID": () => (/* binding */ gatewayID)
/* harmony export */ });
var gatewayID = 'custom';
var compose = wp.compose.compose;
var _wp$data = wp.data,
  withSelect = _wp$data.withSelect,
  withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
  TextControl = _wp$components.TextControl,
  ToggleControl = _wp$components.ToggleControl,
  SelectControl = _wp$components.SelectControl,
  withNotices = _wp$components.withNotices;
var useEffect = wp.element.useEffect;
var _JetFBActions = JetFBActions,
  renderGateway = _JetFBActions.renderGateway;
var _JetFBHooks = JetFBHooks,
  withSelectGateways = _JetFBHooks.withSelectGateways,
  withDispatchGateways = _JetFBHooks.withDispatchGateways;
var StripeMain = function StripeMain(_ref) {
  var setGatewayRequest = _ref.setGatewayRequest,
    gatewaySpecific = _ref.gatewaySpecific,
    setGatewaySpecific = _ref.setGatewaySpecific,
    gatewayScenario = _ref.gatewayScenario,
    setGatewayScenario = _ref.setGatewayScenario,
    getSpecificOrGlobal = _ref.getSpecificOrGlobal,
    additionalSourceGateway = _ref.additionalSourceGateway,
    specificGatewayLabel = _ref.specificGatewayLabel,
    noticeOperations = _ref.noticeOperations,
    noticeUI = _ref.noticeUI;
  var _gatewayScenario$id = gatewayScenario.id,
    scenario = _gatewayScenario$id === void 0 ? 'PAY_NOW' : _gatewayScenario$id;
  useEffect(function () {
    setGatewayRequest({
      id: scenario
    });
  }, [scenario]);
  useEffect(function () {
    setGatewayRequest({
      id: scenario
    });
  }, []);
  return wp.element.createElement(React.Fragment, null, noticeUI, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: specificGatewayLabel('use_global'),
    checked: gatewaySpecific.use_global,
    onChange: function onChange(use_global) {
      return setGatewaySpecific({
        use_global: use_global
      });
    }
  }), wp.element.createElement(TextControl, {
    label: specificGatewayLabel('public'),
    value: getSpecificOrGlobal('public'),
    onChange: function onChange(value) {
      return setGatewaySpecific({
        public: value
      });
    },
    disabled: gatewaySpecific.use_global
  }), wp.element.createElement(TextControl, {
    label: specificGatewayLabel('secret'),
    value: getSpecificOrGlobal('secret'),
    onChange: function onChange(secret) {
      return setGatewaySpecific({
        secret: secret
      });
    },
    disabled: gatewaySpecific.use_global
  }), wp.element.createElement(SelectControl, {
    labelPosition: "side",
    label: specificGatewayLabel('gateway_type'),
    value: scenario,
    onChange: function onChange(id) {
      setGatewayScenario({
        id: id
      });
    },
    options: additionalSourceGateway.scenarios
  }), renderGateway(gatewayID, {
    noticeOperations: noticeOperations
  }, scenario));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(withSelectGateways), withDispatch(withDispatchGateways), withNotices)(StripeMain));


/***/ }),

/***/ "./Editor/PayNowScenario.js":
/*!**********************************!*\
  !*** ./Editor/PayNowScenario.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scenarioID": () => (/* binding */ scenarioID)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var compose = wp.compose.compose;
var _wp$data = wp.data,
  withSelect = _wp$data.withSelect,
  withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
  TextControl = _wp$components.TextControl,
  SelectControl = _wp$components.SelectControl,
  BaseControl = _wp$components.BaseControl;
var _JetFBHooks = JetFBHooks,
  withSelectFormFields = _JetFBHooks.withSelectFormFields,
  withSelectGateways = _JetFBHooks.withSelectGateways,
  withDispatchGateways = _JetFBHooks.withDispatchGateways;
var _JetFBComponents = JetFBComponents,
  GatewayFetchButton = _JetFBComponents.GatewayFetchButton;
var scenarioID = 'PAY_NOW';
function PayNowScenario(_ref) {
  var gatewayGeneral = _ref.gatewayGeneral,
    gatewaySpecific = _ref.gatewaySpecific,
    setGateway = _ref.setGateway,
    setGatewaySpecific = _ref.setGatewaySpecific,
    formFields = _ref.formFields,
    getSpecificOrGlobal = _ref.getSpecificOrGlobal,
    loadingGateway = _ref.loadingGateway,
    scenarioSource = _ref.scenarioSource,
    noticeOperations = _ref.noticeOperations,
    scenarioLabel = _ref.scenarioLabel,
    globalGatewayLabel = _ref.globalGatewayLabel;
  var displayNotice = function displayNotice(status) {
    return function (response) {
      noticeOperations.removeNotice(gatewayGeneral.gateway);
      noticeOperations.createNotice({
        status: status,
        content: response.message,
        id: gatewayGeneral.gateway
      });
    };
  };
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: scenarioLabel('fetch_button_label')
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, !loadingGateway.success && !loadingGateway.loading && wp.element.createElement("span", {
    className: 'description-controls'
  }, scenarioLabel('fetch_button_help')), wp.element.createElement(GatewayFetchButton, {
    initialLabel: scenarioLabel('fetch_button'),
    label: scenarioLabel('fetch_button_retry'),
    apiArgs: _objectSpread(_objectSpread({}, scenarioSource.fetch), {}, {
      data: {
        public: getSpecificOrGlobal('public'),
        secret: getSpecificOrGlobal('secret')
      }
    }),
    onFail: displayNotice('error')
  }))), loadingGateway.success && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
    label: scenarioLabel('currency'),
    value: gatewaySpecific.currency,
    onChange: function onChange(currency) {
      return setGatewaySpecific({
        currency: currency
      });
    }
  }), wp.element.createElement(SelectControl, {
    label: globalGatewayLabel('price_field'),
    key: 'form_fields_price_field',
    value: gatewayGeneral.price_field,
    labelPosition: "side",
    onChange: function onChange(price_field) {
      setGateway({
        price_field: price_field
      });
    },
    options: formFields
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(function () {
  return _objectSpread(_objectSpread({}, withSelectFormFields([], '--').apply(void 0, arguments)), withSelectGateways.apply(void 0, arguments));
}), withDispatch(function () {
  return _objectSpread({}, withDispatchGateways.apply(void 0, arguments));
}))(PayNowScenario));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./Editor/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomGateway */ "./Editor/CustomGateway.js");
/* harmony import */ var _PayNowScenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayNowScenario */ "./Editor/PayNowScenario.js");




var _JetFBActions = JetFBActions,
  registerGateway = _JetFBActions.registerGateway;
registerGateway(_CustomGateway__WEBPACK_IMPORTED_MODULE_0__.gatewayID, _CustomGateway__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerGateway(_CustomGateway__WEBPACK_IMPORTED_MODULE_0__.gatewayID, _PayNowScenario__WEBPACK_IMPORTED_MODULE_1__["default"], _PayNowScenario__WEBPACK_IMPORTED_MODULE_1__.scenarioID);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFXQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFFQTtBQVlBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFFQTs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0VkaXRvci9DdXN0b21HYXRld2F5LmpzIiwid2VicGFjazovLy8uL0VkaXRvci9QYXlOb3dTY2VuYXJpby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9FZGl0b3IvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2F0ZXdheUlEID0gJ2N1c3RvbSc7XHJcblxyXG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgd2l0aFNlbGVjdCxcclxuXHQgICAgICB3aXRoRGlzcGF0Y2gsXHJcbiAgICAgIH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFRleHRDb250cm9sLFxyXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXHJcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcclxuXHQgICAgICB3aXRoTm90aWNlcyxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICByZW5kZXJHYXRld2F5LFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHQgICAgICB3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcblxyXG5sZXQgU3RyaXBlTWFpbiA9IGZ1bmN0aW9uICgge1xyXG5cdHNldEdhdGV3YXlSZXF1ZXN0LFxyXG5cdGdhdGV3YXlTcGVjaWZpYyxcclxuXHRzZXRHYXRld2F5U3BlY2lmaWMsXHJcblx0Z2F0ZXdheVNjZW5hcmlvLFxyXG5cdHNldEdhdGV3YXlTY2VuYXJpbyxcclxuXHRnZXRTcGVjaWZpY09yR2xvYmFsLFxyXG5cdGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LFxyXG5cdHNwZWNpZmljR2F0ZXdheUxhYmVsLFxyXG5cdG5vdGljZU9wZXJhdGlvbnMsXHJcblx0bm90aWNlVUksXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIGlkOiBzY2VuYXJpbyA9ICdQQVlfTk9XJyxcclxuXHQgICAgICB9ID0gZ2F0ZXdheVNjZW5hcmlvO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCB7IGlkOiBzY2VuYXJpbyB9ICk7XHJcblx0fSwgWyBzY2VuYXJpbyBdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0R2F0ZXdheVJlcXVlc3QoIHsgaWQ6IHNjZW5hcmlvIH0gKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgbm90aWNlVUkgfVxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ3VzZV9nbG9iYWwnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IHVzZV9nbG9iYWwgfSApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ3B1YmxpYycgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3B1YmxpYycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IHB1YmxpYzogdmFsdWUgfSApIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc3BlY2lmaWNHYXRld2F5TGFiZWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGdldFNwZWNpZmljT3JHbG9iYWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNlY3JldCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgc2VjcmV0IH0gKSB9XHJcblx0XHRcdGRpc2FibGVkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0Lz5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ2dhdGV3YXlfdHlwZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2NlbmFyaW8gfVxyXG5cdFx0XHRvbkNoYW5nZT17IGlkID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHsgaWQgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LnNjZW5hcmlvcyB9XHJcblx0XHQvPlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5SUQsIHsgbm90aWNlT3BlcmF0aW9ucyB9LCBzY2VuYXJpbyApIH1cclxuXHQ8Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RHYXRld2F5cyApLFxyXG5cdHdpdGhEaXNwYXRjaCggd2l0aERpc3BhdGNoR2F0ZXdheXMgKSxcclxuXHR3aXRoTm90aWNlcyxcclxuKSggU3RyaXBlTWFpbiApO1xyXG5cclxuZXhwb3J0IHsgZ2F0ZXdheUlEIH07IiwiY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHdpdGhTZWxlY3QsXHJcblx0ICAgICAgd2l0aERpc3BhdGNoLFxyXG4gICAgICB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBUZXh0Q29udHJvbCxcclxuXHQgICAgICBTZWxlY3RDb250cm9sLFxyXG5cdCAgICAgIEJhc2VDb250cm9sLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcclxuXHQgICAgICB3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0ICAgICAgd2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyBHYXRld2F5RmV0Y2hCdXR0b24gfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuYXJpb0lEID0gJ1BBWV9OT1cnO1xyXG5cclxuZnVuY3Rpb24gUGF5Tm93U2NlbmFyaW8oIHtcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRnYXRld2F5U3BlY2lmaWMsXHJcblx0c2V0R2F0ZXdheSxcclxuXHRzZXRHYXRld2F5U3BlY2lmaWMsXHJcblx0Zm9ybUZpZWxkcyxcclxuXHRnZXRTcGVjaWZpY09yR2xvYmFsLFxyXG5cdGxvYWRpbmdHYXRld2F5LFxyXG5cdHNjZW5hcmlvU291cmNlLFxyXG5cdG5vdGljZU9wZXJhdGlvbnMsXHJcblx0c2NlbmFyaW9MYWJlbCxcclxuXHRnbG9iYWxHYXRld2F5TGFiZWwsXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSBzdGF0dXMgPT4gcmVzcG9uc2UgPT4ge1xyXG5cdFx0bm90aWNlT3BlcmF0aW9ucy5yZW1vdmVOb3RpY2UoIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXkgKTtcclxuXHRcdG5vdGljZU9wZXJhdGlvbnMuY3JlYXRlTm90aWNlKCB7XHJcblx0XHRcdHN0YXR1cyxcclxuXHRcdFx0Y29udGVudDogcmVzcG9uc2UubWVzc2FnZSxcclxuXHRcdFx0aWQ6IGdhdGV3YXlHZW5lcmFsLmdhdGV3YXksXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX2xhYmVsJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XHJcblx0XHRcdFx0eyAoICEgbG9hZGluZ0dhdGV3YXkuc3VjY2VzcyAmJiAhIGxvYWRpbmdHYXRld2F5LmxvYWRpbmcgKSAmJiA8c3BhblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX2hlbHAnICkgfVxyXG5cdFx0XHRcdDwvc3Bhbj4gfVxyXG5cdFx0XHRcdDxHYXRld2F5RmV0Y2hCdXR0b25cclxuXHRcdFx0XHRcdGluaXRpYWxMYWJlbD17IHNjZW5hcmlvTGFiZWwoICdmZXRjaF9idXR0b24nICkgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX3JldHJ5JyApIH1cclxuXHRcdFx0XHRcdGFwaUFyZ3M9eyB7XHJcblx0XHRcdFx0XHRcdC4uLnNjZW5hcmlvU291cmNlLmZldGNoLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0cHVibGljOiBnZXRTcGVjaWZpY09yR2xvYmFsKCAncHVibGljJyApLFxyXG5cdFx0XHRcdFx0XHRcdHNlY3JldDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3NlY3JldCcgKSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25GYWlsPXsgZGlzcGxheU5vdGljZSggJ2Vycm9yJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHR7IGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3MgJiYgPD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnY3VycmVuY3knICkgfVxyXG5cdFx0XHRcdHZhbHVlPXsgZ2F0ZXdheVNwZWNpZmljLmN1cnJlbmN5IH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IGN1cnJlbmN5ID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBjdXJyZW5jeSB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgZ2xvYmFsR2F0ZXdheUxhYmVsKCAncHJpY2VfZmllbGQnICkgfVxyXG5cdFx0XHRcdGtleT17ICdmb3JtX2ZpZWxkc19wcmljZV9maWVsZCcgfVxyXG5cdFx0XHRcdHZhbHVlPXsgZ2F0ZXdheUdlbmVyYWwucHJpY2VfZmllbGQgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249J3NpZGUnXHJcblx0XHRcdFx0b25DaGFuZ2U9eyBwcmljZV9maWVsZCA9PiB7XHJcblx0XHRcdFx0XHRzZXRHYXRld2F5KCB7IHByaWNlX2ZpZWxkIH0gKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoU2VsZWN0Rm9ybUZpZWxkcyggW10sICctLScgKSggLi4ucHJvcHMgKSxcclxuXHRcdFx0Li4ud2l0aFNlbGVjdEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuXHR3aXRoRGlzcGF0Y2goICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhEaXNwYXRjaEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuKSggUGF5Tm93U2NlbmFyaW8gKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDdXN0b21HYXRld2F5IGZyb20gJy4vQ3VzdG9tR2F0ZXdheSc7XHJcbmltcG9ydCB7IGdhdGV3YXlJRCB9IGZyb20gJy4vQ3VzdG9tR2F0ZXdheSc7XHJcbmltcG9ydCBQYXlOb3dTY2VuYXJpbyBmcm9tICcuL1BheU5vd1NjZW5hcmlvJztcclxuaW1wb3J0IHsgc2NlbmFyaW9JRCB9IGZyb20gJy4vUGF5Tm93U2NlbmFyaW8nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHJlZ2lzdGVyR2F0ZXdheSxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0Q3VzdG9tR2F0ZXdheSxcclxuKTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5Tm93U2NlbmFyaW8sXHJcblx0c2NlbmFyaW9JRCxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=