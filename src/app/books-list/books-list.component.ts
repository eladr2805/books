import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';
import {Observable} from "RxJS/Rx";
import { DialogService } from "ng2-bootstrap-modal";
import { BooksActionsComponent } from '../books-actions/books-actions.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  booksList:any;
  idx:number;
  public show:boolean = false;
  public prevClicked:number = -1;
  constructor(private booksDataService:BooksDataService,private dialogService:DialogService) { }

  ngOnInit() {
      this.booksDataService.getBooks().subscribe(data => this.booksList = data);
  }

  deleteBook(idx){
      for(var i = 0; i < this.booksList.books.length; i++) {
        var obj = this.booksList.books[i];
        if(i == idx){
          this.booksList.books.splice(i, 1);
          this.show = false; 
        }
      }
  }

  cancel(index){
        this.show = false; 
  }

  preDeleteBook(index){
      // assign variable to a number to be used in 
      this.show = index; 
  }

  editBook(idx){
      this.loadModalWindow(idx);
  }

  addBook(){
    this.loadModalWindow(-1);
  }

  loadModalWindow(idxVal){
    let disposable = this.dialogService.addDialog(BooksActionsComponent, {
                booksList:this.booksList.books,idx:idxVal})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        //done
                    }
                });
  }
}
