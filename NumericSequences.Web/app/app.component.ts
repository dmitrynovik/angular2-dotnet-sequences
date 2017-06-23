import { Component, AfterViewChecked, ViewChild } from "@angular/core";
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
    selector:"user-app",
    templateUrl: "./app/app.component.html"
})

export class AppComponent implements AfterViewChecked {

    private formErrors = {};

    private model = 10;
    @ViewChild('limit') limit: NgModel;

    static positiveIntValidator = (control: AbstractControl): { [key: string]: any } => {
        if (Number(control.value) <= 0) {
            return { nonPositive: true };
        }
        else if (!Number.isInteger(control.value)) {
            return { nonInteger: true };
        }
        else {
            return null;
        }
    }

    ngAfterViewChecked() {
        if (this.limit) {
            this.limit.control.setValidators(AppComponent.positiveIntValidator);
        }
    }    
}