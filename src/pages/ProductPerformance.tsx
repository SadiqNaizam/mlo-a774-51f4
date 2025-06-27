import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Define the type for a product
type Product = {
  id: string;
  name: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  price: number;
  revenue: number;
  unitsSold: number;
  stock: number;
};

// Sample product data
const productData: Product[] = [
  { id: "p001", name: "Classic Cotton T-Shirt", status: "In Stock", price: 25.00, revenue: 12500, unitsSold: 500, stock: 1500 },
  { id: "p002", name: "Premium Leather Wallet", status: "In Stock", price: 75.00, revenue: 22500, unitsSold: 300, stock: 200 },
  { id: "p003", name: "Wireless Bluetooth Headphones", status: "Low Stock", price: 120.00, revenue: 14400, unitsSold: 120, stock: 45 },
  { id: "p004", name: "Stainless Steel Water Bottle", status: "Out of Stock", price: 30.00, revenue: 6000, unitsSold: 200, stock: 0 },
  { id: "p005", name: "Organic Green Tea", status: "In Stock", price: 15.00, revenue: 3000, unitsSold: 200, stock: 800 },
  { id: "p006", name: "Yoga Mat Pro", status: "Low Stock", price: 50.00, revenue: 2500, unitsSold: 50, stock: 20 },
  { id: "p007", name: "Ergonomic Office Chair", status: "In Stock", price: 350.00, revenue: 35000, unitsSold: 100, stock: 50 },
  { id: "p008", name: "Scented Soy Candle", status: "In Stock", price: 20.00, revenue: 4000, unitsSold: 200, stock: 300 },
];

const ProductPerformance = () => {
  console.log('ProductPerformance page loaded');
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedByRevenue = useMemo(() => {
    return [...productData].sort((a, b) => b.revenue - a.revenue);
  }, []);

  const topPerformers = sortedByRevenue.slice(0, 3);
  const underperformers = sortedByRevenue.slice(-3).reverse();
  
  const getBadgeVariant = (status: Product['status']) => {
    switch (status) {
      case "In Stock":
        return "default";
      case "Low Stock":
        return "secondary";
      case "Out of Stock":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Top Performers</CardDescription>
                  <CardTitle className="text-2xl">${topPerformers[0]?.revenue.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">{topPerformers[0]?.name}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Underperformers</CardDescription>
                  <CardTitle className="text-2xl">${underperformers[0]?.revenue.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">{underperformers[0]?.name}</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Manage your products and view their performance.</CardDescription>
              <div className="flex items-center gap-2 pt-2">
                <Input 
                  placeholder="Filter products..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Button size="sm" className="h-8 gap-1 ml-auto">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Total Sales</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={getBadgeVariant(product.status)}>{product.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${product.revenue.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{product.stock}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>{filteredProducts.length}</strong> of <strong>{productData.length}</strong> products
              </div>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPerformance;