import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
   selector: 'app-about',
   standalone: true,
   templateUrl: './about.component.html',
   styleUrl: './about.component.css',
   imports: [CommonModule, MatCardModule],
})
export class AboutComponent {
   constructor(private router: Router) {}
}
