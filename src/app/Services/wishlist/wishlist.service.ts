import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token: any;

  private wishlist = new BehaviorSubject<any>([]);
  currWishlist = this.wishlist.asObservable();
  
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  updateWishlist(newValue: any[]) {
    this.wishlist.next(newValue);
  }

  getWishlist(reqData:any): Observable<any> {
    const userId = reqData.userId;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7054/api/Wishlist/ViewWishlist_ByUserId?userId=${userId}`, true, header);
  }

  addToWishlist(reqData: any): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.postService(`https://localhost:7054/api/Wishlist/AddBook_ToWishlist`, reqData, true, header);
  }

  removeFromWishlist(wishlistId: number): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.deleteService(`https://localhost:7054/api/Wishlist/RemoveBook_FromWishlist?wishlistId=${wishlistId}`, true, header);
  }
  
}
