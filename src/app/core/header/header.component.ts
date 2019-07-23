import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private modalService: ModalService,
    // private router: Router
  ) { }

  ngOnInit() {
  }
  openLoginDialog(): void {
    this.modalService.openLoginModal();
  }

}
