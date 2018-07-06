import { Component } from '@angular/core';

import { kpiPage } from '../kpi/kpi';
import { monitorPage } from '../monitor/monitor';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = kpiPage;
  tab3Root = monitorPage;

  constructor() {

  }
}
