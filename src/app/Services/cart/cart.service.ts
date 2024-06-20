import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  token :any;

  private cartList = new BehaviorSubject<any>([]);
  currCartList = this.cartList.asObservable();
  
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
  }
  
  updateCartList(newValue: any[]) {
    this.cartList.next(newValue);
  }

  getCartsList(reqData:any):Observable<any>{
    const userId = reqData.userId;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7054/api/Cart/ViewCart_ByUserId?userId=${userId}`,true,header);
  }

  addToCart(reqData:any):Observable<any>{
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:7054/api/Cart/AddBook_ToCart`,reqData,true,header);
  }

  updateCartQuantity(cartId: number, quantity: number): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.putService(`https://localhost:7054/api/Cart/UpdateCart?cartId=${cartId}&quantity=${quantity}`, {}, true, header);
  }

  removeFromCart(cartId: number): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.deleteService(`https://localhost:7054/api/Cart/RemoveBook_FromCart?cartId=${cartId}`, true, header);
  }
  
}
