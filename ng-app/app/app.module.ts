import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Sequence } from './sequence';
import { SequenceComponent } from './sequence.component';

 @NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule],
    declarations: [AppComponent, SequenceComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class AppModule { }