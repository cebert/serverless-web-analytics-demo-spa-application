import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";

@Component({
   selector: 'app-home',
   standalone: true,
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   imports: [CommonModule, MatCardModule],
})
export class HomeComponent {
   constructor(private router: Router) {}
}
