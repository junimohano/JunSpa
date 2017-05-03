import { Routes } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { BoardComponent } from './board.component';

import { AuthGuard } from '../shared/auth/auth.guard';

export const BoardRoutes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
    children: [
      { path: 'edit', component: BoardEditComponent },
      { path: '', component: BoardListComponent }
    ],
    canActivate: [AuthGuard]
  }
];
