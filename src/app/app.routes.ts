import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { QuizpageComponent } from './page/quizpage/quizpage.component';
import { AddwordComponent } from './page/addword/addword.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {   path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "dashboard/quiz",
        component: QuizpageComponent
    },
    {
        path: "dashboard/add",
        component: AddwordComponent
    }
];
