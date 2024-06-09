import { Routes } from "@angular/router";
import { ButtonEventTrackingComponent } from "./button-event-tracking/button-event-tracking.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'event-tracking', component: ButtonEventTrackingComponent },
   { path: '**', redirectTo: '/home' },
];
