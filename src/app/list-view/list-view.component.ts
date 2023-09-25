import { Component,Input,OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service'; // Import the Order interface

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit  {

   customers: Customer[]=[];
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
  showOrderTotal = true;  
  searchText: string = '';

  get filteredCustomers(): Customer[] {
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  currentPage:number = 1;
  itemsPerPage:number = 5;

get startIndex(): number {
  return (this.currentPage - 1) * this.itemsPerPage;
}

get endIndex(): number {
  return Math.min(this.currentPage * this.itemsPerPage, this.filteredCustomers.length);
}
get pages(): number[] {
  const pageCount = Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
  return Array.from({ length: pageCount }, (_, i) => i + 1);
}

changePage(page: number) {
  this.currentPage = page;
}
}
