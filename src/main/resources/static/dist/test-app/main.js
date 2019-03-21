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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users/users.component */ "./src/app/users/users/users.component.ts");
/* harmony import */ var _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects/projects.component */ "./src/app/projects/projects/projects.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");






var routes = [
    {
        path: 'users',
        component: _users_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    },
    {
        path: 'user/:id',
        component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
    },
    {
        path: 'user',
        component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
    },
    {
        path: 'projects',
        component: _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "main {\r\n  margin: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar>\n  <mat-toolbar-row>\n    <a mat-button\n       routerLink=\"users/\">Users</a>\n    <a mat-button\n       routerLink=\"projects/\">Projects</a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<main>\n  <router-outlet></router-outlet>\n</main>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/projects/projects.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
                _projects_projects_module__WEBPACK_IMPORTED_MODULE_9__["ProjectsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/pagination/pagination.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/pagination/pagination.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination-container {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: flex-end;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.pagination-container>*:not(:last-child) {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.page {\r\n  font-size: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWNvbnRhaW5lcj4qOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/pagination/pagination.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/pagination/pagination.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-container\">\n  <div class=\"page\">Page: {{source.page + 1}}</div>\n  <button type=\"button\"\n          mat-raised-button\n          [disabled]=\"!source.hasPrevious\"\n          (click)=\"previous()\">Previous</button>\n  <button type=\"button\"\n          mat-raised-button\n          [disabled]=\"!source.hasNext\"\n          (click)=\"next()\">Next</button>\n</div>"

/***/ }),

/***/ "./src/app/core/components/pagination/pagination.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/pagination/pagination.component.ts ***!
  \********************************************************************/
/*! exports provided: Direction, PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/list */ "./src/app/core/models/list.ts");



var Direction;
(function (Direction) {
    Direction[Direction["backward"] = 0] = "backward";
    Direction[Direction["forward"] = 1] = "forward";
})(Direction || (Direction = {}));
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.next = function () {
        this.update.emit(Direction.forward);
    };
    PaginationComponent.prototype.previous = function () {
        this.update.emit(Direction.backward);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_list__WEBPACK_IMPORTED_MODULE_2__["PageableList"])
    ], PaginationComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "update", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/core/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/core/components/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/core/models/list.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/list.ts ***!
  \*************************************/
/*! exports provided: PageableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageableList", function() { return PageableList; });
var PageableList = /** @class */ (function () {
    function PageableList(data) {
        this.page = data.number;
        this.hasNext = data.totalPages > data.number + 1;
        this.hasPrevious = data.number !== 0;
        this.content = data.content;
    }
    return PageableList;
}());



/***/ }),

/***/ "./src/app/core/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _work_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-hours */ "./src/app/core/models/work-hours.ts");

var User = /** @class */ (function () {
    function User(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.id = user.id;
        this.skills = user.skills;
        this.currentProject = user.currentProject;
        if (user.workingHours) {
            this.workingHours = new _work_hours__WEBPACK_IMPORTED_MODULE_0__["WorkHours"](user.workingHours);
        }
        if (user.onHolidaysTill) {
            this.onHolidaysTill = new Date(user.onHolidaysTill);
        }
        if (user.freeSince) {
            this.freeSince = new Date(user.freeSince);
        }
    }
    User.prototype.serialize = function () {
        var _a = this, id = _a.id, lastName = _a.lastName, firstName = _a.firstName, skills = _a.skills, currentProject = _a.currentProject, workingHours = _a.workingHours;
        return {
            lastName: lastName,
            firstName: firstName,
            id: id,
            skills: skills,
            currentProject: currentProject,
            workingHours: workingHours
        };
    };
    return User;
}());



/***/ }),

/***/ "./src/app/core/models/work-hours.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/work-hours.ts ***!
  \*******************************************/
/*! exports provided: WorkHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkHours", function() { return WorkHours; });
var WorkHours = /** @class */ (function () {
    function WorkHours(data) {
        this.id = data.id;
        this.start = data.start;
        this.end = data.end;
    }
    return WorkHours;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var date = new Date();
var offsetSymbol = date.getTimezoneOffset() > 0 ? '-' : '+';
var offset = 0 - date.getTimezoneOffset() / 60;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Timezone': "GMT" + offsetSymbol + offset + ":00",
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ApiService.prototype.get = function (route) {
        return this.http.get(this.baseURL + route, httpOptions);
    };
    ApiService.prototype.post = function (route, body) {
        return this.http.post(this.baseURL + route, body, httpOptions);
    };
    ApiService.prototype.put = function (route, body) {
        return this.http.put(this.baseURL + route, body, httpOptions);
    };
    ApiService.prototype.delete = function (route, body) {
        return this.http.delete(this.baseURL + route, httpOptions);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/projects.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/projects.service.ts ***!
  \***************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/list */ "./src/app/core/models/list.ts");





var ProjectsService = /** @class */ (function () {
    function ProjectsService(api) {
        this.api = api;
    }
    ProjectsService.prototype.getAll = function () {
        return this.getPagination(0, 100000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.content; }));
    };
    ProjectsService.prototype.getPagination = function (page, size) {
        if (size === void 0) { size = 10; }
        var params = ["page=" + page, "size=" + size];
        var url = '/projects?' + params.join('&');
        return this.api.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _models_list__WEBPACK_IMPORTED_MODULE_4__["PageableList"](data);
        }));
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/core/services/skills.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/skills.service.ts ***!
  \*************************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");



var SkillsService = /** @class */ (function () {
    function SkillsService(api) {
        this.api = api;
    }
    SkillsService.prototype.getAll = function () {
        return this.api.get('/skills');
    };
    SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "./src/app/core/services/users.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _models_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/list */ "./src/app/core/models/list.ts");








var UsersService = /** @class */ (function () {
    function UsersService(api) {
        this.api = api;
    }
    UsersService.prototype.getPagination = function (page, skills, project, nameFilter, isAvailable) {
        var params = ["page=" + page, "size=5"];
        if (skills && skills.length > 0) {
            params.push("skill=" + skills.map(function (t) { return t.title; }).join(', '));
        }
        if (project !== undefined) {
            params.push("project=" + project.id);
        }
        if (nameFilter) {
            params.push('firstName=' + nameFilter);
            params.push('lastName=' + nameFilter);
        }
        if (isAvailable === true) {
            params.push('working=true');
        }
        else if (isAvailable === false) {
            params.push('holidays=true');
        }
        var url = '/team?' + params.join('&');
        return this.api.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            var res = new _models_list__WEBPACK_IMPORTED_MODULE_7__["PageableList"](data);
            res.content = data.content.map(function (user) { return new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"](user); });
            return res;
        }));
    };
    UsersService.prototype.get = function (id) {
        return this.api.get('/team/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"](item); }));
    };
    UsersService.prototype.create = function (user) {
        return this.api.post('/team', user.serialize());
    };
    UsersService.prototype.update = function (user) {
        // create a new user
        if (user.id === undefined) {
            return this.create(user);
        }
        return this.api.put('/team/' + user.id, user.serialize());
    };
    UsersService.prototype.remove = function (user) {
        return this.api.delete('/team/' + user.id, {});
    };
    UsersService.prototype.canAssign = function (user, project) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects/projects.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");





var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/projects/projects/projects.component.css":
/*!**********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects/projects.component.html":
/*!***********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid mat-elevation-z3\">\n    <table mat-table\n           [dataSource]=\"view.content\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell\n            *matHeaderCellDef>№</th>\n        <td mat-cell\n            *matCellDef=\"let project\">{{project.id}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell\n            *matHeaderCellDef>Name</th>\n        <td mat-cell\n            *matCellDef=\"let project\">{{project.title}}</td>\n      </ng-container>\n  \n      <!-- <ng-container matColumnDef=\"members\">\n        <th mat-header-cell\n            *matHeaderCellDef>Members</th>\n        <td mat-cell\n            *matCellDef=\"let project\">\n          <mat-chip-list>\n            <mat-chip *ngFor=\"let value of project.users\">{{value.firstName}} {{value.lastName}}</mat-chip>\n          </mat-chip-list>\n        </td>\n      </ng-container> -->\n  \n      <tr mat-header-row\n          *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row\n          *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <app-pagination [source]=\"view\"\n                    (update)=\"onPageUpdated($event)\"></app-pagination>\n  </div>"

/***/ }),

/***/ "./src/app/projects/projects/projects.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/projects.service */ "./src/app/core/services/projects.service.ts");
/* harmony import */ var src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/pagination/pagination.component */ "./src/app/core/components/pagination/pagination.component.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.page = 0;
        this.view = {
            hasNext: false,
            hasPrevious: false,
            content: [],
            page: 0,
            size: 10,
        };
        this.displayedColumns = ['id', 'name'];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getPagination(this.page)
            .subscribe(function (data) {
            _this.view = data;
            _this.page = data.page;
        });
    };
    ProjectsComponent.prototype.onPageUpdated = function (direction) {
        switch (direction) {
            case src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["Direction"].backward:
                this.page -= 1;
                break;
            case src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["Direction"].forward:
                this.page += 1;
                break;
        }
        this.getProjects();
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/pagination/pagination.component */ "./src/app/core/components/pagination/pagination.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            ],
            declarations: [_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  max-width: 20rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.user-container>* {\r\n  max-width: 20rem;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udXNlci1jb250YWluZXI+KiB7XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/users/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-container mat-elevation-z3\">\n  <h2>{{header}}</h2>\n  <mat-form-field>\n    <input matInput\n           placeholder=\"First Name\"\n           [(ngModel)]=\"user.firstName\"\n           required>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n           [(ngModel)]=\"user.lastName\"\n           placeholder=\"Last Name\"\n           required>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Skills</mat-label>\n    <mat-select multiple\n                [compareWith]=\"compareObjs\"\n                [(ngModel)]=\"user.skills\">\n      <mat-option *ngFor=\"let skill of skills\"\n                  [value]=\"skill\">{{skill.title}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Projects</mat-label>\n    <mat-select [(ngModel)]=\"user.currentProject\"\n                [compareWith]=\"compareObjs\"\n                (selectionChange)=\"projectChanged = true\">\n      <mat-option *ngFor=\"let project of projects\"\n                  [value]=\"project\">{{project.title}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n           [matDatepicker]=\"onHolidaysTill\"\n           [(ngModel)]=\"user.onHolidaysTill\"\n           placeholder=\"On holidays till\">\n    <mat-datepicker-toggle matSuffix\n                           [for]=\"onHolidaysTill\"></mat-datepicker-toggle>\n    <mat-datepicker #onHolidaysTill></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n           [matDatepicker]=\"freeSince\"\n           [(ngModel)]=\"user.freeSince\"\n           placeholder=\"Free since\">\n    <mat-datepicker-toggle matSuffix\n                           [for]=\"freeSince\"></mat-datepicker-toggle>\n    <mat-datepicker #freeSince></mat-datepicker>\n  </mat-form-field>\n  <div class=\"buttons\">\n    <button mat-button\n            color=\"primary\"\n            (click)=\"save()\">Save</button>\n    <button mat-button\n            (click)=\"cancel()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var src_app_core_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/skills.service */ "./src/app/core/services/skills.service.ts");
/* harmony import */ var src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/projects.service */ "./src/app/core/services/projects.service.ts");







var UserComponent = /** @class */ (function () {
    function UserComponent(route, router, usersService, skillsService, projectsService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.skillsService = skillsService;
        this.projectsService = projectsService;
        this.header = '';
        this.user = new src_app_core_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]({});
        this.projectChanged = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillsService.getAll().subscribe(function (skills) { return _this.skills = skills; });
        this.projectsService.getAll().subscribe(function (projects) { return _this.projects = projects; });
        this.get();
    };
    UserComponent.prototype.get = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.header = 'User №' + id;
            this.usersService.get(+id)
                .subscribe(function (user) { return _this.user = user; });
        }
        else {
            this.header = 'New user';
        }
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            if (_this.projectChanged) {
                return _this.usersService.canAssign(_this.user, _this.user.currentProject)
                    .toPromise()
                    .then(function (res) {
                    if (res === false) {
                        throw new Error("Can't assign the user to the project " + _this.user.currentProject.title);
                    }
                });
            }
        })
            .then(function () {
            _this.usersService.update(_this.user)
                .subscribe(function () {
                _this.router.navigate(['/users']);
            });
        });
    };
    UserComponent.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    UserComponent.prototype.compareObjs = function (a, b) {
        return a.id === b.id;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_core_services_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"],
            src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users/users.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.filters>* {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\nmat-button-toggle-group /deep/ .mat-button-toggle-label-content {\r\n  line-height: 36px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWx0ZXJzPioge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAvZGVlcC8gLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/users/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\">\n\n  <mat-button-toggle-group [(value)]=\"locationFilter\">\n    <mat-button-toggle value=\"any\">All</mat-button-toggle>\n    <mat-button-toggle value=\"working\">Working</mat-button-toggle>\n    <mat-button-toggle value=\"vacation\">On holidays</mat-button-toggle>\n  </mat-button-toggle-group>\n\n  <mat-form-field>\n    <input matInput\n           [(ngModel)]=\"nameFilter\"\n           placeholder=\"Serach by name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Skills</mat-label>\n    <mat-select multiple\n                [(ngModel)]=\"skillFilter\">\n      <mat-option *ngFor=\"let skill of skills\"\n                  [value]=\"skill\">{{skill.title}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Projects</mat-label>\n    <mat-select [(ngModel)]=\"projectFilter\">\n      <mat-option *ngFor=\"let project of projects\"\n                  [value]=\"project\">{{project.title}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button type=\"button\"\n          mat-raised-button\n          (click)=\"getUsers()\">Filter</button>\n  <a mat-raised-button\n     routerLink=\"/user/\"\n     color=\"primary\">Create new user</a>\n</div>\n<div class=\"grid mat-elevation-z3\">\n  <table mat-table\n         [dataSource]=\"view.content\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell\n          *matHeaderCellDef>№</th>\n      <td mat-cell\n          *matCellDef=\"let user\">{{user.id}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell\n          *matHeaderCellDef>First Name</th>\n      <td mat-cell\n          *matCellDef=\"let user\">{{user.firstName}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell\n          *matHeaderCellDef>Last Name</th>\n      <td mat-cell\n          *matCellDef=\"let user\">{{user.lastName}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"skills\">\n      <th mat-header-cell\n          *matHeaderCellDef>Skills</th>\n      <td mat-cell\n          *matCellDef=\"let user\">\n        <mat-chip-list>\n          <mat-chip *ngFor=\"let value of user.skills\">{{value.title}}</mat-chip>\n        </mat-chip-list>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"project\">\n      <th mat-header-cell\n          *matHeaderCellDef>Current project</th>\n      <td mat-cell\n          *matCellDef=\"let user\">{{user.currentProject && user.currentProject.title}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell\n          *matHeaderCellDef></th>\n      <td mat-cell\n          *matCellDef=\"let user\">\n        <a mat-button\n           routerLink=\"/user/{{user.id}}\"\n           color=\"primary\">Edit</a>\n        <button type=\"button\"\n                mat-button\n                color=\"warn\"\n                (click)=\"remove(user)\">Remove</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row\n        *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row\n        *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <app-pagination [source]=\"view\"\n                  (update)=\"onPageUpdated($event)\"></app-pagination>\n</div>"

/***/ }),

/***/ "./src/app/users/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/pagination/pagination.component */ "./src/app/core/components/pagination/pagination.component.ts");
/* harmony import */ var src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/projects.service */ "./src/app/core/services/projects.service.ts");
/* harmony import */ var src_app_core_services_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/skills.service */ "./src/app/core/services/skills.service.ts");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, skillsService, projectsService) {
        this.usersService = usersService;
        this.skillsService = skillsService;
        this.projectsService = projectsService;
        this.page = 0;
        this.view = {
            hasNext: false,
            hasPrevious: false,
            content: [],
            page: 0,
            size: 0,
        };
        this.displayedColumns = ['id', 'firstName', 'lastName', 'skills', 'project', 'edit'];
        this.skills = [];
        this.projects = [];
        this.locationFilter = 'any';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.skillsService.getAll().subscribe(function (skills) { return _this.skills = skills; });
        this.projectsService.getAll().subscribe(function (projects) { return _this.projects = projects; });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        var isAvailable = this.locationFilter === 'working' ? true :
            this.locationFilter === 'vacation' ? false : undefined;
        this.usersService.getPagination(this.page, this.skillFilter, this.projectFilter, this.nameFilter, isAvailable)
            .subscribe(function (data) {
            _this.view = data;
            _this.page = data.page;
        });
    };
    UsersComponent.prototype.remove = function (user) {
        var _this = this;
        this.usersService.remove(user).subscribe(function (res) { return _this.getUsers(); });
    };
    UsersComponent.prototype.onPageUpdated = function (direction) {
        switch (direction) {
            case src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["Direction"].backward:
                this.page -= 1;
                break;
            case src_app_core_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["Direction"].forward:
                this.page += 1;
                break;
        }
        this.getUsers();
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_core_services_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"],
            src_app_core_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], UsersComponent);
    return UsersComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8081/api/v1/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/PROJECTS/teammanagementapi/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map