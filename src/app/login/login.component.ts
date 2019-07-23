import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/authService';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthData } from '../core/models/authData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public authData: AuthData
  ) {
    this.formGroup = this.fb.group({
      username: [authData.username, Validators.required],
      password: [authData.password, Validators.required]
    });
  }

  ngOnInit() {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    this.authService.login('', '').subscribe(
      () => this.dialogRef.close(),
      err => {
        console.error();
      }
    );
  }

}
