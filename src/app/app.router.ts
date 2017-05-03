import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FighterComponent } from './fighter/fighter.component';
import { OctagonGirlComponent } from './octagon-girl/octagon-girl.component';

import { ProfileRoutes } from './profile/profile.routes';
import { BoardRoutes } from './board/board.routes';

import { AuthGuard } from './shared/auth/auth.guard';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'fighter', component: FighterComponent },
    { path: 'octagonGirl', component: OctagonGirlComponent },
    ...ProfileRoutes,
    ...BoardRoutes,
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
