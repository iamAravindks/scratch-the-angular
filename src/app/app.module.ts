import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { WizardModule } from "./wizard/wizard.module";


@NgModule({
declarations:[AppComponent],
imports:[CommonModule,BrowserModule,WizardModule],
bootstrap :[AppComponent]
})


export class AppModule{}