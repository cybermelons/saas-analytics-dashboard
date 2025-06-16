# TechGear Pro Analytics Dashboard Documentation

## Overview

TechGear Pro is a modern, real-time analytics dashboard designed for electronics retailers. It provides comprehensive insights into revenue, inventory, customer behavior, and sales performance with a polished, professional interface.

## Key Features

### 📊 Real-Time Analytics
- **Live Order Feed**: Real-time order updates with animations
- **Animated Metrics**: Smooth transitions for key performance indicators
- **Auto-Refreshing Data**: Simulated real-time events for demo purposes

### 🎨 Modern Design
- **Dark Mode**: Full theme support with system preference detection
- **Gradient System**: Modern gradient backgrounds and effects
- **Glassmorphism**: Trendy glass effects on key components
- **Micro-interactions**: Smooth hover effects and transitions

### 📱 Responsive Design
- Mobile-optimized layout
- Collapsible sidebar navigation
- Touch-friendly interface elements

### 📈 Analytics Modules
1. **Revenue Analytics**: Track sales performance and trends
2. **Customer Analytics**: Segment analysis and lifetime value
3. **Inventory Management**: Stock levels and reorder alerts
4. **Performance Metrics**: Conversion rates and channel performance

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Shadcn/ui
- **Charts**: Recharts
- **State Management**: Zustand
- **Theme Management**: next-themes
- **Package Manager**: pnpm

## Project Structure

```
saas-dashboard/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── charts/            # Chart example pages
│   ├── customers/         # Customer analytics
│   ├── inventory/         # Inventory management
│   ├── revenue/           # Revenue analytics
│   └── layout.tsx         # Root layout with theme provider
├── components/            
│   ├── ui/                # Reusable UI components
│   ├── charts/            # Chart components
│   ├── animated-metric-card.tsx
│   ├── dashboard-layout.tsx
│   ├── live-order-feed.tsx
│   └── theme-toggle.tsx
├── lib/                   # Utility functions
│   ├── ecommerce-data-generator.ts
│   ├── realtime-simulator.ts
│   └── utils.ts
├── store/                 # Zustand store
│   └── ecommerce-store.ts
└── types/                 # TypeScript types
    └── ecommerce.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/cybermelons/saas-analytics-dashboard.git
cd saas-analytics-dashboard

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Environment Variables

Create a `.env.local` file:

```env
# Optional - for production features
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## Features in Detail

### 1. Dashboard Overview (`/`)
- Key metrics with animated counters
- Revenue trend chart
- Top products list
- Live order feed

### 2. Revenue Analytics (`/revenue`)
- Daily revenue trends
- Channel performance comparison
- Growth rate calculations
- Average order value tracking

### 3. Customer Analytics (`/customers`)
- Customer segmentation pie chart
- Top customers by lifetime value
- Retention metrics
- New vs returning customers

### 4. Inventory Management (`/inventory`)
- Stock level monitoring
- Low stock alerts
- Category-wise inventory value
- Reorder point indicators

### 5. Chart Examples (`/charts/*`)
- Bar charts
- Line charts
- Pie charts
- Sample implementations

## Customization

### Theming

The dashboard supports light and dark modes. Customize colors in `app/globals.css`:

```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... other color variables */
}

.dark {
  --primary: 0 0% 98%;
  --secondary: 240 3.7% 15.9%;
  /* ... dark mode colors */
}
```

### Gradients

Custom gradient utilities in `app/globals.css`:

```css
.gradient-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
}
```

### Data Customization

Modify demo data generation in `lib/ecommerce-data-generator.ts`:
- Product categories
- Customer segments
- Price ranges
- Geographic regions

## Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading**: Skeleton screens for better UX
- **Caching**: Browser-based localStorage for demo data

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy with default settings

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## API Integration (Future)

The dashboard is designed to integrate with:
- Stripe for payment data
- Shopify for e-commerce metrics
- Google Analytics for traffic data
- Custom REST/GraphQL APIs

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `pnpm install`
2. **Theme Not Working**: Check ThemeProvider is wrapping the app
3. **Data Not Loading**: Clear localStorage and refresh
4. **Charts Not Rendering**: Verify Recharts components are client-side

### Reset Demo Data

Click the "Reset Demo Data" button in the dashboard header to regenerate sample data.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is available for portfolio demonstration purposes.