import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export function QuickStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Goal</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$18,500</div>
          <p className="text-xs text-muted-foreground mb-3">
            of $25,000 target
          </p>
          <Progress value={74} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            74% complete • 8 days remaining
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Quick Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-success" />
            <div className="flex-1">
              <p className="text-sm">Invoices Paid</p>
              <p className="text-xs text-muted-foreground">12 this month</p>
            </div>
            <span className="text-sm font-medium">$14,250</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-warning" />
            <div className="flex-1">
              <p className="text-sm">Pending Invoices</p>
              <p className="text-xs text-muted-foreground">5 outstanding</p>
            </div>
            <span className="text-sm font-medium">$6,800</span>
          </div>
          
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <div className="flex-1">
              <p className="text-sm">Overdue</p>
              <p className="text-xs text-muted-foreground">2 invoices</p>
            </div>
            <span className="text-sm font-medium">$1,200</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}