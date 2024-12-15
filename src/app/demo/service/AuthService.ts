import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {development, getToken} from "../../../../environment";
import {of} from "rxjs";



@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }


    signup(data) {

            return this.http.post<any>(development.apiBaseUrl + ':' + development.apiPort + '/auth/signup/', data);

    }
    login(password,cin){
        return this.http.post<any>(development.apiBaseUrl + ':' + development.apiPort + '/auth/login/', {password:password,cin:cin});
    }
}
