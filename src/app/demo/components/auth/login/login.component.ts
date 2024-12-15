import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {AuthService} from "../../../service/AuthService";
import {Router} from "@angular/router";
import {setUser} from "../../../../../../environment";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers:[AuthService]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    cin!: string;

    constructor(public layoutService: LayoutService,private service : AuthService,private router:Router) { }

    onlogin(){
        this.service.login(this.password,this.cin).subscribe(
            d  => {
                if (!d.error) {
                    this.router.navigate(['dashboard/projects']);
                    setUser(d)
                    localStorage.setItem('Token',d.token);
            }
    });
    this.router.navigate(['dashboard/projects']);}
}


