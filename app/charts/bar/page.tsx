import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomerGrowthChart } from "@/components/charts/customer-growth-chart"
import { ComposedChartDemo } from "@/components/charts/composed-chart-demo"

export default function BarChartPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bar Chart Examples</h1>
          <p className="text-muted-foreground">
            Various bar chart implementations for business metrics
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Growth Analysis</CardTitle>
              <CardDescription>Track new vs churned customers by month</CardDescription>
            </CardHeader>
            <CardContent>
              <CustomerGrowthChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue & Expenses Breakdown</CardTitle>
              <CardDescription>Combined view of revenue, expenses, and profit margin</CardDescription>
            </CardHeader>
            <CardContent>
              <ComposedChartDemo />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}