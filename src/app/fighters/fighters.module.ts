import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from '../shared/shared-app.module'

import { FightersRoutingModule } from 'app/fighters/fighters-routing.module';

import { FightersComponent } from './fighters.component';
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';

import { FighterFilterPipe } from './shared/fighter-filter.pipe';
import { FighterService } from './shared/fighter.service';

@NgModule({
    imports: [
        CommonModule,
        SharedAppModule,
        FightersRoutingModule
    ],
    declarations: [
        FightersComponent,
        FighterDetailComponent,
        FighterFilterPipe
    ],
    providers: [
        FighterService
    ],
    exports: [
        // FightersComponent
    ]
})
export class FightersModule { }
