"use strict";
(self["webpackChunkinfinity_vue"] = self["webpackChunkinfinity_vue"] || []).push([["src_views_AccessControl_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var mdb_vue_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-vue-ui-kit */ "./node_modules/mdb-vue-ui-kit/js/mdb.es.min.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    MDBInput: mdb_vue_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBInput,
    MDBBtn: mdb_vue_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBtn
  },
  data: function data() {
    return {
      username: '',
      password: ''
    };
  },
  emits: ['login'],
  methods: {
    submit: function submit() {
      var _this = this;
      console.log(this.password, this.username);
      fetch('http://localhost/infinity/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password
        }),
        headers: [['Content-Type', 'application/json']]
      }).then(function (r) {
        return r.json();
      }).then(function (r) {
        if (lodash__WEBPACK_IMPORTED_MODULE_2___default().isUndefined(r.user)) {
          console.log("error");
        } else {
          _this.$emit('login');
        }
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Form_LoginForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Form/LoginForm.vue */ "./src/components/Form/LoginForm.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    LoginForm: _components_Form_LoginForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onLogin: function onLogin() {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: 'dashboard'
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "mb-5"
}, "Hello. Log in to continue.", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MDBInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MDBInput");
  var _component_MDBBtn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MDBBtn");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MDBInput, {
    label: "Username",
    modelValue: _ctx.username,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.username = $event;
    }),
    "class": "mb-3"
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MDBInput, {
    label: "Password",
    modelValue: _ctx.password,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.password = $event;
    }),
    type: "password",
    "class": "mb-3"
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MDBBtn, {
    color: "primary",
    onclick: _ctx.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submit")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onclick"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LoginForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoginForm");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LoginForm, {
    onLogin: _ctx.onLogin
  }, null, 8 /* PROPS */, ["onLogin"]);
}

/***/ }),

/***/ "./src/components/Form/LoginForm.vue":
/*!*******************************************!*\
  !*** ./src/components/Form/LoginForm.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_template_id_0f27e55c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=0f27e55c&ts=true */ "./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=ts */ "./src/components/Form/LoginForm.vue?vue&type=script&lang=ts");
/* harmony import */ var _home_ly_Projects_GitHub_infinity_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_ly_Projects_GitHub_infinity_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoginForm_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoginForm_vue_vue_type_template_id_0f27e55c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/Form/LoginForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/AccessControl/Login.vue":
/*!*******************************************!*\
  !*** ./src/views/AccessControl/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_15e3a549_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=15e3a549&ts=true */ "./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=ts */ "./src/views/AccessControl/Login.vue?vue&type=script&lang=ts");
/* harmony import */ var _home_ly_Projects_GitHub_infinity_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_ly_Projects_GitHub_infinity_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_15e3a549_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/AccessControl/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/Form/LoginForm.vue?vue&type=script&lang=ts":
/*!*******************************************************************!*\
  !*** ./src/components/Form/LoginForm.vue?vue&type=script&lang=ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/AccessControl/Login.vue?vue&type=script&lang=ts":
/*!*******************************************************************!*\
  !*** ./src/views/AccessControl/Login.vue?vue&type=script&lang=ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true":
/*!*********************************************************************************!*\
  !*** ./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_0f27e55c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_0f27e55c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=template&id=0f27e55c&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Form/LoginForm.vue?vue&type=template&id=0f27e55c&ts=true");


/***/ }),

/***/ "./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true":
/*!*********************************************************************************!*\
  !*** ./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_15e3a549_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_14_use_0_node_modules_ts_loader_index_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_15e3a549_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=15e3a549&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-14.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AccessControl/Login.vue?vue&type=template&id=15e3a549&ts=true");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRVSw4Q0FBVSxFQUFFLEVBQUVvQixnREFBWSxDQUFDQyxvQkFBb0IsRUFBRTtJQUFFckMsT0FBTyxFQUFFcUIsSUFBSSxDQUFDckI7RUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjhFO0FBQ2xCO0FBQ0w7O0FBRXZELENBQWdIO0FBQ2hILGlDQUFpQyw4SEFBZSxDQUFDLDhFQUFNLGFBQWEsd0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjJEO0FBQ2xCO0FBQ0w7O0FBRW5ELENBQWdIO0FBQ2hILGlDQUFpQyw4SEFBZSxDQUFDLDBFQUFNLGFBQWEsb0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJrUTs7Ozs7Ozs7Ozs7Ozs7O0FDQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZpbml0eS12dWUvLi9zcmMvY29tcG9uZW50cy9Gb3JtL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vaW5maW5pdHktdnVlLy4vc3JjL3ZpZXdzL0FjY2Vzc0NvbnRyb2wvTG9naW4udnVlIiwid2VicGFjazovL2luZmluaXR5LXZ1ZS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vTG9naW5Gb3JtLnZ1ZT8wYTRiIiwid2VicGFjazovL2luZmluaXR5LXZ1ZS8uL3NyYy92aWV3cy9BY2Nlc3NDb250cm9sL0xvZ2luLnZ1ZT84MmFjIiwid2VicGFjazovL2luZmluaXR5LXZ1ZS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vTG9naW5Gb3JtLnZ1ZT8zYWEzIiwid2VicGFjazovL2luZmluaXR5LXZ1ZS8uL3NyYy92aWV3cy9BY2Nlc3NDb250cm9sL0xvZ2luLnZ1ZT80ZDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IE1EQklucHV0LCBNREJCdG4gfSBmcm9tIFwibWRiLXZ1ZS11aS1raXRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czogeyBNREJJbnB1dCwgTURCQnRuIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGVtaXRzOiBbJ2xvZ2luJ10sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhc3N3b3JkLCB0aGlzLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2luZmluaXR5L2xvZ2luJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkIH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgWydDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbiddXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZChyLnVzZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2dpbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybS9Mb2dpbkZvcm0udnVlXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuLi8uLi9yb3V0ZXJcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czogeyBMb2dpbkZvcm0gfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uTG9naW4oKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7IG5hbWU6ICdkYXNoYm9hcmQnIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMjdlNTVjJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvaG9tZS9seS9Qcm9qZWN0cy9HaXRIdWIvaW5maW5pdHkvdnVlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9Gb3JtL0xvZ2luRm9ybS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMGYyN2U1NWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwZjI3ZTU1YycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzBmMjdlNTVjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMjdlNTVjJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMGYyN2U1NWMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWUzYTU0OSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9ob21lL2x5L1Byb2plY3RzL0dpdEh1Yi9pbmZpbml0eS92dWUvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92aWV3cy9BY2Nlc3NDb250cm9sL0xvZ2luLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxNWUzYTU0OVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE1ZTNhNTQ5JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTVlM2E1NDknLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWUzYTU0OSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzE1ZTNhNTQ5JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTE0LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTE0LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIl0sIm5hbWVzIjpbImRlZmluZUNvbXBvbmVudCIsIk1EQklucHV0IiwiTURCQnRuIiwiXyIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtaXRzIiwibWV0aG9kcyIsInN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyIiwianNvbiIsImlzVW5kZWZpbmVkIiwidXNlciIsIiRlbWl0IiwiZSIsIkxvZ2luRm9ybSIsInJvdXRlciIsIm9uTG9naW4iLCJwdXNoIiwibmFtZSIsImNyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJyZXNvbHZlQ29tcG9uZW50IiwiX3Jlc29sdmVDb21wb25lbnQiLCJjcmVhdGVWTm9kZSIsIl9jcmVhdGVWTm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJ3aXRoQ3R4IiwiX3dpdGhDdHgiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIm9wZW5CbG9jayIsIl9vcGVuQmxvY2siLCJjcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsInJlbmRlciIsIl9jdHgiLCJfY2FjaGUiLCIkcHJvcHMiLCIkc2V0dXAiLCIkZGF0YSIsIiRvcHRpb25zIiwiX2NvbXBvbmVudF9NREJJbnB1dCIsIl9jb21wb25lbnRfTURCQnRuIiwibGFiZWwiLCJtb2RlbFZhbHVlIiwiJGV2ZW50IiwidHlwZSIsImNvbG9yIiwib25jbGljayIsImNyZWF0ZUJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9Mb2dpbkZvcm0iXSwic291cmNlUm9vdCI6IiJ9