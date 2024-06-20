import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../Services/books/books.service';
import { FeedbackService } from '../../Services/feedback/feedback.service';
import { CartService } from '../../Services/cart/cart.service';
import { WishlistService } from '../../Services/wishlist/wishlist.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit{
  id: any;
  Books: any;
  feedbacks: any[] = [];
  wishlist: any[] = [];

  data: any = {
    bookId: '',
    author: '',
    discountPrice: '',
    quantity: '',
    title: '',
    description: '',
    image: '',
    rating: 0,
    ratingCount: 0,
    price: 0,
    originalPrice: 0
  };

  newFeedback: any = { 
    bookId: 0,
    userId: 0,
    rating: 0,
    review: '',
  };

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService, 
    private feedbackService: FeedbackService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) { }
  ngOnInit(): void {
   this.id = +this.route.snapshot.params['id'];
   this.newFeedback.bookId = this.id;
   this.newFeedback.userId = +localStorage.getItem('userId')!;
   this.fetchBookDetails();
   this.fetchFeedbacks();
  }

  fetchBookDetails(): void {
    this.booksService.getBooks().subscribe((response: any) => {
      this.Books = response.data;
      const result = this.Books.filter((item: any) => item.bookId == this.id);
      console.log(result);
      this.data = result[0];
      console.log(this.data);
    });
  }

  fetchFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe((response: any) => {
      this.feedbacks = response.data; 
      const result = this.feedbacks.filter((item: any) => item.bookId == this.id);
      console.log(result);
      this.data.feedbacks = result; 
      console.log(this.data.feedbacks);
    });
  }

  submitFeedback(): void {
    this.feedbackService.addFeedback(this.newFeedback).subscribe((feedback: any) => {
      console.log('Feedback added successfully:', feedback);
      this.newFeedback = {
        bookId: this.id,
        userId: +localStorage.getItem('userId')!,
        rating: 0,
        review: '',
      };
      this.fetchFeedbacks();
      this.fetchBookDetails();
    });
  }

  addToCart(): void {
    let reqData = {
      userId:localStorage.getItem('userId'),
      bookId: this.data.bookId
    };

    this.cartService.addToCart(reqData).subscribe(response => {
      console.log('Book added to cart:', response);
      this.updateCartList();
    });
  }

  updateCartList(): void {
    const userId = localStorage.getItem('userId');
      this.cartService.getCartsList({ userId: userId }).subscribe(cartItems => {
        this.cartService.updateCartList(cartItems.data);
      });
  }

  addToWishlist() {
    let reqData = {
      userId:localStorage.getItem('userId'),
      bookId: this.data.bookId
    };

    this.wishlistService.addToWishlist(reqData).subscribe(response => {
      console.log('Book added to wishlist', response);
      this.loadWishlist();
      this.router.navigate(['home/wish'])
    });
  }

  loadWishlist() {
    this.wishlistService.getWishlist(this.id).subscribe(response => {
      this.wishlist = response;
      this.wishlistService.updateWishlist(this.wishlist);
    });
  }

}
