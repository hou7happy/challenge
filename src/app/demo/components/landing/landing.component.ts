import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {getUserId} from "../../../../../environment";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    stateItems = [
        { label: 'أريانة', value: 'Ariana' },
        { label: 'باجة', value: 'Beja' },
        { label: 'بن عروس', value: 'Ben Arous' },
        { label: 'بنزرت', value: 'Bizerte' },
        { label: 'قابس', value: 'Gabes' },
        { label: 'قفصة', value: 'Gafsa' },
        { label: 'جندوبة', value: 'Jendouba' },
        { label: 'القيروان', value: 'Kairouan' },
        { label: 'القصرين', value: 'Kasserine' },
        { label: 'قبلي', value: 'Kebili' },
        { label: 'الكاف', value: 'Kef' },
        { label: 'المهدية', value: 'Mahdia' },
        { label: 'المنستير', value: 'Monastir' },
        { label: 'مدنين', value: 'Medenine' },
        { label: 'منوبة', value: 'Manouba' },
        { label: 'نابل', value: 'Nabeul' },
        { label: 'صفاقس', value: 'Sfax' },
        { label: 'سيدي بوزيد', value: 'Sidi Bouzid' },
        { label: 'سليانة', value: 'Siliana' },
        { label: 'سوسة', value: 'Sousse' },
        { label: 'تطاوين', value: 'Tataouine' },
        { label: 'توزر', value: 'Tozeur' },
        { label: 'تونس', value: 'Tunis' },
        { label: 'زغوان', value: 'Zaghouan' }
    ];

    municipalityItems = [
        { name: 'بلدية 1', code: 'M1' },
        { name: 'بلدية 2', code: 'M2' }
    ];

    selectedState: any = null;
    selectedMunicipality: any = null;

    progressValue: number = 0;
    totalFields: number = 8; // 5 text fields + 2 dropdowns + 1 textarea
    completedFields: number = 0;

    // Form data
    formData = {
        fullname: '', // string
        birthdate: '', // string (formatted as mm/dd/yyyy)
        cin: '', // string
        phone: '', // string
        email: '', // string
        state: null, // { label: string, value: string }
        municipality: null, // { name: string }
        summary: '' // string
    };

    constructor(public layoutService: LayoutService, public router: Router) {}

    // The updateProgress function remains untouched
    updateProgress(): void {
        this.completedFields = 0;

        // Check all text inputs and textarea
        const inputs = document.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(input => {
            const textInput = input as HTMLInputElement | HTMLTextAreaElement;
            if (textInput.value.trim() !== '') {
                this.completedFields++;
            }
        });

        // Check dropdowns
        if (this.selectedState) {
            this.completedFields++;
        }
        if (this.selectedMunicipality) {
            this.completedFields++;
        }

        // Calculate progress
        this.progressValue = Math.min(
            Math.round((this.completedFields / this.totalFields) * 100),
            100
        );
    }

    // Submit the form
    submit(): void {
        let userId = getUserId()
        const data = {
            // Using fullname as title
            description: this.formData.summary, // Using summary as description
            userId :userId

        };

        console.log('Submitting:', data);
        // Here you can make the API call
        // Example: this.http.post('/api/propositions', data).subscribe(...)
        alert('تم إرسال المقترح بنجاح');
    }
}
