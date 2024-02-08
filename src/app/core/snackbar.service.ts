import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MatSnackBarConfig } from '@angular/material/snack-bar';
import { snackbarType } from './core.model';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar : MatSnackBar) { }

  private SNACK_BAR_CSS={
    danger:"alert--danger",
    sucess:"alert--sucess",
    warn:"alert--warn",
    info:"alert--info",

  }

  openSnackBar(message:string,type:snackbarType,duration?:number,action?:string):MatSnackBarRef<any>{

    const config = new MatSnackBarConfig();
    config.panelClass  = this.SNACK_BAR_CSS[type]

    if(duration){
      config.duration = duration
    }
    return this.snackBar.open(message,action,{
      
  duration: 3000,
  panelClass: ['alert--danger']
    })
  }
}
