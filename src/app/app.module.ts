import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDataService } from './books-data.service';
import { FormatTitlePipe } from './format-title.pipe';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BooksActionsComponent } from './books-actions/books-actions.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    FormatTitlePipe,
    BooksActionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BootstrapModalModule,
    ReactiveFormsModule
  ],
  providers: [BooksDataService],
  entryComponents: [
        BooksActionsComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
