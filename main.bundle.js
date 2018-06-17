webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<nav>\r\n    <div class=\"nav-wrapper light-blue\">\r\n        <a href=\"/\" class=\"brand-logo center  \" >\r\n            {{today | date:'fullDate'}}\r\n        </a>\r\n    </div>\r\n</nav>\r\n\r\n\r\n    \r\n    <p-tabView>\r\n        <p-tabPanel header=\"Home\">\r\n            <app-home></app-home>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Products\">\r\n            <app-Products></app-Products>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Tabla\">\r\n            <app-tabla></app-tabla>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Add products\">\r\n             <app-add-Product></app-add-Product>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Edit products\">\r\n            <app-lista></app-lista>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Chat\">\r\n            <app-chat></app-chat>\r\n        </p-tabPanel>\r\n    </p-tabView>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'app';
        this.today = Date.now();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Products_Products_component__ = __webpack_require__("../../../../../src/app/components/Products/Products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_Product_add_Product_component__ = __webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_datatable__ = __webpack_require__("../../../../primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_carousel__ = __webpack_require__("../../../../primeng/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_datalist__ = __webpack_require__("../../../../primeng/datalist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_datalist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_datalist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_dataview__ = __webpack_require__("../../../../primeng/dataview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_dataview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_dataview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__ = __webpack_require__("../../../../primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__ = __webpack_require__("../../../../primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_picklist__ = __webpack_require__("../../../../primeng/picklist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_picklist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_picklist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_orderlist__ = __webpack_require__("../../../../primeng/orderlist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_orderlist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_orderlist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_menubar__ = __webpack_require__("../../../../primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_lista_lista_component__ = __webpack_require__("../../../../../src/app/components/lista/lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_dialog__ = __webpack_require__("../../../../primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tabla_tabla_component__ = __webpack_require__("../../../../../src/app/components/tabla/tabla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_Products_Products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_add_Product_add_Product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_lista_lista_component__["a" /* ListaComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_tabla_tabla_component__["a" /* TablaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_carousel__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_datalist__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_dataview__["DataViewModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_picklist__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_orderlist__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__["CalendarModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_Product_service__["a" /* ProductService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".derecha{\r\n    \r\n    padding-top: 40px;\r\n    padding-right: 30px;\r\n    padding-bottom: 30px;\r\n    padding-left: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Products?.length > 0;else noProducts\">\r\n   \r\n    <p-dataList [value]=\"Products\" [paginator]=\"true\" [rows]=\"1\" paginatorPosition=\"both\"  >\r\n\r\n        <p-header>\r\n            List of Products\r\n        </p-header>\r\n        <ul *ngFor=\"let Product of Products\" class=\"collection\">\r\n        <ng-template let-product pTemplate=\"item\">\r\n            <div class=\"ui-g ui-fluid product-item\">\r\n                <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">  \r\n                <div class=\"ui-g-12 ui-md-9 product-details\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Name: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.name}}</div>\r\n                        \r\n                        <div class=\"ui-g-2 ui-sm-6\">Place: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.place}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Contact name: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.cname}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Conatct phone: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.cphone}}</div>\r\n \r\n                        <div class=\"ui-g-2 ui-sm-6\">Conatct want: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.need}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Published: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.date}}</div>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"derecha\">\r\n                    <i (click)=\"deleteProduct($event, Product)\" class=\"fa fa-trash fa-2x\"  ></i>\r\n                    </div>\r\n            </div>\r\n        </ng-template>\r\n      </ul>  \r\n    </p-dataList>\r\n  </div>\r\n  \r\n  \r\n  <ng-template #noProducts>\r\n      <h5>There is not Products yet.</h5>\r\n    </ng-template>\r\n\r\n   <!--\r\n      <p>Today is {{today | date}}</p>\r\n      <p>Or if you prefer, {{today | date:'fullDate'}}</p>\r\n      <p>The time is {{today | date:'jmZ'}}</p>\r\n      <p>Finally the date and time is {{today | date:'short'}}</p>\r\n   \r\n   \r\n  <ul *ngFor=\"let Product of Products\" class=\"collection\">\r\n    <li class=\"collection-item\" (dblclick)=\"deleteProduct($event, Product)\">\r\n      <strong>{{ Product.name }}</strong> : {{ Product.place }} \r\n      <a href=\"#\" class=\"secondary-content\">\r\n        <i (click)=\"deleteProduct($event, Product)\" class=\"fa fa-trash\"></i>\r\n        <i (click)=\"editProduct($event, Product)\" class=\"fa fa-pencil\"></i>\r\n      </a>\r\n      <div *ngIf=\"editState && ProductToEdit.id === Product.id\">\r\n        <form (ngSubmit)=\"updateProduct(Product)\">\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input \r\n                type=\"text\" name=\"name\"\r\n                placeholder=\"Edit name\" [(ngModel)]=\"Product.name\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input \r\n                  type=\"text\" name=\"place\"\r\n                  placeholder=\"Edit place\" [(ngModel)]=\"Product.place\">\r\n            </div>\r\n            <input type=\"submit\" class=\"btn\" value=\"Update Product\">\r\n            <button class=\"btn red\" (click)=\"deleteProduct($event, Product)\">Delete Product</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n\r\n  <p-orderList [value]=\"Products\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"Products\" \r\n  filter=\"filter\" filterBy=\"name\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\" dragdropScope=\"Products\">\r\n  <ng-template let-product pTemplate=\"item\">\r\n      <div class=\"ui-helper-clearfix\" (dblclick)=\"deleteProduct($event, Product)\">\r\n          <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">\r\n          <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{ product.name }} {{ product.place }}  </div>\r\n      </div>\r\n  </ng-template>\r\n</p-orderList>-->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(ProductService) {
        this.ProductService = ProductService;
        this.editState = false;
        this.today = Date.now();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
        });
    };
    ProductsComponent.prototype.deleteProduct = function (event, Product) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.ProductService.deleteProduct(Product);
            location.reload();
        }
        return;
    };
    ProductsComponent.prototype.editProduct = function (event, Product) {
        this.editState = !this.editState;
        this.ProductToEdit = Product;
    };
    ProductsComponent.prototype.updateProduct = function (Product) {
        this.ProductService.updateProduct(Product);
        this.ProductToEdit = null;
        this.editState = false;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-Products',
            template: __webpack_require__("../../../../../src/app/components/Products/Products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/Products/Products.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-content\">\r\n    <span class=\"card-name\">Add Product</span>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col-s6\">\r\n          <input type=\"text\" placeholder=\"Add name\" [(ngModel)]=\"Product.name\" name=\"name\" required >\r\n          <label>required</label>\r\n        </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"Add place\" [(ngModel)]=\"Product.place\" name=\"place\" required >\r\n            <label>required</label>\r\n        </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"Add Contact name\" [(ngModel)]=\"Product.cname\" name=\"contactName\" required >\r\n            <label>required</label>\r\n         </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"Add Phone\" [(ngModel)]=\"Product.cphone\" name=\"phone\" required >\r\n            <label>required</label>\r\n        </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"What do you want?\" [(ngModel)]=\"Product.need\" name=\"need\" required >\r\n            <label>required</label>\r\n        </div>\r\n        <div >\r\n            <input type=\"date\" placeholder=\"Published\" [(ngModel)]=\"Product.date\" format=\"dd/MM/yyyy\" name=\"published\" min=\"today\" required >\r\n            <label>Publish day required</label>\r\n        </div>\r\n\r\n      \r\n      </div>\r\n        <input type=\"submit\"  class=\"btn light-blue\">\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductComponent = (function () {
    function AddProductComponent(ProductService) {
        this.ProductService = ProductService;
        this.Product = {
            name: '',
            place: '',
            cname: '',
            cphone: '',
            need: '',
            date: '',
        };
        this.today = Date.now();
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onSubmit = function () {
        if (this.Product.name != ''
            && this.Product.place != ''
            && this.Product.cname != ''
            && this.Product.cphone != ''
            && this.Product.need != ''
            && this.Product.date != '') {
            this.ProductService.addProduct(this.Product);
            this.Product.name = '';
            this.Product.place = '';
            this.Product.cname = '';
            this.Product.cphone = '';
            this.Product.need = '';
            this.Product.date = '';
        }
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-Product',
            template: __webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"bg\"><img src=\"..\\..\\..\\assets\\send.jpg\"  > </div>\n  \n  <p>The Chat function is cooming soon </p>\n\n    Email <a href=\"mailto:copycolormorde@gmail.com\">copycolormorde@gmail.com</a>\n  \n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>Israel Mezan</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\r\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\r\n.fa-anchor,.fa-coffee {font-size:200px}\r\n</style>\r\n<body>\r\n\r\n\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-light-blue w3-center \" style=\"padding:128px 16px\" >\r\n  <h1 class=\"w3-margin w3-jumbo\">Bartering</h1>\r\n  <p class=\"w3-xlarge\"></p>\r\n</header>\r\n\r\n<!-- First Grid -->\r\n<div class=\"w3-row-padding w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-twothird\">\r\n      <h1>History of barter</h1>\r\n      <p class=\"w3-text-grey\">The history of bartering dates all the way back to 6000 BC. Introduced by Mesopotamia tribes, bartering was adopted by Phoenicians. Phoenicians bartered goods to those located in various other cities across oceans. Babylonian's also developed an improved bartering system. Goods were exchanged for food, tea, weapons, and spices. At times, human skulls were used as well. Salt was another popular item exchanged. Salt was so valuable that Roman soldiers' salaries were paid with it. In the Middle Ages, Europeans traveled around the globe to barter crafts and furs in exchange for silks and perfumes. Colonial Americans exchanged musket balls, deer skins, and wheat. When money was invented, bartering did not end, it become more organized.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"w3-third w3-center\">\r\n        <img src=\"assets/barter2.jpg \" >   \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Second Grid -->\r\n<div class=\"w3-row-padding w3-light-grey w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-third w3-center\">\r\n        <img src=\"assets/barter3.jpg \" width=\"50%\" height=\"50%\" >  \r\n    </div>\r\n\r\n    <div class=\"w3-twothird\">\r\n      <h1>Why barter?</h1>\r\n      <h5 class=\"w3-padding-32\"></h5>\r\n\r\n      <p class=\"w3-text-grey\">You’re not spending money.<br><br>\r\n          When you barter, you don’t have to use any of your actual profits as pay. Exchange any excess products or time you may have for other goods and services. You are going to need your cash when the business is having a lull, something that happens to every business, so save the pay. Exchange your goods and services for other goods and services; once you begin working with the trading system, you’ll never have to wonder why barter is a good idea.<br><br>\r\n          There is flexibility in bartering<br><br>\r\n          Related products can be traded such as portable tablets in exchange for laptops. Or, items that are completely different can be traded such as lawn mowers for televisions. Homes can now be exchanged when people are traveling, which can save both parties money. For instance, if your parents have friends in another state and they need somewhere to stay while on a family vacation, their friends may trade their home for a week or so in exchange for your parents allowing them to use your home.<br><br>\r\n          Exchange service for a product<br><br>\r\n          If your friend has a skateboard that you want and their bicycle needs work, if you are good at fixing things, you can offer to fix their bike in exchange for the skateboard. With bartering two parties can get something they want or need from each other without having to spend any money.\r\n\r\n         </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"w3-container w3-black w3-center w3-opacity w3-padding-64\">\r\n    <h1 class=\"w3-margin w3-xlarge\">Bartering its better!</h1>\r\n</div>\r\n\r\n\r\n\r\n<script>\r\n// Used to toggle the menu on small screens when clicking on the menu button\r\nfunction myFunction() {\r\n    var x = document.getElementById(\"navDemo\");\r\n    if (x.className.indexOf(\"w3-show\") == -1) {\r\n        x.className += \" w3-show\";\r\n    } else { \r\n        x.className = x.className.replace(\" w3-show\", \"\");\r\n    }\r\n}\r\n</script>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <div class=\"bg\"><img src=\"assets\\send.jpg\"  > </div>\r\n  \r\n  <p>The edit and delete function is cooming soon <br>\r\n    please send me your request and i will love to do it for you</p>\r\n\r\n    Email <a href=\"mailto:copycolormorde@gmail.com\">copycolormorde@gmail.com</a>\r\n  \r\n  </body>\r\n\r\n \r\n<!--\r\n  <p-orderList [value]=\"Products\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"Products\" \r\n  filter=\"filter\" filterBy=\"name\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\" dragdropScope=\"Products\">\r\n  <ng-template let-product pTemplate=\"item\">\r\n      <div class=\"ui-helper-clearfix\" (dblclick)=\"deleteProduct($event, Product)\">\r\n          <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">\r\n          <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{ product.name }} {{ product.place }}  </div>\r\n      </div>\r\n  </ng-template>\r\n</p-orderList>-->"

/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaComponent = (function () {
    function ListaComponent(ProductService) {
        this.ProductService = ProductService;
        this.editState = false;
        this.display = false;
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
        });
    };
    ListaComponent.prototype.deleteProduct = function (event, Product) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.ProductService.deleteProduct(Product);
            location.reload();
        }
        return;
    };
    ListaComponent.prototype.editProduct = function (event, Product) {
        this.editState = !this.editState;
        this.ProductToEdit = Product;
    };
    ListaComponent.prototype.updateProduct = function (Product) {
        this.ProductService.updateProduct(Product);
        this.ProductToEdit = null;
        this.editState = false;
    };
    ListaComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__("../../../../../src/app/components/lista/lista.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lista/lista.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n  <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search for you\">\r\n</div>\r\n\r\n<p-dataTable [value]=\"Products\"  [rows]=\"5\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt [sortField]=\"sortF\" >\r\n  <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"></p-column> \r\n  <p-column field=\"place\" header=\"Place\"[sortable]=\"true\"></p-column> \r\n  <p-column field=\"cname\" header=\"Contact name\"[sortable]=\"true\"></p-column> \r\n  <p-column field=\"cphone\" header=\"Contact phone\"[sortable]=\"true\"></p-column> \r\n  <p-column field=\"need\" header=\"Contact want\"[sortable]=\"true\"></p-column> \r\n  <p-column field=\"date\" header=\"Published\"  [sortable]=\"true\"></p-column> \r\n</p-dataTable>\r\n\r\n<p-dialog header=\"Add product\" [(visible)]=\"display\">\r\n  <app-add-Product></app-add-Product>\r\n</p-dialog>\r\n\r\n<button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Add product\" ></button>\r\n<!--\r\n<p-dialog header=\"Edit or delete product\" [(visible)]=\"display2\">\r\n  <app-lista></app-lista>\r\n</p-dialog>\r\n\r\n<button type=\"text\" (click)=\"showDialog2()\" pButton icon=\"fa-external-link-square\" label=\"Edit or delete product\" ></button>-->"

/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablaComponent = (function () {
    function TablaComponent(ProductService) {
        this.ProductService = ProductService;
        this.editState = false;
        this.display = false;
        this.display2 = false;
    }
    TablaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
        });
    };
    TablaComponent.prototype.showDialog = function () {
        this.display = true;
    };
    TablaComponent.prototype.showDialog2 = function () {
        this.display2 = true;
    };
    TablaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabla',
            template: __webpack_require__("../../../../../src/app/components/tabla/tabla.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tabla/tabla.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], TablaComponent);
    return TablaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/Product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(afs) {
        this.afs = afs;
        this.ProductsCollection = this.afs.collection('Products');
        // this.Products = this.afs.collection('Products').valueChanges();
        this.Products = this.ProductsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    ProductService.prototype.getProducts = function () {
        return this.Products;
    };
    ProductService.prototype.addProduct = function (Product) {
        this.ProductsCollection.add(Product);
    };
    ProductService.prototype.deleteProduct = function (Product) {
        this.ProductDoc = this.afs.doc("Products/" + Product.id);
        this.ProductDoc.delete();
    };
    ProductService.prototype.updateProduct = function (Product) {
        this.ProductDoc = this.afs.doc("Products/" + Product.id);
        this.ProductDoc.update(Product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDC7QFPEXVKQiFQWKDoAddC-UxZ-A0EQy0",
        authDomain: "copycolor-1729c.firebaseapp.com",
        databaseURL: "https://copycolor-1729c.firebaseio.com",
        projectId: "copycolor-1729c",
        storageBucket: "copycolor-1729c.appspot.com",
        messagingSenderId: "891936853879"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map