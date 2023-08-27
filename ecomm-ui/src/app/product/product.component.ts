import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const ORDER_URL = environment.ORDER_URL;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  products: any;

  form: FormGroup;

  PRODUCT_URL = environment.PRODUCT_URL;
  constructor(private http: HttpClient, private router: Router) { }

   ngOnInit() {
    //alert(this.PRODUCT_URL)
    this.http.get(this.PRODUCT_URL).subscribe(

        response => this.products = response,
    );
  }

  onSubmit(item) {
    console.log(item)
    this.addToOrder(item)
   }
 
   addToOrder(item) {

    item

     return this.http.post(ORDER_URL
       ,item).subscribe(
         data => {
           console.log(data)
           alert("Order Added to Cart!")
           this.router.navigate(['product'])
         })
   }

}
