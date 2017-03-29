import { Routes } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileShowComponent } from './profile-show.component';
import { ProfileComponent } from './profile.component';

export const ProfileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'edit', component: ProfileEditComponent },
      { path: '', component: ProfileShowComponent }
    ]
  }
];
