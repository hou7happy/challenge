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
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
            cursor: pointer;
        }
    `],
    providers:[AuthService]
})
export class LoginComponent {



    // password!: string;
    // cin!: string;

    constructor(public layoutService: LayoutService,private service : AuthService,private router:Router) { }
    valCheck: string[] = ['remember']; // Checkbox value for "Remember Me"
    password!: string; // Password input value
    cin!: string; // CIN input value
    showPassword: boolean = false; // Toggle visibility of the password

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
    // constructor(public layoutService: LayoutService) { }

    // Method to toggle password visibility
    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }
}


