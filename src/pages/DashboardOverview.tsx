import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import StatCard from '@/components/StatCard';
import SalesTrendChart from '@/components/SalesTrendChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

// Placeholder data for the SalesTrendChart
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
  { name: 'Jul', sales: 7000 },
];

// Placeholder data for the recent orders table
const recentSales = [
    {
        invoice: "INV001",
        customer: "Liam Johnson",
        status: "Paid",
        date: "2024-07-20",
        amount: "$250.00",
    },
    {
        invoice: "INV002",
        customer: "Olivia Smith",
        status: "Pending",
        date: "2024-07-19",
        amount: "$150.00",
    },
    {
        invoice: "INV003",
        customer: "Noah Williams",
        status: "Paid",
        date: "2024-07-18",
        amount: "$350.00",
    },
    {
        invoice: "INV004",
        customer: "Emma Brown",
        status: "Unpaid",
        date: "2024-07-17",
        amount: "$450.00",
    },
    {
        invoice: "INV005",
        customer: "Ava Jones",
        status: "Paid",
        date: "2024-07-16",
        amount: "$550.00",
    },
];


const DashboardOverview = () => {
    console.log('Dashboard / Overview page loaded');

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Paid':
                return 'default'; // default is green-ish in many themes
            case 'Pending':
                return 'secondary'; // secondary is often gray
            case 'Unpaid':
                return 'destructive'; // destructive is red
            default:
                return 'outline';
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <LeftSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {/* KPI Stat Cards */}
                    <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <StatCard 
                            title="Total Revenue"
                            value="$45,231.89"
                            trend="+20.1% from last month"
                            trendDirection="up"
                            icon={<DollarSign />}
                        />
                        <StatCard 
                            title="Subscriptions"
                            value="+2350"
                            trend="+180.1% from last month"
                            trendDirection="up"
                            icon={<Users />}
                        />
                        <StatCard 
                            title="Sales"
                            value="+12,234"
                            trend="+19% from last month"
                            trendDirection="up"
                            icon={<CreditCard />}
                        />
                        <StatCard 
                            title="Active Now"
                            value="+573"
                            trend="+201 since last hour"
                            trendDirection="neutral"
                            icon={<Activity />}
                        />
                    </section>

                    {/* Charts and Recent Sales Table */}
                    <section className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="xl:col-span-2">
                           <SalesTrendChart 
                                data={salesData} 
                                title="Revenue Overview"
                                description="Showing total revenue over the last 7 months."
                           />
                        </div>
                        <div className="xl:col-span-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>You made 265 sales this month.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Customer</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {recentSales.map((sale) => (
                                                <TableRow key={sale.invoice}>
                                                    <TableCell>
                                                        <div className="font-medium">{sale.customer}</div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            {sale.invoice}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant={getStatusVariant(sale.status)}>{sale.status}</Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right">{sale.amount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardOverview;