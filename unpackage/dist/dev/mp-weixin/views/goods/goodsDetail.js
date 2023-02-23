require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["views/goods/goodsDetail"],{

/***/ 206:
/*!*******************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/main.js?{"page":"views%2Fgoods%2FgoodsDetail"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _goodsDetail = _interopRequireDefault(__webpack_require__(/*! ./views/goods/goodsDetail.vue */ 207));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_goodsDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 207:
/*!************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=template&id=4f9e430f&scoped=true& */ 208);
/* harmony import */ var _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=script&lang=js& */ 210);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=style&index=0&id=4f9e430f&scoped=true&lang=scss& */ 215);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f9e430f",
  null,
  false,
  _goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "views/goods/goodsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 208:
/*!*******************************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=template&id=4f9e430f&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=template&id=4f9e430f&scoped=true& */ 209);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_4f9e430f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 209:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=template&id=4f9e430f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSwiper: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-swiper/u-swiper */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-swiper/u-swiper.vue */ 262))
    },
    uCountDown: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-count-down/u-count-down */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-count-down/u-count-down")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-count-down/u-count-down.vue */ 270))
    },
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 255))
    },
    uIcon: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 279))
    },
    uPopup: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 288))
    },
    uLine: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-line/u-line */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-line/u-line")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-line/u-line.vue */ 296))
    },
    uCodeInput: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-code-input/u-code-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-code-input/u-code-input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-code-input/u-code-input.vue */ 304))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = !_vm.bigImage ? Number(_vm.goodsInfo.salePrice).toFixed(2) : null
  var g1 = !_vm.bigImage
    ? Number(_vm.goodsInfo.marketPrice * _vm.number).toFixed(2)
    : null
  var g2 = !_vm.bigImage
    ? Number(_vm.goodsInfo.salePrice * _vm.number).toFixed(2)
    : null
  var g3 =
    !_vm.bigImage && !(_vm.choose == "add")
      ? Number(_vm.goodsInfo.salePrice * _vm.number).toFixed(2)
      : null
  var g4 = !_vm.bigImage
    ? Number(_vm.goodsInfo.salePrice * _vm.number).toFixed(2)
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 210:
/*!*************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=script&lang=js& */ 211);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 211:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 36));






































































































































































































































var _canvasUtils = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/fan-canvas/canvasUtils */ 212));
var _utils = __webpack_require__(/*! @/uni_modules/fan-canvas/plugins/utils */ 213);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}


// 需要保存图片和生成二维码可以引用此文件
var _default =
{

  data: function data() {
    return {
      bigImage: '',
      pwd: '',
      size: 'S【建议100斤以内】',
      number: 1,
      show: false,
      sizeList: [
      { title: 'S【建议100斤以内】' },
      { title: 'M【建议100-115斤】' },
      { title: 'L【建议115-130斤】' },
      { title: 'XL【建议130-140斤】' },
      { title: 'XXL【建议140-160斤】' }],

      addressInfo: [],
      Itemindex: 0,
      Sizeindex: 0,
      choose: '', //选择加入购物车还是立即购买
      goodsImg: '',
      canvasImg: '', //生成的海报图片
      qrcodeImg: '', //二维码本地图片
      content: '', //内容
      textImg: '', //文本超出省略
      change: false,
      goodsInfo: [],
      list: [],
      timeData: {},
      time: '',
      note: '',
      btnList: [{
        icon: '/static/goodsDetail/store.png',
        name: '店铺' },
      {
        icon: '/static/goodsDetail/car.png',
        name: '购物车' }],

      tagList: [{
        'tag': '购买得积分' },

      {
        'tag': '首单免邮' },

      {
        'tag': '七天无理由退换' }] };



  },
  onReady: function onReady() {
    this.createQrcode();
  },
  onShow: function onShow() {
    // console.log('fff',this.addressInfo);
  },
  onLoad: function onLoad(op) {

    this.getDetail(op.goodsId);
    var addressList = uni.getStorageSync('address');
    console.log('addressList', addressList);
    if (addressList.length > 0) {
      if (addressList[0].isDefaultAddress) {
        this.addressInfo = addressList[0];
      }
    }

    // console.log('this.addressInfo',this.addressInfo);


  },
  methods: {
    tapImg: function tapImg(e) {
      console.log('轮播图', this.list[e]);
      this.bigImage = this.list[e];

    },
    // 加入购物车
    addCard: function addCard() {

      if (!uni.getStorageSync('cardList')) {
        var list = [];
        var goods = {
          "goodsName": this.goodsInfo.goodsName,
          "goodsPrice": this.goodsInfo.salePrice,
          "goodsStore": this.goodsInfo.storeName,
          "goodsImg": this.goodsInfo.goodsImg,
          "size": this.size,
          "remark": this.note,
          "number": this.number,
          "rank": this.goodsInfo.rank,
          "discount": this.goodsInfo.discount };

        list.push(goods);
        uni.setStorageSync('cardList', list);
        uni.$showMsg('加入购物车成功！', 'none', 2000);
        this.$refs.selectItem.close();

      } else {
        var _list = uni.getStorageSync('cardList');
        var _goods = {
          "goodsName": this.goodsInfo.goodsName,
          "goodsPrice": this.goodsInfo.salePrice,
          "goodsStore": this.goodsInfo.storeName,
          "goodsImg": this.goodsInfo.goodsImg,
          "size": this.size,
          "remark": this.note,
          "number": this.number,
          "rank": this.goodsInfo.rank,
          "discount": this.goodsInfo.discount };

        _list.push(_goods);
        uni.setStorageSync('cardList', _list);
        uni.$showMsg('加入购物车成功√', 'none', 2000);
        this.$refs.selectItem.close();
      }




    },
    descNumber: function descNumber() {
      if (this.number <= 1)
      {uni.$showMsg('不能再少了', 'none', 2000);} else
      {
        this.number--;
      }
    },
    // 支付弹窗的支付方式
    PAY: function PAY() {
      uni.$showMsg('暂不支持其他方式支付！', 'none', 2000);
    },

    // 密码输入完成的回调
    finish: function finish(e) {var _this = this;
      setTimeout(function () {
        _this.show = false;
        var order = uni.getStorageSync('orderList');
        console.log('order[order.length-1]', order[order.length - 1]);
        uni.request({
          url: "/api/order",
          data: {
            "order": order[order.length - 1] },

          success: function success(res) {
            var orderData = [];
            orderData = res.data;
            console.log('orderData', orderData);
            order[order.length - 1].type = 'success';
            console.log('order', order);
            uni.setStorageSync('orderList', order);
            uni.hideLoading();
            uni.navigateTo({
              url: '/views/goods/paySuccess?orderData=' + JSON.stringify(orderData) });

          } });




      }, 1000);
      uni.showLoading({
        title: '支付中...' });


    },
    addNumber: function addNumber() {
      this.number++;

    },
    // 地址选择
    toAddress: function toAddress() {
      uni.navigateTo({
        url: "/views/address/address" });

    },
    // 立即购买按钮
    pay: function pay() {var _this2 = this;
      if (!this.addressInfo.name || !this.addressInfo.phoneNumber || !this.addressInfo.address) {
        uni.$showMsg('请完善收货地址信息！', 'none', 2000);
        return;
      } else {
        var order = {
          "goodsName": this.goodsInfo.goodsName,
          "goodsPrice": this.goodsInfo.salePrice * this.number,
          "goodsStore": this.goodsInfo.storeName,
          "address": this.addressInfo.address + this.addressInfo.addArea,
          "name": this.addressInfo.name,
          "size": this.size,
          "time": new Date().getTime(),
          "remark": this.note,
          "phone": this.addressInfo.phoneNumber };

        if (!uni.getStorageSync('orderList')) {
          var list = [];
          list.push(order);
          uni.setStorageSync('orderList', list);

        } else {
          var _list2 = uni.getStorageSync('orderList');
          _list2.push(order);
          uni.setStorageSync('orderList', _list2);

        }

        setTimeout(function () {
          _this2.show = true;

          uni.hideLoading();
        }, 1000);
        uni.showLoading({
          title: '支付中...' });

      }




    },
    close: function close() {
      this.show = false;

    },

    //购买或购物车按钮
    openselectItem: function openselectItem(item) {
      if (item == 'buy') {
        this.$refs.selectItem.open();
        this.choose = 'buy';

      } else {
        this.$refs.selectItem.open();
        this.choose = 'add';
      }
    },
    // 选择尺寸
    chooseSize: function chooseSize(e, i) {
      this.Sizeindex = i;
      this.size = e.title;

    },
    // 选择分类
    chooseItem: function chooseItem(e, i) {
      // console.log('分类',e);
      this.goodsInfo.goodsImg = e;
      this.Itemindex = i;

    },
    // 关闭购买弹窗
    closeselectItem: function closeselectItem() {
      this.$refs.selectItem.close();
    },

    //底部购买栏按钮
    goWhere: function goWhere(item) {
      // console.log(item);
      if (item.name == '店铺') {
        uni.$showMsg('查看店铺功能开发中...', 'none', 2000);
      } else if (item.name == '购物车') {
        uni.switchTab({
          url: '/pages/car/car' });

      }
    },


    //点击微信分享出现的dialog
    showDialog: function showDialog() {
      this.$refs.share.open();
    },
    hideDialog: function hideDialog() {
      this.$refs.share.close();
    },
    //获取详情
    getDetail: function getDetail(item) {var _this3 = this;
      uni.request({
        url: '/api/goodsDetail',
        data: {
          "goodsId": Number(item) },

        success: function success(res) {
          // console.log(res.data.goodsDetail);
          if (res.data.code == 200) {
            _this3.goodsInfo = res.data.goodsDetail;
            console.log(_this3.goodsInfo, 'this.goodsInfo');
            _this3.goodsImg = _this3.goodsInfo.goodsImg;
            // console.log('goodsImg', this.goodsImg);
            _this3.time = _this3.goodsInfo.expirationTime * 1000 - Number(new Date().
            getTime());
            for (var img in res.data.goodsDetail.goodsDetail) {
              _this3.list.push(res.data.goodsDetail.goodsDetail[img].img);

            }
            // console.log(this.list);

          }
        } });

    },
    removebigImage: function removebigImage() {
      this.bigImage = '';
    },
    changeIcon: function changeIcon() {
      this.change = !this.change;
      uni.$showMsg("".concat(this.change ? '收藏成功' : '已取消收藏'), 'none', 2000);
    },
    //倒计时
    onChange: function onChange(e) {
      this.timeData = e;
      // console.log(e);
    },
    createGoodsPoster: function createGoodsPoster() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that, cvsW, cvsH, goodsH, logo_w, margin, family, ctx, logo, options;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:


                _this4.hideDialog();if (!
                _this4.canvasImg) {_context.next = 3;break;}return _context.abrupt("return");case 3:


                that = _this4;

                uni.showLoading({
                  title: '海报生成中' });

                cvsW = 600;
                cvsH = 730;
                goodsH = 400;
                logo_w = 100;
                margin = 30;
                family =
                " 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei',sans-serif";
                ctx = uni.createCanvasContext('firstCanvas');
                // 绘制矩形
                _canvasUtils.default.fillRoundRect(ctx, 0, 0, cvsW, cvsH, 20, "#ffffff");
                // 同步加载图片
                _context.next = 15;return _canvasUtils.default.getImageInfo(that.goodsImg);case 15:logo = _context.sent;
                if (logo.path) {
                  // save+clip+restore:防止图片超出边框显示--相当于overflow: hidden;
                  ctx.save();
                  ctx.clip(); //剪切--不允许超出矩形框
                  // 绘制商品图片
                  _canvasUtils.default.drawImgCover(ctx, logo, 0, 0, cvsW, goodsH);
                  ctx.restore();

                  // 价格符号
                  // ctx.setFillStyle('#ff0036')
                  // ctx.font = "24px" + family
                  // ctx.fillText('￥', margin - 5, 450)
                  // 价格
                  // ctx.font = "30px" + family
                  // ctx.fillText(`会员价:${this.goodsInfo.salePrice}`, 50, 450)

                  // 绘制圆角按钮
                  // 参数：cxt、背景颜色、x坐标、y坐标、宽度、高度、圆角、文字、文字颜色、文字位置
                  ctx.font = '22px' + family;
                  _canvasUtils.default.drawButton(ctx, 'red', 65, 418, 170, 52, 16, "\u4F1A\u5458\u4EF7:".concat(_this4.goodsInfo.salePrice), '#ffffff',
                  'center');
                  // 简介-多行文字
                  ctx.setFillStyle('#666666');
                  ctx.textAlign = 'left';
                  options = {
                    font: "normal 26px" + family, //设置字体
                    ctx: ctx,
                    word: that.goodsInfo.goodsName, //文本
                    maxWidth: 540, //最大宽度
                    maxLine: 2, //最大行数--超出省略
                    x: margin, //x坐标
                    y: 450, //y坐标
                    l_h: 40 //行高
                  };

                  // 文本自定义换行
                  _canvasUtils.default.dealWords(options);
                  // 绘制圆形头像
                  _canvasUtils.default.drawCircular(ctx, logo.path, margin, goodsH + margin + 160, logo_w, logo_w);
                  // 名称
                  ctx.setFillStyle('#000000');
                  ctx.font = "bold 26px" + family;
                  ctx.fillText("".concat(uni.getStorageSync('nickname'), " \u4E3A\u60A8\u63A8\u8350"), logo_w + margin + 10, goodsH + margin + 195);
                  // 简介
                  ctx.setFillStyle('#999999');
                  ctx.font = "normal 22px" + family;
                  ctx.fillText('快来和我一起看看吧！', logo_w + margin + 10, goodsH + margin + 235);
                  // 绘制二维码
                  ctx.drawImage(that.qrcodeImg, cvsW - margin - 150, goodsH + margin + 80 + 50, 150, 150);
                  // 绘制图片
                  ctx.draw(false, function () {
                    uni.canvasToTempFilePath({
                      width: cvsW,
                      height: cvsH,
                      canvasId: 'firstCanvas',
                      success: function success(res) {
                        uni.hideLoading();
                        that.canvasImg = res.tempFilePath;

                      } },
                    that);
                  }, 500);
                } else {
                  uni.hideLoading();
                  uni.showToast({
                    title: '海报制作失败',
                    icon: 'none' });

                }case 17:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 保存图片
    onSaveImg: function onSaveImg() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var imgUrl;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                imgUrl = "";if (!
                _this5.canvasImg) {_context2.next = 6;break;}_context2.next = 4;return (
                  _this5.canvasImg);case 4:imgUrl = _context2.sent;

                (0, _utils.saveImg)(imgUrl);case 6:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    onExitImg: function onExitImg() {
      this.canvasImg = '';
    },
    // 创建二维码
    createQrcode: function createQrcode() {
      var that = this;
      (0, _utils.qrcodeCanvas)('qrcode', 'https://www.baidu.com', 600, 600);
      var ctx = uni.createCanvasContext('qrcode');
      ctx.draw(true, function () {
        uni.canvasToTempFilePath({
          width: 600,
          height: 600,
          canvasId: 'qrcode',
          success: function success(res) {
            // 二维码本地图
            that.qrcodeImg = res.tempFilePath;
            // console.log(res, 'createQrcode')
          } },
        that);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 215:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=style&index=0&id=4f9e430f&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=style&index=0&id=4f9e430f&scoped=true&lang=scss& */ 216);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_4f9e430f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/DYY/Desktop/小程序/views/goods/goodsDetail.vue?vue&type=style&index=0&id=4f9e430f&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[206,"common/runtime","common/vendor","views/goods/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/views/goods/goodsDetail.js.map