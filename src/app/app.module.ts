import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth0
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Auth } from './shared/auth/auth.service';

// Firebase
import { AngularFireModule } from 'angularfire2';

// PrimeNG
import {
  InputTextModule, ButtonModule, FieldsetModule, PaginatorModule
  , AutoCompleteModule, TooltipModule, DialogModule, ChartModule
  , GalleriaModule, DropdownModule
} from 'primeng/primeng';

import { routes, appRoutingProviders } from './app.router';

import { ApiService } from './shared/services/api.service';
import { OctagonGirlFilterPipe } from './shared/filters/octagon-girl-filter.pipe';
import { FighterFilterPipe } from './shared/filters/fighter-filter.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileShowComponent } from './profile/profile-show.component';
import { ProfileEditComponent } from './profile/profile-edit.component';
import { FighterComponent } from './fighter/fighter.component';
import { OctagonGirlComponent } from './octagon-girl/octagon-girl.component';
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';
import { OctagonGirlDetailComponent } from './octagon-girl-detail/octagon-girl-detail.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyD_2FmIZSrWimQAdOIpfqmWEYMIVHYJUdE',
  authDomain: 'junspa-552a5.firebaseapp.com',
  databaseURL: 'https://junspa-552a5.firebaseio.com',
  storageBucket: 'junspa-552a5.appspot.com',
  messagingSenderId: '63810240176'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    ProfileShowComponent,
    ProfileEditComponent,
    FighterComponent,
    OctagonGirlComponent,
    OctagonGirlFilterPipe,
    FighterFilterPipe,
    FighterDetailComponent,
    OctagonGirlDetailComponent,
    HeaderComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes,

    InputTextModule,
    ButtonModule,
    FieldsetModule,
    PaginatorModule,
    AutoCompleteModule,
    TooltipModule,
    DialogModule,
    ChartModule,
    GalleriaModule,
    DropdownModule,

    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    Auth,
    appRoutingProviders,
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
