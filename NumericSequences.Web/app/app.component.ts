import { Component, AfterViewChecked, ViewChild } from "@angular/core";
import { AbstractControl, NgModel } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector:"user-app",
    templateUrl: "./app/app.component.html"
})

export class AppComponent implements AfterViewChecked {

    constructor(private http: Http) {  }

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
        if (this.limit && this.limit.control) {
            this.limit.control.setValidators(AppComponent.positiveIntValidator);
        } else {
            console.error("Could not bind limit");
        }
    }

    onSubmit() {
        const rx = this.http.get("http://localhost:24461/api/sequence/getall?limit=" + this.model)
            .map((response: Response) => response.json());

        const data = rx.subscribe();
        console.log(data);
    }
}