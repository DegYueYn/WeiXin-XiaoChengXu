(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__B30AC6F",
    appName: "小程序",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.4",
    uniRuntimeVersion: "3.6.4",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__B30AC6F",
      appName: "小程序",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);

  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initUnknownHooks(mpOptions, vueOptions) {var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {return initHook$1(mpOptions, hook, excludes);});
}

function findHooks(vueOptions) {var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}

function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小程序","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ?
  event.detail.__args__ || [event.detail] :
  [event.detail];

  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }

  var extraObj = processEventExtra(vm, extra, event, __args__);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小程序","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"小程序","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"小程序","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小程序","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        triggerEvent.call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        });
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*******************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/pages.json ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!**************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 15));

var _mpMixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mpMixin.js */ 16));

var _luchRequest = _interopRequireDefault(__webpack_require__(/*! ./libs/luch-request */ 17));


var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/util/route.js */ 35));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 39));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 40));

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 41));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 42));

var _index = _interopRequireDefault(__webpack_require__(/*! ./libs/function/index.js */ 43));


var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 45));

var _props = _interopRequireDefault(__webpack_require__(/*! ./libs/config/props.js */ 46));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 136));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 94));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./libs/function/platform */ 137));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 看到此报错，是因为没有配置vue.config.js的【transpileDependencies】，详见：https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置
var pleaseSetTranspileDependencies = {},babelTest = pleaseSetTranspileDependencies === null || pleaseSetTranspileDependencies === void 0 ? void 0 : pleaseSetTranspileDependencies.test; // 引入全局mixin
var $u = _objectSpread(_objectSpread({
  route: _route.default,
  date: _index.default.timeFormat, // 另名date
  colorGradient: _colorGradient.default.colorGradient,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  colorToRgba: _colorGradient.default.colorToRgba,
  test: _test.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new _luchRequest.default(),
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  mixin: _mixin.default,
  mpMixin: _mpMixin.default,
  props: _props.default },
_index.default), {}, {
  color: _color.default,
  platform: _platform.default });


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  Vue.filter('date', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {return uni.$u.timeFrom(timestamp, format);});
  // 同时挂载到uni和Vue.prototype中

  // 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
  Vue.prototype.$u = $u;
  Vue.mixin(_mixin.default);

};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 15 */
/*!*************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/mixin/mixin.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {return {};} },

    customClass: {
      type: String,
      default: '' },

    // 跳转的页面路径
    url: {
      type: String,
      default: '' },

    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo' } },


  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$u
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
    // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
    // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
    $u: function $u() {

      // 在非nvue端，移除props，http，mixin等对象，避免在小程序setData时数据过大影响性能
      return uni.$u.deepMerge(uni.$u, {
        props: undefined,
        http: undefined,
        mixin: undefined });





    },
    /**
        * 生成bem规则类名
        * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
        * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
        * @param {String} name 组件名称
        * @param {Array} fixed 一直会存在的类名
        * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
        * @returns {Array|string}
        */
    bem: function bem() {
      return function (name, fixed, change) {var _this = this;
        // 类名前缀
        var prefix = "u-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



      };
    } },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url });

      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this2)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this3 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似u-radio的父组件u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件u-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!***************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/mixin/mpMixin.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {

  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true } };exports.default = _default;

/***/ }),
/* 17 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

_Request.default;exports.default = _default;

/***/ }),
/* 18 */
/*!***************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/Request.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 19));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 27));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 28));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 29));
var _utils = __webpack_require__(/*! ../utils */ 22);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Request = /*#__PURE__*/function () {
  /**
                                    * @param {Object} arg - 全局配置
                                    * @param {String} arg.baseURL - 全局根路径
                                    * @param {Object} arg.header - 全局header
                                    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
                                    * @param {String} arg.dataType = [json] - 全局默认的dataType
                                    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
                                    * @param {Object} arg.custom - 全局默认的自定义参数
                                    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
                                    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
                                    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
                                    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
                                    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
                                    */
  function Request() {var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      console.warn('设置全局参数必须接收一个Object');
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default() };

  }

  /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */_createClass(Request, [{ key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    } }, { key: "middleware", value: function middleware(

    config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function (interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function (interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    /**
      * @Function
      * @param {Object} config - 请求配置项
      * @prop {String} options.url - 请求路径
      * @prop {Object} options.data - 请求参数
      * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
      * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
      * @prop {Object} [options.header = config.header] - 请求header
      * @prop {Object} [options.method = config.method] - 请求方法
      * @returns {Promise<unknown>}
      */ }, { key: "request", value: function request()
    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    } }, { key: "get", value: function get(

    url) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "connect", value: function connect(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT' },
      options));

    } }, { key: "head", value: function head(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD' },
      options));

    } }, { key: "options", value: function options(




    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "trace", value: function trace(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE' },
      options));

    } }, { key: "upload", value: function upload(



    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    } }, { key: "download", value: function download(

    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    } }]);return Request;}();


/**
                               * setConfig回调
                               * @return {Object} - 返回操作后的config
                               * @callback Request~setConfigCallback
                               * @param {Object} config - 全局默认config
                               */exports.default = Request;

/***/ }),
/* 19 */
/*!***********************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/dispatchRequest.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

function _default(config) {return (0, _index.default)(config);};exports.default = _default;

/***/ }),
/* 20 */
/*!*****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/adapters/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 21));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 23));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 26));
var _utils = __webpack_require__(/*! ../utils */ 22);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 返回可选值存在的配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Array} keys - 可选值数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Object} config2 - 配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {{}} - 存在的配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};var _default =
function _default(config) {return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {
        }
        (0, _settle.default)(resolve, reject, response);
      } };

    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {



        filePath: config.filePath,
        name: config.name };

      var optionalKeys = [









      'formData'];

      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {





      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = [
      'data',
      'method',

      'timeout',

      'dataType',

      'responseType'];











      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 21 */
/*!*******************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/helpers/buildURL.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 22));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
function buildURL(url, params) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams;
  if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = "".concat(key, "[]");
      } else {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push("".concat(encode(key), "=").concat(encode(v)));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),
/* 22 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/utils.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isObject = isObject;exports.isDate = isDate;exports.isURLSearchParams = isURLSearchParams;exports.forEach = forEach;exports.isBoolean = isBoolean;exports.isPlainObject = isPlainObject;exports.deepMerge = deepMerge;exports.isUndefined = isUndefined;var
toString = Object.prototype.toString;

/**
                                       * Determine if a value is an Array
                                       *
                                       * @param {Object} val The value to test
                                       * @returns {boolean} True if value is an Array, otherwise false
                                       */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * 是否为boolean 值
   * @param val
   * @returns {boolean}
   */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
   * 是否为真正的对象{} new Object
   * @param {any} obj - 检测的对象
   * @returns {boolean}
   */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),
/* 23 */
/*!*********************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/buildFullPath.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildFullPath;

var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 24));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                            * Creates a new URL by combining the baseURL with the requestedURL,
                                                                                                                                                                            * only when the requestedURL is not already an absolute URL.
                                                                                                                                                                            * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                                                                                                                                            *
                                                                                                                                                                            * @param {string} baseURL The base URL
                                                                                                                                                                            * @param {string} requestedURL Absolute or relative URL to combine
                                                                                                                                                                            * @returns {string} The combined full path
                                                                                                                                                                            */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 24 */
/*!************************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/helpers/isAbsoluteURL.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 25 */
/*!**********************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/helpers/combineURLs.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? "".concat(
  baseURL.replace(/\/+$/, ''), "/").concat(relativeURL.replace(/^\/+/, '')) :
  baseURL;
}

/***/ }),
/* 26 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/settle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = settle; /**
                                                                                                      * Resolve or reject a Promise based on response status.
                                                                                                      *
                                                                                                      * @param {Function} resolve A function that resolves the promise.
                                                                                                      * @param {Function} reject A function that rejects the promise.
                                                                                                      * @param {object} response The response.
                                                                                                      */
function settle(resolve, reject, response) {var
  validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),
/* 27 */
/*!**************************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/InterceptorManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};var _default =

InterceptorManager;exports.default = _default;

/***/ }),
/* 28 */
/*!*******************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/mergeConfig.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 22);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Array} keys - 配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} globalsConfig - 当前的全局配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config2 - 局部配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
    *
    * @param globalsConfig - 当前实例的全局配置
    * @param config2 - 当前的局部配置
    * @return - 合并后的配置
    */var _default =
function _default(globalsConfig) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {}) };

  var defaultToConfig2Keys = ['getTask', 'validateStatus'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {







  } else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = [









    'filePath',
    'name',



    'formData'];

    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });





  } else {
    var defaultsKeys = [
    'data',

    'timeout',

    'dataType',

    'responseType'];











    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }

  return config;
};exports.default = _default;

/***/ }),
/* 29 */
/*!****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/core/defaults.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 默认的全局配置
                                                                                                      */var _default =

{
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',

  responseType: 'text',

  custom: {},

  timeout: 60000,










  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };exports.default = _default;

/***/ }),
/* 30 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/luch-request/utils/clone.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
     */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined')
    circular = true;

    if (typeof depth == 'undefined')
    depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
      return null;

      if (depth === 0)
      return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else
        {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }

        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }

      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
    return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();var _default =

clone;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ 31).Buffer))

/***/ }),
/* 31 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 32)
var ieee754 = __webpack_require__(/*! ieee754 */ 33)
var isArray = __webpack_require__(/*! isarray */ 34)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 2)))

/***/ }),
/* 32 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 33 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 34 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 35 */
/*!************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/util/route.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = uni.$u.queryParams(params);
      return url += query;
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepMerge(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === uni.$u.page())) {_context.next = 6;break;}return _context.abrupt("return");case 6:

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 16;break;}_context.next = 12;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 12:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 17;break;case 16:

                this.openPage(mergeConfig);case 17:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 36 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 37);

/***/ }),
/* 37 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 38);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 38 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 39 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/colorGradient.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB *
    i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {return Number(val);});
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }

  return sColor;
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 40 */
/*!***************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/test.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证字符串
   */
function string(value) {
  return typeof value === 'string';
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);

}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
   * 是否函数方法
   * @param {Object} value
   */
function func(value) {
  return typeof value === 'function';
}

/**
   * 是否promise对象
   * @param {Object} value
   */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
   * @param {Object} value
   */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
   * 是否视频格式
   * @param {Object} value
   */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
   * 是否为正则对象
   * @param {Object}
   * @return {Boolean}
   */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string };exports.default = _default;

/***/ }),
/* 41 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/debounce.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         *
                                                                                                                         * @param {Function} func 要执行的回调函数
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 42 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/throttle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer;var
flag;
/**
       * 节流原理：在一定时间内，只能触发一次
       *
       * @param {Function} func 要执行的回调函数
       * @param {Number} wait 延时的时间
       * @param {Boolean} immediate 是否立即执行
       * @return null
       */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =
throttle;exports.default = _default;

/***/ }),
/* 43 */
/*!****************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 40));
var _digit = __webpack_require__(/*! ./digit.js */ 44);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 如果value小于min，取min；如果value大于max，取max
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} min 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} max 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
function range() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
   * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
   * @param {number|string} value 用户传递值的px值
   * @param {boolean} unit 
   * @returns {number|string}
   */
function getPx(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (_test.default.number(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
   * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
   * @param {number} value 堵塞时间 单位ms 毫秒
   * @returns {Promise} 返回promise
   */
function sleep() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
   * @description 运行期判断平台
   * @returns {string} 返回所在平台(小写) 
   * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
   */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
   * @description 获取系统信息同步接口
   * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
   */
function sys() {
  return uni.getSystemInfoSync();
}

/**
   * @description 取一个区间数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
  * @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
     this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
     这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
     值(默认为undefined)，就是查找最顶层的$parent
  *  @param {string|undefined} name 父组件的参数名
  */
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
   * @description 样式转换
   * 对象转字符串，或者字符串转对象
   * @param {object | string} customStyle 需要转换的目标
   * @param {String} target 转换的目的，object-转为对象，string-转为字符串
   * @returns {object|string}
   */
function addStyle(customStyle) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || typeof customStyle === 'object' && target === 'object' || target === 'string' &&
  typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
   * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
   * @param {string|number} value 需要添加单位的值
   * @param {string} unit 添加的单位名 比如px
   */
function addUnit() {var _uni$$u$config$unit, _uni, _uni$$u, _uni$$u$config;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni$$u$config$unit = (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$u = _uni.$u) === null || _uni$$u === void 0 ? void 0 : (_uni$$u$config = _uni$$u.config) === null || _uni$$u$config === void 0 ? void 0 : _uni$$u$config.unit) !== null && _uni$$u$config$unit !== void 0 ? _uni$$u$config$unit : 'px';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/**
   * @description 深度克隆
   * @param {object} obj 需要深度克隆的对象
   * @returns {*} 克隆后的对象或者原值（不是对象）
   */
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  var o = _test.default.array(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

/**
   * @description JS对象深度合并
   * @param {object} target 需要拷贝的对象
   * @param {object} source 拷贝的来源对象
   * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
   */
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

/**
   * @description error提示
   * @param {*} err 错误内容
   */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    console.error("uView\u63D0\u793A\uFF1A".concat(err));
  }
}

/**
   * @description 打乱数组
   * @param {array} array 需要打乱的数组
   * @returns {array} 打乱后的数组
   */
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
      'fillString must be String');

    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
   * @description 格式化时间
   * @param {String|Number} dateTime 需要格式化的时间戳
   * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
   * @returns {string} 返回格式化后的字符串
   */
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1000);
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime));
      }
      // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
      // 处理 '2022-07-10 01:02:03'，跳过 '2022-07-10T01:02:03'
      else if (typeof dateTime === 'string' && dateTime.includes('-') && !dateTime.includes('T')) {
          date = new Date(dateTime.replace(/-/g, '/'));
        }
        // 其他都认为符合 RFC 2822 规范
        else {
            date = new Date(dateTime);
          }

  var timeSource = {
    'y': date.getFullYear().toString(), // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    'd': date.getDate().toString().padStart(2, '0'), // 日
    'h': date.getHours().toString().padStart(2, '0'), // 时
    'M': date.getMinutes().toString().padStart(2, '0'), // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {var _ref =
    new RegExp("".concat(key, "+")).exec(formatStr) || [],_ref2 = _slicedToArray(_ref, 1),ret = _ref2[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }

  return formatStr;
}

/**
   * @description 时间戳转为多久之前
   * @param {String|Number} timestamp 时间戳
   * @param {String|Boolean} format 
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }}

  return tips;
}

/**
   * @description 去除空格
   * @param String str 需要去除空格的字符串
   * @param String pos both(左右)|left|right|all 默认both
   */
function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
   * @description 对象转url参数
   * @param {object} data,对象
   * @param {Boolean} isPrefix,是否自动加上"?"
   * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
   */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });}

    } else {
      _result.push("".concat(key, "=").concat(value));
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
   * 显示消息提示框
   * @param {String} title 提示的内容，长度与 icon 取值有关。
   * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
   */
function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration });

}

/**
   * @description 根据主题type值,获取对应的图标
   * @param {String} type 主题名称,primary|info|error|warning|success
   * @param {boolean} fill 是否使用fill填充实体的图标
   */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
   * @description 数字格式化
   * @param {number|string} number 要格式化的数字
   * @param {number} decimals 保留几位小数
   * @param {string} decimalPoint 小数点符号
   * @param {string} thousandsSeparator 千分位符号
   * @returns {string} 格式化后的数字
   */
function priceFormat(number) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';

  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
   * @description 获取duration值
   * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
   * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
   * @param {String|number} value 比如: "1s"|"100ms"|1|100
   * @param {boolean} unit  提示: 如果是false 默认返回number
   * @return {string|number} 
   */
function getDuration(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
   * @description 日期的月或日补零操作
   * @param {String} value 需要补零的值
   */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
   * @description 在u-form的子组件内容发生变化，或者失去焦点时，尝试通知u-form执行校验方法
   * @param {*} instance
   * @param {*} event
   */
function formValidate(instance, event) {
  var formItem = uni.$u.$parent.call(instance, 'u-form-item');
  var form = uni.$u.$parent.call(instance, 'u-form');
  // 如果发生变化的input或者textarea等，其父组件中有u-form-item或者u-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
   * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
   * @param {object} obj 对象
   * @param {string} key 需要获取的属性字段
   * @returns {*}
   */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};

    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
   * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
   * @param {object} obj 对象
   * @param {string} key 需要设置的属性
   * @param {string} value 设置的值
   */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) {// 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
   * @description 获取当前页面路径
   */
function page() {var _pages$route, _pages;
  var pages = getCurrentPages();
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat((_pages$route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route) !== null && _pages$route !== void 0 ? _pages$route : '');
}

/**
   * @description 获取当前路由栈实例数组
   */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
   * @description 修改uView内置属性值
   * @param {object} props 修改内置props属性
   * @param {object} config 修改内置config属性
   * @param {object} color 修改内置color属性
   * @param {object} zIndex 修改内置zIndex属性
   */
function setConfig(_ref3)




{var _ref3$props = _ref3.props,props = _ref3$props === void 0 ? {} : _ref3$props,_ref3$config = _ref3.config,config = _ref3$config === void 0 ? {} : _ref3$config,_ref3$color = _ref3.color,color = _ref3$color === void 0 ? {} : _ref3$color,_ref3$zIndex = _ref3.zIndex,zIndex = _ref3$zIndex === void 0 ? {} : _ref3$zIndex;var

  deepMerge =
  uni.$u.deepMerge;
  uni.$u.config = deepMerge(uni.$u.config, config);
  uni.$u.props = deepMerge(uni.$u.props, props);
  uni.$u.color = deepMerge(uni.$u.color, color);
  uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex);
}var _default =

{
  range: range,
  getPx: getPx,
  sleep: sleep,
  os: os,
  sys: sys,
  random: random,
  guid: guid,
  $parent: $parent,
  addStyle: addStyle,
  addUnit: addUnit,
  deepClone: deepClone,
  deepMerge: deepMerge,
  error: error,
  randomArray: randomArray,
  timeFormat: timeFormat,
  timeFrom: timeFrom,
  trim: trim,
  queryParams: queryParams,
  toast: toast,
  type2icon: type2icon,
  priceFormat: priceFormat,
  getDuration: getDuration,
  padZero: padZero,
  formValidate: formValidate,
  getProperty: getProperty,
  setProperty: setProperty,
  page: page,
  pages: pages,
  setConfig: setConfig };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 44 */
/*!****************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/digit.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.plus = plus;exports.minus = minus;exports.divide = divide;exports.round = round;exports.enableBoundaryChecking = enableBoundaryChecking;exports.default = void 0;function _toArray(arr) {return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
   * Return digits length of a number
   * @private
   * @param {*number} num Input number
   */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
   * 把小数转成整数,如果是小数则放大成整数
   * @private
   * @param {*number} num 输入数
   */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
   * 检测数字是否越界，如果越界给出提示
   * @private
   * @param {*number} num 输入数
   */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"));
    }
  }
}

/**
   * 把递归操作扁平迭代化
   * @param {number[]} arr 要操作的数字数组
   * @param {function} operation 迭代操作
   * @private
   */
function iteratorOperation(arr, operation) {var _arr = _toArray(
  arr),num1 = _arr[0],num2 = _arr[1],others = _arr.slice(2);
  var res = operation(num1, num2);

  others.forEach(function (num) {
    res = operation(res, num);
  });

  return res;
}

/**
   * 高精度乘法
   * @export
   */
function times() {for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {nums[_key] = arguments[_key];}
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
   * 高精度加法
   * @export
   */
function plus() {for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {nums[_key2] = arguments[_key2];}
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }var

  num1 = nums[0],num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
   * 高精度减法
   * @export
   */
function minus() {for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {nums[_key3] = arguments[_key3];}
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }var

  num1 = nums[0],num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
   * 高精度除法
   * @export
   */
function divide() {for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {nums[_key4] = arguments[_key4];}
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
   * 四舍五入
   * @export
   */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
   * 是否进行边界检查，默认开启
   * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
   * @export
   */
function enableBoundaryChecking() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}var _default =


{
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking };exports.default = _default;

/***/ }),
/* 45 */
/*!***************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/config.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2022-00-24
var version = '2.0.34';

// 开发环境才提示，生产环境不会提示
if (true) {
  console.log("\n %c uView V".concat(version, " %c https://uviewui.com/ \n\n"), 'color: #ffffff; background: #3c9cff; padding:5px 0; border-radius: 5px;');
}var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'],

  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    'u-primary': '#2979ff',
    'u-warning': '#ff9900',
    'u-success': '#19be6b',
    'u-error': '#fa3534',
    'u-info': '#909399',
    'u-main-color': '#303133',
    'u-content-color': '#606266',
    'u-tips-color': '#909399',
    'u-light-color': '#c0c4cc' },

  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: 'px' };exports.default = _default;

/***/ }),
/* 46 */
/*!**************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ 45));

var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./props/actionSheet.js */ 47));
var _album = _interopRequireDefault(__webpack_require__(/*! ./props/album.js */ 48));
var _alert = _interopRequireDefault(__webpack_require__(/*! ./props/alert.js */ 49));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./props/avatar */ 50));
var _avatarGroup = _interopRequireDefault(__webpack_require__(/*! ./props/avatarGroup */ 51));
var _backtop = _interopRequireDefault(__webpack_require__(/*! ./props/backtop */ 52));
var _badge = _interopRequireDefault(__webpack_require__(/*! ./props/badge */ 53));
var _button = _interopRequireDefault(__webpack_require__(/*! ./props/button */ 54));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./props/calendar */ 55));
var _carKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/carKeyboard */ 56));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./props/cell */ 57));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./props/cellGroup */ 58));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./props/checkbox */ 59));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./props/checkboxGroup */ 60));
var _circleProgress = _interopRequireDefault(__webpack_require__(/*! ./props/circleProgress */ 61));
var _code = _interopRequireDefault(__webpack_require__(/*! ./props/code */ 62));
var _codeInput = _interopRequireDefault(__webpack_require__(/*! ./props/codeInput */ 63));
var _col = _interopRequireDefault(__webpack_require__(/*! ./props/col */ 64));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./props/collapse */ 65));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./props/collapseItem */ 66));
var _columnNotice = _interopRequireDefault(__webpack_require__(/*! ./props/columnNotice */ 67));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./props/countDown */ 68));
var _countTo = _interopRequireDefault(__webpack_require__(/*! ./props/countTo */ 69));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./props/datetimePicker */ 70));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./props/divider */ 71));
var _empty = _interopRequireDefault(__webpack_require__(/*! ./props/empty */ 72));
var _form = _interopRequireDefault(__webpack_require__(/*! ./props/form */ 73));
var _formItem = _interopRequireDefault(__webpack_require__(/*! ./props/formItem */ 74));
var _gap = _interopRequireDefault(__webpack_require__(/*! ./props/gap */ 75));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./props/grid */ 76));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./props/gridItem */ 77));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./props/icon */ 78));
var _image = _interopRequireDefault(__webpack_require__(/*! ./props/image */ 79));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./props/indexAnchor */ 80));
var _indexList = _interopRequireDefault(__webpack_require__(/*! ./props/indexList */ 81));
var _input = _interopRequireDefault(__webpack_require__(/*! ./props/input */ 82));
var _keyboard = _interopRequireDefault(__webpack_require__(/*! ./props/keyboard */ 83));
var _line = _interopRequireDefault(__webpack_require__(/*! ./props/line */ 84));
var _lineProgress = _interopRequireDefault(__webpack_require__(/*! ./props/lineProgress */ 85));
var _link = _interopRequireDefault(__webpack_require__(/*! ./props/link */ 86));
var _list = _interopRequireDefault(__webpack_require__(/*! ./props/list */ 87));
var _listItem = _interopRequireDefault(__webpack_require__(/*! ./props/listItem */ 88));
var _loadingIcon = _interopRequireDefault(__webpack_require__(/*! ./props/loadingIcon */ 89));
var _loadingPage = _interopRequireDefault(__webpack_require__(/*! ./props/loadingPage */ 90));
var _loadmore = _interopRequireDefault(__webpack_require__(/*! ./props/loadmore */ 91));
var _modal = _interopRequireDefault(__webpack_require__(/*! ./props/modal */ 92));
var _navbar = _interopRequireDefault(__webpack_require__(/*! ./props/navbar */ 93));
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ./props/noNetwork */ 95));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./props/noticeBar */ 96));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./props/notify */ 97));
var _numberBox = _interopRequireDefault(__webpack_require__(/*! ./props/numberBox */ 98));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/numberKeyboard */ 99));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./props/overlay */ 100));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./props/parse */ 101));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./props/picker */ 102));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./props/popup */ 103));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./props/radio */ 104));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./props/radioGroup */ 105));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./props/rate */ 106));
var _readMore = _interopRequireDefault(__webpack_require__(/*! ./props/readMore */ 107));
var _row = _interopRequireDefault(__webpack_require__(/*! ./props/row */ 108));
var _rowNotice = _interopRequireDefault(__webpack_require__(/*! ./props/rowNotice */ 109));
var _scrollList = _interopRequireDefault(__webpack_require__(/*! ./props/scrollList */ 110));
var _search = _interopRequireDefault(__webpack_require__(/*! ./props/search */ 111));
var _section = _interopRequireDefault(__webpack_require__(/*! ./props/section */ 112));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./props/skeleton */ 113));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./props/slider */ 114));
var _statusBar = _interopRequireDefault(__webpack_require__(/*! ./props/statusBar */ 115));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./props/steps */ 116));
var _stepsItem = _interopRequireDefault(__webpack_require__(/*! ./props/stepsItem */ 117));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./props/sticky */ 118));
var _subsection = _interopRequireDefault(__webpack_require__(/*! ./props/subsection */ 119));
var _swipeAction = _interopRequireDefault(__webpack_require__(/*! ./props/swipeAction */ 120));
var _swipeActionItem = _interopRequireDefault(__webpack_require__(/*! ./props/swipeActionItem */ 121));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./props/swiper */ 122));
var _swipterIndicator = _interopRequireDefault(__webpack_require__(/*! ./props/swipterIndicator */ 123));
var _switch2 = _interopRequireDefault(__webpack_require__(/*! ./props/switch */ 124));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./props/tabbar */ 125));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./props/tabbarItem */ 126));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./props/tabs */ 127));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./props/tag */ 128));
var _text = _interopRequireDefault(__webpack_require__(/*! ./props/text */ 129));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./props/textarea */ 130));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./props/toast */ 131));
var _toolbar = _interopRequireDefault(__webpack_require__(/*! ./props/toolbar */ 132));
var _tooltip = _interopRequireDefault(__webpack_require__(/*! ./props/tooltip */ 133));
var _transition = _interopRequireDefault(__webpack_require__(/*! ./props/transition */ 134));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./props/upload */ 135));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var


color =
_config.default.color;var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},


_actionSheet.default),
_album.default),
_alert.default),
_avatar.default),
_avatarGroup.default),
_backtop.default),
_badge.default),
_button.default),
_calendar.default),
_carKeyboard.default),
_cell.default),
_cellGroup.default),
_checkbox.default),
_checkboxGroup.default),
_circleProgress.default),
_code.default),
_codeInput.default),
_col.default),
_collapse.default),
_collapseItem.default),
_columnNotice.default),
_countDown.default),
_countTo.default),
_datetimePicker.default),
_divider.default),
_empty.default),
_form.default),
_formItem.default),
_gap.default),
_grid.default),
_gridItem.default),
_icon.default),
_image.default),
_indexAnchor.default),
_indexList.default),
_input.default),
_keyboard.default),
_line.default),
_lineProgress.default),
_link.default),
_list.default),
_listItem.default),
_loadingIcon.default),
_loadingPage.default),
_loadmore.default),
_modal.default),
_navbar.default),
_noNetwork.default),
_noticeBar.default),
_notify.default),
_numberBox.default),
_numberKeyboard.default),
_overlay.default),
_parse.default),
_picker.default),
_popup.default),
_radio.default),
_radioGroup.default),
_rate.default),
_readMore.default),
_row.default),
_rowNotice.default),
_scrollList.default),
_search.default),
_section.default),
_skeleton.default),
_slider.default),
_statusBar.default),
_steps.default),
_stepsItem.default),
_sticky.default),
_subsection.default),
_swipeAction.default),
_swipeActionItem.default),
_swiper.default),
_swipterIndicator.default),
_switch2.default),
_tabbar.default),
_tabbarItem.default),
_tabs.default),
_tag.default),
_text.default),
_textarea.default),
_toast.default),
_toolbar.default),
_tooltip.default),
_transition.default),
_upload.default);exports.default = _default;

/***/ }),
/* 47 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/actionSheet.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:44:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/actionSheet.js
                                                                                                      */var _default =
{
  // action-sheet组件
  actionSheet: {
    show: false,
    title: '',
    description: '',
    actions: function actions() {return [];},
    index: '',
    cancelText: '',
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: '',
    closeOnClickOverlay: true,
    round: 0 } };exports.default = _default;

/***/ }),
/* 48 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/album.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:47:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/album.js
                                                                                                      */var _default =
{
  // album 组件
  album: {
    urls: function urls() {return [];},
    keyName: '',
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: 'scaleToFill',
    multipleMode: 'aspectFill',
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true } };exports.default = _default;

/***/ }),
/* 49 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/alert.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:48:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/alert.js
                                                                                                      */var _default =
{
  // alert警告组件
  alert: {
    title: '',
    type: 'warning',
    description: '',
    closable: false,
    showIcon: false,
    effect: 'light',
    center: false,
    fontSize: 14 } };exports.default = _default;

/***/ }),
/* 50 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/avatar.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:22
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatar.js
                                                                                                      */var _default =
{
  // avatar 组件
  avatar: {
    src: '',
    shape: 'circle',
    size: 40,
    mode: 'scaleToFill',
    text: '',
    bgColor: '#c0c4cc',
    color: '#ffffff',
    fontSize: 18,
    icon: '',
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: '',
    colorIndex: '',
    name: '' } };exports.default = _default;

/***/ }),
/* 51 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/avatarGroup.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatarGroup.js
                                                                                                      */var _default =
{
  // avatarGroup 组件
  avatarGroup: {
    urls: function urls() {return [];},
    maxCount: 5,
    shape: 'circle',
    mode: 'scaleToFill',
    showMore: true,
    size: 40,
    keyName: '',
    gap: 0.5,
    extraValue: 0 } };exports.default = _default;

/***/ }),
/* 52 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/backtop.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:50:18
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/backtop.js
                                                                                                      */var _default =
{
  // backtop组件
  backtop: {
    mode: 'circle',
    icon: 'arrow-upward',
    text: '',
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: function iconStyle() {return {
        color: '#909399',
        fontSize: '19px' };} } };exports.default = _default;

/***/ }),
/* 53 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/badge.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 19:51:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/badge.js
                                                                                                      */var _default =
{
  // 徽标数组件
  badge: {
    isDot: false,
    value: '',
    show: true,
    max: 999,
    type: 'error',
    showZero: false,
    bgColor: null,
    color: null,
    shape: 'circle',
    numberType: 'overflow',
    offset: function offset() {return [];},
    inverted: false,
    absolute: false } };exports.default = _default;

/***/ }),
/* 54 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/button.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:51:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/button.js
                                                                                                      */var _default =
{
  // button组件
  button: {
    hairline: false,
    type: 'info',
    size: 'normal',
    shape: 'square',
    plain: false,
    disabled: false,
    loading: false,
    loadingText: '',
    loadingMode: 'spinner',
    loadingSize: 15,
    openType: '',
    formType: '',
    appParameter: '',
    hoverStopPropagation: true,
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    dataName: '',
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: '',
    icon: '',
    iconColor: '',
    color: '' } };exports.default = _default;

/***/ }),
/* 55 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/calendar.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:52:43
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/calendar.js
                                                                                                      */var _default =
{
  // calendar 组件
  calendar: {
    title: '日期选择',
    showTitle: true,
    showSubtitle: true,
    mode: 'single',
    startText: '开始',
    endText: '结束',
    customList: function customList() {return [];},
    color: '#3c9cff',
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER, // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: '确定',
    confirmDisabledText: '确定',
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER, // Infinity
    rangePrompt: '',
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3 } };exports.default = _default;

/***/ }),
/* 56 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/carKeyboard.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:53:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/carKeyboard.js
                                                                                                      */var _default =
{
  // 车牌号键盘
  carKeyboard: {
    random: false } };exports.default = _default;

/***/ }),
/* 57 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/cell.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 20:53:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cell.js
                                                                                                      */var _default =
{
  // cell组件的props
  cell: {
    customClass: '',
    title: '',
    label: '',
    value: '',
    icon: '',
    disabled: false,
    border: true,
    center: false,
    url: '',
    linkType: 'navigateTo',
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: '',
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: 'arrow-right',
    titleStyle: {},
    size: '',
    stop: true,
    name: '' } };exports.default = _default;

/***/ }),
/* 58 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/cellGroup.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cellGroup.js
                                                                                                      */var _default =
{
  // cell-group组件的props
  cellGroup: {
    title: '',
    border: true,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 59 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/checkbox.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 21:06:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkbox.js
                                                                                                      */var _default =
{
  // checkbox组件
  checkbox: {
    name: '',
    shape: '',
    size: '',
    checkbox: false,
    disabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    iconColor: '',
    label: '',
    labelSize: '',
    labelColor: '',
    labelDisabled: '' } };exports.default = _default;

/***/ }),
/* 60 */
/*!****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/checkboxGroup.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:47
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkboxGroup.js
                                                                                                      */var _default =
{
  // checkbox-group组件
  checkboxGroup: {
    name: '',
    value: function value() {return [];},
    shape: 'square',
    disabled: false,
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    size: 18,
    placement: 'row',
    labelSize: 14,
    labelColor: '#303133',
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    iconPlacement: 'left',
    borderBottom: false } };exports.default = _default;

/***/ }),
/* 61 */
/*!*****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/circleProgress.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:02
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/circleProgress.js
                                                                                                      */var _default =
{
  // circleProgress 组件
  circleProgress: {
    percentage: 30 } };exports.default = _default;

/***/ }),
/* 62 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/code.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/code.js
                                                                                                      */var _default =

{
  // code 组件
  code: {
    seconds: 60,
    startText: '获取验证码',
    changeText: 'X秒重新获取',
    endText: '重新获取',
    keepRunning: false,
    uniqueKey: '' } };exports.default = _default;

/***/ }),
/* 63 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/codeInput.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/codeInput.js
                                                                                                      */var _default =
{
  // codeInput 组件
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: 'box',
    hairline: false,
    space: 10,
    value: '',
    focus: false,
    bold: false,
    color: '#606266',
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: '#c9cacc',
    disabledDot: true } };exports.default = _default;

/***/ }),
/* 64 */
/*!******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/col.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/col.js
                                                                                                      */var _default =
{
  // col 组件
  col: {
    span: 12,
    offset: 0,
    justify: 'start',
    align: 'stretch',
    textAlign: 'left' } };exports.default = _default;

/***/ }),
/* 65 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/collapse.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapse.js
                                                                                                      */var _default =
{
  // collapse 组件
  collapse: {
    value: null,
    accordion: false,
    border: true } };exports.default = _default;

/***/ }),
/* 66 */
/*!***************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/collapseItem.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapseItem.js
                                                                                                      */var _default =
{
  // collapseItem 组件
  collapseItem: {
    title: '',
    value: '',
    label: '',
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: 'left',
    name: '',
    icon: '',
    duration: 300 } };exports.default = _default;

/***/ }),
/* 67 */
/*!***************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/columnNotice.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/columnNotice.js
                                                                                                      */var _default =
{
  // columnNotice 组件
  columnNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true } };exports.default = _default;

/***/ }),
/* 68 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/countDown.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:29
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countDown.js
                                                                                                      */var _default =
{
  // u-count-down 计时器组件
  countDown: {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
    millisecond: false } };exports.default = _default;

/***/ }),
/* 69 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/countTo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countTo.js
                                                                                                      */var _default =
{
  // countTo 组件
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2000,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: '.',
    color: '#606266',
    fontSize: 22,
    bold: false,
    separator: '' } };exports.default = _default;

/***/ }),
/* 70 */
/*!*****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/datetimePicker.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:48
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/datetimePicker.js
                                                                                                      */var _default =
{
  // datetimePicker 组件
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: '',
    title: '',
    mode: 'datetime',
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];} } };exports.default = _default;

/***/ }),
/* 71 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/divider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:58:03
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/divider.js
                                                                                                      */var _default =
{
  // divider组件
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: 'center',
    text: '',
    textSize: 14,
    textColor: '#909399',
    lineColor: '#dcdfe6' } };exports.default = _default;

/***/ }),
/* 72 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/empty.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/empty.js
                                                                                                      */var _default =
{
  // empty组件
  empty: {
    icon: '',
    text: '',
    textColor: '#c0c4cc',
    textSize: 14,
    iconColor: '#c0c4cc',
    iconSize: 90,
    mode: 'data',
    width: 160,
    height: 160,
    show: true,
    marginTop: 0 } };exports.default = _default;

/***/ }),
/* 73 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/form.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/form.js
                                                                                                      */var _default =
{
  // form 组件
  form: {
    model: function model() {return {};},
    rules: function rules() {return {};},
    errorType: 'message',
    borderBottom: true,
    labelPosition: 'left',
    labelWidth: 45,
    labelAlign: 'left',
    labelStyle: function labelStyle() {return {};} } };exports.default = _default;

/***/ }),
/* 74 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/formItem.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/formItem.js
                                                                                                      */var _default =
{
  // formItem 组件
  formItem: {
    label: '',
    prop: '',
    borderBottom: '',
    labelPosition: '',
    labelWidth: '',
    rightIcon: '',
    leftIcon: '',
    required: false,
    leftIconStyle: '' } };exports.default = _default;

/***/ }),
/* 75 */
/*!******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/gap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gap.js
                                                                                                      */var _default =
{
  // gap组件
  gap: {
    bgColor: 'transparent',
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 76 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/grid.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:57
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/grid.js
                                                                                                      */var _default =
{
  // grid组件
  grid: {
    col: 3,
    border: false,
    align: 'left' } };exports.default = _default;

/***/ }),
/* 77 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/gridItem.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gridItem.js
                                                                                                      */var _default =
{
  // grid-item组件
  gridItem: {
    name: null,
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 78 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/icon.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 18:00:14
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/icon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // icon组件
  icon: { name: '', color: color['u-content-color'],
    size: '16px',
    bold: false,
    index: '',
    hoverClass: '',
    customPrefix: 'uicon',
    label: '',
    labelPos: 'right',
    labelSize: '15px',
    labelColor: color['u-content-color'],
    space: '3px',
    imgMode: '',
    width: '',
    height: '',
    top: 0,
    stop: false } };exports.default = _default;

/***/ }),
/* 79 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/image.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:51
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/image.js
                                                                                                      */var _default =
{
  // image组件
  image: {
    src: '',
    mode: 'aspectFill',
    width: '300',
    height: '225',
    shape: 'square',
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: '#f3f4f6' } };exports.default = _default;

/***/ }),
/* 80 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/indexAnchor.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:15
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexAnchor.js
                                                                                                      */var _default =
{
  // indexAnchor 组件
  indexAnchor: {
    text: '',
    color: '#606266',
    size: 14,
    bgColor: '#dedede',
    height: 32 } };exports.default = _default;

/***/ }),
/* 81 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/indexList.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexList.js
                                                                                                      */var _default =
{
  // indexList 组件
  indexList: {
    inactiveColor: '#606266',
    activeColor: '#5677fc',
    indexList: function indexList() {return [];},
    sticky: true,
    customNavHeight: 0 } };exports.default = _default;

/***/ }),
/* 82 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/input.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/input.js
                                                                                                      */var _default =
{
  // index 组件
  input: {
    value: '',
    type: 'text',
    fixed: false,
    disabled: false,
    disabledColor: '#f5f7fa',
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: 'input-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    showWordLimit: false,
    confirmType: 'done',
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: 'left',
    fontSize: '15px',
    color: '#303133',
    prefixIcon: '',
    prefixIconStyle: '',
    suffixIcon: '',
    suffixIconStyle: '',
    border: 'surround',
    readonly: false,
    shape: 'square',
    formatter: null } };exports.default = _default;

/***/ }),
/* 83 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/keyboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/keyboard.js
                                                                                                      */var _default =
{
  // 键盘组件
  keyboard: {
    mode: 'number',
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: '',
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: '取消',
    confirmText: '确定',
    autoChange: false } };exports.default = _default;

/***/ }),
/* 84 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/line.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/line.js
                                                                                                      */var _default =
{
  // line组件
  line: {
    color: '#d6d7d9',
    length: '100%',
    direction: 'row',
    hairline: true,
    margin: 0,
    dashed: false } };exports.default = _default;

/***/ }),
/* 85 */
/*!***************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/lineProgress.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:11
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/lineProgress.js
                                                                                                      */var _default =
{
  // lineProgress 组件
  lineProgress: {
    activeColor: '#19be6b',
    inactiveColor: '#ececec',
    percentage: 0,
    showText: true,
    height: 12 } };exports.default = _default;

/***/ }),
/* 86 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/link.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:36
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/link.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // link超链接组件props参数
  link: { color: color['u-primary'], fontSize: 15,
    underLine: false,
    href: '',
    mpTips: '链接已复制，请在浏览器打开',
    lineColor: '',
    text: '' } };exports.default = _default;

/***/ }),
/* 87 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/list.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/list.js
                                                                                                      */var _default =
{
  // list 组件
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: '',
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1 } };exports.default = _default;

/***/ }),
/* 88 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/listItem.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/listItem.js
                                                                                                      */var _default =
{
  // listItem 组件
  listItem: {
    anchor: '' } };exports.default = _default;

/***/ }),
/* 89 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/loadingIcon.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:47
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingIcon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // loading-icon加载中图标组件
  loadingIcon: { show: true, color: color['u-tips-color'],
    textColor: color['u-tips-color'],
    vertical: false,
    mode: 'spinner',
    size: 24,
    textSize: 15,
    text: '',
    timingFunction: 'ease-in-out',
    duration: 1200,
    inactiveColor: '' } };exports.default = _default;

/***/ }),
/* 90 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/loadingPage.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:23
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingPage.js
                                                                                                      */var _default =
{
  // loading-page组件
  loadingPage: {
    loadingText: '正在加载',
    image: '',
    loadingMode: 'circle',
    loading: false,
    bgColor: '#ffffff',
    color: '#C8C8C8',
    fontSize: 19,
    iconSize: 28,
    loadingColor: '#C8C8C8' } };exports.default = _default;

/***/ }),
/* 91 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/loadmore.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:26
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadmore.js
                                                                                                      */var _default =
{
  // loadmore 组件
  loadmore: {
    status: 'loadmore',
    bgColor: 'transparent',
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: '#606266',
    loadingIcon: 'spinner',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了',
    isDot: false,
    iconColor: '#b7b7b7',
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    line: false,
    lineColor: '#E6E8EB',
    dashed: false } };exports.default = _default;

/***/ }),
/* 92 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/modal.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/modal.js
                                                                                                      */var _default =
{
  // modal 组件
  modal: {
    show: false,
    title: '',
    content: '',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '' } };exports.default = _default;

/***/ }),
/* 93 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/navbar.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _color = _interopRequireDefault(__webpack_require__(/*! ../color */ 94));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                        * @Author       : LQ
                                                                                                                                                        * @Description  :
                                                                                                                                                        * @version      : 1.0
                                                                                                                                                        * @Date         : 2021-08-20 16:44:21
                                                                                                                                                        * @LastAuthor   : LQ
                                                                                                                                                        * @lastTime     : 2021-08-20 17:16:18
                                                                                                                                                        * @FilePath     : /u-view2.0/uview-ui/libs/config/props/navbar.js
                                                                                                                                                        */var _default = { // navbar 组件
  navbar: { safeAreaInsetTop: true, placeholder: false, fixed: true, border: false, leftIcon: 'arrow-left', leftText: '',
    rightText: '',
    rightIcon: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: 20,
    leftIconColor: _color.default.mainColor,
    autoBack: false,
    titleStyle: '' } };exports.default = _default;

/***/ }),
/* 94 */
/*!**************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/color.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: '#3c9cff',
  info: '#909399',
  default: '#909399',
  warning: '#f9ae3d',
  error: '#f56c6c',
  success: '#5ac725',
  mainColor: '#303133',
  contentColor: '#606266',
  tipsColor: '#909399',
  lightColor: '#c0c4cc',
  borderColor: '#e4e7ed' };var _default =


color;exports.default = _default;

/***/ }),
/* 95 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/noNetwork.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:16:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noNetwork.js
                                                                                                      */var _default =
{
  // noNetwork
  noNetwork: {
    tips: '哎呀，网络信号丢失',
    zIndex: '',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABLKADAAQAAAABAAABLAAAAADYYILnAABAAElEQVR4Ae29CZhkV3kefNeq6m2W7tn3nl0aCbHIAgmQPGB+sLCNzSID9g9PYrAf57d/+4+DiW0cy8QBJ06c2In/PLFDHJ78+MGCGNsYgyxwIwktwEijAc1ohtmnZ+2Z7p5eq6vu9r/vuXWrq25VdVV1V3dXVX9Hmj73nv285963vvOd75yraeIEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaD8E9PbrkvRopSMwMBBYRs+5O/yJS68cPnzYXel4tFP/jXbqjPRFEAiCQNe6Bw/6gdFn9Oy9Q90LLG2DgBBW2wyldIQIPPPCte2a5q3jtR+4ff/4wuBuXotrDwSEsNpjHKUXQODppy+udYJMEUEZgbd94DvnNwlA7YGAEFZ7jOOK78Xp06eTTkq7sxwQhmXuf/754VXl4iSstRAQwmqt8ZLWlkHg0UcD49qYfUjXfLtMtOZ7npExJu4iqZWLl7DWQUAIq3XGSlpaAYHD77q8xwuCOSUoXw8Sl0eMux977DGzQjES3AIICGG1wCBJEysj8PXnz230XXdr5RQFMYbRvWnv6w8UhMhliyGwYghr4Pjg3oEXL34ey9zyC9tiD2ml5h47dr1LN7S6CMjz/A3PvHh1Z6UyJby5EVgRhKUe7Kz/JU0LfvrJo5f+Y3MPibSuFgQGBgasYSd9l6GDsup0WS/T/9RTp9fXmU2SNwECdQ92E7S57iaMeJnPQLK6ixkDLfjlb7546RfrLkQyNBcC3dsP6oHWMd9G+V3JgwPHh7rnm1/yLQ8CbU9Y33zp0j+nZFUMb/DHmB7+SHGY3LUKAk8cObtD00xlHDrfNge+Z2ozU3c9dvx4Yr5lSL6lR6CtCWvg6OAPw9z538ZhhZRl6XrwhW8du1KX/iNejtwvPQIDR8+vSRqJ/obU7GupjdNdh2gW0ZDypJBFR6BtB2rg2OVtuub9JcmpHIpBoK1xfffLzx4f7C0XL2HNiYDp6bs9z23Ypn1fC1Y/9PCFDc3ZW2lVHIG2JKzTp4Ok7nv/G6Q054MIvda+bNb74pEgKGtwGAdL7pcfAa8vOKEZ2kyjWuLr7uDh+/qvN6o8KWdxEWhLwroyeek/g4zuqwU6kNrhyZcu/UktaSXN8iNwuL9/RuvVXtJ9PbPQ1vhmcP6t9+47u9ByJP/SIdB2hDVw9MJHQFYfrQdCph84evFX68kjaZcPAZJWwjMXRFpJ2zr91tfuvrh8vZCa54NA2xGWrunvmg8QWCJ/N4ir7fCYDxatkOeBB7an501agXbygVdvv9IK/ZQ2FiPQdi9osGbH+zRNf7y4m9Xu9Me7N9nv0HXdr5ZS4psHgXpJC9P/wDRTx0Vn1TxjWG9LGrbaUm/Fi5meSvcrkxf/Cg/ow9XqAUk91v3qHT97r6471dJKfHMi8Oyzgx1Z03t1YAQVT2MwgsC3u+yXHzi0faQ5eyGtqgWBtpOw2Ol9+/TM+sTOn8L08MtzgQCy+tOHXr3jA0JWc6HU/HF5Scssr4jXcYqfP6V/T8iq+ceyWgvbUsKKOn38eJAYyl56TAuCEr2WYei//9Crd/5GlFb81kdASVopSFrerKRlaoZj9HR+700H10+0fg+lB21NWBxe2lhNHsUpDZr27mi4dV379R9+za4/iO7Fbx8ECknLCPTsTDJ17O33bJpqnx6u7J60PWFxeAcCbMV56dJfQKf1bkMLfuGh1+76zMoe9vbuPUnLsb2DtmOe5HSxvXsrvWtLBEhaTx29+Ma27Jx0ShAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaEsEVoQdVluO3BJ06ptHL34b1XRjp4Ch6Rq24+kmjG4Nwwg+9uA9u/73EjRBqhAEihAoe3xwUQq5WTYEzp0b3ZnV/Ncf6O/9AvY9wlh/6dy3X7ncN512Zw9BVLXjuAP4np44vnQtkZoEgVkEhLBmsWiKqwsXpjbPBOn3gRfenwnc+7GBe+zsjclvonFDS9nA9Iy/u3x9+vAP3735VPk4CRUEFhcBIazFxbfm0k9fHD7k+v4nQFaPQIrx8Gmyx/GJ0J/t7ez7mw0b9MmaC2pQQgh0/ZSm4g5TwueWWtqLt0HuVy4CQljLPPYnB0depTn+b3t+8B4t0AdBUv93h2H9xc6da0aXs2m+r1WQsLRnl7NdUvfKRkAIa5nG//r1oGtsZvjTgev/kqYHF/TA+AXoqv4npJemOEiQU1Eo2l+G0movBK1UBBPU7s9E1+ILAkuNgKwSLjXiqO/khVtvARH8dxDBRkMzPrF/V+9/BlG5y9CUqlXinHv9mRPXtvuus88L9H3JPv2zD2yXExCqAicJBIFWRwAvv3Xqwq0/Pnn+lv/K+ZvfPH3p9p5W75O0fxaBp793ce3AwIDMWmYhafiVgNtwSMsXeHp4eNXJC8Nf0PAdRCiuf/XgrnWUqsqotcvnl9DmRkCdweX4b9N7+m/ih+mbMraLM14yJVwcXItKpT1VRve+ArC3Qqn+3gM7132jKEGZm6tXg86J7OhDfuA/iHwPUpfUZSfu2L59tXxEoQxeyxkEgjKeOnLxHb4RqC+NY5H3+2953d4XlrNN7Vq3ENYij+yZwbG9jpt9GkBPQ5H9zgP9607OVeWp87cOQtn9zwJf+xDMNFfj+jryPqXpxj8c2Nn7P+SXey70lidu4IXzb0DNB4tr9751+HV7zxSHyd1CERDCWiiCc+QPjUCnsaqmZ62O5IN7N/VUNP48ee7mAZDTf4Tt049iUG4Guv4ZfNLos9UIbo7qJWoJEHjy+bP7fNsoOcnW0A0/aacef8PdG28sQTNWTBVCWIs01OfPj66BpfqTmq732UnjgT1bei+Vq4pTv7HM8Ceg2/o1qLQug7T+FaaM3IqTLZdewpoHgYEjV9fphvOj+OShWa5V+CxvZtpzv/LwG/aNl4uXsPoRwI+4uEYjAJ2GmdG8L0FK2mYa+tsrkdXZy+P7x2ZuHdW14P+BLdank9q6Qwd3rf+ckFWjR6Tx5Q2cP58K9Jm3VCIr1ogt48lO237r3//96YofeG18y9q7RFklXITxPXV+5DchKb3ZDMy37Nu5tuxG4R9cHH6b42QfAzlds+3EPXu2rfrBIjRFilwkBIIR7SHoJDurFU89ZOd680Gke6JaWomvjoBIWNUxqivFD87fej0e0n8Fwvr0/t1rnyqX+QfnRz7g+8FX8Rv8vL3auF/IqhxKzR2WCPxXqKeq3krDTdj2ierpJEUtCIgOqxaUakwzNBR0D09yiqePHOjveyOkpxLr9VMXb73V97S/h3nDXx7Y2fdPkAYbncW1IgIDxy5vM7LZt/hgrnLtxyaBrJNxv/72N+6tuNhSLp+EVUZACKsyNnXHvHL+1qcgNf2KbSXu2bt9dcmS9qlzo/fARgcmCtpzB3b1/Vg5QiuslLowENyDWDn8cSjl98PgdBviu03N+rl9/WufLEwr18uDwLdevLTF1YK3xnVZ2HI1bUxrT7z5zTuXdRP78qCyeLUKYTUI25OXbm4JPO00TBj+6I7+db8ZL3ZwMOiYdG4dA1lN9HWte2iuI2NAVPapC8O/CGPR34Ip/AZIbIMo7yX8G9QMbcS09P+2b1vf5XgdrXaPfiYns9oeLLEd8D1/B7Dp0E1jGP042pXQj7RKf546cmGzp+tv1TRf6YQD35/QO3seP3xow5IfC9QqmM23naJ0ny9ysXwgq98BWc0kVhv/Nhalbqe8kd/Fr8MOSEr3zEVWrwyO3I29hl+E9LUHGf+nAXI6sGPdd8uV2YphIKnE5IyL6bLxk7cn3bdkHHefrpvJAExMZ1uBZmqeNzXtfzUzk/m/ens7LjV7Px+8d9e1579/44l0duZtge+Np5zEEw8c2pBu9na3YvtEwmrAqNE8IZvNHsep5//yjl3r/0O8yFOXbv0QCO05gP0JGIL+fjw+uj91YeRh/Dp/PtCDM7Zpfmjvjt6Xo7hW9ycmJjaYduf7Hdf/8HTGfa3rG9rYxLSWnsloPg7fijZV8oFM2Ja2a9t6EJd7bCztvHP7us4rrdD/r3/7ct9I99jEI4cOiQ3dIg2YEFYDgOUJDFj1e8TqX7cT4kImXuQr5279A4DeBEX8ayvprU4N3rovcALot/TH13T0fXDTJn0qXk4r3k9OTm4y7a6PzjjORzOOvn1kbEqbnEprPhRzwAKzwFLHk05hv6Yd6N+o3R6beG50aPSdr3qV6IJKkVp5ITIlXOCYn4Yexr0w/DO6YXymHFlR0e5r7tsM3fxgJbI6fW1ivTeT+SsYmr54cFff+5Cu5X+hb94Merp6/J/PusGvTE6724eGJ7RpSFOkKPCUZvBPBccoHBet3Rwe13rX9tw/PjXzZ5hKvr8SfhWKkeA2REAIa4GD6p0feRdWBnvxjv2PckVhVfBf4A29uG/X2i+Ui2eYn8n8NryuDr3jPfWSFV5k44UT137eshIP2K7/64cObbheqZ6lCp+Ydt8TBO7vTM5od1+/NR4SFVhoLpKKt410lnE8LTMzo3V2dLznxLkhYgQ9obiVjEDln7mVjEodfYcpw+MAsftg/7qSDbAnb97sCSb0Yei2fqOcbovVqKNnNO8HmAE9Cv3Wp+uoWjt27HpXNqH9WTKR+kBHKqEFbvo5y3N/avfu4g23R45f3WGa1k9ZicTd0zPTf/f6O7f8dT311Jp2fHzmgJlI/N70jPPe4bEZ6Kg4qw0lqlrLiNKBiLWerpTW25PUbkPXZViW62ecHz+4d8PXojTirzwEyhq8rTwYFtRjvpX/rlwJ+iSXugPbMuyKBOHo3geRJtuT7PujcmVUCuPJlhnL/9NUqvMD2eyM5sxMaIlE4n7XML907tyNjcxHQjty4sZv66Z1xEok/xNW5n4uZSf+8sT5m++vVO58wkEu5sR09pd9w/rWyET2vReujiqygrSopn/zKZN5qMeirotKeTyolm7p/+X06Wvr51ue5Gt9BISwFjiGsLl6N6SrvylXDNTK70D4mX071pwtF88w6Jd/DG/1E1u26NOV0pQL71y3/8PJVOcHMzPTWkcCH2YGOaTTaS2RTN6f1fQvvvDK1bdnbO2JZCr1SeRfn05Pa1PTU0gXJBKW+ecnzlxvCGndhFQ1NRP8bcY1/vjS9bF1V26MwHwsVKiXa3etYVw1TNhYJ3TDjQCO42jJVMcez7J+t9YyJF37ISCEtahjGjxkGDr2DJZ31D8h5vUQJL5RPkXlUMM07u3qSGidICvkzzuSlmlZb0olrK9hD9v9JCrPC196JoPMAolFg6CV+PPj54YeyWecx8Vk2v1Q0rSfhFT18LnBmzBRyNalp5qrSuq7kiAsh4SFa7oZ9M0wzI+cPHOjZPo9V1kS1z4ICGEt4lhiCvZrSa2jol7qzPXJPk6nIGbVbWfUvcr7hO9MP97ZVXpggOu6ajplYStj7l1XvbRMXbPAbp6HzSSBlkraNknrvfVCcPt2sHYi7f3pTDb47KUbYxuvKqkKpYBXKBnV869c3WgbDEixAck0FGFFfEzJzbIsO9C1TyrcymWWsLZGIHoW2rqTzdo5dXyykz0NC8l779i5vu4zwM+eHVntGP5jqVTq/6AkVc5NZ3wNH2lVxNWZNIukMSjiNd9z0+CHp5DXAdX4SAg203w8GB5IATtODHzdK8C15kEjhXvNS9rWA11dnfcMDY9prscss48RySakrOLWqODCoIKAgkuVgsS0urtD60haeV1YYVbbtjUn6/74HXvW/11huFy3PwKzT1r797Upe3jq4sib9u9Y+wxe+vh7W1N7jx49v6ZzbffnQD4/Cj1Pfjx54XiBls6GVuTUc9mQsOIO9mPQFdkIRlz4fy5JLm2ZMOqTcJaXIqpcqnixVe+rdbZ3dbc2OT0D0wZIibHSksmklslknvx+//q3PiKnXcTQae/b+LPQ3r1t0969cOL6G7o6E09qgZegdMJBpVQ1DbKCpyUt6oPKz/4NEJalCAuZFIuEVBJd+jgLh4rvAiFqUVGkhJZMWFp3Z0obGSu/d5gSnWmavuO6h+/cvYHSobgVgoAYjrb4QPMUiGtj1/79jBMkLBwiTlMASlYzTkhWCJyTrGAyMOFkst/BoYMmuIIyGJYcMXMMdNwHPhYN1qWS1t6ZLGaKZL8yzFXTr15BooLLMugHMBRNKgW+It8y9TEcJGt4rvcRFCCEVQbFdg0Swmrxkb0+cf2XOzq73kgdFieEXF2jdEUJKQH6SVWQrNjtZDKlpTPp38U58iUbthk/Ph7sN6zg/xudSGvD4xkq6otcnnjyF0XRRTflkyC0IIJE1JG0QbqGNpMNp5xFhRTcZDNoj66988SFm5vv3LX+WkGUXLYxAuXnCW3c4XbqGs9hwjv+a9lsuN+ahOJSCoLjNDAFvVUll0p1aNPp6adTweSflEszPO48oFn+4yOTmR+6enOshKyYhzWpf/jDuuf6x2aV/qNRaPG/1d0gUXWCA0uu7GhMmkqmerEc8KOVU0lMuyFQ+Ylut562YX9Sncmf7Ojo3BDZWbGLtMkiUVXSWTFNuMqWuYG530f7+/tnGFboxsfdd9mm8XdDo9O7rg6NFq0CFqZr5DWlK9qV0fZqGvZchSuPlevB2VmG/hOV4yWm3RAQwmrhEcW64qu4ykfJho52Vp3J8quBYQooqWDKADftBd6HD+5efyoKj/zR8ew/hWXY56/cnFh7a3RCTTGjuMX0SVB9qzu1qfQM+jO3dBW1g6uVSHv/qVNX10Vh4rc3AkJYLTy+WA/8ou9kJjo7bOh+DLVFZ64TEbCyBktxI5PJZj56R//Gx+NdH5vM4vuI+p8NXh9LjU1iw3EZhXc8TyPuuV9wDaaCfBjTM06N0hVWQmHBDzvSDZ5tvqYR7ZAymh8BIazmH6OKLbzv0KZvJEz3ZzEFnEolaEtV2XEaCLKadrIz//TQnk1/EU85NuH8th8Yf4j9gMZUOrNkZEVZCnsbtTU9KW18GqcKFyjh420sd2+j33pg3F8uTsLaDwEhrBYf04O7N/2t7/o/C2FoGnsIy/YGlvAwSfCvZzLOe+8oR1ZT3u/5uvHJC9dGtJlMrfqjslXVHwjpat2aLi2rjFFLjUSrFUjlO0juddXSSXx7ICCE1QbjiHO0/hofbPgwpnDTOR2V6hWNQqGUx34890noet5yaO+Gko3Y45PO7/uB/lvnrwxrWdha1absbgxo1FWtwplXqYSJY5Nn5lU3bLHQmGA/yko0plVSSjMjIITVzKNTR9sO7dv8RSeb/T9BWmMkKv4D+YzBXuljV7yxd+zfte6VeHGKrHTz4+cv38JWmyUmKzSGG5z7VndoE7kz3uPtq+Welvhwm39weVjOyaoFsBZPI4TV4gNY2Pw79mz8KyebeRIH+VEZTaX0sf27+v794TKmCxNTzr/2NOPj5wZBVjjdYSklq6jN69dyKuhqmWztivYob+RTSkPbe/xMdlMUJn77IiCE1W5jq+s4dYEO6mzsYAmvi/+CrH7LDYxPcBq4HGTFVcG1ULLT5orS1ULIkoSFI2cMHKG8obiXcteOCAhhtdmo6gaOh4EWWlkyYU9gvHswXfgV19d/7+LVkSWfBrItJJhObL/p7elQR8fUZnEV70XxPc01sM+xrzhU7toRgZIHuh07uZL6xA3LBaYB+Ar8rBsfz34YX1j+D5eu317QNGy2xPquSE4mDuXb2IujY2AgytNE67RiKFshzuwCR5s9ZSMlsK0QEMJqq+GkBKOF5yFzRoidK5BoFCeMjM/8mG+a//Xy0Li55KYLBRiTrGjwOQ1br4VMBQuKVJeQKVPxMLlvPwSEsNpsTEECmBLSgbHUpwD1YGwse59l2p+9fmuig4fiNZIowrqq/6Xeqm9Vh9JbjcOKvqFtACX7gV8kTVZvkaRoRQSEsFpx1OZoM2iKxxuHLtDcsZlgLzYZfv7m7XSv+r7fIm234XSP/8o5ktWqzqSyZr89PoXPYDTYkZvziw0NLluKayoEyq4iNVULpTF1IaDjHHZmoAW4aep9geN8fiLt998cGYdtVp7K6iqzXGJFUCAi7jdkuapsBJKcPBwgyP8YRyV7B04Q3dDbpY3jg6gupoMNla5U41BbUN9n0sr1ScKaHwEhrOYfo7paCAW0WiWknihhW/0Tabf/6tDtxpIVSIhGnz1dSXUkDL8fSHKi4/lWPId9Kp3Vxqegp8J/m9f14D6DQ/nmb281FwgkZ1Dj7bnSSFx7ICCE1R7jmO8FJJr8jCvjeNrIxFjDJBpKVaSlXhwDw384MyucBoLAGEfHI5ptO6n1YAq4FjorH9IWjUOnFlF3pj62aui3whbI33ZGQAir/UY3XCVEvzgdw/8NcSyGUhSlpVWQrFg2p39xp0JYLyIohaXxdZ2FGofG6yi85/QS32F0Asu8URgu1+2JgCjd22xcsVElPC85169Gaa1YTkRWJKpSqooBiQQzONvq9sRULKKxtzzAEJw1api2EFZjoW3K0oSwmnJY5tcoSD09HanEDztubnfO/IopyUWC6sUmZUpW5aSqkgwgK04DxxaZrFivacCaIdAuH9zaM1rSDgloOwSEsNpoSMenvU93dXb+EE5taFivKElRqd67qrNmsqIF+yjMF/i56MV2JqadYKxXMDXM6+4Wu04pf/kQEMJaPuwbWvPticwj4Il/NnTrdl7JrqaDC5wTUle1GmdWWVCw1+JotjA6PgnThsIdQrXknF8arkJi/+R355dbcrUaArU9ha3WqxXW3tHR9C5dN//T9eEJ3aGdUwP7T0V7F86Mr0VW4mF6o2NTS/ilaB2HDmb8wA2+08AuS1FNjIAQVhMPTi1NgwRkGKbxRxMz3uaJSRzVUkumOtLwo6Zc7aOkVdEhynN9NQ1cyuNqeEqD67mX9TXGyxXbJhFthYAQVosP58S0909czfqJqzdGODVqaG/IUbCWr2p0yukfp4FUtDfeir1yl8IPUGjPHFy/fqJyKolpJwSEsFp4NEfT6Z3YBvOp8MvMc0hAi9hHNQ1cBrJil5TUZxhfXsTuSdFNhoAQVpMNSD3NMTzzU1PZYAM/ProYkg3UV5rHT8lXmA7SwnwEq4FLLVkRI04HM+n0LdvzvlEPZpK2tREQwmrR8ZucCd7hePr7rw2N5PfxLUZXON1zHKz4kb0KnIttP6Njk8tyaimbwXPrsW/yq3v3bhoqaJZctjkCQlgtOMCYCnU4GedTI+NpQ32XbxH7QOmKG5nzdIWZJz8HNkKygqI9TmSL2JSiovGVn0A39c8WBcpN2yMghNWCQ4zPc0HRbr6GEs6chJFnmfl3knZO4/hmII1B6fiFG9br0s6qAeXPp2WUrhzHeXH/jr6n5pNf8rQuAkJYLTZ2kK7Wul7w6zeGx9DyUsZovOodOizosTg1TM9k1Wogpa7lIisOF+w48E/7E5B1Y/cgtdizsBKbK6c1tNioT6X9n3MDcyePOo7OoJqrC6S0+ZIYV+GSOHxvc18PJCxXG4ed13I727axqTp9yk9rX1jutkj9S4+ASFhLj/m8axwdDdbgELxfGsLpoZyqVXPVU1QugVJUV0dC27p+FaaBWWxknq6ceAljTNMiAf/BoUMbJpewWqmqSRAQCatJBqKWZpgJ731Zx9pJM4aK0hXe5vlKVFEbKFlxs3PvqpSSqpbzKztRm+gnEkktnU6/2GFMfa4wXK5XDgJCWC0y1iAR6/Z49iOjY7C5qkG6mk+3SFQGlEP8FFdnygrNFqBsn1OxP5+K5pGHbcBhqhT8fqu/v39mHkVIljZAQAirRQYx7Wj3Zj3tddQjVVJ4l50CMjHe8mqOTJCCvmoTyIrENXx7Uinbm4Gs2PZUqkObnp76i0N7N36tWl8kvn0RaGnCGhgILKPn3B3+xKVXDh8+nPseX3sOlpt13+P4uonv71WeDqLr1ampFB8S1JrulNaHc9rTMxltcpofOeWns0rTLkeIZUHRnpm5YibMf7kc9UudzYNAyyrd8ZLpWvfgQT8w+oyevXeo++bBtaEtQd9s1/ffRsV3I6eDJCp+nourgH04UZQnhIYfWm1o8xdUGCU8/E/bil89sH3dlQUVJplbHoGWJaxnXri2HTvd1nEEcCBS3z++MLi75UejQgcmJjL92ax/gNJPo6QekhVXAbdvXI3D+XQ1Bcxiu02zTAEjKFIdHTQS/S8Hd2/4YhQm/spFoCUJ6+mnL651gkwRQRmBt33gO+c3teNQYin/oG6aKX5rcKEukqqoWN+Ij5vy81v8UATDG0WGC21jlJ96K6wKPpWd8H8jChN/ZSPQcoR1+vTppJPS7iw3bIZl7n/++eFV5eJaOczX9Z2YvM1LPxWpocBHKv8qHHdMqSphGUqqahaThfj40ITBcbLnsDj6oXvu2bS4n96JVy73TYtASxHWo48GxrUx+5Cu+XY5RH3PMzLGxF0ktXLxrRoGNVPPfNtOolIrgElLGYH2wbZqcipdIFVFlDbfGhqfj9bskCaHHS/7gTt3r73Y+BqkxFZFoKUI6/C7Lu/Bl1jmlKB8PUhcHjHufuyxx/g5lbZw+BL7bX4EoiZqyS0T0uM0j1+82QSl+ua+bhxj7GjD2LicwWkLzaarigbKsmDJ7gcTmezMBw/t3ixntUfAiK8QaBmzhq8/f26j77pbaxo3w+jetPf1B5D2RE3pmzyR4/nH+Mti4Wx1dUrCHO0lSVGqskFUnakkpn6mhu086jgYHkWTW3Wbo4Tli6L5gqYHE47vfeDufVv+YflaIjU3KwItIWEdO3a9Szc0ElDNDqcLbHjmxas7a87QxAnX9ljfxcr+Mzs29ykpi1O8iJjoR/cm5o7dnUl89LRLW93dyWmVIip+Kp7pmlWqIvQ8Mga9Gslm3Efu3LX+K008HNK0ZUSgplnGMrZPGxgYsIKeXa/TA61jPu0w0+7xBx/cd3M+eZspD0wbDgWm+RXP13cODY/jWGKuGAb48jG+agNpilbqlKZoWDqDY2AyjtNUlupzYZlKpXgaxIVMNv0zd+/d+uxcaSVuZSPQ/IT13TN34QRvZW81n6HSDdMLUqmjh9tgd//Fi8OHEl3JL3Z2dh3MzGA7XU664llVWRz/QhLjNYmsmaWp/DjCjqIDdlaZTOZZ1/A+fGj7hjP5OLkQBMog0NSE9cSRszuswNhdpt31BRnazM3U9IuPHDrUuG+419eChqU+cvzqjp7u5P9KJpMPpqc51Zv9QntLkFQBEqZluVCw/7nhaP9i376+8YIouRQEyiLQtIQ1cPT8GjOw7vE8tyFtxBrb2MBXdh579FF99g0vC0nzB548ebNHT2l/aFmJj1BPBYyav9EFLaQ+jdPAVNL8/pZ13a8qiJLLOhAAjvrTRy/d0enbF+69d0tzHFhWR/vnk7Rple6mp+9uFFkRGF8LVj/08IUN8wGp2fIcPLh+4sCu9R+F3ucj0MLf4vaVVnChqYWmdaQS2jpY2vd0djh86Vqh7c3Yxm8dudTPxaW0lrn7yJEjZW0Tm7HdC2lT0xKW1xecgHE3FDWNcb7uDh6+r/96Y0prjlIO7ur7TOD5b3ayzt9ylY0Gl83qKFXZsCXrXdOlrV3djf2LBr556JOshLDmMWhPPXV6vav5O5jVxYLUhNl3iIbV8yiqpbI0bQcP85C2Xu0l3dczC0XUN4Pzb71339mFltOM+Q/0rzu5f2fvu1zH+QDOt3uZ0pbVRMRFouJK5qqeTkhVqyBdtdUmhGV5JI4cudrpd5kHiyp3tTU/8s6r+4rC2vCmaQmLWJO0Ep65INJK2tbpt75298U2HLuiLh3oX/95L+0/kHUyvwTieiUJHVEimVzy1UKeWMqv2pCoKEVFRNXT1aHawnBx80eAZj7TwcxdAc5Gi5fiaNnNT37nCk4xaV/X1IRF2B94YHt63qQVaCcfePX2K+07fMU9U7qtHev+xE/7r3cc70O+6w1gxuV0dHZiusgvJS/O7IskRXLs6KCxqj+B26t9a3uUREWi4plbQlTFYzXvu+7tB3EIUGel/L6e3TNw5NS8zYAqldss4YvzBC9C7559drAja3qvDoyg6pwCP+KBZaVOPPjazS1vMLpQKE9fuPnawDB+EqehPwzWuAuSl8LPg90WVxhJJPWQCUmPBAWTBEz1TFUGpqO3wYYvIPgr2az35a2b1/50V6f1e1NTlVcvEzB0xRekj67usu5FmS2/crvQcaol/zeeObfTSOj91dIq28PxiaOHDx9quy8LtQxhcZBqIS0Dhkl2l/3yA4e2j1Qb2JUUD1Iyz1waOQib0vsxKXsAFvH3wMB0JySwtZC+DBPTN5BOCEnhrI1BuKe9l6tIzsVCiD6E0DOabrwI2elZ09aP7N3aNxjheXvK+a1OENa0EFYEyYL9rz072Ju03ZpNQKj7Xd899cKhNrA9LASvZTY/s9GcHoK0XsrakLS8UklLxyl+/rj+/Qfu2367sJNyTS7SuZfneO7ffweBGScu3NwAqWgrTvTc5jjBZmw87tMCfRXYKQWOgula4OiBOQUZ7DZuhrAGdQXxV0zPuCaGnkv3VPGHOpPw7+QPR62OM5HhdNddGOeX2kmCbSnC4mDlSStVTFr4eLljdHV+702vWz9R66Cu5HS5h5hmHvz3QiOxwJTRo2BGgY06dm7OVhewYGAY6s75oD+ZDs4JPY9JyqSCQ7ABqftd5VFM3/j2Ja4mtsWpJQSq6ZXu5UZTKeJnsHpohiYPRqBn04nkS2+CQWW59BK2dAjwS0Y4IHDz2ERWG8Gnwm7iK9W3sFmbvrqGPzw6gW8eTmvTM07XmTPX28KYd7EQ3rjnvv1QFHbPt3zT9DcMPHd+13zzN1s+/hC2rKOo7NjeQdsxT5LEWrYjbdLw05eHtwWe9jl0542u62HZHZIVpalY/yIlP5X3MHYddLLZfy4fmYiBhNuB509vw+rG3tKY+kOwGHLi7W/cS91jS7v4s9TSnZHGLx8CICH9lXNDX+zpWfXuycnaBV2e3e567nAm4973qv0bzy1fD5qr5oEB7KXt0u7B3Loh7yhWVfypbOalh9+wr6U3mbfklLC5Hi1pDRE4ef7Wj+EEiZ+amqpvJT2bzWjJRLIPR3n9riA5i4DZg720DSIrlsrvHXSZ9p7ZGlrzSgirNcetqVp9/vz5FJTqj6JRejTdq6eBMzNpHP9s//QrF4bvrydfO6f1JrCX1mvcXlo98Kembjotr3wXwmrnp36J+pYNeh5JdqRem83O77gxkpxtW3bgOZ/g1HKJmt3U1Rw+3D+zrc89aunagnWzpq6PdxujLz388L4F78tdbtCEsJZ7BFq8/sHBoMPX/I9hyrGgnuDUUZzrnnz7yQu3HlxQQW2Ued++fZmJ1e5LoPB5k5ZpWCPXz+08du+99zrtAI0QVjuM4jL2YcIZeh+2+9wF49MFtYJSlgmHE0g/JlLWLJQPg7RmhtyXsJ18eja0tivsXhj6xy9ve/mRR5TRcG2ZmjyViN9NPkDN3Dz1FW5z9XM4i+s1ME1YcFNpUIrVLHzJzHnwjl0bn1twgW1UwPHjxxPXpztejR0HFTc+F3YXRwxdfdM9W08D0zrs4wtLaM5rkbCac1xaolWOvurhZIPIih0OdVm2haNTfqUlAFjCRnJP4HBn+iUqz6tVa2nGpTe/etsP2o2s2G8hrGqjL/FlEQC5GHghfplSUSMdvwaEA/9+4vjpa3c2stx2KIsfUek2dr+EuXNF2xEjSJx98w/tbFt7NiGsdniSl6EPp84O3W/Z1oPzXRms1GRKWdCJdeCIlJ+vlGYlh997r+70+EPH8NHJEtLCauCph+7bmj81ox1xEsJqx1Fdij4Zxi9AT2KSYBrtslgxhOD2gWOyz7AstFzx6zFHj1mGobYUYAgC9cHge3ddK5uhjQKFsNpoMJeqK6+8cm0X6noXiWUxHA8WxAdWNyQM45HFKL8dyiRpueM7jllmMGpnjO+1w9fNaxmXxiogaqlR0jQdAkeOBPjczrnOiQ6jw88ESSOA6KT7iQzOHEvavu1pZsLQg4QPP/DdZG9Xx/vWrOr+mfR03SvtNffdxleAQIgvTzjBT0w409Mpu2faufZy+vDhw5WPMa25dEnYqggIYbXqyNXY7i/jCyvdfmaVb5hdVsLp9LJGp43j1/1A7/RdvdMwPRzEboRnLVHe9vEvL3eXBOB4ZMta22H+TiqV2LJQ26u5u6Bju44Z3J7O/Lvp6cwPmBanOwQ4uNHRTWMK21bSvh1Mm642nTWCtKkH07rnTE72aOO0XZq7bIltVQSEsFp15HLthg5J/+aJE12m3tVjOPYq1/dW4cTjHnwMYhXOce8xDd3y/PJW6OpMdsTRVy4iK/rKMR/jwvz825VIHFzT3fkx13UW/dnhRy3GJyeeHEs7n1XNibUPFvY6vtGDw5vV9w0Vofn81qGhZfDhi3HX8SfQ/3HPMse9CWcCX0gel2OIFJIt+2fRH7qWRaYJG85NxldGzV4tGayFSLQ24+q9ULyu9gJfMU5ELTn6wUISTl03NHz1KzyiJLqmX657OLLdSJgoXTO7cBxyN172blier4YCvBsFdSNXV2dC35tKJrbzfPfFdjwvC/qs9MSMxxNRsSqmT6LhUDQHE+jUBE7UnATXTuLsrRn01K2l/x6+qItiR3TNG8V59KNB0DGSfNXGUXwJY2Gm+osNhpSvEBDCasIHgVLTt75/aQ0MnXpBNb2QgNYEntfr4wu/nBYpKQLtxtdwAh0SBX3VDe7nM/Ha5vf1Fb/CURS2bCTAWWuxR229qRsbQQQbUed61LfW14JVKKsTJ5sk8WUcHbtlNANyTOhgcmAGKH7p3m1FWpqtuZCu+LByVdKHVMjpKEQrBwIW9tnpXOIH+QTDSH/D9f0bmCLewDn1I4HmwtAypPDZ/oe9oXKf/aMPsWxSs/RR13FHrURiZE1gDR86tKHEdCDMKX+XCwEhrOVCvqBeHNaW6ui11/mWDtLQ1kEiWodXE4rwYgepAPssTPCMOjIdAk94TZ8pMZjch8HjDorGFUTUAwlkh64be0A9/ZCatiDZWtOyE7ClQmIdJICJFYhA+TRV4Fo5/QIHiUvrTEbkVRCxiJfsSBbfYk87OTExXxdazY5yUgiRKfpHQ1YSkONmAZY+gV4NIeVFfCXoLNA5h/Plb5LzWAyzF+IVXdNnvO/6GcsyhjC1vmWZ7s2pO3fdOqzriy9asnJxZREoerDLppDAhiIAEtCfO3F5rW0a6z1PX4/nf53nG5RqqrpieSnULEVh8cx4E7ugH78H8tG9eP/24oVezY+pkpA8b/abhPF8le75BqdsXUtaFeaTlTI2IByEoU1l8oq1mkokcZHElIRoWmpejMMCMyCvQXyy7JjjuUcgOl4tLCzCMpTHgFpcgkViX/dH/ax2Szf8m2Yqc/MN+1r7BM/C/rfCtRDWEozSkbMjq7NTY5t13dqE6dhG3wsSqlp+C9DDi0ifLrqmT1f6BgUaPjiHN0lJAGAfvpWcI4XjiHIMF6ocO/EjmMa9HeelQ1LT1PRpoce/sJwOTCQtc+kfGQp6Uxl+9JWtmL+jNEaJ0gKBgbsygR58B4sHfwV5aliVWg3vCHv6ymHcdG868IzrVsK6pnd71+/dsmXxbD3m3/W2ybn0T1/bQFe5I8euX+9ybuqbXMPbDA7ZCKV4uMOecyz+9OfmWvj9x9zEw6JW+JuOX298WhE6qtwLEV3TL1tb/AWj7sqwfqaro/sdmcyM+vBp2XzzDEzaBiQsNH+e+eeTjQ+ohwqnG0BYhfVzNYKrkOmpyauYYH8KvD8G6RPBszrC6Jq+ystl0ghzXEZjR5+O4+iZwTh+eG7Yqa5rq/3hGzzTSkXKn4YgIITVABjBP+ZzP7i8ydasrZCetuCHvIvFRs92SEdlpnCYE2LOQi12OA7RNf1yjrphHIyE9yOXPnfNMDg70DpdTf8DWDKs5rRvMVwChAWrUgh21HzllD0NrigqlxKVC7bKQuOOWeGiuI7OTkhb6T8C/Xw3xkel9cXxj6eIxiY3Hhx3X9dHsWJwDaa3l1+zd9Mt/F4tUk/ijWnP+/DBb8++LWqvnh0c7NDGta0pO7kl6zpb8AJzEUr91kYEFdeBRCt69Nm4+AsSl6jwjVGckY6VwPwUpLhLURx9xliWvxFHi/w+zB0SWCnLsVpxnoXesSI2ngp4zmRJXPgf/0IleGH51R6uwjeX5MR76qtITh7+8N9Cp4GF7Sm8Zl1s35pVXVomm/5c1vG+Wm284njHJeJq44/FjixUAld8w7uijW6+xo3MhW2S6+oIVHumqpewglJ87+LFtcFUcqur+1vxwPcZJqYPMOyhXw6GKI4+4/GwQpjCBhe+6XDIpFb06PM+np5hhS5eXzw9bLJ2pBLGv4Fe36BU4kA6IQGw8MUY6MJywVeqDs54Z69zrWdY7jI3G1ZtUiSV6zzDI3IqLLew/wu9jspl+yywrA1pEed5QceXPT3jBb/DLrA5ua5UHZ/4eMTbFx+fwvE3DJO8fANrjlctL7giJhRx9MrfR89R+VgJ1Y6currONuwd0FNsxwtV02mPlWGLy1TxlPHf6Hh8PH9xesvw9yRM+5PIRT2ZIgVKKZxWUY/PT8aTFPji0i3m4Ed1hDWV/7uY9bNGtiGqAyorJRWSqCgdkrQiR5KddrwPlsq8xfhG6efvx8dvtiQczDdmmPaldDBxSVYeZ3GJXxUMWzxq5d4fPz7Ym7X1HTAL2A7NqtJHEQ3qtCPjw3LoxB/v+OMZ5VVzR5aHWRuErYA+y4uu6fM+Xl9J/lh7bFvbY+vmv0bWos9tsXAWSLIiaSnyApHxJz6SbFSFuXTw8i86r5vVRW1m+6IHmUREAuI0lcREP5q2ztWPrO9/YK54xsXHI56+cePvj3qBfimZNS+J5FWMcrjptThsRd4dPX9+DcwEd5iQphwozfkCwJKaLv9ewHYKeicfSudwShcnJDBBOD3MTwGRO0cqLIj73jQTaejDBYaPHTBgJ/i5+HyYijd95sFhRzkzB7yL2IrCtGwezj9nOQVTUlfPwiicifnu5J0qHHd8mXHIG6ZD7JQqIk9kJK6QwAokMWRUhMaSeJ0vcfaiXNhs7PyuwpYV51Vh+EM/Pu2M9GckpyiOuZm2Wvtom+Y4me8xPbvIIujzPu6Wbvyt1ejL3U7Sv/v754ZHsORwaX3KGdwiJhO5pzY+Mivk/urVq52jTnIXlEc78LKu8qAMx/G8kHhyOicosz0ovM3IrIDKb15HSvDoOoqv+hMLYCOWI8ash0vmufryZVcqLz4u8fym3ov1xT/EVp4UDUTn4/iS0xW+sZTMojASmLqGp64iH4FRXJQ2TKj+lv7JVRTVxwQkm9APyaboGnGMzSVR6VR87ipsVT645ovOzi5tamb6zzB1/nqzjz+s9YetwLioZW5C8jq08K9+1IxS8yQsfF6ap1WL2BK8VOaJc6NbPcPrx7wJ++hmHQUPvOaQgMJ3ETtVlERDP0wVsQ19uPgcLQyt/Dc+p4jlL6k/1xa2qVyh5ApEzEoErm/DsPOTXV3de6anq36roFyRdYWVbVSshHJEMt98saIXfIu9koplYZL6m/hUz7kS/Jt0/PE8+Jj6X/Y6k+fv2tA1BKIvB/OC8WnGAmp5dpqx3XW36fjgYK/upXbhFd+BrRlqn16MfkrspkoC4hnirYjbUVWzs4rHx8uL3cerjwt0TA4RcBcsuX8Rn97q54okVsCKJJ9YkSvy1gJR4aOtnAr6OJP+L13d+BKBKMEzHhAfgDh6yzD+vqHjTDDvYpAxLqwEfVdbE9bpIEi6V27tdLP+LnzPrWS/XrRTnz5d4e79+LNY7r4kP+Z7Jv7z1LyPL0B4Tb+ci9cXLy+eJ54e8Rw//rqqcUR+HOrgYVprJbBl5E2w63oI64J7k8mUDZLGhmAXs19ucVkxP8gKQu4ptCxbMy2TW3KAGI4u1P207ztH3CDx/7bL+Cdse8h1Zy5ev7Dp8uHD7blJuy0J69TV8XW6l92Dl3cbLG6g98idbhDgdANcY1ZY9o2N4mpNr96GRf1Da3Wui0RW69F1bWslvp81LD2xDTOGu9DhQzBc7AcYfYlkAqo6A6ozqHNBYJTESGitTGShsp0qQSxT4AcoPJQw0LBlEPhBFakHDjoLvY+XgVIyg7WK77tG8n9pvpHXBbXL+OMBd7FN6KLu+uf27esbX9RHdIkLbxvCGhgYsDb3v2a7obt7YHakpKmYiqgE2ioqJbzIOszXcSov/DAzRRNehyJKvPx4+igv/ZLKEaCkoZxUFMYXE1I8f7Xyq/UHp9CkAlfbCF3NdlhS7IQguA0N2wiJYy1ktC5IISb1Okr5jSYruy2SGlYkIkKLSC3yy/WrUWGzSnjaTUX/QEhYQuNewLCdwBFKRkpOuAfr4sBnwwfDg6B0MHagORhBHNqHw5WxTwYav6lAt/42MBLfrYZXHO9w3Ftr/B0Hp0pY+tkD29ddAz5ln8NGjddSlNPyhHV8aKjbzAS7Dd3egRcvgRHJWyrHASw9Pyp+vlSxEluH0jWAGQF9VVZMpxHVRZ/xSKQU4PR5Xy0+/sLQZCFS9DN/XKtSeh5WrL2x+sMyZv+W67+vwz5eC7oDx12rm9pakNg639B68XL3Qh+2Bm94DySxHhg0daBHSQhiCbyyyMS9SDi8RhEHyYP1qD9qak0S4VGn5VYrSTRKEkKHWYYiHuQmCYb/YKYLqS+3H5LYckxJmz6qhSYJ5yNgzgtuclESpncBfN8Fj3lgJdCSGpHcGECoxrouMoHjzO+4evLLMB1VKxJV8Wyj8Q80Ix043jnTu32hlTdkh08Yn7UWcnio9Qs3pzZm0lN7LCOxIdIZxbuQ1+lAVFFxJB7aMeUIiPkiPRPjo2v6dPF4FVjHnxi/oQK0Az/bymf5uI7ayGLj6eM63nrbF5VNXzV7nv3HViQL3JAEaSV1z0iBNJIgJBCYkSKJYbdjEiSHw7a0BI5s6QBBbINUswMUsQ6E11UojZGccA9dcZDBdQY+TgyFTgkiEKYyIBvstAQzIRk8cBJ+A2j4gZFDFWAqjAp3V5IhQYYwwUJ57ByS0QINzMYK8FyrRxt3KNbXb2qG/UVNT5wDyCt6/A0boGbdqzPA4tD21SPquWihPy1FWHjQzYs3xnZkM95ePIZd8RccBx1xez/UPowp46I4+uVcLD9/8Plq0Gfy6Jp+uez5uqPyY+UtNN5DuVQc06drpv4bIDXsjtsMpdkOSC79QK4Xog3PzwF4IBNCBiIhpBSpoE8jioqWaM2KCRuOqwLXgIQItKIe0lCYD/lZjoqgGIo0+J++SsmMKA8eqQ21qHuUh2PfzQHN6vgG6vVK8GfmQhcbr3Yff+AEi3rtdCtNF8u/eIWD2ATXx4Mg0XH1Vr/hm7sDQw8PvyvTrriKWocEE0C6oM/kJRJHrAykgj6WGlq+JUifu6YfS6pu4/UVa6AgQcXKi78ApekhcWFBwMstEkTX9MvVHw+Lt2ex+4+Pg62CxgsHEwZbAdgWIJfA+ICkfDRYtyAwWWB7Ay8F8VT/KB0bOJ4Gx/CQfUKSwZGrJJs8iZHYgB0zMB+zk8hopQ8hEcEog2ERASIBAOL5fIrVIKLxXKtzKPZLgZUckvGf+/nH5HsK0+Uz3316zeAjj3D23Lwu90w0ZwNpiZ72UnvwfO/AXIFnXfLBxLOsHn6yiLqmr3oQ04LHX9hq6TFHI6txrlYWkHj98UT1lh8vryR/rIKq6aO204drdP8hRWF3itmLUw42QnW1CSTSA2IAIXkWOBYKLWw8wjVqNkEaFqjFwLQNJhWI4ZiFoiq6QX0SbsEo6HMoWVFCYprwjw6FP65BXCSoXJwiOwpnFK9A6yiWkQhRDwA9XAfpwLS/AqnqSKP7jwapquiznXFXMn6x8Yg/X/HySvLHKqiaPlZfvf0H6BloAM/v3tpzHkJwUx59Uxb4GE5Lfnt2ZGS16SX3+F5mq4llfegtwnaSR6J5EC8hPUV6IDaS6aDnoZ5DpYe6AtdgOr4pyhXLNPH0KKCo/DDP7N+S+mI6qHzbQr7AbdgW+iylWn0l5cf6E29ftfSN6L9lGl04x30tOtMHklmLhxpClW9BL4S1T+i2uNPRp+0FflD0AN9A9LHnmHGBBfJCE3QL9ALiguoJqiu+64gDzWGIIAlhzhaSDsMV/yjJi3BxyY9khP9BXBSzEMY/AFORGMmM1yyKZfmm+ZKuJf4uMHV1THEj+o+S864E7zYd/8Dliqp2MamvPbt9uw4dY/M4DnXTuMuXx/scK9iHLcbryzfKwvOJBSGNPl10Tb8WV0xYyMFymDdXXv46Kq+ueChJQI4WlSUqf8StOf5CNdXqr9afxe8/Gm6AoLAqGKyCGLSG350ACFzKM2FvaeOseEhFOsjItdQ2S6wYYmkOdl2+CfLBvmpIV55vYY2Qn6uAxAWC40zbhxSmWArcQj0TSIiSU37mx0kgVesgLereOSz8E5EWJa6Qzyh1hZEcO7xY4Ct9WLfNvwa+5xA2h6uGP6vMPxMsZ8WNf0Gf+cOCw9usq51a5+kNG9Sn1IjJsjoO0LI7EpVra/vxhPdFs7JyjYriohlbTAKGxO1C6oJEljseOLqmTxfPX66OucJK66OUNzuDjK7p05UIbGwX25I/vrj4BYrnD0uZ/Rtvfzz9fPsPIkgkbL0DZNMFRVEHFEY2ZCBTcwMLdfCsCCVN4SwpE9YG+ARNgD24IDHYSYB1yNCYDkLRFoC8oOUG40AKQx5IYyAmlQ6SF7dDoSof0hbJiApzqLs43aPc5UG+AvVQ/4T7nGQFQiJ5kdbAkmgH2Sz0FaWB4gLrad22v4nmuvPt/yzCc1+V4t0e4z93r8PYwDCvNANxLSthkai0jmCf5+jq6y6Y4SkjTfoKprgWufj9Dg3AozBmiK7pl3H8WDH3u0YfLY6u6c/HVS2vSvsxoygyTF2q/qNenEyjJ5NJPYGPRidME1M1/JYqwyoNq32Ihu4J0z5M+WA2DoqwEI9wfmEaEhQJzPNsKNOh0jJwrfRVJqbnNOrC6IGwQFzgHiKrpCuq2kE+FizrMXWE7IWCEKemg7hSiimOQchNIC3EchqpHlBO95TshQThkwF5TL9k+Mm/MZLGzVo3AlQdLzagDle1vCYd/wU9/5Z5ZcyZPnNow/J8ZHZZCGtsbKw3rdn7nIzTx42o0WfP1cPKuYJ6XPFs5q7p8zmKx5v8cdcxDeMPOR1fj+gh4X10TV/dukiC+nJPeLy8eH1hrtm/UVvpKxcrP2oL/dlcs1eQ9PCeo73wGcp+R2Xyvlp74vH19B9EkoA2CYKUlcQqJCQj6vkoyBjh/IurcJiy4Zxy2FMptRBO7sK3kClR0UYUZAX+wMqfC1ICiYHMYBsKSQsSFKaAUEqZLoiK00ASFsgpN0UEUWE6yOkiiArE6NmUb91OWwAAEuNJREFUszCNxA0c/uBoF04W86YOarWQAYjGmHBBEIkUiXEqib025hNmInWknv6zKo77Sh3/RvcfSx5Xl4O4yr5Y7NxiuEEQFT4uvs8yrF5VvosX28LLS185vsiRHkc9YPiJtrCbJIzHyx3gJdfpl80flZWPR6qIxJghus7xjSqj4E9UNn2VvN76Csqq6XIR+48OYEeGlcAaXhLfQwxNQcgQEI9IErOOxBUuCuDLz9Arm5iyOTaYy7Jty8hAb2VCm43ZmwnwQTbgFpAWyA4SGEKhaMdgYNpngKAcpeMCAfFjYGE4yAqco3RZ0LorUqOkxVkf6AgzvFBPFbISSsOUD+WRrWijpcwbmI4Gomj4yxAIv4bPVU+q9sfxk/EP36UlfP49N3vNWr/m9CZdX/zzjDDofAoW3XHVr9NPHdB8p2+uORl/mjFLUktMbBTtkSJbpLCRxYyD5OpJps/4+DJuvq5IIgoLqfi3pLzcRuloM7QSzKImsBSWG80LVKkxkSvOkFHaCjL5QvrPN9rwvaSVtEg2ICmQCNRQkGjwnlOpNktMxdds+GxcRFrIyCmhTQMEUJjl4qwtzPbAOVC8o0DUZroGiMmBpEUfRBZ4DvRUJC4/1GOpij1ML9XU0PJdFxIZGsOpJkkOQ0YdFh5CPodKl0WfRqQkVUhTIEf1iN4GkdJU4Rx/xsJfHkpfMv4cd+IAUJb1+YdkfSU7NXp6+/bti7qquKiEdfVq0Gl2TO2DonYzAcUTCv0slCB8FuGia/q8j7iAPl30aNIPHVKq55w+00MvjFLo05WmV8H5P9XLzydVF/H0xbGl9UGfjm226B98po2u6fO+0f3H9M7SbT1h+FoS00ybSmm+5/RZHxzbwWvVHtSvNuLRR4BKl0vPtHRhWh1SESUsNBkH0qjvNiAx4MA1JDBc4yBmTPmwJArJCFM+dA1SE5XsmFIqRTzKUrZYkMio78IUkauFoW6Mcbin1GWrOR8nqOEUEUQFmuK3ZdEw6NFg92s9j3XLp0CIsAuS8VdPkcKhCZ9/KAc81x/c3NdzFjy6KHZc0YPNh7VhDg9jYnh4co9n2dvx1nLalys7Rimx2xLGigfEJBQ0Xr149FkBVb04BQiTlPAFbTiDxRGKM1pJf5AgarPKG0sQu413N07hkCANO5m0fSebtCwziW5DqMISHTRMJCDF23inYbmsauNCHq+Vn1ta5dErzKN8psP/RiIXVpAegKJQ30Y06AQSEXdAIpdL0wbTNsLpoSIeCwRJHZYBpTusIFAIlPC0iqL5AxoCcmLPQkkLdITRCc0dSFqQD1A51g4pLOXmhZCwDMO2BpH9q6ZtDoU4oKQIy5yEynFnv+mzw+0+/q3Sf5yT4aYs89zq1alLIK7wYeQANcCpgW5AOaqIARzxcudrXrMTz+cuFAxBI1Rw06eLKz3xsnDikt+Mmr9mWBlXrbySeJAlTt8MXJImXHRNv0zx2GpWZ3r0KKqzXHlRHH26+fQf+mkbg56ADjppUuihMJl7BEhGtmnj+4Phj1lEUAzjaQcgJkzcqPPmlI/yjdJV8Trf/+hbeYyP0uMS0zSVF8SEaSELxkhR6a7IC1IVHkNMBWEkCljxYQ7YXgWKrDCHw2ohJDDKSkr5Tst3TANBp7DdgkTFKSOpxYMtV2i3hXQoJjwbBo3L4oibAajdXmSbCl01PEvi6x3PetMvwfi3cv+xHpPRk8GZvo6Oq5y5FvZlvtfqQZ5v5igfH7iRdHqrn/H24McyEb6ejCUxkCwqEATi8JDNKtWRIxI6wrLj+aOyQgIqLT/KTZ+OLYnCFGHE60PdSgzIgVmcfrbt5evjYkB97VeNyv8plx/UYoChElhYgB7KtD3PAUWRpejIVNzNAjNzyDuYRqnrMF5dIx4CkTrlAJQRps2FhZIX5lqYwfFLOygTBeSmkUhDEgNvIC7MR5ML6JhozoCpn+858G1utbH4j7BRT0Z9VlZzbTyOKJCKeCjkqYbkFBJh+DXCPVcKuXKIFURlm8WBoZSFOBCYmk6i33ioT+Kw1CegEMspcFfe+M8+rRySNum/YUwm9I7TPT04NWOBDg/nwtz16xMbEp3mPswIOuI6G7wBSlynz1pQWZEIP0smIcEEWN3QsfJDn+nj9FFSPh73wilgdE2f+eOumo4pPqWI2kI/LKu4RVXLq7H/kJopRUFhnkj4joNT9KC/BlZgAIVD1I+cwASVUBgCIsF1KEQxJLpGPKHGP5LYrAs5ikREnmJ61KF4K5cG1+REVS6HC1JauGroYYcOrLWUEp6MSF0UpoZgK5hV2dgEzeNLYbMBnRQZEUPnOwGMT6GOp57Kg/0WTCMYjnsQHpDmlJFTR5IcNt/alvV1PdF5NsKcLSpGG03L6QcjnWDpeIXqgFYb//A9wGi1+fMPDeqY7nae6uvT530KKp+JebkhHJyX6Fqz33X83tCgRr1d6gXBH+XnFtEwDmEVMBfAtbK7UvHxVTb1gGLQokbFVBZMDtUJHmT+dsPxmqSRU2nkrxkWxhfbOfEVwLov4sIaonSRr1qZy6vy8xliPbn+qPjYHxSm6mJwdB357DfaVtJ/BMLeW0/ayVQSR6TA5AB7h8kwmFeRrFBUSFYkJk7GsM+F5SuiCQmFBEriCskHYcxfEM9ozBjBS/yaKD//rBzndjD3BHswAcmqwFdhOWGugCw5owwpEt9sxMlVGWQEK4GlcAOi1XAcL6eLICfdcMFmNDnH7xdO/YTCHTkxM2B6EiSPbuXmHrZO5eJy4Iu6lfo2Gu8orFfA+PM9UMjnHpBIx9v+/Q9Wm8nMfcMTE1d7u7vP4Ec6fzy1wqOGP3xI63JHjgT2/rsy/boTbMP0pe78dVUWS5wjK0VUjIqNN3kA62ZYeIcfxofXDFNFUZBTT4W6m71mWBlXrb4yWSoEYWh0jVIUdJEmzA6o18mRDN7dCplCEkK8IiP4WRAU9OO8j5wimZB3SAhKYlJEphLkJCaSEP7PEdxsfVG5UWFxP6qPPngTlvBED6IWLN8dTPmg8ocFPPRXWBdlFWqqCEmLlhAgLRtKdLaAkpQNfRUM6DUQGOUiTimNEaT7FvRVw/F6K91XG4/mHf9KPaovvJ36jzfSS1mpc6mUdhnvhZL4a0GjZsKBKK+n0+kt0AHvztCAsIzjeeAeUKVPF1l101cBWCICxcGmcPalUeHRnyguIsJYej79fFnpKxdjrKhu+spVK69Ke+OW6SXlh7Xk/8b7D5umJKY6nUiQAEmp5ZKoD5Ay8kTFzcAsJIrL+ZREYCWAaU4ubXRNP8wfpuSuGubHMwCJhSuGPCiYJIMw5GV6xkfY0Wd+WoPiBAlEhvnzNluw3SKZYTkQHIQ5J1RQDg7Lw/QQGUIdFp4wcC9KgQ/7KkxjucEHROVmc3ZaCFfEjMxUvlPvBZ0WhT1Q1zG06hQKyGPA9qEh4bPRJuO/0p//WvoPyXpa77BPr9L1mn64QiJRT0vlP3jg1oyn0/th1dnN6VOkQyh8wVRuPpLUH9GHi+sckD4vLaj43NSHLwfv8cKjbGxdgc97JUpFpIRbpovKYHTUltkpHYkyEqNYf1gWfZU+Vn+JiMZERS4qKyTAMv1hmwoItLT/aL6OL9cn8A4mknhDkR5CUuh43ExhAXjnIQVxRQ9UwnU1JM73meHISINzlY/1Ir3jwNQBtui5IpU3K2mFZbEUEhgJiHlZhkqI8rws7hPFxBHlZ5romu1CGRSv2HyQEQiLPkwefJcSk2o0mU+F8Z46KswbKd8qvRUWiq7BsuoYlF/q+Jd839p4/KNnFHhw+Fbc819r/y3dHO7qsk9D2lLPBvEq59SLXC6CYSCq1OTk5F48g+FxLyQSvvyzhFK8taaYL1ACiYdkkSOg/HVO4irmAySLlR8+yHy5wnaWysTF7YmnRxdyecMXFDcxx3KjNCUEGUtb2r4Iixwh5qebxEG58v2Hkh0ERqlLp5kClNLkngLSyF8XExrZi089SYbFm9DRg1FCbEKyoxQE8sqFkTOgTwrDVIPCP/k8qpRcGrxMEXmxnpwjUeXbhjpgA2bBNsp0HPQWOiwNOnddw5YcNIdSFyzTlUKehEbrLDxDNn7osjCXPw5FO22qgPfKHn/pf8XxxxetvSvYlX8BxBVKCdGDmPPDhz0W+Oijjxof//jHt+Hh2oko/qKqFx4l0BJQmQIwS3RNn/fxZXqGFbq4nQzimI9tKFs+S1S1KJ9XoQkEfUQwtKg98fSzefMMwmx5F28/IqK2RLjM2b54/gX0H0v6+IiDZSVgHJogfYWNzDMUpCtsUkKg4pKIUJAsnNTlkjNWzfBCPMOhi8JAiCSqPBmyMFVQ1OdctQwLywNZ5cPCpDl80D6IhjzBASQF0sUeREpSJCyE4ceSpJXbEO2612AHepaTSRn/YrtEAD3n8xV/ntv4+S96nyGRO9gccQZmEPiBK3bRi5kPHcG+v2T32n2+53bxNY8oQyWIB0SR9OmqxMeTh5lm/8azx8srEbCQNSqTpUTX+eagwCiPqiWeQAXO/olHV2tPaYUFjWCxsQJjt7MV564K6iOB2Xj1adNGa3PqDMFl4XwSSnAQCUIibqFPlwtTwbiOkoSR+JvLx3KYv9BXaSrlLyifSegQBNMFTAWhiIeFArRZnoX+8Y2EzKhbnuNlYO9wFpZXkwoH5Kmj/6qOFTz+0n8+Y4Y/2pVIcJqY35+YJ6wjEN33ZzL9kPY3hWjx6Sv+RcByLIQAZZYQJSn2C944FRF/QkvjQ31XZDcV04GVPOGl+WdJEhVGbaNPV3d7Va7ZP83U/1ACgzTjkg4gjUFvHhGWkrPAPnnBLNeFSEKKfAbzOu9yBAUdVj6cZURpZuU3XOUILioD93x2IEnxxFGc9c6M+M93cHSNZVzHquBQDeMn4x898wQ2us7pgGvAbyU8/z5e5EupVEqtJirCgp4KHxVI7sbrQIYKHyKF3+yvIvEEX8FsQNk9qXwgBpgQwNo7p9OKrukzfdzF08+WTmYrV35YF+tU8bEpYImInGtLVH+8PkzZ8iQcVpjrawXCLOHH5uo/9JmWjbXHJMQcNhVW8bOklbsumnJw7Q+cgtVK2mJxAUNNKKncp54KHuzAwnjCE01B1UIHA1A80ik/IkdIfTj6mE8MXh2sSKZhdHUd+IcDykwFLj4eMv7Fv+il75c8/xEmeHaojD+jZ4LgbsPVVvO5iutg4oSAFCCiAqVp/jrUKRU8mzVexsube05ff3tiD0Q1wkP/ojrYgeiaftiheHsjLKL4GrudTxYvb0H9h94bpzeAwCD4cAqJf5SmlBjFH5D8ChVC1Q8KyIkrjtgbE64y4lqtINJHel5Hq4q4ZdsYzsWBWaU+rkFWtFzQbiNNnWciNbT/qD4+Hitq/FdE/3mWzmvQU+W4hZZPenQuRHRNfylcvfVjpUqz0Tj6dNE1/fm4euufTx1z5am3/hr6z6lj9A9ElneKwPJ3IYEVEpqKys0YFeUhoDBP4TV/+bjVIkfqKuu8/ixC/+tqR73111V4DYnrrb+G8a+h1tkk9dY/m7MxV7XUzwdP3ApBgCYG6Co+L6/+kcB4X0g0ERFFzwXjojBc5q8ZhqOKtWEoROmLEwSWBIHowVySyqSS5kIABEYhisRFEov8SgRWGD6K9OMgq8IwBIkTBBYXASGsxcW3pUoHgfF5iIiLPv9x+03kuLxMqaqsUj1KJL4gsFgICGEtFrJtUG6OwDhtJHHhqLOl+dBAG0AnXRAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBIGVhMD/D0fV/fpMMM+gAAAAAElFTkSuQmCC' } };exports.default = _default;

/***/ }),
/* 96 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/noticeBar.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noticeBar.js
                                                                                                      */var _default =
{
  // noticeBar
  noticeBar: {
    text: function text() {return [];},
    direction: 'row',
    step: false,
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    speed: 80,
    fontSize: 14,
    duration: 2000,
    disableTouch: true,
    url: '',
    linkType: 'navigateTo' } };exports.default = _default;

/***/ }),
/* 97 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/notify.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:10:21
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/notify.js
                                                                                                      */var _default =
{
  // notify组件
  notify: {
    top: 0,
    type: 'primary',
    color: '#ffffff',
    bgColor: '',
    message: '',
    duration: 3000,
    fontSize: 15,
    safeAreaInsetTop: false } };exports.default = _default;

/***/ }),
/* 98 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/numberBox.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:46
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberBox.js
                                                                                                      */var _default =
{
  // 步进器组件
  numberBox: {
    name: '',
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: '#323233',
    buttonSize: 30,
    bgColor: '#EBECEE',
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: '' } };exports.default = _default;

/***/ }),
/* 99 */
/*!*****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/numberKeyboard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:05
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberKeyboard.js
                                                                                                      */var _default =
{
  // 数字键盘
  numberKeyboard: {
    mode: 'number',
    dotDisabled: false,
    random: false } };exports.default = _default;

/***/ }),
/* 100 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/overlay.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/overlay.js
                                                                                                      */var _default =
{
  // overlay组件
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5 } };exports.default = _default;

/***/ }),
/* 101 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/parse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/parse.js
                                                                                                      */var _default =
{
  // parse
  parse: {
    copyLink: true,
    errorImg: '',
    lazyLoad: false,
    loadingImg: '',
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true } };exports.default = _default;

/***/ }),
/* 102 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/picker.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/picker.js
                                                                                                      */var _default =
{
  // picker
  picker: {
    show: false,
    showToolbar: true,
    title: '',
    columns: function columns() {return [];},
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确定',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    keyName: 'text',
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];},
    immediateChange: false } };exports.default = _default;

/***/ }),
/* 103 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/popup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/popup.js
                                                                                                      */var _default =
{
  // popup组件
  popup: {
    show: false,
    overlay: true,
    mode: 'bottom',
    duration: 300,
    closeable: false,
    overlayStyle: function overlayStyle() {},
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: 'top-right',
    round: 0,
    zoom: true,
    bgColor: '',
    overlayOpacity: 0.5 } };exports.default = _default;

/***/ }),
/* 104 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/radio.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:02:34
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radio.js
                                                                                                      */var _default =
{
  // radio组件
  radio: {
    name: '',
    shape: '',
    disabled: '',
    labelDisabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    labelSize: '',
    label: '',
    labelColor: '',
    size: '',
    iconColor: '',
    placement: '' } };exports.default = _default;

/***/ }),
/* 105 */
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/radioGroup.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radioGroup.js
                                                                                                      */var _default =
{
  // radio-group组件
  radioGroup: {
    value: '',
    disabled: false,
    shape: 'circle',
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    name: '',
    size: 18,
    placement: 'row',
    label: '',
    labelColor: '#303133',
    labelSize: 14,
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    borderBottom: false,
    iconPlacement: 'left' } };exports.default = _default;

/***/ }),
/* 106 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/rate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rate.js
                                                                                                      */var _default =
{
  // rate组件
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: '#b2b2b2',
    activeColor: '#FA3534',
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: 'star-fill',
    inactiveIcon: 'star',
    touchable: true } };exports.default = _default;

/***/ }),
/* 107 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/readMore.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:41
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/readMore.js
                                                                                                      */var _default =
{
  // readMore
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: '展开阅读全文',
    openText: '收起',
    color: '#2979ff',
    fontSize: 14,
    textIndent: '2em',
    name: '' } };exports.default = _default;

/***/ }),
/* 108 */
/*!******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/row.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/row.js
                                                                                                      */var _default =
{
  // row
  row: {
    gutter: 0,
    justify: 'start',
    align: 'center' } };exports.default = _default;

/***/ }),
/* 109 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/rowNotice.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rowNotice.js
                                                                                                      */var _default =
{
  // rowNotice
  rowNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80 } };exports.default = _default;

/***/ }),
/* 110 */
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/scrollList.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:28
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/scrollList.js
                                                                                                      */var _default =
{
  // scrollList
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: '#f2f2f2',
    indicatorActiveColor: '#3c9cff',
    indicatorStyle: '' } };exports.default = _default;

/***/ }),
/* 111 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/search.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:45
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/search.js
                                                                                                      */var _default =
{
  // search
  search: {
    shape: 'round',
    bgColor: '#f2f2f2',
    placeholder: '请输入关键字',
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: function actionStyle() {return {};},
    actionText: '搜索',
    inputAlign: 'left',
    inputStyle: function inputStyle() {return {};},
    disabled: false,
    borderColor: 'transparent',
    searchIconColor: '#909399',
    searchIconSize: 22,
    color: '#606266',
    placeholderColor: '#909399',
    searchIcon: 'search',
    margin: '0',
    animation: false,
    value: '',
    maxlength: '-1',
    height: 32,
    label: null } };exports.default = _default;

/***/ }),
/* 112 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/section.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/section.js
                                                                                                      */var _default =
{
  // u-section组件
  section: {
    title: '',
    subTitle: '更多',
    right: true,
    fontSize: 15,
    bold: true,
    color: '#303133',
    subColor: '#909399',
    showLine: true,
    lineColor: '',
    arrow: true } };exports.default = _default;

/***/ }),
/* 113 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/skeleton.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/skeleton.js
                                                                                                      */var _default =
{
  // skeleton
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: '100%',
    rowsHeight: 18,
    title: true,
    titleWidth: '50%',
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: 'circle' } };exports.default = _default;

/***/ }),
/* 114 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/slider.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/slider.js
                                                                                                      */var _default =
{
  // slider组件
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: '#2979ff',
    inactiveColor: '#c0c4cc',
    blockColor: '#ffffff',
    showValue: false,
    disabled: false,
    blockStyle: function blockStyle() {} } };exports.default = _default;

/***/ }),
/* 115 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/statusBar.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/statusBar.js
                                                                                                      */var _default =
{
  // statusBar
  statusBar: {
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 116 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/steps.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/steps.js
                                                                                                      */var _default =
{
  // steps组件
  steps: {
    direction: 'row',
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#969799',
    activeIcon: '',
    inactiveIcon: '',
    dot: false } };exports.default = _default;

/***/ }),
/* 117 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/stepsItem.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/stepsItem.js
                                                                                                      */var _default =
{
  // steps-item组件
  stepsItem: {
    title: '',
    desc: '',
    iconSize: 17,
    error: false } };exports.default = _default;

/***/ }),
/* 118 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/sticky.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/sticky.js
                                                                                                      */var _default =
{
  // sticky组件
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: 'transparent',
    zIndex: '',
    index: '' } };exports.default = _default;

/***/ }),
/* 119 */
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/subsection.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/subsection.js
                                                                                                      */var _default =
{
  // subsection组件
  subsection: {
    list: [],
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#303133',
    mode: 'button',
    fontSize: 12,
    bold: true,
    bgColor: '#eeeeef',
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 120 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/swipeAction.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeAction.js
                                                                                                      */var _default =
{
  // swipe-action组件
  swipeAction: {
    autoClose: true } };exports.default = _default;

/***/ }),
/* 121 */
/*!******************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/swipeActionItem.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeActionItem.js
                                                                                                      */var _default =
{
  // swipeActionItem 组件
  swipeActionItem: {
    show: false,
    name: '',
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300 } };exports.default = _default;

/***/ }),
/* 122 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/swiper.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:21:38
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiper.js
                                                                                                      */var _default =
{
  // swiper 组件
  swiper: {
    list: function list() {return [];},
    indicator: false,
    indicatorActiveColor: '#FFFFFF',
    indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)',
    indicatorStyle: '',
    indicatorMode: 'line',
    autoplay: true,
    current: 0,
    currentItemId: '',
    interval: 3000,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: 'default',
    keyName: 'url',
    imgMode: 'aspectFill',
    height: 130,
    bgColor: '#f3f4f6',
    radius: 4,
    loading: false,
    showTitle: false } };exports.default = _default;

/***/ }),
/* 123 */
/*!*******************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/swipterIndicator.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiperIndicator.js
                                                                                                      */var _default =
{
  // swiperIndicator 组件
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: '',
    indicatorInactiveColor: '',
    indicatorMode: 'line' } };exports.default = _default;

/***/ }),
/* 124 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/switch.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/switch.js
                                                                                                      */var _default =
{
  // switch
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: '#2979ff',
    inactiveColor: '#ffffff',
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0 } };exports.default = _default;

/***/ }),
/* 125 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/tabbar.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbar.js
                                                                                                      */var _default =
{
  // tabbar
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    fixed: true,
    placeholder: true } };exports.default = _default;

/***/ }),
/* 126 */
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/tabbarItem.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbarItem.js
                                                                                                      */var _default =
{
  //
  tabbarItem: {
    name: null,
    icon: '',
    badge: null,
    dot: false,
    text: '',
    badgeStyle: 'top: 6px;right:2px;' } };exports.default = _default;

/***/ }),
/* 127 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/tabs.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
                                                                                                      */var _default =
{
  //
  tabs: {
    duration: 300,
    list: function list() {return [];},
    lineColor: '#3c9cff',
    activeStyle: function activeStyle() {return {
        color: '#303133' };},

    inactiveStyle: function inactiveStyle() {return {
        color: '#606266' };},

    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: 'cover',
    itemStyle: function itemStyle() {return {
        height: '44px' };},

    scrollable: true,
    current: 0,
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 128 */
/*!******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/tag.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tag.js
                                                                                                      */var _default =
{
  // tag 组件
  tag: {
    type: 'primary',
    disabled: false,
    size: 'medium',
    shape: 'square',
    text: '',
    bgColor: '',
    color: '',
    borderColor: '',
    closeColor: '#C6C7CB',
    name: '',
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: '' } };exports.default = _default;

/***/ }),
/* 129 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/text.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/text.js
                                                                                                      */var _default =
{
  // text 组件
  text: {
    type: '',
    show: true,
    text: '',
    prefixIcon: '',
    suffixIcon: '',
    mode: '',
    href: '',
    format: '',
    call: false,
    openType: '',
    bold: false,
    block: false,
    lines: '',
    color: '#303133',
    size: 15,
    iconStyle: function iconStyle() {return {
        fontSize: '15px' };},

    decoration: 'none',
    margin: 0,
    lineHeight: '',
    align: 'left',
    wordWrap: 'normal' } };exports.default = _default;

/***/ }),
/* 130 */
/*!***********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/textarea.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/textarea.js
                                                                                                      */var _default =
{
  // textarea 组件
  textarea: {
    value: '',
    placeholder: '',
    placeholderClass: 'textarea-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    height: 70,
    confirmType: 'done',
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: '',
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: 'surround',
    formatter: null } };exports.default = _default;

/***/ }),
/* 131 */
/*!********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/toast.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toast.js
                                                                                                      */var _default =
{
  // toast组件
  toast: {
    zIndex: 10090,
    loading: false,
    text: '',
    icon: '',
    type: '',
    loadingMode: '',
    show: '',
    overlay: false,
    position: 'center',
    params: function params() {},
    duration: 2000,
    isTab: false,
    url: '',
    callback: null,
    back: false } };exports.default = _default;

/***/ }),
/* 132 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/toolbar.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toolbar.js
                                                                                                      */var _default =
{
  // toolbar 组件
  toolbar: {
    show: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    title: '' } };exports.default = _default;

/***/ }),
/* 133 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/tooltip.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:25:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tooltip.js
                                                                                                      */var _default =
{
  // tooltip 组件
  tooltip: {
    text: '',
    copyText: '',
    size: 14,
    color: '#606266',
    bgColor: 'transparent',
    direction: 'top',
    zIndex: 10071,
    showCopy: true,
    buttons: function buttons() {return [];},
    overlay: true,
    showToast: true } };exports.default = _default;

/***/ }),
/* 134 */
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/transition.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:59:00
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/transition.js
                                                                                                      */var _default =
{
  // transition动画组件的props
  transition: {
    show: false,
    mode: 'fade',
    duration: '300',
    timingFunction: 'ease-out' } };exports.default = _default;

/***/ }),
/* 135 */
/*!*********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/props/upload.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:09:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/upload.js
                                                                                                      */var _default =
{
  // upload组件
  upload: {
    accept: 'image',
    capture: function capture() {return ['album', 'camera'];},
    compressed: true,
    camera: 'back',
    maxDuration: 60,
    uploadIcon: 'camera-fill',
    uploadIconColor: '#D3D4D6',
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: 'aspectFill',
    name: '',
    sizeType: function sizeType() {return ['original', 'compressed'];},
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: function fileList() {return [];},
    uploadText: '',
    width: 80,
    height: 80,
    previewImage: true } };exports.default = _default;

/***/ }),
/* 136 */
/*!***************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/config/zIndex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 137 */
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/libs/function/platform.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 注意：
                                                                                                      * 此部分内容，在vue-cli模式下，需要在vue.config.js加入如下内容才有效：
                                                                                                      * module.exports = {
                                                                                                      *     transpileDependencies: ['uview-v2']
                                                                                                      * }
                                                                                                      */

var platform = 'none';






platform = 'vue2';















platform = 'weixin';



























platform = 'mp';var _default =














platform;exports.default = _default;

/***/ }),
/* 138 */
/*!**********************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/mock/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mock = __webpack_require__(/*! better-mock/dist/mock.mp.js */ 139);
Mock.mock('/api/getaccount', {
  code: 200,
  msg: '121',
  money_account: parseInt(Math.random() * 100000),
  // card_account:parseInt(Math.random()*10)
  card_account: 3 });


Mock.mock('/api/charge', function (optins) {
  console.log(optins.body.value, 'op');
  // const body =JSON.parse(optins.body)
  return {
    code: 200,
    msg: '充值成功',
    data: {
      "money_account_new": optins.body.money_account_new,
      "money_account": optins.body.money_account,
      "value": optins.body.value } };


});



Mock.mock('/api/getList', function (optins) {
  console.log(optins.body, 'optins.body');
  if (optins.body.id == 0) {
    return {
      code: 200,
      goodsList: [{
        "flex": 'left',
        "goodsId": 1,
        "goodsName": "Clever&Ketch小众包包女2023新款潮秋冬复古大容量托特包单肩包",
        "goodsImg": "https://gw.alicdn.com/imgextra/O1CN01YnIDKa1gwOeFm6kvm_!!2207281504206.jpg_Q75.jpg_.webp",
        "saleCount": "1000+",
        "salePrice": 299,
        "tag": "特卖价",
        "rank": '包包喜爱榜第10名',
        "marketPrice": 598,
        "discount": 5,
        "stockCount": 50,
        "storeName": 'NY优品' },

      {
        "goodsId": 2,
        "flex": 'left',
        "goodsName": "洛斐小翘键盘帽101键69键PBT球帽彩色纯色收纳盒拔键器正品",
        "goodsImg": "https://gd4.alicdn.com/imgextra/i2/3936304325/O1CN013PwxbF1hotg2pwIEm_!!3936304325.jpg_400x400.jpg",
        "saleCount": "100+",
        "salePrice": 199,
        "tag": '新品抢购',
        "storeName": 'NY优品',
        "rank": '键盘新势力',
        "marketPrice": 249,
        "discount": 8,
        "stockCount": 100 },

      {
        "goodsId": 03,
        "flex": 'left',
        "goodsName": "竹节和田玉手链纯银女款2023年新款轻奢小众手饰情人节礼物送女友",
        "goodsImg": "https://gw.alicdn.com/imgextra/i1/3070955695/O1CN01M2jRDm1rwMNyQn7hw_!!3070955695.jpg_Q75.jpg_.webp",
        "saleCount": "600+",
        "salePrice": 158,
        "tag": '加购超1000+',
        "storeName": 'NY优品',
        "rank": '情人节送礼排行榜第三名',
        "marketPrice": 225,
        "discount": 7,
        "stockCount": 99 },

      {
        "goodsId": 4,
        "flex": 'right',
        "goodsName": "早春季2023新款茶系穿搭一整套微胖盐系轻熟高级感韩剧小香风套装",
        "goodsImg": "https://img.alicdn.com/imgextra/i2/2202600873766/O1CN01trCUIT1dgsK202OT0_!!2202600873766.jpg",
        "saleCount": "100+",
        "salePrice": 69.9,
        "tag": '加购上千',
        "storeName": 'NY优品',
        "rank": '收藏上千',
        "marketPrice": 77.7,
        "discount": 9,
        "stockCount": 100 },

      {
        "goodsId": 5,
        "flex": 'right',
        "goodsName": "【学院风穿搭】牛仔马甲男女ins潮牌工装外套痞帅炸街夹克背心",
        "goodsImg": "https://gw.alicdn.com/imgextra/i3/2935603592/O1CN01uXcSYZ1cPBHtINFr6_!!2935603592.jpg_Q75.jpg_.webp",
        "saleCount": "66",
        "salePrice": 79,
        "tag": '首单已减￥10',
        "storeName": 'NY优品',
        "rank": '学生热搜榜',
        "marketPrice": 89,
        "discount": 9,
        "stockCount": 100 },

      {
        "goodsId": 6,
        "flex": 'right',
        "goodsName": "生日礼物男生实用高档送男友男朋友老公男士小众高级的惊喜情人节",
        "goodsImg": "https://img.alicdn.com/imgextra/i4/195729828/O1CN01NFZEd32MTHGtY7uPl_!!195729828.jpg",
        "saleCount": "5",
        "salePrice": 199,
        "tag": '券后￥199',
        "storeName": 'NY优品',
        "rank": '生日礼物榜前二十',
        "marketPrice": 259,
        "discount": 7,
        "stockCount": 100 }

      // {
      // 	"goodsId": 7,
      // 	"flex":'left',
      // 	"goodsName": "全新佳能EOS700D 750D 800D 100D入门级单反相机学生旅游高清数码",
      // 	"goodsImg": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg",
      // 	"saleCount": "100+",
      // 	"salePrice": 4999,
      // 	"tag": '花呗分期',
      // 	"storeName":'NY优品',
      // 	"rank": '满5000减300',
      // 	"marketPrice": '5999',
      // 	"discount":6,
      // 	"stockCount": 100,
      // },
      ] };





  }
});
Mock.mock('/api/goodsDetail', function (optins) {

  if (optins.body.goodsId == 1) {
    return {
      code: 200,
      goodsDetail:
      {
        "goodsId": 1,
        "goodsName": "Clever&Ketch小众包包女2023新款潮秋冬复古大容量托特包单肩包",
        "goodsImg": "https://gw.alicdn.com/imgextra/O1CN01YnIDKa1gwOeFm6kvm_!!2207281504206.jpg_Q75.jpg_.webp",
        "saleCount": "1000+",
        "salePrice": 299,
        "tag": '上新价',
        "rank": '包包喜爱榜第10名',
        "expirationTime": 86400000 * 2,
        "marketPrice": 598,
        "storeName": 'NY优品',
        "discount": 5,
        "stockCount": 50,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i3/2207281504206/O1CN01zgk1y71gwOe7TAhXl_!!2207281504206.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i4/2207281504206/O1CN01uZ7XGV1gwOefzjbQ8_!!2207281504206.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i3/2207281504206/O1CN01cY3Jyz1gwOemrMzW3_!!2207281504206.jpg" }],


        "selectItem": [{
          "title": '绿色',
          "img": "	https://gw.alicdn.com/bao/uploaded/i2/220728150420…gwOe5MId5k_!!2207281504206.jpg_60x60q50.jpg_.webp" },

        {
          "title": '黑色',
          "img": "	https://gw.alicdn.com/bao/uploaded/i3/220728150420…gwOe9oo0iG_!!2207281504206.jpg_60x60q50.jpg_.webp" },

        {
          "title": '棕色',
          "img": "https://gw.alicdn.com/bao/uploaded/i1/220728150420…gwOexZYSVT_!!2207281504206.jpg_60x60q50.jpg_.webp" }] } };




  } else if (optins.body.goodsId == 2) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 2,
        "goodsName": "洛斐小翘键盘帽101键69键PBT球帽彩色纯色收纳盒拔键器正品",
        "goodsImg": "https://gd4.alicdn.com/imgextra/i2/3936304325/O1CN013PwxbF1hotg2pwIEm_!!3936304325.jpg_400x400.jpg",
        "saleCount": "5",
        "salePrice": 199,
        "tag": '新品抢购',
        "storeName": 'NY优品',
        "rank": '键盘新势力',
        "marketPrice": 249,
        "expirationTime": '',
        "discount": 8,
        "stockCount": 100,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01O2dHLY1hotg4K1wFK_!!3936304325.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01ubgcLj1hotfyCqxB2_!!3936304325.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01ubgcLj1hotfyCqxB2_!!3936304325.jpg" }],


        "selectItem": [{
          "title": '',
          "img": "https://gd1.alicdn.com/imgextra/i3/3936304325/O1CN01Tjlbp51hotgEYe6ev_!!3936304325.jpg_30x30.jpg" },

        {
          "title": '',
          "img": "https://gd3.alicdn.com/imgextra/i3/3936304325/O1CN01cij8WI1hotg2qbFDZ_!!3936304325.jpg_30x30.jpg" }] } };





  } else if (optins.body.goodsId == 3) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 3,
        "goodsName": "竹节和田玉手链纯银女款2023年新款轻奢小众手饰情人节礼物送女友",
        "goodsImg": "https://gw.alicdn.com/imgextra/O1CNA11xyyl51rwMPGz4XXL_!!3070955695-0-psf.jpg_Q75.jpg_.webp",
        "saleCount": "600+",
        "salePrice": 158,
        "tag": '情人节送礼排行榜第三名',
        "storeName": 'NY优品',
        "rank": '键盘新势力',
        "marketPrice": 225,
        "discount": 7,
        "stockCount": 99,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg" }],


        "selectItem": [{
          "title": '有你竹够手链+爱心永生花礼盒',
          "img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg" },

        {
          "title": '套装【手链+项链】+简奢玫瑰礼盒',
          "img": "https://gw.alicdn.com/bao/uploaded/i4/3070955695/O…Dw1rwMPBa0E6E_!!3070955695.jpg_60x60q50.jpg_.webp" }] } };






  } else if (optins.body.goodsId == 4) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 4,
        "goodsName": "早春季2023新款茶系穿搭一整套微胖盐系轻熟高级感韩剧小香风套装",
        "goodsImg": "https://gw.alicdn.com/imgextra/i3/2202600873766/O1…oxmR_!!2202600873766-0-lubanu-s.jpg_Q75.jpg_.webp",
        "saleCount": "100+",
        "salePrice": 69.9,
        "tag": '',
        "storeName": 'NY优品',
        "rank": '加购上千',
        "marketPrice": 77.7,
        "discount": 9,
        "stockCount": 100,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i2/2202600873766/O1CN01trCUIT1dgsK202OT0_!!2202600873766.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i4/2202600873766/O1CN01YjVfEC1dgsK3tueFY_!!2202600873766.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i4/2202600873766/O1CN01XQ0DK81dgsJsXTfHO_!!2202600873766.jpg" }],


        "selectItem": [{
          "title": '单针织开衫上衣',
          "img": "	https://gw.alicdn.com/bao/uploaded/i2/220260087376…dgsJxiRija_!!2202600873766.jpg_60x60q50.jpg_.webp" },

        {
          "title": '套装【手链+项链】+简奢玫瑰礼盒',
          "img": "https://gw.alicdn.com/bao/uploaded/i2/220260087376…dgsK3tojzT_!!2202600873766.jpg_60x60q50.jpg_.webp" }] } };







  } else if (optins.body.goodsId == 5) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 5,
        "goodsName": "【学院风穿搭】牛仔马甲男女ins潮牌工装外套痞帅炸街夹克背心",
        "goodsImg": "https://gw.alicdn.com/imgextra/i3/2935603592/O1CN01uXcSYZ1cPBHtINFr6_!!2935603592.jpg_Q75.jpg_.webp",
        "saleCount": "66",
        "salePrice": 79,
        "tag": '首单已减￥10',
        "storeName": 'NY优品',
        "rank": '学生热搜榜',
        "marketPrice": 89,
        "discount": 9,
        "stockCount": 100,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i1/2935603592/O1CN01FOwlaW1cPBIUn6UIu_!!2935603592.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i4/2935603592/O1CN01EpBecU1cPBISDBesJ_!!2935603592.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i3/2935603592/O1CN01TPxxOC1cPBIXoE8Kk_!!2935603592.jpg" }],


        "selectItem": [{
          "title": '蓝马甲+白衬衫',
          "img": "https://gw.alicdn.com/bao/uploaded/i2/2935603592/O…U21cPBIRgKVpC_!!2935603592.jpg_60x60q50.jpg_.webp" },

        {
          "title": '蓝色',
          "img": "https://gw.alicdn.com/bao/uploaded/i2/2935603592/O…Ls1cPBHunwY6S_!!2935603592.jpg_60x60q50.jpg_.webp" }] } };





  } else if (optins.body.goodsId == 6) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 6,
        "goodsName": "生日礼物男生实用高档送男友男朋友老公男士小众高级的惊喜情人节",
        "goodsImg": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp",
        "saleCount": "5",
        "salePrice": 199,
        "tag": '力度优惠',
        "storeName": 'NY优品',
        "rank": '生日礼物榜前二十',
        "marketPrice": 259,
        "discount": 7,
        "stockCount": 100,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i4/195729828/O1CN01NFZEd32MTHGtY7uPl_!!195729828.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i2/195729828/O1CN01lGiCQ72MTHGwogLXn_!!195729828.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i2/195729828/O1CN01ip7ZbJ2MTHGyT6WoI_!!195729828.jpg" }],


        "selectItem": [{
          "title": '❤ 白金爵士【情人节豪华礼盒】',
          "img": "https://gw.alicdn.com/bao/uploaded/i4/195729828/O1…ssM2MTHGuBXT5k_!!195729828.jpg_60x60q50.jpg_.webp" },

        {
          "title": '❤ 黑金爵士【情人节豪华礼盒】',
          "img": "https://gw.alicdn.com/bao/uploaded/i2/195729828/O1…uzq2MTHGuBXs5g_!!195729828.jpg_60x60q50.jpg_.webp" }] } };





  } else if (optins.body.goodsId == 7) {
    return {
      code: 200,
      goodsDetail: {
        "goodsId": 7,
        "goodsName": "全新佳能EOS700D 750D 800D 100D入门级单反相机学生旅游高清数码",
        "goodsImg": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp",
        "saleCount": "100+",
        "salePrice": 4999,
        "tag": '花呗分期',
        "storeName": 'NY优品',
        "rank": '满5000减300',
        "marketPrice": '',
        "discount": '',
        "stockCount": 100,
        'goodsDetail': [{
          "img": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg" },

        {
          "img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg" }],


        "selectItem": [{
          "title": '港版750D/760+18-135STM中长焦',
          "img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp" },

        {
          "color": '港版750D/760+18-55STM 静音防抖',
          "img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp" },

        {
          "color": '港版黑色100D+501.8STM 人像镜头',
          "img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp" }] } };






  }


});

/***/ }),
/* 139 */
/*!*************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/node_modules/better-mock/dist/mock.mp.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * better-mock v0.3.6 (mock.mp.js)
  * (c) 2019-2022 lavyun@163.com
  * Released under the MIT License.
  */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, function () {'use strict';

  var constant = {
    GUID: 1,
    RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
    RE_TRANSFER_TYPE: /#(.*)$/,
    RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
    RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g };


  /* type-coverage:ignore-next-line */
  var _type = function type(value) {
    return isDef(value) ?
    Object.prototype.toString.call(value).match(/\[object (\w+)\]/)[1].toLowerCase() :
    String(value);
  };
  var isDef = function isDef(value) {
    return value !== undefined && value !== null;
  };
  var isString = function isString(value) {
    return _type(value) === 'string';
  };
  var isNumber = function isNumber(value) {
    return _type(value) === 'number';
  };
  var isObject = function isObject(value) {
    return _type(value) === 'object';
  };
  var isArray = function isArray(value) {
    return _type(value) === 'array';
  };
  var isRegExp = function isRegExp(value) {
    return _type(value) === 'regexp';
  };
  var isFunction = function isFunction(value) {
    return _type(value) === 'function';
  };
  var keys = function keys(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  var values = function values(obj) {
    var values = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  };
  /**
      * Mock.heredoc(fn)
      * 以直观、安全的方式书写（多行）HTML 模板。
      * http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
      */
  var heredoc = function heredoc(fn) {
    // 1. 移除起始的 function(){ /*!
    // 2. 移除末尾的 */ }
    // 3. 移除起始和末尾的空格
    return fn.
    toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '').
    replace(/^[\s\xA0]+/, '').
    replace(/[\s\xA0]+$/, ''); // .trim()
  };
  var noop = function noop() {};
  var assert = function assert(condition, error) {
    if (!condition) {
      throw new Error('[better-mock] ' + error);
    }
  };
  /**
      * 创建一个自定义事件，兼容 IE
      * @param type 一个字符串，表示事件名称。
      * @param bubbles 一个布尔值，表示该事件能否冒泡。
      * @param cancelable 一个布尔值，表示该事件是否可以取消。
      * @param detail 一个任意类型，传递给事件的自定义数据。
      */
  var createCustomEvent = function createCustomEvent(type, bubbles, cancelable, detail) {
    if (bubbles === void 0) {bubbles = false;}
    if (cancelable === void 0) {cancelable = false;}
    try {
      return new CustomEvent(type, { bubbles: bubbles, cancelable: cancelable, detail: detail });
    }
    catch (e) {
      var event_1 = document.createEvent('CustomEvent');
      event_1.initCustomEvent(type, bubbles, cancelable, detail);
      return event_1;
    }
  };

  var Util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    type: _type,
    isDef: isDef,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isArray: isArray,
    isRegExp: isRegExp,
    isFunction: isFunction,
    keys: keys,
    values: values,
    heredoc: heredoc,
    noop: noop,
    assert: assert,
    createCustomEvent: createCustomEvent });


  /*! *****************************************************************************
                                             Copyright (c) Microsoft Corporation. All rights reserved.
                                             Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                                             this file except in compliance with the License. You may obtain a copy of the
                                             License at http://www.apache.org/licenses/LICENSE-2.0
                                               THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                             KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                                             WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                                             MERCHANTABLITY OR NON-INFRINGEMENT.
                                               See the Apache Version 2.0 License for specific language governing permissions
                                             and limitations under the License.
                                             ***************************************************************************** */



  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}
      }
      return t;
    };
    return _assign.apply(this, arguments);
  };

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {s += arguments[i].length;}
    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];}}
    return r;
  }

  var MAX_NATURE_NUMBER = 9007199254740992;
  var MIN_NATURE_NUMBER = -9007199254740992;
  // 返回一个随机的布尔值。
  var boolean = function boolean(min, max, current) {
    if (min === void 0) {min = 1;}
    if (max === void 0) {max = 1;}
    if (isDef(current)) {
      if (isDef(min)) {
        min = !isNaN(min) ? parseInt(min.toString(), 10) : 1;
      }
      if (isDef(max)) {
        max = !isNaN(max) ? parseInt(max.toString(), 10) : 1;
      }
      return Math.random() > 1.0 / (min + max) * min ? !current : current;
    }
    return Math.random() >= 0.5;
  };
  var bool = boolean;
  // 返回一个随机的自然数（大于等于 0 的整数）。
  var natural = function natural(min, max) {
    if (min === void 0) {min = 0;}
    if (max === void 0) {max = MAX_NATURE_NUMBER;}
    min = parseInt(min.toString(), 10);
    max = parseInt(max.toString(), 10);
    return Math.round(Math.random() * (max - min)) + min;
  };
  // 返回一个随机的整数。
  var integer = function integer(min, max) {
    if (min === void 0) {min = MIN_NATURE_NUMBER;}
    if (max === void 0) {max = MAX_NATURE_NUMBER;}
    min = parseInt(min.toString(), 10);
    max = parseInt(max.toString(), 10);
    return Math.round(Math.random() * (max - min)) + min;
  };
  var int = integer;
  // 返回一个随机的浮点数。
  var float = function float(min, max, dmin, dmax) {
    dmin = isDef(dmin) ? dmin : 0;
    dmin = Math.max(Math.min(dmin, 17), 0);
    dmax = isDef(dmax) ? dmax : 17;
    dmax = Math.max(Math.min(dmax, 17), 0);
    var ret = integer(min, max) + '.';
    for (var i = 0, dcount = natural(dmin, dmax); i < dcount; i++) {
      // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
      var num = i < dcount - 1 ? character('number') : character('123456789');
      ret += num;
    }
    return parseFloat(ret);
  };
  // 返回一个随机字符。
  var character = function character(pool) {
    if (pool === void 0) {pool = '';}
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = lower.toUpperCase();
    var number = '0123456789';
    var symbol = '!@#$%^&*()[]';
    var pools = {
      lower: lower,
      upper: upper,
      number: number,
      symbol: symbol,
      alpha: lower + upper };

    if (!pool) {
      pool = lower + upper + number + symbol;
    } else
    {
      pool = pools[pool.toLowerCase()] || pool;
    }
    return pool.charAt(natural(0, pool.length - 1));
  };
  var char = character;
  // 返回一个随机字符串。
  var string = function string(pool, min, max) {
    var len;
    switch (arguments.length) {
      case 0: // ()
        len = natural(3, 7);
        break;
      case 1: // ( length )
        len = pool;
        pool = undefined;
        break;
      case 2:
        // ( pool, length )
        if (typeof arguments[0] === 'string') {
          len = min;
        } else
        {
          // ( min, max )
          len = natural(pool, min);
          pool = undefined;
        }
        break;
      case 3:
        len = natural(min, max);
        break;}

    var text = '';
    for (var i = 0; i < len; i++) {
      text += character(pool);
    }
    return text;
  };
  var str = string;
  // 返回一个整型数组。
  var range = function range(start, stop, step) {
    if (step === void 0) {step = 1;}
    // range( stop )
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    start = +start;
    stop = +stop;
    step = +step;
    var idx = 0;
    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var range = new Array(len);
    while (idx < len) {
      range[idx++] = start;
      start += step;
    }
    return range;
  };

  var basic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    boolean: boolean,
    bool: bool,
    natural: natural,
    integer: integer,
    int: int,
    float: float,
    character: character,
    char: char,
    string: string,
    str: str,
    range: range });


  // Date
  var _padZero = function _padZero(value) {
    return value < 10 ? '0' + value : value.toString();
  };
  var patternLetters = {
    yyyy: 'getFullYear',
    yy: function yy(date) {
      return date.getFullYear().toString().slice(2);
    },
    y: 'yy',
    MM: function MM(date) {
      return _padZero(date.getMonth() + 1);
    },
    M: function M(date) {
      return (date.getMonth() + 1).toString();
    },
    dd: function dd(date) {
      return _padZero(date.getDate());
    },
    d: 'getDate',
    HH: function HH(date) {
      return _padZero(date.getHours());
    },
    H: 'getHours',
    hh: function hh(date) {
      return _padZero(date.getHours() % 12);
    },
    h: function h(date) {
      return (date.getHours() % 12).toString();
    },
    mm: function mm(date) {
      return _padZero(date.getMinutes());
    },
    m: 'getMinutes',
    ss: function ss(date) {
      return _padZero(date.getSeconds());
    },
    s: 'getSeconds',
    SS: function SS(date) {
      var ms = date.getMilliseconds();
      return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms.toString();
    },
    S: 'getMilliseconds',
    A: function A(date) {
      return date.getHours() < 12 ? 'AM' : 'PM';
    },
    a: function a(date) {
      return date.getHours() < 12 ? 'am' : 'pm';
    },
    T: 'getTime' };

  var _createFormatRE = function _createFormatRE() {
    var re = keys(patternLetters);
    return '(' + re.join('|') + ')';
  };
  var _formatDate = function _formatDate(date, format) {
    var formatRE = new RegExp(_createFormatRE(), 'g');
    return format.replace(formatRE, function createNewSubString($0, flag) {
      return typeof patternLetters[flag] === 'function' ?
      patternLetters[flag](date) :
      patternLetters[flag] in patternLetters ?
      createNewSubString($0, patternLetters[flag]) :
      date[patternLetters[flag]]();
    });
  };
  // 生成一个随机的 Date 对象。
  var _randomDate = function _randomDate(min, max) {
    if (min === void 0) {min = new Date(0);}
    if (max === void 0) {max = new Date();}
    var randomTS = Math.random() * (max.getTime() - min.getTime());
    return new Date(randomTS);
  };
  // 返回一个随机的日期字符串。
  var date = function date(format) {
    if (format === void 0) {format = 'yyyy-MM-dd';}
    return _formatDate(_randomDate(), format);
  };
  // 返回一个随机的时间字符串。
  var time = function time(format) {
    if (format === void 0) {format = 'HH:mm:ss';}
    return _formatDate(_randomDate(), format);
  };
  // 返回一个随机的日期和时间字符串。
  var datetime = function datetime(format) {
    if (format === void 0) {format = 'yyyy-MM-dd HH:mm:ss';}
    return _formatDate(_randomDate(), format);
  };
  // 返回一个随机的时间戳
  var timestamp = function timestamp() {
    return Number(_formatDate(_randomDate(), 'T'));
  };
  // 返回当前的日期和时间字符串。
  var now = function now(unit, format) {
    // now(unit) now(format)
    if (arguments.length === 1) {
      // now(format)
      if (!/year|month|day|hour|minute|second|week/.test(unit)) {
        format = unit;
        unit = '';
      }
    }
    unit = (unit || '').toLowerCase();
    format = format || 'yyyy-MM-dd HH:mm:ss';
    var date = new Date();
    // 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
    switch (unit) {
      case 'year':
        date.setMonth(0);
        break;
      case 'month':
        date.setDate(1);
        break;
      case 'week':
        date.setDate(date.getDate() - date.getDay());
        break;
      case 'day':
        date.setHours(0);
        break;
      case 'hour':
        date.setMinutes(0);
        break;
      case 'minute':
        date.setSeconds(0);
        break;
      case 'second':
        date.setMilliseconds(0);}

    return _formatDate(date, format);
  };

  var date$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    date: date,
    time: time,
    datetime: datetime,
    timestamp: timestamp,
    now: now });


  // 把字符串的第一个字母转换为大写。
  var capitalize = function capitalize(word) {
    word = word + '';
    return word.charAt(0).toUpperCase() + word.substr(1);
  };
  // 把字符串转换为大写。
  var upper = function upper(str) {
    return (str + '').toUpperCase();
  };
  // 把字符串转换为小写。
  var lower = function lower(str) {
    return (str + '').toLowerCase();
  };
  // 从数组中随机选择一个
  var pickOne = function pickOne(arr) {
    return arr[natural(0, arr.length - 1)];
  };
  function pick(arr, min, max) {
    if (min === void 0) {min = 1;}
    // pick( item1, item2 ... )
    if (!isArray(arr)) {
      return pickOne(Array.from(arguments));
    }
    // pick( [ item1, item2 ... ], count )
    if (!isDef(max)) {
      max = min;
    }
    if (min === 1 && max === 1) {
      return pickOne(arr);
    }
    // pick( [ item1, item2 ... ], min, max )
    return shuffle(arr, min, max);
  }
  // 从map中随机选择一个
  var pickMap = function pickMap(map) {
    return pick(values(map));
  };
  // 打乱数组中元素的顺序，并按照 min - max 返回。
  var shuffle = function shuffle(arr, min, max) {
    if (!Array.isArray(arr)) {
      return [];
    }
    var copy = arr.slice();
    var length = arr.length;
    for (var i = 0; i < length; i++) {
      var swapIndex = natural(0, length - 1);
      var swapValue = copy[swapIndex];
      copy[swapIndex] = copy[i];
      copy[i] = swapValue;
    }
    if (min && max) {
      return copy.slice(0, natural(min, max));
    }
    if (min) {
      return copy.slice(0, min);
    }
    return copy;
  };

  var helper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    capitalize: capitalize,
    upper: upper,
    lower: lower,
    pickOne: pickOne,
    pick: pick,
    pickMap: pickMap,
    shuffle: shuffle });


  // image
  // 常见图片尺寸
  var imageSize = [
  '150x100', '300x200', '400x300', '600x450', '800x600',
  '100x150', '200x300', '300x400', '450x600', '600x800',
  '100x100', '200x200', '300x300', '450x450', '600x600'];

  /**
                                                           * 随机生成一个图片，使用：http://iph.href.lu，例如：
                                                           * https://iph.href.lu/600x400?fg=cc00cc&bg=470047&text=hello
                                                           * @param size 图片大小
                                                           * @param background 背景色
                                                           * @param foreground 文字颜色
                                                           * @param format 图片格式
                                                           * @param text 文字
                                                           */
  var image = function image(size, background, foreground, format, text) {
    if (size === void 0) {size = '';}
    if (background === void 0) {background = '';}
    if (foreground === void 0) {foreground = '';}
    if (format === void 0) {format = '';}
    if (text === void 0) {text = '';}
    // Random.image( size, background, foreground, text )
    if (arguments.length === 4) {
      text = format;
      format = '';
    }
    // Random.image( size, background, text )
    if (arguments.length === 3) {
      text = foreground;
      foreground = '';
    }
    // Random.image( size, text )
    if (arguments.length === 2) {
      text = background;
      background = '';
    }
    // Random.image()
    size = size || pick(imageSize);
    if (background && ~background.indexOf('#')) {
      background = background.slice(1);
    }
    if (foreground && ~foreground.indexOf('#')) {
      foreground = foreground.slice(1);
    }
    return format ?
    'https://dummyimage.com/' +
    size + (
    background ? '/' + background : '') + (
    foreground ? '/' + foreground : '') + (
    format ? '.' + format : '') + (
    text ? '?text=' + encodeURIComponent(text) : '') :
    "https://iph.href.lu/" + size + "?bg=" + background + "&fg=" + foreground + "&text=" + text;
  };
  var img = image;
  /**
                    * 生成一个随机的base64图片
                    * @param size 图片宽高
                    * @param text 图片上的文字
                    */
  var dataImage = function dataImage(size, text) {
    size = size || pick(imageSize);
    var background = pick([
    '#171515', '#e47911', '#183693', '#720e9e', '#c4302b', '#dd4814',
    '#00acee', '#0071c5', '#3d9ae8', '#ec6231', '#003580', '#e51937']);

    var sizes = size.split('x');
    var width = parseInt(sizes[0], 10);
    var height = parseInt(sizes[1], 10);
    assert(isNumber(width) && isNumber(height), 'Invalid size, expected INTxINT, e.g. 300x400');
    {
      // 小程序无法直接生成 base64 图片，返回空字符串
      return '';
    }
  };

  var image$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    image: image,
    img: img,
    dataImage: dataImage });


  // 颜色空间RGB与HSV(HSL)的转换
  var hsv2rgb = function hsv2rgb(hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - s * f);
    var t = 255 * v * (1 - s * (1 - f));
    v = 255 * v;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];}

  };
  var hsv2hsl = function hsv2hsl(hsv) {
    var h = hsv[0],s = hsv[1] / 100,v = hsv[2] / 100,sl,l;
    l = (2 - s) * v;
    sl = s * v;
    sl /= l <= 1 ? l : 2 - l;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  // http://www.140byt.es/keywords/color
  var rgb2hex = function rgb2hex(a, // red, as a number from 0 to 255
  b, // green, as a number from 0 to 255
  c // blue, as a number from 0 to 255
  ) {
    return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1);
  };

  // 颜色相关
  var colorMap = {
    navy: '#001F3F',
    blue: '#0074D9',
    aqua: '#7FDBFF',
    teal: '#39CCCC',
    olive: '#3D9970',
    green: '#2ECC40',
    lime: '#01FF70',
    yellow: '#FFDC00',
    orange: '#FF851B',
    red: '#FF4136',
    maroon: '#85144B',
    fuchsia: '#F012BE',
    purple: '#B10DC9',
    silver: '#DDDDDD',
    gray: '#AAAAAA',
    black: '#111111',
    white: '#FFFFFF' };

  // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
  var color = function color(name) {
    if (name === void 0) {name = '';}
    if (name && colorMap[name]) {
      return colorMap[name];
    }
    return hex();
  };
  // #DAC0DE
  var hex = function hex() {
    var hsv = _goldenRatioColor();
    var rgb = hsv2rgb(hsv);
    return rgb2hex(rgb[0], rgb[1], rgb[2]);
  };
  // rgb(128,255,255)
  var rgb = function rgb() {
    var hsv = _goldenRatioColor();
    var rgb = hsv2rgb(hsv);
    return 'rgb(' +
    parseInt(rgb[0].toString(), 10) + ', ' +
    parseInt(rgb[1].toString(), 10) + ', ' +
    parseInt(rgb[2].toString(), 10) + ')';
  };
  // rgba(128,255,255,0.3)
  var rgba = function rgba() {
    var hsv = _goldenRatioColor();
    var rgb = hsv2rgb(hsv);
    return 'rgba(' +
    parseInt(rgb[0].toString(), 10) + ', ' +
    parseInt(rgb[1].toString(), 10) + ', ' +
    parseInt(rgb[2].toString(), 10) + ', ' +
    Math.random().toFixed(2) + ')';
  };
  // hsl(300,80%,90%)
  var hsl = function hsl() {
    var hsv = _goldenRatioColor();
    var hsl = hsv2hsl(hsv);
    return 'hsl(' +
    parseInt(hsl[0], 10) + ', ' +
    parseInt(hsl[1], 10) + ', ' +
    parseInt(hsl[2], 10) + ')';
  };
  // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
  // https://github.com/devongovett/color-generator/blob/master/index.js
  // 随机生成一个有吸引力的颜色。
  var _hue = 0;
  var _goldenRatioColor = function _goldenRatioColor(saturation, value) {
    var _goldenRatio = 0.618033988749895;
    _hue = _hue || Math.random();
    _hue += _goldenRatio;
    _hue %= 1;
    if (typeof saturation !== "number")
    saturation = 0.5;
    if (typeof value !== "number")
    value = 0.95;
    return [
    _hue * 360,
    saturation * 100,
    value * 100];

  };

  var color$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    color: color,
    hex: hex,
    rgb: rgb,
    rgba: rgba,
    hsl: hsl });


  /** Used to compose unicode character classes. */
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f";
  var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange = "\\u20d0-\\u20ff";
  var rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
  var rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
  var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
  var rsVarRange = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */
  var rsZWJ = "\\u200d";
  var rsAstral = "[" + rsAstralRange + "]";
  var rsCombo = "[" + rsComboRange + "]";
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
  var rsNonAstral = "[^" + rsAstralRange + "]";
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + "?";
  var rsOptVar = "[" + rsVarRange + "]?";
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ")" + (rsOptVar + reOptMod) + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsNonAstralCombo = "" + rsNonAstral + rsCombo + "?";
  var rsSymbol = "(?:" + [rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ")";
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + (rsSymbol + rsSeq), 'g');
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp("[" + (rsZWJ + rsAstralRange + rsComboRange + rsVarRange) + "]");
  /**
                                                                                               * Checks if `string` contains Unicode symbols.
                                                                                               *
                                                                                               * @private
                                                                                               * @param {string} string The string to inspect.
                                                                                               * @returns {boolean} Returns `true` if a symbol is found, else `false`.
                                                                                               */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  /**
     * Converts an ASCII `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
  function asciiToArray(string) {
    return string.split('');
  }
  /**
    * Converts a Unicode `string` to an array.
    *
    * @private
    * @param {string} string The string to convert.
    * @returns {Array} Returns the converted array.
    */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
  /* istanbul ignore next */
  function stringToArray(string) {
    return hasUnicode(string) ?
    unicodeToArray(string) :
    asciiToArray(string);
  }

  var _range = function _range(defaultMin, defaultMax, min, max) {
    return !isDef(min) ?
    natural(defaultMin, defaultMax) :
    !isDef(max) ?
    min :
    natural(parseInt(min.toString(), 10), parseInt(max.toString(), 10)); // ( min, max )
  };
  // 随机生成一段文本。
  var paragraph = function paragraph(min, max) {
    var len = _range(3, 7, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(sentence());
    }
    return result.join(' ');
  };
  var cparagraph = function cparagraph(min, max) {
    var len = _range(3, 7, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(csentence());
    }
    return result.join('');
  };
  // 随机生成一个句子，第一个单词的首字母大写。
  var sentence = function sentence(min, max) {
    var len = _range(12, 18, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(word());
    }
    return capitalize(result.join(' ')) + '.';
  };
  // 随机生成一个中文句子。
  var csentence = function csentence(min, max) {
    var len = _range(12, 18, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(cword());
    }
    return result.join('') + '。';
  };
  // 随机生成一个单词。
  var word = function word(min, max) {
    var len = _range(3, 10, min, max);
    var result = '';
    for (var i = 0; i < len; i++) {
      result += character('lower');
    }
    return result;
  };
  // 随机生成一个或多个汉字。
  var cword = function cword(pool, min, max) {
    if (pool === void 0) {pool = '';}
    // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
    var cnWords = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞';
    var len;
    switch (arguments.length) {
      case 0: // ()
        pool = cnWords;
        len = 1;
        break;
      case 1: // ( pool )
        if (typeof arguments[0] === 'string') {
          len = 1;
        } else
        {
          // ( length )
          len = pool;
          pool = cnWords;
        }
        break;
      case 2:
        // ( pool, length )
        if (typeof arguments[0] === 'string') {
          len = min;
        } else
        {
          // ( min, max )
          len = natural(parseInt(pool, 10), min);
          pool = cnWords;
        }
        break;
      case 3:
        len = natural(min, max);
        break;}

    var result = '';
    for (var i = 0; i < len; i++) {
      result += pool.charAt(natural(0, pool.length - 1));
    }
    return result;
  };
  // 随机生成一个或多个 emoji 符号
  var emoji = function emoji(pool, min, max) {
    if (!['string', 'number', 'undefined'].includes(typeof pool)) {
      return '';
    }
    // 常用的 338 个emoji符号 http://www.fhdq.net/emoji.html
    var emojis = '😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚☺😇😐😑😶😏😣😥😮😯😪😫😴😌😛😜😝😒😓😔😕😲😷😖😞😟😤😢😭😦😧😨😬😰😱😳😵😡😠😈👿👹👺💀👻👽👦👧👨👩👴👵👶👱👮👲👳👷👸💂🎅👰👼💆💇🙍🙎🙅🙆💁🙋🙇🙌🙏👤👥🚶🏃👯💃👫👬👭💏💑👪💪👈👉☝👆👇✌✋👌👍👎✊👊👋👏👐✍👣👀👂👃👅👄💋👓👔👕👖👗👘👙👚👛👜👝🎒💼👞👟👠👡👢👑👒🎩🎓💄💅💍🌂🙈🙉🙊🐵🐒🐶🐕🐩🐺🐱😺😸😹😻😼😽🙀😿😾🐈🐯🐅🐆🐴🐎🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🐘🐭🐁🐀🐹🐰🐇🐻🐨🐼🐾🐔🐓🐣🐤🐥🐦🐧🐸🐊🐢🐍🐲🐉🐳🐋🐬🐟🐠🐡🐙🐚🐌🐛🐜🐝🐞💐🌸💮🌹🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿🍀🍁🍂🍃🌍🌎🌏🌐🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜☀🌝🌞⭐🌟🌠☁⛅☔⚡❄🔥💧🌊💩🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍅🍆🌽🍄🌰🍞🍖🍗🍔🍟🍕🍳🍲🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🍦🍧🍨🍩🍪🎂🍰🍫🍬🍭🍮🍯🍼☕🍵🍶🍷🍸🍹🍺🍻🍴';
    var array = stringToArray(emojis);
    if (typeof pool === 'string') {// emoji("😀😁😂"), emoji("😀😂", 2), emoji("😀😂", 2, 3)
      array = stringToArray(pool);
    } else
    if (typeof pool === 'number') {// emoji(2), emoji(2, 3)
      max = min;
      min = pool;
    }
    if (min === undefined || min < 2) {// emoji("😀😁😂"), emoji()
      return pick(array); // pick(['1', '2']) => "2", pick(['1', '2'], 1) => "2"
    }
    return pick(array, min, max).join('');
  };
  // 随机生成一句标题，其中每个单词的首字母大写。
  var title = function title(min, max) {
    var len = _range(3, 7, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(capitalize(word()));
    }
    return result.join(' ');
  };
  // 随机生成一句中文标题。
  var ctitle = function ctitle(min, max) {
    var len = _range(3, 7, min, max);
    var result = [];
    for (var i = 0; i < len; i++) {
      result.push(cword());
    }
    return result.join('');
  };

  var text = /*#__PURE__*/Object.freeze({
    __proto__: null,
    paragraph: paragraph,
    cparagraph: cparagraph,
    sentence: sentence,
    csentence: csentence,
    word: word,
    cword: cword,
    emoji: emoji,
    title: title,
    ctitle: ctitle });


  // 随机生成一个常见的英文名。
  var first = function first() {
    var male = [
    "James", "John", "Robert", "Michael", "William",
    "David", "Richard", "Charles", "Joseph", "Thomas",
    "Christopher", "Daniel", "Paul", "Mark", "Donald",
    "George", "Kenneth", "Steven", "Edward", "Brian",
    "Ronald", "Anthony", "Kevin", "Jason", "Matthew",
    "Gary", "Timothy", "Jose", "Larry", "Jeffrey",
    "Frank", "Scott", "Eric"];

    var female = [
    "Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
    "Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
    "Lisa", "Nancy", "Karen", "Betty", "Helen",
    "Sandra", "Donna", "Carol", "Ruth", "Sharon",
    "Michelle", "Laura", "Sarah", "Kimberly", "Deborah",
    "Jessica", "Shirley", "Cynthia", "Angela", "Melissa",
    "Brenda", "Amy", "Anna"];

    return pick(__spreadArrays(male, female));
  };
  // 随机生成一个常见的英文姓。
  var last = function last() {
    var names = [
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
    "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
    "Moore", "Martin", "Jackson", "Thompson", "White",
    "Lopez", "Lee", "Gonzalez", "Harris", "Clark",
    "Lewis", "Robinson", "Walker", "Perez", "Hall",
    "Young", "Allen"];

    return pick(names);
  };
  // 随机生成一个常见的英文姓名。
  var name = function name(middle) {
    if (middle === void 0) {middle = false;}
    return first() + ' ' + (middle ? first() + ' ' : '') + last();
  };
  // 随机生成一个常见的中文姓。
  // [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
  // [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
  var cfirst = function cfirst() {
    var names = [
    "王", "李", "张", "刘", "陈", "杨", "赵", "黄",
    "周", "吴", "徐", "孙", "胡", "朱", "高", "林",
    "何", "郭", "马", "罗", "梁", "宋", "郑", "谢",
    "韩", "唐", "冯", "于", "董", "萧", "程", "曹",
    "袁", "邓", "许", "傅", "沈", "曾", "彭", "吕",
    "苏", "卢", "蒋", "蔡", "贾", "丁", "魏", "薛",
    "叶", "阎", "余", "潘", "杜", "戴", "夏", "锺",
    "汪", "田", "任", "姜", "范", "方", "石", "姚",
    "谭", "廖", "邹", "熊", "金", "陆", "郝", "孔",
    "白", "崔", "康", "毛", "邱", "秦", "江", "史",
    "顾", "侯", "邵", "孟", "龙", "万", "段", "雷",
    "钱", "汤", "尹", "黎", "易", "常", "武", "乔",
    "贺", "赖", "龚", "文"];

    return pick(names);
  };
  // 随机生成一个常见的中文名。
  // [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
  var clast = function clast() {
    var names = [
    "伟", "芳", "娜", "秀英", "敏", "静", "丽", "强",
    "磊", "军", "洋", "勇", "艳", "杰", "娟", "涛",
    "明", "超", "秀兰", "霞", "平", "刚", "桂英"];

    return pick(names);
  };
  // 随机生成一个常见的中文姓名。
  var cname = function cname() {
    return cfirst() + clast();
  };

  var name$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    first: first,
    last: last,
    name: name,
    cfirst: cfirst,
    clast: clast,
    cname: cname });


  // 随机生成一个 URL。
  var url = function url(_protocol, host) {
    if (_protocol === void 0) {_protocol = protocol();}
    if (host === void 0) {host = domain();}
    return _protocol + "://" + host + "/" + word();
  };
  // 随机生成一个 URL 协议。
  var protocol = function protocol() {
    // 协议簇
    var protocols = [
    'http', 'ftp', 'gopher', 'mailto', 'mid', 'cid', 'news', 'nntp',
    'prospero', 'telnet', 'rlogin', 'tn3270', 'wais'];

    return pick(protocols);
  };
  // 随机生成一个域名。
  var domain = function domain(_tld) {
    if (_tld === void 0) {_tld = tld();}
    return word() + '.' + _tld;
  };
  // 随机生成一个顶级域名。
  // [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
  var tld = function tld() {
    var tlds = (
    // 域名后缀
    'com net org edu gov int mil cn ' +
    // 国内域名
    'com.cn net.cn gov.cn org.cn ' +
    // 中文国内域名
    '中国 中国互联.公司 中国互联.网络 ' +
    // 新国际域名
    'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
    // 世界各国域名后缀
    'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw').split(' ');
    return pick(tlds);
  };
  // 随机生成一个邮件地址。
  var email = function email(_domain) {
    if (_domain === void 0) {_domain = domain();}
    return character('lower') + '.' + word() + '@' + _domain;
  };
  // 随机生成一个 IP 地址。
  var ip = function ip() {
    return natural(0, 255) + '.' +
    natural(0, 255) + '.' +
    natural(0, 255) + '.' +
    natural(0, 255);
  };

  var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    url: url,
    protocol: protocol,
    domain: domain,
    tld: tld,
    email: email,
    ip: ip });


  var location = {
    "110000": {
      code: "110000",
      name: "北京市",
      cities: {
        "110000": {
          code: "110000",
          name: "北京市",
          districts: {
            "110101": "东城区",
            "110102": "西城区",
            "110105": "朝阳区",
            "110106": "丰台区",
            "110107": "石景山区",
            "110108": "海淀区",
            "110109": "门头沟区",
            "110111": "房山区",
            "110112": "通州区",
            "110113": "顺义区",
            "110114": "昌平区",
            "110115": "大兴区",
            "110116": "怀柔区",
            "110117": "平谷区",
            "110118": "密云区",
            "110119": "延庆区" } } } },




    "120000": {
      code: "120000",
      name: "天津市",
      cities: {
        "120000": {
          code: "120000",
          name: "天津市",
          districts: {
            "120101": "和平区",
            "120102": "河东区",
            "120103": "河西区",
            "120104": "南开区",
            "120105": "河北区",
            "120106": "红桥区",
            "120110": "东丽区",
            "120111": "西青区",
            "120112": "津南区",
            "120113": "北辰区",
            "120114": "武清区",
            "120115": "宝坻区",
            "120116": "滨海新区",
            "120117": "宁河区",
            "120118": "静海区",
            "120119": "蓟州区" } } } },




    "130000": {
      code: "130000",
      name: "河北省",
      cities: {
        "130100": {
          code: "130100",
          name: "石家庄市",
          districts: {
            "130102": "长安区",
            "130104": "桥西区",
            "130105": "新华区",
            "130107": "井陉矿区",
            "130108": "裕华区",
            "130109": "藁城区",
            "130110": "鹿泉区",
            "130111": "栾城区",
            "130121": "井陉县",
            "130123": "正定县",
            "130125": "行唐县",
            "130126": "灵寿县",
            "130127": "高邑县",
            "130128": "深泽县",
            "130129": "赞皇县",
            "130130": "无极县",
            "130131": "平山县",
            "130132": "元氏县",
            "130133": "赵县",
            "130181": "辛集市",
            "130183": "晋州市",
            "130184": "新乐市" } },


        "130200": {
          code: "130200",
          name: "唐山市",
          districts: {
            "130202": "路南区",
            "130203": "路北区",
            "130204": "古冶区",
            "130205": "开平区",
            "130207": "丰南区",
            "130208": "丰润区",
            "130209": "曹妃甸区",
            "130224": "滦南县",
            "130225": "乐亭县",
            "130227": "迁西县",
            "130229": "玉田县",
            "130281": "遵化市",
            "130283": "迁安市",
            "130284": "滦州市" } },


        "130300": {
          code: "130300",
          name: "秦皇岛市",
          districts: {
            "130302": "海港区",
            "130303": "山海关区",
            "130304": "北戴河区",
            "130306": "抚宁区",
            "130321": "青龙满族自治县",
            "130322": "昌黎县",
            "130324": "卢龙县" } },


        "130400": {
          code: "130400",
          name: "邯郸市",
          districts: {
            "130402": "邯山区",
            "130403": "丛台区",
            "130404": "复兴区",
            "130406": "峰峰矿区",
            "130407": "肥乡区",
            "130408": "永年区",
            "130423": "临漳县",
            "130424": "成安县",
            "130425": "大名县",
            "130426": "涉县",
            "130427": "磁县",
            "130430": "邱县",
            "130431": "鸡泽县",
            "130432": "广平县",
            "130433": "馆陶县",
            "130434": "魏县",
            "130435": "曲周县",
            "130481": "武安市" } },


        "130500": {
          code: "130500",
          name: "邢台市",
          districts: {
            "130502": "桥东区",
            "130503": "桥西区",
            "130521": "邢台县",
            "130522": "临城县",
            "130523": "内丘县",
            "130524": "柏乡县",
            "130525": "隆尧县",
            "130526": "任县",
            "130527": "南和县",
            "130528": "宁晋县",
            "130529": "巨鹿县",
            "130530": "新河县",
            "130531": "广宗县",
            "130532": "平乡县",
            "130533": "威县",
            "130534": "清河县",
            "130535": "临西县",
            "130581": "南宫市",
            "130582": "沙河市" } },


        "130600": {
          code: "130600",
          name: "保定市",
          districts: {
            "130602": "竞秀区",
            "130606": "莲池区",
            "130607": "满城区",
            "130608": "清苑区",
            "130609": "徐水区",
            "130623": "涞水县",
            "130624": "阜平县",
            "130626": "定兴县",
            "130627": "唐县",
            "130628": "高阳县",
            "130629": "容城县",
            "130630": "涞源县",
            "130631": "望都县",
            "130632": "安新县",
            "130633": "易县",
            "130634": "曲阳县",
            "130635": "蠡县",
            "130636": "顺平县",
            "130637": "博野县",
            "130638": "雄县",
            "130681": "涿州市",
            "130682": "定州市",
            "130683": "安国市",
            "130684": "高碑店市" } },


        "130700": {
          code: "130700",
          name: "张家口市",
          districts: {
            "130702": "桥东区",
            "130703": "桥西区",
            "130705": "宣化区",
            "130706": "下花园区",
            "130708": "万全区",
            "130709": "崇礼区",
            "130722": "张北县",
            "130723": "康保县",
            "130724": "沽源县",
            "130725": "尚义县",
            "130726": "蔚县",
            "130727": "阳原县",
            "130728": "怀安县",
            "130730": "怀来县",
            "130731": "涿鹿县",
            "130732": "赤城县" } },


        "130800": {
          code: "130800",
          name: "承德市",
          districts: {
            "130802": "双桥区",
            "130803": "双滦区",
            "130804": "鹰手营子矿区",
            "130821": "承德县",
            "130822": "兴隆县",
            "130824": "滦平县",
            "130825": "隆化县",
            "130826": "丰宁满族自治县",
            "130827": "宽城满族自治县",
            "130828": "围场满族蒙古族自治县",
            "130881": "平泉市" } },


        "130900": {
          code: "130900",
          name: "沧州市",
          districts: {
            "130902": "新华区",
            "130903": "运河区",
            "130921": "沧县",
            "130922": "青县",
            "130923": "东光县",
            "130924": "海兴县",
            "130925": "盐山县",
            "130926": "肃宁县",
            "130927": "南皮县",
            "130928": "吴桥县",
            "130929": "献县",
            "130930": "孟村回族自治县",
            "130981": "泊头市",
            "130982": "任丘市",
            "130983": "黄骅市",
            "130984": "河间市" } },


        "131000": {
          code: "131000",
          name: "廊坊市",
          districts: {
            "131002": "安次区",
            "131003": "广阳区",
            "131022": "固安县",
            "131023": "永清县",
            "131024": "香河县",
            "131025": "大城县",
            "131026": "文安县",
            "131028": "大厂回族自治县",
            "131081": "霸州市",
            "131082": "三河市" } },


        "131100": {
          code: "131100",
          name: "衡水市",
          districts: {
            "131102": "桃城区",
            "131103": "冀州区",
            "131121": "枣强县",
            "131122": "武邑县",
            "131123": "武强县",
            "131124": "饶阳县",
            "131125": "安平县",
            "131126": "故城县",
            "131127": "景县",
            "131128": "阜城县",
            "131182": "深州市" } } } },




    "140000": {
      code: "140000",
      name: "山西省",
      cities: {
        "140100": {
          code: "140100",
          name: "太原市",
          districts: {
            "140105": "小店区",
            "140106": "迎泽区",
            "140107": "杏花岭区",
            "140108": "尖草坪区",
            "140109": "万柏林区",
            "140110": "晋源区",
            "140121": "清徐县",
            "140122": "阳曲县",
            "140123": "娄烦县",
            "140181": "古交市" } },


        "140200": {
          code: "140200",
          name: "大同市",
          districts: {
            "140212": "新荣区",
            "140213": "平城区",
            "140214": "云冈区",
            "140215": "云州区",
            "140221": "阳高县",
            "140222": "天镇县",
            "140223": "广灵县",
            "140224": "灵丘县",
            "140225": "浑源县",
            "140226": "左云县" } },


        "140300": {
          code: "140300",
          name: "阳泉市",
          districts: {
            "140302": "城区",
            "140303": "矿区",
            "140311": "郊区",
            "140321": "平定县",
            "140322": "盂县" } },


        "140400": {
          code: "140400",
          name: "长治市",
          districts: {
            "140403": "潞州区",
            "140404": "上党区",
            "140405": "屯留区",
            "140406": "潞城区",
            "140423": "襄垣县",
            "140425": "平顺县",
            "140426": "黎城县",
            "140427": "壶关县",
            "140428": "长子县",
            "140429": "武乡县",
            "140430": "沁县",
            "140431": "沁源县" } },


        "140500": {
          code: "140500",
          name: "晋城市",
          districts: {
            "140502": "城区",
            "140521": "沁水县",
            "140522": "阳城县",
            "140524": "陵川县",
            "140525": "泽州县",
            "140581": "高平市" } },


        "140600": {
          code: "140600",
          name: "朔州市",
          districts: {
            "140602": "朔城区",
            "140603": "平鲁区",
            "140621": "山阴县",
            "140622": "应县",
            "140623": "右玉县",
            "140681": "怀仁市" } },


        "140700": {
          code: "140700",
          name: "晋中市",
          districts: {
            "140702": "榆次区",
            "140721": "榆社县",
            "140722": "左权县",
            "140723": "和顺县",
            "140724": "昔阳县",
            "140725": "寿阳县",
            "140726": "太谷县",
            "140727": "祁县",
            "140728": "平遥县",
            "140729": "灵石县",
            "140781": "介休市" } },


        "140800": {
          code: "140800",
          name: "运城市",
          districts: {
            "140802": "盐湖区",
            "140821": "临猗县",
            "140822": "万荣县",
            "140823": "闻喜县",
            "140824": "稷山县",
            "140825": "新绛县",
            "140826": "绛县",
            "140827": "垣曲县",
            "140828": "夏县",
            "140829": "平陆县",
            "140830": "芮城县",
            "140881": "永济市",
            "140882": "河津市" } },


        "140900": {
          code: "140900",
          name: "忻州市",
          districts: {
            "140902": "忻府区",
            "140921": "定襄县",
            "140922": "五台县",
            "140923": "代县",
            "140924": "繁峙县",
            "140925": "宁武县",
            "140926": "静乐县",
            "140927": "神池县",
            "140928": "五寨县",
            "140929": "岢岚县",
            "140930": "河曲县",
            "140931": "保德县",
            "140932": "偏关县",
            "140981": "原平市" } },


        "141000": {
          code: "141000",
          name: "临汾市",
          districts: {
            "141002": "尧都区",
            "141021": "曲沃县",
            "141022": "翼城县",
            "141023": "襄汾县",
            "141024": "洪洞县",
            "141025": "古县",
            "141026": "安泽县",
            "141027": "浮山县",
            "141028": "吉县",
            "141029": "乡宁县",
            "141030": "大宁县",
            "141031": "隰县",
            "141032": "永和县",
            "141033": "蒲县",
            "141034": "汾西县",
            "141081": "侯马市",
            "141082": "霍州市" } },


        "141100": {
          code: "141100",
          name: "吕梁市",
          districts: {
            "141102": "离石区",
            "141121": "文水县",
            "141122": "交城县",
            "141123": "兴县",
            "141124": "临县",
            "141125": "柳林县",
            "141126": "石楼县",
            "141127": "岚县",
            "141128": "方山县",
            "141129": "中阳县",
            "141130": "交口县",
            "141181": "孝义市",
            "141182": "汾阳市" } } } },




    "150000": {
      code: "150000",
      name: "内蒙古自治区",
      cities: {
        "150100": {
          code: "150100",
          name: "呼和浩特市",
          districts: {
            "150102": "新城区",
            "150103": "回民区",
            "150104": "玉泉区",
            "150105": "赛罕区",
            "150121": "土默特左旗",
            "150122": "托克托县",
            "150123": "和林格尔县",
            "150124": "清水河县",
            "150125": "武川县" } },


        "150200": {
          code: "150200",
          name: "包头市",
          districts: {
            "150202": "东河区",
            "150203": "昆都仑区",
            "150204": "青山区",
            "150205": "石拐区",
            "150206": "白云鄂博矿区",
            "150207": "九原区",
            "150221": "土默特右旗",
            "150222": "固阳县",
            "150223": "达尔罕茂明安联合旗" } },


        "150300": {
          code: "150300",
          name: "乌海市",
          districts: {
            "150302": "海勃湾区",
            "150303": "海南区",
            "150304": "乌达区" } },


        "150400": {
          code: "150400",
          name: "赤峰市",
          districts: {
            "150402": "红山区",
            "150403": "元宝山区",
            "150404": "松山区",
            "150421": "阿鲁科尔沁旗",
            "150422": "巴林左旗",
            "150423": "巴林右旗",
            "150424": "林西县",
            "150425": "克什克腾旗",
            "150426": "翁牛特旗",
            "150428": "喀喇沁旗",
            "150429": "宁城县",
            "150430": "敖汉旗" } },


        "150500": {
          code: "150500",
          name: "通辽市",
          districts: {
            "150502": "科尔沁区",
            "150521": "科尔沁左翼中旗",
            "150522": "科尔沁左翼后旗",
            "150523": "开鲁县",
            "150524": "库伦旗",
            "150525": "奈曼旗",
            "150526": "扎鲁特旗",
            "150581": "霍林郭勒市" } },


        "150600": {
          code: "150600",
          name: "鄂尔多斯市",
          districts: {
            "150602": "东胜区",
            "150603": "康巴什区",
            "150621": "达拉特旗",
            "150622": "准格尔旗",
            "150623": "鄂托克前旗",
            "150624": "鄂托克旗",
            "150625": "杭锦旗",
            "150626": "乌审旗",
            "150627": "伊金霍洛旗" } },


        "150700": {
          code: "150700",
          name: "呼伦贝尔市",
          districts: {
            "150702": "海拉尔区",
            "150703": "扎赉诺尔区",
            "150721": "阿荣旗",
            "150722": "莫力达瓦达斡尔族自治旗",
            "150723": "鄂伦春自治旗",
            "150724": "鄂温克族自治旗",
            "150725": "陈巴尔虎旗",
            "150726": "新巴尔虎左旗",
            "150727": "新巴尔虎右旗",
            "150781": "满洲里市",
            "150782": "牙克石市",
            "150783": "扎兰屯市",
            "150784": "额尔古纳市",
            "150785": "根河市" } },


        "150800": {
          code: "150800",
          name: "巴彦淖尔市",
          districts: {
            "150802": "临河区",
            "150821": "五原县",
            "150822": "磴口县",
            "150823": "乌拉特前旗",
            "150824": "乌拉特中旗",
            "150825": "乌拉特后旗",
            "150826": "杭锦后旗" } },


        "150900": {
          code: "150900",
          name: "乌兰察布市",
          districts: {
            "150902": "集宁区",
            "150921": "卓资县",
            "150922": "化德县",
            "150923": "商都县",
            "150924": "兴和县",
            "150925": "凉城县",
            "150926": "察哈尔右翼前旗",
            "150927": "察哈尔右翼中旗",
            "150928": "察哈尔右翼后旗",
            "150929": "四子王旗",
            "150981": "丰镇市" } },


        "152200": {
          code: "152200",
          name: "兴安盟",
          districts: {
            "152201": "乌兰浩特市",
            "152202": "阿尔山市",
            "152221": "科尔沁右翼前旗",
            "152222": "科尔沁右翼中旗",
            "152223": "扎赉特旗",
            "152224": "突泉县" } },


        "152500": {
          code: "152500",
          name: "锡林郭勒盟",
          districts: {
            "152501": "二连浩特市",
            "152502": "锡林浩特市",
            "152522": "阿巴嘎旗",
            "152523": "苏尼特左旗",
            "152524": "苏尼特右旗",
            "152525": "东乌珠穆沁旗",
            "152526": "西乌珠穆沁旗",
            "152527": "太仆寺旗",
            "152528": "镶黄旗",
            "152529": "正镶白旗",
            "152530": "正蓝旗",
            "152531": "多伦县" } },


        "152900": {
          code: "152900",
          name: "阿拉善盟",
          districts: {
            "152921": "阿拉善左旗",
            "152922": "阿拉善右旗",
            "152923": "额济纳旗" } } } },




    "210000": {
      code: "210000",
      name: "辽宁省",
      cities: {
        "210100": {
          code: "210100",
          name: "沈阳市",
          districts: {
            "210102": "和平区",
            "210103": "沈河区",
            "210104": "大东区",
            "210105": "皇姑区",
            "210106": "铁西区",
            "210111": "苏家屯区",
            "210112": "浑南区",
            "210113": "沈北新区",
            "210114": "于洪区",
            "210115": "辽中区",
            "210123": "康平县",
            "210124": "法库县",
            "210181": "新民市" } },


        "210200": {
          code: "210200",
          name: "大连市",
          districts: {
            "210202": "中山区",
            "210203": "西岗区",
            "210204": "沙河口区",
            "210211": "甘井子区",
            "210212": "旅顺口区",
            "210213": "金州区",
            "210214": "普兰店区",
            "210224": "长海县",
            "210281": "瓦房店市",
            "210283": "庄河市" } },


        "210300": {
          code: "210300",
          name: "鞍山市",
          districts: {
            "210302": "铁东区",
            "210303": "铁西区",
            "210304": "立山区",
            "210311": "千山区",
            "210321": "台安县",
            "210323": "岫岩满族自治县",
            "210381": "海城市" } },


        "210400": {
          code: "210400",
          name: "抚顺市",
          districts: {
            "210402": "新抚区",
            "210403": "东洲区",
            "210404": "望花区",
            "210411": "顺城区",
            "210421": "抚顺县",
            "210422": "新宾满族自治县",
            "210423": "清原满族自治县" } },


        "210500": {
          code: "210500",
          name: "本溪市",
          districts: {
            "210502": "平山区",
            "210503": "溪湖区",
            "210504": "明山区",
            "210505": "南芬区",
            "210521": "本溪满族自治县",
            "210522": "桓仁满族自治县" } },


        "210600": {
          code: "210600",
          name: "丹东市",
          districts: {
            "210602": "元宝区",
            "210603": "振兴区",
            "210604": "振安区",
            "210624": "宽甸满族自治县",
            "210681": "东港市",
            "210682": "凤城市" } },


        "210700": {
          code: "210700",
          name: "锦州市",
          districts: {
            "210702": "古塔区",
            "210703": "凌河区",
            "210711": "太和区",
            "210726": "黑山县",
            "210727": "义县",
            "210781": "凌海市",
            "210782": "北镇市" } },


        "210800": {
          code: "210800",
          name: "营口市",
          districts: {
            "210802": "站前区",
            "210803": "西市区",
            "210804": "鲅鱼圈区",
            "210811": "老边区",
            "210881": "盖州市",
            "210882": "大石桥市" } },


        "210900": {
          code: "210900",
          name: "阜新市",
          districts: {
            "210902": "海州区",
            "210903": "新邱区",
            "210904": "太平区",
            "210905": "清河门区",
            "210911": "细河区",
            "210921": "阜新蒙古族自治县",
            "210922": "彰武县" } },


        "211000": {
          code: "211000",
          name: "辽阳市",
          districts: {
            "211002": "白塔区",
            "211003": "文圣区",
            "211004": "宏伟区",
            "211005": "弓长岭区",
            "211011": "太子河区",
            "211021": "辽阳县",
            "211081": "灯塔市" } },


        "211100": {
          code: "211100",
          name: "盘锦市",
          districts: {
            "211102": "双台子区",
            "211103": "兴隆台区",
            "211104": "大洼区",
            "211122": "盘山县" } },


        "211200": {
          code: "211200",
          name: "铁岭市",
          districts: {
            "211202": "银州区",
            "211204": "清河区",
            "211221": "铁岭县",
            "211223": "西丰县",
            "211224": "昌图县",
            "211281": "调兵山市",
            "211282": "开原市" } },


        "211300": {
          code: "211300",
          name: "朝阳市",
          districts: {
            "211302": "双塔区",
            "211303": "龙城区",
            "211321": "朝阳县",
            "211322": "建平县",
            "211324": "喀喇沁左翼蒙古族自治县",
            "211381": "北票市",
            "211382": "凌源市" } },


        "211400": {
          code: "211400",
          name: "葫芦岛市",
          districts: {
            "211402": "连山区",
            "211403": "龙港区",
            "211404": "南票区",
            "211421": "绥中县",
            "211422": "建昌县",
            "211481": "兴城市" } } } },




    "220000": {
      code: "220000",
      name: "吉林省",
      cities: {
        "220100": {
          code: "220100",
          name: "长春市",
          districts: {
            "220102": "南关区",
            "220103": "宽城区",
            "220104": "朝阳区",
            "220105": "二道区",
            "220106": "绿园区",
            "220112": "双阳区",
            "220113": "九台区",
            "220122": "农安县",
            "220182": "榆树市",
            "220183": "德惠市" } },


        "220200": {
          code: "220200",
          name: "吉林市",
          districts: {
            "220202": "昌邑区",
            "220203": "龙潭区",
            "220204": "船营区",
            "220211": "丰满区",
            "220221": "永吉县",
            "220281": "蛟河市",
            "220282": "桦甸市",
            "220283": "舒兰市",
            "220284": "磐石市" } },


        "220300": {
          code: "220300",
          name: "四平市",
          districts: {
            "220302": "铁西区",
            "220303": "铁东区",
            "220322": "梨树县",
            "220323": "伊通满族自治县",
            "220381": "公主岭市",
            "220382": "双辽市" } },


        "220400": {
          code: "220400",
          name: "辽源市",
          districts: {
            "220402": "龙山区",
            "220403": "西安区",
            "220421": "东丰县",
            "220422": "东辽县" } },


        "220500": {
          code: "220500",
          name: "通化市",
          districts: {
            "220502": "东昌区",
            "220503": "二道江区",
            "220521": "通化县",
            "220523": "辉南县",
            "220524": "柳河县",
            "220581": "梅河口市",
            "220582": "集安市" } },


        "220600": {
          code: "220600",
          name: "白山市",
          districts: {
            "220602": "浑江区",
            "220605": "江源区",
            "220621": "抚松县",
            "220622": "靖宇县",
            "220623": "长白朝鲜族自治县",
            "220681": "临江市" } },


        "220700": {
          code: "220700",
          name: "松原市",
          districts: {
            "220702": "宁江区",
            "220721": "前郭尔罗斯蒙古族自治县",
            "220722": "长岭县",
            "220723": "乾安县",
            "220781": "扶余市" } },


        "220800": {
          code: "220800",
          name: "白城市",
          districts: {
            "220802": "洮北区",
            "220821": "镇赉县",
            "220822": "通榆县",
            "220881": "洮南市",
            "220882": "大安市" } },


        "222400": {
          code: "222400",
          name: "延边朝鲜族自治州",
          districts: {
            "222401": "延吉市",
            "222402": "图们市",
            "222403": "敦化市",
            "222404": "珲春市",
            "222405": "龙井市",
            "222406": "和龙市",
            "222424": "汪清县",
            "222426": "安图县" } } } },




    "230000": {
      code: "230000",
      name: "黑龙江省",
      cities: {
        "230100": {
          code: "230100",
          name: "哈尔滨市",
          districts: {
            "230102": "道里区",
            "230103": "南岗区",
            "230104": "道外区",
            "230108": "平房区",
            "230109": "松北区",
            "230110": "香坊区",
            "230111": "呼兰区",
            "230112": "阿城区",
            "230113": "双城区",
            "230123": "依兰县",
            "230124": "方正县",
            "230125": "宾县",
            "230126": "巴彦县",
            "230127": "木兰县",
            "230128": "通河县",
            "230129": "延寿县",
            "230183": "尚志市",
            "230184": "五常市" } },


        "230200": {
          code: "230200",
          name: "齐齐哈尔市",
          districts: {
            "230202": "龙沙区",
            "230203": "建华区",
            "230204": "铁锋区",
            "230205": "昂昂溪区",
            "230206": "富拉尔基区",
            "230207": "碾子山区",
            "230208": "梅里斯达斡尔族区",
            "230221": "龙江县",
            "230223": "依安县",
            "230224": "泰来县",
            "230225": "甘南县",
            "230227": "富裕县",
            "230229": "克山县",
            "230230": "克东县",
            "230231": "拜泉县",
            "230281": "讷河市" } },


        "230300": {
          code: "230300",
          name: "鸡西市",
          districts: {
            "230302": "鸡冠区",
            "230303": "恒山区",
            "230304": "滴道区",
            "230305": "梨树区",
            "230306": "城子河区",
            "230307": "麻山区",
            "230321": "鸡东县",
            "230381": "虎林市",
            "230382": "密山市" } },


        "230400": {
          code: "230400",
          name: "鹤岗市",
          districts: {
            "230402": "向阳区",
            "230403": "工农区",
            "230404": "南山区",
            "230405": "兴安区",
            "230406": "东山区",
            "230407": "兴山区",
            "230421": "萝北县",
            "230422": "绥滨县" } },


        "230500": {
          code: "230500",
          name: "双鸭山市",
          districts: {
            "230502": "尖山区",
            "230503": "岭东区",
            "230505": "四方台区",
            "230506": "宝山区",
            "230521": "集贤县",
            "230522": "友谊县",
            "230523": "宝清县",
            "230524": "饶河县" } },


        "230600": {
          code: "230600",
          name: "大庆市",
          districts: {
            "230602": "萨尔图区",
            "230603": "龙凤区",
            "230604": "让胡路区",
            "230605": "红岗区",
            "230606": "大同区",
            "230621": "肇州县",
            "230622": "肇源县",
            "230623": "林甸县",
            "230624": "杜尔伯特蒙古族自治县" } },


        "230700": {
          code: "230700",
          name: "伊春市",
          districts: {
            "230702": "伊春区",
            "230703": "南岔区",
            "230704": "友好区",
            "230705": "西林区",
            "230706": "翠峦区",
            "230707": "新青区",
            "230708": "美溪区",
            "230709": "金山屯区",
            "230710": "五营区",
            "230711": "乌马河区",
            "230712": "汤旺河区",
            "230713": "带岭区",
            "230714": "乌伊岭区",
            "230715": "红星区",
            "230716": "上甘岭区",
            "230722": "嘉荫县",
            "230781": "铁力市" } },


        "230800": {
          code: "230800",
          name: "佳木斯市",
          districts: {
            "230803": "向阳区",
            "230804": "前进区",
            "230805": "东风区",
            "230811": "郊区",
            "230822": "桦南县",
            "230826": "桦川县",
            "230828": "汤原县",
            "230881": "同江市",
            "230882": "富锦市",
            "230883": "抚远市" } },


        "230900": {
          code: "230900",
          name: "七台河市",
          districts: {
            "230902": "新兴区",
            "230903": "桃山区",
            "230904": "茄子河区",
            "230921": "勃利县" } },


        "231000": {
          code: "231000",
          name: "牡丹江市",
          districts: {
            "231002": "东安区",
            "231003": "阳明区",
            "231004": "爱民区",
            "231005": "西安区",
            "231025": "林口县",
            "231081": "绥芬河市",
            "231083": "海林市",
            "231084": "宁安市",
            "231085": "穆棱市",
            "231086": "东宁市" } },


        "231100": {
          code: "231100",
          name: "黑河市",
          districts: {
            "231102": "爱辉区",
            "231121": "嫩江县",
            "231123": "逊克县",
            "231124": "孙吴县",
            "231181": "北安市",
            "231182": "五大连池市" } },


        "231200": {
          code: "231200",
          name: "绥化市",
          districts: {
            "231202": "北林区",
            "231221": "望奎县",
            "231222": "兰西县",
            "231223": "青冈县",
            "231224": "庆安县",
            "231225": "明水县",
            "231226": "绥棱县",
            "231281": "安达市",
            "231282": "肇东市",
            "231283": "海伦市" } },


        "232700": {
          code: "232700",
          name: "大兴安岭地区",
          districts: {
            "232701": "漠河市",
            "232721": "呼玛县",
            "232722": "塔河县" } } } },




    "310000": {
      code: "310000",
      name: "上海市",
      cities: {
        "310000": {
          code: "310000",
          name: "上海市",
          districts: {
            "310101": "黄浦区",
            "310104": "徐汇区",
            "310105": "长宁区",
            "310106": "静安区",
            "310107": "普陀区",
            "310109": "虹口区",
            "310110": "杨浦区",
            "310112": "闵行区",
            "310113": "宝山区",
            "310114": "嘉定区",
            "310115": "浦东新区",
            "310116": "金山区",
            "310117": "松江区",
            "310118": "青浦区",
            "310120": "奉贤区",
            "310151": "崇明区" } } } },




    "320000": {
      code: "320000",
      name: "江苏省",
      cities: {
        "320100": {
          code: "320100",
          name: "南京市",
          districts: {
            "320102": "玄武区",
            "320104": "秦淮区",
            "320105": "建邺区",
            "320106": "鼓楼区",
            "320111": "浦口区",
            "320113": "栖霞区",
            "320114": "雨花台区",
            "320115": "江宁区",
            "320116": "六合区",
            "320117": "溧水区",
            "320118": "高淳区" } },


        "320200": {
          code: "320200",
          name: "无锡市",
          districts: {
            "320205": "锡山区",
            "320206": "惠山区",
            "320211": "滨湖区",
            "320213": "梁溪区",
            "320214": "新吴区",
            "320281": "江阴市",
            "320282": "宜兴市" } },


        "320300": {
          code: "320300",
          name: "徐州市",
          districts: {
            "320302": "鼓楼区",
            "320303": "云龙区",
            "320305": "贾汪区",
            "320311": "泉山区",
            "320312": "铜山区",
            "320321": "丰县",
            "320322": "沛县",
            "320324": "睢宁县",
            "320381": "新沂市",
            "320382": "邳州市" } },


        "320400": {
          code: "320400",
          name: "常州市",
          districts: {
            "320402": "天宁区",
            "320404": "钟楼区",
            "320411": "新北区",
            "320412": "武进区",
            "320413": "金坛区",
            "320481": "溧阳市" } },


        "320500": {
          code: "320500",
          name: "苏州市",
          districts: {
            "320505": "虎丘区",
            "320506": "吴中区",
            "320507": "相城区",
            "320508": "姑苏区",
            "320509": "吴江区",
            "320581": "常熟市",
            "320582": "张家港市",
            "320583": "昆山市",
            "320585": "太仓市" } },


        "320600": {
          code: "320600",
          name: "南通市",
          districts: {
            "320602": "崇川区",
            "320611": "港闸区",
            "320612": "通州区",
            "320623": "如东县",
            "320681": "启东市",
            "320682": "如皋市",
            "320684": "海门市",
            "320685": "海安市" } },


        "320700": {
          code: "320700",
          name: "连云港市",
          districts: {
            "320703": "连云区",
            "320706": "海州区",
            "320707": "赣榆区",
            "320722": "东海县",
            "320723": "灌云县",
            "320724": "灌南县" } },


        "320800": {
          code: "320800",
          name: "淮安市",
          districts: {
            "320803": "淮安区",
            "320804": "淮阴区",
            "320812": "清江浦区",
            "320813": "洪泽区",
            "320826": "涟水县",
            "320830": "盱眙县",
            "320831": "金湖县" } },


        "320900": {
          code: "320900",
          name: "盐城市",
          districts: {
            "320902": "亭湖区",
            "320903": "盐都区",
            "320904": "大丰区",
            "320921": "响水县",
            "320922": "滨海县",
            "320923": "阜宁县",
            "320924": "射阳县",
            "320925": "建湖县",
            "320981": "东台市" } },


        "321000": {
          code: "321000",
          name: "扬州市",
          districts: {
            "321002": "广陵区",
            "321003": "邗江区",
            "321012": "江都区",
            "321023": "宝应县",
            "321081": "仪征市",
            "321084": "高邮市" } },


        "321100": {
          code: "321100",
          name: "镇江市",
          districts: {
            "321102": "京口区",
            "321111": "润州区",
            "321112": "丹徒区",
            "321181": "丹阳市",
            "321182": "扬中市",
            "321183": "句容市" } },


        "321200": {
          code: "321200",
          name: "泰州市",
          districts: {
            "321202": "海陵区",
            "321203": "高港区",
            "321204": "姜堰区",
            "321281": "兴化市",
            "321282": "靖江市",
            "321283": "泰兴市" } },


        "321300": {
          code: "321300",
          name: "宿迁市",
          districts: {
            "321302": "宿城区",
            "321311": "宿豫区",
            "321322": "沭阳县",
            "321323": "泗阳县",
            "321324": "泗洪县" } } } },




    "330000": {
      code: "330000",
      name: "浙江省",
      cities: {
        "330100": {
          code: "330100",
          name: "杭州市",
          districts: {
            "330102": "上城区",
            "330103": "下城区",
            "330104": "江干区",
            "330105": "拱墅区",
            "330106": "西湖区",
            "330108": "滨江区",
            "330109": "萧山区",
            "330110": "余杭区",
            "330111": "富阳区",
            "330112": "临安区",
            "330122": "桐庐县",
            "330127": "淳安县",
            "330182": "建德市" } },


        "330200": {
          code: "330200",
          name: "宁波市",
          districts: {
            "330203": "海曙区",
            "330205": "江北区",
            "330206": "北仑区",
            "330211": "镇海区",
            "330212": "鄞州区",
            "330213": "奉化区",
            "330225": "象山县",
            "330226": "宁海县",
            "330281": "余姚市",
            "330282": "慈溪市" } },


        "330300": {
          code: "330300",
          name: "温州市",
          districts: {
            "330302": "鹿城区",
            "330303": "龙湾区",
            "330304": "瓯海区",
            "330305": "洞头区",
            "330324": "永嘉县",
            "330326": "平阳县",
            "330327": "苍南县",
            "330328": "文成县",
            "330329": "泰顺县",
            "330381": "瑞安市",
            "330382": "乐清市" } },


        "330400": {
          code: "330400",
          name: "嘉兴市",
          districts: {
            "330402": "南湖区",
            "330411": "秀洲区",
            "330421": "嘉善县",
            "330424": "海盐县",
            "330481": "海宁市",
            "330482": "平湖市",
            "330483": "桐乡市" } },


        "330500": {
          code: "330500",
          name: "湖州市",
          districts: {
            "330502": "吴兴区",
            "330503": "南浔区",
            "330521": "德清县",
            "330522": "长兴县",
            "330523": "安吉县" } },


        "330600": {
          code: "330600",
          name: "绍兴市",
          districts: {
            "330602": "越城区",
            "330603": "柯桥区",
            "330604": "上虞区",
            "330624": "新昌县",
            "330681": "诸暨市",
            "330683": "嵊州市" } },


        "330700": {
          code: "330700",
          name: "金华市",
          districts: {
            "330702": "婺城区",
            "330703": "金东区",
            "330723": "武义县",
            "330726": "浦江县",
            "330727": "磐安县",
            "330781": "兰溪市",
            "330782": "义乌市",
            "330783": "东阳市",
            "330784": "永康市" } },


        "330800": {
          code: "330800",
          name: "衢州市",
          districts: {
            "330802": "柯城区",
            "330803": "衢江区",
            "330822": "常山县",
            "330824": "开化县",
            "330825": "龙游县",
            "330881": "江山市" } },


        "330900": {
          code: "330900",
          name: "舟山市",
          districts: {
            "330902": "定海区",
            "330903": "普陀区",
            "330921": "岱山县",
            "330922": "嵊泗县" } },


        "331000": {
          code: "331000",
          name: "台州市",
          districts: {
            "331002": "椒江区",
            "331003": "黄岩区",
            "331004": "路桥区",
            "331022": "三门县",
            "331023": "天台县",
            "331024": "仙居县",
            "331081": "温岭市",
            "331082": "临海市",
            "331083": "玉环市" } },


        "331100": {
          code: "331100",
          name: "丽水市",
          districts: {
            "331102": "莲都区",
            "331121": "青田县",
            "331122": "缙云县",
            "331123": "遂昌县",
            "331124": "松阳县",
            "331125": "云和县",
            "331126": "庆元县",
            "331127": "景宁畲族自治县",
            "331181": "龙泉市" } } } },




    "340000": {
      code: "340000",
      name: "安徽省",
      cities: {
        "340100": {
          code: "340100",
          name: "合肥市",
          districts: {
            "340102": "瑶海区",
            "340103": "庐阳区",
            "340104": "蜀山区",
            "340111": "包河区",
            "340121": "长丰县",
            "340122": "肥东县",
            "340123": "肥西县",
            "340124": "庐江县",
            "340181": "巢湖市" } },


        "340200": {
          code: "340200",
          name: "芜湖市",
          districts: {
            "340202": "镜湖区",
            "340203": "弋江区",
            "340207": "鸠江区",
            "340208": "三山区",
            "340221": "芜湖县",
            "340222": "繁昌县",
            "340223": "南陵县",
            "340225": "无为县" } },


        "340300": {
          code: "340300",
          name: "蚌埠市",
          districts: {
            "340302": "龙子湖区",
            "340303": "蚌山区",
            "340304": "禹会区",
            "340311": "淮上区",
            "340321": "怀远县",
            "340322": "五河县",
            "340323": "固镇县" } },


        "340400": {
          code: "340400",
          name: "淮南市",
          districts: {
            "340402": "大通区",
            "340403": "田家庵区",
            "340404": "谢家集区",
            "340405": "八公山区",
            "340406": "潘集区",
            "340421": "凤台县",
            "340422": "寿县" } },


        "340500": {
          code: "340500",
          name: "马鞍山市",
          districts: {
            "340503": "花山区",
            "340504": "雨山区",
            "340506": "博望区",
            "340521": "当涂县",
            "340522": "含山县",
            "340523": "和县" } },


        "340600": {
          code: "340600",
          name: "淮北市",
          districts: {
            "340602": "杜集区",
            "340603": "相山区",
            "340604": "烈山区",
            "340621": "濉溪县" } },


        "340700": {
          code: "340700",
          name: "铜陵市",
          districts: {
            "340705": "铜官区",
            "340706": "义安区",
            "340711": "郊区",
            "340722": "枞阳县" } },


        "340800": {
          code: "340800",
          name: "安庆市",
          districts: {
            "340802": "迎江区",
            "340803": "大观区",
            "340811": "宜秀区",
            "340822": "怀宁县",
            "340825": "太湖县",
            "340826": "宿松县",
            "340827": "望江县",
            "340828": "岳西县",
            "340881": "桐城市",
            "340882": "潜山市" } },


        "341000": {
          code: "341000",
          name: "黄山市",
          districts: {
            "341002": "屯溪区",
            "341003": "黄山区",
            "341004": "徽州区",
            "341021": "歙县",
            "341022": "休宁县",
            "341023": "黟县",
            "341024": "祁门县" } },


        "341100": {
          code: "341100",
          name: "滁州市",
          districts: {
            "341102": "琅琊区",
            "341103": "南谯区",
            "341122": "来安县",
            "341124": "全椒县",
            "341125": "定远县",
            "341126": "凤阳县",
            "341181": "天长市",
            "341182": "明光市" } },


        "341200": {
          code: "341200",
          name: "阜阳市",
          districts: {
            "341202": "颍州区",
            "341203": "颍东区",
            "341204": "颍泉区",
            "341221": "临泉县",
            "341222": "太和县",
            "341225": "阜南县",
            "341226": "颍上县",
            "341282": "界首市" } },


        "341300": {
          code: "341300",
          name: "宿州市",
          districts: {
            "341302": "埇桥区",
            "341321": "砀山县",
            "341322": "萧县",
            "341323": "灵璧县",
            "341324": "泗县" } },


        "341500": {
          code: "341500",
          name: "六安市",
          districts: {
            "341502": "金安区",
            "341503": "裕安区",
            "341504": "叶集区",
            "341522": "霍邱县",
            "341523": "舒城县",
            "341524": "金寨县",
            "341525": "霍山县" } },


        "341600": {
          code: "341600",
          name: "亳州市",
          districts: {
            "341602": "谯城区",
            "341621": "涡阳县",
            "341622": "蒙城县",
            "341623": "利辛县" } },


        "341700": {
          code: "341700",
          name: "池州市",
          districts: {
            "341702": "贵池区",
            "341721": "东至县",
            "341722": "石台县",
            "341723": "青阳县" } },


        "341800": {
          code: "341800",
          name: "宣城市",
          districts: {
            "341802": "宣州区",
            "341821": "郎溪县",
            "341822": "广德县",
            "341823": "泾县",
            "341824": "绩溪县",
            "341825": "旌德县",
            "341881": "宁国市" } } } },




    "350000": {
      code: "350000",
      name: "福建省",
      cities: {
        "350100": {
          code: "350100",
          name: "福州市",
          districts: {
            "350102": "鼓楼区",
            "350103": "台江区",
            "350104": "仓山区",
            "350105": "马尾区",
            "350111": "晋安区",
            "350112": "长乐区",
            "350121": "闽侯县",
            "350122": "连江县",
            "350123": "罗源县",
            "350124": "闽清县",
            "350125": "永泰县",
            "350128": "平潭县",
            "350181": "福清市" } },


        "350200": {
          code: "350200",
          name: "厦门市",
          districts: {
            "350203": "思明区",
            "350205": "海沧区",
            "350206": "湖里区",
            "350211": "集美区",
            "350212": "同安区",
            "350213": "翔安区" } },


        "350300": {
          code: "350300",
          name: "莆田市",
          districts: {
            "350302": "城厢区",
            "350303": "涵江区",
            "350304": "荔城区",
            "350305": "秀屿区",
            "350322": "仙游县" } },


        "350400": {
          code: "350400",
          name: "三明市",
          districts: {
            "350402": "梅列区",
            "350403": "三元区",
            "350421": "明溪县",
            "350423": "清流县",
            "350424": "宁化县",
            "350425": "大田县",
            "350426": "尤溪县",
            "350427": "沙县",
            "350428": "将乐县",
            "350429": "泰宁县",
            "350430": "建宁县",
            "350481": "永安市" } },


        "350500": {
          code: "350500",
          name: "泉州市",
          districts: {
            "350502": "鲤城区",
            "350503": "丰泽区",
            "350504": "洛江区",
            "350505": "泉港区",
            "350521": "惠安县",
            "350524": "安溪县",
            "350525": "永春县",
            "350526": "德化县",
            "350527": "金门县",
            "350581": "石狮市",
            "350582": "晋江市",
            "350583": "南安市" } },


        "350600": {
          code: "350600",
          name: "漳州市",
          districts: {
            "350602": "芗城区",
            "350603": "龙文区",
            "350622": "云霄县",
            "350623": "漳浦县",
            "350624": "诏安县",
            "350625": "长泰县",
            "350626": "东山县",
            "350627": "南靖县",
            "350628": "平和县",
            "350629": "华安县",
            "350681": "龙海市" } },


        "350700": {
          code: "350700",
          name: "南平市",
          districts: {
            "350702": "延平区",
            "350703": "建阳区",
            "350721": "顺昌县",
            "350722": "浦城县",
            "350723": "光泽县",
            "350724": "松溪县",
            "350725": "政和县",
            "350781": "邵武市",
            "350782": "武夷山市",
            "350783": "建瓯市" } },


        "350800": {
          code: "350800",
          name: "龙岩市",
          districts: {
            "350802": "新罗区",
            "350803": "永定区",
            "350821": "长汀县",
            "350823": "上杭县",
            "350824": "武平县",
            "350825": "连城县",
            "350881": "漳平市" } },


        "350900": {
          code: "350900",
          name: "宁德市",
          districts: {
            "350902": "蕉城区",
            "350921": "霞浦县",
            "350922": "古田县",
            "350923": "屏南县",
            "350924": "寿宁县",
            "350925": "周宁县",
            "350926": "柘荣县",
            "350981": "福安市",
            "350982": "福鼎市" } } } },




    "360000": {
      code: "360000",
      name: "江西省",
      cities: {
        "360100": {
          code: "360100",
          name: "南昌市",
          districts: {
            "360102": "东湖区",
            "360103": "西湖区",
            "360104": "青云谱区",
            "360105": "湾里区",
            "360111": "青山湖区",
            "360112": "新建区",
            "360121": "南昌县",
            "360123": "安义县",
            "360124": "进贤县" } },


        "360200": {
          code: "360200",
          name: "景德镇市",
          districts: {
            "360202": "昌江区",
            "360203": "珠山区",
            "360222": "浮梁县",
            "360281": "乐平市" } },


        "360300": {
          code: "360300",
          name: "萍乡市",
          districts: {
            "360302": "安源区",
            "360313": "湘东区",
            "360321": "莲花县",
            "360322": "上栗县",
            "360323": "芦溪县" } },


        "360400": {
          code: "360400",
          name: "九江市",
          districts: {
            "360402": "濂溪区",
            "360403": "浔阳区",
            "360404": "柴桑区",
            "360423": "武宁县",
            "360424": "修水县",
            "360425": "永修县",
            "360426": "德安县",
            "360428": "都昌县",
            "360429": "湖口县",
            "360430": "彭泽县",
            "360481": "瑞昌市",
            "360482": "共青城市",
            "360483": "庐山市" } },


        "360500": {
          code: "360500",
          name: "新余市",
          districts: {
            "360502": "渝水区",
            "360521": "分宜县" } },


        "360600": {
          code: "360600",
          name: "鹰潭市",
          districts: {
            "360602": "月湖区",
            "360603": "余江区",
            "360681": "贵溪市" } },


        "360700": {
          code: "360700",
          name: "赣州市",
          districts: {
            "360702": "章贡区",
            "360703": "南康区",
            "360704": "赣县区",
            "360722": "信丰县",
            "360723": "大余县",
            "360724": "上犹县",
            "360725": "崇义县",
            "360726": "安远县",
            "360727": "龙南县",
            "360728": "定南县",
            "360729": "全南县",
            "360730": "宁都县",
            "360731": "于都县",
            "360732": "兴国县",
            "360733": "会昌县",
            "360734": "寻乌县",
            "360735": "石城县",
            "360781": "瑞金市" } },


        "360800": {
          code: "360800",
          name: "吉安市",
          districts: {
            "360802": "吉州区",
            "360803": "青原区",
            "360821": "吉安县",
            "360822": "吉水县",
            "360823": "峡江县",
            "360824": "新干县",
            "360825": "永丰县",
            "360826": "泰和县",
            "360827": "遂川县",
            "360828": "万安县",
            "360829": "安福县",
            "360830": "永新县",
            "360881": "井冈山市" } },


        "360900": {
          code: "360900",
          name: "宜春市",
          districts: {
            "360902": "袁州区",
            "360921": "奉新县",
            "360922": "万载县",
            "360923": "上高县",
            "360924": "宜丰县",
            "360925": "靖安县",
            "360926": "铜鼓县",
            "360981": "丰城市",
            "360982": "樟树市",
            "360983": "高安市" } },


        "361000": {
          code: "361000",
          name: "抚州市",
          districts: {
            "361002": "临川区",
            "361003": "东乡区",
            "361021": "南城县",
            "361022": "黎川县",
            "361023": "南丰县",
            "361024": "崇仁县",
            "361025": "乐安县",
            "361026": "宜黄县",
            "361027": "金溪县",
            "361028": "资溪县",
            "361030": "广昌县" } },


        "361100": {
          code: "361100",
          name: "上饶市",
          districts: {
            "361102": "信州区",
            "361103": "广丰区",
            "361121": "上饶县",
            "361123": "玉山县",
            "361124": "铅山县",
            "361125": "横峰县",
            "361126": "弋阳县",
            "361127": "余干县",
            "361128": "鄱阳县",
            "361129": "万年县",
            "361130": "婺源县",
            "361181": "德兴市" } } } },




    "370000": {
      code: "370000",
      name: "山东省",
      cities: {
        "370100": {
          code: "370100",
          name: "济南市",
          districts: {
            "370102": "历下区",
            "370103": "市中区",
            "370104": "槐荫区",
            "370105": "天桥区",
            "370112": "历城区",
            "370113": "长清区",
            "370114": "章丘区",
            "370115": "济阳区",
            "370116": "莱芜区",
            "370117": "钢城区",
            "370124": "平阴县",
            "370126": "商河县" } },


        "370200": {
          code: "370200",
          name: "青岛市",
          districts: {
            "370202": "市南区",
            "370203": "市北区",
            "370211": "黄岛区",
            "370212": "崂山区",
            "370213": "李沧区",
            "370214": "城阳区",
            "370215": "即墨区",
            "370281": "胶州市",
            "370283": "平度市",
            "370285": "莱西市" } },


        "370300": {
          code: "370300",
          name: "淄博市",
          districts: {
            "370302": "淄川区",
            "370303": "张店区",
            "370304": "博山区",
            "370305": "临淄区",
            "370306": "周村区",
            "370321": "桓台县",
            "370322": "高青县",
            "370323": "沂源县" } },


        "370400": {
          code: "370400",
          name: "枣庄市",
          districts: {
            "370402": "市中区",
            "370403": "薛城区",
            "370404": "峄城区",
            "370405": "台儿庄区",
            "370406": "山亭区",
            "370481": "滕州市" } },


        "370500": {
          code: "370500",
          name: "东营市",
          districts: {
            "370502": "东营区",
            "370503": "河口区",
            "370505": "垦利区",
            "370522": "利津县",
            "370523": "广饶县" } },


        "370600": {
          code: "370600",
          name: "烟台市",
          districts: {
            "370602": "芝罘区",
            "370611": "福山区",
            "370612": "牟平区",
            "370613": "莱山区",
            "370614": "蓬莱区",
            "370681": "龙口市",
            "370682": "莱阳市",
            "370683": "莱州市",
            "370684": "蓬莱市",
            "370685": "招远市",
            "370686": "栖霞市",
            "370687": "海阳市" } },


        "370700": {
          code: "370700",
          name: "潍坊市",
          districts: {
            "370702": "潍城区",
            "370703": "寒亭区",
            "370704": "坊子区",
            "370705": "奎文区",
            "370724": "临朐县",
            "370725": "昌乐县",
            "370781": "青州市",
            "370782": "诸城市",
            "370783": "寿光市",
            "370784": "安丘市",
            "370785": "高密市",
            "370786": "昌邑市" } },


        "370800": {
          code: "370800",
          name: "济宁市",
          districts: {
            "370811": "任城区",
            "370812": "兖州区",
            "370826": "微山县",
            "370827": "鱼台县",
            "370828": "金乡县",
            "370829": "嘉祥县",
            "370830": "汶上县",
            "370831": "泗水县",
            "370832": "梁山县",
            "370881": "曲阜市",
            "370883": "邹城市" } },


        "370900": {
          code: "370900",
          name: "泰安市",
          districts: {
            "370902": "泰山区",
            "370911": "岱岳区",
            "370921": "宁阳县",
            "370923": "东平县",
            "370982": "新泰市",
            "370983": "肥城市" } },


        "371000": {
          code: "371000",
          name: "威海市",
          districts: {
            "371002": "环翠区",
            "371003": "文登区",
            "371082": "荣成市",
            "371083": "乳山市" } },


        "371100": {
          code: "371100",
          name: "日照市",
          districts: {
            "371102": "东港区",
            "371103": "岚山区",
            "371121": "五莲县",
            "371122": "莒县" } },


        "371300": {
          code: "371300",
          name: "临沂市",
          districts: {
            "371302": "兰山区",
            "371311": "罗庄区",
            "371312": "河东区",
            "371321": "沂南县",
            "371322": "郯城县",
            "371323": "沂水县",
            "371324": "兰陵县",
            "371325": "费县",
            "371326": "平邑县",
            "371327": "莒南县",
            "371328": "蒙阴县",
            "371329": "临沭县" } },


        "371400": {
          code: "371400",
          name: "德州市",
          districts: {
            "371402": "德城区",
            "371403": "陵城区",
            "371422": "宁津县",
            "371423": "庆云县",
            "371424": "临邑县",
            "371425": "齐河县",
            "371426": "平原县",
            "371427": "夏津县",
            "371428": "武城县",
            "371481": "乐陵市",
            "371482": "禹城市" } },


        "371500": {
          code: "371500",
          name: "聊城市",
          districts: {
            "371502": "东昌府区",
            "371521": "阳谷县",
            "371522": "莘县",
            "371523": "茌平县",
            "371524": "东阿县",
            "371525": "冠县",
            "371526": "高唐县",
            "371581": "临清市" } },


        "371600": {
          code: "371600",
          name: "滨州市",
          districts: {
            "371602": "滨城区",
            "371603": "沾化区",
            "371621": "惠民县",
            "371622": "阳信县",
            "371623": "无棣县",
            "371625": "博兴县",
            "371681": "邹平市" } },


        "371700": {
          code: "371700",
          name: "菏泽市",
          districts: {
            "371702": "牡丹区",
            "371703": "定陶区",
            "371721": "曹县",
            "371722": "单县",
            "371723": "成武县",
            "371724": "巨野县",
            "371725": "郓城县",
            "371726": "鄄城县",
            "371728": "东明县" } } } },




    "410000": {
      code: "410000",
      name: "河南省",
      cities: {
        "410100": {
          code: "410100",
          name: "郑州市",
          districts: {
            "410102": "中原区",
            "410103": "二七区",
            "410104": "管城回族区",
            "410105": "金水区",
            "410106": "上街区",
            "410108": "惠济区",
            "410122": "中牟县",
            "410181": "巩义市",
            "410182": "荥阳市",
            "410183": "新密市",
            "410184": "新郑市",
            "410185": "登封市" } },


        "410200": {
          code: "410200",
          name: "开封市",
          districts: {
            "410202": "龙亭区",
            "410203": "顺河回族区",
            "410204": "鼓楼区",
            "410205": "禹王台区",
            "410212": "祥符区",
            "410221": "杞县",
            "410222": "通许县",
            "410223": "尉氏县",
            "410225": "兰考县" } },


        "410300": {
          code: "410300",
          name: "洛阳市",
          districts: {
            "410302": "老城区",
            "410303": "西工区",
            "410304": "瀍河回族区",
            "410305": "涧西区",
            "410306": "吉利区",
            "410311": "洛龙区",
            "410322": "孟津县",
            "410323": "新安县",
            "410324": "栾川县",
            "410325": "嵩县",
            "410326": "汝阳县",
            "410327": "宜阳县",
            "410328": "洛宁县",
            "410329": "伊川县",
            "410381": "偃师市" } },


        "410400": {
          code: "410400",
          name: "平顶山市",
          districts: {
            "410402": "新华区",
            "410403": "卫东区",
            "410404": "石龙区",
            "410411": "湛河区",
            "410421": "宝丰县",
            "410422": "叶县",
            "410423": "鲁山县",
            "410425": "郏县",
            "410481": "舞钢市",
            "410482": "汝州市" } },


        "410500": {
          code: "410500",
          name: "安阳市",
          districts: {
            "410502": "文峰区",
            "410503": "北关区",
            "410505": "殷都区",
            "410506": "龙安区",
            "410522": "安阳县",
            "410523": "汤阴县",
            "410526": "滑县",
            "410527": "内黄县",
            "410581": "林州市" } },


        "410600": {
          code: "410600",
          name: "鹤壁市",
          districts: {
            "410602": "鹤山区",
            "410603": "山城区",
            "410611": "淇滨区",
            "410621": "浚县",
            "410622": "淇县" } },


        "410700": {
          code: "410700",
          name: "新乡市",
          districts: {
            "410702": "红旗区",
            "410703": "卫滨区",
            "410704": "凤泉区",
            "410711": "牧野区",
            "410721": "新乡县",
            "410724": "获嘉县",
            "410725": "原阳县",
            "410726": "延津县",
            "410727": "封丘县",
            "410728": "长垣县",
            "410781": "卫辉市",
            "410782": "辉县市" } },


        "410800": {
          code: "410800",
          name: "焦作市",
          districts: {
            "410802": "解放区",
            "410803": "中站区",
            "410804": "马村区",
            "410811": "山阳区",
            "410821": "修武县",
            "410822": "博爱县",
            "410823": "武陟县",
            "410825": "温县",
            "410882": "沁阳市",
            "410883": "孟州市" } },


        "410900": {
          code: "410900",
          name: "濮阳市",
          districts: {
            "410902": "华龙区",
            "410922": "清丰县",
            "410923": "南乐县",
            "410926": "范县",
            "410927": "台前县",
            "410928": "濮阳县" } },


        "411000": {
          code: "411000",
          name: "许昌市",
          districts: {
            "411002": "魏都区",
            "411003": "建安区",
            "411024": "鄢陵县",
            "411025": "襄城县",
            "411081": "禹州市",
            "411082": "长葛市" } },


        "411100": {
          code: "411100",
          name: "漯河市",
          districts: {
            "411102": "源汇区",
            "411103": "郾城区",
            "411104": "召陵区",
            "411121": "舞阳县",
            "411122": "临颍县" } },


        "411200": {
          code: "411200",
          name: "三门峡市",
          districts: {
            "411202": "湖滨区",
            "411203": "陕州区",
            "411221": "渑池县",
            "411224": "卢氏县",
            "411281": "义马市",
            "411282": "灵宝市" } },


        "411300": {
          code: "411300",
          name: "南阳市",
          districts: {
            "411302": "宛城区",
            "411303": "卧龙区",
            "411321": "南召县",
            "411322": "方城县",
            "411323": "西峡县",
            "411324": "镇平县",
            "411325": "内乡县",
            "411326": "淅川县",
            "411327": "社旗县",
            "411328": "唐河县",
            "411329": "新野县",
            "411330": "桐柏县",
            "411381": "邓州市" } },


        "411400": {
          code: "411400",
          name: "商丘市",
          districts: {
            "411402": "梁园区",
            "411403": "睢阳区",
            "411421": "民权县",
            "411422": "睢县",
            "411423": "宁陵县",
            "411424": "柘城县",
            "411425": "虞城县",
            "411426": "夏邑县",
            "411481": "永城市" } },


        "411500": {
          code: "411500",
          name: "信阳市",
          districts: {
            "411502": "浉河区",
            "411503": "平桥区",
            "411521": "罗山县",
            "411522": "光山县",
            "411523": "新县",
            "411524": "商城县",
            "411525": "固始县",
            "411526": "潢川县",
            "411527": "淮滨县",
            "411528": "息县" } },


        "411600": {
          code: "411600",
          name: "周口市",
          districts: {
            "411602": "川汇区",
            "411621": "扶沟县",
            "411622": "西华县",
            "411623": "商水县",
            "411624": "沈丘县",
            "411625": "郸城县",
            "411626": "淮阳县",
            "411627": "太康县",
            "411628": "鹿邑县",
            "411681": "项城市" } },


        "411700": {
          code: "411700",
          name: "驻马店市",
          districts: {
            "411702": "驿城区",
            "411721": "西平县",
            "411722": "上蔡县",
            "411723": "平舆县",
            "411724": "正阳县",
            "411725": "确山县",
            "411726": "泌阳县",
            "411727": "汝南县",
            "411728": "遂平县",
            "411729": "新蔡县" } } } },




    "420000": {
      code: "420000",
      name: "湖北省",
      cities: {
        "420100": {
          code: "420100",
          name: "武汉市",
          districts: {
            "420102": "江岸区",
            "420103": "江汉区",
            "420104": "硚口区",
            "420105": "汉阳区",
            "420106": "武昌区",
            "420107": "青山区",
            "420111": "洪山区",
            "420112": "东西湖区",
            "420113": "汉南区",
            "420114": "蔡甸区",
            "420115": "江夏区",
            "420116": "黄陂区",
            "420117": "新洲区" } },


        "420200": {
          code: "420200",
          name: "黄石市",
          districts: {
            "420202": "黄石港区",
            "420203": "西塞山区",
            "420204": "下陆区",
            "420205": "铁山区",
            "420222": "阳新县",
            "420281": "大冶市" } },


        "420300": {
          code: "420300",
          name: "十堰市",
          districts: {
            "420302": "茅箭区",
            "420303": "张湾区",
            "420304": "郧阳区",
            "420322": "郧西县",
            "420323": "竹山县",
            "420324": "竹溪县",
            "420325": "房县",
            "420381": "丹江口市" } },


        "420500": {
          code: "420500",
          name: "宜昌市",
          districts: {
            "420502": "西陵区",
            "420503": "伍家岗区",
            "420504": "点军区",
            "420505": "猇亭区",
            "420506": "夷陵区",
            "420525": "远安县",
            "420526": "兴山县",
            "420527": "秭归县",
            "420528": "长阳土家族自治县",
            "420529": "五峰土家族自治县",
            "420581": "宜都市",
            "420582": "当阳市",
            "420583": "枝江市" } },


        "420600": {
          code: "420600",
          name: "襄阳市",
          districts: {
            "420602": "襄城区",
            "420606": "樊城区",
            "420607": "襄州区",
            "420624": "南漳县",
            "420625": "谷城县",
            "420626": "保康县",
            "420682": "老河口市",
            "420683": "枣阳市",
            "420684": "宜城市" } },


        "420700": {
          code: "420700",
          name: "鄂州市",
          districts: {
            "420702": "梁子湖区",
            "420703": "华容区",
            "420704": "鄂城区" } },


        "420800": {
          code: "420800",
          name: "荆门市",
          districts: {
            "420802": "东宝区",
            "420804": "掇刀区",
            "420822": "沙洋县",
            "420881": "钟祥市",
            "420882": "京山市" } },


        "420900": {
          code: "420900",
          name: "孝感市",
          districts: {
            "420902": "孝南区",
            "420921": "孝昌县",
            "420922": "大悟县",
            "420923": "云梦县",
            "420981": "应城市",
            "420982": "安陆市",
            "420984": "汉川市" } },


        "421000": {
          code: "421000",
          name: "荆州市",
          districts: {
            "421002": "沙市区",
            "421003": "荆州区",
            "421022": "公安县",
            "421023": "监利县",
            "421024": "江陵县",
            "421081": "石首市",
            "421083": "洪湖市",
            "421087": "松滋市" } },


        "421100": {
          code: "421100",
          name: "黄冈市",
          districts: {
            "421102": "黄州区",
            "421121": "团风县",
            "421122": "红安县",
            "421123": "罗田县",
            "421124": "英山县",
            "421125": "浠水县",
            "421126": "蕲春县",
            "421127": "黄梅县",
            "421181": "麻城市",
            "421182": "武穴市" } },


        "421200": {
          code: "421200",
          name: "咸宁市",
          districts: {
            "421202": "咸安区",
            "421221": "嘉鱼县",
            "421222": "通城县",
            "421223": "崇阳县",
            "421224": "通山县",
            "421281": "赤壁市" } },


        "421300": {
          code: "421300",
          name: "随州市",
          districts: {
            "421303": "曾都区",
            "421321": "随县",
            "421381": "广水市" } },


        "422800": {
          code: "422800",
          name: "恩施土家族苗族自治州",
          districts: {
            "422801": "恩施市",
            "422802": "利川市",
            "422822": "建始县",
            "422823": "巴东县",
            "422825": "宣恩县",
            "422826": "咸丰县",
            "422827": "来凤县",
            "422828": "鹤峰县" } } } },




    "430000": {
      code: "430000",
      name: "湖南省",
      cities: {
        "430100": {
          code: "430100",
          name: "长沙市",
          districts: {
            "430102": "芙蓉区",
            "430103": "天心区",
            "430104": "岳麓区",
            "430105": "开福区",
            "430111": "雨花区",
            "430112": "望城区",
            "430121": "长沙县",
            "430181": "浏阳市",
            "430182": "宁乡市" } },


        "430200": {
          code: "430200",
          name: "株洲市",
          districts: {
            "430202": "荷塘区",
            "430203": "芦淞区",
            "430204": "石峰区",
            "430211": "天元区",
            "430212": "渌口区",
            "430223": "攸县",
            "430224": "茶陵县",
            "430225": "炎陵县",
            "430281": "醴陵市" } },


        "430300": {
          code: "430300",
          name: "湘潭市",
          districts: {
            "430302": "雨湖区",
            "430304": "岳塘区",
            "430321": "湘潭县",
            "430381": "湘乡市",
            "430382": "韶山市" } },


        "430400": {
          code: "430400",
          name: "衡阳市",
          districts: {
            "430405": "珠晖区",
            "430406": "雁峰区",
            "430407": "石鼓区",
            "430408": "蒸湘区",
            "430412": "南岳区",
            "430421": "衡阳县",
            "430422": "衡南县",
            "430423": "衡山县",
            "430424": "衡东县",
            "430426": "祁东县",
            "430481": "耒阳市",
            "430482": "常宁市" } },


        "430500": {
          code: "430500",
          name: "邵阳市",
          districts: {
            "430502": "双清区",
            "430503": "大祥区",
            "430511": "北塔区",
            "430521": "邵东县",
            "430522": "新邵县",
            "430523": "邵阳县",
            "430524": "隆回县",
            "430525": "洞口县",
            "430527": "绥宁县",
            "430528": "新宁县",
            "430529": "城步苗族自治县",
            "430581": "武冈市" } },


        "430600": {
          code: "430600",
          name: "岳阳市",
          districts: {
            "430602": "岳阳楼区",
            "430603": "云溪区",
            "430611": "君山区",
            "430621": "岳阳县",
            "430623": "华容县",
            "430624": "湘阴县",
            "430626": "平江县",
            "430681": "汨罗市",
            "430682": "临湘市" } },


        "430700": {
          code: "430700",
          name: "常德市",
          districts: {
            "430702": "武陵区",
            "430703": "鼎城区",
            "430721": "安乡县",
            "430722": "汉寿县",
            "430723": "澧县",
            "430724": "临澧县",
            "430725": "桃源县",
            "430726": "石门县",
            "430781": "津市市" } },


        "430800": {
          code: "430800",
          name: "张家界市",
          districts: {
            "430802": "永定区",
            "430811": "武陵源区",
            "430821": "慈利县",
            "430822": "桑植县" } },


        "430900": {
          code: "430900",
          name: "益阳市",
          districts: {
            "430902": "资阳区",
            "430903": "赫山区",
            "430921": "南县",
            "430922": "桃江县",
            "430923": "安化县",
            "430981": "沅江市" } },


        "431000": {
          code: "431000",
          name: "郴州市",
          districts: {
            "431002": "北湖区",
            "431003": "苏仙区",
            "431021": "桂阳县",
            "431022": "宜章县",
            "431023": "永兴县",
            "431024": "嘉禾县",
            "431025": "临武县",
            "431026": "汝城县",
            "431027": "桂东县",
            "431028": "安仁县",
            "431081": "资兴市" } },


        "431100": {
          code: "431100",
          name: "永州市",
          districts: {
            "431102": "零陵区",
            "431103": "冷水滩区",
            "431121": "祁阳县",
            "431122": "东安县",
            "431123": "双牌县",
            "431124": "道县",
            "431125": "江永县",
            "431126": "宁远县",
            "431127": "蓝山县",
            "431128": "新田县",
            "431129": "江华瑶族自治县" } },


        "431200": {
          code: "431200",
          name: "怀化市",
          districts: {
            "431202": "鹤城区",
            "431221": "中方县",
            "431222": "沅陵县",
            "431223": "辰溪县",
            "431224": "溆浦县",
            "431225": "会同县",
            "431226": "麻阳苗族自治县",
            "431227": "新晃侗族自治县",
            "431228": "芷江侗族自治县",
            "431229": "靖州苗族侗族自治县",
            "431230": "通道侗族自治县",
            "431281": "洪江市" } },


        "431300": {
          code: "431300",
          name: "娄底市",
          districts: {
            "431302": "娄星区",
            "431321": "双峰县",
            "431322": "新化县",
            "431381": "冷水江市",
            "431382": "涟源市" } },


        "433100": {
          code: "433100",
          name: "湘西土家族苗族自治州",
          districts: {
            "433101": "吉首市",
            "433122": "泸溪县",
            "433123": "凤凰县",
            "433124": "花垣县",
            "433125": "保靖县",
            "433126": "古丈县",
            "433127": "永顺县",
            "433130": "龙山县" } } } },




    "440000": {
      code: "440000",
      name: "广东省",
      cities: {
        "440100": {
          code: "440100",
          name: "广州市",
          districts: {
            "440103": "荔湾区",
            "440104": "越秀区",
            "440105": "海珠区",
            "440106": "天河区",
            "440111": "白云区",
            "440112": "黄埔区",
            "440113": "番禺区",
            "440114": "花都区",
            "440115": "南沙区",
            "440117": "从化区",
            "440118": "增城区" } },


        "440200": {
          code: "440200",
          name: "韶关市",
          districts: {
            "440203": "武江区",
            "440204": "浈江区",
            "440205": "曲江区",
            "440222": "始兴县",
            "440224": "仁化县",
            "440229": "翁源县",
            "440232": "乳源瑶族自治县",
            "440233": "新丰县",
            "440281": "乐昌市",
            "440282": "南雄市" } },


        "440300": {
          code: "440300",
          name: "深圳市",
          districts: {
            "440303": "罗湖区",
            "440304": "福田区",
            "440305": "南山区",
            "440306": "宝安区",
            "440307": "龙岗区",
            "440308": "盐田区",
            "440309": "龙华区",
            "440310": "坪山区",
            "440311": "光明区" } },


        "440400": {
          code: "440400",
          name: "珠海市",
          districts: {
            "440402": "香洲区",
            "440403": "斗门区",
            "440404": "金湾区" } },


        "440500": {
          code: "440500",
          name: "汕头市",
          districts: {
            "440507": "龙湖区",
            "440511": "金平区",
            "440512": "濠江区",
            "440513": "潮阳区",
            "440514": "潮南区",
            "440515": "澄海区",
            "440523": "南澳县" } },


        "440600": {
          code: "440600",
          name: "佛山市",
          districts: {
            "440604": "禅城区",
            "440605": "南海区",
            "440606": "顺德区",
            "440607": "三水区",
            "440608": "高明区" } },


        "440700": {
          code: "440700",
          name: "江门市",
          districts: {
            "440703": "蓬江区",
            "440704": "江海区",
            "440705": "新会区",
            "440781": "台山市",
            "440783": "开平市",
            "440784": "鹤山市",
            "440785": "恩平市" } },


        "440800": {
          code: "440800",
          name: "湛江市",
          districts: {
            "440802": "赤坎区",
            "440803": "霞山区",
            "440804": "坡头区",
            "440811": "麻章区",
            "440823": "遂溪县",
            "440825": "徐闻县",
            "440881": "廉江市",
            "440882": "雷州市",
            "440883": "吴川市" } },


        "440900": {
          code: "440900",
          name: "茂名市",
          districts: {
            "440902": "茂南区",
            "440904": "电白区",
            "440981": "高州市",
            "440982": "化州市",
            "440983": "信宜市" } },


        "441200": {
          code: "441200",
          name: "肇庆市",
          districts: {
            "441202": "端州区",
            "441203": "鼎湖区",
            "441204": "高要区",
            "441223": "广宁县",
            "441224": "怀集县",
            "441225": "封开县",
            "441226": "德庆县",
            "441284": "四会市" } },


        "441300": {
          code: "441300",
          name: "惠州市",
          districts: {
            "441302": "惠城区",
            "441303": "惠阳区",
            "441322": "博罗县",
            "441323": "惠东县",
            "441324": "龙门县" } },


        "441400": {
          code: "441400",
          name: "梅州市",
          districts: {
            "441402": "梅江区",
            "441403": "梅县区",
            "441422": "大埔县",
            "441423": "丰顺县",
            "441424": "五华县",
            "441426": "平远县",
            "441427": "蕉岭县",
            "441481": "兴宁市" } },


        "441500": {
          code: "441500",
          name: "汕尾市",
          districts: {
            "441502": "城区",
            "441521": "海丰县",
            "441523": "陆河县",
            "441581": "陆丰市" } },


        "441600": {
          code: "441600",
          name: "河源市",
          districts: {
            "441602": "源城区",
            "441621": "紫金县",
            "441622": "龙川县",
            "441623": "连平县",
            "441624": "和平县",
            "441625": "东源县" } },


        "441700": {
          code: "441700",
          name: "阳江市",
          districts: {
            "441702": "江城区",
            "441704": "阳东区",
            "441721": "阳西县",
            "441781": "阳春市" } },


        "441800": {
          code: "441800",
          name: "清远市",
          districts: {
            "441802": "清城区",
            "441803": "清新区",
            "441821": "佛冈县",
            "441823": "阳山县",
            "441825": "连山壮族瑶族自治县",
            "441826": "连南瑶族自治县",
            "441881": "英德市",
            "441882": "连州市" } },


        "441900": {
          code: "441900",
          name: "东莞市",
          districts: {} },


        "442000": {
          code: "442000",
          name: "中山市",
          districts: {} },


        "445100": {
          code: "445100",
          name: "潮州市",
          districts: {
            "445102": "湘桥区",
            "445103": "潮安区",
            "445122": "饶平县" } },


        "445200": {
          code: "445200",
          name: "揭阳市",
          districts: {
            "445202": "榕城区",
            "445203": "揭东区",
            "445222": "揭西县",
            "445224": "惠来县",
            "445281": "普宁市" } },


        "445300": {
          code: "445300",
          name: "云浮市",
          districts: {
            "445302": "云城区",
            "445303": "云安区",
            "445321": "新兴县",
            "445322": "郁南县",
            "445381": "罗定市" } } } },




    "450000": {
      code: "450000",
      name: "广西壮族自治区",
      cities: {
        "450100": {
          code: "450100",
          name: "南宁市",
          districts: {
            "450102": "兴宁区",
            "450103": "青秀区",
            "450105": "江南区",
            "450107": "西乡塘区",
            "450108": "良庆区",
            "450109": "邕宁区",
            "450110": "武鸣区",
            "450123": "隆安县",
            "450124": "马山县",
            "450125": "上林县",
            "450126": "宾阳县",
            "450127": "横县" } },


        "450200": {
          code: "450200",
          name: "柳州市",
          districts: {
            "450202": "城中区",
            "450203": "鱼峰区",
            "450204": "柳南区",
            "450205": "柳北区",
            "450206": "柳江区",
            "450222": "柳城县",
            "450223": "鹿寨县",
            "450224": "融安县",
            "450225": "融水苗族自治县",
            "450226": "三江侗族自治县" } },


        "450300": {
          code: "450300",
          name: "桂林市",
          districts: {
            "450302": "秀峰区",
            "450303": "叠彩区",
            "450304": "象山区",
            "450305": "七星区",
            "450311": "雁山区",
            "450312": "临桂区",
            "450321": "阳朔县",
            "450323": "灵川县",
            "450324": "全州县",
            "450325": "兴安县",
            "450326": "永福县",
            "450327": "灌阳县",
            "450328": "龙胜各族自治县",
            "450329": "资源县",
            "450330": "平乐县",
            "450332": "恭城瑶族自治县",
            "450381": "荔浦市" } },


        "450400": {
          code: "450400",
          name: "梧州市",
          districts: {
            "450403": "万秀区",
            "450405": "长洲区",
            "450406": "龙圩区",
            "450421": "苍梧县",
            "450422": "藤县",
            "450423": "蒙山县",
            "450481": "岑溪市" } },


        "450500": {
          code: "450500",
          name: "北海市",
          districts: {
            "450502": "海城区",
            "450503": "银海区",
            "450512": "铁山港区",
            "450521": "合浦县" } },


        "450600": {
          code: "450600",
          name: "防城港市",
          districts: {
            "450602": "港口区",
            "450603": "防城区",
            "450621": "上思县",
            "450681": "东兴市" } },


        "450700": {
          code: "450700",
          name: "钦州市",
          districts: {
            "450702": "钦南区",
            "450703": "钦北区",
            "450721": "灵山县",
            "450722": "浦北县" } },


        "450800": {
          code: "450800",
          name: "贵港市",
          districts: {
            "450802": "港北区",
            "450803": "港南区",
            "450804": "覃塘区",
            "450821": "平南县",
            "450881": "桂平市" } },


        "450900": {
          code: "450900",
          name: "玉林市",
          districts: {
            "450902": "玉州区",
            "450903": "福绵区",
            "450921": "容县",
            "450922": "陆川县",
            "450923": "博白县",
            "450924": "兴业县",
            "450981": "北流市" } },


        "451000": {
          code: "451000",
          name: "百色市",
          districts: {
            "451002": "右江区",
            "451021": "田阳县",
            "451022": "田东县",
            "451023": "平果县",
            "451024": "德保县",
            "451026": "那坡县",
            "451027": "凌云县",
            "451028": "乐业县",
            "451029": "田林县",
            "451030": "西林县",
            "451031": "隆林各族自治县",
            "451081": "靖西市" } },


        "451100": {
          code: "451100",
          name: "贺州市",
          districts: {
            "451102": "八步区",
            "451103": "平桂区",
            "451121": "昭平县",
            "451122": "钟山县",
            "451123": "富川瑶族自治县" } },


        "451200": {
          code: "451200",
          name: "河池市",
          districts: {
            "451202": "金城江区",
            "451203": "宜州区",
            "451221": "南丹县",
            "451222": "天峨县",
            "451223": "凤山县",
            "451224": "东兰县",
            "451225": "罗城仫佬族自治县",
            "451226": "环江毛南族自治县",
            "451227": "巴马瑶族自治县",
            "451228": "都安瑶族自治县",
            "451229": "大化瑶族自治县" } },


        "451300": {
          code: "451300",
          name: "来宾市",
          districts: {
            "451302": "兴宾区",
            "451321": "忻城县",
            "451322": "象州县",
            "451323": "武宣县",
            "451324": "金秀瑶族自治县",
            "451381": "合山市" } },


        "451400": {
          code: "451400",
          name: "崇左市",
          districts: {
            "451402": "江州区",
            "451421": "扶绥县",
            "451422": "宁明县",
            "451423": "龙州县",
            "451424": "大新县",
            "451425": "天等县",
            "451481": "凭祥市" } } } },




    "460000": {
      code: "460000",
      name: "海南省",
      cities: {
        "460100": {
          code: "460100",
          name: "海口市",
          districts: {
            "460105": "秀英区",
            "460106": "龙华区",
            "460107": "琼山区",
            "460108": "美兰区" } },


        "460200": {
          code: "460200",
          name: "三亚市",
          districts: {
            "460202": "海棠区",
            "460203": "吉阳区",
            "460204": "天涯区",
            "460205": "崖州区" } },


        "460300": {
          code: "460300",
          name: "三沙市",
          districts: {
            "460321": "西沙群岛",
            "460322": "南沙群岛",
            "460323": "中沙群岛的岛礁及其海域",
            "460324": "永乐群岛" } },


        "460400": {
          code: "460400",
          name: "儋州市",
          districts: {} } } },




    "500000": {
      code: "500000",
      name: "重庆市",
      cities: {
        "500000": {
          code: "500000",
          name: "重庆市",
          districts: {
            "500101": "万州区",
            "500102": "涪陵区",
            "500103": "渝中区",
            "500104": "大渡口区",
            "500105": "江北区",
            "500106": "沙坪坝区",
            "500107": "九龙坡区",
            "500108": "南岸区",
            "500109": "北碚区",
            "500110": "綦江区",
            "500111": "大足区",
            "500112": "渝北区",
            "500113": "巴南区",
            "500114": "黔江区",
            "500115": "长寿区",
            "500116": "江津区",
            "500117": "合川区",
            "500118": "永川区",
            "500119": "南川区",
            "500120": "璧山区",
            "500151": "铜梁区",
            "500152": "潼南区",
            "500153": "荣昌区",
            "500154": "开州区",
            "500155": "梁平区",
            "500156": "武隆区",
            "500229": "城口县",
            "500230": "丰都县",
            "500231": "垫江县",
            "500233": "忠县",
            "500235": "云阳县",
            "500236": "奉节县",
            "500237": "巫山县",
            "500238": "巫溪县",
            "500240": "石柱土家族自治县",
            "500241": "秀山土家族苗族自治县",
            "500242": "酉阳土家族苗族自治县",
            "500243": "彭水苗族土家族自治县" } } } },




    "510000": {
      code: "510000",
      name: "四川省",
      cities: {
        "510100": {
          code: "510100",
          name: "成都市",
          districts: {
            "510104": "锦江区",
            "510105": "青羊区",
            "510106": "金牛区",
            "510107": "武侯区",
            "510108": "成华区",
            "510112": "龙泉驿区",
            "510113": "青白江区",
            "510114": "新都区",
            "510115": "温江区",
            "510116": "双流区",
            "510117": "郫都区",
            "510121": "金堂县",
            "510129": "大邑县",
            "510131": "蒲江县",
            "510132": "新津县",
            "510181": "都江堰市",
            "510182": "彭州市",
            "510183": "邛崃市",
            "510184": "崇州市",
            "510185": "简阳市" } },


        "510300": {
          code: "510300",
          name: "自贡市",
          districts: {
            "510302": "自流井区",
            "510303": "贡井区",
            "510304": "大安区",
            "510311": "沿滩区",
            "510321": "荣县",
            "510322": "富顺县" } },


        "510400": {
          code: "510400",
          name: "攀枝花市",
          districts: {
            "510402": "东区",
            "510403": "西区",
            "510411": "仁和区",
            "510421": "米易县",
            "510422": "盐边县" } },


        "510500": {
          code: "510500",
          name: "泸州市",
          districts: {
            "510502": "江阳区",
            "510503": "纳溪区",
            "510504": "龙马潭区",
            "510521": "泸县",
            "510522": "合江县",
            "510524": "叙永县",
            "510525": "古蔺县" } },


        "510600": {
          code: "510600",
          name: "德阳市",
          districts: {
            "510603": "旌阳区",
            "510604": "罗江区",
            "510623": "中江县",
            "510681": "广汉市",
            "510682": "什邡市",
            "510683": "绵竹市" } },


        "510700": {
          code: "510700",
          name: "绵阳市",
          districts: {
            "510703": "涪城区",
            "510704": "游仙区",
            "510705": "安州区",
            "510722": "三台县",
            "510723": "盐亭县",
            "510725": "梓潼县",
            "510726": "北川羌族自治县",
            "510727": "平武县",
            "510781": "江油市" } },


        "510800": {
          code: "510800",
          name: "广元市",
          districts: {
            "510802": "利州区",
            "510811": "昭化区",
            "510812": "朝天区",
            "510821": "旺苍县",
            "510822": "青川县",
            "510823": "剑阁县",
            "510824": "苍溪县" } },


        "510900": {
          code: "510900",
          name: "遂宁市",
          districts: {
            "510903": "船山区",
            "510904": "安居区",
            "510921": "蓬溪县",
            "510922": "射洪县",
            "510923": "大英县" } },


        "511000": {
          code: "511000",
          name: "内江市",
          districts: {
            "511002": "市中区",
            "511011": "东兴区",
            "511024": "威远县",
            "511025": "资中县",
            "511083": "隆昌市" } },


        "511100": {
          code: "511100",
          name: "乐山市",
          districts: {
            "511102": "市中区",
            "511111": "沙湾区",
            "511112": "五通桥区",
            "511113": "金口河区",
            "511123": "犍为县",
            "511124": "井研县",
            "511126": "夹江县",
            "511129": "沐川县",
            "511132": "峨边彝族自治县",
            "511133": "马边彝族自治县",
            "511181": "峨眉山市" } },


        "511300": {
          code: "511300",
          name: "南充市",
          districts: {
            "511302": "顺庆区",
            "511303": "高坪区",
            "511304": "嘉陵区",
            "511321": "南部县",
            "511322": "营山县",
            "511323": "蓬安县",
            "511324": "仪陇县",
            "511325": "西充县",
            "511381": "阆中市" } },


        "511400": {
          code: "511400",
          name: "眉山市",
          districts: {
            "511402": "东坡区",
            "511403": "彭山区",
            "511421": "仁寿县",
            "511423": "洪雅县",
            "511424": "丹棱县",
            "511425": "青神县" } },


        "511500": {
          code: "511500",
          name: "宜宾市",
          districts: {
            "511502": "翠屏区",
            "511503": "南溪区",
            "511504": "叙州区",
            "511523": "江安县",
            "511524": "长宁县",
            "511525": "高县",
            "511526": "珙县",
            "511527": "筠连县",
            "511528": "兴文县",
            "511529": "屏山县" } },


        "511600": {
          code: "511600",
          name: "广安市",
          districts: {
            "511602": "广安区",
            "511603": "前锋区",
            "511621": "岳池县",
            "511622": "武胜县",
            "511623": "邻水县",
            "511681": "华蓥市" } },


        "511700": {
          code: "511700",
          name: "达州市",
          districts: {
            "511702": "通川区",
            "511703": "达川区",
            "511722": "宣汉县",
            "511723": "开江县",
            "511724": "大竹县",
            "511725": "渠县",
            "511781": "万源市" } },


        "511800": {
          code: "511800",
          name: "雅安市",
          districts: {
            "511802": "雨城区",
            "511803": "名山区",
            "511822": "荥经县",
            "511823": "汉源县",
            "511824": "石棉县",
            "511825": "天全县",
            "511826": "芦山县",
            "511827": "宝兴县" } },


        "511900": {
          code: "511900",
          name: "巴中市",
          districts: {
            "511902": "巴州区",
            "511903": "恩阳区",
            "511921": "通江县",
            "511922": "南江县",
            "511923": "平昌县" } },


        "512000": {
          code: "512000",
          name: "资阳市",
          districts: {
            "512002": "雁江区",
            "512021": "安岳县",
            "512022": "乐至县" } },


        "513200": {
          code: "513200",
          name: "阿坝藏族羌族自治州",
          districts: {
            "513201": "马尔康市",
            "513221": "汶川县",
            "513222": "理县",
            "513223": "茂县",
            "513224": "松潘县",
            "513225": "九寨沟县",
            "513226": "金川县",
            "513227": "小金县",
            "513228": "黑水县",
            "513230": "壤塘县",
            "513231": "阿坝县",
            "513232": "若尔盖县",
            "513233": "红原县" } },


        "513300": {
          code: "513300",
          name: "甘孜藏族自治州",
          districts: {
            "513301": "康定市",
            "513322": "泸定县",
            "513323": "丹巴县",
            "513324": "九龙县",
            "513325": "雅江县",
            "513326": "道孚县",
            "513327": "炉霍县",
            "513328": "甘孜县",
            "513329": "新龙县",
            "513330": "德格县",
            "513331": "白玉县",
            "513332": "石渠县",
            "513333": "色达县",
            "513334": "理塘县",
            "513335": "巴塘县",
            "513336": "乡城县",
            "513337": "稻城县",
            "513338": "得荣县" } },


        "513400": {
          code: "513400",
          name: "凉山彝族自治州",
          districts: {
            "513401": "西昌市",
            "513422": "木里藏族自治县",
            "513423": "盐源县",
            "513424": "德昌县",
            "513425": "会理县",
            "513426": "会东县",
            "513427": "宁南县",
            "513428": "普格县",
            "513429": "布拖县",
            "513430": "金阳县",
            "513431": "昭觉县",
            "513432": "喜德县",
            "513433": "冕宁县",
            "513434": "越西县",
            "513435": "甘洛县",
            "513436": "美姑县",
            "513437": "雷波县" } } } },




    "520000": {
      code: "520000",
      name: "贵州省",
      cities: {
        "520100": {
          code: "520100",
          name: "贵阳市",
          districts: {
            "520102": "南明区",
            "520103": "云岩区",
            "520111": "花溪区",
            "520112": "乌当区",
            "520113": "白云区",
            "520115": "观山湖区",
            "520121": "开阳县",
            "520122": "息烽县",
            "520123": "修文县",
            "520181": "清镇市" } },


        "520200": {
          code: "520200",
          name: "六盘水市",
          districts: {
            "520201": "钟山区",
            "520203": "六枝特区",
            "520221": "水城县",
            "520281": "盘州市" } },


        "520300": {
          code: "520300",
          name: "遵义市",
          districts: {
            "520302": "红花岗区",
            "520303": "汇川区",
            "520304": "播州区",
            "520322": "桐梓县",
            "520323": "绥阳县",
            "520324": "正安县",
            "520325": "道真仡佬族苗族自治县",
            "520326": "务川仡佬族苗族自治县",
            "520327": "凤冈县",
            "520328": "湄潭县",
            "520329": "余庆县",
            "520330": "习水县",
            "520381": "赤水市",
            "520382": "仁怀市" } },


        "520400": {
          code: "520400",
          name: "安顺市",
          districts: {
            "520402": "西秀区",
            "520403": "平坝区",
            "520422": "普定县",
            "520423": "镇宁布依族苗族自治县",
            "520424": "关岭布依族苗族自治县",
            "520425": "紫云苗族布依族自治县" } },


        "520500": {
          code: "520500",
          name: "毕节市",
          districts: {
            "520502": "七星关区",
            "520521": "大方县",
            "520522": "黔西县",
            "520523": "金沙县",
            "520524": "织金县",
            "520525": "纳雍县",
            "520526": "威宁彝族回族苗族自治县",
            "520527": "赫章县" } },


        "520600": {
          code: "520600",
          name: "铜仁市",
          districts: {
            "520602": "碧江区",
            "520603": "万山区",
            "520621": "江口县",
            "520622": "玉屏侗族自治县",
            "520623": "石阡县",
            "520624": "思南县",
            "520625": "印江土家族苗族自治县",
            "520626": "德江县",
            "520627": "沿河土家族自治县",
            "520628": "松桃苗族自治县" } },


        "522300": {
          code: "522300",
          name: "黔西南布依族苗族自治州",
          districts: {
            "522301": "兴义市",
            "522302": "兴仁市",
            "522323": "普安县",
            "522324": "晴隆县",
            "522325": "贞丰县",
            "522326": "望谟县",
            "522327": "册亨县",
            "522328": "安龙县" } },


        "522600": {
          code: "522600",
          name: "黔东南苗族侗族自治州",
          districts: {
            "522601": "凯里市",
            "522622": "黄平县",
            "522623": "施秉县",
            "522624": "三穗县",
            "522625": "镇远县",
            "522626": "岑巩县",
            "522627": "天柱县",
            "522628": "锦屏县",
            "522629": "剑河县",
            "522630": "台江县",
            "522631": "黎平县",
            "522632": "榕江县",
            "522633": "从江县",
            "522634": "雷山县",
            "522635": "麻江县",
            "522636": "丹寨县" } },


        "522700": {
          code: "522700",
          name: "黔南布依族苗族自治州",
          districts: {
            "522701": "都匀市",
            "522702": "福泉市",
            "522722": "荔波县",
            "522723": "贵定县",
            "522725": "瓮安县",
            "522726": "独山县",
            "522727": "平塘县",
            "522728": "罗甸县",
            "522729": "长顺县",
            "522730": "龙里县",
            "522731": "惠水县",
            "522732": "三都水族自治县" } } } },




    "530000": {
      code: "530000",
      name: "云南省",
      cities: {
        "530100": {
          code: "530100",
          name: "昆明市",
          districts: {
            "530102": "五华区",
            "530103": "盘龙区",
            "530111": "官渡区",
            "530112": "西山区",
            "530113": "东川区",
            "530114": "呈贡区",
            "530115": "晋宁区",
            "530124": "富民县",
            "530125": "宜良县",
            "530126": "石林彝族自治县",
            "530127": "嵩明县",
            "530128": "禄劝彝族苗族自治县",
            "530129": "寻甸回族彝族自治县",
            "530181": "安宁市" } },


        "530300": {
          code: "530300",
          name: "曲靖市",
          districts: {
            "530302": "麒麟区",
            "530303": "沾益区",
            "530304": "马龙区",
            "530322": "陆良县",
            "530323": "师宗县",
            "530324": "罗平县",
            "530325": "富源县",
            "530326": "会泽县",
            "530381": "宣威市" } },


        "530400": {
          code: "530400",
          name: "玉溪市",
          districts: {
            "530402": "红塔区",
            "530403": "江川区",
            "530422": "澄江县",
            "530423": "通海县",
            "530424": "华宁县",
            "530425": "易门县",
            "530426": "峨山彝族自治县",
            "530427": "新平彝族傣族自治县",
            "530428": "元江哈尼族彝族傣族自治县" } },


        "530500": {
          code: "530500",
          name: "保山市",
          districts: {
            "530502": "隆阳区",
            "530521": "施甸县",
            "530523": "龙陵县",
            "530524": "昌宁县",
            "530581": "腾冲市" } },


        "530600": {
          code: "530600",
          name: "昭通市",
          districts: {
            "530602": "昭阳区",
            "530621": "鲁甸县",
            "530622": "巧家县",
            "530623": "盐津县",
            "530624": "大关县",
            "530625": "永善县",
            "530626": "绥江县",
            "530627": "镇雄县",
            "530628": "彝良县",
            "530629": "威信县",
            "530681": "水富市" } },


        "530700": {
          code: "530700",
          name: "丽江市",
          districts: {
            "530702": "古城区",
            "530721": "玉龙纳西族自治县",
            "530722": "永胜县",
            "530723": "华坪县",
            "530724": "宁蒗彝族自治县" } },


        "530800": {
          code: "530800",
          name: "普洱市",
          districts: {
            "530802": "思茅区",
            "530821": "宁洱哈尼族彝族自治县",
            "530822": "墨江哈尼族自治县",
            "530823": "景东彝族自治县",
            "530824": "景谷傣族彝族自治县",
            "530825": "镇沅彝族哈尼族拉祜族自治县",
            "530826": "江城哈尼族彝族自治县",
            "530827": "孟连傣族拉祜族佤族自治县",
            "530828": "澜沧拉祜族自治县",
            "530829": "西盟佤族自治县" } },


        "530900": {
          code: "530900",
          name: "临沧市",
          districts: {
            "530902": "临翔区",
            "530921": "凤庆县",
            "530922": "云县",
            "530923": "永德县",
            "530924": "镇康县",
            "530925": "双江拉祜族佤族布朗族傣族自治县",
            "530926": "耿马傣族佤族自治县",
            "530927": "沧源佤族自治县" } },


        "532300": {
          code: "532300",
          name: "楚雄彝族自治州",
          districts: {
            "532301": "楚雄市",
            "532322": "双柏县",
            "532323": "牟定县",
            "532324": "南华县",
            "532325": "姚安县",
            "532326": "大姚县",
            "532327": "永仁县",
            "532328": "元谋县",
            "532329": "武定县",
            "532331": "禄丰县" } },


        "532500": {
          code: "532500",
          name: "红河哈尼族彝族自治州",
          districts: {
            "532501": "个旧市",
            "532502": "开远市",
            "532503": "蒙自市",
            "532504": "弥勒市",
            "532523": "屏边苗族自治县",
            "532524": "建水县",
            "532525": "石屏县",
            "532527": "泸西县",
            "532528": "元阳县",
            "532529": "红河县",
            "532530": "金平苗族瑶族傣族自治县",
            "532531": "绿春县",
            "532532": "河口瑶族自治县" } },


        "532600": {
          code: "532600",
          name: "文山壮族苗族自治州",
          districts: {
            "532601": "文山市",
            "532622": "砚山县",
            "532623": "西畴县",
            "532624": "麻栗坡县",
            "532625": "马关县",
            "532626": "丘北县",
            "532627": "广南县",
            "532628": "富宁县" } },


        "532800": {
          code: "532800",
          name: "西双版纳傣族自治州",
          districts: {
            "532801": "景洪市",
            "532822": "勐海县",
            "532823": "勐腊县" } },


        "532900": {
          code: "532900",
          name: "大理白族自治州",
          districts: {
            "532901": "大理市",
            "532922": "漾濞彝族自治县",
            "532923": "祥云县",
            "532924": "宾川县",
            "532925": "弥渡县",
            "532926": "南涧彝族自治县",
            "532927": "巍山彝族回族自治县",
            "532928": "永平县",
            "532929": "云龙县",
            "532930": "洱源县",
            "532931": "剑川县",
            "532932": "鹤庆县" } },


        "533100": {
          code: "533100",
          name: "德宏傣族景颇族自治州",
          districts: {
            "533102": "瑞丽市",
            "533103": "芒市",
            "533122": "梁河县",
            "533123": "盈江县",
            "533124": "陇川县" } },


        "533300": {
          code: "533300",
          name: "怒江傈僳族自治州",
          districts: {
            "533301": "泸水市",
            "533323": "福贡县",
            "533324": "贡山独龙族怒族自治县",
            "533325": "兰坪白族普米族自治县" } },


        "533400": {
          code: "533400",
          name: "迪庆藏族自治州",
          districts: {
            "533401": "香格里拉市",
            "533422": "德钦县",
            "533423": "维西傈僳族自治县" } } } },




    "540000": {
      code: "540000",
      name: "西藏自治区",
      cities: {
        "540100": {
          code: "540100",
          name: "拉萨市",
          districts: {
            "540102": "城关区",
            "540103": "堆龙德庆区",
            "540104": "达孜区",
            "540121": "林周县",
            "540122": "当雄县",
            "540123": "尼木县",
            "540124": "曲水县",
            "540127": "墨竹工卡县" } },


        "540200": {
          code: "540200",
          name: "日喀则市",
          districts: {
            "540202": "桑珠孜区",
            "540221": "南木林县",
            "540222": "江孜县",
            "540223": "定日县",
            "540224": "萨迦县",
            "540225": "拉孜县",
            "540226": "昂仁县",
            "540227": "谢通门县",
            "540228": "白朗县",
            "540229": "仁布县",
            "540230": "康马县",
            "540231": "定结县",
            "540232": "仲巴县",
            "540233": "亚东县",
            "540234": "吉隆县",
            "540235": "聂拉木县",
            "540236": "萨嘎县",
            "540237": "岗巴县" } },


        "540300": {
          code: "540300",
          name: "昌都市",
          districts: {
            "540302": "卡若区",
            "540321": "江达县",
            "540322": "贡觉县",
            "540323": "类乌齐县",
            "540324": "丁青县",
            "540325": "察雅县",
            "540326": "八宿县",
            "540327": "左贡县",
            "540328": "芒康县",
            "540329": "洛隆县",
            "540330": "边坝县" } },


        "540400": {
          code: "540400",
          name: "林芝市",
          districts: {
            "540402": "巴宜区",
            "540421": "工布江达县",
            "540422": "米林县",
            "540423": "墨脱县",
            "540424": "波密县",
            "540425": "察隅县",
            "540426": "朗县" } },


        "540500": {
          code: "540500",
          name: "山南市",
          districts: {
            "540502": "乃东区",
            "540521": "扎囊县",
            "540522": "贡嘎县",
            "540523": "桑日县",
            "540524": "琼结县",
            "540525": "曲松县",
            "540526": "措美县",
            "540527": "洛扎县",
            "540528": "加查县",
            "540529": "隆子县",
            "540530": "错那县",
            "540531": "浪卡子县" } },


        "540600": {
          code: "540600",
          name: "那曲市",
          districts: {
            "540602": "色尼区",
            "540621": "嘉黎县",
            "540622": "比如县",
            "540623": "聂荣县",
            "540624": "安多县",
            "540625": "申扎县",
            "540626": "索县",
            "540627": "班戈县",
            "540628": "巴青县",
            "540629": "尼玛县",
            "540630": "双湖县" } },


        "542500": {
          code: "542500",
          name: "阿里地区",
          districts: {
            "542521": "普兰县",
            "542522": "札达县",
            "542523": "噶尔县",
            "542524": "日土县",
            "542525": "革吉县",
            "542526": "改则县",
            "542527": "措勤县" } } } },




    "610000": {
      code: "610000",
      name: "陕西省",
      cities: {
        "610100": {
          code: "610100",
          name: "西安市",
          districts: {
            "610102": "新城区",
            "610103": "碑林区",
            "610104": "莲湖区",
            "610111": "灞桥区",
            "610112": "未央区",
            "610113": "雁塔区",
            "610114": "阎良区",
            "610115": "临潼区",
            "610116": "长安区",
            "610117": "高陵区",
            "610118": "鄠邑区",
            "610122": "蓝田县",
            "610124": "周至县" } },


        "610200": {
          code: "610200",
          name: "铜川市",
          districts: {
            "610202": "王益区",
            "610203": "印台区",
            "610204": "耀州区",
            "610222": "宜君县" } },


        "610300": {
          code: "610300",
          name: "宝鸡市",
          districts: {
            "610302": "渭滨区",
            "610303": "金台区",
            "610304": "陈仓区",
            "610322": "凤翔县",
            "610323": "岐山县",
            "610324": "扶风县",
            "610326": "眉县",
            "610327": "陇县",
            "610328": "千阳县",
            "610329": "麟游县",
            "610330": "凤县",
            "610331": "太白县" } },


        "610400": {
          code: "610400",
          name: "咸阳市",
          districts: {
            "610402": "秦都区",
            "610403": "杨陵区",
            "610404": "渭城区",
            "610422": "三原县",
            "610423": "泾阳县",
            "610424": "乾县",
            "610425": "礼泉县",
            "610426": "永寿县",
            "610428": "长武县",
            "610429": "旬邑县",
            "610430": "淳化县",
            "610431": "武功县",
            "610481": "兴平市",
            "610482": "彬州市" } },


        "610500": {
          code: "610500",
          name: "渭南市",
          districts: {
            "610502": "临渭区",
            "610503": "华州区",
            "610522": "潼关县",
            "610523": "大荔县",
            "610524": "合阳县",
            "610525": "澄城县",
            "610526": "蒲城县",
            "610527": "白水县",
            "610528": "富平县",
            "610581": "韩城市",
            "610582": "华阴市" } },


        "610600": {
          code: "610600",
          name: "延安市",
          districts: {
            "610602": "宝塔区",
            "610603": "安塞区",
            "610621": "延长县",
            "610622": "延川县",
            "610623": "子长县",
            "610625": "志丹县",
            "610626": "吴起县",
            "610627": "甘泉县",
            "610628": "富县",
            "610629": "洛川县",
            "610630": "宜川县",
            "610631": "黄龙县",
            "610632": "黄陵县" } },


        "610700": {
          code: "610700",
          name: "汉中市",
          districts: {
            "610702": "汉台区",
            "610703": "南郑区",
            "610722": "城固县",
            "610723": "洋县",
            "610724": "西乡县",
            "610725": "勉县",
            "610726": "宁强县",
            "610727": "略阳县",
            "610728": "镇巴县",
            "610729": "留坝县",
            "610730": "佛坪县" } },


        "610800": {
          code: "610800",
          name: "榆林市",
          districts: {
            "610802": "榆阳区",
            "610803": "横山区",
            "610822": "府谷县",
            "610824": "靖边县",
            "610825": "定边县",
            "610826": "绥德县",
            "610827": "米脂县",
            "610828": "佳县",
            "610829": "吴堡县",
            "610830": "清涧县",
            "610831": "子洲县",
            "610881": "神木市" } },


        "610900": {
          code: "610900",
          name: "安康市",
          districts: {
            "610902": "汉滨区",
            "610921": "汉阴县",
            "610922": "石泉县",
            "610923": "宁陕县",
            "610924": "紫阳县",
            "610925": "岚皋县",
            "610926": "平利县",
            "610927": "镇坪县",
            "610928": "旬阳县",
            "610929": "白河县" } },


        "611000": {
          code: "611000",
          name: "商洛市",
          districts: {
            "611002": "商州区",
            "611021": "洛南县",
            "611022": "丹凤县",
            "611023": "商南县",
            "611024": "山阳县",
            "611025": "镇安县",
            "611026": "柞水县" } } } },




    "620000": {
      code: "620000",
      name: "甘肃省",
      cities: {
        "620100": {
          code: "620100",
          name: "兰州市",
          districts: {
            "620102": "城关区",
            "620103": "七里河区",
            "620104": "西固区",
            "620105": "安宁区",
            "620111": "红古区",
            "620121": "永登县",
            "620122": "皋兰县",
            "620123": "榆中县" } },


        "620200": {
          code: "620200",
          name: "嘉峪关市",
          districts: {} },


        "620300": {
          code: "620300",
          name: "金昌市",
          districts: {
            "620302": "金川区",
            "620321": "永昌县" } },


        "620400": {
          code: "620400",
          name: "白银市",
          districts: {
            "620402": "白银区",
            "620403": "平川区",
            "620421": "靖远县",
            "620422": "会宁县",
            "620423": "景泰县" } },


        "620500": {
          code: "620500",
          name: "天水市",
          districts: {
            "620502": "秦州区",
            "620503": "麦积区",
            "620521": "清水县",
            "620522": "秦安县",
            "620523": "甘谷县",
            "620524": "武山县",
            "620525": "张家川回族自治县" } },


        "620600": {
          code: "620600",
          name: "武威市",
          districts: {
            "620602": "凉州区",
            "620621": "民勤县",
            "620622": "古浪县",
            "620623": "天祝藏族自治县" } },


        "620700": {
          code: "620700",
          name: "张掖市",
          districts: {
            "620702": "甘州区",
            "620721": "肃南裕固族自治县",
            "620722": "民乐县",
            "620723": "临泽县",
            "620724": "高台县",
            "620725": "山丹县" } },


        "620800": {
          code: "620800",
          name: "平凉市",
          districts: {
            "620802": "崆峒区",
            "620821": "泾川县",
            "620822": "灵台县",
            "620823": "崇信县",
            "620825": "庄浪县",
            "620826": "静宁县",
            "620881": "华亭市" } },


        "620900": {
          code: "620900",
          name: "酒泉市",
          districts: {
            "620902": "肃州区",
            "620921": "金塔县",
            "620922": "瓜州县",
            "620923": "肃北蒙古族自治县",
            "620924": "阿克塞哈萨克族自治县",
            "620981": "玉门市",
            "620982": "敦煌市" } },


        "621000": {
          code: "621000",
          name: "庆阳市",
          districts: {
            "621002": "西峰区",
            "621021": "庆城县",
            "621022": "环县",
            "621023": "华池县",
            "621024": "合水县",
            "621025": "正宁县",
            "621026": "宁县",
            "621027": "镇原县" } },


        "621100": {
          code: "621100",
          name: "定西市",
          districts: {
            "621102": "安定区",
            "621121": "通渭县",
            "621122": "陇西县",
            "621123": "渭源县",
            "621124": "临洮县",
            "621125": "漳县",
            "621126": "岷县" } },


        "621200": {
          code: "621200",
          name: "陇南市",
          districts: {
            "621202": "武都区",
            "621221": "成县",
            "621222": "文县",
            "621223": "宕昌县",
            "621224": "康县",
            "621225": "西和县",
            "621226": "礼县",
            "621227": "徽县",
            "621228": "两当县" } },


        "622900": {
          code: "622900",
          name: "临夏回族自治州",
          districts: {
            "622901": "临夏市",
            "622921": "临夏县",
            "622922": "康乐县",
            "622923": "永靖县",
            "622924": "广河县",
            "622925": "和政县",
            "622926": "东乡族自治县",
            "622927": "积石山保安族东乡族撒拉族自治县" } },


        "623000": {
          code: "623000",
          name: "甘南藏族自治州",
          districts: {
            "623001": "合作市",
            "623021": "临潭县",
            "623022": "卓尼县",
            "623023": "舟曲县",
            "623024": "迭部县",
            "623025": "玛曲县",
            "623026": "碌曲县",
            "623027": "夏河县" } } } },




    "630000": {
      code: "630000",
      name: "青海省",
      cities: {
        "630100": {
          code: "630100",
          name: "西宁市",
          districts: {
            "630102": "城东区",
            "630103": "城中区",
            "630104": "城西区",
            "630105": "城北区",
            "630121": "大通回族土族自治县",
            "630122": "湟中县",
            "630123": "湟源县" } },


        "630200": {
          code: "630200",
          name: "海东市",
          districts: {
            "630202": "乐都区",
            "630203": "平安区",
            "630222": "民和回族土族自治县",
            "630223": "互助土族自治县",
            "630224": "化隆回族自治县",
            "630225": "循化撒拉族自治县" } },


        "632200": {
          code: "632200",
          name: "海北藏族自治州",
          districts: {
            "632221": "门源回族自治县",
            "632222": "祁连县",
            "632223": "海晏县",
            "632224": "刚察县" } },


        "632300": {
          code: "632300",
          name: "黄南藏族自治州",
          districts: {
            "632321": "同仁县",
            "632322": "尖扎县",
            "632323": "泽库县",
            "632324": "河南蒙古族自治县" } },


        "632500": {
          code: "632500",
          name: "海南藏族自治州",
          districts: {
            "632521": "共和县",
            "632522": "同德县",
            "632523": "贵德县",
            "632524": "兴海县",
            "632525": "贵南县" } },


        "632600": {
          code: "632600",
          name: "果洛藏族自治州",
          districts: {
            "632621": "玛沁县",
            "632622": "班玛县",
            "632623": "甘德县",
            "632624": "达日县",
            "632625": "久治县",
            "632626": "玛多县" } },


        "632700": {
          code: "632700",
          name: "玉树藏族自治州",
          districts: {
            "632701": "玉树市",
            "632722": "杂多县",
            "632723": "称多县",
            "632724": "治多县",
            "632725": "囊谦县",
            "632726": "曲麻莱县" } },


        "632800": {
          code: "632800",
          name: "海西蒙古族藏族自治州",
          districts: {
            "632801": "格尔木市",
            "632802": "德令哈市",
            "632803": "茫崖市",
            "632821": "乌兰县",
            "632822": "都兰县",
            "632823": "天峻县" } } } },




    "640000": {
      code: "640000",
      name: "宁夏回族自治区",
      cities: {
        "640100": {
          code: "640100",
          name: "银川市",
          districts: {
            "640104": "兴庆区",
            "640105": "西夏区",
            "640106": "金凤区",
            "640121": "永宁县",
            "640122": "贺兰县",
            "640181": "灵武市" } },


        "640200": {
          code: "640200",
          name: "石嘴山市",
          districts: {
            "640202": "大武口区",
            "640205": "惠农区",
            "640221": "平罗县" } },


        "640300": {
          code: "640300",
          name: "吴忠市",
          districts: {
            "640302": "利通区",
            "640303": "红寺堡区",
            "640323": "盐池县",
            "640324": "同心县",
            "640381": "青铜峡市" } },


        "640400": {
          code: "640400",
          name: "固原市",
          districts: {
            "640402": "原州区",
            "640422": "西吉县",
            "640423": "隆德县",
            "640424": "泾源县",
            "640425": "彭阳县" } },


        "640500": {
          code: "640500",
          name: "中卫市",
          districts: {
            "640502": "沙坡头区",
            "640521": "中宁县",
            "640522": "海原县" } } } },




    "650000": {
      code: "650000",
      name: "新疆维吾尔自治区",
      cities: {
        "650100": {
          code: "650100",
          name: "乌鲁木齐市",
          districts: {
            "650102": "天山区",
            "650103": "沙依巴克区",
            "650104": "新市区",
            "650105": "水磨沟区",
            "650106": "头屯河区",
            "650107": "达坂城区",
            "650109": "米东区",
            "650121": "乌鲁木齐县" } },


        "650200": {
          code: "650200",
          name: "克拉玛依市",
          districts: {
            "650202": "独山子区",
            "650203": "克拉玛依区",
            "650204": "白碱滩区",
            "650205": "乌尔禾区" } },


        "650400": {
          code: "650400",
          name: "吐鲁番市",
          districts: {
            "650402": "高昌区",
            "650421": "鄯善县",
            "650422": "托克逊县" } },


        "650500": {
          code: "650500",
          name: "哈密市",
          districts: {
            "650502": "伊州区",
            "650521": "巴里坤哈萨克自治县",
            "650522": "伊吾县" } },


        "652300": {
          code: "652300",
          name: "昌吉回族自治州",
          districts: {
            "652301": "昌吉市",
            "652302": "阜康市",
            "652323": "呼图壁县",
            "652324": "玛纳斯县",
            "652325": "奇台县",
            "652327": "吉木萨尔县",
            "652328": "木垒哈萨克自治县" } },


        "652700": {
          code: "652700",
          name: "博尔塔拉蒙古自治州",
          districts: {
            "652701": "博乐市",
            "652702": "阿拉山口市",
            "652722": "精河县",
            "652723": "温泉县" } },


        "652800": {
          code: "652800",
          name: "巴音郭楞蒙古自治州",
          districts: {
            "652801": "库尔勒市",
            "652822": "轮台县",
            "652823": "尉犁县",
            "652824": "若羌县",
            "652825": "且末县",
            "652826": "焉耆回族自治县",
            "652827": "和静县",
            "652828": "和硕县",
            "652829": "博湖县" } },


        "652900": {
          code: "652900",
          name: "阿克苏地区",
          districts: {
            "652901": "阿克苏市",
            "652922": "温宿县",
            "652923": "库车县",
            "652924": "沙雅县",
            "652925": "新和县",
            "652926": "拜城县",
            "652927": "乌什县",
            "652928": "阿瓦提县",
            "652929": "柯坪县" } },


        "653000": {
          code: "653000",
          name: "克孜勒苏柯尔克孜自治州",
          districts: {
            "653001": "阿图什市",
            "653022": "阿克陶县",
            "653023": "阿合奇县",
            "653024": "乌恰县" } },


        "653100": {
          code: "653100",
          name: "喀什地区",
          districts: {
            "653101": "喀什市",
            "653121": "疏附县",
            "653122": "疏勒县",
            "653123": "英吉沙县",
            "653124": "泽普县",
            "653125": "莎车县",
            "653126": "叶城县",
            "653127": "麦盖提县",
            "653128": "岳普湖县",
            "653129": "伽师县",
            "653130": "巴楚县",
            "653131": "塔什库尔干塔吉克自治县" } },


        "653200": {
          code: "653200",
          name: "和田地区",
          districts: {
            "653201": "和田市",
            "653221": "和田县",
            "653222": "墨玉县",
            "653223": "皮山县",
            "653224": "洛浦县",
            "653225": "策勒县",
            "653226": "于田县",
            "653227": "民丰县" } },


        "654000": {
          code: "654000",
          name: "伊犁哈萨克自治州",
          districts: {
            "654002": "伊宁市",
            "654003": "奎屯市",
            "654004": "霍尔果斯市",
            "654021": "伊宁县",
            "654022": "察布查尔锡伯自治县",
            "654023": "霍城县",
            "654024": "巩留县",
            "654025": "新源县",
            "654026": "昭苏县",
            "654027": "特克斯县",
            "654028": "尼勒克县" } },


        "654200": {
          code: "654200",
          name: "塔城地区",
          districts: {
            "654201": "塔城市",
            "654202": "乌苏市",
            "654221": "额敏县",
            "654223": "沙湾县",
            "654224": "托里县",
            "654225": "裕民县",
            "654226": "和布克赛尔蒙古自治县" } },


        "654300": {
          code: "654300",
          name: "阿勒泰地区",
          districts: {
            "654301": "阿勒泰市",
            "654321": "布尔津县",
            "654322": "富蕴县",
            "654323": "福海县",
            "654324": "哈巴河县",
            "654325": "青河县",
            "654326": "吉木乃县" } } } },




    "810000": {
      code: "810000",
      name: "香港特别行政区",
      cities: {
        "810000": {
          code: "810000",
          name: "香港特别行政区",
          districts: {
            "810101": "中西区",
            "810102": "湾仔区",
            "810103": "东区",
            "810104": "南区",
            "810105": "油尖旺区",
            "810106": "深水埗区",
            "810107": "九龙城区",
            "810108": "黄大仙区",
            "810109": "观塘区",
            "810110": "北区",
            "810111": "大埔区",
            "810112": "沙田区",
            "810113": "西贡区",
            "810114": "荃湾区",
            "810115": "屯门区",
            "810116": "元朗区",
            "810117": "葵青区",
            "810118": "离岛区" } } } },




    "820000": {
      code: "820000",
      name: "澳门特别行政区",
      cities: {
        "820000": {
          code: "820000",
          name: "澳门特别行政区",
          districts: {
            "820101": "花地玛堂区",
            "820102": "圣安多尼堂区",
            "820103": "大堂区",
            "820104": "望德堂区",
            "820105": "风顺堂区",
            "820106": "嘉模堂区",
            "820107": "圣方济各堂区",
            "820108": "路氹城",
            "820109": "澳门新城" } } } },




    "830000": {
      code: "830000",
      name: "台湾省",
      cities: {
        "830100": {
          code: "830100",
          name: "台北市",
          districts: {
            "830101": "中正区",
            "830102": "大同区",
            "830103": "中山区",
            "830104": "万华区",
            "830105": "信义区",
            "830106": "松山区",
            "830107": "大安区",
            "830108": "南港区",
            "830109": "北投区",
            "830110": "内湖区",
            "830111": "士林区",
            "830112": "文山区" } },


        "830200": {
          code: "830200",
          name: "新北市",
          districts: {
            "830201": "板桥区",
            "830202": "土城区",
            "830203": "新庄区",
            "830204": "新店区",
            "830205": "深坑区",
            "830206": "石碇区",
            "830207": "坪林区",
            "830208": "乌来区",
            "830209": "五股区",
            "830210": "八里区",
            "830211": "林口区",
            "830212": "淡水区",
            "830213": "中和区",
            "830214": "永和区",
            "830215": "三重区",
            "830216": "芦洲区",
            "830217": "泰山区",
            "830218": "树林区",
            "830219": "莺歌区",
            "830220": "三峡区",
            "830221": "汐止区",
            "830222": "金山区",
            "830223": "万里区",
            "830224": "三芝区",
            "830225": "石门区",
            "830226": "瑞芳区",
            "830227": "贡寮区",
            "830228": "双溪区",
            "830229": "平溪区" } },


        "830300": {
          code: "830300",
          name: "桃园市",
          districts: {
            "830301": "桃园区",
            "830302": "中坜区",
            "830303": "平镇区",
            "830304": "八德区",
            "830305": "杨梅区",
            "830306": "芦竹区",
            "830307": "大溪区",
            "830308": "龙潭区",
            "830309": "龟山区",
            "830310": "大园区",
            "830311": "观音区",
            "830312": "新屋区",
            "830313": "复兴区" } },


        "830400": {
          code: "830400",
          name: "台中市",
          districts: {
            "830401": "中区",
            "830402": "东区",
            "830403": "西区",
            "830404": "南区",
            "830405": "北区",
            "830406": "西屯区",
            "830407": "南屯区",
            "830408": "北屯区",
            "830409": "丰原区",
            "830410": "大里区",
            "830411": "太平区",
            "830412": "东势区",
            "830413": "大甲区",
            "830414": "清水区",
            "830415": "沙鹿区",
            "830416": "梧栖区",
            "830417": "后里区",
            "830418": "神冈区",
            "830419": "潭子区",
            "830420": "大雅区",
            "830421": "新小区",
            "830422": "石冈区",
            "830423": "外埔区",
            "830424": "大安区",
            "830425": "乌日区",
            "830426": "大肚区",
            "830427": "龙井区",
            "830428": "雾峰区",
            "830429": "和平区" } },


        "830500": {
          code: "830500",
          name: "台南市",
          districts: {
            "830501": "中西区",
            "830502": "东区",
            "830503": "南区",
            "830504": "北区",
            "830505": "安平区",
            "830506": "安南区",
            "830507": "永康区",
            "830508": "归仁区",
            "830509": "新化区",
            "830510": "左镇区",
            "830511": "玉井区",
            "830512": "楠西区",
            "830513": "南化区",
            "830514": "仁德区",
            "830515": "关庙区",
            "830516": "龙崎区",
            "830517": "官田区",
            "830518": "麻豆区",
            "830519": "佳里区",
            "830520": "西港区",
            "830521": "七股区",
            "830522": "将军区",
            "830523": "学甲区",
            "830524": "北门区",
            "830525": "新营区",
            "830526": "后壁区",
            "830527": "白河区",
            "830528": "东山区",
            "830529": "六甲区",
            "830530": "下营区",
            "830531": "柳营区",
            "830532": "盐水区",
            "830533": "善化区",
            "830534": "大内区",
            "830535": "山上区",
            "830536": "新市区",
            "830537": "安定区" } },


        "830600": {
          code: "830600",
          name: "高雄市",
          districts: {
            "830601": "楠梓区",
            "830602": "左营区",
            "830603": "鼓山区",
            "830604": "三民区",
            "830605": "盐埕区",
            "830606": "前金区",
            "830607": "新兴区",
            "830608": "苓雅区",
            "830609": "前镇区",
            "830610": "旗津区",
            "830611": "小港区",
            "830612": "凤山区",
            "830613": "大寮区",
            "830614": "鸟松区",
            "830615": "林园区",
            "830616": "仁武区",
            "830617": "大树区",
            "830618": "大社区",
            "830619": "冈山区",
            "830620": "路竹区",
            "830621": "桥头区",
            "830622": "梓官区",
            "830623": "弥陀区",
            "830624": "永安区",
            "830625": "燕巢区",
            "830626": "阿莲区",
            "830627": "茄萣区",
            "830628": "湖内区",
            "830629": "旗山区",
            "830630": "美浓区",
            "830631": "内门区",
            "830632": "杉林区",
            "830633": "甲仙区",
            "830634": "六龟区",
            "830635": "茂林区",
            "830636": "桃源区",
            "830637": "那玛夏区" } },


        "830700": {
          code: "830700",
          name: "基隆市",
          districts: {
            "830701": "中正区",
            "830702": "七堵区",
            "830703": "暖暖区",
            "830704": "仁爱区",
            "830705": "中山区",
            "830706": "安乐区",
            "830707": "信义区" } },


        "830800": {
          code: "830800",
          name: "新竹市",
          districts: {
            "830801": "东区",
            "830802": "北区",
            "830803": "香山区" } },


        "830900": {
          code: "830900",
          name: "嘉义市",
          districts: {
            "830901": "东区",
            "830902": "西区" } } } } };






  var REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北'];
  var areas = location;
  // 随机生成一个大区。
  var region = function region() {
    return pick(REGION);
  };
  // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
  var province = function province() {
    return pickMap(areas).name;
  };
  /**
      * 随机生成一个（中国）市。
      * @param prefix 是否有省前缀
      */
  var city = function city(prefix) {
    if (prefix === void 0) {prefix = false;}
    var province = pickMap(areas);
    var city = pickMap(province.cities);
    return prefix ? [province.name, city.name].join(' ') : city.name;
  };
  /**
      * 随机生成一个（中国）县。
      * @param prefix 是否有省/市前缀
      */
  var county = function county(prefix) {
    if (prefix === void 0) {prefix = false;}
    // 直筒子市，无区县
    // https://baike.baidu.com/item/%E7%9B%B4%E7%AD%92%E5%AD%90%E5%B8%82
    var specialCity = ['460400', '441900', '442000', '620200'];
    var province = pickMap(areas);
    var city = pickMap(province.cities);
    /* istanbul ignore next */
    if (specialCity.indexOf(city.code) !== -1) {
      return county(prefix);
    }
    var district = pickMap(city.districts) || '-';
    return prefix ? [province.name, city.name, district].join(' ') : district;
  };
  /**
      * 随机生成一个邮政编码（默认6位数字）。
      * @param len
      */
  var zip = function zip(len) {
    if (len === void 0) {len = 6;}
    var zip = '';
    for (var i = 0; i < len; i++) {
      zip += natural(0, 9);
    }
    return zip;
  };

  var address = /*#__PURE__*/Object.freeze({
    __proto__: null,
    region: region,
    province: province,
    city: city,
    county: county,
    zip: zip });


  // Miscellaneous
  var areas$1 = location;
  // 随机生成一个 guid
  // http://www.broofa.com/2008/09/javascript-uuid-function/
  var guid = function guid() {
    var pool = 'abcdefABCDEF1234567890';
    return string(pool, 8) + '-' + string(pool, 4) + '-' + string(pool, 4) + '-' + string(pool, 4) + '-' + string(pool, 12);
  };
  var uuid = guid;
  // 随机生成一个 18 位身份证。
  // http://baike.baidu.com/view/1697.htm#4
  // [身份证](http://baike.baidu.com/view/1697.htm#4)
  // 地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
  // [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
  var id = function id() {
    var _id;
    var _sum = 0;
    var rank = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
    var last = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    // 直筒子市，无区县
    // https://baike.baidu.com/item/%E7%9B%B4%E7%AD%92%E5%AD%90%E5%B8%82
    var specialCity = ['460400', '441900', '442000', '620200'];
    var province = pickMap(areas$1);
    var city = pickMap(province.cities);
    /* istanbul ignore next */
    if (specialCity.indexOf(city.code) !== -1) {
      return id();
    }
    var districts = city.districts;
    var district = pick(keys(districts));
    _id = district + date('yyyyMMdd') + string('number', 3);
    for (var i = 0; i < _id.length; i++) {
      _sum += _id[i] * Number(rank[i]);
    }
    _id += last[_sum % 11];
    return _id;
  };
  // 生成一个全局的自增整数。
  // 类似自增主键（auto increment primary key）。
  var key = 0;
  var increment = function increment(step) {
    return key += Number(step) || 1; // step?
  };
  var inc = increment;
  /**
                        * 随机生成一个版本号
                        * @param depth 版本号的层级，默认为3
                        */
  var version = function version(depth) {
    if (depth === void 0) {depth = 3;}
    var numbers = [];
    for (var i = 0; i < depth; i++) {
      numbers.push(natural(0, 10));
    }
    return numbers.join('.');
  };
  // 随机生成一个中国手机号
  var phone = function phone() {
    var segments = [
    // 移动号段
    '134', '135', '136', '137', '138', '139', '147', '150', '151', '152', '157', '158', '159', '165', '172', '178', '182', '183', '184', '187', '188',
    // 联通号段
    '130', '131', '132', '145', '155', '156', '171', '175', '176', '185', '186',
    // 电信号段
    '133', '149', '153', '173', '174', '177', '180', '181', '189', '191'];

    return pick(segments) + string('number', 8);
  };

  var misc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    guid: guid,
    uuid: uuid,
    id: id,
    increment: increment,
    inc: inc,
    version: version,
    phone: phone });


  var random = _assign(_assign(_assign(_assign(_assign(_assign(_assign(_assign(_assign(_assign({ extend: extendFunc }, basic), date$1), image$1), color$1), text), name$1), web), address), helper), misc);
  function extendFunc(source) {
    if (isObject(source)) {
      for (var key in source) {
        random[key] = source[key];
      }
    }
  }

  // 解析数据模板（属性名部分）。
  var parse = function parse(name) {
    name = name === undefined ? '' : name + '';
    var parameters = name.match(constant.RE_KEY);
    // name|min-max, name|count
    var range = parameters && parameters[3] && parameters[3].match(constant.RE_RANGE);
    var min = range && range[1] && parseInt(range[1], 10);
    var max = range && range[2] && parseInt(range[2], 10);
    // 如果是 min-max, 返回 min-max 之间的一个数
    // 如果是 count, 返回 count
    var count = range ?
    range[2] ?
    random.integer(Number(min), Number(max)) :
    parseInt(range[1], 10) :
    undefined;
    var decimal = parameters && parameters[4] && parameters[4].match(constant.RE_RANGE);
    var dmin = decimal && decimal[1] && parseInt(decimal[1], 10);
    var dmax = decimal && decimal[2] && parseInt(decimal[2], 10);
    // int || dmin-dmax
    var dcount = decimal ?
    decimal[2] ?
    random.integer(Number(dmin), Number(dmax)) :
    parseInt(decimal[1], 10) :
    undefined;
    var result = {
      // 1 name, 2 inc, 3 range, 4 decimal
      parameters: parameters,
      // 1 min, 2 max
      range: range,
      min: min,
      max: max,
      count: count,
      decimal: decimal,
      dmin: dmin,
      dmax: dmax,
      dcount: dcount };

    for (var r in result) {
      if (result[r] != undefined) {
        return result;
      }
    }
    return {};
  };

  var number = Number;
  var boolean$1 = Boolean;
  var string$1 = String;
  var transfer = {
    number: number,
    boolean: boolean$1,
    string: string$1,
    extend: extend };

  function extend(source) {
    if (isObject(source)) {
      for (var key in source) {
        transfer[key] = source[key];
      }
    }
  }

  // ## RegExp Handler
  // ASCII printable code chart
  var LOWER = ascii(97, 122);
  var UPPER = ascii(65, 90);
  var NUMBER = ascii(48, 57);
  var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126); // 排除 95 _ ascii(91, 94) + ascii(96, 96)
  var PRINTABLE = ascii(32, 126);
  var SPACE = " \f\n\r\t\x0B\xA0\u2028\u2029";
  var CHARACTER_CLASSES = {
    '\\w': LOWER + UPPER + NUMBER + '_',
    '\\W': OTHER.replace('_', ''), '\\s': SPACE,
    '\\S': function () {
      var result = PRINTABLE;
      for (var i = 0; i < SPACE.length; i++) {
        result = result.replace(SPACE[i], '');
      }
      return result;
    }(),
    '\\d': NUMBER, '\\D': LOWER + UPPER + OTHER };

  function ascii(from, to) {
    var result = '';
    for (var i = from; i <= to; i++) {
      result += String.fromCharCode(i);
    }
    return result;
  }
  var handler = {
    // var ast = RegExpParser.parse(regexp.source)
    gen: function gen(node, result, cache) {
      cache = cache || {
        guid: 1 };

      return handler[node.type] ? handler[node.type](node, result, cache) : handler.token(node);
    },
    token: /* istanbul ignore next */function token(node) {
      switch (node.type) {
        case 'start':
        case 'end':
          return '';
        case 'any-character':
          return random.character();
        case 'backspace':
          return '';
        case 'word-boundary': // TODO
          return '';
        case 'non-word-boundary': // TODO
          break;
        case 'digit':
          return random.pick(NUMBER.split(''));
        case 'non-digit':
          return random.pick((LOWER + UPPER + OTHER).split(''));
        case 'form-feed':
          break;
        case 'line-feed':
          return node.body || node.text;
        case 'carriage-return':
          break;
        case 'white-space':
          return random.pick(SPACE.split(''));
        case 'non-white-space':
          return random.pick((LOWER + UPPER + NUMBER).split(''));
        case 'tab':
          break;
        case 'vertical-tab':
          break;
        case 'word': // \w [a-zA-Z0-9]
          return random.pick((LOWER + UPPER + NUMBER).split(''));
        case 'non-word': // \W [^a-zA-Z0-9]
          return random.pick(OTHER.replace('_', '').split(''));}

      return node.body || node.text;
    },
    // {
    //   type: 'alternate',
    //   offset: 0,
    //   text: '',
    //   left: {
    //     boyd: []
    //   },
    //   right: {
    //     boyd: []
    //   }
    // }
    alternate: function alternate(node, result, cache) {
      // node.left/right {}
      return handler.gen(random.boolean() ? node.left : node.right, result, cache);
    },
    // {
    //   type: 'match',
    //   offset: 0,
    //   text: '',
    //   body: []
    // }
    match: function match(node, result, cache) {
      result = '';
      // node.body []
      for (var i = 0; i < node.body.length; i++) {
        result += handler.gen(node.body[i], result, cache);
      }
      return result;
    },
    // ()
    'capture-group': function captureGroup(node, result, cache) {
      // node.body {}
      result = handler.gen(node.body, result, cache);
      cache[cache.guid++] = result;
      return result;
    },
    // (?:...)
    'non-capture-group': function nonCaptureGroup(node, result, cache) {
      // node.body {}
      return handler.gen(node.body, result, cache);
    },
    // (?=p)
    'positive-lookahead': function positiveLookahead(node, result, cache) {
      // node.body
      return handler.gen(node.body, result, cache);
    },
    // (?!p)
    'negative-lookahead': function negativeLookahead() {
      // node.body
      return '';
    },
    // {
    //   type: 'quantified',
    //   offset: 3,
    //   text: 'c*',
    //   body: {
    //     type: 'literal',
    //     offset: 3,
    //     text: 'c',
    //     body: 'c',
    //     escaped: false
    //   },
    //   quantifier: {
    //     type: 'quantifier',
    //     offset: 4,
    //     text: '*',
    //     min: 0,
    //     max: Infinity,
    //     greedy: true
    //   }
    // }
    quantified: function quantified(node, result, cache) {
      result = '';
      // node.quantifier {}
      var count = handler.quantifier(node.quantifier);
      // node.body {}
      for (var i = 0; i < count; i++) {
        result += handler.gen(node.body, result, cache);
      }
      return result;
    },
    // quantifier: {
    //   type: 'quantifier',
    //   offset: 4,
    //   text: '*',
    //   min: 0,
    //   max: Infinity,
    //   greedy: true
    // }
    quantifier: function quantifier(node) {
      var min = Math.max(node.min, 0);
      var max = isFinite(node.max) ? node.max : min + random.integer(3, 7);
      return random.integer(min, max);
    },
    charset: function charset(node, result, cache) {
      // node.invert
      if (node.invert) {
        return handler['invert-charset'](node, result, cache);
      }
      // node.body []
      var literal = random.pick(node.body);
      return handler.gen(literal, result, cache);
    },
    'invert-charset': function invertCharset(node, result, cache) {
      var pool = PRINTABLE;
      var item;
      for (var i = 0; i < node.body.length; i++) {
        item = node.body[i];
        switch (item.type) {
          case 'literal':
            pool = pool.replace(item.body, '');
            break;
          case 'range':
            var min = handler.gen(item.start, result, cache).charCodeAt();
            var max = handler.gen(item.end, result, cache).charCodeAt();
            for (var ii = min; ii <= max; ii++) {
              pool = pool.replace(String.fromCharCode(ii), '');
            }
          /* falls through */
          default:
            var characters = CHARACTER_CLASSES[item.text];
            if (characters) {
              for (var iii = 0; iii <= characters.length; iii++) {
                pool = pool.replace(characters[iii], '');
              }
            }}

      }
      return random.pick(pool.split(''));
    },
    range: function range(node, result, cache) {
      // node.start, node.end
      var min = handler.gen(node.start, result, cache).charCodeAt();
      var max = handler.gen(node.end, result, cache).charCodeAt();
      return String.fromCharCode(random.integer(min, max));
    },
    literal: function literal(node) {
      return node.escaped ? node.body : node.text;
    },
    // Unicode \u
    unicode: function unicode(node) {
      return String.fromCharCode(parseInt(node.code, 16));
    },
    // 十六进制 \xFF
    hex: function hex(node) {
      return String.fromCharCode(parseInt(node.code, 16));
    },
    octal: function octal(node) {
      return String.fromCharCode(parseInt(node.code, 8));
    },
    // 反向引用
    'back-reference': function backReference(node, result, cache) {
      return cache[node.code] || '';
    },
    // http://en.wikipedia.org/wiki/C0_and_C1_control_codes
    CONTROL_CHARACTER_MAP: function () {
      var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ');
      var CONTROL_CHARACTER_UNICODE = "\0 \x01 \x02 \x03 \x04 \x05 \x06 \x07 \b \t \n \x0B \f \r \x0E \x0F \x10 \x11 \x12 \x13 \x14 \x15 \x16 \x17 \x18 \x19 \x1A \x1B \x1C \x1D \x1E \x1F".split(' ');
      var map = {};
      for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
        map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i];
      }
      return map;
    }(),
    'control-character': function controlCharacter(node) {
      return this.CONTROL_CHARACTER_MAP[node.code];
    } };


  // https://github.com/nuysoft/regexp
  // forked from https://github.com/ForbesLindesay/regexp
  function Token(n) {
    this.type = n, this.offset = Token.offset(), this.text = Token.text();
  }

  function Alternate(n, l) {
    Token.call(this, 'alternate'), this.left = n, this.right = l;
  }

  function Match(n) {
    Token.call(this, 'match'), this.body = n.filter(Boolean);
  }

  function Group(n, l) {
    Token.call(this, n), this.body = l;
  }

  function CaptureGroup(n) {
    Group.call(this, 'capture-group'), this.index = cgs[this.offset] || (cgs[this.offset] = index++),
    this.body = n;
  }

  function Quantified(n, l) {
    Token.call(this, 'quantified'), this.body = n, this.quantifier = l;
  }

  function Quantifier(n, l) {
    Token.call(this, 'quantifier'), this.min = n, this.max = l, this.greedy = !0;
  }

  function CharSet(n, l) {
    Token.call(this, 'charset'), this.invert = n, this.body = l;
  }

  function CharacterRange(n, l) {
    Token.call(this, 'range'), this.start = n, this.end = l;
  }

  function Literal(n) {
    Token.call(this, 'literal'), this.body = n, this.escaped = this.body != this.text;
  }

  function Unicode(n) {
    Token.call(this, 'unicode'), this.code = n.toUpperCase();
  }

  function Hex(n) {
    Token.call(this, 'hex'), this.code = n.toUpperCase();
  }

  function Octal(n) {
    Token.call(this, 'octal'), this.code = n.toUpperCase();
  }

  function BackReference(n) {
    Token.call(this, 'back-reference'), this.code = n.toUpperCase();
  }

  function ControlCharacter(n) {
    Token.call(this, 'control-character'), this.code = n.toUpperCase();
  }

  /* istanbul ignore next */
  var parser = function () {
    function n(n, l) {
      function u() {
        this.constructor = n;
      }

      u.prototype = l.prototype, n.prototype = new u();
    }

    function l(n, l, u, t, r) {
      function e(n, l) {
        function u(n) {
          function l(n) {
            return n.charCodeAt(0).toString(16).toUpperCase();
          }

          return n.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (n) {
            return '\\x0' + l(n);
          }).replace(/[\x10-\x1F\x80-\xFF]/g, function (n) {
            return '\\x' + l(n);
          }).replace(/[\u0180-\u0FFF]/g, function (n) {
            return "\\u0" + l(n);
          }).replace(/[\u1080-\uFFFF]/g, function (n) {
            return "\\u" + l(n);
          });
        }

        var t, r;
        switch (n.length) {
          case 0:
            t = 'end of input';
            break;

          case 1:
            t = n[0];
            break;

          default:
            t = n.slice(0, -1).join(', ') + ' or ' + n[n.length - 1];}

        return r = l ? '"' + u(l) + '"' : 'end of input', 'Expected ' + t + ' but ' + r + ' found.';
      }

      this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r,
      this.name = 'SyntaxError', this.message = e(n, l);
    }

    function u(n) {
      function u() {
        return n.substring(Lt, qt);
      }

      function t() {
        return Lt;
      }

      function r(l) {
        function u(l, u, t) {
          var r, e;
          for (r = u; t > r; r++) {e = n.charAt(r), '\n' === e ? (l.seenCR || l.line++, l.column = 1,
            l.seenCR = !1) : '\r' === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1,
            l.seenCR = !0) : (l.column++, l.seenCR = !1);}
        }

        return Mt !== l && (Mt > l && (Mt = 0, Dt = {
          line: 1,
          column: 1,
          seenCR: !1 }),
        u(Dt, Mt, l), Mt = l), Dt;
      }

      function e(n) {
        Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
      }

      function o(n) {
        var l = 0;
        for (n.sort(); l < n.length;) {n[l - 1] === n[l] ? n.splice(l, 1) : l++;}
      }

      function c() {
        var l, u, t, r, o;
        return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl,
        qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [r, o],
        t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l,
        u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l,
        l = il), l;
      }

      function i() {
        var n, l, u, t, r;
        if (n = qt, l = f(), null === l && (l = al), null !== l) {if (u = qt, Wt++, t = d(),
          Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
            for (t = [], r = h(), null === r && (r = a()); null !== r;) {t.push(r), r = h(),
              null === r && (r = a());}
            null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r),
            null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
          } else qt = n, n = il;} else qt = n, n = il;
        return n;
      }

      function a() {
        var n;
        return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
      }

      function f() {
        var l, u;
        return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)),
        null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function s() {
        var l, u;
        return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)),
        null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function h() {
        var n, l, u;
        return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u),
        null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
      }

      function d() {
        var n, l, u;
        return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n,
        l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n,
        n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
      }

      function p() {
        var n;
        return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(),
        null === n && (n = g(), null === n && (n = b()))))), n;
      }

      function v() {
        var l, u, t, r, o, c;
        return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
        null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null,
        0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl,
        qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l,
        l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function w() {
        var l, u, t, r;
        return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
        null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null,
        0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
      }

      function A() {
        var l, u, t, r;
        return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
        null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null,
        0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
      }

      function C() {
        var l, u;
        return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)),
        null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function g() {
        var l, u;
        return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)),
        null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function b() {
        var l, u;
        return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)),
        null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function k() {
        var l;
        return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)),
        l;
      }

      function T() {
        var l, u, t;
        if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null,
        0 === Wt && e(Il)), null !== t) for (; null !== t;) {u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt),
          qt++) : (t = null, 0 === Wt && e(Il));} else u = il;
        return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u,
        l;
      }

      function x() {
        var l, u, t, r;
        return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)),
        null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))),
        null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)),
        null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
      }

      function y() {
        var n, l;
        return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n,
        n = l) : n = l, n;
      }

      function m() {
        var l, u, t;
        return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)),
        null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function R() {
        var l, u, t;
        return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)),
        null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function F() {
        var l, u, t;
        return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)),
        null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function Q() {
        var l, u, t, r, o;
        if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)),
        null !== u) {if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)),
          null === t && (t = al), null !== t) {
            for (r = [], o = S(), null === o && (o = U()); null !== o;) {r.push(o), o = S(),
              null === o && (o = U());}
            null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)),
            null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il);
          } else qt = l, l = il;} else qt = l, l = il;
        return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
      }

      function S() {
        var l, u, t, r;
        return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null,
        0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l,
        l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--,
        null === l && (u = null, 0 === Wt && e(du)), l;
      }

      function U() {
        var n;
        return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && 0 === Wt && e(Au),
        n;
      }

      function E() {
        var l, u;
        return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)),
        null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
      }

      function G() {
        var n;
        return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(),
        null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(),
        null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(),
        null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(),
        null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
      }

      function B() {
        var n;
        return n = j(), null === n && (n = q(), null === n && (n = $())), n;
      }

      function j() {
        var l, u;
        return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)),
        null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function $() {
        var l, u;
        return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null,
        0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u,
        Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
      }

      function q() {
        var n;
        return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(),
        null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(),
        null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(),
        null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(),
        null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))),
        n;
      }

      function L() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)),
        null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function M() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)),
        null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function D() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)),
        null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function H() {
        var l, u;
        return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)),
        null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function O() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)),
        null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function W() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)),
        null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function z() {
        var l, u;
        return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)),
        null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function I() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)),
        null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function J() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)),
        null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function K() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)),
        null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function N() {
        var l, u;
        return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)),
        null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function P() {
        var l, u;
        return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)),
        null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function V() {
        var l, u;
        return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)),
        null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function X() {
        var l, u;
        return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)),
        null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function Y() {
        var l, u, t;
        return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)),
        null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)),
        null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function Z() {
        var l, u, t;
        return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)),
        null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)),
        null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }

      function _() {
        var l, u, t, r;
        if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)),
        null !== u) {
          if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)),
          null !== r) for (; null !== r;) {t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt),
            qt++) : (r = null, 0 === Wt && e(mt));} else t = il;
          null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
          l = il);
        } else qt = l, l = il;
        return l;
      }

      function nl() {
        var l, u, t, r;
        if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)),
        null !== u) {
          if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)),
          null !== r) for (; null !== r;) {t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt),
            qt++) : (r = null, 0 === Wt && e(Ut));} else t = il;
          null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
          l = il);
        } else qt = l, l = il;
        return l;
      }

      function ll() {
        var l, u, t, r;
        if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)),
        null !== u) {
          if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)),
          null !== r) for (; null !== r;) {t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt),
            qt++) : (r = null, 0 === Wt && e(Ut));} else t = il;
          null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
          l = il);
        } else qt = l, l = il;
        return l;
      }

      function ul() {
        var l, u;
        return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)),
        null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
      }

      function tl() {
        var l, u, t;
        return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)),
        null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)),
        null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
        l = il)) : (qt = l, l = il), l;
      }
      var rl,el = arguments.length > 1 ? arguments[1] : {},ol = {
        regexp: c },
      cl = c,il = null,al = '',fl = '|',sl = '"|"',hl = function hl(n, l) {
        return l ? new Alternate(n, l[1]) : n;
      },dl = function dl(n, l, u) {
        return new Match([n].concat(l).concat([u]));
      },pl = '^',vl = '"^"',wl = function wl() {
        return new Token('start');
      },Al = '$',Cl = '"$"',gl = function gl() {
        return new Token('end');
      },bl = function bl(n, l) {
        return new Quantified(n, l);
      },kl = 'Quantifier',Tl = function Tl(n, l) {
        return l && (n.greedy = !1), n;
      },xl = '{',yl = '"{"',ml = ',',Rl = '","',Fl = '}',Ql = '"}"',Sl = function Sl(n, l) {
        return new Quantifier(n, l);
      },Ul = ',}',El = '",}"',Gl = function Gl(n) {
        return new Quantifier(n, 1 / 0);
      },Bl = function Bl(n) {
        return new Quantifier(n, n);
      },jl = '+',$l = '"+"',ql = function ql() {
        return new Quantifier(1, 1 / 0);
      },Ll = '*',Ml = '"*"',Dl = function Dl() {
        return new Quantifier(0, 1 / 0);
      },Hl = '?',Ol = '"?"',Wl = function Wl() {
        return new Quantifier(0, 1);
      },zl = /^[0-9]/,Il = '[0-9]',Jl = function Jl(n) {
        return +n.join('');
      },Kl = '(',Nl = '"("',Pl = ')',Vl = '")"',Xl = function Xl(n) {
        return n;
      },Yl = function Yl(n) {
        return new CaptureGroup(n);
      },Zl = '?:',_l = '"?:"',nu = function nu(n) {
        return new Group('non-capture-group', n);
      },lu = '?=',uu = '"?="',tu = function tu(n) {
        return new Group('positive-lookahead', n);
      },ru = '?!',eu = '"?!"',ou = function ou(n) {
        return new Group('negative-lookahead', n);
      },cu = 'CharacterSet',iu = '[',au = '"["',fu = ']',su = '"]"',hu = function hu(n, l) {
        return new CharSet(!!n, l);
      },du = 'CharacterRange',pu = '-',vu = '"-"',wu = function wu(n, l) {
        return new CharacterRange(n, l);
      },Au = 'Character',Cu = /^[^\\\]]/,gu = '[^\\\\\\]]',bu = function bu(n) {
        return new Literal(n);
      },ku = '.',Tu = '"."',xu = function xu() {
        return new Token('any-character');
      },yu = 'Literal',mu = /^[^|\\\/.[()?+*$\^]/,Ru = '[^|\\\\\\/.[()?+*$\\^]',Fu = '\\b',Qu = '"\\\\b"',
      Su = function Su() {
        return new Token('backspace');
      },Uu = function Uu() {
        return new Token('word-boundary');
      },Eu = '\\B',Gu = '"\\\\B"',Bu = function Bu() {
        return new Token('non-word-boundary');
      },ju = '\\d',$u = '"\\\\d"',qu = function qu() {
        return new Token('digit');
      },Lu = '\\D',Mu = '"\\\\D"',Du = function Du() {
        return new Token('non-digit');
      },Hu = '\\f',Ou = '"\\\\f"',Wu = function Wu() {
        return new Token('form-feed');
      },zu = '\\n',Iu = '"\\\\n"',Ju = function Ju() {
        return new Token('line-feed');
      },Ku = '\\r',Nu = '"\\\\r"',Pu = function Pu() {
        return new Token('carriage-return');
      },Vu = '\\s',Xu = '"\\\\s"',Yu = function Yu() {
        return new Token('white-space');
      },Zu = '\\S',_u = '"\\\\S"',nt = function nt() {
        return new Token('non-white-space');
      },lt = '\\t',ut = '"\\\\t"',tt = function tt() {
        return new Token('tab');
      },rt = '\\v',et = '"\\\\v"',ot = function ot() {
        return new Token('vertical-tab');
      },ct = '\\w',it = '"\\\\w"',at = function at() {
        return new Token('word');
      },ft = '\\W',st = '"\\\\W"',ht = function ht() {
        return new Token('non-word');
      },dt = '\\c',pt = '"\\\\c"',vt = 'any character',wt = function wt(n) {
        return new ControlCharacter(n);
      },At = '\\',Ct = '"\\\\"',gt = /^[1-9]/,bt = '[1-9]',kt = function kt(n) {
        return new BackReference(n);
      },Tt = '\\0',xt = '"\\\\0"',yt = /^[0-7]/,mt = '[0-7]',Rt = function Rt(n) {
        return new Octal(n.join(''));
      },Ft = '\\x',Qt = '"\\\\x"',St = /^[0-9a-fA-F]/,Ut = '[0-9a-fA-F]',Et = function Et(n) {
        return new Hex(n.join(''));
      },Gt = "\\u",Bt = "\"\\\\u\"",jt = function jt(n) {
        return new Unicode(n.join(''));
      },$t = function $t() {
        return new Token('null-character');
      },qt = 0,Lt = 0,Mt = 0,Dt = {
        line: 1,
        column: 1,
        seenCR: !1 },
      Ht = 0,Ot = [],Wt = 0;
      if ('startRule' in el) {
        if (!(el.startRule in ol)) throw new Error('Can\'t start parsing from rule "' + el.startRule + '".');
        cl = ol[el.startRule];
      }
      if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
      throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
    }

    return n(l, Error), {
      SyntaxError: l,
      parse: u };

  }(),index = 1,cgs = {};

  var RE = {
    Parser: parser,
    Handler: handler };


  // 处理数据模板。
  var handler$1 = {
    // template        属性值（即数据模板）
    // name            属性名
    // context         数据上下文，生成后的数据
    // templateContext 模板上下文，
    //
    // Handle.gen(template, name, options)
    // context
    //     currentContext, templateCurrentContext,
    //     path, templatePath
    //     root, templateRoot
    gen: function gen(template, name, context) {
      name = name === undefined ? '' : name.toString();
      context = context || {};
      context = {
        // 当前访问路径，只有属性名，不包括生成规则
        path: context.path || [constant.GUID],
        templatePath: context.templatePath || [constant.GUID++],
        currentContext: context.currentContext,
        templateCurrentContext: context.templateCurrentContext || template,
        root: context.root || context.currentContext,
        templateRoot: context.templateRoot || context.templateCurrentContext || template };

      var rule = parse(name);
      var type$1 = _type(template);
      var data;
      if (handler$1[type$1]) {
        data = handler$1[type$1]({
          type: type$1,
          template: template,
          name: name,
          rule: rule,
          context: context,
          parsedName: name ? name.replace(constant.RE_KEY, '$1') : name });

        if (!context.root) {
          context.root = data;
        }
        return data;
      }
      return template;
    },
    array: function array(options) {
      var result = [];
      // 'name|1': []
      // 'name|count': []
      // 'name|min-max': []
      if (options.template.length === 0)
      return result;
      // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
      if (!options.rule.parameters) {
        for (var i = 0; i < options.template.length; i++) {
          options.context.path.push(i);
          options.context.templatePath.push(i);
          result.push(handler$1.gen(options.template[i], i, {
            path: options.context.path,
            templatePath: options.context.templatePath,
            currentContext: result,
            templateCurrentContext: options.template,
            root: options.context.root || result,
            templateRoot: options.context.templateRoot || options.template }));

          options.context.path.pop();
          options.context.templatePath.pop();
        }
      } else
      {
        // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
        if (options.rule.min === 1 && options.rule.max === undefined) {
          // fix Mock.js#17
          options.context.path.push(options.name);
          options.context.templatePath.push(options.name);
          result = random.pick(handler$1.gen(options.template, undefined, {
            path: options.context.path,
            templatePath: options.context.templatePath,
            currentContext: result,
            templateCurrentContext: options.template,
            root: options.context.root || result,
            templateRoot: options.context.templateRoot || options.template }));

          options.context.path.pop();
          options.context.templatePath.pop();
        } else
        {
          // 'data|+1': [{}, {}]
          if (options.rule.parameters[2]) {
            options.template.__order_index = options.template.__order_index || 0;
            options.context.path.push(options.name);
            options.context.templatePath.push(options.name);
            result = handler$1.gen(options.template, undefined, {
              path: options.context.path,
              templatePath: options.context.templatePath,
              currentContext: result,
              templateCurrentContext: options.template,
              root: options.context.root || result,
              templateRoot: options.context.templateRoot || options.template })[
            options.template.__order_index % options.template.length];
            options.template.__order_index += +options.rule.parameters[2];
            options.context.path.pop();
            options.context.templatePath.pop();
          } else
          if (options.rule.count) {
            // 'data|1-10': [{}]
            for (var i = 0; i < options.rule.count; i++) {
              // 'data|1-10': [{}, {}]
              for (var ii = 0; ii < options.template.length; ii++) {
                options.context.path.push(result.length);
                options.context.templatePath.push(ii);
                result.push(handler$1.gen(options.template[ii], result.length, {
                  path: options.context.path,
                  templatePath: options.context.templatePath,
                  currentContext: result,
                  templateCurrentContext: options.template,
                  root: options.context.root || result,
                  templateRoot: options.context.templateRoot || options.template }));

                options.context.path.pop();
                options.context.templatePath.pop();
              }
            }
          }
        }
      }
      return result;
    },
    object: function object(options) {
      var result = {};
      // 'obj|min-max': {}
      if (options.rule.min != undefined) {
        var keys$1 = keys(options.template);
        keys$1 = random.shuffle(keys$1);
        keys$1 = keys$1.slice(0, options.rule.count);
        for (var i = 0; i < keys$1.length; i++) {
          var key = keys$1[i];
          var parsedKey = key.replace(constant.RE_KEY, '$1');
          var transferTypeCtor = handler$1.getTransferTypeCtor(key);
          if (transferTypeCtor) {
            parsedKey = parsedKey.replace(constant.RE_TRANSFER_TYPE, '');
          }
          options.context.path.push(parsedKey);
          options.context.templatePath.push(key);
          var generatedValue = handler$1.gen(options.template[key], key, {
            path: options.context.path,
            templatePath: options.context.templatePath,
            currentContext: result,
            templateCurrentContext: options.template,
            root: options.context.root || result,
            templateRoot: options.context.templateRoot || options.template });

          result[parsedKey] = transferTypeCtor(generatedValue);
          options.context.path.pop();
          options.context.templatePath.pop();
        }
      } else
      {
        // 'obj': {}
        var keys$1 = [];
        var fnKeys = []; // Mock.js#25 改变了非函数属性的顺序，查找起来不方便
        for (var key in options.template) {
          var target = typeof options.template[key] === 'function' ? fnKeys : keys$1;
          target.push(key);
        }
        keys$1 = keys$1.concat(fnKeys);
        for (var i = 0; i < keys$1.length; i++) {
          var key = keys$1[i];
          var parsedKey = key.replace(constant.RE_KEY, '$1');
          var transferTypeCtor = handler$1.getTransferTypeCtor(key);
          if (transferTypeCtor) {
            parsedKey = parsedKey.replace(constant.RE_TRANSFER_TYPE, '');
          }
          options.context.path.push(parsedKey);
          options.context.templatePath.push(key);
          var generatedValue = handler$1.gen(options.template[key], key, {
            path: options.context.path,
            templatePath: options.context.templatePath,
            currentContext: result,
            templateCurrentContext: options.template,
            root: options.context.root || result,
            templateRoot: options.context.templateRoot || options.template });

          result[parsedKey] = transferTypeCtor(generatedValue);
          options.context.path.pop();
          options.context.templatePath.pop();
          // 'id|+1': 1
          var inc = key.match(constant.RE_KEY);
          if (inc && inc[2] && _type(options.template[key]) === 'number') {
            options.template[key] += parseInt(inc[2], 10);
          }
        }
      }
      return result;
    },
    number: function number(options) {
      var result;
      var parts;
      if (options.rule.decimal) {
        // float
        options.template += '';
        parts = options.template.split('.');
        // 'float1|.1-10': 10,
        // 'float2|1-100.1-10': 1,
        // 'float3|999.1-10': 1,
        // 'float4|.3-10': 123.123,
        parts[0] = options.rule.range ? options.rule.count : parts[0];
        parts[1] = (parts[1] || '').slice(0, options.rule.dcount);
        while (parts[1].length < options.rule.dcount) {
          // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
          parts[1] += parts[1].length < options.rule.dcount - 1 ?
          random.character('number') :
          random.character('123456789');
        }
        result = parseFloat(parts.join('.'));
      } else
      {
        // integer
        // 'grade1|1-100': 1,
        result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template;
      }
      return result;
    },
    boolean: function boolean(options) {
      // 'prop|multiple': false, 当前值是相反值的概率倍数
      // 'prop|probability-probability': false, 当前值与相反值的概率
      var result = options.rule.parameters ?
      random.bool(Number(options.rule.min), Number(options.rule.max), options.template) :
      options.template;
      return result;
    },
    string: function string(options) {
      var source = '';
      var result = '';
      var match;
      var lastIndex = 0;
      if (options.template.length) {
        // 'foo': '★',
        if (options.rule.count === undefined) {
          source += options.template;
        } else
        {
          // 'star|1-5': '★',
          for (var i = 0; i < options.rule.count; i++) {
            source += options.template;
          }
        }
        // 'email|1-10': '@EMAIL, ',
        constant.RE_PLACEHOLDER.exec('');
        while (match = constant.RE_PLACEHOLDER.exec(source)) {
          var index = match.index;
          var input = match[0];
          if (index >= lastIndex) {
            // 遇到转义斜杠，不需要解析占位符
            if (/^\\/.test(input)) {
              result += source.slice(lastIndex, index) + input.slice(1);
              lastIndex = index + input.length;
              continue;
            }
            // console.log(input, options.context.currentContext, options.context.templateCurrentContext, options)
            var replaced = handler$1.placeholder(input, options.context.currentContext, options.context.templateCurrentContext, options);
            // 只有一个占位符，并且没有其他字符，例如：'name': '@EMAIL'
            if (index === 0 && input.length === source.length) {
              result = replaced;
            } else
            {
              result += source.slice(lastIndex, index) + replaced;
            }
            lastIndex = index + input.length;
          }
        }
        if (lastIndex < source.length) {
          result += source.slice(lastIndex);
        }
      } else
      {
        // 'ASCII|1-10': '',
        // 'ASCII': '',
        result = options.rule.range ? random.string(options.rule.count) : options.template;
      }
      return result;
    },
    function: function _function(options) {
      // ( context, options )
      return options.template.call(options.context.currentContext, options);
    },
    regexp: function regexp(options) {
      var source = '';
      // 'name': /regexp/,
      if (options.rule.count === undefined) {
        source += options.template.source; // regexp.source
      } else
      {
        // 'name|1-5': /regexp/,
        for (var i = 0; i < options.rule.count; i++) {
          source += options.template.source;
        }
      }
      return RE.Handler.gen(RE.Parser.parse(source));
    },
    _all: function _all() {
      var re = {};
      for (var key in random) {
        re[key.toLowerCase()] = key;
      }
      return re;
    },
    // 处理占位符，转换为最终值
    placeholder: function placeholder(_placeholder, obj, templateContext, options) {
      // 1 key, 2 params
      // regexp init
      constant.RE_PLACEHOLDER.exec('');
      var parts = constant.RE_PLACEHOLDER.exec(_placeholder);
      var key = parts && parts[1];
      var lkey = key && key.toLowerCase();
      var okey = handler$1._all()[lkey];
      var paramsInput = parts && parts[2] || '';
      var pathParts = handler$1.splitPathToArray(key);
      var params = [];
      // 解析占位符的参数
      try {
        // 1. 尝试保持参数的类型
        // #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
        // [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
        // 应该属于 Window Firefox 30.0 的 BUG
        params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + paramsInput + ')');
      }
      catch (error) {
        // 2. 如果失败，先使用 `[]` 包裹，用 JSON.parse 尝试解析
        try {
          var paramsString = paramsInput.replace(/'/g, '"');
          params = JSON.parse("[" + paramsString + "]");
        }
        catch (e) {
          // 3. 逗号 split 方案兜底
          params = paramsInput.split(/,\s*/);
        }
      }
      // 占位符优先引用数据模板中的属性
      // { first: '@EMAIL', full: '@first' } =>  { first: 'dsa@163.com', full: 'dsa@163.com' }
      if (obj && key in obj) {
        return obj[key];
      }
      // 绝对路径 or 相对路径
      if (key.charAt(0) === '/' || pathParts.length > 1) {
        return handler$1.getValueByKeyPath(key, options);
      }
      // 递归引用数据模板中的属性
      // fix Mock.js#15 避免自己依赖自己)
      if (templateContext && typeof templateContext === 'object' && key in templateContext && _placeholder !== templateContext[key]) {
        // 先计算被引用的属性值
        templateContext[key] = handler$1.gen(templateContext[key], key, {
          currentContext: obj, templateCurrentContext: templateContext });

        return templateContext[key];
      }
      // 如果未找到，则原样返回
      if (!(key in random) && !(lkey in random) && !(okey in random)) {
        return _placeholder;
      }
      // 递归解析参数中的占位符
      for (var i = 0; i < params.length; i++) {
        constant.RE_PLACEHOLDER.exec('');
        if (constant.RE_PLACEHOLDER.test(params[i])) {
          params[i] = handler$1.placeholder(params[i], obj, templateContext, options);
        }
      }
      var handle = random[key] || random[lkey] || random[okey];
      if (isFunction(handle)) {
        // 执行占位符方法（大多数情况）
        handle.options = options;
        var ret = handle.apply(random, params);
        // 因为是在字符串中，所以默认为空字符串。
        if (ret === undefined) {
          ret = '';
        }
        delete handle.options;
        return ret;
      }
      return '';
    },
    getValueByKeyPath: function getValueByKeyPath(key, options) {
      var originalKey = key;
      var keyPathParts = handler$1.splitPathToArray(key);
      var absolutePathParts = [];
      // 绝对路径
      if (key.charAt(0) === '/') {
        absolutePathParts = [options.context.path[0]].concat(handler$1.normalizePath(keyPathParts));
      } else
      {
        // 相对路径
        if (keyPathParts.length > 1) {
          absolutePathParts = options.context.path.slice(0);
          absolutePathParts.pop();
          absolutePathParts = handler$1.normalizePath(absolutePathParts.concat(keyPathParts));
        }
      }
      try {
        key = keyPathParts[keyPathParts.length - 1];
        var currentContext = options.context.root;
        var templateCurrentContext = options.context.templateRoot;
        for (var i = 1; i < absolutePathParts.length - 1; i++) {
          currentContext = currentContext[absolutePathParts[i]];
          templateCurrentContext = templateCurrentContext[absolutePathParts[i]];
        }
        // 引用的值已经计算好
        if (currentContext && key in currentContext) {
          return currentContext[key];
        }
        // 尚未计算，递归引用数据模板中的属性
        // fix #15 避免自己依赖自己
        if (templateCurrentContext &&
        typeof templateCurrentContext === 'object' &&
        key in templateCurrentContext &&
        originalKey !== templateCurrentContext[key]) {
          // 先计算被引用的属性值
          templateCurrentContext[key] = handler$1.gen(templateCurrentContext[key], key, {
            currentContext: currentContext,
            templateCurrentContext: templateCurrentContext });

          return templateCurrentContext[key];
        }
      }
      catch (e) {}
      return '@' + keyPathParts.join('/');
    },
    // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
    normalizePath: function normalizePath(pathParts) {
      var newPathParts = [];
      for (var i = 0; i < pathParts.length; i++) {
        switch (pathParts[i]) {
          case '..':
            newPathParts.pop();
            break;
          case '.':
            break;
          default:
            newPathParts.push(pathParts[i]);}

      }
      return newPathParts;
    },
    splitPathToArray: function splitPathToArray(path) {
      return path.split(/\/+/).filter(function (_) {return _;});
    },
    getTransferTypeCtor: function getTransferTypeCtor(key) {
      var matched = key.match(constant.RE_TRANSFER_TYPE);
      var type = matched && matched[1];
      if (type && transfer.hasOwnProperty(type) && type !== 'extend') {
        return transfer[type];
      }
      return function (value) {return value;};
    } };


  // 把 Mock.js 风格的数据模板转换成 JSON Schema。
  function toJSONSchema(template, name, path) {
    path = path || [];
    var result = {
      name: typeof name === 'string' ? name.replace(constant.RE_KEY, '$1') : name,
      template: template,
      type: _type(template),
      rule: parse(name),
      path: path.slice(0) };

    result.path.push(name === undefined ? 'ROOT' : result.name);
    if (isArray(template)) {
      result.items = [];
      template.forEach(function (item, index) {
        result.items.push(toJSONSchema(item, index, result.path));
      });
    } else
    if (isObject(template)) {
      result.properties = [];
      for (var key in template) {
        result.properties.push(toJSONSchema(template[key], key, result.path));
      }
    }
    return result;
  }

  // ## valid(template, data)
  var Diff = {
    diff: function diff(schema, data, name) {
      var result = [];
      // 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
      if (Diff.name(schema, data, name, result) && Diff.type(schema, data, name, result)) {
        Diff.value(schema, data, name, result);
        Diff.properties(schema, data, name, result);
        Diff.items(schema, data, name, result);
      }
      return result;
    },
    /* jshint unused:false */
    name: function name(schema, _data, _name2, result) {
      var length = result.length;
      Assert.equal('name', schema.path, _name2 + '', schema.name + '', result);
      return result.length === length;
    },
    type: function type(schema, data, _name, result) {
      var length = result.length;
      if (isString(schema.template)) {
        // 占位符类型处理
        if (schema.template.match(constant.RE_PLACEHOLDER)) {
          var actualValue = handler$1.gen(schema.template);
          Assert.equal('type', schema.path, _type(data), _type(actualValue), result);
          return result.length === length;
        }
      } else
      if (isArray(schema.template)) {
        if (schema.rule.parameters) {
          // name|count: array
          if (schema.rule.min !== undefined && schema.rule.max === undefined) {
            // 跳过 name|1: array，因为最终值的类型（很可能）不是数组，也不一定与 `array` 中的类型一致
            if (schema.rule.count === 1) {
              return true;
            }
          }
          // 跳过 name|+inc: array
          if (schema.rule.parameters[2]) {
            return true;
          }
        }
      } else
      if (isFunction(schema.template)) {
        // 跳过 `'name': function`，因为函数可以返回任何类型的值。
        return true;
      }
      Assert.equal('type', schema.path, _type(data), schema.type, result);
      return result.length === length;
    },
    value: function value(schema, data, name, result) {
      var length = result.length;
      var rule = schema.rule;
      var templateType = schema.type;
      if (templateType === 'object' || templateType === 'array' || templateType === 'function') {
        return true;
      }
      // 无生成规则
      if (!rule.parameters) {
        if (isRegExp(schema.template)) {
          Assert.match('value', schema.path, data, schema.template, result);
          return result.length === length;
        }
        if (isString(schema.template)) {
          // 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
          if (schema.template.match(constant.RE_PLACEHOLDER)) {
            return result.length === length;
          }
        }
        Assert.equal('value', schema.path, data, schema.template, result);
        return result.length === length;
      }
      // 有生成规则
      var actualRepeatCount;
      if (isNumber(schema.template)) {
        var parts = (data + '').split('.');
        var intPart = Number(parts[0]);
        var floatPart = parts[1];
        // 整数部分
        // |min-max
        if (rule.min !== undefined && rule.max !== undefined) {
          Assert.greaterThanOrEqualTo('value', schema.path, intPart, Math.min(Number(rule.min), Number(rule.max)), result);
          // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
          Assert.lessThanOrEqualTo('value', schema.path, intPart, Math.max(Number(rule.min), Number(rule.max)), result);
        }
        // |count
        if (rule.min !== undefined && rule.max === undefined) {
          Assert.equal('value', schema.path, intPart, Number(rule.min), result, '[value] ' + name);
        }
        // 小数部分
        if (rule.decimal) {
          // |dmin-dmax
          if (rule.dmin !== undefined && rule.dmax !== undefined) {
            Assert.greaterThanOrEqualTo('value', schema.path, floatPart.length, Number(rule.dmin), result);
            Assert.lessThanOrEqualTo('value', schema.path, floatPart.length, Number(rule.dmax), result);
          }
          // |dcount
          if (rule.dmin !== undefined && rule.dmax === undefined) {
            Assert.equal('value', schema.path, floatPart.length, Number(rule.dmin), result);
          }
        }
      } else
      if (isString(schema.template)) {
        // 'aaa'.match(/a/g)
        actualRepeatCount = data.match(new RegExp(schema.template, 'g'));
        actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;
        // |min-max
        if (rule.min !== undefined && rule.max !== undefined) {
          Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, Number(rule.min), result);
          Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, Number(rule.max), result);
        }
        // |count
        if (rule.min !== undefined && rule.max === undefined) {
          Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
        }
      } else
      if (isRegExp(schema.template)) {
        actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'));
        actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;
        // |min-max
        if (rule.min !== undefined && rule.max !== undefined) {
          Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, Number(rule.min), result);
          Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, Number(rule.max), result);
        }
        // |count
        if (rule.min !== undefined && rule.max === undefined) {
          Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
        }
      }
      return result.length === length;
    },
    properties: function properties(schema, data, _name, result) {
      var length = result.length;
      var rule = schema.rule;
      var keys$1 = keys(data);
      if (!schema.properties) {
        return;
      }
      // 无生成规则
      if (!schema.rule.parameters) {
        Assert.equal('properties length', schema.path, keys$1.length, schema.properties.length, result);
      } else
      {
        // 有生成规则
        // |min-max
        if (rule.min !== undefined && rule.max !== undefined) {
          Assert.greaterThanOrEqualTo('properties length', schema.path, keys$1.length, Math.min(Number(rule.min), Number(rule.max)), result);
          Assert.lessThanOrEqualTo('properties length', schema.path, keys$1.length, Math.max(Number(rule.min), Number(rule.max)), result);
        }
        // |count
        if (rule.min !== undefined && rule.max === undefined) {
          // |1, |>1
          if (rule.count !== 1) {
            Assert.equal('properties length', schema.path, keys$1.length, Number(rule.min), result);
          }
        }
      }
      if (result.length !== length) {
        return false;
      }
      var _loop_1 = function _loop_1(i) {
        var property;
        schema.properties.forEach(function (item) {
          if (item.name === keys$1[i]) {
            property = item;
          }
        });
        property = property || schema.properties[i];
        result.push.apply(result, Diff.diff(property, data[keys$1[i]], keys$1[i]));
      };
      for (var i = 0; i < keys$1.length; i++) {
        _loop_1(i);
      }
      return result.length === length;
    },
    items: function items(schema, data, _name, result) {
      var length = result.length;
      if (!schema.items) {
        return;
      }
      var rule = schema.rule;
      // 无生成规则
      if (!schema.rule.parameters) {
        Assert.equal('items length', schema.path, data.length, schema.items.length, result);
      } else
      {
        // 有生成规则
        // |min-max
        if (rule.min !== undefined && rule.max !== undefined) {
          Assert.greaterThanOrEqualTo('items', schema.path, data.length, Math.min(Number(rule.min), Number(rule.max)) * schema.items.length, result, '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements');
          Assert.lessThanOrEqualTo('items', schema.path, data.length, Math.max(Number(rule.min), Number(rule.max)) * schema.items.length, result, '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements');
        }
        // |count
        if (rule.min !== undefined && rule.max === undefined) {
          // |1, |>1
          if (rule.count === 1) {
            return result.length === length;
          } else
          {
            Assert.equal('items length', schema.path, data.length, Number(rule.min) * schema.items.length, result);
          }
        }
        // |+inc
        if (rule.parameters && rule.parameters[2]) {
          return result.length === length;
        }
      }
      if (result.length !== length) {
        return false;
      }
      for (var i = 0; i < data.length; i++) {
        result.push.apply(result, Diff.diff(schema.items[i % schema.items.length], data[i], i % schema.items.length));
      }
      return result.length === length;
    } };

  // 完善、友好的提示信息
  //
  // Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
  // 路径 验证类型 描述
  //
  // Expect path.name is less than or equal to expected, but path.name is actual.
  //
  //   Expect path.name is less than or equal to expected, but path.name is actual.
  //   Expect path.name is greater than or equal to expected, but path.name is actual.
  var Assert = {
    message: function message(item) {
      if (item.message) {
        return item.message;
      }
      var upperType = item.type.toUpperCase();
      var lowerType = item.type.toLowerCase();
      var path = isArray(item.path) && item.path.join('.') || item.path;
      var action = item.action;
      var expected = item.expected;
      var actual = item.actual;
      return "[" + upperType + "] Expect " + path + "'" + lowerType + " " + action + " " + expected + ", but is " + actual;
    },
    equal: function equal(type, path, actual, expected, result, message) {
      if (actual === expected) {
        return true;
      }
      // 正则模板 === 字符串最终值
      if (type === 'type' && expected === 'regexp' && actual === 'string') {
        return true;
      }
      result.push(Assert.createDiffResult(type, path, actual, expected, message, 'is equal to'));
      return false;
    },
    // actual matches expected
    match: function match(type, path, actual, expected, result, message) {
      if (expected.test(actual)) {
        return true;
      }
      result.push(Assert.createDiffResult(type, path, actual, expected, message, 'matches'));
      return false;
    },
    greaterThanOrEqualTo: function greaterThanOrEqualTo(type, path, actual, expected, result, message) {
      if (actual >= expected) {
        return true;
      }
      result.push(Assert.createDiffResult(type, path, actual, expected, message, 'is greater than or equal to'));
      return false;
    },
    lessThanOrEqualTo: function lessThanOrEqualTo(type, path, actual, expected, result, message) {
      if (actual <= expected) {
        return true;
      }
      result.push(Assert.createDiffResult(type, path, actual, expected, message, 'is less than or equal to'));
      return false;
    },
    createDiffResult: function createDiffResult(type, path, actual, expected, message, action) {
      var item = {
        path: path,
        type: type,
        actual: actual,
        expected: expected,
        action: action,
        message: message };

      item.message = Assert.message(item);
      return item;
    } };

  var valid = function valid(template, data) {
    var schema = toJSONSchema(template);
    return Diff.diff(schema, data);
  };
  valid.Diff = Diff;
  valid.Assert = Assert;

  function rgx(str, loose) {
    if (str instanceof RegExp) return { keys: false, pattern: str };
    var c,o,tmp,ext,keys = [],pattern = '',arr = str.split('/');
    arr[0] || arr.shift();

    while (tmp = arr.shift()) {
      c = tmp[0];
      if (c === '*') {
        keys.push('wild');
        pattern += '/(.*)';
      } else if (c === ':') {
        o = tmp.indexOf('?', 1);
        ext = tmp.indexOf('.', 1);
        keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
        pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
        if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
      } else {
        pattern += '/' + tmp;
      }
    }

    return {
      keys: keys,
      pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i') };

  }

  var IMocked = /** @class */function () {
    function IMocked() {
      this._mocked = {};
    }
    IMocked.prototype.set = function (key, value) {
      this._mocked[key] = value;
    };
    IMocked.prototype.getMocked = function () {
      return this._mocked;
    };
    // 查找与请求参数匹配的数据模板：URL，Type
    IMocked.prototype.find = function (url, type) {
      var mockedItems = Object.values(this._mocked);
      for (var i = 0; i < mockedItems.length; i++) {
        var item = mockedItems[i];
        var urlMatched = this._matchUrl(item.rurl, url);
        var typeMatched = this._matchType(item.rtype, type);
        if (!item.rtype && urlMatched) {
          return item;
        }
        if (urlMatched && typeMatched) {
          return item;
        }
      }
    };
    /**
        * 数据模板转换成 mock 数据
        * @param item 发请求时匹配到的 mock 数据源
        * @param options 包含请求头，请求体，请求方法等
        */
    IMocked.prototype.convert = function (item, options) {
      return isFunction(item.template) ? item.template(options) : handler$1.gen(item.template);
    };
    IMocked.prototype._matchUrl = function (expected, actual) {
      if (isString(expected)) {
        if (expected === actual) {
          return true;
        }
        // expected: /hello/world
        // actual: /hello/world?type=1
        if (actual.indexOf(expected) === 0 && actual[expected.length] === '?') {
          return true;
        }
        if (expected.indexOf('/') === 0) {
          return rgx(expected).pattern.test(actual);
        }
      }
      if (isRegExp(expected)) {
        return expected.test(actual);
      }
      return false;
    };
    IMocked.prototype._matchType = function (expected, actual) {
      if (isString(expected) || isRegExp(expected)) {
        return new RegExp(expected, 'i').test(actual);
      }
      return false;
    };
    return IMocked;
  }();
  var mocked = new IMocked();

  var Setting = /** @class */function () {
    function Setting() {
      this._setting = {
        timeout: '10-100' };

    }
    Setting.prototype.setup = function (setting) {
      Object.assign(this._setting, setting);
    };
    Setting.prototype.parseTimeout = function (timeout) {
      if (timeout === void 0) {timeout = this._setting.timeout;}
      if (typeof timeout === 'number') {
        return timeout;
      }
      if (typeof timeout === 'string' && timeout.indexOf('-') === -1) {
        return parseInt(timeout, 10);
      }
      if (typeof timeout === 'string' && timeout.indexOf('-') !== -1) {
        var tmp = timeout.split('-');
        var min = parseInt(tmp[0], 10);
        var max = parseInt(tmp[1], 10);
        return Math.round(Math.random() * (max - min)) + min;
      }
      return 0;
    };
    return Setting;
  }();
  var setting = new Setting();

  // 获取小程序平台标识
  function getMpPlatform() {
    var global;
    var name;
    if (typeof wx !== 'undefined') {
      global = wx;
      name = 'wx';
    } else
    if (typeof my !== 'undefined') {
      global = my;
      name = 'my';
    } else
    if (typeof tt !== 'undefined') {
      global = tt;
      name = 'tt';
    } else
    if (typeof swan !== 'undefined') {
      global = swan;
      name = 'swan';
    }
    assert(global && name, 'Invalid mini-program platform, just work in "wx", "my", "tt" or "swan"!');
    return { global: global, name: name };
  }
  var platform = getMpPlatform();
  var platformName = platform.name;
  var platformRequest = platform.global.request;
  function MockRequest(opts) {
    var options = {
      url: opts.url,
      type: opts.method || 'GET',
      body: opts.data || null,
      headers: opts.header || opts.headers || {} };

    // 查找与请求参数匹配的数据模板
    var item = mocked.find(options.url, options.type);
    // 如果未找到匹配的数据模板，则采用原生 request 发送请求。
    if (!item) {
      return platformRequest(opts);
    }
    // 找到了匹配的数据模板，拦截 fetch 请求
    var responseData = mocked.convert(item, options);
    var successOptions;
    if (platformName === 'my') {
      successOptions = {
        status: 200,
        data: responseData,
        headers: {} };

    } else
    {
      successOptions = {
        statusCode: 200,
        data: responseData,
        header: {} };

    }
    if (isFunction(opts.success) || isFunction(opts.complete)) {
      setTimeout(function () {
        isFunction(opts.success) && opts.success(successOptions);
        isFunction(opts.complete) && opts.complete(successOptions);
      }, setting.parseTimeout());
    }
  }
  // 覆盖原生的 request 方法
  function overrideRequest() {
    if (!platform.global.request.__MOCK__) {
      // 小程序 API 做了 setter 限制，不能直接复制
      Object.defineProperty(platform.global, 'request', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: MockRequest });

      platform.global.request.__MOCK__ = true;
    }
  }

  // For mini-program
  var Mock = {
    Handler: handler$1,
    Random: random,
    Transfer: transfer,
    Util: Util,
    RE: RE,
    toJSONSchema: toJSONSchema,
    valid: valid,
    mock: mock,
    setup: setting.setup.bind(setting),
    _mocked: mocked.getMocked(),
    version: '0.3.6' };

  // 根据数据模板生成模拟数据。
  function mock(rurl, rtype, template) {
    assert(arguments.length, 'The mock function needs to pass at least one parameter!');
    // Mock.mock(template)
    if (arguments.length === 1) {
      return handler$1.gen(rurl);
    }
    // Mock.mock(url, template)
    if (arguments.length === 2) {
      template = rtype;
      rtype = undefined;
    }
    overrideRequest();
    var key = String(rurl) + String(rtype);
    mocked.set(key, { rurl: rurl, rtype: rtype, template: template });
    return Mock;
  }

  return Mock;

});

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
/*!************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
  {
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087 },

  {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057 },

  {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086 },

  {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084 },

  {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085 },

  {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083 },

  {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078 },

  {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079 },

  {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080 },

  {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081 },

  {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082 },

  {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072 },

  {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073 },

  {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074 },

  {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075 },

  {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076 },

  {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077 },

  {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071 },

  {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055 },

  {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037 },

  {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032 },

  {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065 },

  {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070 },
  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070 },

  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },
  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961 },

  {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986 },

  {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059 },

  {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060 },

  {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953 },

  {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058 },

  {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056 },

  {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052 },

  {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053 },

  {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054 },

  {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011 },

  {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016 },

  {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023 },

  {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040 },

  {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041 },

  {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042 },

  {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043 },

  {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044 },

  {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045 },

  {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046 },

  {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047 },

  {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048 },

  {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049 },

  {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050 },

  {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051 },

  {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033 },

  {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034 },

  {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035 },

  {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036 },

  {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038 },

  {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039 },

  {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026 },

  {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027 },

  {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028 },

  {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029 },

  {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030 },

  {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031 },

  {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022 },

  {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024 },

  {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025 },

  {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007 },

  {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008 },

  {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009 },

  {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010 },

  {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012 },

  {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013 },

  {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014 },

  {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015 },

  {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017 },

  {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018 },

  {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019 },

  {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020 },

  {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021 },

  {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001 },

  {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002 },

  {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003 },

  {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004 },

  {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005 },

  {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006 },

  {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988 },

  {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989 },

  {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990 },

  {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991 },

  {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992 },

  {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993 },

  {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994 },

  {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995 },

  {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996 },

  {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997 },

  {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998 },

  {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999 },

  {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000 },

  {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984 },

  {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985 },

  {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987 },

  {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968 },

  {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969 },

  {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970 },

  {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971 },

  {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972 },

  {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973 },

  {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974 },

  {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975 },

  {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976 },

  {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977 },

  {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978 },

  {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979 },

  {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980 },

  {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981 },

  {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982 },

  {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983 },

  {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966 },

  {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967 },

  {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949 },

  {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950 },

  {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951 },

  {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952 },

  {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954 },

  {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955 },

  {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956 },

  {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957 },

  {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958 },

  {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959 },

  {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960 },

  {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962 },

  {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963 },

  {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964 },

  {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965 },

  {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948 },

  {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938 },

  {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940 },

  {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941 },

  {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942 },

  {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943 },

  {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945 },

  {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947 },

  {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937 },

  {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931 },

  {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930 },

  {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922 },

  {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919 },

  {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921 },

  {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923 },

  {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924 },

  {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927 },

  {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928 },

  {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929 }] };exports.default = _default;

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
/*!********************************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.createAnimation = createAnimation;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var


MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {_classCallCheck(this, MPAnimation);
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;

  }_createClass(MPAnimation, [{ key: "_nvuePushAnimates", value: function _nvuePushAnimates(

    type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {} };

      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    } }, { key: "_animateRun", value: function _animateRun()
    {var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles },
        config),
        function (res) {
          resolve();
        });
      });
    } }, { key: "_nvueNextAnimate", value: function _nvueNextAnimate(

    animates) {var _this2 = this;var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {var

        styles =

        obj.styles,config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    } }, { key: "step", value: function step()

    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.animation.step(config);






      return this;
    } }, { key: "run", value: function run(

    fn) {

      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);








    } }]);return MPAnimation;}();



var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d',
'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY',
'translateZ'];

var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {var _this$animation;

    (_this$animation = this.animation)[type].apply(_this$animation, arguments);




    return this;
  };
});

function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/*!**********************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/components/u-swiper/props.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: uni.$u.props.swiper.list },

    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: uni.$u.props.swiper.indicator },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorInactiveColor },

    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: uni.$u.props.swiper.indicatorStyle },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiper.indicatorMode },

    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: uni.$u.props.swiper.autoplay },

    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: uni.$u.props.swiper.current },

    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: uni.$u.props.swiper.currentItemId },

    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: uni.$u.props.swiper.interval },

    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.swiper.duration },

    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: uni.$u.props.swiper.circular },

    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.previousMargin },

    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.nextMargin },

    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: uni.$u.props.swiper.acceleration },

    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: uni.$u.props.swiper.displayMultipleItems },

    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: uni.$u.props.swiper.easingFunction },

    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: uni.$u.props.swiper.keyName },

    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: uni.$u.props.swiper.imgMode },

    // 组件高度
    height: {
      type: [String, Number],
      default: uni.$u.props.swiper.height },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.swiper.bgColor },

    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: uni.$u.props.swiper.radius },

    // 是否加载中
    loading: {
      type: Boolean,
      default: uni.$u.props.swiper.loading },

    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: uni.$u.props.swiper.showTitle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/*!****************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/components/u-loading-icon/props.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.show },

    // 颜色
    color: {
      type: String,
      default: uni.$u.props.loadingIcon.color },

    // 提示文字颜色
    textColor: {
      type: String,
      default: uni.$u.props.loadingIcon.textColor },

    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.vertical },

    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: uni.$u.props.loadingIcon.mode },

    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.size },

    // 文字大小
    textSize: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.textSize },

    // 文字内容
    text: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.text },

    // 动画模式
    timingFunction: {
      type: String,
      default: uni.$u.props.loadingIcon.timingFunction },

    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.duration },

    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: uni.$u.props.loadingIcon.inactiveColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/*!********************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/components/u-swiper-indicator/props.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 轮播的长度
    length: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.length },

    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.current },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorInactiveColor },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorMode } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/components/u-count-down/props.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: uni.$u.props.countDown.time },

    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: uni.$u.props.countDown.format },

    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: uni.$u.props.countDown.autoStart },

    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: uni.$u.props.countDown.millisecond } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 279 */
/*!**************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/uni_modules/uview-ui/components/u-count-down/utils.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.parseTimeData = parseTimeData;exports.parseFormat = parseFormat;exports.isSameSecond = isSameSecond; // 补0，如1 -> 01
function padZero(num) {var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = "".concat(num);
  while (str.length < targetLength) {
    str = "0".concat(str);
  }
  return str;
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds };

}
function parseFormat(format, timeData) {var

  days =




  timeData.days,hours = timeData.hours,minutes = timeData.minutes,seconds = timeData.seconds,milliseconds = timeData.milliseconds;
  // 如果格式化字符串中不存在DD(天)，则将天的时间转为小时中去
  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    // 对天补0
    format = format.replace('DD', padZero(days));
  }
  // 其他同理于DD的格式化处理方式
  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', padZero(hours));
  }
  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', padZero(minutes));
  }
  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', padZero(seconds));
  }
  return format.replace('SSS', padZero(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map