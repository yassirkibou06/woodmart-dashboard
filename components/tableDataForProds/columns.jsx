"use client"
import { Badge } from "@/components/ui/badge"
<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox"
=======
import { Checkbox } from "@/components/ui/checkbox";
import { FaStar } from "react-icons/fa6";
>>>>>>> 4afe55a (order)

import { labels, priorities, statuses } from "@/data/data"
import DataTableColumnHeader from "./data-table-column-header"
import DataTableRowActions from "./data-table-row-actions";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
<<<<<<< HEAD
} from "@/components/ui/avatar"

export const columns = (deleteProduct, editProduct) => [
  {
    accessorKey: "photo",
=======
} from "@/components/ui/avatar";
import { LuImagePlus } from "react-icons/lu";


export const columns = (deleteProduct, editProduct) => [
  {
    accessorKey: "images",
>>>>>>> 4afe55a (order)
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="" />
    ),
    cell: ({ row }) => {
<<<<<<< HEAD
      const base64String = row.getValue("photo");
      return (
        <div className="rounded-md bg-gray-200 w-20 h-20 ">
            <img src={`data:image/png;base64,${base64String}`} className="object-cover w-full h-full" alt="not found" />
        </div>
      )
=======
      const images = row.original.images; // Access the array of images

      if (images && images.length > 0) {
        const base64String = images[0].url; // Assuming you want to display the first image

        return (
          <div className="rounded-md bg-gray-200 w-20 h-20">
            <img src={`${base64String}`} className="object-cover w-full h-full" alt="not found" />
          </div>
        );
      } else {
        return (
          <div className="rounded-md bg-gray-200 w-20 h-20">
            none
          </div>
        );
      }

      return null; // Handle case where there are no images
>>>>>>> 4afe55a (order)
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
<<<<<<< HEAD
    accessorKey: "name",
=======
    accessorKey: "title",
>>>>>>> 4afe55a (order)
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="PRODUCT" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
<<<<<<< HEAD
            {row.getValue("name")}
=======
            {row.getValue("title")}
>>>>>>> 4afe55a (order)
          </span>
        </div>
      )
    },
  },
  {
<<<<<<< HEAD
    accessorKey: "currentPrice",
=======
    accessorKey: "price",
>>>>>>> 4afe55a (order)
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="PRICE" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
<<<<<<< HEAD
            ${row.getValue("currentPrice")}
=======
            ${row.getValue("price")}
>>>>>>> 4afe55a (order)
          </span>
        </div>
      )
    },
  },
  {
<<<<<<< HEAD
=======
    accessorKey: "totalrating",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="Rating" />
    ),
    cell: ({ row }) => {
      const rating = row.getValue("totalrating"); // Access the array of images

      return (
        <div className="w-[100px] flex items-center gap-1 font-medium"><FaStar className="text-yellow-500" />{rating}</div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
>>>>>>> 4afe55a (order)
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="SKU" />
    ),
<<<<<<< HEAD
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("sku")}</div>,
    enableSorting: false,
    enableHiding: false,
=======
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] text-gray-600 truncate font-medium">
            {row.getValue("sku")}
          </span>
        </div>
      )
    },
>>>>>>> 4afe55a (order)
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="QTY" />
    ),
    cell: ({ row }) => <span className="max-w-[90px] font-medium bg-blue-400 p-2 text-white rounded-md">{row.getValue("quantity")}</span>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="Action" />
    ),
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} deleteProduct={deleteProduct} editProduct={editProduct} />,
  },
]