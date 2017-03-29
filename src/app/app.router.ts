import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FighterComponent } from './fighter/fighter.component';
import { OctagonGirlComponent } from './octagon-girl/octagon-girl.component';

import { ProfileRoutes } from './profile/profile.routes';
import { AuthGuard } from './shared/auth/auth.guard';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'fighter', component: FighterComponent, canActivate: [AuthGuard] },
    { path: 'octagonGirl', component: OctagonGirlComponent, canActivate: [AuthGuard] },
    ...ProfileRoutes,
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
