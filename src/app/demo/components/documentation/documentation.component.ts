
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/AuthService";
interface Slide {
    title: string;
    subtitle: string;
}

interface Project {
    id: number;
    name: string;
    vote?: 'green' | 'orange' | 'red' | null;
}
@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit{
    constructor(private service : AuthService) {


    }

    ngOnInit() {
    }

    slides = [
        {
            title: 'أرسل تصويتك',
            subtitle: 'اختر رأيك بشأن المشروع',
            value: 'voting'
        },
        {
            title: 'قدّم اقتراحًا',
            subtitle: 'شارك أفكارك أو حلولك',
            value: 'proposal'
        },
        {
            title: 'طلب استشارة',
            subtitle: 'اطلب معلومات أو توجيه إضافي',
            value: 'consulter'
        }
    ];



    selectedSection: any = null;

    projects = [
        {
            title: 'Aménagement d’un parc',
            status: 'En cours',
            startDate: '01/12/2024',
            estimatedEndDate: '30/06/2025',
            id: 1,
            vote: null
        },
        {
            title: 'Construction d’un centre culturel',
            status: 'Pas commencé',
            startDate: '15/01/2025',
            estimatedEndDate: '15/12/2025',
            id: 2,
            vote: null
        },
    ];


    // Carousel data


      // controls dialog visibility
    selectedSlide: any = null;   // holds the clicked slide object
    selectedValue: string | null = null; // "voting", "proposal", or "consulter"
    submitVoting() {
        // Example: handle the votes
        console.log('Selected Slide:', this.selectedSlide);
        console.log('Selected Section: voting');
        console.log('Projects & their votes:', this.projects);


    }
    // The 3 possible options
    sections = [
        { label: 'Voting', value: 'voting' },
        { label: 'Proposal', value: 'proposal' },
        { label: 'Consulter', value: 'consulter' }
    ];

    /**
     * Called when user clicks the button in a slide.
     * We open the dialog, set the current slide, and reset any previous selection.
     */
    onSelectSection(slide: any) {
        this.selectedSlide = slide;
        this.selectedValue = this.selectedSlide.value;      // reset the dropdown
             // show the dialog
    }




}
