import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {
   common = {
      path : "https://static.wixstatic.com/media/2feeec_10bf81bc3e394f0d8daaaf5c62e15d6c~mv2.jpg/v1/fill/w_581,h_825,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_10bf81bc3e394f0d8daaaf5c62e15d6c~mv2.jpg",
      h1 : "Hacker",
      h2  : "Our School",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }
  
}
