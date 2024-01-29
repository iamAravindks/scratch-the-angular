import { NgModule } from "@angular/core";
import { OnlyNumberDirective } from "../book-retail/only-number.directive";

@NgModule({
 declarations: [OnlyNumberDirective],
 exports: [OnlyNumberDirective]
})
export class SharedModule { }
