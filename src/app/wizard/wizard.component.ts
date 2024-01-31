import { Component, OnInit } from '@angular/core';
import { WizardStepperService } from './wizard-stepper.service';
import { ITab } from './wizard.model';



@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss',
  providers:[WizardStepperService]
})
export class WizardComponent implements OnInit{

  public menu !:Array<ITab>;
  public currentTabId : number = 1;
  constructor(private readonly wizardHelper:WizardStepperService){

  }

  ngOnInit(): void {
    this.menu = this.wizardHelper.getTabs();
    this.currentTabId = 1;
  }

  public setCurrentTab(tabId: number) {
    // Find the index of the current tab

    const currentIndex = this.menu.findIndex(t => t.id === tabId);
     
    // Check if the tab is the next one or a previously visited one
    if ( this.menu[currentIndex].visited===true ) {
      console.log(tabId === this.currentTabId + 1);
       this.currentTabId = tabId;
    }
   }


   public next(tabId:number){
    if(tabId === this.currentTabId+1){
      this.wizardHelper.setTabState(tabId,{visited:true,disabled:false})
      this.setCurrentTab(tabId)
    }
   }


   public isDisabled(tabId:number){
    // if(this.currentTabId+1 ===tabId) return false;
    return this.menu.find(item=>item.id===tabId)?.disabled
   }
   
   public isVisited(tabId:number){
    return this.menu.find(item=>item.id===tabId)?.visited

   }

  public previous() {
    if (this.currentTabId > 1) {
      this.currentTabId -= 1;
    }
  }
  
  
   
  
}
