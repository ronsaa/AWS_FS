import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'product', component: ProductComponent},
  { path: 'order', component: OrderComponent },
  { path: 'add', component: AddItemsComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'logout', component: LogoutComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
