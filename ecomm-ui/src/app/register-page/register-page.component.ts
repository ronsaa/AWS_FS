import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';


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

  async signUp() {

    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    const email = this.form.get('email').value;

    try {

      await Auth.signUp({
        username,password,
        attributes: {
          email
        },
      });
      console.log('Sign-up successful');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
  onSubmit() {
   console.log(this.form.value);
   var formData : any = new FormData();
   formData.append("name",this.form.get('name').value);
   formData.append("email",this.form.get('email').value);
   formData.append("username",this.form.get('username').value);
   formData.append("password",this.form.get('password').value);
  }

  
}
