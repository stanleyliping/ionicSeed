import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { AppRoutingModule } from './app-routing.module';
import { MyApp } from './app.component';
platformBrowserDynamic().bootstrapModule(AppModule);
