"use client";
// src/app/(dashboard)/page.tsx
import { Activity, CreditCard, DollarSign, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ForecastAreaChart } from "@/components/dashboard/AreaChart";
import { AnalyticsRadarChart } from "@/components/dashboard/RadarChart";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  // Simulate real-time data for demo
  const [metrics, setMetrics] = useState({
    revenue: 45231.89,
    subscriptions: 2350,
    sales: 12234,
    active: 573,
    revenueTrend: "+20.1%",
    subscriptionsTrend: "+180.1%",
    salesTrend: "+19%",
    activeTrend: "+201",
    revenueSpark: [42000, 43000, 44000, 45000, 45231],
    subscriptionsSpark: [2000, 2100, 2200, 2300, 2350],
    salesSpark: [11000, 11500, 12000, 12100, 12234],
    activeSpark: [400, 500, 550, 570, 573],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        revenue: prev.revenue + Math.random() * 100 - 50,
        subscriptions: prev.subscriptions + Math.floor(Math.random() * 10 - 5),
        sales: prev.sales + Math.floor(Math.random() * 20 - 10),
        active: prev.active + Math.floor(Math.random() * 10 - 5),
        revenueSpark: [...prev.revenueSpark.slice(1), prev.revenue],
        subscriptionsSpark: [...prev.subscriptionsSpark.slice(1), prev.subscriptions],
        salesSpark: [...prev.salesSpark.slice(1), prev.sales],
        activeSpark: [...prev.activeSpark.slice(1), prev.active],
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          value={metrics.revenue}
          trend={metrics.revenueTrend}
          sparklineData={metrics.revenueSpark}
          trendLabel="from last month"
        />
        <MetricCard
          title="Subscriptions"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          value={metrics.subscriptions}
          trend={metrics.subscriptionsTrend}
          sparklineData={metrics.subscriptionsSpark}
          trendLabel="from last month"
        />
        <MetricCard
          title="Sales"
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
          value={metrics.sales}
          trend={metrics.salesTrend}
          sparklineData={metrics.salesSpark}
          trendLabel="from last month"
        />
        <MetricCard
          title="Active Now"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          value={metrics.active}
          trend={metrics.activeTrend}
          sparklineData={metrics.activeSpark}
          trendLabel="since last hour"
        />
      </div>
      {/* AI Smart Insights Card */}
      <div className="my-6">
        <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-0 shadow-none">
          <CardHeader className="flex flex-row items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <CardTitle>AI Smart Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <strong>Revenue is trending up</strong> this month. Subscriptions have increased by <span className="text-green-600 font-semibold">180%</span> compared to last month. <br />
              <span className="text-indigo-600 font-semibold">AI Suggestion:</span> Consider launching a new campaign to capitalize on this growth!
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Forecast (Area Chart)</CardTitle>
            <CardDescription>Revenue forecast vs. actuals.</CardDescription>
          </CardHeader>
          <CardContent>
            <ForecastAreaChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Performance Radar</CardTitle>
            <CardDescription>Multi-metric comparison.</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsRadarChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </>
  );
}