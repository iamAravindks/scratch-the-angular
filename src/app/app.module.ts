import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BookRetailComponent } from "./book-retail/book-retail.component";


@NgModule({
declarations:[AppComponent],
imports:[CommonModule,BrowserModule,BookRetailComponent],
bootstrap :[AppComponent]
})


export class AppModule{}