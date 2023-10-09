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
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // You might need other Material modules as well
import { VerificationCodeDialogComponent } from './verification-code-dialog/verification-code-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

Amplify.configure(awsconfig);
(window as any).global = window;


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
    LogoutComponent,
    VerificationCodeDialogComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,MatDialogModule,
    AgGridModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
