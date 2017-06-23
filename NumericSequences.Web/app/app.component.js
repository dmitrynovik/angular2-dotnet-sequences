"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = AppComponent_1 = (function () {
    function AppComponent() {
        this.formErrors = {};
        this.model = 10;
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (this.limit) {
            this.limit.control.setValidators(AppComponent_1.positiveIntValidator);
        }
    };
    return AppComponent;
}());
AppComponent.positiveIntValidator = function (control) {
    if (Number(control.value) <= 0) {
        return { nonPositive: true };
    }
    else if (!Number.isInteger(control.value)) {
        return { nonInteger: true };
    }
    else {
        return null;
    }
};
__decorate([
    core_1.ViewChild('limit'),
    __metadata("design:type", forms_1.NgModel)
], AppComponent.prototype, "limit", void 0);
AppComponent = AppComponent_1 = __decorate([
    core_1.Component({
        selector: "user-app",
        templateUrl: "./app/app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppComponent_1;
//# sourceMappingURL=app.component.js.map