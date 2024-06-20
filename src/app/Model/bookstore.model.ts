export interface Book{
    bookId:number,
    title:string,
    author:string,
    rating:number,
    ratingCount:number,
    price:number,
    originalPrice:number,
    description:string,
    image:string,
    quantity:number
}
export interface Feedback {
    id: number;
    bookId: number;
    userId: number;
    userName: string;
    rating: number;
    review: string;
}
export interface Cart{
    cartId:number,
    title:string,
    author:string,
    totalPrice:number,
    totalOriginalPrice:number,
    image:string,
    quantity:number
}

export interface CartItem {
    cartId: number;
    title: string;
    author: string;
    totalPrice: number;
    totalOriginalPrice: number;
    image: string;
    quantity: number;
  }
  