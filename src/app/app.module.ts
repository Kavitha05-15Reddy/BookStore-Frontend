import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddressDetailsComponent } from './Components/address-details/address-details.component';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GetallbooksComponent,
    BookDetailsComponent,
    BookCardComponent,
    CartComponent,
    AddressDetailsComponent,
    WishlistComponent,
    ProfileComponent,
    OrdersComponent,
    OrderSummaryComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatRadioButton,
    MatRadioModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
