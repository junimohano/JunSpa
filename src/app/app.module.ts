import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedAppModule } from './shared/shared-app.module'
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/counter';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileShowComponent } from './profile/profile-show.component';
import { ProfileEditComponent } from './profile/profile-edit.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    ProfileShowComponent,
    ProfileEditComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedAppModule,
    AppRoutingModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
