import { Component} from '@angular/core';
import {  SnackBarService } from './core/snackbar.service';
import { ApiService } from './core/api.service';
import { IProduct } from './core/product.model';
import { snackbarType } from './core/core.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'http-first';
  constructor(private snackbarService: SnackBarService,private apiService:ApiService) { }

  showMessage(message:string,type:snackbarType) {
    this.snackbarService.openSnackBar(message,type,Infinity,"Dismiss");
    
  }


  handleApiCall(queryUrlPath:string) {
this.apiService.get<IProduct[]>(queryUrlPath).subscribe(
      products => {
        console.log(products);
        this.showMessage('Products loaded successfully!', "sucess");
      },
    error => {
      console.error('An error occurred:', error);
      this.showMessage(error, "danger");
      console.log(error);
    }
    );

  }
}


