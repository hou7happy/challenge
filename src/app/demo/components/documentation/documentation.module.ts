import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import {CarouselModule} from "primeng/carousel";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../service/AuthService";

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        CarouselModule,
        RadioButtonModule,
        DropdownModule,
        DialogModule,
        ButtonModule,
        FormsModule
    ],
    declarations: [DocumentationComponent],
    providers: [AuthService]
})
export class DocumentationModule { }
