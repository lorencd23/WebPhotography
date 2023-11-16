import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() titulo: string;

  constructor(private router: Router) {
    this.titulo = '';
  }

  backToHome() {
    this.router.navigate(['']);
  }

}
