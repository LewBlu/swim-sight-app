import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', component: ActivityComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
