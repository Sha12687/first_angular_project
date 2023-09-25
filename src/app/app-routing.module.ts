import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent,children: [
    { path: 'card-view', component: CardViewComponent },
    { path: 'list-view', component: ListViewComponent },
    {path: 'mapview', component:MapViewComponent},
  ]  },
  {path:'addCustomer', component:AddCustomerComponent},
  { path: 'about', component: AboutComponent },
  { path:  'login' , component:LoginComponent},
  {path: 'orders', component:OrdersComponent},
  {path:'view-order',component:OrdersComponent},
  
  {  path: '', redirectTo: '/customer', pathMatch: 'full'} // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
