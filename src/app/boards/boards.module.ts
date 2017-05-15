import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from '../shared/shared-app.module'

import { BoardsRoutingModule } from 'app/boards/boards-routing.module';

import { BoardService } from './shared/board.service';

import { BoardsComponent } from './boards.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAppModule,
    BoardsRoutingModule
  ],
  declarations: [
    BoardsComponent,
    BoardListComponent,
    BoardDetailComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    // BoardsComponent
  ]
})
export class BoardsModule { }
