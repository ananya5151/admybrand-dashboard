"use client";

import { useState, useMemo, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';
import { SortDirection } from 'react-stately';
import { DateRange } from 'react-day-picker';

type Column<T> = { key: keyof T; label: string };
type SortDescriptor<T> = { column: keyof T; direction: SortDirection };

// Helper function for filtering data
const filterData = <T extends Record<string, unknown>>(
  data: T[],
  searchTerm: string,
  dateRange?: DateRange
): T[] => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  return data.filter((item) => {
    // Note: Date filtering logic is commented out as 'date' is not a property of the customer mock data.
    // You can uncomment and adapt this if your data includes dates.
    // const itemDate = new Date(item.date);
    // const inDateRange = (!dateRange?.from || itemDate >= dateRange.from) && (!dateRange?.to || itemDate <= dateRange.to);
    return Object.values(item).some(val =>
      String(val).toLowerCase().includes(lowercasedSearchTerm)
    ); // && inDateRange;
  });
};

// Helper function for sorting data
const sortData = <T extends Record<string, unknown>>(
  data: T[],
  sortDescriptor: SortDescriptor<T>
): T[] => {
  return [...data].sort((a, b) => {
    const first = a[sortDescriptor.column];
    const second = b[sortDescriptor.column];
    let cmp = String(first).localeCompare(String(second));
    if (sortDescriptor.direction === 'descending') {
      cmp *= -1;
    }
    return cmp;
  });
};

export function useAdvancedTable<T extends Record<string, unknown>>(
  data: T[],
  columns: Column<T>[]
) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor<T>>({
    column: 'name' as keyof T,
    direction: 'ascending',
  });
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(new Set());
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const filteredData = useMemo(
    () => filterData(data, searchTerm, dateRange),
    [data, searchTerm, dateRange]
  );

  const sortedData = useMemo(
    () => sortData(filteredData, sortDescriptor),
    [filteredData, sortDescriptor]
  );

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, page, rowsPerPage]);

  const exportToPDF = useCallback(() => {
    const doc = new jsPDF();
    const tableData = sortedData.map(row => columns.map(col => String(row[col.key])));
    autoTable(doc, {
      head: [columns.map(col => col.label)],
      body: tableData,
    });
    doc.save('customers.pdf');
  }, [sortedData, columns]);

  const exportToCSV = useCallback(() => {
    const csv = Papa.unparse(sortedData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'customers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [sortedData]);

  return {
    searchTerm,
    setSearchTerm,
    sortDescriptor,
    setSortDescriptor,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    selectedKeys,
    setSelectedKeys,
    dateRange,
    setDateRange,
    paginatedData,
    totalItems: filteredData.length,
    exportToPDF,
    exportToCSV,
  };
}
