import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector:"user-app",
    templateUrl: "./app/app.component.html"
})

export class AppComponent {
    private _model: number = 10;

    get model(): number {
        return this._model;
    }

    set model(value: number) {
        this._model = value;
    }
}