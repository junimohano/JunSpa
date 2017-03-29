import { Component } from '@angular/core';
import { Auth } from '../shared/auth/auth.service';

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.template.html'
})

export class ProfileShowComponent {
  constructor(public auth: Auth) { }
};
