import * as swaClient from "serverless-website-analytics-client";
import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
   providedIn: 'root',
})

/**
 * 
 */
export class AnalyticsService {
   private static initialized = false;

   constructor(@Inject(PLATFORM_ID) private platformId: object) {
      this.initializeAnalytics();
   }

   private initializeAnalytics(): void {
      if (isPlatformBrowser(this.platformId) && !AnalyticsService.initialized) {
         swaClient.v1.analyticsPageInit({
            inBrowser: true,
            site: 'aws-midwest-community-day',
            apiUrl: 'https://web-analytics.ebertlabs.com',
         });
         AnalyticsService.initialized = true;
         console.log('Initialized analytics');
      }
   }

   trackPageChange(newRoute: string): void {
      if (isPlatformBrowser(this.platformId)) {
         swaClient.v1.analyticsPageChange(newRoute);
      }
   }

   trackEvent(eventName: string, value: number, category: string): void {
      if (isPlatformBrowser(this.platformId)) {
         swaClient.v1.analyticsTrack(eventName, value, category);
      }
   }
}
