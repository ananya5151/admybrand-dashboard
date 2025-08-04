"use client";

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockCustomers, Customer } from "@/data/mockData"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAdvancedTable } from "@/hooks/use-advanced-table";
import { CustomersToolbar } from "./CustomersToolbar";
import { Checkbox } from "@/components/ui/checkbox";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const columns: { key: keyof Customer; label: string }[] = [
    { key: 'name', label: 'Customer' },
    { key: 'orders', label: 'Orders' },
    { key: 'totalSpent', label: 'Total Spent' },
];

export function CustomersTable() {
    const {
        paginatedData,
        sortDescriptor,
        setSortDescriptor,
        page,
        setPage,
        totalItems,
        rowsPerPage,
        selectedKeys,
        setSelectedKeys,
        ...toolbarProps
    } = useAdvancedTable(mockCustomers, columns);

    const totalPages = Math.ceil(totalItems / rowsPerPage);

    return (
        <div className="space-y-4">
            <CustomersToolbar {...toolbarProps} />
            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <Checkbox
                                    aria-label="Select all"
                                    checked={selectedKeys.size === paginatedData.length && paginatedData.length > 0}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            setSelectedKeys(new Set(paginatedData.map(item => item.id)));
                                        } else {
                                            setSelectedKeys(new Set());
                                        }
                                    }}
                                />
                            </TableHead>
                            {columns.map(col => (
                                <TableHead key={col.key as string}>{col.label}</TableHead>
                            ))}
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>
                                    <Checkbox
                                        aria-label={`Select customer ${customer.name}`}
                                        checked={selectedKeys.has(customer.id)}
                                        onCheckedChange={(checked) => {
                                            const newKeys = new Set(selectedKeys);
                                            if (checked) {
                                                newKeys.add(customer.id);
                                            } else {
                                                newKeys.delete(customer.id);
                                            }
                                            setSelectedKeys(newKeys);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src={`/avatars/${customer.id.slice(-2)}.png`} alt="Avatar" />
                                            <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">{customer.name}</p>
                                            <p className="text-sm text-muted-foreground">{customer.email}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{customer.orders}</TableCell>
                                <TableCell className="text-right">${customer.totalSpent.toFixed(2)}</TableCell>
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
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => setPage(p => Math.max(1, p - 1))} />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink href="#" isActive={page === i + 1} onClick={() => setPage(i + 1)}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => setPage(p => Math.min(totalPages, p + 1))} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
