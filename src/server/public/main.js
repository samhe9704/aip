(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-plan/add-plan.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-plan/add-plan.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-plan-container {\r\n  max-width: 960px;\r\n  margin: 50px auto;\r\n}"

/***/ }),

/***/ "./src/app/add-plan/add-plan.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-plan/add-plan.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-plan-container\">\r\n  <form class=\"ui big form\" #addPlanForm=\"ngForm\" (ngSubmit)=\"onSubmit(addPlanForm)\"> \r\n    <h4 class=\"ui dividing header\">Plan information</h4>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n        <input type=\"text\" name=\"title\" required placeholder=\"Title\" ngModel>\r\n      </div>\r\n    <div class=\"field\">\r\n      <label>Time</label>\r\n      <div class=\"fields\">\r\n        <div class=\"three wide field\">\r\n          <label>Start time</label>\r\n          <input type=\"time\" name=\"start\" required placeholder=\"Start time\" ngModel>\r\n        </div>\r\n        <div class=\"three wide field\">\r\n          <label>End time</label>\r\n          <input type=\"time\" name=\"end\" required placeholder=\"End time\" ngModel>\r\n        </div>\r\n        <div class=\"six wide field\">\r\n          <label>Week</label>\r\n          <input type=\"text\" name=\"week\" required placeholder=\"Week\" ngModel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Coach</label>\r\n      <input type=\"text\" name=\"coach\" required placeholder=\"Coach\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Content</label>\r\n      <input type=\"text\" name=\"content\" required placeholder=\"Training plan's content\" ngModel>\r\n    </div>\r\n    <div class=\"inline fields\">\r\n        <label>Type of training plan:</label>\r\n          <input type=\"radio\" required name=\"type\" value=\"A\" ngModel> A-Slim<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"B\" ngModel> B-Muscle<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"C\" ngModel> C-Fitness<br>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"addPlanForm.invalid\" class=\"ui submit large blue button right floated\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-plan/add-plan.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-plan/add-plan.component.ts ***!
  \************************************************/
/*! exports provided: AddPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlanComponent", function() { return AddPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plan.service */ "./src/app/plan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPlanComponent = /** @class */ (function () {
    function AddPlanComponent(planService) {
        this.planService = planService;
    }
    AddPlanComponent.prototype.ngOnInit = function () {
    };
    AddPlanComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formInput = Object.assign({}, form.value);
        var plan = {
            title: formInput.title,
            time: formInput.start + "-" + formInput.end + " " + formInput.week,
            coach: formInput.coach,
            content: formInput.content,
            type: formInput.type,
        };
        this.planService.postPlan(plan)
            .subscribe(function (data) {
            console.log('posting new data');
            form.reset();
            _this.newPlan = data;
            console.log('new data posted');
        });
    };
    AddPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-plan',
            template: __webpack_require__(/*! ./add-plan.component.html */ "./src/app/add-plan/add-plan.component.html"),
            styles: [__webpack_require__(/*! ./add-plan.component.css */ "./src/app/add-plan/add-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_plan_service__WEBPACK_IMPORTED_MODULE_1__["PlanService"]])
    ], AddPlanComponent);
    return AddPlanComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-list/plan-list.component */ "./src/app/plan-list/plan-list.component.ts");
/* harmony import */ var _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-plan/add-plan.component */ "./src/app/add-plan/add-plan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'plans', pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'customers', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
    { path: 'plans', component: _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_5__["PlanListComponent"] },
    { path: 'add-plan', component: _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddPlanComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <nav>\r\n    <a routerLink=\"register\">Register your first account</a>\r\n    <a routerLink=\"login\">  Sign in</a>\r\n  </nav> -->\r\n<app-menu-bar></app-menu-bar>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gym';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _join_member_form_join_member_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./join-member-form/join-member-form.component */ "./src/app/join-member-form/join-member-form.component.ts");
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-item/customer-item.component */ "./src/app/customer-item/customer-item.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "./src/app/menu-bar/menu-bar.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plan.service */ "./src/app/plan.service.ts");
/* harmony import */ var _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plan-list/plan-list.component */ "./src/app/plan-list/plan-list.component.ts");
/* harmony import */ var _plan_item_plan_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plan-item/plan-item.component */ "./src/app/plan-item/plan-item.component.ts");
/* harmony import */ var _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-plan/add-plan.component */ "./src/app/add-plan/add-plan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomerListComponent"],
                _join_member_form_join_member_form_component__WEBPACK_IMPORTED_MODULE_9__["JoinMemberFormComponent"],
                _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_10__["CustomerItemComponent"],
                _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__["MenuBarComponent"],
                _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_16__["PlanListComponent"],
                _plan_item_plan_item_component__WEBPACK_IMPORTED_MODULE_17__["PlanItemComponent"],
                _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_18__["AddPlanComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_11__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"], _authenticate_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticateService"], _plan_service__WEBPACK_IMPORTED_MODULE_15__["PlanService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate.service.ts":
/*!*****************************************!*\
  !*** ./src/app/authenticate.service.ts ***!
  \*****************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(router, http) {
        this.router = router;
        this.http = http;
        this.storageKey = 'authenticate-jwt';
        this.loginUrl = '/api/login';
    }
    AuthenticateService.prototype.getAuthorizationOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };
    };
    AuthenticateService.prototype.post = function (user) {
        console.log('posting');
        console.log(user);
        return this.http.post(this.loginUrl, user);
    };
    AuthenticateService.prototype.setToken = function (token) {
        localStorage.setItem(this.storageKey, token);
    };
    AuthenticateService.prototype.getToken = function () {
        console.log('getting token');
        return localStorage.getItem(this.storageKey);
    };
    AuthenticateService.prototype.isLoggedIn = function () {
        return this.getToken() != null;
    };
    AuthenticateService.prototype.isLoggedOut = function () {
        return this.getToken() == null;
    };
    AuthenticateService.prototype.logOut = function () {
        localStorage.removeItem(this.storageKey);
        console.log(this.storageKey);
        this.router.navigate(['/login']);
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/customer-item/customer-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-item/customer-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui cards\">\r\n  <div class=\"card\">\r\n    <div class=\"content\">\r\n     \r\n      <div class=\"header\">\r\n        {{customer.firstName}} {{customer.lastName}}\r\n      </div>\r\n      <div class=\"meta\">\r\n        {{customer.phone}}\r\n      </div>\r\n      <div class=\"description\">\r\n        {{customer.email}}\r\n      </div>\r\n    </div>\r\n    <div class=\"extra content\">\r\n      <div class=\"ui three buttons\">\r\n        <button class=\"ui basic green button\">Approve</button>\r\n        <button class=\"ui basic blue button\">Modify</button>\r\n        <button class=\"ui basic red button\">Decline</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/customer-item/customer-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerItemComponent", function() { return CustomerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerItemComponent = /** @class */ (function () {
    function CustomerItemComponent() {
        this.columnClass = 'four wide column';
    }
    CustomerItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerItemComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], CustomerItemComponent.prototype, "columnClass", void 0);
    CustomerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-item',
            template: __webpack_require__(/*! ./customer-item.component.html */ "./src/app/customer-item/customer-item.component.html"),
            styles: [__webpack_require__(/*! ./customer-item.component.css */ "./src/app/customer-item/customer-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerItemComponent);
    return CustomerItemComponent;
}());



/***/ }),

/***/ "./src/app/customer-list/customer-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <app-customer-item *ngFor=\"let customer of customers | async\" [customer]=\"customer\">\r\n        <!-- <div class=\"extra content\">\r\n            <div class=\"ui three buttons\">\r\n              <button class=\"ui basic green button\">Approve</button>\r\n              <button class=\"ui basic blue button\">Modify</button>\r\n              <button class=\"ui basic red button\">Decline</button>\r\n            </div>\r\n          </div> -->\r\n    </app-customer-item>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.getCustomers = function () {
        this.customers = this.customerService.getCustomers();
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/map';
// import { Http, Response } from '@angular/http';
var CustomerService = /** @class */ (function () {
    function CustomerService(http, authenticate) {
        this.http = http;
        this.authenticate = authenticate;
        this.uri = '/api/customers';
        this.registerUrl = '/api/register';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.uri, this.authenticate.getAuthorizationOptions());
    };
    CustomerService.prototype.postCustomer = function (customer) {
        return this.http.post(this.registerUrl, customer, this.httpOptions);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"join-container\">\r\n  <Form>\r\n    <div class=\"field\">\r\n      <label>First Name</label>\r\n      <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Phone</label>\r\n      <input type=\"text\" name=\"Phone\" placeholder=\"Phone\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Email</label>\r\n      <input type=\"text\" name=\"email\" placeholder=\"Email\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Address</label>\r\n      <input type=\"text\" name=\"address\" placeholder=\"Address\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Date of Birth</label>\r\n      <input type=\"text\" name=\"dob\" placeholder=\"DOB\" ngModel>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn-success\">Regster</button>\r\n    \r\n  </Form>\r\n</div>"

/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.ts ***!
  \****************************************************************/
/*! exports provided: JoinMemberFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinMemberFormComponent", function() { return JoinMemberFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinMemberFormComponent = /** @class */ (function () {
    function JoinMemberFormComponent() {
    }
    JoinMemberFormComponent.prototype.ngOnInit = function () {
    };
    JoinMemberFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-member-form',
            template: __webpack_require__(/*! ./join-member-form.component.html */ "./src/app/join-member-form/join-member-form.component.html"),
            styles: [__webpack_require__(/*! ./join-member-form.component.css */ "./src/app/join-member-form/join-member-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinMemberFormComponent);
    return JoinMemberFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n  <form class=\"ui big form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\r\n    <div class=\"field\">\r\n    <label>Username</label>\r\n    <input type=\"text\" required name=\"username\" placeholder=\"Enter your username\" ngModel>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Password</label>\r\n    <input type=\"password\" required name=\"password\" placeholder=\"Enter your password\" ngModel>\r\n  </div>\r\n  \r\n  <button type=\"submit\" class=\"ui primary button float right floated\"\r\n         [disabled]=\"loginForm.invalid\">Login</button>\r\n  </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticate, router) {
        this.authenticate = authenticate;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var input = form.value;
        console.log(input);
        var payload = {
            username: input.username,
            password: input.password
        };
        console.log('onSubmit');
        this.authenticate.post(payload)
            .subscribe(function (data) {
            console.log('subscribing');
            console.log(data);
            _this.authenticate.setToken(data.token);
            console.log(data.token);
            _this.router.navigate(['/customers']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui menu header\">\r\n  <div class=\"ui container\">\r\n    <div class=\"item\">\r\n      <a routerLink=\"../customers\" aria-label=\"Customer Dashboard\">\r\n        <i class=\"icon users large blue\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n      <div class=\"header item\">\r\n        <h1>Customer Dashboard</h1>\r\n      </div>\r\n      <div class=\"item\" *ngIf=\"authenticate.isLoggedOut()\">\r\n        <a routerLink=\"../register\">\r\n        <button class=\"ui basic button\">\r\n          <i class=\"add user icon\" aria-hideen=\"true\">\r\n            Sign Up\r\n          </i>\r\n        </button>\r\n        </a>\r\n        <!-- <div class=\"item\"> -->\r\n          <a routerLink=\"../login\">\r\n          <button class=\"ui basic button\">\r\n            <i class=\"add user icon\" aria-hideen=\"true\">\r\n              Sign In\r\n            </i>\r\n          </button>\r\n          </a>\r\n      <!-- </div> -->\r\n    </div>\r\n    <div class=\"header item\">\r\n      <a routerLink=\"../plans\">\r\n      <button class=\"ui basic button\">\r\n        <i class=\"user circle outline icon\" aria-hidden=\"true\">\r\n          View Plan\r\n        </i>\r\n      </button>\r\n    </a>\r\n    <a routerLink=\"../add-plan\">\r\n      <button class=\"ui basic button\" *ngIf=\"authenticate.isLoggedIn()\">\r\n        <i class=\"user circle outline icon\" aria-hidden=\"true\">\r\n          Add Plan\r\n        </i>\r\n      </button>\r\n    </a>\r\n    </div>\r\n    <div class=\"right menu\" *ngIf=\"authenticate.isLoggedIn()\">\r\n      <button class=\"ui primary button logout\" (click)=\"logout()\">logout</button>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.ts ***!
  \************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(authenticate) {
        this.authenticate = authenticate;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent.prototype.logout = function () {
        this.authenticate.logOut();
    };
    MenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-bar',
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/menu-bar/menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/plan-item/plan-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/plan-item/plan-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/plan-item/plan-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/plan-item/plan-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui cards\">\r\n    <div class=\"card\">\r\n      <div class=\"content\">\r\n       \r\n        <div class=\"header\">\r\n          {{plan.title}}\r\n        </div>\r\n        <div class=\"meta\">\r\n          {{plan.time}}\r\n        </div>\r\n        <div class=\"description\">\r\n          {{plan.content}}\r\n        </div>\r\n      </div>\r\n      <div class=\"extra content\">\r\n        <div class=\"ui three buttons\">\r\n          <button class=\"ui basic green button\">Approve</button>\r\n          <button class=\"ui basic blue button\">Modify</button>\r\n          <button class=\"ui basic red button\">Decline</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/plan-item/plan-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/plan-item/plan-item.component.ts ***!
  \**************************************************/
/*! exports provided: PlanItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanItemComponent", function() { return PlanItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlanItemComponent = /** @class */ (function () {
    function PlanItemComponent() {
        this.columnClass = 'four wide column';
    }
    PlanItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlanItemComponent.prototype, "plan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], PlanItemComponent.prototype, "columnClass", void 0);
    PlanItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-item',
            template: __webpack_require__(/*! ./plan-item.component.html */ "./src/app/plan-item/plan-item.component.html"),
            styles: [__webpack_require__(/*! ./plan-item.component.css */ "./src/app/plan-item/plan-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanItemComponent);
    return PlanItemComponent;
}());



/***/ }),

/***/ "./src/app/plan-list/plan-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/plan-list/plan-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 50px;\r\n  }"

/***/ }),

/***/ "./src/app/plan-list/plan-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/plan-list/plan-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n     <div class=\"ui grid\">\r\n       <app-plan-item *ngFor=\"let plan of plans | async\" [plan]=\"plan\"></app-plan-item>\r\n     </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/plan-list/plan-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/plan-list/plan-list.component.ts ***!
  \**************************************************/
/*! exports provided: PlanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanListComponent", function() { return PlanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plan.service */ "./src/app/plan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanListComponent = /** @class */ (function () {
    function PlanListComponent(planService) {
        this.planService = planService;
    }
    PlanListComponent.prototype.getPlans = function () {
        this.plans = this.planService.getPlans();
    };
    PlanListComponent.prototype.ngOnInit = function () {
        return this.getPlans();
    };
    PlanListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-list',
            template: __webpack_require__(/*! ./plan-list.component.html */ "./src/app/plan-list/plan-list.component.html"),
            styles: [__webpack_require__(/*! ./plan-list.component.css */ "./src/app/plan-list/plan-list.component.css")]
        }),
        __metadata("design:paramtypes", [_plan_service__WEBPACK_IMPORTED_MODULE_1__["PlanService"]])
    ], PlanListComponent);
    return PlanListComponent;
}());



/***/ }),

/***/ "./src/app/plan.service.ts":
/*!*********************************!*\
  !*** ./src/app/plan.service.ts ***!
  \*********************************/
/*! exports provided: PlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanService", function() { return PlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanService = /** @class */ (function () {
    function PlanService(http, authenticate) {
        this.http = http;
        this.authenticate = authenticate;
        this.planUrl = '/api/plans';
        this.addPlanrUrl = '/api/add-plan';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    PlanService.prototype.getPlans = function () {
        return this.http.get(this.planUrl, this.authenticate.getAuthorizationOptions());
    };
    PlanService.prototype.postPlan = function (plan) {
        return this.http.post(this.addPlanrUrl, plan, this.authenticate.getAuthorizationOptions());
    };
    PlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], PlanService);
    return PlanService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\r\n  <form class=\"ui big form\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\r\n    <div class=\"field\">\r\n      <label>First Name</label>\r\n      <input type=\"text\" required name=\"firstName\" placeholder=\"First Name\" ngModel>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\" required name=\"lastName\" placeholder=\"Last Name\" ngModel>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input type=\"number\" required minlength=\"10\" name=\"phone\" placeholder=\"Phone\" ngModel>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Email</label>\r\n      <input type=\"email\" required name=\"email\" placeholder=\"Email\" ngModel>\r\n    </div>\r\n    <div class=\"inline fields\">\r\n        <label>Interested training plan:</label>\r\n          <input type=\"radio\" required name=\"type\" value=\"A\" ngModel> A-Slim<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"B\" ngModel> B-Muscle<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"C\" ngModel> C-Fitness<br>\r\n    </div>\r\n    <button type=\"submit\" class=\"ui primary button float right floated\"\r\n    [disabled]=\"registerForm.invalid\">Register</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(customerService) {
        this.customerService = customerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formInput = Object.assign({}, form.value);
        var customer = {
            firstName: formInput.firstName,
            lastName: formInput.lastName,
            phone: formInput.phone,
            email: formInput.email,
            type: formInput.type
        };
        this.customerService.postCustomer(customer)
            .subscribe(function (data) {
            console.log('posting new data');
            form.reset();
            _this.newCustomer = data;
            console.log('new data posted');
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: '/gym'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samh1\Desktop\aipSam\GymApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map