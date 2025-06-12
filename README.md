# SaaS Analytics Dashboard

A modern, responsive analytics dashboard for SaaS businesses built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📊 **7+ Interactive Chart Types** - Line, Bar, Area, Pie, Radar, Scatter, and Composed charts
- 📈 **Key SaaS Metrics** - MRR, CAC, LTV, and Churn Rate tracking
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 📤 **Export Functionality** - Download reports as CSV or PDF
- 🚀 **High Performance** - Optimized React components with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Export**: jsPDF + PapaParse
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd saas-dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
saas-dashboard/
├── app/                    # Next.js app directory
│   ├── charts/            # Chart demo pages
│   ├── reports/           # Export functionality
│   └── page.tsx           # Main dashboard
├── components/            # React components
│   ├── charts/           # Chart components
│   ├── ui/               # shadcn/ui components
│   └── dashboard-layout.tsx
├── lib/                   # Utilities
│   ├── export-utils.ts   # CSV export
│   └── pdf-utils.ts      # PDF generation
└── public/               # Static assets
```

## Key Features Breakdown

### Dashboard Overview
- Real-time metrics display
- Revenue trends visualization
- Customer growth tracking
- Churn rate monitoring

### Chart Types
1. **Line Chart** - Revenue trends over time
2. **Bar Chart** - Customer acquisition vs churn
3. **Area Chart** - Churn rate visualization
4. **Pie Chart** - Customer distribution by plan
5. **Radar Chart** - Performance metrics overview
6. **Scatter Plot** - CAC vs LTV analysis
7. **Composed Chart** - Revenue, expenses, and margin

### Export Capabilities
- CSV export for spreadsheet analysis
- PDF reports with formatted tables
- Customizable report generation

## Deployment

This project is optimized for deployment on Vercel:

```bash
pnpm build
```

## License

MIT

## Author

Built for Upwork portfolio demonstration
