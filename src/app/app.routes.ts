import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {   path:"dashboard",
        component: DashboardComponent
    }
];
