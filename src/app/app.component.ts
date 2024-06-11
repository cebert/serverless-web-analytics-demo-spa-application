import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [
      RouterLink,
      RouterOutlet,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule,
   ],
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
