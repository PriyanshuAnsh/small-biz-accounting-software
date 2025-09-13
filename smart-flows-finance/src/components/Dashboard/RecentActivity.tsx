import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText, Receipt, Plus } from "lucide-react";

const recentActivities = [
  {
    id: 1,
    type: "invoice",
    title: "Invoice #INV-001",
    client: "Acme Corp",
    amount: "$2,500.00",
    status: "paid",
    date: "2 hours ago"
  },
  {
    id: 2,
    type: "expense",
    title: "Office Supplies",
    vendor: "Staples",
    amount: "$125.50",
    status: "pending",
    date: "5 hours ago"
  },
  {
    id: 3,
    type: "invoice",
    title: "Invoice #INV-002",
    client: "TechStart Inc",
    amount: "$1,800.00",
    status: "overdue",
    date: "1 day ago"
  },
  {
    id: 4,
    type: "expense",
    title: "Software License",
    vendor: "Adobe",
    amount: "$52.99",
    status: "paid",
    date: "2 days ago"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-success/10 text-success border-success/20";
    case "overdue":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "pending":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest transactions and updates
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors">
              <div className="p-2 rounded-full bg-muted">
                {activity.type === "invoice" ? (
                  <FileText className="h-4 w-4" />
                ) : (
                  <Receipt className="h-4 w-4" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <Badge variant="outline" className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {activity.type === "invoice" ? activity.client : activity.vendor} • {activity.date}
                </p>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium">{activity.amount}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}