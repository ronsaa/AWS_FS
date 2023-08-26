import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { AddItemsComponent } from './add-items/add-items.component'
import { DatePipe } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomePageComponent,
    ProductComponent,
    OrderComponent,
    AddItemsComponent,
    RegisterPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
