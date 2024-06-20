import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddressService } from '../../Services/address/address.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  userId: any;

  addressdata: any = {
    addressId: 0,
    fullName: '',
    mobileNo: '',
    address: '',
    city: '',
    state: '',
    type: ''
  };

  isEdit: boolean = false;
  showForm: boolean = false;
  @Output() order = new EventEmitter<any>();

  constructor(private addressService: AddressService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchAddress();
  }

  fetchAddress(): void {
    this.userId = localStorage.getItem('userId');
    this.addressService.getaddress({ userId: this.userId }).subscribe(result => {
      if (result.data.length > 0) {
        this.addressdata = result.data[0]; 
        this.showForm = true;
      } else {
        this.showForm = false;
      }
    });
  }

  addAddress(): void {
    this.isEdit = true;
    this.showForm = true;
    this.resetForm();
  }

  editAddress(): void {
    this.isEdit = true;
    this.showForm = true;
  }

  saveAddress(): void {
    if (this.addressdata.addressId === 0) {
      this.addressdata.userId = this.userId;
      this.addressService.addAddress(this.addressdata).subscribe(() => {
        this.fetchAddress();
        this.isEdit = false;
      });
    } else {
      this.addressService.updateAddress(this.addressdata).subscribe(() => {
        this.fetchAddress();
        this.isEdit = false;
      });
    }
  }

  saveAndContinue(): void {
    this.saveAddress();
    this.gotoOrders();
  }

  cancel(): void {
    this.isEdit = false;
    this.fetchAddress();
  }

  gotoOrders(): void {
    this.order.emit(true);
  }

  resetForm(): void {
    this.addressdata = {
      addressId: 0,
      fullName: '',
      mobileNo: '',
      address: '',
      city: '',
      state: '',
      type: ''
    };
  }
}
