import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;

  // constructor(private formGroup: FormGroup) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', ),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', ),
      password: new FormControl('', ),

    });
  }


  onSubmit() {
   console.log(this.form.value)
  }

}
