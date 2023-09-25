import { Component,Input } from '@angular/core';
import { Customer, CustomerService } from '../customer.service'; // Import the Order interface

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() customers: Customer[]=[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
  getTotalOrderPrice(customer: Customer): number {
    if (customer.orders) {
      return customer.orders.reduce((total, order) => total + order.totalPrice, 0);
    }
    return 0;
  }
}
