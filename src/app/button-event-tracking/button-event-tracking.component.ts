import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
   selector: 'app-button-event-tracking',
   standalone: true,
   templateUrl: './button-event-tracking.component.html',
   styleUrl: './button-event-tracking.component.css',
   imports: [CommonModule, MatCardModule],
})
export class ButtonEventTrackingComponent {
   constructor(
      private analyticsService: AnalyticsService,
      private router: Router,
   ) {}

   trackEvent(eventName: string) {
      this.analyticsService.trackEvent(eventName, 1, 'button-click');
      console.log(`Event ${eventName} tracked.`);
   }
}
