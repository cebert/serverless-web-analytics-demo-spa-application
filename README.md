# Serverless Web Analytics Demo SPA

This repository demonstrates how to use the [Serverless Website Analytics Client SDK](https://github.com/rehanvdm/serverless-website-analytics-client#usage) in an Angular Single Page Application (SPA) to ingest analytical events. The demo is designed for the AWS Midwest Community Day 2024 in Columbus, Ohio. An instance of SWA
was deployed using the code in the example [Serverless Website Analytics Deployment Demo](https://github.com/cebert/serverless-web-analytics-demo-deployment)

- You can view this simple SPA application on GitHub Pages [here](https://cebert.github.io/serverless-web-analytics-demo-spa-application/).
- You can view analytics for this SPA application (at least during the Community Day Event) at [here](https://web-analytics.ebertlabs.com/).

## Overview

The [Serverless Website Analytics Client SDK](https://github.com/rehanvdm/serverless-website-analytics-client#usage) allows developers to integrate website analytics into their applications without managing any infrastructure. This project showcases how to use the SDK in an Angular application to track and analyze user interactions.

## Features

- Track page views and user interactions
- Seamless integration with Angular Router for route change tracking
- Event tracking for custom user actions
- Integrates with Serverless Website Analytics

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- Angular CLI installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/serverless-web-analytics-demo-spa.git
   cd serverless-web-analytics-demo-spa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Open `src/app/services/analytics.service.ts` and update the configuration with your site details:
   ```typescript
   swaClient.v1.analyticsPageInit({
     inBrowser: true,
     site: 'aws-midwest-community-day',
     apiUrl: 'https://web-analytics.ebertlabs.com',
   });
   ```
- `site` should match the name of an allowed site for a deployed instance of [Serverless Website Analytics](https://github.com/rehanvdm/serverless-website-analytics)
- `apiUrl` should match to the base url for a deployed instance of [Serverless Website Analytics](https://github.com/rehanvdm/serverless-website-analytics)

### Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## Usage

The application automatically tracks page views and user interactions. You can add custom event tracking in your Angular components by injecting the `AnalyticsService` and calling the `trackEvent` method.

### Example

**src/app/some-component/some-component.component.ts**:
```typescript

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css'],
})
export class SomeComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(): void {
    this.analyticsService.trackEvent('event-name', 1, 'event-category');
  }
}
```

**src/app/some-component/some-component.component.html**:
```html
<button (click)="trackEvent()">Track Event</button>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. I do 
not plan on actively maintaining this sample SPA application after AWS Community Day 2024, so feel free to fork it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Serverless Website Analytics Client SDK](https://github.com/rehanvdm/serverless-website-analytics-client)
- [Serverless Website Analytics Backend](https://github.com/rehanvdm/serverless-website-analytics)

## Contact

For any inquiries or feedback, please contact [chris@chrisebert.net].
