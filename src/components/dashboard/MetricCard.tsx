import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnimatedNumber } from "@/hooks/use-animated-number";
import { Sparkline } from "./Sparkline";
import { ReactNode } from "react";

interface MetricCardProps {
    title: string;
    icon: ReactNode;
    value: number;
    trend: string;
    trendColor?: string;
    sparklineData: number[];
    trendLabel: string;
}

export function MetricCard({
    title,
    icon,
    value,
    trend,
    trendColor = "text-green-600",
    sparklineData,
    trendLabel,
}: MetricCardProps) {
    const animatedValue = useAnimatedNumber(value);
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">{title} {icon}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-end gap-2">
                    <div className="text-2xl font-bold">{animatedValue.toLocaleString()}</div>
                    <span className={`text-xs font-semibold ${trendColor}`}>{trend}</span>
                </div>
                <div className="h-8 mt-1">
                    <Sparkline data={sparklineData} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{trendLabel}</p>
            </CardContent>
        </Card>
    );
}
