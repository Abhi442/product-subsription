import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new-orders' },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'new-orders', component: NewOrdersComponent },
  { path: '**', component: NewOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
