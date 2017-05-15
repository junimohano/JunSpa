import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctagonGirlDetailComponent } from './octagon-girl-detail/octagon-girl-detail.component';
import { OctagonGirlsComponent } from './octagon-girls.component';

const routes: Routes = [
    {
        path: '', component: OctagonGirlsComponent,
        children: [
            { path: 'detail', component: OctagonGirlDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OctagonGirlsRoutingModule { }
