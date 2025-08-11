// Analytics and Performance Monitoring
// Add your preferred analytics service here (Google Analytics, Plausible, etc.)

export class Analytics {
  static init(): void {
    // TODO: Initialize your analytics service
    // Example: Google Analytics 4
    // gtag('config', 'GA_MEASUREMENT_ID');
    
    console.log('Analytics initialized');
  }

  static trackPageView(page: string): void {
    // TODO: Track page views
    console.log(`Page view: ${page}`);
  }

  static trackEvent(eventName: string, parameters?: Record<string, any>): void {
    // TODO: Track custom events
    console.log(`Event: ${eventName}`, parameters);
  }

  static trackContactFormSubmission(service: string): void {
    this.trackEvent('contact_form_submission', {
      service_type: service,
      page: 'contact'
    });
  }

  static trackPortfolioFilter(filter: string): void {
    this.trackEvent('portfolio_filter', {
      filter_type: filter,
      page: 'portfolio'
    });
  }
}

// Performance monitoring
export class Performance {
  static init(): void {
    if ('performance' in window) {
      // Track Core Web Vitals
      this.trackCoreWebVitals();
    }
  }

  private static trackCoreWebVitals(): void {
    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('LCP:', entry.startTime);
        Analytics.trackEvent('core_web_vital', {
          metric: 'LCP',
          value: entry.startTime
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID) - simplified for TypeScript compatibility
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        console.log('FID:', fid);
        Analytics.trackEvent('core_web_vital', {
          metric: 'FID',
          value: fid
        });
      }
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS) - simplified for TypeScript compatibility
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const entryData = entry as any;
        if (!entryData.hadRecentInput) {
          clsValue += entryData.value;
        }
      }
      console.log('CLS:', clsValue);
      Analytics.trackEvent('core_web_vital', {
        metric: 'CLS',
        value: clsValue
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
}
