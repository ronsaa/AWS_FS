import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verification-code-dialog',
  templateUrl: './verification-code-dialog.component.html',
  styleUrls: ['./verification-code-dialog.component.css']
})
export class VerificationCodeDialogComponent implements OnInit {
  verificationForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<VerificationCodeDialogComponent>,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.verificationForm = this.fb.group({
      verificationCode: ['', Validators.required]
    });
  }
  submitVerificationCode() {
    // Get the entered verification code
    const code = this.verificationForm.get('verificationCode').value;
    // Close the dialog and pass the verification code as the result
    this.dialogRef.close(code);
  }
}
