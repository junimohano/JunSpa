import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Auth } from 'app/shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { environment } from 'environments/environment';

@Injectable()
export class OctagonGirlService {
    // headers: Headers = new Headers();

    headers: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    constructor(private http: Http, private auth: Auth, private authHttp: AuthHttp) {
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Content-Type', 'text/plain');
    }

    getOctagonGirls() {
        return this.http.get(environment.webApiUrl + '/api/v1/octagonGirls')
            .map(res => res.json());
    }

}
