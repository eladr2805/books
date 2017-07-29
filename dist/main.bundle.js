webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n    <nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\r\n        <div class=\"container topnav\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand topnav\" href=\"#\">Herolo</a>\r\n            </div>\r\n        </div>\r\n        <!-- /.container -->\r\n    </nav>\r\n\r\n    <!-- Header -->\r\n    <a name=\"about\"></a>\r\n    <div class=\"intro-header\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"intro-message\">\r\n                        <h1>Books catalog</h1>\r\n                        <h3>Herolo FE test by Elad Rosenberg</h3>\r\n                        <hr class=\"intro-divider\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.container -->\r\n    </div>\r\n    <!-- /.intro-header -->\r\n\r\n    <!-- Page Content -->\r\n\t<a  name=\"services\"></a>\r\n        <app-books-list></app-books-list>\r\n        <!-- /.container -->\r\n    <!-- /.content-section-a -->\r\n    <div class=\"banner\">\r\n    </div>\r\n    <!-- /.banner -->\r\n\r\n    <!-- Footer -->\r\n    <footer>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    \r\n                    <p class=\"copyright text-muted small\">Copyright &copy; Herolo 2017. All Rights Reserved</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_list_books_list_component__ = __webpack_require__("../../../../../src/app/books-list/books-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_data_service__ = __webpack_require__("../../../../../src/app/books-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__format_title_pipe__ = __webpack_require__("../../../../../src/app/format-title.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_actions_books_actions_component__ = __webpack_require__("../../../../../src/app/books-actions/books-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__books_list_books_list_component__["a" /* BooksListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__format_title_pipe__["a" /* FormatTitlePipe */],
            __WEBPACK_IMPORTED_MODULE_8__books_actions_books_actions_component__["a" /* BooksActionsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__books_data_service__["a" /* BooksDataService */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__books_actions_books_actions_component__["a" /* BooksActionsComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/books-actions/books-actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog .error{color:red;height: 30px}\r\n.modal-dialog input{padding:5px 5px 5px 5px;border:1px solid grey;margin-bottom: 2px;width:50%}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books-actions/books-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">Book actions</h4>\n                   </div>\n                   <div class=\"modal-body\">\n                     <form [formGroup]=\"bookForm\">\n                        <div><input type=\"text\" maxlength=\"25\" [(ngModel)]='mBookName' name=\"fcBookName\" formControlName=\"fcBookName\" placeholder=\"Book name\" required></div>\n                        <div>\n    <p class=\"error\" *ngIf=\"!bookForm.controls['fcBookName'].valid && bookForm.controls['fcBookName'].touched \">Book title is required</p>\n    <p  *ngIf=\"alreadyExists\" class=\"error\">Book title already exists</p>\n  </div>\n\n                        <div><input type=\"text\" maxlength=\"11\" [(ngModel)]='mBookDate' name=\"fcBookDate\" formControlName=\"fcBookDate\" placeholder=\"Book date dd/mm/yyyy\" pattern=\"^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$\" required></div>\n                       \t<div *ngIf=\"!bookForm.controls['fcBookDate'].valid && bookForm.controls['fcBookDate'].touched\">\n\t\t<p *ngIf=\"bookForm.controls['fcBookDate'].errors && bookForm.controls['fcBookDate'].errors.required\" class=\"error\">Book date is required</p>\n\t\t<p *ngIf=\"bookForm.controls['fcBookDate'].errors && bookForm.controls['fcBookDate'].errors.pattern\" class=\"error\">Book date is invalid (dd/mm/yyy)</p>\n\t</div>\n                        <div><input type=\"text\" maxlength=\"25\" [(ngModel)]='mBookAuthor' name=\"fcBookAuthor\" formControlName=\"fcBookAuthor\" placeholder=\"Book author\" required></div>\n        <div>\n    <p class=\"error\" *ngIf=\"!bookForm.controls['fcBookAuthor'].valid && bookForm.controls['fcBookAuthor'].touched \">Book author is required</p>\n  </div>\n                       </form>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Submit</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n                      \n                   </div>\n                  \n                 </div>\n              </div>"

/***/ }),

/***/ "../../../../../src/app/books-actions/books-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksActionsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksActionsComponent = (function (_super) {
    __extends(BooksActionsComponent, _super);
    function BooksActionsComponent(dialogService) {
        var _this = _super.call(this, dialogService) || this;
        _this.alreadyExists = false;
        return _this;
    }
    BooksActionsComponent.prototype.ngOnInit = function () {
        this.bookForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fcBookName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]),
            fcBookDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]),
            fcBookAuthor: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required])
        });
        //edit mode
        if (this.idx != -1) {
            //assign nodel
            this.mBookName = this.booksList[this.idx].title;
            this.mBookDate = this.booksList[this.idx].date;
            this.mBookAuthor = this.booksList[this.idx].author;
        }
    };
    BooksActionsComponent.prototype.confirm = function () {
        var _this = this;
        if (this.bookForm.valid) {
            var bookTitle = this.bookForm.get('fcBookName').value;
            var bookDate = this.bookForm.get('fcBookDate').value;
            var bookAuthor = this.bookForm.get('fcBookAuthor').value;
            //add book
            if (this.idx == -1) {
                var obj = { "title": bookTitle, "date": bookDate, "author": bookAuthor };
                if (this.checkIfTitleExists(bookTitle)) {
                    //title already exist
                    this.alreadyExists = true;
                    setTimeout(function () {
                        _this.alreadyExists = false;
                    }, 2000);
                    return;
                }
                else {
                    this.booksList.push(obj);
                }
            }
            else {
                for (var i = 0; i < this.booksList.length; i++) {
                    if (i == this.idx) {
                        this.booksList[i].title = bookTitle;
                        this.booksList[i].date = bookDate;
                        this.booksList[i].author = bookAuthor;
                    }
                }
            }
            this.result = true;
            this.close();
        }
        else {
            Object.keys(this.bookForm.controls).forEach(function (key) {
                _this.bookForm.get(key).markAsTouched();
            });
            return;
        }
    };
    BooksActionsComponent.prototype.checkIfTitleExists = function (inputBookTitle) {
        for (var i = 0; i < this.booksList.length; i++) {
            var obj = this.booksList[i];
            if (obj.title.toLowerCase() === inputBookTitle.toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    return BooksActionsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
BooksActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books-actions',
        template: __webpack_require__("../../../../../src/app/books-actions/books-actions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books-actions/books-actions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], BooksActionsComponent);

var _a;
//# sourceMappingURL=books-actions.component.js.map

/***/ }),

/***/ "../../../../../src/app/books-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksDataService = (function () {
    function BooksDataService(http) {
        this.http = http;
    }
    BooksDataService.prototype.getBooks = function () {
        var apiURL = "https://api.myjson.com/bins/9oyjp";
        return this.http.get(apiURL)
            .map(function (res) { return res.json(); });
    };
    return BooksDataService;
}());
BooksDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksDataService);

var _a;
//# sourceMappingURL=books-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/books-list/books-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".books-list .section-title{color: #000;font-size: 40px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center;}\r\n.books-list .book-title{font-weight: bold;font-size: 28px}\r\n.books-list .book-details{font-size:22px}\r\n.books-list .actions{font-size:18px}\r\n.books-list .actions .fa-trash-o{margin-left:15px}\r\n.books-list .add-book{margin-left:20px;font-size:16px}\r\n.books-list .del-book-valid{color:#ffffff;margin-left:10px;background:red;padding:3px 3px 3px 3px;border-radius:3px}\r\n.books-list .del-book-valid a{color:#ffffff}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books-list/books-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section-a\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div *ngIf=\"booksList\" class=\"books-list\">\n                    <div class=\"col-xs-12\"><span class=\"section-title\">Books list</span><span class=\"add-book\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n <a href=\"javascript:void(0)\" (click)=\"addBook()\">Add book</a></span></div>\n                    <div class=\"col-md-6\" *ngFor=\"let item of booksList.books; let i = index\" [attr.data-index]=\"i\">\n                        <div class=\"blockquote-box blockquote-info fadeInLeft clearfix\">\n                            <h4 class=\"book-title\">\n                                {{item.title | formatTitle}}\n                            </h4>\n                            <p class=\"book-details\">\n                                {{item.author}}, {{item.date}}\n                        </p>\n                        <div class=\"actions\">\n                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n <a href=\"javascript:void(0)\" (click)=\"editBook(i)\">Edit</a>  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n <a href=\"javascript:void(0)\" (click)=\"preDeleteBook(i)\">Delete</a><span *ngIf=\"show === i\" class=\"del-book-valid\">Are you sure? <a href=\"javascript:void(0)\" (click)=\"deleteBook(i)\">Yes</a> | <a href=\"javascript:void(0)\" (click)=\"cancel(i)\">No</a></span>\n                        </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/books-list/books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_data_service__ = __webpack_require__("../../../../../src/app/books-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_actions_books_actions_component__ = __webpack_require__("../../../../../src/app/books-actions/books-actions.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksListComponent = (function () {
    function BooksListComponent(booksDataService, dialogService) {
        this.booksDataService = booksDataService;
        this.dialogService = dialogService;
        this.show = false;
        this.prevClicked = -1;
    }
    BooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksDataService.getBooks().subscribe(function (data) { return _this.booksList = data; });
    };
    BooksListComponent.prototype.deleteBook = function (idx) {
        for (var i = 0; i < this.booksList.books.length; i++) {
            var obj = this.booksList.books[i];
            if (i == idx) {
                this.booksList.books.splice(i, 1);
                this.show = false;
            }
        }
    };
    BooksListComponent.prototype.cancel = function (index) {
        this.show = false;
    };
    BooksListComponent.prototype.preDeleteBook = function (index) {
        // assign variable to a number to be used in 
        this.show = index;
    };
    BooksListComponent.prototype.editBook = function (idx) {
        this.loadModalWindow(idx);
    };
    BooksListComponent.prototype.addBook = function () {
        this.loadModalWindow(-1);
    };
    BooksListComponent.prototype.loadModalWindow = function (idxVal) {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__books_actions_books_actions_component__["a" /* BooksActionsComponent */], {
            booksList: this.booksList.books, idx: idxVal
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                //done
            }
        });
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books-list',
        template: __webpack_require__("../../../../../src/app/books-list/books-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books-list/books-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_data_service__["a" /* BooksDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_data_service__["a" /* BooksDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], BooksListComponent);

var _a, _b;
//# sourceMappingURL=books-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/format-title.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTitlePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatTitlePipe = (function () {
    function FormatTitlePipe() {
    }
    FormatTitlePipe.prototype.transform = function (text) {
        //clean strings and split to words
        var newText = text.replace(/[^\w\s]/gi, '').split(' ');
        var retText = "";
        var wrd = "";
        for (var i = 0; i < newText.length; i++) {
            for (var w = 0, len = newText[i].length; w < len; w++) {
                //first letter
                if (w == 0) {
                    wrd = newText[i][w].toLocaleUpperCase();
                }
                else {
                    wrd += newText[i][w].toLocaleLowerCase();
                }
            }
            retText += wrd + " ";
        }
        return retText;
    };
    return FormatTitlePipe;
}());
FormatTitlePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'formatTitle' })
], FormatTitlePipe);

//# sourceMappingURL=format-title.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map