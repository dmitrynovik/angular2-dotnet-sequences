import { Component, Input } from "@angular/core";
import { Sequence } from "./sequence";

@Component({
    selector: "sequence",
    templateUrl: "./app/sequence.component.html"
})
export class SequenceComponent {
    @Input() sequence: Sequence;
}