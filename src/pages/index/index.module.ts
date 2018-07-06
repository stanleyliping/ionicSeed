import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, IonicPageModule} from 'ionic-angular';

import { IndexPage } from './index';

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage)
  ],
  entryComponents: [
    IndexPage,
  ],
})
export class IndexPageModule {}