import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  userId: any;
  cartItems: any[] = [];
  count:any=1

  useraddress:boolean=false
  ordersummary:boolean=false
  toggleplaceorder:boolean=true

  cart:any={
    cartId:'',
    title:'',
    author:'',
    totalPrice:'',
    totalOriginalPrice:'',
    image:'',
    quantity:''
  }

  constructor(private cartService: CartService,
    public dialog:MatDialog,
    public router:Router) {}

  ngOnInit(): void {
    this.loadCart();
  }
  
  loadCart(): void {
    let reqData = {
      userId:localStorage.getItem('userId'),
    };
    this.cartService.getCartsList(reqData).subscribe(
      response => {
        this.cartItems = response.data;
    });
  }
  
  increment(cartItem: any) {
    this.updateQuantity(cartItem.cartId, 1);
  }

  decrement(cartItem: any) {
    if (cartItem.quantity > 1) {
      this.updateQuantity(cartItem.cartId, -1);
    }
  }
  
  updateQuantity(cartId: number, quantityChange: number) {
    this.cartService.updateCartQuantity(cartId, quantityChange).subscribe(
      response => {
        console.log('Cart quantity updated', response);
        this.loadCart();
    });
  }

  updateCartList(): void {
    const userId = localStorage.getItem('userId');
      this.cartService.getCartsList({ userId: userId }).subscribe(cartItems => {
        this.cartService.updateCartList(cartItems.data);
      });
  }
  
  removeFromCart(cartId: number) {
    this.cartService.removeFromCart(cartId).subscribe(
      response => {
        console.log('Book removed from cart', response);
        this.loadCart();
        this.updateCartList();
    });
  }

  handleevent($event:any){
    this.ordersummary=$event
  }
  opendialog() {
    if (localStorage.getItem('token')) {
      this.useraddress = true;
    } else {
      const dialogRef = this.dialog.open(LoginSignupComponent, { width: '740px', height: '475px' });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }

}
