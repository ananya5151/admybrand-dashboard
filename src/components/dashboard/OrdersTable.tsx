// src/components/dashboard/OrdersTable.tsx
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockOrders, Order } from "@/data/mockData"

interface OrdersTableProps {
  filterStatus?: string;
}

export function OrdersTable({ filterStatus }: OrdersTableProps) {
  const orders: Order[] = mockOrders.filter(
    (order) => !filterStatus || filterStatus === "all" || order.status === filterStatus
  );

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Fulfilled":
        return "default";
      case "Pending":
        return "secondary";
      case "Declined":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden sm:table-cell">
            <Checkbox aria-label="Select all" />
          </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead><span className="sr-only">Actions</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="hidden sm:table-cell">
              <Checkbox aria-label={`Select order ${order.id}`} />
            </TableCell>
            <TableCell>
              <div className="font-medium">{order.customer}</div>
              <div className="hidden text-sm text-muted-foreground md:inline">{order.email}</div>
            </TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{order.date}</TableCell>
            <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
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
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
