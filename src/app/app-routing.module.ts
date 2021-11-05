import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';

//// COMPONENTES
import { RelojesComponent } from './components/relojes/relojes.component';
import { WizardComponent } from './components/wizard/wizard.component';


const routes: Routes = [
    
    //{ path: '**',  redirectTo: '/relojes' , pathMatch: 'full'  }, 
    { path: 'relojes', component: RelojesComponent },
    { path: 'calendario', component: CalendarioComponent },
    { path: 'wizard', component: WizardComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }