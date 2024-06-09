import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page, can redirect to home or a 404 component
];
