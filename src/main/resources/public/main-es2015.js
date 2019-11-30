(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n  <app-navigation></app-navigation>\r\n  <mat-card>\r\n    <router-outlet></router-outlet>\r\n  </mat-card>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\" (click)=\"onCancel()\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n    <div>About Application</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"10px\">\r\n    <div>Name: {{this.name}}</div>\r\n    <div>Version: {{this.version}}</div>\r\n    <div>Build date: {{this.buildDate | date: 'medium'}}</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>Delete Person</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\"\r\n       fxLayoutGap=\"10px\">\r\n    <mat-list fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n              fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-list-item>Full name: {{fullName}}</mat-list-item>\r\n        <mat-list-item class=\"modal-footer\">Email: {{email}}</mat-list-item>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button md-raised-button type=\"button\" color=\"warn\" class=\"stretch-50-xs\"\r\n                (click)=\"delete()\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-list>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book/address-book.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book/address-book.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <span style=\"font: 25px bold\">Address Book</span>\r\n  <div fxLayout\r\n       fxLayout.xs=\"column\"\r\n       fxLayoutAlign=\"start\"\r\n       fxLayoutGap=\"10px\"\r\n       fxLayoutGap.xs=\"0\">\r\n    <mat-form-field fxFlex=\"90%\">\r\n      <label>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\"\r\n               placeholder=\"Filter\">\r\n      </label>\r\n    </mat-form-field>\r\n    <button mat-button color=\"primary\" fxFlex=\"10%\" value=\"bold\" (click)=\"createPerson()\">\r\n      <mat-icon>add</mat-icon>\r\n      New\r\n    </button>\r\n  </div>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"fullName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Full Name</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.fullName}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n        (click)=\"selected(row);\">\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <span style=\"font: 25px bold\">Messages</span>\r\n  <div fxLayout\r\n       fxLayout.xs=\"column\"\r\n       fxLayoutAlign=\"start\"\r\n       fxLayoutGap=\"10px\"\r\n       fxLayoutGap.xs=\"0\">\r\n    <mat-form-field fxFlex=\"90%\">\r\n      <label>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\"\r\n               placeholder=\"Filter\">\r\n      </label>\r\n    </mat-form-field>\r\n    <button mat-button color=\"primary\" fxFlex=\"10%\" value=\"bold\" (click)=\"createMessage()\">\r\n      <mat-icon>add</mat-icon>\r\n      New\r\n    </button>\r\n  </div>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"author\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Author</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"recipient\" *ngIf=\"isAdmin()\" class=\"hide\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Recipient</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.recipient}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'medium'}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n        (click)=\"selected(row);\">\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center stretch\"\r\n     fxLayoutGap=\"20px\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n    <div fxFlex [ngStyle]=\"{'font-size.px': 28, color: 'grey'}\">Authentication</div>\r\n  </div>\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n        fxLayoutGap=\"10px\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n         fxLayoutGap=\"10px\">\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"password\"\r\n                 [type]=\"'password'\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"email.invalid\">{{getPasswordErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n         fxLayoutGap=\"10px\">\r\n      <button mat-button fxFlex md-raised-button color=\"primary\" type=\"submit\"\r\n              [disabled]=\"!loginForm.form.valid\">\r\n        <mat-icon>lock_open</mat-icon>\r\n      </button>\r\n      <button mat-button fxFlex md-raised-button color=\"primary\" (click)=\"toRegistration()\">\r\n        <mat-icon>account_circle</mat-icon>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/message-edit-dialog/message-edit-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/message-edit-dialog/message-edit-dialog.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>Delete Message</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\"\r\n       fxLayoutGap=\"10px\">\r\n    <mat-list fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-list-item>Sent message to: {{message.to}}</mat-list-item>\r\n        <mat-list-item class=\"modal-footer\">{{message.title}}</mat-list-item>\r\n        <mat-list-item class=\"modal-footer\">{{message.message}}</mat-list-item>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button md-raised-button type=\"button\" color=\"warn\" class=\"stretch-50-xs\"\r\n                (click)=\"delete()\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-list>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navigation/navigation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navigation/navigation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <div class=\"flex-container\" fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center center\">\r\n    <div fxFlex>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div *ngIf=\"isAuthenticated()\">\r\n          <button mat-mini-fab color=\"primary\" matTooltip=\"Menu\"\r\n                  (click)=\"toggleOverlay(drawer.toggle())\">\r\n            <mat-icon>apps</mat-icon>\r\n          </button>\r\n          <span style=\"margin-left: 10px\">pd_chat</span>\r\n        </div>\r\n        <div class=\"app-title\"></div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n        <div *ngIf=\"isAuthenticated()\" class=\"hide\">\r\n          <mat-icon class=\"userIcon\" style=\"margin-top: 5px\">perm_identity</mat-icon>\r\n        </div>\r\n        <span class=\"userText\">{{username}}</span>\r\n        <button *ngIf=\"isAuthenticated()\" class=\"nav_button\" mat-button=\"\" (click)=\"logout()\"\r\n                matTooltip=\"logout\">\r\n          <mat-icon>power_settings_new</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-sidenav-container class=\"sidenav\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\r\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n               [opened]=\"(isHandset$ | async) === true\">\r\n    <mat-toolbar (click)=\"toggleOverlay(drawer.toggle())\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item (click)=\"getUsers(); toggleOverlay(drawer.toggle());\"\r\n         *ngIf=\"isAuthenticated() && isAdmin()\"\r\n         class=\"hide\">Users</a>\r\n      <a mat-list-item (click)=\"openMessages(); toggleOverlay(drawer.toggle());\">Messages</a>\r\n      <a mat-list-item (click)=\"openAddressBook(); toggleOverlay(drawer.toggle());\">Address Book</a>\r\n      <a mat-list-item (click)=\"about(); toggleOverlay(drawer.toggle());\">About</a>\r\n      <a mat-list-item href=\"https://angular.io/\" target=\"_blank\"\r\n         (click)=\"toggleOverlay(drawer.toggle())\">Angular</a>\r\n      <a mat-list-item href=\"https://github.com/angular/flex-layout/\" target=\"_blank\"\r\n         (click)=\"toggleOverlay(drawer.toggle())\">Flex\r\n        Layout</a>\r\n      <a mat-list-item href=\"https://material.angular.io/\" target=\"_blank\"\r\n         (click)=\"toggleOverlay(drawer.toggle())\">Angular Material</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n</mat-sidenav-container>\r\n<div class=\"overlay\" *ngIf=\"visible\" (click)=\"toggleOverlay(drawer.toggle())\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-address-book/new-address-book.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-address-book/new-address-book.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>New Person</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\"\r\n       fxLayoutGap=\"10px\">\r\n    <form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter full name\" [formControl]=\"fullName\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"fullName.invalid\">{{getFullNameErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter email\" [formControl]=\"email\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button fxFlex md-raised-button color=\"primary\" type=\"submit\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-message-dialog/new-message-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-message-dialog/new-message-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>New Message</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\"\r\n       fxLayoutGap=\"10px\">\r\n    <form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter email for send to\" [formControl]=\"emailTo\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"emailTo.invalid\">{{getEmailToErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter message title\" [formControl]=\"title\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"title.invalid\">{{getTitleErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <textarea matInput placeholder=\"Enter your message\" [formControl]=\"messageBody\"\r\n                      required></textarea>\r\n          </label>\r\n          <mat-error *ngIf=\"messageBody.invalid\">{{getMessageErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button fxFlex md-raised-button color=\"primary\" type=\"submit\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon (click)=\"onCancel()\">cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-user-dialog/new-user-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-user-dialog/new-user-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n    <div>New User</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"10px\">\r\n    <form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter you Full Name\" [formControl]=\"fullName\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"fullName.invalid\">{{getFullNameErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your login name\" [formControl]=\"login\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"login.invalid\">{{getLoginErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your password\" [formControl]=\"password\"\r\n                   [type]=\"'password'\" required>\r\n          </label>\r\n          <mat-error *ngIf=\"email.invalid\">{{getPasswordErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Role\" [formControl]=\"role\">\r\n            <mat-option value=\"ADMIN\">ADMIN</mat-option>\r\n            <mat-option value=\"PARTICIPANT\">PARTICIPANT</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button fxFlex md-raised-button color=\"primary\" type=\"submit\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon (click)=\"onCancel()\">cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/registration/registration.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/registration/registration.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center stretch\"\r\n     fxLayoutGap=\"20px\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n    <div fxFlex [ngStyle]=\"{'font-size.px': 28, color: 'grey'}\">Registration</div>\r\n  </div>\r\n  <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n        fxLayoutGap=\"10px\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n         fxLayoutGap=\"10px\">\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter you Full Name\" [formControl]=\"fullName\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"fullName.invalid\">{{getFullNameErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter your login name\" [formControl]=\"login\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"login.invalid\">{{getLoginErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"password\"\r\n                 [type]=\"'password'\" required>\r\n        </label>\r\n        <mat-error *ngIf=\"email.invalid\">{{getPasswordErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n         fxLayoutGap=\"10px\">\r\n      <button fxFlex md-raised-button color=\"primary\" type=\"submit\"\r\n              [disabled]=\"!regForm.form.valid\">\r\n        <mat-icon>done</mat-icon>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-edit-dialog/user-edit-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-edit-dialog/user-edit-dialog.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutGap=\"20px\">\r\n  <div class=\"modal-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n    <div>Edit User</div>\r\n  </div>\r\n  <div class=\"modal-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"10px\">\r\n    <form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start stretch\"\r\n           fxLayoutGap=\"10px\">\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter you Full Name\" [formControl]=\"fullName\"\r\n                   [value]=\"user.fullName\"\r\n                   required>\r\n          </label>\r\n          <mat-error *ngIf=\"fullName.invalid\">{{getFullNameErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your email\" [formControl]=\"email\"\r\n                   [value]=\"user.email\"\r\n                   required>\r\n          </label>\r\n          <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your login name\" [formControl]=\"login\"\r\n                   [value]=\"user.login\"\r\n                   required>\r\n          </label>\r\n          <mat-error *ngIf=\"login.invalid\">{{getLoginErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>\r\n            <input matInput placeholder=\"Enter your new password\" [formControl]=\"password\"\r\n                   [type]=\"'password'\"\r\n                   required>\r\n          </label>\r\n          <mat-error *ngIf=\"email.invalid\">{{getPasswordErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Role</mat-label>\r\n          <mat-select [placeholder]=\"user.role\" [formControl]=\"role\" required>\r\n            <mat-option value=\"ADMIN\">ADMIN</mat-option>\r\n            <mat-option value=\"PARTICIPANT\">PARTICIPANT</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"role.invalid\">{{getRoleErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Active</mat-label>\r\n          <mat-select [formControl]=\"active\" required>\r\n            <mat-option value=\"true\">true</mat-option>\r\n            <mat-option value=\"false\">false</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"role.invalid\">{{getActiveErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"modal-footer\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxLayoutGap=\"10px\">\r\n        <button mat-button fxFlex md-raised-button color=\"primary\" type=\"submit\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"warn\" class=\"stretch-50-xs\"\r\n                (click)=\"delete()\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <button mat-button md-raised-button type=\"button\" color=\"primary\" class=\"stretch-50-xs\"\r\n                (click)=\"onCancel()\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/users/users.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/users/users.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <span style=\"font: 25px bold\">Users</span>\r\n  <div fxLayout\r\n       fxLayout.xs=\"column\"\r\n       fxLayoutAlign=\"start\"\r\n       fxLayoutGap=\"10px\"\r\n       fxLayoutGap.xs=\"0\">\r\n    <mat-form-field fxFlex=\"90%\">\r\n      <label>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </label>\r\n    </mat-form-field>\r\n    <button mat-button color=\"primary\" fxFlex=\"10%\" value=\"bold\" (click)=\"createUser()\">\r\n      <mat-icon>add</mat-icon>\r\n      New\r\n    </button>\r\n  </div>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"fullName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Full Name</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.fullName}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"login\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Login</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.login}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"role\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Role</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"isActive\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Active</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.active}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n        (click)=\"selected(row);\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/auth-guard.service */ "./src/app/helper/auth-guard.service.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/users/users.component */ "./src/app/component/users/users.component.ts");
/* harmony import */ var _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/registration/registration.component */ "./src/app/component/registration/registration.component.ts");
/* harmony import */ var _component_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/address-book/address-book.component */ "./src/app/component/address-book/address-book.component.ts");









const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'address-book', component: _component_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_8__["AddressBookComponent"], canActivate: [_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'users', component: _component_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], canActivate: [_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_helper_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'registration', component: _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'client';
        this.authService.currentUser.subscribe(value => this.currentUser = value);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/login/login.module */ "./src/app/component/login/login.module.ts");
/* harmony import */ var _component_about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/about/about.module */ "./src/app/component/about/about.module.ts");
/* harmony import */ var _component_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/navigation/navigation.module */ "./src/app/component/navigation/navigation.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helper_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper/basic-auth-interceptor */ "./src/app/helper/basic-auth-interceptor.ts");
/* harmony import */ var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper/error-interceptor */ "./src/app/helper/error-interceptor.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _component_users_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/users/users.component */ "./src/app/component/users/users.component.ts");
/* harmony import */ var _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/registration/registration.component */ "./src/app/component/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _component_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/new-user-dialog/new-user-dialog.component */ "./src/app/component/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var _component_new_user_dialog_new_user_dialog_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/new-user-dialog/new-user-dialog.module */ "./src/app/component/new-user-dialog/new-user-dialog.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _component_user_edit_dialog_user_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/user-edit-dialog/user-edit-dialog.component */ "./src/app/component/user-edit-dialog/user-edit-dialog.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _component_message_edit_dialog_message_edit_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/message-edit-dialog/message-edit-dialog.component */ "./src/app/component/message-edit-dialog/message-edit-dialog.component.ts");
/* harmony import */ var _component_new_message_dialog_new_message_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/new-message-dialog/new-message-dialog.component */ "./src/app/component/new-message-dialog/new-message-dialog.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _component_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/address-book/address-book.component */ "./src/app/component/address-book/address-book.component.ts");
/* harmony import */ var _component_new_address_book_new_address_book_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./component/new-address-book/new-address-book.component */ "./src/app/component/new-address-book/new-address-book.component.ts");
/* harmony import */ var _component_address_book_edit_dialog_address_book_edit_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/address-book-edit-dialog/address-book-edit-dialog.component */ "./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.ts");





































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _component_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"],
            _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationComponent"],
            _component_user_edit_dialog_user_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__["UserEditDialogComponent"],
            _component_message_edit_dialog_message_edit_dialog_component__WEBPACK_IMPORTED_MODULE_31__["MessageEditDialogComponent"],
            _component_new_message_dialog_new_message_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NewMessageDialogComponent"],
            _component_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_34__["AddressBookComponent"],
            _component_new_address_book_new_address_book_component__WEBPACK_IMPORTED_MODULE_35__["NewAddressBookComponent"],
            _component_address_book_edit_dialog_address_book_edit_dialog_component__WEBPACK_IMPORTED_MODULE_36__["AddressBookEditDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _component_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"],
            _component_login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
            _component_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _component_new_user_dialog_new_user_dialog_module__WEBPACK_IMPORTED_MODULE_26__["NewUserDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
        ],
        providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _helper_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["BasicAuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _component_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_25__["NewUserDialogComponent"],
            _component_user_edit_dialog_user_edit_dialog_component__WEBPACK_IMPORTED_MODULE_29__["UserEditDialogComponent"],
            _component_new_message_dialog_new_message_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NewMessageDialogComponent"],
            _component_message_edit_dialog_message_edit_dialog_component__WEBPACK_IMPORTED_MODULE_31__["MessageEditDialogComponent"],
            _component_new_address_book_new_address_book_component__WEBPACK_IMPORTED_MODULE_35__["NewAddressBookComponent"],
            _component_address_book_edit_dialog_address_book_edit_dialog_component__WEBPACK_IMPORTED_MODULE_36__["AddressBookEditDialogComponent"]
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/about/about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/about/about.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AboutComponent = class AboutComponent {
    constructor(http, dialogRef) {
        this.http = http;
        this.dialogRef = dialogRef;
        this.url = '/actuator/info';
    }
    ngOnInit() {
        this.getInfo().subscribe(res => {
            console.log(res);
            this.name = res.build.name;
            this.version = res.build.version;
            this.buildDate = res.build.time;
        });
    }
    getInfo() {
        return this.http.get(this.url);
    }
    onCancel() {
        this.dialogRef.close();
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/component/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/component/about/about.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/about/about.module.ts ***!
  \*************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");








let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        ],
        declarations: [
            _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
        ],
        entryComponents: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGRyZXNzLWJvb2stZWRpdC1kaWFsb2cvYWRkcmVzcy1ib29rLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddressBookEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookEditDialogComponent", function() { return AddressBookEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_address_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/address-book.service */ "./src/app/service/address-book.service.ts");







let AddressBookEditDialogComponent = class AddressBookEditDialogComponent {
    constructor(dialogRef, addressBookService, router, location, data) {
        this.dialogRef = dialogRef;
        this.addressBookService = addressBookService;
        this.router = router;
        this.location = location;
        this.data = data;
        this.addressBook = data.pageValue;
        this.fullName = this.addressBook.fullName;
        this.email = this.addressBook.email;
    }
    delete() {
        this.addressBookService.delete(this.addressBook.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(value => {
            this.dialogRef.close();
            this.refresh();
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    refresh() {
        this.router.navigateByUrl('/AddressBookComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
AddressBookEditDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_address_book_service__WEBPACK_IMPORTED_MODULE_6__["AddressBookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddressBookEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-book-edit-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-book-edit-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-book-edit-dialog.component.css */ "./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddressBookEditDialogComponent);



/***/ }),

/***/ "./src/app/component/address-book/address-book.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/address-book/address-book.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/address-book/address-book.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/address-book/address-book.component.ts ***!
  \******************************************************************/
/*! exports provided: AddressBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookComponent", function() { return AddressBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _service_address_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/address-book.service */ "./src/app/service/address-book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _new_address_book_new_address_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-address-book/new-address-book.component */ "./src/app/component/new-address-book/new-address-book.component.ts");
/* harmony import */ var _address_book_edit_dialog_address_book_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../address-book-edit-dialog/address-book-edit-dialog.component */ "./src/app/component/address-book-edit-dialog/address-book-edit-dialog.component.ts");












let AddressBookComponent = class AddressBookComponent {
    constructor(http, authService, dialog, addressBookService) {
        this.http = http;
        this.authService = authService;
        this.dialog = dialog;
        this.addressBookService = addressBookService;
        this.displayedColumns = ['position', 'fullName', 'email'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
        this.pageSize = 10;
    }
    ngOnInit() {
        this.addressBookService.getBooks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(res => {
            const periodicElements = [];
            res.forEach((value, index) => {
                periodicElements.push({
                    position: index,
                    id: value.id,
                    fullName: value.fullName,
                    email: value.email,
                    deleted: value.deleted
                });
            });
            return periodicElements;
        })).subscribe(value => {
            this.paginator._changePageSize(this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](value);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    createPerson() {
        this.dialog.open(_new_address_book_new_address_book_component__WEBPACK_IMPORTED_MODULE_10__["NewAddressBookComponent"], { disableClose: false });
    }
    selected(row) {
        const addressBook = {
            id: row.id,
            fullName: row.fullName,
            email: row.email,
        };
        this.dialog.open(_address_book_edit_dialog_address_book_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddressBookEditDialogComponent"], {
            disableClose: false,
            data: { pageValue: addressBook }
        });
    }
};
AddressBookComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _service_address_book_service__WEBPACK_IMPORTED_MODULE_8__["AddressBookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], AddressBookComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], AddressBookComponent.prototype, "sort", void 0);
AddressBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address-book/address-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-book.component.css */ "./src/app/component/address-book/address-book.component.css")).default]
    })
], AddressBookComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _new_message_dialog_new_message_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-message-dialog/new-message-dialog.component */ "./src/app/component/new-message-dialog/new-message-dialog.component.ts");
/* harmony import */ var _message_edit_dialog_message_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../message-edit-dialog/message-edit-dialog.component */ "./src/app/component/message-edit-dialog/message-edit-dialog.component.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");












let HomeComponent = class HomeComponent {
    constructor(http, authService, dialog, messageService) {
        this.http = http;
        this.authService = authService;
        this.dialog = dialog;
        this.messageService = messageService;
        this.displayedColumns = this.isAdmin() ? ['position', 'author', 'recipient', 'date', 'title'] : ['position', 'author', 'date', 'title'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
        this.pageSize = 10;
    }
    ngOnInit() {
        this.messageService.getMessages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((res) => {
            const periodicElements = [];
            res.forEach((value, index) => {
                periodicElements.push({
                    position: index,
                    id: value.id,
                    author: value.from,
                    recipient: this.isAdmin() ? value.to : null,
                    date: value.createDate,
                    title: value.title,
                    message: value.message,
                    deleted: value.deleted
                });
            });
            return periodicElements;
        })).subscribe(value => {
            this.paginator._changePageSize(this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](value);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    isAdmin() {
        return this.authService.currentUserValue.role === "ADMIN";
    }
    createMessage() {
        this.dialog.open(_new_message_dialog_new_message_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NewMessageDialogComponent"], { disableClose: false });
    }
    selected(row) {
        const message = {
            id: row.id,
            from: row.author,
            to: row.recipient,
            createDate: row.date,
            title: row.title,
            message: row.message,
            deleted: row.deleted
        };
        this.dialog.open(_message_edit_dialog_message_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MessageEditDialogComponent"], { disableClose: false, data: { pageValue: message } });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _service_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], HomeComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], HomeComponent.prototype, "sort", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







let LoginComponent = class LoginComponent {
    constructor(authService, router, snackBar, formBuilder, route) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.route = route;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.error = '';
        this.registrationPage = '/registration';
        if (this.authService.currentUser) {
            this.router.navigate(['/']).then();
        }
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getPasswordErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('password') ? 'Not a valid password' :
                '';
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
    onSubmit() {
        this.submitted = true;
        if (!this.email.value) {
            return;
        }
        if (!this.password.value) {
            return;
        }
        this.loading = true;
        this.authService.login(this.email.value, this.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]).then();
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
    toRegistration() {
        this.router.navigate([this.registrationPage]).then();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/component/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/login/login.module.ts ***!
  \*************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");











let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        ],
        providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
    })
], LoginModule);



/***/ }),

/***/ "./src/app/component/message-edit-dialog/message-edit-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/message-edit-dialog/message-edit-dialog.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZXNzYWdlLWVkaXQtZGlhbG9nL21lc3NhZ2UtZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/message-edit-dialog/message-edit-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/message-edit-dialog/message-edit-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: MessageEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEditDialogComponent", function() { return MessageEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let MessageEditDialogComponent = class MessageEditDialogComponent {
    constructor(dialogRef, messageService, router, location, data) {
        this.dialogRef = dialogRef;
        this.messageService = messageService;
        this.router = router;
        this.location = location;
        this.data = data;
        this.emailTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.message = data.pageValue;
    }
    onSubmit() {
    }
    delete() {
        this.messageService.delete(this.message.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(value => {
            this.dialogRef.close();
            this.refreshUsers();
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    refreshUsers() {
        this.router.navigateByUrl('/UsersComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
MessageEditDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MessageEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message-edit-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-edit-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/message-edit-dialog/message-edit-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-edit-dialog.component.css */ "./src/app/component/message-edit-dialog/message-edit-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MessageEditDialogComponent);



/***/ }),

/***/ "./src/app/component/navigation/navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/navigation/navigation.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/navigation/navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/navigation/navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NavigationComponent = class NavigationComponent {
    constructor(breakpointObserver, dialog, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.visible = false;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    ngOnInit() {
        this.username = this.authService.currentUserValue.email;
    }
    getUsers() {
        this.router.navigate(['/users']).then();
    }
    openMessages() {
        this.router.navigate(['/home']).then();
    }
    about() {
        this.dialog.open(_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], { disableClose: false });
    }
    isAuthenticated() {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            return true;
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']).then();
    }
    toggleOverlay(event) {
        this.visible = !this.visible;
        this.toggle.emit(this.visible);
    }
    isAdmin() {
        return this.authService.currentUserValue.role === "ADMIN";
    }
    openAddressBook() {
        this.router.navigate(["/address-book"]).then();
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], NavigationComponent.prototype, "visible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], NavigationComponent.prototype, "toggle", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/component/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/component/navigation/navigation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/navigation/navigation.module.ts ***!
  \***********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.component */ "./src/app/component/navigation/navigation.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
        ],
        exports: [
            _navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
        ],
        declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]]
    })
], NavigationModule);



/***/ }),

/***/ "./src/app/component/new-address-book/new-address-book.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/new-address-book/new-address-book.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uZXctYWRkcmVzcy1ib29rL25ldy1hZGRyZXNzLWJvb2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/new-address-book/new-address-book.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/new-address-book/new-address-book.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewAddressBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAddressBookComponent", function() { return NewAddressBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _service_address_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/address-book.service */ "./src/app/service/address-book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let NewAddressBookComponent = class NewAddressBookComponent {
    constructor(dialogRef, addressBookService, router, location) {
        this.dialogRef = dialogRef;
        this.addressBookService = addressBookService;
        this.router = router;
        this.location = location;
        this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    onSubmit() {
        if (!this.fullName.value) {
            return;
        }
        if (!this.email.value) {
            return;
        }
        const addressBook = {
            fullName: this.fullName.value,
            email: this.email.value
        };
        this.addressBookService.create(addressBook).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(value => {
            this.dialogRef.close();
            this.refresh();
        });
    }
    getFullNameErrorMessage() {
        return this.fullName.hasError('required') ? 'You must enter a value' :
            this.fullName.hasError('fullName') ? 'Not a valid full name' :
                '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    onCancel() {
        this.dialogRef.close();
    }
    refresh() {
        this.router.navigateByUrl('/AddressBookComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
NewAddressBookComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _service_address_book_service__WEBPACK_IMPORTED_MODULE_4__["AddressBookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
NewAddressBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-address-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-address-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-address-book/new-address-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-address-book.component.css */ "./src/app/component/new-address-book/new-address-book.component.css")).default]
    })
], NewAddressBookComponent);



/***/ }),

/***/ "./src/app/component/new-message-dialog/new-message-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/component/new-message-dialog/new-message-dialog.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uZXctbWVzc2FnZS1kaWFsb2cvbmV3LW1lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/new-message-dialog/new-message-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/new-message-dialog/new-message-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewMessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageDialogComponent", function() { return NewMessageDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let NewMessageDialogComponent = class NewMessageDialogComponent {
    constructor(dialogRef, messageService, authService, router, location) {
        this.dialogRef = dialogRef;
        this.messageService = messageService;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.emailTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.messageBody = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    onSubmit() {
        if (!this.emailTo.value) {
            return;
        }
        if (!this.title.value) {
            return;
        }
        if (!this.messageBody.value) {
            return;
        }
        const message = {
            from: this.authService.currentUserValue.email,
            to: this.emailTo.value,
            title: this.title.value,
            message: this.messageBody.value,
        };
        this.messageService.create(message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(value => {
            this.dialogRef.close();
            this.refresh();
        });
    }
    getEmailToErrorMessage() {
        return this.emailTo.hasError('required') ? 'You must enter a value' :
            this.emailTo.hasError('emailTo') ? 'Not a valid email' :
                '';
    }
    getTitleErrorMessage() {
        return this.emailTo.hasError('required') ? 'You must enter a value' :
            this.title.hasError('title') ? 'Not a valid title' :
                '';
    }
    getMessageErrorMessage() {
        return this.messageBody.hasError('required') ? 'You must enter a value' :
            this.messageBody.hasError('message') ? 'Not a valid message' :
                '';
    }
    onCancel() {
        this.dialogRef.close();
    }
    refresh() {
        this.router.navigateByUrl('/HomeComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
NewMessageDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _service_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
NewMessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-message-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-message-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-message-dialog/new-message-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-message-dialog.component.css */ "./src/app/component/new-message-dialog/new-message-dialog.component.css")).default]
    })
], NewMessageDialogComponent);



/***/ }),

/***/ "./src/app/component/new-user-dialog/new-user-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/new-user-dialog/new-user-dialog.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uZXctdXNlci1kaWFsb2cvbmV3LXVzZXItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/new-user-dialog/new-user-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/new-user-dialog/new-user-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: NewUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogComponent", function() { return NewUserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");








let NewUserDialogComponent = class NewUserDialogComponent {
    constructor(dialogRef, router, userService, location) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.userService = userService;
        this.location = location;
        this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.url = '/user';
    }
    onSubmit() {
        if (!this.fullName.value) {
            return;
        }
        if (!this.email.value) {
            return;
        }
        if (!this.login.value) {
            return;
        }
        if (!this.password.value) {
            return;
        }
        const user = {
            fullName: this.fullName.value,
            email: this.email.value,
            login: this.login.value,
            password: this.password.value,
            role: this.role.value
        };
        this.userService.create(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.dialogRef.close();
            this.refreshUsers();
        });
    }
    getFullNameErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('full_name') ? 'Not a valid full name' :
                '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getLoginErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('login') ? 'Not a valid login' :
                '';
    }
    getPasswordErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('password') ? 'Not a valid password' :
                '';
    }
    onCancel() {
        this.dialogRef.close();
    }
    refreshUsers() {
        this.router.navigateByUrl('/UsersComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
NewUserDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
NewUserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-user-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-user-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/new-user-dialog/new-user-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-user-dialog.component.css */ "./src/app/component/new-user-dialog/new-user-dialog.component.css")).default]
    })
], NewUserDialogComponent);



/***/ }),

/***/ "./src/app/component/new-user-dialog/new-user-dialog.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/new-user-dialog/new-user-dialog.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewUserDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogModule", function() { return NewUserDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-user-dialog.component */ "./src/app/component/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");











let NewUserDialogModule = class NewUserDialogModule {
};
NewUserDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewUserDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"]
        ],
        entryComponents: []
    })
], NewUserDialogModule);



/***/ }),

/***/ "./src/app/component/registration/registration.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/registration/registration.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/registration/registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/registration/registration.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegistrationComponent = class RegistrationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.error = '';
        this.loginUrl = '/login';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        if (!this.fullName.value) {
            return;
        }
        if (!this.email.value) {
            return;
        }
        if (!this.login.value) {
            return;
        }
        if (!this.password.value) {
            return;
        }
        this.loading = true;
        let user = {
            fullName: this.fullName.value,
            email: this.email.value,
            login: this.login.value,
            password: this.password.value,
            role: "PARTICIPANT"
        };
        this.authService.registration(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            this.router.navigate([this.loginUrl]).then();
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
    getFullNameErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('full_name') ? 'Not a valid full name' :
                '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getLoginErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('login') ? 'Not a valid login' :
                '';
    }
    getPasswordErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('password') ? 'Not a valid password' :
                '';
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/component/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/component/user-edit-dialog/user-edit-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/user-edit-dialog/user-edit-dialog.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyLWVkaXQtZGlhbG9nL3VzZXItZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/user-edit-dialog/user-edit-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/user-edit-dialog/user-edit-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditDialogComponent", function() { return UserEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let UserEditDialogComponent = class UserEditDialogComponent {
    constructor(dialogRef, userService, router, location, data) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.router = router;
        this.location = location;
        this.data = data;
        this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.active = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.user = data.pageValue;
    }
    onSubmit() {
        if (!this.fullName.value) {
            return;
        }
        if (!this.email.value) {
            return;
        }
        if (!this.login.value) {
            return;
        }
        if (!this.password.value) {
            return;
        }
        const user = {
            id: this.user.id,
            fullName: this.fullName.value,
            email: this.email.value,
            login: this.login.value,
            password: this.password.value,
            role: this.role.value,
            active: this.active.value
        };
        this.userService.update(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.dialogRef.close();
            this.refreshUsers();
        });
    }
    getFullNameErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('full_name') ? 'Not a valid full name' :
                '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getLoginErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('login') ? 'Not a valid login' :
                '';
    }
    getPasswordErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('password') ? 'Not a valid password' :
                '';
    }
    getRoleErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('role') ? 'Not a valid role' :
                '';
    }
    getActiveErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('active') ? 'Not a valid active' :
                '';
    }
    onCancel() {
        this.dialogRef.close();
    }
    delete() {
        this.userService.delete(this.user.id).subscribe();
        this.dialogRef.close();
        this.refreshUsers();
    }
    refreshUsers() {
        this.router.navigateByUrl('/UsersComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]).then();
        });
    }
};
UserEditDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UserEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-edit-dialog/user-edit-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit-dialog.component.css */ "./src/app/component/user-edit-dialog/user-edit-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UserEditDialogComponent);



/***/ }),

/***/ "./src/app/component/users/users.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/users/users.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/users/users.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/users/users.component.ts ***!
  \****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-user-dialog/new-user-dialog.component */ "./src/app/component/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _user_edit_dialog_user_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-edit-dialog/user-edit-dialog.component */ "./src/app/component/user-edit-dialog/user-edit-dialog.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");











let UsersComponent = class UsersComponent {
    constructor(http, dialog, userService) {
        this.http = http;
        this.dialog = dialog;
        this.userService = userService;
        this.displayedColumns = ['position', 'fullName', 'email', 'login', 'role', 'isActive'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
        this.pageSize = 10;
    }
    ngOnInit() {
        this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((res) => {
            const periodicElements = [];
            res.forEach((value, index) => {
                periodicElements.push({
                    position: index,
                    id: value.id,
                    fullName: value.fullName,
                    email: value.email,
                    login: value.login,
                    role: value.role,
                    active: value.active
                });
            });
            return periodicElements;
        })).subscribe(value => {
            this.paginator._changePageSize(this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](value);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    createUser() {
        this.dialog.open(_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NewUserDialogComponent"], { disableClose: false });
    }
    selected(row) {
        const user = {
            id: row.id,
            fullName: row.fullName,
            email: row.email,
            login: row.login,
            role: row.role,
            active: row.active
        };
        this.dialog.open(_user_edit_dialog_user_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserEditDialogComponent"], { disableClose: false, data: { pageValue: user } });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], UsersComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], UsersComponent.prototype, "sort", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/component/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/helper/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/helper/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(rout, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }).then(r => {
            return false;
        });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/helper/basic-auth-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/helper/basic-auth-interceptor.ts ***!
  \**************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



let BasicAuthInterceptor = class BasicAuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthInterceptor.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthInterceptor);



/***/ }),

/***/ "./src/app/helper/error-interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/helper/error-interceptor.ts ***!
  \*********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/service/address-book.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/address-book.service.ts ***!
  \*************************************************/
/*! exports provided: AddressBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookService", function() { return AddressBookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AddressBookService = class AddressBookService {
    constructor(http) {
        this.http = http;
    }
    getBooks() {
        return this.http.get("/api/address-book/list");
    }
    create(addressBook) {
        return this.http.put("/api/address-book", addressBook);
    }
    delete(id) {
        return this.http.delete("/api/address-book/" + id);
    }
};
AddressBookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddressBookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddressBookService);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginUrl = "/api/login";
        this.registrationUrl = "/api/registration";
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', `Basic ${window.btoa(email + ':' +
            password)}`);
        return this.http.post(this.loginUrl, null, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    registration(user) {
        return this.http.put(this.registrationUrl, user);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/service/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");




let MessageService = class MessageService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getMessages() {
        let url = "/api/message/list";
        if (this.isAdmin()) {
            url = "/api/message/all";
        }
        return this.http.get(url);
    }
    create(message) {
        return this.http.put("/api/message/create", message);
    }
    delete(id) {
        return this.http.delete("/api/message/" + id);
    }
    isAdmin() {
        return this.authService.currentUserValue.role === "ADMIN";
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    update(user) {
        return this.http.put("/api/user/update", user);
    }
    delete(id) {
        const url = "/api/user/delete/" + id;
        return this.http.delete(url);
    }
    getUsers() {
        return this.http.get("/api/user/list");
    }
    create(user) {
        return this.http.put("/api/user", user);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dplatonov\Projects\pd_chat\src\main\resources\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map