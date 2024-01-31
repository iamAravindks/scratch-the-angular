import { NgModule } from "@angular/core";
import { WizardComponent } from "./wizard.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { Tab } from "./Tabs/tab.component";

@NgModule({
    declarations:[WizardComponent,Tab],
    imports:[BrowserModule,CommonModule],
    exports: [WizardComponent]
})

export class WizardModule{}