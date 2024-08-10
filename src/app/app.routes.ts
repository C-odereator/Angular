import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path:'', component:MainComponent
    },
    {
        path:'About', component:AboutComponent
    },
    {
        path:'Admission', component:AdmissionComponent
    }
];

// About","Admission","Learning","News & Events","Parents"
