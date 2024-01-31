import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";

@NgModule({
    declarations:[AppComponent],
    imports:[CommonModule,BrowserModule,FormsModule,FormComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}