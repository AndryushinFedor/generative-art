/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/comments.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/comments.jsx":
/*!*******************************************!*\
  !*** ./app/javascript/packs/comments.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/fandr/generative-art/app/javascript/packs/comments.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (11:7):\n\n   9 |   if (postCommentsElement) {\n  10 |     ReactDOM.render(\n> 11 |       <CommentsContainer {...props} />,\n     |       ^\n  12 |       document.getElementById('postComments')\n  13 |     )\n  14 |   }\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:506:17)\n    at Parser.raiseWithData (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:499:17)\n    at Parser.expectOnePlugin (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:3730:18)\n    at Parser.parseExprAtom (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12416:18)\n    at Parser.parseExprSubscripts (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11999:23)\n    at Parser.parseUpdate (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11979:21)\n    at Parser.parseMaybeUnary (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11954:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11751:61)\n    at Parser.parseExprOps (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11758:23)\n    at Parser.parseMaybeConditional (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11728:23)\n    at Parser.parseMaybeAssign (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11688:21)\n    at /Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11646:39\n    at Parser.allowInAnd (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:13652:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11646:17)\n    at Parser.parseExprListItem (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:13365:18)\n    at Parser.parseCallExpressionArguments (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12219:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12118:29)\n    at Parser.parseSubscript (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12047:19)\n    at Parser.parseSubscripts (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12016:19)\n    at Parser.parseExprSubscripts (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:12005:17)\n    at Parser.parseUpdate (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11979:21)\n    at Parser.parseMaybeUnary (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11954:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11751:61)\n    at Parser.parseExprOps (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11758:23)\n    at Parser.parseMaybeConditional (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11728:23)\n    at Parser.parseMaybeAssign (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11688:21)\n    at Parser.parseExpressionBase (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11624:23)\n    at /Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11618:39\n    at Parser.allowInAnd (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:13646:16)\n    at Parser.parseExpression (/Users/fandr/generative-art/node_modules/@babel/parser/lib/index.js:11618:17)");

/***/ })

/******/ });
//# sourceMappingURL=comments-4d1df7175df37d936d2f.js.map