import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ButtonEventTrackingComponent } from './button-event-tracking/button-event-tracking.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'event-tracking', component: ButtonEventTrackingComponent },
   { path: 'about', component: AboutComponent },
   { path: '**', redirectTo: '' },
];
