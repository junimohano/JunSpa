import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from '../shared/shared-app.module'

import { OctagonGirlsRoutingModule } from 'app/octagon-girls/octagon-girls-routing.module';

import { OctagonGirlFilterPipe } from './shared/octagon-girl-filter.pipe';
import { OctagonGirlService } from './shared/octagon-girl.service';

import { OctagonGirlsComponent } from './octagon-girls.component';
import { OctagonGirlDetailComponent } from './octagon-girl-detail/octagon-girl-detail.component';

@NgModule({
    imports: [
        CommonModule,
        SharedAppModule,
        OctagonGirlsRoutingModule
    ],
    declarations: [
        OctagonGirlsComponent,
        OctagonGirlDetailComponent,
        OctagonGirlFilterPipe
    ],
    providers: [
        OctagonGirlService
    ],
    exports: [
        // OctagonGirlsComponent
    ]
})
export class OctagonGirlsModule { }
