import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from '../pages/login/login';
import { IndexPage } from '../pages/index/index';
import { kpiPage } from '../pages/kpi/kpi';
import { monitorPage } from '../pages/monitor/monitor';
import { HomePage } from '../pages/home/home';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'index', component: IndexPage },
  { path: 'kpi', component: kpiPage },
  { path: 'monitor', component: monitorPage }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}