import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { IonicApp,IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from '../pages/login/login';
import { IndexPage } from '../pages/index/index';
import { kpiPage } from '../pages/kpi/kpi';
import { monitorPage } from '../pages/monitor/monitor';


import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../service/app.wapAuthservice';
import { commonService } from '../service/app.commonService';
import {WapSettings} from '../app/resource';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRoutingModule }     from './app-routing.module';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginPage },
//   { path: 'index', component: IndexPage },
//   { path: 'heroes', component: AboutPage }
// ];
@NgModule({
  declarations: [
    MyApp,
    kpiPage,
    monitorPage,
    // HomePage,
    LoginPage,
    TabsPage,
    AuthService,
    commonService,
    WapSettings,
    IndexPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  exports: [RouterModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    kpiPage,
    monitorPage,
    // HomePage,
    LoginPage,
    IndexPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    AuthService,
    commonService,
    WapSettings,
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Http
  ]
})
export class AppModule {}
