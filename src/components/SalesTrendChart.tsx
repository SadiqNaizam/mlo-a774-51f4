import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Define the shape of the data points we expect for the chart
interface SalesDataPoint {
  name: string; // e.g., "Jan", "Feb", "Mar" or a specific date
  sales: number;
}

// Define the props for our component
interface SalesTrendChartProps {
  data: SalesDataPoint[];
  title?: string;
  description?: string;
}

// A custom tooltip component for a richer hover experience
const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground text-sm">{label}</span>
            <span className="font-bold">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(payload[0].value as number)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};


const SalesTrendChart: React.FC<SalesTrendChartProps> = ({ 
  data,
  title = "Sales Trend",
  description = "A visual representation of sales performance over the selected period."
}) => {
  console.log('SalesTrendChart loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="name"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${Number(value) / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', stroke: 'hsl(var(--accent-foreground))' }}
                content={<CustomTooltip />}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--primary-foreground))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesTrendChart;