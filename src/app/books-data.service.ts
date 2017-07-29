import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable() export class BooksDataService {
    constructor(private http: Http) { }

  getBooks(){
    let apiURL = "https://api.myjson.com/bins/9oyjp";
    return this.http.get(apiURL) 
    .map((res:Response) => res.json());
  }
}
