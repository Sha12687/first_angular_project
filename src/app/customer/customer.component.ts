import { Component,Input,OnInit } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  implements OnInit {
  customers: Customer[]=[];

  constructor(private customerService: CustomerService,private router: Router) { }
 


  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.router.navigate(['/customer/card-view']);
  }
  
}
