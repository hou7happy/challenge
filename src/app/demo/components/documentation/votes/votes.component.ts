import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";

@Component({
  selector: 'app-votes',
  standalone: true,
    imports: [
        ButtonModule,
        NgForOf,
        NgIf,
        RadioButtonModule
    ],
  templateUrl: './votes.component.html',
  styleUrl: './votes.component.scss'
})
export class VotesComponent {

}
