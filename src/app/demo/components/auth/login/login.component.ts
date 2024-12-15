import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember']; // Checkbox value for "Remember Me"
    password!: string; // Password input value
    cin!: string; // CIN input value
    showPassword: boolean = false; // Toggle visibility of the password

    constructor(public layoutService: LayoutService) { }

    // Method to toggle password visibility
    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }
}
