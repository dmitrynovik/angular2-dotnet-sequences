import { Component, AfterViewChecked, ViewChild } from "@angular/core";
import { AbstractControl, NgModel } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Sequence } from './sequence';

@Component({
    selector:"app",
    templateUrl: "./app/app.component.html"
})

export class AppComponent implements AfterViewChecked {

    constructor(private http: Http) {  }

    private model = 10;
    private sequences: Sequence[] = [];
    private invalid: boolean;

    @ViewChild('limit') limit: NgModel;

    positiveIntValidator = (control: AbstractControl): { [key: string]: any } => {
        if (Number(control.value) <= 0) {
            this.invalid = true;
            return { nonPositive: true };
        }
        else if (!Number.isInteger(control.value)) {
            this.invalid = true;
            return { nonInteger: true };
        }
        else if (control.value > 1000) {
            this.invalid = true;
            return { tooLarge: true };
        }
        else {
            this.invalid = false;
            return null;
        }
    }

    ngAfterViewChecked() {
        if (this.limit && this.limit.control) {
            this.limit.control.setValidators(this.positiveIntValidator);
        } else {
            console.error("Could not bind limit");
        }
    }

    onSubmit() {

        const url = "http://localhost:24461/api/sequence/getall?limit=" + this.model;

        this.http.get(url)
            .map((response: Response) => response.json())
            .subscribe(
                data => this.sequences = data.map((x: any) => ({ name: x.Name, description: x.Description, values: x.Values })),
                err => console.log(err)
            );
    }
}