import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];
  userId: any;
  count:any=1
  
  wishlist:any={
    wishlistId:'',
    title:'',
    author:'',
    Price:'',
    OriginalPrice:'',
    image:'',
  }

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService.currWishlist.subscribe(wishlistItems => {
      this.wishlistItems = wishlistItems;
    });
    this.loadWishlist();
  }

  loadWishlist() {
    let reqData = {
      userId:localStorage.getItem('userId'),
    };
    this.wishlistService.getWishlist(reqData).subscribe(response => {
      this.wishlistItems = response.data;
      this.wishlistService.updateWishlist(this.wishlistItems);
    });
  }

  removeFromWishlist(wishlistId: number) {
    this.wishlistService.removeFromWishlist(wishlistId).subscribe(response => {
      console.log('Book removed from wishlist', response);
      this.loadWishlist();
    });
  }
  
}
