import { Component } from '@angular/core';
import { MainComponentComponent } from '../main-component/main-component.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainComponentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  school = "Stanford Elementary"
}
