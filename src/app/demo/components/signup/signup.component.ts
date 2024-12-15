import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {AuthService} from "../../service/AuthService";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {setUser} from "../../../../../environment";
import {Router} from "@angular/router";

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
    `],
    providers: [AuthService]
})
export class SignupComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    confirmPassword:any=""

    constructor(public layoutService: LayoutService, private  service : AuthService,public router:Router) {

    }
    governments = [
        { label: 'أريانة', value: 'ariana' },
        { label: 'باجة', value: 'beja' },
        { label: 'بن عروس', value: 'ben_arous' },
        { label: 'تونس', value: 'tunis' },
        { label: 'صفاقس', value: 'sfax' },
        // ...other governments
    ];

    municipalities = {
        ariana: [
            { label: 'بلدية أريانة', value: 'ariane_municipality' },
            { label: 'بلدية المنيهلة', value: 'menihla_municipality' },
        ],
        beja: [
            { label: 'بلدية باجة', value: 'beja_municipality' },
            { label: 'بلدية نفزة', value: 'nafza_municipality' },
        ],
        ben_arous: [
            { label: 'بلدية بن عروس', value: 'ben_arous_municipality' },
            { label: 'بلدية حمام الأنف', value: 'hammam_lif_municipality' },
        ],
        tunis: [
            { label: 'بلدية تونس', value: 'tunis_municipality' },
            { label: 'بلدية الكرم', value: 'le_kram_municipality' },
        ],
        sfax: [
            { label: 'بلدية صفاقس', value: 'sfax_municipality' },
            { label: 'بلدية ساقية الزيت', value: 'sakiet_ezzit_municipality' },
        ],
        // ...other municipalities
    };
formData = {
        fullname: '', // string
        phone: '', // string
        idNumber: '', // string
        birthDate: '', // string (formatted as yyyy-mm-dd)
        email: '', // string
        password: '', // string
        confirmPassword: '', // string
        government: null, // { label: string, value: string }
        municipality: null, // { label: string, value: string }
        notRobot: false // boolean
    };
    filteredMunicipalities = [];

    filterMunicipalities() {
        const selectedGovernment = this.formData.government?.value;
        this.filteredMunicipalities = this.municipalities[selectedGovernment] || [];
    }

    onsignup(){
        this.service.signup(this.formData).subscribe(
            (next)=>{
                (data)=>{
                    setUser(data)
                    this.router.navigate(['dashboard/projects']);
                }

            }
            , (error)=>{

        },
            () => {
this.router.navigate(['dashboard/projects']);
            }
        )
    }
}

