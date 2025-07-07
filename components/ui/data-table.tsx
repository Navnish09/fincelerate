"use client";

import {
  AccessorKeyColumnDef,
  CellContext,
  ColumnDefTemplate,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DataTablePagination } from "./data-table-pagination";
import { Skeleton } from "./skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<TData, TValue> {
  pagination?: boolean;
  columns: readonly AccessorKeyColumnDef<TData, TValue>[];
  data: TData[];
  templates?: Record<string, ColumnDefTemplate<CellContext<TData, TValue>>>;
  loading?: boolean;
  className?: string;
  heightRef?: React.RefObject<HTMLTableElement>;
  align?: "left" | "center" | "right";
}

const TableSkeleton = ({
  length = 10,
  className,
}: {
  length?: number;
  className?: string;
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="space-y-4 flex-grow">
        {[...Array(length)].map((_, i) => (
          <Skeleton key={i} className={cn("h-10 w-ff", className)} />
        ))}
      </div>
    </div>
  );
};

const SortIcon = ({ sortKey }: { sortKey: string }) => {
  return (
    <>
      {{
        asc: <ChevronUp className="ml-1" height={18} width={18} />,
        desc: <ChevronDown className="ml-1" height={18} width={18} />,
      }[sortKey] ?? null}
    </>
  );
};

export function DataTable<TData, TValue>({
  columns,
  data,
  templates,
  loading,
  className,
  pagination = true,
  heightRef,
  align = "left",
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnWithTemplates = React.useMemo(() => {
    if (!templates && !Object.keys(templates || {}).length) return columns;

    return columns.map((column) => {
      if (column && templates?.[column.accessorKey as keyof typeof templates]) {
        return {
          ...column,
          cell: templates[column.accessorKey as keyof typeof templates],
        };
      }

      return column;
    });
  }, [columns, templates]);

  const table = useReactTable({
    data,
    columns: [...columnWithTemplates],
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    autoResetPageIndex: false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    // Add pagination row model if pagination is enabled
    ...(pagination
      ? {
          getPaginationRowModel: getPaginationRowModel(),
        }
      : {}),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4 h-full">
      <div className="rounded-md border h-full overflow-hidden">
        <Table
          ref={heightRef}
          className={cn(
            {
              center: "text-center",
              left: "text-left",
              right: "text-right",
            }[align],
            className
          )}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-background">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={cn(
                        header.column.getCanSort() &&
                          "cursor-pointer select-none",
                        "border border-muted/50 py-2"
                      )}
                      {...(header.column.getCanSort()
                        ? {
                            onClick: header.column.getToggleSortingHandler(),
                          }
                        : {})}
                    >
                      <div
                        className={cn(
                          "flex items-center",
                          {
                            center: "justify-center",
                            left: "justify-start",
                            right: "justify-end",
                          }[align]
                        )}
                      >
                        <div
                          className={cn(
                            "inline-flex items-center p-2",
                            header.column.getCanSort() &&
                              "rounded-md hover:bg-background/30 text-white/75"
                          )}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.getCanSort() && (
                            <SortIcon
                              sortKey={header.column.getIsSorted() as string}
                            />
                          )}
                        </div>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && <DataTablePagination table={table} />}
    </div>
  );
}
