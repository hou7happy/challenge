
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/AuthService";
import {Router} from "@angular/router";
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
    constructor(private service : AuthService,private route:Router) {


    }

    ngOnInit() {
    }

    slides = [
        {
            title: 'فضاء التصويت على المشاريع ',
            subtitle: 'ساهم بالتصويت على المشاريع المقترحة لسنة 2025',
            value: 'voting'
        },
        {
            title: 'قدّم اقتراحًا',
            subtitle: 'شارك أفكارك أو حلولك',
            value: 'proposal'
        },
        {
            title: 'متابعة المشاريع الجارية',
            subtitle: 'اطلع, تابع و أضف تعليقك على المشاريع الجارية ببلديتك',
            value: 'consulter'
        }
    ];



    selectedSection: any = null;

projects = [
    {
        title: 'تحسين مرافق عمومية',
        description: 'مشروع يهدف إلى تطوير وتحسين المرافق العامة مثل الحدائق، المستشفيات، والمدارس من خلال توفير تجهيزات حديثة، رفع مستوى النظافة، وإضافة مساحات خضراء جديدة لتعزيز رفاهية المجتمع.',
        status: 'En cours',
        startDate: '01/12/2024',
        estimatedEndDate: '30/06/2025',
        id: 1,
        vote: null
    },
    {
        title: 'تصليح الطرقات',
        description: 'مشروع يركز على ترميم الطرقات المتضررة وتحسين شبكة النقل من خلال تعبيد الطرق المهترئة، إصلاح الحفر، وضمان انسيابية الحركة المرورية لتعزيز السلامة العامة.',
        status: 'Pas commencé',
        startDate: '15/01/2025',
        estimatedEndDate: '15/12/2025',
        id: 2,
        vote: null
    },
    {
        title: 'إنشاء مكتبة عامة جديدة',
        description: 'مشروع يهدف إلى بناء مكتبة عامة حديثة توفر الكتب والمصادر التعليمية المتنوعة للطلاب والمجتمع، مع إضافة مساحات للقراءة الرقمية وقاعات دراسية مجهزة بأحدث التقنيات.',
        status: 'En attente d’approbation',
        startDate: '01/03/2025',
        estimatedEndDate: '31/12/2025',
        id: 3,
        vote: null
    },
    {
        title: 'إعادة تأهيل الحدائق العامة',
        description: 'مشروع يهدف إلى تجميل الحدائق العامة وزيادة مساحاتها الخضراء، من خلال إعادة زراعة النباتات، تركيب مقاعد جديدة، وإضافة مساحات مخصصة للأطفال لتعزيز الأنشطة العائلية والترفيهية.',
        status: 'En cours',
        startDate: '01/11/2024',
        estimatedEndDate: '30/05/2025',
        id: 4,
        vote: null
    },
    {
        title: 'تركيب أضواء الشوارع',
        description: 'مشروع يهدف إلى تحسين الإنارة العامة في المناطق الحضرية والريفية عبر تركيب أضواء جديدة تعمل بالطاقة الشمسية وصيانة أعمدة الإنارة القديمة لتعزيز السلامة والأمان في الليل.',
        status: 'Pas commencé',
        startDate: '15/02/2025',
        estimatedEndDate: '15/11/2025',
        id: 5,
        vote: null
    },
    {
        title: 'إصلاح شبكات المياه',
        description: 'مشروع يهدف إلى تحسين شبكات توزيع المياه من خلال إصلاح التسربات، تنظيف الأنابيب القديمة، وضمان توفير مياه صالحة للشرب لكل المنازل والمناطق النائية.',
        status: 'En cours',
        startDate: '10/12/2024',
        estimatedEndDate: '10/06/2025',
        id: 6,
        vote: null
    },
    {
        title: 'بناء مدرسة جديدة',
        description: 'مشروع يهدف إلى إنشاء مدرسة عصرية مجهزة بمرافق تعليمية متطورة مثل مختبرات علمية، قاعات دراسية مجهزة بأحدث التقنيات، ومساحات رياضية لدعم التعليم والتطور الشامل للطلاب.',
        status: 'Pas commencé',
        startDate: '01/04/2025',
        estimatedEndDate: '01/01/2026',
        id: 7,
        vote: null
    },
    {
        title: 'إنشاء مركز صحي جديد',
        description: 'مشروع يهدف إلى بناء مركز صحي جديد يقدم خدمات طبية متكاملة تشمل عيادات عامة وتخصصية، صيدلية، ومرافق طوارئ للمناطق النائية التي تفتقر إلى الخدمات الصحية الأساسية.',
        status: 'En attente d’approbation',
        startDate: '01/05/2025',
        estimatedEndDate: '31/12/2025',
        id: 8,
        vote: null
    }
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
        this.selectedValue = this.selectedSlide.value;
        if (this.selectedValue === 'consulter'){
            this.route.navigate(['dashboard/projects']);
        }
        else if(this.selectedValue==='proposal'){
            this.route.navigate(['/landing'])
        }
             // show the dialog
    }


news = [
    {
        title: 'إطلاق تطبيق جديد للتعليم',
        date: '15 ديسمبر 2024',
        content: 'تم إطلاق تطبيق مبتكر يهدف إلى تحسين تجربة التعليم الإلكتروني وتوفير أدوات تفاعلية.'
    },
    {
        title: 'مسابقة الابتكار السنوية',
        date: '10 ديسمبر 2024',
        content: 'أقيمت مسابقة الابتكار بمشاركة العديد من الأفكار المميزة التي تسهم في تطوير المجتمع.'
    },
    {
        title: 'شراكة جديدة بين الشركات التقنية',
        date: '5 ديسمبر 2024',
        content: 'تم الإعلان عن شراكة استراتيجية تهدف إلى تعزيز الحلول التكنولوجية المبتكرة.'
    }
];




}
