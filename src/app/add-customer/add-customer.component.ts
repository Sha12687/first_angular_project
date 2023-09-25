import { Component } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  title='Insert'
  defualtCountry:string='India';
  customers: Customer[]=[];
  countries = ['India','USA', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'];
  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
  citiesByCountry: { [key: string]: string[] } = {
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'Germany': ['Berlin', 'Munich', 'Hamburg'],
    'France': ['Paris', 'Marseille', 'Lyon'],
    'India': ['Mumbai', 'Delhi', 'Bangalore']
  };
  

  onSubmit(form:any) {
   //this.customers.push
   const newCustomer: Customer = {
    name: form.name,
    city: form.city, 
    country: this.selectedCountry 
  };

  this.customerService.customers.push(newCustomer);
   console.log(form)
  }
 
    onCancel(form:NgForm) {
      form.resetForm();
    }
    selectedCountry: string='';
    selectedCity: string='';
    getCitiesForSelectedCountry() {
      return this.citiesByCountry[this.selectedCountry] || [];
    }
}
