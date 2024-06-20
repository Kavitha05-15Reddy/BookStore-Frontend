import { Component, OnInit } from '@angular/core';
import { OrdesService } from '../../Services/orders/ordes.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orderItems: any[] = [];
  userId: any;
  count:any=1
  
  Order:any={
    orderId:'',
    title:'',
    author:'',
    totalPrice:'',
    totalOriginalPrice:'',
    image:'',
    orderDateTime:''
  }

 constructor(private orderService: OrdesService) {}

  ngOnInit(): void {
    this.orderService.currOrdes.subscribe(orderItems => {
      this.orderItems = orderItems;
    });
    this.loadOrders();
  }

  loadOrders() {
    let reqData = {
      userId:localStorage.getItem('userId'),
    };
    this.orderService.getOrders(reqData).subscribe(response => {
      this.orderItems = response.data;
      this.orderService.updateOrders(this.orderItems);
    });
  }

  cancelOrder(orderId: number) {
    this.orderService.cancelOrder(orderId).subscribe(response => {
      console.log('Order Canceled', response);
      this.loadOrders();
    });
  }

}
