import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';
import { FightersComponent } from './fighters.component';

const routes: Routes = [
    {
        path: '', component: FightersComponent,
        children: [
            { path: 'detail', component: FighterDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FightersRoutingModule { }
