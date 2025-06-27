import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components for page structure and forms
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from 'lucide-react';

const Settings = () => {
  console.log('Settings page loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Settings</h1>
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>
                      Manage your personal information and profile settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                        <AvatarFallback><User size={40}/></AvatarFallback>
                      </Avatar>
                      <Button variant="outline">Change Photo</Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="Your Name" defaultValue="Alex Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your Email" defaultValue="alex.doe@example.com" readOnly />
                        </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Data Sources Tab */}
              <TabsContent value="data-sources">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Source Connections</CardTitle>
                    <CardDescription>
                      Connect your eCommerce platform to sync your data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API Key</Label>
                      <Input id="api-key" placeholder="Enter your store's API key" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="api-secret">API Secret</Label>
                      <Input id="api-secret" type="password" placeholder="Enter your store's API secret" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Connect Data Source</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription & Billing</CardTitle>
                    <CardDescription>
                      Manage your subscription plan and view payment history.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Current Plan: Pro</h3>
                        <p className="text-sm text-muted-foreground">Your plan renews on December 31, 2024.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">Payment Method</h3>
                        <p className="text-sm text-muted-foreground">Visa ending in •••• 4242</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Manage Subscription</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;