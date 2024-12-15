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
    constructor() {
    }
    // The array of all projects (mock data).
    projects: Project[] = [];

    // For row expansion: track which rows are expanded
    expandedRows: { [s: string]: boolean } = {};

    // A boolean to track expand/collapse all
    isExpanded: boolean = false;

    // Region filter
    regions = [
        { label: 'Toutes les régions', value: null },
        { label: 'Tunis', value: 'Tunis' },
        { label: 'Sfax', value: 'Sfax' },
        { label: 'Sousse', value: 'Sousse' },
        { label: 'Nabeul', value: 'Nabeul' },
    ];
    selectedRegion: string | null = null;

    // For new comments in the row expansion
    newCommentText: string = ''; // <-- ADDED

    ngOnInit(): void {
        // Mock some projects. (Replace with real API calls.)
        this.projects = [
            {
                id: 1,
                name: 'Project 1',
                title: 'Solar Panels Installation',
                status: 'In Progress',
                description: 'Installing solar panels for local community center.',
                start_date: new Date('2024-01-10'),
                end_date: new Date('2024-05-20'),
                region: 'Tunis',
                comments: []
            },
            {
                id: 2,
                name: 'Project 2',
                title: 'Renovation of Youth Center',
                status: 'Pending',
                description: 'Renovating the main hall, painting, and re-roofing.',
                start_date: new Date('2024-03-01'),
                end_date: new Date('2024-09-15'),
                region: 'Sfax',
                comments: []
            },
            {
                id: 3,
                name: 'Project 3',
                title: 'Clean Beach Campaign',
                status: 'Completed',
                description: 'Organizing weekly beach cleanups in Sousse.',
                start_date: new Date('2023-09-01'),
                end_date: new Date('2023-12-01'),
                region: 'Sousse',
                comments: []
            },
        ];
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
        if (!this.selectedRegion) {
            return this.projects;
        }
        return this.projects.filter(p => p.region === this.selectedRegion);
    }

    // Handle adding a new comment
    addComment(project: Project, newComment: string) {
        if (!newComment.trim()) return;
        project.comments = project.comments || [];
        project.comments.push(newComment.trim());
    }
}
