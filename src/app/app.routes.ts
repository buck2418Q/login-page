import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { Login2Component } from './login2/login2.component';
import { Dropdown } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'user',component:UserComponent},
    {path:"login2", component:Login2Component},
    {path:"drop",component:DropdownComponent}
];
