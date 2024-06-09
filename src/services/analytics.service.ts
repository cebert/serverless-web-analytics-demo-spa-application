import * as swaClient from "serverless-website-analytics-client";
import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
   providedIn: 'root',
})

/**
 * This is a singleton service that configures the serverless-website-analytics client to track page views and events.
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

   /**
   * Tracks a page change in the analytics client.
   * @param newRoute - The new route or URL to be tracked.
   */
   trackPageChange(newRoute: string): void {
      if (isPlatformBrowser(this.platformId)) {
         swaClient.v1.analyticsPageChange(newRoute);
      }
   }

   /**
   * Tracks a custom event in the analytics client.
   * @param eventName - The name of the event to be tracked.
   * @param value - The value associated with the event.
   * @param category - The category of the event.
   */
   trackEvent(eventName: string, value: number, category: string): void {
      if (isPlatformBrowser(this.platformId)) {
         swaClient.v1.analyticsTrack(eventName, value, category);
      }
   }
}
