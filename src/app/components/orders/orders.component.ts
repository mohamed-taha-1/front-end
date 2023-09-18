import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/http/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private localService: AuthenticationService) { }
  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.localService.fetchOrdersService().subscribe((data: any) => {
      this.orders = data;
    });
  }

}
