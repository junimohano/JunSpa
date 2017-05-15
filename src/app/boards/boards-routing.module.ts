import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from './boards.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

import { AuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: BoardsComponent,
    children: [
      { path: '', component: BoardListComponent },
      { path: 'detail', component: BoardDetailComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
