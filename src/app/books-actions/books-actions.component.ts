import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormControl, FormGroup,Validators } from '@angular/forms';

export interface ConfirmModel {
  booksList:any;
  idx:number;
}

@Component({
  selector: 'app-books-actions',
  templateUrl: './books-actions.component.html',
  styleUrls: ['./books-actions.component.css']
})
export class BooksActionsComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  booksList:any;
  idx:number;
  alreadyExists:boolean=false;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  bookForm:FormGroup;
  mBookName:string;
  mBookDate:string;
  mBookAuthor:string;

ngOnInit() {
    this.bookForm = new FormGroup({
       fcBookName: new FormControl('', [Validators.required]),
       fcBookDate: new FormControl('', [Validators.required]),
       fcBookAuthor: new FormControl('', [Validators.required])
    });

    //edit mode
    if(this.idx != -1){
        //assign nodel
        this.mBookName = this.booksList[this.idx].title;
        this.mBookDate = this.booksList[this.idx].date;
        this.mBookAuthor= this.booksList[this.idx].author;
    }
}

confirm() {
    if(this.bookForm.valid){
      let bookTitle = this.bookForm.get('fcBookName').value;
      let bookDate = this.bookForm.get('fcBookDate').value;
      let bookAuthor = this.bookForm.get('fcBookAuthor').value;
      //add book
      if(this.idx == -1){
          let obj = {"title":bookTitle,"date":bookDate,"author":bookAuthor}
          if(this.checkIfTitleExists(bookTitle)){
            //title already exist
            this.alreadyExists = true;
            setTimeout(() => {
            this.alreadyExists = false;
            }, 2000);
            return;
          }
          else{
            this.booksList.push(obj);
          }
          
      }
      else//edit
      {
          for(var i = 0; i < this.booksList.length; i++) {
            if(i == this.idx){
              this.booksList[i].title = bookTitle;
              this.booksList[i].date = bookDate;
              this.booksList[i].author = bookAuthor;
            }
          }
      }

      this.result = true;
      this.close();
    }
    else
      {
        Object.keys(this.bookForm.controls).forEach(key => {
        this.bookForm.get(key).markAsTouched();
      });
      return;
      }
    
  }

  checkIfTitleExists(inputBookTitle){
    for(var i = 0; i < this.booksList.length; i++) {
        var obj = this.booksList[i];
        if(obj.title.toLowerCase() === inputBookTitle.toLowerCase()){
          return true;
        }
    }
    return false
  }
}

