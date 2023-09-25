import { Injectable } from '@angular/core';

export interface Order {
  product: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface Customer {
  name: string;
  city: string;
  country: string;
  orders?: Order[]; // Optional property indicating a customer's orders
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    { name: 'John Doe', city: 'New York', country: 'USA' },
    { name: 'Jane Smith', city: 'London', country: 'UK' },
    { name: 'Michael Johnson', city: 'Sydney', country: 'Australia' },
    { name: 'Anna Lee', city: 'Tokyo', country: 'Japan' },
    { name: 'Carlos Rodriguez', city: 'Madrid', country: 'Spain' },
    { name: 'Marta Oliveira', city: 'Lisbon', country: 'Portugal', orders: [
      { product: 'Product A', quantity: 2, price: 10, totalPrice: 20 },
      { product: 'Product B', quantity: 1, price: 15, totalPrice: 15 },
    ] },
    { name: 'Luca Ferrari', city: 'Rome', country: 'Italy', orders: [
      { product: 'Product C', quantity: 3, price: 8, totalPrice: 24 },
      { product: 'Product D', quantity: 1, price: 12, totalPrice: 12 },
    ] },
    { name: 'Mariusz Kowalski', city: 'Warsaw', country: 'Poland', orders: [
      { product: 'Product E', quantity: 1, price: 18, totalPrice: 18 },
    ] },
    { name: 'shashant Chaudhary', city: 'Noida', country: 'India' },
    { name: 'Ashish Chaudhary', city: 'Basti', country: 'India' }
  ];

  constructor() { }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
