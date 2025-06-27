import React from 'react';
import { Users, Repeat, DollarSign, User } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import StatCard from '@/components/StatCard';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Placeholder data for recent customers
const recentCustomers = [
  {
    id: "cus_1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "https://i.pravatar.cc/150?u=olivia",
    type: "Returning" as "New" | "Returning",
    ltv: "$1,999.00",
  },
  {
    id: "cus_2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "https://i.pravatar.cc/150?u=jackson",
    type: "New" as "New" | "Returning",
    ltv: "$250.00",
  },
  {
    id: "cus_3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "https://i.pravatar.cc/150?u=isabella",
    type: "Returning" as "New" | "Returning",
    ltv: "$1,250.50",
  },
  {
    id: "cus_4",
    name: "William Kim",
    email: "will@email.com",
    avatar: "https://i.pravatar.cc/150?u=will",
    type: "New" as "New" | "Returning",
    ltv: "$150.00",
  },
  {
    id: "cus_5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatar: "https://i.pravatar.cc/150?u=sofia",
    type: "Returning" as "New" | "Returning",
    ltv: "$39.00",
  },
];

const CustomerInsights = () => {
  console.log('CustomerInsights page loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 space-y-6">
          <header>
            <h1 className="text-2xl font-bold tracking-tight">Customer Insights</h1>
            <p className="text-muted-foreground">Analysis of your customer base and their lifetime value.</p>
          </header>

          {/* Stat Cards Section */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="New Customers"
              value="1,284"
              trend="+15.2% this month"
              icon={<Users />}
              trendDirection="up"
            />
            <StatCard
              title="Returning Customers"
              value="5,621"
              trend="+5.1% this month"
              icon={<Repeat />}
              trendDirection="up"
            />
            <StatCard
              title="Avg. Customer Lifetime Value"
              value="$874.50"
              trend="-1.5% this month"
              icon={<DollarSign />}
              trendDirection="down"
            />
          </section>

          {/* Recent Customers Table Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Recent Customers</CardTitle>
                <CardDescription>
                  A list of your most recent customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden sm:table-cell">Type</TableHead>
                      <TableHead className="hidden md:table-cell">Email</TableHead>
                      <TableHead className="text-right">Lifetime Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentCustomers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                              <AvatarImage src={customer.avatar} alt="Avatar" />
                              <AvatarFallback>
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{customer.name}</div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge variant={customer.type === 'New' ? 'secondary' : 'default'}>
                            {customer.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                        <TableCell className="text-right">{customer.ltv}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerInsights;