import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}
