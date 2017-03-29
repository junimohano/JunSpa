import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Auth } from '../../shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  constructor(private http: Http, private auth: Auth, private authHttp: AuthHttp) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'text/plain');
  }

  getTest() {
    return this.authHttp.get(`${environment.webApiUrl}/api/v1/values`)
      .map(res => res.json());
  }

  getOctagonGirls() {
    return this.authHttp.get(environment.webApiUrl + '/api/v1/octagonGirls')
      .map(res => res.json());
  }

  getFighters() {
    return this.authHttp.get(environment.webApiUrl + '/api/v1/fighters')
      .map(res => res.json());
  }

  getFighter(id: number) {
    return this.authHttp.get(`${environment.webApiUrl}/api/v1/fighters/${String(id)}`)
      .map(res => res.json());
  }

  // getFighters() {
  //   return this.http.get(environment.webApiUrl + '/api/v1/fighters')
  //     .map(res => res.json());
  //   // return this.http.get(this.webAddress + '/fighters', { headers: this.headers })
  //   //    .map(res => res.text());
  //   //  .map(res => res.json());
  // }


  getJsonTest() {
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json());
  }
}
