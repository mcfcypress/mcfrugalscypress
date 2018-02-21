webpackJsonp(["services.module"],{

/***/ "../../../../../src/app/components/services/services-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__services_services_component__["a" /* ServicesComponent */]
    }
];
var ServicesRoutingModule = (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routing_module__ = __webpack_require__("../../../../../src/app/components/services/services-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__services_routing_module__["a" /* ServicesRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__services_services_component__["a" /* ServicesComponent */]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container service\">\n  \n\n  <article>\n    <h1>CHECK OUT OUR <strong>LAUNDRY LIMO</strong> SERVICE </h1>\n\n    <ul>\n      <li class=\"featured\">\n        <p><strong>Free Home Pick Up & Delivery</strong> <br>\n          Let's just check \"Pick up/Drop off Dry Cleaning\" off your TODO list. To take advantage of this service, please download and complete the form - then submit in store. \n        </p>\n        <a href=\"assets/laundry_limo.pdf\">LAUNDRY LIMO<img src=\"assets/pdf.png\" alt=\"PDF file\"></a>\n      </li>\n      <li>\n        <p><strong>Dry Cleaning</strong> <br>\n          Can't read the tag? We've got your back.\n        </p>\n      </li>\n      <li>\n        <p><strong>Laundered Shirts & Linen</strong>\n          <br>\n          Enough said.\n        </p>\n      </li>\n      <li>\n        <p><strong>Press Only</strong>\n          <br>\n          We'll get all the right creases in all the right places.\n        </p>\n      </li>\n      <li>\n        <p><strong>Bedding</strong><br>\n          Comforters, duvets, quilts, whatever it is - our beastly machines can handle it.\n        </p>\n      </li>\n      <li>\n        <p><strong>Same day service*</strong><br>\n          Bring your items in before <strong>8:30am</strong> and they'll be ready by <strong>5:30pm</strong>. We know, we're awesome.\n          <br>\n          <span class=\"tiny\">*Varies by location, ask for details.</span>\n        </p>\n      </li>\n      <li>\n        <p><strong>Curb side pick up </strong> <br>\n          You drove all this way to see us, the least we can do is meet you half way. Text us when you get here.\n        </p>\n      </li>\n    </ul>\n  </article>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/services/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  max-width: 800px;\n  margin: 0 auto; }\n  ul li {\n    padding: 0 15px; }\n\np strong {\n  color: #1B5E20; }\n\n.featured {\n  border: 2px solid #66B73C;\n  background: #66B73C; }\n  .featured p,\n  .featured p strong {\n    color: white; }\n  .featured a {\n    background: white;\n    display: inline-block;\n    margin: 0 0 15px 0;\n    padding: 15px 10px;\n    font-weight: bold;\n    text-align: center; }\n    .featured a img {\n      width: 20px;\n      height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])(s, a, o);
};
var pageTransition = Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('pageTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':enter', [
        query('article', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 })),
        query('article', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* stagger */])(500, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':leave', [
        query('article', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* stagger */])(50, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);
var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services/services.component.scss")],
            animations: [pageTransition],
            host: {
                '[@pageTransition]': ''
            }
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map