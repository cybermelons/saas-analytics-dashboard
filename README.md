# TechGear Pro - E-commerce Analytics Dashboard

A real-time analytics dashboard for electronics retailers, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Real-time Analytics**: Live order tracking and inventory updates with animated metrics
- **Revenue Insights**: Track daily, weekly, and monthly revenue trends with interactive charts
- **Inventory Management**: Monitor stock levels, low inventory alerts, and reorder points
- **Customer Analytics**: Track customer acquisition, retention metrics, and purchase patterns
- **Product Performance**: Identify top-selling products and category trends
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Live Activity Feed**: Real-time order and inventory event notifications

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand with persistence
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/techgear-pro-dashboard.git
cd techgear-pro-dashboard

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🔧 Configuration

1. Copy `.env.example` to `.env.local`
2. Update the environment variables as needed

## 📊 Demo Data

The dashboard includes realistic demo data for:
- **200+ Customers** with purchase history and demographics
- **50+ Products** across categories (Smartphones, Laptops, Audio, Gaming, Accessories)
- **30 Days** of order history with realistic patterns
- **Real-time Events** simulating live order activity

## Project Structure

```
techgear-pro-dashboard/
├── app/                    # Next.js app directory
│   ├── inventory/         # Inventory management
│   ├── revenue/           # Revenue analytics
│   ├── customers/         # Customer insights
│   └── page.tsx           # Main dashboard
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── animated-*.tsx    # Animation components
│   └── dashboard-*.tsx   # Dashboard components
├── lib/                   # Utilities
│   ├── ecommerce-*.ts    # Data generation
│   └── realtime-*.ts     # Event simulation
├── store/                 # State management
│   └── ecommerce-store.ts
└── types/                 # TypeScript types
```

## 🎯 Use Cases

Perfect for:
- Electronics retailers looking to scale operations
- E-commerce managers needing real-time insights
- Business owners tracking multi-channel sales
- Teams monitoring inventory across locations

## 🚀 Deployment

The easiest way to deploy is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/techgear-pro-dashboard)

### Manual Deployment

```bash
# Build for production
pnpm build

# Test production build locally
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🎉 Credits

Built for Upwork portfolio demonstration showcasing modern e-commerce analytics capabilities.
