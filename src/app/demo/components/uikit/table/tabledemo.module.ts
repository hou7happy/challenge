import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabledemoRoutingModule } from './tabledemo-routing.module';
import { TabledemoComponent } from './tabledemo.component';

/* PrimeNG Modules */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [
        TabledemoComponent
    ],
    imports: [
        CommonModule,
        TabledemoRoutingModule,
        FormsModule,
        TableModule,
        ButtonModule,
        ToastModule,
        RatingModule,
        DropdownModule,
        InputTextareaModule,
        FormsModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        InputTextareaModule,
        ToastModule
    ]
})
export class TabledemoModule { }
