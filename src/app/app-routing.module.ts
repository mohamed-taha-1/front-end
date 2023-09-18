import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AuthGuard } from './http/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'login', component: LoginComponent }, // Route for login page
  {
    path: 'orders',
    component: OrdersComponent, // Your orders component
    canActivate: [AuthGuard] // Apply the AuthGuard to protect this route
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
