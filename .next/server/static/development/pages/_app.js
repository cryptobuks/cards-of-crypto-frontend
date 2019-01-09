module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/new-tab-link.tsx":
/*!********************************************!*\
  !*** ./components/common/new-tab-link.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/components/common/new-tab-link.tsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.secondary.main,
        textDecoration: "underline"
      }
    }
  });
};

var NewTabLink = function NewTabLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      text = _ref.text,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ["href", "children", "text", "classes"]);

  var inner = text;
  if (!text) inner = children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
    target: "_blank",
    rel: "noopener noreferrer",
    href: href,
    className: classes.root
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), inner);
};

NewTabLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(NewTabLink));

/***/ }),

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/components/footer.tsx";



var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      textAlign: "center",
      width: "100%",
      position: "absolute",
      bottom: "0px",
      zIndex: -1
    }
  });
};

var Footer = function Footer(_ref) {
  var classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "caption",
    align: "center",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\xA9 2018 broadhaven.tech"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/components/header.tsx";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: _defineProperty({
      margin: theme.spacing.unit * 2,
      flexGrow: 1
    }, theme.breakpoints.down("xs"), {
      margin: theme.spacing.unit
    }),
    appBar: {
      backgroundColor: "inherit",
      padding: "0px",
      margin: "0px"
    },
    link: {
      color: theme.palette.primary.dark,
      textDecoration: "none"
    },
    title: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    drawerList: {
      width: 250
    },
    menuIcon: {
      color: theme.palette.secondary.main
    }
  });
};

var Header = function Header(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDrawer = _useState2[0],
      setShowDrawer = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    className: classes.appBar,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: classes.menuButton,
    "aria-label": "Menu",
    onClick: function onClick() {
      return setShowDrawer(!showDrawer);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "bars",
    className: classes.menuIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Cards of Crypto."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    open: showDrawer,
    onClose: function onClose() {
      return setShowDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.drawerList,
    onClick: function onClick() {
      return setShowDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItem, {
    link: "/",
    text: "Home",
    icon: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItem, {
    link: "/create",
    text: "Create a card",
    icon: "edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItem, {
    link: "/questions",
    text: "Questions",
    icon: "question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItemExternalLink, {
    link: "https://broadhaven.tech",
    text: "About Us",
    icon: "user-tie",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItemExternalLink, {
    link: "https://medium.com/@broadhaven.tech",
    text: "Medium",
    icon: ["fab", "medium"],
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerItemExternalLink, {
    link: "https://twitter.com/broadhaventech",
    text: "Twitter",
    icon: ["fab", "twitter"],
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })))));
};

var DrawerItem = function DrawerItem(_ref2) {
  var link = _ref2.link,
      text = _ref2.text,
      icon = _ref2.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    key: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    button: true,
    key: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })));
};

var DrawerItemExternalLink = function DrawerItemExternalLink(_ref3) {
  var _React$createElement;

  var link = _ref3.link,
      text = _ref3.text,
      icon = _ref3.icon,
      className = _ref3.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", (_React$createElement = {
    href: link,
    className: className,
    target: "_blank",
    rel: "noopener noreferrer"
  }, _defineProperty(_React$createElement, "href", link), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    button: true,
    key: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./components/page.tsx":
/*!*****************************!*\
  !*** ./components/page.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.tsx");
/* harmony import */ var _page_disclaimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/disclaimer */ "./components/page/disclaimer.tsx");
var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/components/page.tsx";






var Page = function Page(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_page_disclaimer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/page/disclaimer.tsx":
/*!****************************************!*\
  !*** ./components/page/disclaimer.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_new_tab_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/new-tab-link */ "./components/common/new-tab-link.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/components/page/disclaimer.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    _getConfig$publicRunt = _getConfig.publicRuntimeConfig,
    DISCLAIMER = _getConfig$publicRunt.DISCLAIMER,
    PRIVACY_POLICY = _getConfig$publicRunt.PRIVACY_POLICY;

var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    root: {
      margin: "200px auto",
      maxWidth: "400px",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 4
    },
    controls: {
      marginTop: theme.spacing.unit * 3,
      textAlign: "center"
    }
  });
};

var Disclamier =
/*#__PURE__*/
function (_Component) {
  _inherits(Disclamier, _Component);

  function Disclamier() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Disclamier);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Disclamier)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (!window.localStorage.disclaimer) {
        _this.setState({
          open: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAgree", function () {
      window.localStorage.setItem("disclaimer", Date.now());

      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var open = _this.state.open;
      var classes = _this.props.classes;

      if (open) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
          "aria-labelledby": "disclaimer",
          "aria-describedby": "site disclaimer and privacy policy",
          open: open,
          onClose: function onClose() {
            return _this.setState({
              open: false
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          gutterBottom: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "This site uses magic and cookies and from time to time we may save some data about your visit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          gutterBottom: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "You can read the details in our ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_new_tab_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: DISCLAIMER,
          text: "disclaimer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), " and", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_new_tab_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: PRIVACY_POLICY,
          text: "privacy policy",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.controls,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          variant: "outlined",
          onClick: function onClick() {
            return _this.setState({
              open: false
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Decline"), "\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          variant: "outlined",
          color: "primary",
          onClick: function onClick() {
            return _this.onAgree();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Accept"))));
      }

      return null;
    });

    return _this;
  }

  return Disclamier;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Disclamier));

/***/ }),

/***/ "./helpers/get-page-context.ts":
/*!*************************************!*\
  !*** ./helpers/get-page-context.ts ***!
  \*************************************/
/*! exports provided: getPageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageContext", function() { return getPageContext; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./helpers/theme.ts");




var createPageContext = function createPageContext() {
  return {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    sheetsManager: new Map(),
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_0__["SheetsRegistry"](),
    generateClassName: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createGenerateClassName"])()
  };
};

var getPageContext = function getPageContext() {
  if (true) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
};

/***/ }),

/***/ "./helpers/theme.ts":
/*!**************************!*\
  !*** ./helpers/theme.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#326446"
    },
    secondary: {
      main: "#b4282a"
    }
  },
  typography: {
    useNextVariants: true
  },
  shape: {
    borderRadius: 10
  }
});
var breakpoints = defaultTheme.breakpoints;

var theme = _objectSpread({}, defaultTheme, {
  overrides: {
    MuiTypography: {
      h1: _defineProperty({
        fontWeight: 400,
        fontSize: "3rem"
      }, breakpoints.down("xs"), {
        fontSize: "2rem"
      }),
      subtitle2: {
        fontWeight: 600
      },
      h3: {
        fontWeight: 400,
        fontSize: "1.5rem"
      },
      caption: {
        color: "#e0e0e0"
      }
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./helpers/with-apollo-client.ts":
/*!***************************************!*\
  !*** ./helpers/with-apollo-client.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);




var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    APOLLO_ENDPOINT = _getConfig.publicRuntimeConfig.APOLLO_ENDPOINT;

var local = {
  from: "",
  to: "",
  valueInFiat: 1250,
  coinQuantity: 0,
  coinSymbol: "ETH",
  image: "static/images/cards/card1.png",
  title: "",
  message: "",
  question: "",
  answer: "",
  answerConfirm: "",
  unlockedDate: "2008-10-31",
  hasUnlockedDate: false,
  termsAgreed: false,
  previewSeen: false,
  privateKey: "0AD8ECC4CF8C8228CA902608156F6C128Z3C906334144B08BDCFB238A0388ADB",
  ethAddress: "0x4ab65e00943b9035b85712da01c63c4d069b65f5",
  mnemonic: "rare monster grid march expect injury fox theme material street sorry output armor dismiss canyon",
  btcAddress: "18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX",
  wif: "cTur4LKy2iNxKDRPvmNA8rvaeUaUUa2ThuEf7aJ5iEQPkF5sZ49V",
  __typename: "local"
};

var createClient = function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: APOLLO_ENDPOINT,
    // request: operation => {
    //   operation.setContext({
    //     headers
    //   })
    // },
    clientState: {
      resolvers: {},
      defaults: {
        local: local
      },
      typeDefs: [""]
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(createClient, {
  getDataFromTree: "never"
}));

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-jss/lib/JssProvider */ "react-jss/lib/JssProvider");
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers_with_apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/with-apollo-client */ "./helpers/with-apollo-client.ts");
/* harmony import */ var _helpers_get_page_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/get-page-context */ "./helpers/get-page-context.ts");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/page */ "./components/page.tsx");

var _jsxFileName = "/Users/tim/dev/broadhaven/cards-of-crypto/frontend/pages/_app.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fas"]);

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
};

var injectGoogleAnalytics = function injectGoogleAnalytics() {
  if (typeof window !== "undefined") {
    var gtag = function gtag() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      window.dataLayer.push(args);
    };

    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", "UA-126885958-3");
  }
};

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var _this$props = _this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apollo = _this$props.apollo;
      console.log(_this.pageContext);
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("script", {
        src: "https://js.stripe.com/v3/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("meta", {
        name: "description",
        content: "Give the gift of crypto this holiday season with a crypto ecard!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("meta", {
        name: "keywords",
        content: "ecard,gifts,cryptocurrency,bitcoin,ethereum,altcoins,broadhaven,gift card, alt coins, shit coins, christmas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("meta", {
        name: "author",
        content: "Tim Holmes-Mitra <tim.holmes.mitra@broadhaven.tech>",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-126885958-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("script", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, injectGoogleAnalytics()), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Cards Of Crypto")), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_8___default.a, {
        registry: _this.pageContext.sheetsRegistry,
        generateClassName: _this.pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MuiThemeProvider"], {
        theme: _this.pageContext.theme,
        sheetsManager: _this.pageContext.sheetsManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CssBaseline"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "jsx-3421407934" + " " + "root",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_page__WEBPACK_IMPORTED_MODULE_15__["default"], {
        pageContext: _this.pageContext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, _extends({}, pageProps, {
        pageContext: _this.pageContext,
        className: "jsx-3421407934" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3421407934",
        css: "body{height:100vh;background-image:url(\"./static/images/background.png\");background-repeat:no-repeat;background-position:bottom;background-size:contain;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW0vZGV2L2Jyb2FkaGF2ZW4vY2FyZHMtb2YtY3J5cHRvL2Zyb250ZW5kL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHaUIsQUFHa0MsYUFDMEMsdURBQzNCLDRCQUNELDJCQUNILHdCQUNOLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvdGltL2Rldi9icm9hZGhhdmVuL2NhcmRzLW9mLWNyeXB0by9mcm9udGVuZC9wYWdlcy9fYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciwgRGVmYXVsdEFwcElQcm9wcywgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIlxuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IEpzc1Byb3ZpZGVyIGZyb20gXCJyZWFjdC1qc3MvbGliL0pzc1Byb3ZpZGVyXCJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCJcbmltcG9ydCB7IGZhYiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCJcbmltcG9ydCB7IGZhcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIlxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCJcbmltcG9ydCB3aXRoQXBvbGxvQ2xpZW50IGZyb20gXCIuLi9oZWxwZXJzL3dpdGgtYXBvbGxvLWNsaWVudFwiXG5pbXBvcnQgeyBnZXRQYWdlQ29udGV4dCB9IGZyb20gXCIuLi9oZWxwZXJzL2dldC1wYWdlLWNvbnRleHRcIlxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCJcblxubGlicmFyeS5hZGQoZmFiLCBmYXMpXG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKTogdm9pZCA9PiB7XG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKClcbn1cblxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpOiB2b2lkID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKVxufVxuXG5jb25zdCBpbmplY3RHb29nbGVBbmFseXRpY3MgPSAoKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW11cbiAgICBmdW5jdGlvbiBndGFnKC4uLmFyZ3MpIHtcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaChhcmdzKVxuICAgIH1cbiAgICBndGFnKFwianNcIiwgbmV3IERhdGUoKSlcbiAgICBndGFnKFwiY29uZmlnXCIsIFwiVUEtMTI2ODg1OTU4LTNcIilcbiAgfVxufVxuXG5pbnRlcmZhY2UgTXlBcHBQcm9wcyB7XG4gIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50XG4gIHBhZ2VQcm9wczogYW55XG4gIGFwb2xsbzogQXBvbGxvQ2xpZW50PGFueT5cbn1cblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8TXlBcHBQcm9wcyAmIERlZmF1bHRBcHBJUHJvcHMgJiBBcHBQcm9wcz4ge1xuICBwYWdlQ29udGV4dDogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE15QXBwUHJvcHMgJiBEZWZhdWx0QXBwSVByb3BzICYgQXBwUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnBhZ2VDb250ZXh0ID0gZ2V0UGFnZUNvbnRleHQoKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBwYWdlUHJvcHM6IGFueSA9IHt9XG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cbiAgICAvLyB0aGlzIGV4cG9zZXMgdGhlIHF1ZXJ5IHRvIHRoZSB1c2VyXG4gICAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpXG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2codGhpcy5wYWdlQ29udGV4dClcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJHaXZlIHRoZSBnaWZ0IG9mIGNyeXB0byB0aGlzIGhvbGlkYXkgc2Vhc29uIHdpdGggYSBjcnlwdG8gZWNhcmQhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxuICAgICAgICAgICAgY29udGVudD1cImVjYXJkLGdpZnRzLGNyeXB0b2N1cnJlbmN5LGJpdGNvaW4sZXRoZXJldW0sYWx0Y29pbnMsYnJvYWRoYXZlbixnaWZ0IGNhcmQsIGFsdCBjb2lucywgc2hpdCBjb2lucywgY2hyaXN0bWFzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiVGltIEhvbG1lcy1NaXRyYSA8dGltLmhvbG1lcy5taXRyYUBicm9hZGhhdmVuLnRlY2g+XCIgLz5cblxuICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xMjY4ODU5NTgtM1wiIC8+XG4gICAgICAgICAgPHNjcmlwdD57aW5qZWN0R29vZ2xlQW5hbHl0aWNzKCl9PC9zY3JpcHQ+XG4gICAgICAgICAgPHRpdGxlPkNhcmRzIE9mIENyeXB0bzwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEpzc1Byb3ZpZGVyXG4gICAgICAgICAgcmVnaXN0cnk9e3RoaXMucGFnZUNvbnRleHQuc2hlZXRzUmVnaXN0cnl9XG4gICAgICAgICAgZ2VuZXJhdGVDbGFzc05hbWU9e3RoaXMucGFnZUNvbnRleHQuZ2VuZXJhdGVDbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhpcy5wYWdlQ29udGV4dC50aGVtZX0gc2hlZXRzTWFuYWdlcj17dGhpcy5wYWdlQ29udGV4dC5zaGVldHNNYW5hZ2VyfT5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICAgICAgPFBhZ2UgcGFnZUNvbnRleHQ9e3RoaXMucGFnZUNvbnRleHR9PlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBwYWdlQ29udGV4dD17dGhpcy5wYWdlQ29udGV4dH0gLz5cbiAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vc3RhdGljL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvSnNzUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsb0NsaWVudChNeUFwcClcbiJdfQ== */\n/*@ sourceURL=/Users/tim/dev/broadhaven/cards-of-crypto/frontend/pages/_app.tsx */",
        __self: this
      })))));
    });

    _this.pageContext = Object(_helpers_get_page_context__WEBPACK_IMPORTED_MODULE_14__["getPageContext"])();
    return _this;
  }

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_with_apollo_client__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./pages/_app.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map