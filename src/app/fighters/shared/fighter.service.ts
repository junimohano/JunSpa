import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Auth } from 'app/shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { environment } from 'environments/environment';

@Injectable()
export class FighterService {
    // headers: Headers = new Headers();

    headers: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    constructor(private http: Http, private auth: Auth, private authHttp: AuthHttp) {
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Content-Type', 'text/plain');
    }

    getFighters() {
        return this.http.get(environment.webApiUrl + '/api/v1/fighters')
            .map(res => res.json());
    }

    getFighter(id: number) {
        return this.http.get(`${environment.webApiUrl}/api/v1/fighters/${id}`)
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
