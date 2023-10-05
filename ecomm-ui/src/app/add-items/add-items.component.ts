import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UploadService } from '../service/uploadImage.service';
const ORDER_URL = environment.ORDER_URL;
const PRODUCT_URL = environment.PRODUCT_URL;
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit{

  selectedFile: File | undefined;
  location : any;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }



  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public uploadService: UploadService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', ),
      price: new FormControl('', ),
      description: new FormControl('', [Validators.required, Validators.email]),
      category: new FormControl('', ),
      image: new FormControl('', ),
      imageUrl: new FormControl('', ),
      count: new FormControl('', )
    });
  }


  onSubmit() {
   console.log(this.form.value);
   if (!this.selectedFile) {
    return;
  }
    this.uploadService.uploadFile(this.selectedFile, (err, location) => {
      if (err) {
        console.error('Error uploading file:', err);
      } else {
        console.log('File uploaded successfully. S3 location:', location);
        this.form.get('image').setValue(location);
        console.log('form value - ',this.form.value);
        this.createProduct();
      }
    });
  }

  createProduct() {
    return this.http.post(PRODUCT_URL
      ,this.form.value ).subscribe(
        data => {
          console.log(data)
          alert("Product Added Successfully!")
          this.router.navigate(['product'])
        })
  }

}
