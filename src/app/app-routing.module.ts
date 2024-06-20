import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddressDetailsComponent } from './Components/address-details/address-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  {path:'login',component:LoginSignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:DashboardComponent,
    children:[
      {path:'',redirectTo:"/home/getallbooks",pathMatch:"full"},
      {path:'getallbooks',component:GetallbooksComponent},
      {path:'bookDetails/:id',component:BookDetailsComponent},
      {path:'cart',component:CartComponent},
      {path:'address',component:AddressDetailsComponent},
      {path:'ordersummary', component:OrderSummaryComponent},
      {path:'ordersucess',component:OrderSuccessComponent},
      {path:'orders',component:OrdersComponent},
      {path:'wish',component:WishlistComponent},
      {path:'profile',component:ProfileComponent} 
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
