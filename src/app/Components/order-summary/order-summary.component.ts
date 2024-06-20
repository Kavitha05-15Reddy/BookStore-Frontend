import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdesService } from '../../Services/orders/ordes.service';
import { CartItem } from '../../Model/bookstore.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit{
  userId: any;
  cartItems: CartItem[] = []; 

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
    private orderService: OrdesService,
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
  
  orderSuccess(cartId: number): void {
    this.orderService.placeOrder(cartId).subscribe(response => {
        console.log('Order Successful', response);
        this.router.navigate(['home/ordersucess'])
    });
  }

}
