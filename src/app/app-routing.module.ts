import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'order',component:OrderComponent,canActivate:[AuthGuard] },
  { path:'order-list',component:OrderListComponent,canActivate:[AuthGuard]},
  { path:'order-edit/:id',component:OrderEditComponent ,canActivate:[AuthGuard]},
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent },
  { path:'',redirectTo:'/signup',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
