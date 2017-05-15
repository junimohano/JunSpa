import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import {
    InputTextModule, ButtonModule, FieldsetModule, PaginatorModule
    , AutoCompleteModule, TooltipModule, DialogModule, ChartModule
    , GalleriaModule, DropdownModule, DataTableModule, SharedModule
    , PanelModule, GrowlModule, InputTextareaModule
} from 'primeng/primeng';

// i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Auth0
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Auth } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

// Firebase
import { AngularFireModule } from 'angularfire2/angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
    // return new TranslateHttpLoader(http, 'i18n/', '.json');
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'id_token',
    }), http, options);
}

export const firebaseConfig = {
    apiKey: 'AIzaSyD_2FmIZSrWimQAdOIpfqmWEYMIVHYJUdE',
    authDomain: 'junspa-552a5.firebaseapp.com',
    databaseURL: 'https://junspa-552a5.firebaseio.com',
    storageBucket: 'junspa-552a5.appspot.com',
    messagingSenderId: '63810240176'
};

const modules = [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    // NGPrime
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
    DataTableModule,
    SharedModule,
    PanelModule,
    GrowlModule,
    InputTextareaModule
];

@NgModule({
    imports: [
        modules,
        // i18n
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        // Firebase
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    exports: [
        modules,
        // i18n
        TranslateModule,
        // Firebase
        AngularFireModule,
        AngularFireDatabaseModule
    ],
    declarations: [],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        Auth,
        AuthGuard
    ]
})
export class SharedAppModule { }
