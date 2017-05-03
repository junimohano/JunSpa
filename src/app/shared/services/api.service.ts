import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Auth } from '../../shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  // headers: Headers = new Headers();

  headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  constructor(private http: Http, private auth: Auth, private authHttp: AuthHttp) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'text/plain');
  }

  getTest() {
    return this.authHttp.get(`${environment.webApiUrl}/api/v1/values`)
      .map(res => res.json());
  }

  getOctagonGirls() {
    return this.http.get(environment.webApiUrl + '/api/v1/octagonGirls')
      .map(res => res.json());
  }

  getFighters() {
    return this.http.get(environment.webApiUrl + '/api/v1/fighters')
      .map(res => res.json());
  }

  getFighter(id: number) {
    return this.http.get(`${environment.webApiUrl}/api/v1/fighters/${id}`)
      .map(res => res.json());
  }

  getBoards() {
    return this.authHttp.get(`${environment.webApiUrl}/api/v1/boards`)
      .map(res => res.json());
  }

  getBoard(id: number) {
    return this.authHttp.get(`${environment.webApiUrl}/api/v1/boards/${id}`)
      .map(res => res.json());
  }

  createBoard(board: Board) {
    return this.authHttp.post(`${environment.webApiUrl}/api/v1/boards`, board, { headers: this.headers })
      .map(res => res.json());
  }

  updateBoard(id: number, board: Board) {
    return this.authHttp.put(`${environment.webApiUrl}/api/v1/boards/${id}`, board, { headers: this.headers })
      .map(res => res.json());
  }

  deleteBoard(id: number) {
    return this.authHttp.delete(`${environment.webApiUrl}/api/v1/boards/${id}`)
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
