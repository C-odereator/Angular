import { Component } from '@angular/core';
import { CommonComponent } from "../common/common.component";
import { ParentCardComponent } from "./parent-card/parent-card.component";

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [CommonComponent, ParentCardComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
  common = {
      path : "https://static.wixstatic.com/media/2feeec_0fba96eb3f9a442496caba5403a9f1ea~mv2.jpg/v1/fill/w_547,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_0fba96eb3f9a442496caba5403a9f1ea~mv2.jpg",
      h1 : "For the",
      h2  : "Parents",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }
}
