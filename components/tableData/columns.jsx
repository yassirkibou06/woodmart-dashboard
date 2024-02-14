"use client"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "@/data/data"
import DataTableColumnHeader from "./data-table-column-header"
import DataTableRowActions from "./data-table-row-actions"

export const columns = (deleteProduct, editProduct) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
<<<<<<< HEAD
cell: ({ row }) => (
  <Checkbox
    checked={row.getIsSelected()}
    onCheckedChange={(value) => row.toggleSelected(!!value)}
    aria-label="Select row"
    className="translate-y-[2px]"
  />
),
  enableSorting: false,
    enableHiding: false,
  },
{
  accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Id" />
    ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
          enableHiding: false,
  },
{
  accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Name" />
    ),
      cell: ({ row }) => {
        const label = labels.find((label) => label.value === row.original.label)

        return (
          <div className="flex space-x-2">
            {label && <Badge variant="outline">{label.label}</Badge>}
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("name")}
            </span>
          </div>
        )
      },
  },
{
  header: ({ column }) => (
    <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Action" />
  ),
    id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} deleteProduct={deleteProduct} editProduct={editProduct} />,
=======
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-bold text-xs uppercase text-gray-300"} column={column} title="Action" />
    ),
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} deleteProduct={deleteProduct} editProduct={editProduct} />,
>>>>>>> 4afe55a (order)
  },
]