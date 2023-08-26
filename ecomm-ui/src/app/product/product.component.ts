import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: any;

  PRODUCT_URL = environment.PRODUCT_URL;
  constructor(private http: HttpClient) {  }

   ngOnInit() {
    alert(this.PRODUCT_URL)
    this.http.get(this.PRODUCT_URL).subscribe(

        response => this.products = response,
    );
  }

}
