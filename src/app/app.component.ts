import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   title = 'Serverless Website Analytics Demo';

   constructor(
      private router: Router,
      private analyticsService: AnalyticsService,
   ) {}

   ngOnInit(): void {
      // Track the initial page load
      this.analyticsService.trackPageChange(this.router.url);

      // Track subsequent route changes
      this.router.events.subscribe((event) => {
         if (event instanceof NavigationEnd) {
            this.analyticsService.trackPageChange(event.urlAfterRedirects);
         }
      });
   }
}
