import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getaddress(reqData: any) {
    const userId = reqData.userId;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7054/api/Address/GetAddress_ByUserId?userId=${userId}`, true, header);
  }

  addAddress(address: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.postService(`https://localhost:7054/api/Address/AddAddress`, address, true, header);
  }

  updateAddress(address: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.putService(`https://localhost:7054/api/Address/UpdateAddress`, address, true, header);
  }
}
