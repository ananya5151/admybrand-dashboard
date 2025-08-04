// src/app/(dashboard)/orders/page.tsx
"use client";

import { useState } from "react";
import { File, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrdersTable } from "@/components/dashboard/OrdersTable"
import { mockOrders } from "@/data/mockData"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const orders = mockOrders;
  const filteredOrders = orders.filter(
    (order) => activeTab === "all" || order.status === activeTab
  );

  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Fulfilled">Fulfilled</TabsTrigger>
          <TabsTrigger value="Pending">Pending</TabsTrigger>
          <TabsTrigger value="Declined" className="hidden sm:flex">Declined</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value={activeTab}>
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Manage your orders and view their sales performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <OrdersTable filterStatus={activeTab} />
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-{filteredOrders.length}</strong> of <strong>{filteredOrders.length}</strong> orders
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}