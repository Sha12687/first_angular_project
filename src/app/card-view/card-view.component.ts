import { Component , Input, OnInit} from '@angular/core';
import { CustomerService, Customer } from '../customer.service';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  customers: Customer[] =[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  searchText:string='';
  currentPage: number = 1; // Add this line
  itemsPerPage: number = 8; // Add this line
  
  get filteredCustomers(): Customer[] {
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredCustomers.length);
  }
  changePage(page: number) {
    this.currentPage = page;
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
}
