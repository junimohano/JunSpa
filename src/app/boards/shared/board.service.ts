import { Injectable } from '@angular/core';
import { Auth } from 'app/shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class BoardService {
  // headers: Headers = new Headers();

  headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  constructor(private http: Http, private auth: Auth, private authHttp: AuthHttp) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'text/plain');
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
}
