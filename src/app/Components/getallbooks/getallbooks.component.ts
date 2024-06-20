import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../Services/books/books.service';
import { Router } from '@angular/router';
import { Book } from '../../Model/bookstore.model';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrl: './getallbooks.component.scss'
})
export class GetallbooksComponent implements OnInit{
  books: Book[] = [];
  bookCount: number = 0;

  constructor(private bookService: BooksService, private router:Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response: any) => {
      console.log(response);
      this.books = response.data;
      this.bookCount = response.data.length;
    })
  }
}
