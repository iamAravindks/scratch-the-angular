import { Injectable } from '@angular/core';
import { ITab } from './wizard.model';

@Injectable()
export class WizardStepperService {

  private menu : Array<ITab> = [
    {
      id:1,
      visited:true,
      disabled:false
    },
    {
      id:2,
      visited:false,
      disabled:true
    },
    {
      id:3,
      visited:false,
      disabled:true
    },
    {
      id:4,
      visited:false,
      disabled:true
    },
  ]
  constructor() { }

  getTabs(){
    return this.menu
  }


  public setTabState(id:number,state:{visited?:boolean,disabled?:boolean}){
    this.menu.forEach(tab=>{
      if(tab.id===id){
        if(state.disabled!==undefined || state.disabled!==null){
          tab.disabled = state.disabled !== null && state.disabled !== undefined ? state.disabled : false;
        }
        if(state.visited!==undefined || state.disabled!==null){
          tab.visited = state.visited !== null && state.visited !== undefined ? state.visited : false;
        }
      }
    })
}



}
