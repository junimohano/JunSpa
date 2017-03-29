import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: Auth) { }

  ngOnInit() {
  }

}
