import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

interface Project {
    id: number;
    name: string | null;
    title: string | null;
    status: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    region?: string;       // region property
    comments?: string[];   // comments array
}



@Component({

    templateUrl: './tabledemo.component.html',
    providers:[MessageService]

})
export class TabledemoComponent implements OnInit {
    constructor(private messageService: MessageService) {
    }
    // The array of all projects (mock data).
    projects: Project[] = [];

    // For row expansion: track which rows are expanded
    expandedRows: { [s: string]: boolean } = {};

    // A boolean to track expand/collapse all
    isExpanded: boolean = false;

    // Region filter
    regions = [
        { label: 'كل الولايات', value: null },
        { label: 'تونس', value: 'تونس' },
        { label: 'صفاقس', value: 'صفاقس' },
        { label: 'سوسة', value: 'سوسة' },
        { label: 'نابل', value: 'نابل' },
    ];
    selectedRegion: any | null = null;

    // For new comments in the row expansion
    newCommentText: string = ''; // <-- ADDED

    ngOnInit(): void {
        // Mock Arabic projects for the Tunisian government
        this.projects = [
            {
                id: 1,
                name: 'مشروع ١',
                title: 'توسعة شبكة المياه الجوفية',
                status: 'قيد الإنجاز',
                description: 'العمل على حفر آبار جديدة وصيانة شبكة المياه الجوفية في مناطق داخلية.',
                start_date: new Date('2025-01-10'),
                end_date: new Date('2025-06-20'),
                region: 'تونس',
                comments: []
            },
            {
                id: 2,
                name: 'مشروع ٢',
                title: 'إعادة تأهيل الطرق الريفية',
                status: 'مخطط',
                description: 'تهيئة الطرق في المناطق الريفية لتسهيل التنقل وربطها بالمحاور الرئيسية.',
                start_date: new Date('2025-03-15'),
                end_date: new Date('2025-09-30'),
                region: 'سوسة',
                comments: []
            },
            {
                id: 3,
                name: 'مشروع ٣',
                title: 'تطوير مستشفى الأطفال',
                status: 'قيد الإنجاز',
                description: 'إضافة أجنحة جديدة وتحديث الأجهزة الطبية في مستشفى الأطفال بولاية صفاقس.',
                start_date: new Date('2025-04-01'),
                end_date: new Date('2025-11-15'),
                region: 'صفاقس',
                comments: []
            },
            {
                id: 4,
                name: 'مشروع ٤',
                title: 'إطلاق منصة رقمية للخدمات الإدارية',
                status: 'مكتمل',
                description: 'منصة إلكترونية لتسهيل المعاملات الحكومية وتبسيط الإجراءات للمواطنين.',
                start_date: new Date('2024-11-01'),
                end_date: new Date('2025-02-01'),
                region: 'نابل',
                comments: []
            },
        ];
    }
addComment(project: Project, newComment: string) {
    if (!newComment.trim()) {
        return; // Do nothing for empty input
    }
    project.comments = project.comments || [];
    project.comments.push(newComment.trim());

    // Optional: Show a toast notification for success
    this.messageService.add({ severity: 'success', summary: 'تمت الإضافة', detail: 'تم إضافة التعليق بنجاح!' });

    // Clear the input
    this.newCommentText = '';
}

    // Expand or collapse all rows
    expandAll() {
        if (!this.isExpanded) {
            // Expand all
            this.projects.forEach(p => {
                // Fallback to p.name or p.id as the dataKey
                this.expandedRows[p.name || ''] = true;
            });
        } else {
            // Collapse all
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    // Region filter
    get filteredProjects(): Project[] {
        if (!this.selectedRegion?.value) {
            return this.projects;
        }
        return this.projects.filter(p => p.region === this.selectedRegion.value);
    }

    // Handle adding a new comment
    shareProject(project: Project) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(` إليك مشروع: ${project.title} - ${project.description}`);
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;

        // Open the Facebook share link in a new window
        window.open(facebookUrl, '_blank');
    }

}
