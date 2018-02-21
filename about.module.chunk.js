webpackJsonp(["about.module"],{

/***/ "../../../../../src/app/components/about/about-home/about-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container about\">\n  \n\n  <article class=\"small\">\n    <h1>WE OFFER <strong>MORE</strong> THAN JUST CLEANING</h1>\n\n    <div class=\"summary-flex\">\n      <figure>\n        <img src=\"assets/store.jpg\" alt=\"Inside the cleaners\">\n        <!-- <img src=\"../../../assets/familyDesk.jpg\" alt=\"Family photo\"> -->\n        <figcaption></figcaption>\n      </figure>\n      \n\n      <p>McFrugal’s Dry Clean Depot is a family owned and operated business and we pride ourselves on being a value cleaner that provides fine dry cleaning at reasonable prices.</p>\n  \n      <p>Your clothing & dry cleaning items are never outsourced, all cleaning is done at our production plant using green solvents & chemicals. We pride ourselves on quality cleaning that is professionally handled and always smells good.</p>\n  \n      <p>Your convenience is our focus which is why we provide curbside pick up & drop off as well as home pick up and delivery through our very own Laundry Limo.</p>      \n    </div>\n\n  </article>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about/about-home/about-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".small {\n  max-width: 900px;\n  margin: 0 auto; }\n\n.about img {\n  border: 10px solid white;\n  box-shadow: 0px 0px 63px -8px rgba(0, 0, 0, 0.75); }\n\n.about figure {\n  max-width: 450px;\n  float: left;\n  margin: 0 30px 15px 0;\n  padding: 0 30px 0px 0; }\n  @media screen and (max-width: 670px) {\n    .about figure {\n      float: none;\n      margin: 15px auto 50px auto;\n      max-width: 75%;\n      display: block; } }\n  .about figure figcaption {\n    margin-top: 30px;\n    text-align: center;\n    color: #66B73C; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about-home/about-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutHomeComponent; });
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
var AboutHomeComponent = (function () {
    function AboutHomeComponent() {
    }
    AboutHomeComponent.prototype.ngOnInit = function () {
    };
    AboutHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-home',
            template: __webpack_require__("../../../../../src/app/components/about/about-home/about-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about-home/about-home.component.scss")],
            animations: [pageTransition],
            host: {
                '[@pageTransition]': ''
            }
        }),
        __metadata("design:paramtypes", [])
    ], AboutHomeComponent);
    return AboutHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_home_about_home_component__ = __webpack_require__("../../../../../src/app/components/about/about-home/about-home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__about_home_about_home_component__["a" /* AboutHomeComponent */]
    }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routing_module__ = __webpack_require__("../../../../../src/app/components/about/about-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_home_about_home_component__ = __webpack_require__("../../../../../src/app/components/about/about-home/about-home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__about_routing_module__["a" /* AboutRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_home_about_home_component__["a" /* AboutHomeComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map