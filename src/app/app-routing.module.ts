import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileRoutes } from './profile/profile.routes';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'boards', loadChildren: './boards/boards.module#BoardsModule' },
    { path: 'fighters', loadChildren: './fighters/fighters.module#FightersModule' },
    { path: 'octagonGirls', loadChildren: './octagon-girls/octagon-girls.module#OctagonGirlsModule' },
    ...ProfileRoutes,
    { path: '**', redirectTo: '' }
    // {
    //     path: '',
    //     loadChildren: './layout/layout.module#LayoutModule',
    //     canActivate: [AuthGuard]
    // },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
