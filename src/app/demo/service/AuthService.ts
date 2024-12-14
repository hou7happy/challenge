import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    signup() {
        return this.http.get<any>('assets/demo/data/countries.json')

    }
}
