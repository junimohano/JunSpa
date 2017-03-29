import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Auth } from '../shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { myConfig } from '../shared/auth/auth.config';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.template.html'
})

export class ProfileEditComponent {
  address: String;
  constructor(public auth: Auth, private authHttp: AuthHttp, private router: Router) {
    if (auth.userProfile.user_metadata && auth.userProfile.user_metadata.address) {
      this.address = auth.userProfile.user_metadata.address;
    }
  }

  onSubmit() {
    const headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const data: any = JSON.stringify({
      user_metadata: {
        address: this.address
      }
    });

    this.authHttp
      .patch('https://' + myConfig.domain + '/api/v2/users/' + this.auth.userProfile.user_id, data, { headers: headers })
      .map(response => response.json())
      .subscribe(
      response => {
        this.auth.userProfile = response;
        localStorage.setItem('profile', JSON.stringify(response));
        this.router.navigate(['/profile']);
      },
      error => alert(error.json().message)
      );
  }
}
