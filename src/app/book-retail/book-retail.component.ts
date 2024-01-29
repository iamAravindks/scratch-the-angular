import { Component, OnInit } from '@angular/core';
import { BookRetailService } from './book-retail.service';
import { CommonModule } from '@angular/common';
import { IBook } from './model/book';
import { FormControl } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [CommonModule,SharedModule],

  providers:[BookRetailService],
  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.scss'
})
export class BookRetailComponent implements OnInit{

    public bookDetailsList :IBook[] = [];
    public selectedBook :{ id: number; summary: string; }  = {id: -1, summary: ''}
    searchControl = new FormControl();
  constructor(private readonly bookHelperService : BookRetailService){

  }

  ngOnInit(): void {
    this.bookDetailsList = this.bookHelperService.getBookRetailList();
  }

  public showSummary(id:number){
    this.selectedBook = {
      id,
      summary : this.bookHelperService.getBookDetailSummary(id)
    }
  }

}
