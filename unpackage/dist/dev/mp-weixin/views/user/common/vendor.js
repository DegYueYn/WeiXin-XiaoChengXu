(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["views/user/common/vendor"],{

/***/ 170:
/*!***********************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/utils/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.happenTimeFun = void 0;var happenTimeFun = function happenTimeFun(num) {//时间戳数据处理
  var date = new Date(num * 1000);
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var y = date.getFullYear();
  var MM = date.getMonth() + 1;
  MM = MM < 10 ? '0' + MM : MM; //月补0
  var d = date.getDate();
  d = d < 10 ? '0' + d : d; //天补0
  var h = date.getHours();
  h = h < 10 ? '0' + h : h; //小时补0
  var m = date.getMinutes();
  m = m < 10 ? '0' + m : m; //分钟补0
  var s = date.getSeconds();
  s = s < 10 ? '0' + s : s; //秒补0
  return y + '-' + MM + '-' + d;
  // return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
};exports.happenTimeFun = happenTimeFun;

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/views/user/common/vendor.js.map