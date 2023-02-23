(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["views/address/common/vendor"],{

/***/ 325:
/*!*****************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/static/xuan-linkAddress/get_linkAddress_p.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _api = _interopRequireDefault(__webpack_require__(/*! @/views/address/xuan-linkAddress/api.js */ 326));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  /*
  *_this:全局this
  * data:数据(参数)
  * callback:回掉
  */
  get_linkAddress: function get_linkAddress(_this, tag, data, callback) {
    //请求
    _api.default.get_linkAddress_api(data).then(function (res) {
      var revert = res.data.data;
      console.log(revert);
      if (res.data.code == 1) {
        if (tag === "province") {
          console.log("province");
          _this.linkAddress_area[0].info = revert;
          callback(true); //回掉
        }
        if (tag === "city") {
          console.log("city");
          _this.linkAddress_area[1].info = revert;
          callback(true); //回掉
        }
        if (tag === "district") {
          console.log("district");
          _this.linkAddress_area[2].info = revert;
          callback(true); //回掉
        }
      }
    });
  } };exports.default = _default;

/***/ }),

/***/ 326:
/*!**********************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/views/address/xuan-linkAddress/api.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! @/static/xuan-linkAddress/request.js */ 327));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//创建Request对象
var request = new _request.default();var _default =

{
  //data 参数值
  get_linkAddress_api: function get_linkAddress_api(data) {
    // console.log(data);
    return request.http('/api/address/area', data, 'GET');
  } };exports.default = _default;

/***/ }),

/***/ 327:
/*!*******************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/static/xuan-linkAddress/request.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} //网络请求
var Request = /*#__PURE__*/function () {function Request() {_classCallCheck(this, Request);}_createClass(Request, [{ key: "http",
    /*
                                                                                                                                  *paramete 参数
                                                                                                                                  * data 参数值
                                                                                                                                  * method 请求方式
                                                                                                                                  */value: function http(
    paramete, data, method) {
      //根地址
      var BASE_API = "https://admin.farmereasy.com";
      return new Promise(function (resolve, reject) {
        uni.request({
          url: "".concat(BASE_API).concat(paramete),
          data: data,
          method: method,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            resolve(0);
          } });

      });
    } }]);return Request;}();exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/views/address/common/vendor.js.map