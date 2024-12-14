import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {development, getToken} from "../../../../environment";
import {of} from "rxjs";



@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }


    signup(data) {
        let token = getToken();

        if (token && typeof token === 'string') {
            let headers = { 'Authorization': 'Token ' + token }
            return this.http.post<any>(development.apiBaseUrl + ':' + development.apiPort + '/auth/signup/', data,{ headers: headers });
        } else {
            return of(new Error('Token not found'));
        }
    }
}
