import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpService: HttpService) { }

  getBooks(): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this.httpService.getService('https://localhost:7054/api/Book/GetAllBooks', true, header);
  }
}
