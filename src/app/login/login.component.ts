import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public auth: Auth, private router: Router) { }

  ngOnInit() {
    if (this.auth.authenticated()) {
      const redirectUrl = localStorage.getItem('redirect_url');
      this.router.navigate([redirectUrl == null ? '/home' : redirectUrl]);
    }
  }

}
