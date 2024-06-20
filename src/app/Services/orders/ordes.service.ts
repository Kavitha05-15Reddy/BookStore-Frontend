import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdesService {
  token: any;

  private orders = new BehaviorSubject<any>([]);
  currOrdes = this.orders.asObservable();
  
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  updateOrders(newValue: any[]) {
    this.orders.next(newValue);
  }

  getOrders(reqData:any): Observable<any> {
    const userId = reqData.userId;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7054/api/Order/GetAllOrders_ByUserId?userId=${userId}`, true, header);
  }

  placeOrder(cartId: number): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    
    return this.httpService.postService(`https://localhost:7054/api/Order/PlaceOrder?cartId=${cartId}`, null, true, header);
  }

  cancelOrder(orderId: number): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    
    return this.httpService.deleteService(`https://localhost:7054/api/Order/DeleteOrder?orderId=${orderId}`, true, header);
  }
  
}
