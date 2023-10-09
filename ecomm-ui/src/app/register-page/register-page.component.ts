import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VerificationCodeDialogComponent } from '../verification-code-dialog/verification-code-dialog.component';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,private dialog: MatDialog) { }

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
      // After successful signup, open the verification code dialog
    const dialogRef = this.dialog.open(VerificationCodeDialogComponent);
    // Handle the result when the dialog is closed (e.g., after the user submits the code)
    dialogRef.afterClosed().subscribe(verificationCode => {
      if (verificationCode) {
        this.verifySignUp(verificationCode);
      }
    });
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

  async verifySignUp(verificationCode){
    const username = this.form.get('username').value;
    const confirmationCode = verificationCode;

    Auth.confirmSignUp(username, confirmationCode)
  .then(() => {
    console.log('Email verification successful');
    this.router.navigate(['/login']);
  })
  .catch((error) => {
    console.error('Email verification error', error);
  });
  }

  
}
