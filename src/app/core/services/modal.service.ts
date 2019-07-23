import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public dialog: MatDialog) {}
  openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '350px',
      data: ''
    });
  }
}
