import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { environment } from 'src/environments/environment.development';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'x-api-key': 'LHuVL5gFYKasHJ6YH8SFJ8Ge6uoVKRBIkI375Dwd'
});
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  ORDER_URL = environment.ORDER_URL;
  rowData: any; // Initilized 'rowData' variable to store data

  constructor(private http: HttpClient) {  } // Injecting HttpClient into the constructor in a private property called http.


  columnDefs= [
    {headerName: 'ID', field: 'id',valueFormatter: this.getFormattedTextValue,filter: true,sortable: true },
    {headerName: 'Name', field: 'name',filter: true,sortable: true },
    {headerName: 'Order By', field: 'orderBy', filter: true,sortable: true},
    {headerName: 'Status', field: 'status',filter: true,sortable: true},
    {headerName: 'Total Amount ($)', field: 'totalAmount',filter: true,sortable: true},
    {headerName: 'Updated', field: 'updated',filter: true,sortable: true},

  ];


  //Added ngOnInit funtion
  ngOnInit() {
    this.http.get(this.ORDER_URL,{ headers})
    .subscribe(
      (data) =>  {
        this.rowData = data;
        console.log(this.rowData)
      }
    );
    this.http.get('https://qrbhmaex01.execute-api.us-east-1.amazonaws.com/prod/health',{ headers}).subscribe(
      (data) => {
        let response = DataTransfer;
        console.log(data)
      }
    );

  }

  getFormattedTextValue(params) {
    let upperCase = params.value.toUpperCase();
    return upperCase;
  }


}
