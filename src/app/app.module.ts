import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { AppHelper } from './util/apphelper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { CommonFilterPipe } from './common/pipe/common.filter.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/** Evo 
 * - Components
 * - Services
 * - Models
 * - Handlers
 * **/ 

import { SessionService } from './evo/service/session/session.service';
import { SessionEventHandler } from './evo/handler/session/session.event.handler';
import { SessionConfiguration } from './evo/configuration/session/session.configuration';


@NgModule({
  declarations: [
    AppComponent,
    CommonFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule,
    NgbModule.forRoot(),
    FormsModule,
    LazyLoadImageModule
  ],
  providers: [
    AppHelper, 
    SessionService,
    SessionConfiguration
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    
]
})
export class AppModule { }
