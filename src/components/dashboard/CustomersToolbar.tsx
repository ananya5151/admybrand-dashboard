"use client"

import { Calendar as CalendarIcon, File, ListFilter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

interface CustomersToolbarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    dateRange: DateRange | undefined;
    setDateRange: (value: DateRange | undefined) => void;
    exportToPDF: () => void;
    exportToCSV: () => void;
}

export function CustomersToolbar({ searchTerm, setSearchTerm, dateRange, setDateRange, exportToPDF, exportToCSV }: CustomersToolbarProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search customers..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !dateRange && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange?.from ? (
                                dateRange.to ? (
                                    <>
                                        {format(dateRange.from, "LLL dd, y")} -{" "}
                                        {format(dateRange.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(dateRange.from, "LLL dd, y")
                                )
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={dateRange?.from}
                            selected={dateRange}
                            onSelect={setDateRange}
                            numberOfMonths={2}
                        />
                    </PopoverContent>
                </Popover>
                <Button variant="outline" size="sm"><ListFilter className="h-4 w-4 mr-2" />Filter</Button>
            </div>
            <div className="flex items-center space-x-2">
                <Button size="sm" onClick={exportToCSV}><File className="h-4 w-4 mr-2" />Export CSV</Button>
                <Button size="sm" onClick={exportToPDF}><File className="h-4 w-4 mr-2" />Export PDF</Button>
            </div>
        </div>
    )
}
