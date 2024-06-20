import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token :any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
  }

  getFeedbacks(): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this.httpService.getService('https://localhost:7054/api/Feedback/GetAllFeedbacks', true, header);
  }

  addFeedback(feedback: any): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    };
    return this.httpService.postService('https://localhost:7054/api/Feedback/AddFeedback', feedback, true, header);
  }

}
