import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { MatButtonModule } from "@angular/material/button";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlingInterceptor } from "./core/error-handling.interceptor";


@NgModule({
    declarations:[AppComponent],
    imports:[RouterOutlet,HeroComponent,MatButtonModule,HttpClientModule,BrowserModule,BrowserAnimationsModule],
    bootstrap:[AppComponent],
    providers:[
        {
          provide:HTTP_INTERCEPTORS,
          useClass:ErrorHandlingInterceptor,
          multi:true
        }
      ],
})

export class AppModule{}