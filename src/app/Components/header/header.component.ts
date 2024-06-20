import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../Services/cart/cart.service';
import { Router } from '@angular/router';
import { LoginSignupComponent } from '../login-signup/login-signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  loginClick:boolean=false
  loggedin:boolean=false
  name:any
  cartItems: any[] = [];

  constructor(private dialog:MatDialog,
    private cartService: CartService,
    private router: Router){}
    
  ngOnInit(): void {
    this.cartService.currCartList.subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  profiledata(){
   if(localStorage.getItem('token')){
     this.name=localStorage.getItem('fullName');
      this.loggedin=!this.loggedin;
    }
    else{
      this.loginClick=!this.loginClick
    }
  }

  login(){
    const dialogRef=this.dialog.open(LoginSignupComponent,{width:'740px',height:'475px'});
    dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');
    });
    this.loginClick=!this.loginClick;
  }

  logout(){
     this.loggedin=!this.loggedin;
     localStorage.removeItem('token');
  }

  profile(){
    this.router.navigate(['home/profile'])
    console.log('Personal Details');
  }

  goToWish(){
    this.router.navigate(['home/wish'])
    console.log('wishlist Successfull');
  }
  
  goToOrders(){
    this.router.navigate(['home/orders'])
    console.log('Order Sucessfull');
  }

  goToCart() {
    this.router.navigate(['/home/cart']);
    console.log('Cart Sucessfull');
  }

}
