import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { QuizpageComponent } from './page/quizpage/quizpage.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {   path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "attemp-quiz",
        component: QuizpageComponent
    }
];
