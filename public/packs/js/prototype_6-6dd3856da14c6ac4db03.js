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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/prototype_4/utilities */ "./app/javascript/prototypes/prototype_4/utilities.js");
/* harmony import */ var _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prototypes/prototype_4/models */ "./app/javascript/prototypes/prototype_4/models.js");
/* harmony import */ var _prototypes_prototype_4_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prototypes/prototype_4/store */ "./app/javascript/prototypes/prototype_4/store.js");
const colors = ['#F26DF8', '#FF5C00', '#FFE500', '#00FF29', '#00FFF0', '#4B3BFF'];




function createLargeWhiteCircle() {
  return new Promise(function (resolve, reject) {
    console.log('createLargeWhiteCircle call');
    const circles = Object(_prototypes_prototype_4_store__WEBPACK_IMPORTED_MODULE_2__["getLargeWhiteCircleStore"])();
    let settings;

    if (circles.length) {
      const firstCircleVSide = circles[0]['types']['vSide'];
      const firstCircleHSide = circles[0]['types']['hSide'];
      const firstCircleSize = circles[0]['types']['size'];
      const vSide = firstCircleVSide == 'top' ? 'bottom' : 'top';
      const hSide = firstCircleHSide == 'left' ? 'right' : 'left';
      const size = firstCircleSize == 'small' ? 'large' : 'small';
      settings = createCircle(_prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"].className, vSide, hSide, size, 1);
    } else {
      const vSide = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(Object.keys(_prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides']['vSides']));
      const hSide = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(Object.keys(_prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides']['hSides']));
      const size = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(Object.keys(_prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sizes']));
      settings = createCircle(_prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"].className, vSide, hSide, size, 1);
    }

    circles.push(settings);
    Object(_prototypes_prototype_4_store__WEBPACK_IMPORTED_MODULE_2__["setLargeWhiteCircleStore"])(circles);
    resolve();
  });
}

function createCircle(className, vSide, hSide, size, zIndex) {
  const frame = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["getFrame"])();
  const largeWhiteCircleStore = Object(_prototypes_prototype_4_store__WEBPACK_IMPORTED_MODULE_2__["getLargeWhiteCircleStore"])();
  const circleElement = document.createElement('div');
  const circleType = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["circleModel"]['largeCircleWhite'];
  circleElement.classList.add('circle');
  const vSideSettings = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides'][vSide];
  const hSideSettings = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides'][hSide];
  const sizeSettings = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sizes'][size];
  const diameterPercent = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(sizeSettings['from'], sizeSettings['to']);
  const diameter = frame.getBoundingClientRect().width / 100 * diameterPercent;
  const shiftY = generateShiftYFromSide(vSide, diameter, circleElement);
  const shiftX = generateShiftXFromSide(hSide, diameter, circleElement);
  const settings = {
    types: {
      vSide,
      hSide,
      size
    },
    shiftY,
    shiftX,
    diameter
  };
  circleElement.style.width = [diameter, 'px'].join('');
  circleElement.style.height = [diameter, 'px'].join('');
  circleElement.style.zIndex = zIndex;
  circleElement.classList.add(className);
  frame.appendChild(circleElement);
  return settings;
}

function generateShiftYFromSide(side, diameter, circleElement) {
  const sideSettings = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides']['vSides'][side];
  const shiftPercent = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(sideSettings['from'], sideSettings['to']);
  const shift = diameter / 100 * shiftPercent; // console.log(circleElement, side, shiftPercent, shift)

  if (side === 'top') {
    circleElement.style.top = ['-', shift, 'px'].join('');
  } else if (side === 'bottom') {
    circleElement.style.bottom = ['-', shift, 'px'].join('');
  }

  return shift;
}

function generateShiftXFromSide(side, diameter, circleElement) {
  const sideSettings = _prototypes_prototype_4_models__WEBPACK_IMPORTED_MODULE_1__["largeWhiteCircleModel"]['sides']['hSides'][side];
  const shiftPercent = Object(_prototypes_prototype_4_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(sideSettings['from'], sideSettings['to']);
  const shift = diameter / 100 * shiftPercent; // console.log(circleElement, side, shiftPercent, shift)

  if (side === 'left') {
    circleElement.style.left = ['-', shift, 'px'].join('');
  } else if (side === 'right') {
    circleElement.style.right = ['-', shift, 'px'].join('');
  }

  return shift;
}

function generateStory() {
  // for (var i = 0; i < sample(particlesQuantity); i++) {
  //   createCircle(frame)
  // }
  createLargeWhiteCircle().then(createLargeWhiteCircle);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0];
  const frame = document.createElement('div');
  frame.classList.add('frame');
  container.appendChild(frame);
  generateStory();
});

/***/ }),

/***/ "./app/javascript/prototypes/prototype_4/models.js":
/*!*********************************************************!*\
  !*** ./app/javascript/prototypes/prototype_4/models.js ***!
  \*********************************************************/
/*! exports provided: largeWhiteCircleModel, circleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeWhiteCircleModel", function() { return largeWhiteCircleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleModel", function() { return circleModel; });
const largeWhiteCircleModel = {
  className: 'large-circle-white',
  sides: {
    vSides: {
      top: {
        from: 30,
        to: 70
      },
      bottom: {
        from: 30,
        to: 70
      }
    },
    hSides: {
      left: {
        from: 0,
        to: 60
      },
      right: {
        from: 0,
        to: 60
      }
    }
  },
  sizes: {
    small: {
      from: 50,
      to: 110
    },
    large: {
      from: 60,
      to: 190
    }
  }
}; // [class-name, min-diameter, max-diameter, min-layer, max-layer]

const circleModel = {
  deepfaceGreenWhite: ['deepface-green-white', 10, 500, 2, 4],
  deepfaceGreenBlack: ['deepface-green-black', 10, 500, 2, 4],
  deepfaceDarkGreenWhite: ['deepface-dark-green-white', 10, 500, 2, 4],
  deepfaceDarkGreenBlack: ['deepface-dark-green-black', 10, 500, 2, 4],
  deepfaceBlack: ['deepface-black', 10, 500, 2, 4],
  circleBlack: ['circle-black', 30, 70, 1, 1],
  circleWhite: ['circle-white', 30, 70, 1, 1],
  largeCircleBlack: ['large-circle-black', 900, 1500, 1, 1],
  largeCircleWhite: ['large-circle-white', 900, 1500, 1, 1]
};


/***/ }),

/***/ "./app/javascript/prototypes/prototype_4/store.js":
/*!********************************************************!*\
  !*** ./app/javascript/prototypes/prototype_4/store.js ***!
  \********************************************************/
/*! exports provided: getLargeWhiteCircleStore, setLargeWhiteCircleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargeWhiteCircleStore", function() { return getLargeWhiteCircleStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLargeWhiteCircleStore", function() { return setLargeWhiteCircleStore; });
let largeWhiteCircleStore = [];

function getLargeWhiteCircleStore() {
  return largeWhiteCircleStore;
}

function setLargeWhiteCircleStore(data) {
  largeWhiteCircleStore = data;
}



/***/ }),

/***/ "./app/javascript/prototypes/prototype_4/utilities.js":
/*!************************************************************!*\
  !*** ./app/javascript/prototypes/prototype_4/utilities.js ***!
  \************************************************************/
/*! exports provided: getRandomArbitrary, sample, getFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitrary", function() { return getRandomArbitrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrame", function() { return getFrame; });
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFrame() {
  return document.getElementsByClassName('frame')[0];
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_6-6dd3856da14c6ac4db03.js.map