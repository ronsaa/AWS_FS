import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from '../service/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  rowData: any; // Initilized 'rowData' variable to store data

  constructor(private http: HttpClient) {  } // Injecting HttpClient into the constructor in a private property called http.

  columnDefs = [
    {headerName: 'Item Name', field: 'itemname' },
    {headerName: 'Quantity', field: 'quantity' },
    {headerName: 'Price / Quantity', field: 'price'}
  ];

  user= '';

  //Added ngOnInit funtion
  ngOnInit() {
    this.user = sessionStorage.getItem(AUTHENTICATED_USER)
  }

}
