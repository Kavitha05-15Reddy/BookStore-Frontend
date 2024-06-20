import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit{
  @Input() Book:any;

  constructor(private router:Router){}
  
  ngOnInit(): void {
    
  }

  goToBookDetails(){
    this.router.navigate(['home/bookDetails', this.Book.bookId])
  }
}
