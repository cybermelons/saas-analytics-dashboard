import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricsOverview } from "@/components/metrics-overview"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { CustomerGrowthChart } from "@/components/charts/customer-growth-chart"
import { ChurnRateChart } from "@/components/charts/churn-rate-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Monitor your key business metrics and performance indicators
          </p>
        </div>

        <MetricsOverview />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly recurring revenue over time</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Growth</CardTitle>
              <CardDescription>New vs churned customers</CardDescription>
            </CardHeader>
            <CardContent>
              <CustomerGrowthChart />
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Churn Rate</CardTitle>
              <CardDescription>Monthly churn percentage</CardDescription>
            </CardHeader>
            <CardContent>
              <ChurnRateChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}