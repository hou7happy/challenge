import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {AuthService} from "../../service/AuthService";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SignupComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    confirmPassword:any=""

    constructor(public layoutService: LayoutService, private  service : AuthService) {

    }
    onsignup(){
        this.service.signup().subscribe(
            (next)=>{

            }
            , (error)=>{

        },
            () => {

            }
        )
    }
}

