
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

////// { COMPONENTES }  //////////////////////
import { AppComponent }     from './app.component';
import { RelojesComponent } from './components/relojes/relojes.component';

import { AppRoutingModule } from './app-routing.module';
import { CalendarioComponent } from './components/calendario/calendario.component';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { WizardComponent } from './components/wizard/wizard.component'; // a plugin!
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

 
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  declarations: [
    AppComponent,
    RelojesComponent,
    CalendarioComponent,
    WizardComponent
  ], 
  //providers: [ Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
