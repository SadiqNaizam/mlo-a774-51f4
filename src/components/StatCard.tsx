import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Props for the StatCard component.
 * @param title - The main title of the statistic (e.g., "Total Revenue").
 * @param value - The primary value to display (e.g., "$45,231.89").
 * @param trend - The sub-text describing the trend (e.g., "+20.1% from last month").
 * @param icon - An optional React node, typically a lucide-react icon, to display in the header.
 * @param trendDirection - Determines the color of the trend text.
 */
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon?: React.ReactNode;
  trendDirection?: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  icon,
  trendDirection = 'neutral',
}) => {
  console.log('StatCard loaded for:', title);

  const getTrendColorClass = () => {
    switch (trendDirection) {
      case 'up':
        return 'text-emerald-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-4 w-4 text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${getTrendColorClass()}`}>
          {trend}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;