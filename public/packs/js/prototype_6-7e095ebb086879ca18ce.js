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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_6.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_6.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_6.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF'];
const circleTypes = [['ch1', 10, 500, 2, 4], ['ch2', 10, 500, 2, 4], ['ch3', 10, 500, 2, 4], ['ch4', 10, 500, 2, 4], ['ch5', 10, 500, 2, 4], ['ch6', 10, 500, 2, 4], ['ch7', 10, 500, 2, 4], ['ch8', 10, 500, 2, 4], ['ch9', 10, 500, 2, 4], ['ch10', 10, 500, 2, 4], ['ch11', 10, 500, 2, 4], ['ch12', 10, 500, 2, 4], ['ch13', 10, 500, 2, 4], ['ch14', 10, 500, 2, 4], ['ch15', 10, 500, 2, 4], ['ch16', 10, 500, 2, 4], ['ch17', 10, 500, 2, 4], ['ch18', 10, 500, 2, 4], ['ch19', 10, 500, 2, 4], ['ch20', 10, 500, 2, 4], ['ch21', 10, 500, 2, 4], ['ch22', 10, 500, 2, 4], ['ch23', 10, 500, 2, 4], ['ch24', 10, 500, 2, 4], ['ch25', 10, 500, 2, 4], ['ch26', 10, 500, 2, 4], ['ch27', 10, 500, 2, 4], ['ch28', 10, 500, 2, 4], ['ch29', 10, 500, 2, 4], ['ch30', 10, 500, 2, 4], ['ch31', 10, 500, 2, 4], ['ch32', 10, 500, 2, 4], ['ch33', 10, 500, 2, 4], ['ch34', 10, 500, 2, 4], ['ch35', 10, 500, 2, 4], ['ch36', 10, 500, 2, 4], ['ch37', 10, 500, 2, 4]];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createCircle(frame) {
  const circleElement = document.createElement('div');
  const circleType = sample(circleTypes);
  circleElement.classList.add('circle');
  const top = getRandomArbitrary(-100, 1720);
  const left = getRandomArbitrary(-100, 980);
  const size = getRandomArbitrary(circleType[1], circleType[2]);
  circleElement.style.top = [top, 'px'].join('');
  circleElement.style.left = [left, 'px'].join('');
  circleElement.style.width = [size, 'px'].join('');
  circleElement.style.height = [size, 'px'].join('');
  circleElement.style.zIndex = Math.floor(getRandomArbitrary(circleType[3], circleType[4]));
  circleElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`;
  circleElement.classList.add(circleType[0]);
  frame.appendChild(circleElement);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0];
  const frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);

  for (var i = 0; i < sample(particlesQuantity); i++) {
    createCircle(frame);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_6-7e095ebb086879ca18ce.js.map