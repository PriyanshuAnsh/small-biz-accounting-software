import { MetricCard } from "@/components/Dashboard/MetricCard";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { QuickStats } from "@/components/Dashboard/QuickStats";
import { DollarSign, TrendingUp, FileText, Receipt } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          changeType="positive"
          icon={DollarSign}
          description="All time"
        />
        <MetricCard
          title="Monthly Profit"
          value="$12,234.56"
          change="+15.3% from last month"
          changeType="positive"
          icon={TrendingUp}
          description="This month"
        />
        <MetricCard
          title="Outstanding Invoices"
          value="$8,125.00"
          change="5 pending"
          changeType="neutral"
          icon={FileText}
          description="Awaiting payment"
        />
        <MetricCard
          title="Monthly Expenses"
          value="$3,456.78"
          change="+8.2% from last month"
          changeType="negative"
          icon={Receipt}
          description="This month"
        />
      </div>

      <QuickStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="space-y-6">
          {/* Additional widgets can go here */}
        </div>
      </div>
    </div>
  );
}