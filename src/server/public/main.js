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

module.exports = "<div class=\"add-plan-container\">\r\n\r\n  <div class=\"ui icon message\" *ngIf=\"newPlan\">\r\n    <i class=\"notched check green icon\"></i>\r\n    <i class=\"close icon\" (click)=\"newPlan = null\"></i>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        New plan added!\r\n      </div>\r\n      <p>Title: {{newPlan.title}}</p>\r\n    </div>\r\n  </div>\r\n\r\n<form class=\"ui big form\" #addPlanForm=\"ngForm\" (ngSubmit)=\"onSubmit(addPlanForm)\"> \r\n  <h4 class=\"ui dividing header\">Plan information</h4>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n        <input type=\"text\" name=\"title\" required placeholder=\"Title\" ngModel>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n        <h4 class=\"ui dividing header\">Date & Time</h4>\r\n      <div class=\"fields\">\r\n        <div class=\"three wide field\">\r\n          <label>Start time</label>\r\n            <input type=\"text\" id=\"start\" class=\"form-control\" name=\"start\" \r\n              pattern=\"([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}\" required \r\n              placeholder=\"Start time\" [(ngModel)]=\"plan.start\" #start=\"ngModel\" >\r\n                <div [hidden]=\"start.valid || start.pristine\"\r\n                  class=\"alert alert-danger\">\r\n                  Please enter the time in xx:xx.\r\n                </div>\r\n        </div>\r\n\r\n          <div class=\"three wide field\">\r\n                <label>Duration(hr)</label>\r\n                  <input type=\"text\" id=\"duration\" class=\"form-control\" name=\"duration\" required placeholder=\"duration\"\r\n                    pattern=\"[1-3]{1}\" [(ngModel)]=\"plan.duration\" #duration=\"ngModel\">\r\n                      <div [hidden]=\"duration.valid || duration.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        <div class=\"ui negative message\">\r\n                          <div class=\"text\">\r\n                            duration between 1 - 3 hours!!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"fields\">\r\n        <div class=\"inline fields\">\r\n          <label>Week</label>\r\n          <input type=\"radio\" name=\"week\" value=\"Monday\" required ngModel>Monday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Tuesday\" required ngModel>Tuesday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Wednesday\" required ngModel>Wednesday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Thursday\" required ngModel>Thursday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Friday\" required ngModel>Friday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Saturday\" required ngModel>Saturday<br>\r\n          <input type=\"radio\" name=\"week\" value=\"Sunday\" required ngModel>Sunday<br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Coach</label>\r\n        <input type=\"text\" id=\"coach\" class=\"form-control\" name=\"coach\" required placeholder=\"Coach\"\r\n          pattern=\"[A-Z]{1}[a-z].{0,}\" [(ngModel)]=\"plan.coach\" #coach=\"ngModel\">\r\n            <div [hidden]=\"coach.valid || coach.pristine\"\r\n             class=\"alert alert-danger\">\r\n              <div class=\"ui negative message\">\r\n                <div class=\"header\">\r\n                    Coach name should be uppercase!\r\n                </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Content</label>\r\n        <input type=\"text\" name=\"content\" required placeholder=\"Training plan's content\" ngModel>\r\n    </div>\r\n    <div class=\"inline fields\">\r\n        <label>Type of training plan:</label>\r\n          <input type=\"radio\" required name=\"type\" value=\"A\" ngModel> A-Slim<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"B\" ngModel> B-Muscle<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"C\" ngModel> C-Fitness<br>\r\n    </div>\r\n      <button type=\"submit\" [disabled]=\"addPlanForm.invalid\" class=\"ui submit large blue button right floated\">Submit</button>\r\n  </form>\r\n</div>\r\n"

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
/* harmony import */ var _service_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/plan/plan.service */ "./src/app/service/plan/plan.service.ts");
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
        // give plan a type of Plan which can contains attributes
        this.plan = {};
    }
    AddPlanComponent.prototype.ngOnInit = function () { };
    AddPlanComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formInput = Object.assign({}, form.value);
        // set the form value to each field
        var plan = {
            title: formInput.title,
            time: "Start at: " + formInput.start + "  Duration: " + formInput.duration + " hour  On: " + formInput.week,
            coach: "Coach:  " + formInput.coach,
            content: formInput.content,
            type: formInput.type,
        };
        this.planService.postPlan(plan)
            .subscribe(function (data) {
            // reset the form
            form.reset();
            // push the value in data to newPlan
            _this.newPlan = data;
        });
    };
    AddPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-plan',
            template: __webpack_require__(/*! ./add-plan.component.html */ "./src/app/add-plan/add-plan.component.html"),
            styles: [__webpack_require__(/*! ./add-plan.component.css */ "./src/app/add-plan/add-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_service_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__["PlanService"]])
    ], AddPlanComponent);
    return AddPlanComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-user-container {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n  }"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-user-container\">\r\n\r\n    <div class=\"ui icon message\" *ngIf=\"newUser\">\r\n        <i class=\"notched check green icon\"></i>\r\n        <i class=\"close icon\" (click)=\"newUser = null\"></i>\r\n        <div class=\"content\">\r\n          <div class=\"header\">\r\n            New user can log in now!\r\n          </div>\r\n          <p>Username: {{newUser.username}}</p>\r\n        </div>\r\n      </div>\r\n\r\n  <form class=\"ui big form\" #addUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(addUserForm)\">\r\n    <div class=\"field\">\r\n      <label>Username</label>\r\n        <input id=\"username\" type=\"text\" class=\"form-control\" required placeholder=\"Enter your username\"\r\n          pattern=\"[a-z]{4}[0-9]{3}\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\">\r\n        <div [hidden]=\"username.valid || username.pristine\"\r\n          class=\"alert alert-danger\">\r\n            The sign up pattern must be like eg.ffff222 \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Password</label>\r\n        <input id=\"password\" type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Enter your password\"\r\n          minlength=\"6\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\r\n        <div [hidden]=\"password.valid || password.pristine\"\r\n          class=\"alert alert-danger\">\r\n            The password must be at least 6 words! \r\n        </div>\r\n    </div>\r\n    \r\n      <button type=\"submit\" class=\"ui primary button float right floated\"\r\n           [disabled]=\"addUserForm.invalid\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n    "

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user/user.service */ "./src/app/service/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService) {
        this.userService = userService;
        // initialize user to User which can contains attribute
        this.user = {};
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var formInput = Object.assign({}, form.value);
        // set the form value to each field
        var user = {
            username: formInput.username,
            password: formInput.password
        };
        this.userService.postUser(user)
            .subscribe(function (data) {
            // reset the form
            form.reset();
            // pass the data to newUser
            _this.newUser = data;
        }, function (err) {
            if (err.status === 409) {
                window.alert('This user is already registered.');
            }
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
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
/* harmony import */ var _service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/guard/authenticate.guard */ "./src/app/service/guard/authenticate.guard.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
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
    { path: 'customers', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"], canActivate: [_service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticateGuard"]] },
    { path: 'plans', component: _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_5__["PlanListComponent"] },
    { path: 'add-plan', component: _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddPlanComponent"], canActivate: [_service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticateGuard"]] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"], canActivate: [_service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticateGuard"]] },
    { path: '**', redirectTo: 'plans' }
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

module.exports = "<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <nav>\r\n    <a routerLink=\"register\">Register your first account</a>\r\n    <a routerLink=\"login\">  Sign in</a>\r\n  </nav> -->\r\n<app-menu-bar></app-menu-bar>\r\n<div class=\"ui visible message\">\r\n    <a class=\"ui tag label\">Type A: Slim</a>\r\n<a class=\"ui red tag label\">Type B: Mucsle</a>\r\n<a class=\"ui teal tag label\">Type C: Fitness</a>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-item/customer-item.component */ "./src/app/customer-item/customer-item.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "./src/app/menu-bar/menu-bar.component.ts");
/* harmony import */ var _service_customer_customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/customer/customer.service */ "./src/app/service/customer/customer.service.ts");
/* harmony import */ var _service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
/* harmony import */ var _service_plan_plan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/plan/plan.service */ "./src/app/service/plan/plan.service.ts");
/* harmony import */ var _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plan-list/plan-list.component */ "./src/app/plan-list/plan-list.component.ts");
/* harmony import */ var _plan_item_plan_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plan-item/plan-item.component */ "./src/app/plan-item/plan-item.component.ts");
/* harmony import */ var _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-plan/add-plan.component */ "./src/app/add-plan/add-plan.component.ts");
/* harmony import */ var _service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/guard/authenticate.guard */ "./src/app/service/guard/authenticate.guard.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/user/user.service */ "./src/app/service/user/user.service.ts");
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
                _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_9__["CustomerItemComponent"],
                _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__["MenuBarComponent"],
                _plan_list_plan_list_component__WEBPACK_IMPORTED_MODULE_15__["PlanListComponent"],
                _plan_item_plan_item_component__WEBPACK_IMPORTED_MODULE_16__["PlanItemComponent"],
                _add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_17__["AddPlanComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_10__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_service_customer_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"], _service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticateService"], _service_plan_plan_service__WEBPACK_IMPORTED_MODULE_14__["PlanService"], _service_user_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _service_guard_authenticate_guard__WEBPACK_IMPORTED_MODULE_18__["AuthenticateGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "\r\n<div class=\"ui cards\">\r\n  <div class=\"card\">\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        Type:  {{customer.type}} -- {{customer.firstName}} {{customer.lastName}} \r\n      </div>\r\n      <div class=\"meta\">\r\n        {{customer.phone}}\r\n      </div>\r\n      <div class=\"description\">\r\n        {{customer.email}}\r\n      </div>\r\n    </div>\r\n    <ng-content select=\"[buttons]\"></ng-content>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <app-customer-item *ngFor=\"let customer of customers | async\" [customer]=\"customer\">\r\n        <div class=\"extra content\" buttons>\r\n            <div class=\"ui three buttons\">\r\n            <button class=\"ui basic green button\">Approve</button>\r\n            <button class=\"ui basic blue button\">Modify</button>\r\n            <button class=\"ui basic red button\" (click)=\"deleteCustomer(customer._id)\">Delete</button>\r\n            </div>\r\n         </div>\r\n    </app-customer-item>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _service_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/customer/customer.service */ "./src/app/service/customer/customer.service.ts");
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
    // retrieve all customers from customer service
    CustomerListComponent.prototype.getCustomers = function () {
        this.customers = this.customerService.getCustomers();
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    // delete a customer
    CustomerListComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        window.alert('Are you want to kick out this customer?');
        this.customerService.deleteCustomer(id).subscribe(function (data) {
            _this.getCustomers();
        });
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
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

module.exports = "<div class=\"login-container\">\r\n  <form class=\"ui big form\" #loginForm=\"ngForm\" (ngSubmit)=\"onLogin(loginForm)\">\r\n    <div class=\"field\">\r\n      <label>Username</label>\r\n        <input id=\"username\" type=\"text\" class=\"form-control\" required name=\"username\" placeholder=\"Enter your username\"\r\n           pattern=\"[a-z]{4}[0-9]{3}\" [(ngModel)]=\"user.username\" #username=\"ngModel\">\r\n            <div [hidden]=\"username.valid || username.pristine\"\r\n                  class=\"alert alert-danger\">\r\n                  The sign up pattern must be like eg.ffff222 \r\n            </div>\r\n    </div>\r\n    \r\n  <div class=\"field\">\r\n    <label>Password</label>\r\n      <input id=\"password\" type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Enter your password\"\r\n        minlength=\"6\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\r\n          <div [hidden]=\"password.valid || password.pristine\"\r\n            class=\"alert alert-danger\">\r\n                The password must be at least 6 words! \r\n          </div>\r\n  </div>\r\n  \r\n  <button type=\"submit\" class=\"ui primary button float right floated\"\r\n         [disabled]=\"loginForm.invalid\">Login</button>\r\n  </form>\r\n</div>\r\n  "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
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
        // give user a type of User
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authenticate.isLoggedIn()) {
            // prevent duplicate login
            this.router.navigate(['./cusomers']);
        }
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var input = form.value;
        var payload = {
            username: input.username,
            password: input.password
        };
        this.authenticate.post(payload)
            .subscribe(function (data) {
            // create the token
            _this.authenticate.setToken(data.token);
            _this.router.navigate(['/customers']);
        }, function (err) {
            window.alert('Login failed! Please check your username or password');
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"ui menu header\">\r\n  <div class=\"ui container\">\r\n    <div class=\"item\">\r\n      <a routerLink=\"../customers\" aria-label=\"Gym Management Dashboard\">\r\n        <i class=\"icon users large blue\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n      <div class=\"header item\">\r\n        <h1>Gym Management Dashboard</h1>\r\n      </div>\r\n      <div class=\"item\" *ngIf=\"authenticate.isLoggedOut()\">\r\n        <a routerLink=\"../register\">\r\n        <button class=\"ui basic button\">\r\n          <i class=\"add user icon\" aria-hideen=\"true\">\r\n            Sign Up\r\n          </i>\r\n        </button>\r\n        </a>\r\n          <a routerLink=\"../login\">\r\n          <button class=\"ui basic button\">\r\n            <i class=\"add user icon\" aria-hideen=\"true\">\r\n              Sign In\r\n            </i>\r\n          </button>\r\n          </a>\r\n    </div>\r\n    <div class=\"header item\">\r\n      <a routerLink=\"../plans\">\r\n      <button class=\"ui basic button\">\r\n        <i class=\"user circle outline icon\" aria-hidden=\"true\">\r\n          View Plan\r\n        </i>\r\n      </button>\r\n    </a>\r\n    <a routerLink=\"../add-plan\">\r\n      <button class=\"ui basic button\" *ngIf=\"authenticate.isLoggedIn()\">\r\n        <i class=\"user circle outline icon\" aria-hidden=\"true\">\r\n          Add Plan\r\n        </i>\r\n      </button>\r\n    </a>\r\n    </div>\r\n    <div class=\"header item\">\r\n      <a routerLink=\"../add-user\">\r\n      <button class=\"ui basic button\" *ngIf=\"authenticate.isLoggedIn()\">\r\n        <i class=\"user circle outline icon\" aria-hidden=\"true\">\r\n          Add User\r\n        </i>\r\n      </button>\r\n      </a>\r\n    </div>\r\n    <div class=\"right menu\" *ngIf=\"authenticate.isLoggedIn()\">\r\n      <button class=\"ui primary button logout\" (click)=\"logout()\">logout</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
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
    // user log out
    MenuBarComponent.prototype.logout = function () {
        this.authenticate.logOut();
    };
    MenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-bar',
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/menu-bar/menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]])
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

module.exports = "\r\n<div class=\"ui cards\">\r\n    <div class=\"card\">\r\n      <div class=\"content\">\r\n        <div class=\"header\">\r\n          Type: {{plan.type}} -- {{plan.title}}\r\n        </div>\r\n        <div class=\"meta\">\r\n          {{plan.time}}\r\n        </div>\r\n        <div class=\"description\">\r\n          {{plan.content}}\r\n        </div>\r\n        <div class=\"extra\">\r\n          {{plan.coach}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _service_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/plan/plan.service */ "./src/app/service/plan/plan.service.ts");
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
    // retrieve all the plans from plan service
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
        __metadata("design:paramtypes", [_service_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__["PlanService"]])
    ], PlanListComponent);
    return PlanListComponent;
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

module.exports = "<div class=\"register-container\">\r\n    <div class=\"ui icon message\" *ngIf=\"newCustomer\">\r\n        <i class=\"notched check green icon\"></i>\r\n        <i class=\"close icon\" (click)=\"newCustomer = null\"></i>\r\n        <div class=\"content\">\r\n          <div class=\"header\">\r\n            New customer registered!\r\n          </div>\r\n          <p>Email: {{newCustomer.email}}</p>\r\n        </div>\r\n    </div>\r\n\r\n<form class=\"ui big form\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\r\n    <div class=\"field\">\r\n      <label>First Name</label>\r\n      <input id=\"firstName\" type=\"text\" class=\"form-control\" name=\"firstName\" required pattern=\"[A-Z]{1}[a-z].{0,}\"\r\n       placeholder=\"First Name\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\">\r\n      <div [hidden]=\"firstName.valid || firstName.pristine\"\r\n      class=\"alert alert-danger\">\r\n          The first word must be uppercase!\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>Last Name</label>\r\n      <input id=\"lastName\" type=\"text\" class=\"form-control\" name=\"lastName\" required pattern=\"[A-Z]{1}[a-z].{0,}\" \r\n      placeholder=\"Last Name\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\">\r\n      <div [hidden]=\"lastName.valid || lastName.pristine\"\r\n      class=\"alert alert-danger\">\r\n          The first word must be uppercase!\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input id=\"phone\" type=\"number\" class=\"form-control\" required pattern=\"[0-9]{10}\" placeholder=\"Phone\" [(ngModel)]=\"customer.phone\" name=\"phone\" #phone=\"ngModel\">\r\n      <div [hidden]=\"phone.valid || phone.pristine\"\r\n      class=\"alert alert-danger\">\r\n          Phone number must be 10 digits.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label for=\"email\">Email</label>\r\n      <input id=\"email\" type=\"email\" class=\"form-control\" required name=\"email\"\r\n       pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\r\n       placeholder=\"Email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\">\r\n       <div [hidden]=\"email.valid || email.pristine\"\r\n       class=\"alert alert-danger\">\r\n           Ops! Missing \"@\" or \".com\", please enter a valid email.\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"inline fields\">\r\n        <label>Interested training plan:</label>\r\n          <input type=\"radio\" required name=\"type\" value=\"A\" ngModel> A-Slim<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"B\" ngModel> B-Muscle<br>\r\n          <input type=\"radio\" required name=\"type\" value=\"C\" ngModel> C-Fitness<br>\r\n    </div>\r\n    <button type=\"submit\" class=\"ui primary button float right floated\"\r\n    [disabled]=\"registerForm.invalid\">Register</button>\r\n  </form>\r\n</div>"

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
/* harmony import */ var _service_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/customer/customer.service */ "./src/app/service/customer/customer.service.ts");
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
        this.customer = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // refer to the value in the form
        var formInput = Object.assign({}, form.value);
        // give the form value to each of customer attribute
        var customer = {
            firstName: formInput.firstName,
            lastName: formInput.lastName,
            phone: formInput.phone,
            email: formInput.email,
            type: formInput.type
        };
        // call the postCustomer to add customer
        this.customerService.postCustomer(customer)
            .subscribe(function (data) {
            // reset the form
            form.reset();
            _this.newCustomer = data;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_service_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/authenticate/authenticate.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/authenticate/authenticate.service.ts ***!
  \**************************************************************/
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
        // set storage key
        this.storageKey = 'authenticate-jwt';
        // set related url
        this.loginUrl = '/api/login';
    }
    // get authorization options, content type and authorization
    AuthenticateService.prototype.getAuthorizationOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };
    };
    // add user's token
    AuthenticateService.prototype.post = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    // set the token
    AuthenticateService.prototype.setToken = function (token) {
        localStorage.setItem(this.storageKey, token);
    };
    // retrieve the token
    AuthenticateService.prototype.getToken = function () {
        return localStorage.getItem(this.storageKey);
    };
    // check if user is logged in
    AuthenticateService.prototype.isLoggedIn = function () {
        return this.getToken() != null;
    };
    // check if user is logged out
    AuthenticateService.prototype.isLoggedOut = function () {
        return this.getToken() == null;
    };
    // user log out
    AuthenticateService.prototype.logOut = function () {
        // remove the token stored in local storage
        localStorage.removeItem(this.storageKey);
        // if user logout, go back to login
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

/***/ "./src/app/service/customer/customer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/customer/customer.service.ts ***!
  \******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = /** @class */ (function () {
    function CustomerService(http, authenticate) {
        this.http = http;
        this.authenticate = authenticate;
        // set the related urls
        this.customerUrl = '/api/customers';
        this.registerUrl = '/api/register';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // retrieve all the customers from database
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.customerUrl, this.authenticate.getAuthorizationOptions());
    };
    // register a new customer to database
    CustomerService.prototype.postCustomer = function (customer) {
        return this.http.post(this.registerUrl, customer, this.httpOptions);
    };
    // delete the selected customer from database
    CustomerService.prototype.deleteCustomer = function (id) {
        var url = this.customerUrl + "/" + id;
        return this.http.delete(url, this.authenticate.getAuthorizationOptions());
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/service/guard/authenticate.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/guard/authenticate.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(authenticateService, router) {
        this.authenticateService = authenticateService;
        this.router = router;
    }
    AuthenticateGuard.prototype.canActivate = function (next, state) {
        // check if the user is loggedin
        if (this.authenticateService.isLoggedIn()) {
            return true;
        }
        else {
            // if a wrong url inserted, go back to home page
            this.router.navigate(['/plans']);
            return false;
        }
    };
    AuthenticateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());



/***/ }),

/***/ "./src/app/service/plan/plan.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/plan/plan.service.ts ***!
  \**********************************************/
/*! exports provided: PlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanService", function() { return PlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
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
        // set the related url
        this.planUrl = '/api/plans';
        this.addPlanrUrl = '/api/add-plan';
        // setting httpOptions, set new header
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // retrieve all the plans
    PlanService.prototype.getPlans = function () {
        return this.http.get(this.planUrl, this.authenticate.getAuthorizationOptions());
    };
    // add a new plan to database
    PlanService.prototype.postPlan = function (plan) {
        return this.http.post(this.addPlanrUrl, plan, this.authenticate.getAuthorizationOptions());
    };
    PlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], PlanService);
    return PlanService;
}());



/***/ }),

/***/ "./src/app/service/user/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/user/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/service/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authenticate) {
        this.http = http;
        this.authenticate = authenticate;
        this.addUserUrl = '/api/add-user';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // add user to database
    UserService.prototype.postUser = function (user) {
        return this.http.post(this.addUserUrl, user, this.authenticate.getAuthorizationOptions());
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], UserService);
    return UserService;
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