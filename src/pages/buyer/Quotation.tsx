import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomDataTable from "@/components/common/CustomDataTable";

type OrderStatus = "Pending" | "Completed" | "Cancelled";

interface Order {
    id: string;
    date: string;
    product: string;
    quantity: number;
    status: OrderStatus;
}

const mockOrders: Order[] = [
    { id: "#232451", date: "15/05/2025", product: "Battery Materials", quantity: 15, status: "Pending" },
    { id: "#232452", date: "15/05/2025", product: "Battery Materials", quantity: 7, status: "Completed" },
    { id: "#232453", date: "15/05/2025", product: "Battery Materials", quantity: 3, status: "Completed" },
    { id: "#232454", date: "15/05/2025", product: "Battery Materials", quantity: 23, status: "Cancelled" },
    { id: "#232455", date: "15/05/2025", product: "Battery Materials", quantity: 55, status: "Completed" },
    { id: "#232456", date: "15/05/2025", product: "Battery Materials", quantity: 79, status: "Completed" },
    { id: "#232457", date: "15/05/2025", product: "Battery Materials", quantity: 15, status: "Completed" },
];

const QuotationTable: React.FC = () => {
    const [orders, setOrders] = useState(mockOrders);

    const columns: ColumnDef<Order>[] = [
        { accessorKey: "id", header: "Order ID" },
        { accessorKey: "date", header: "Order Date" },
        { accessorKey: "product", header: "Product" },
        {
            accessorKey: "quantity",
            header: "Quantity (tons)",
            cell: ({ row }) => <span>{row.getValue("quantity")}</span>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const order = row.original;

                const statusColors: Record<OrderStatus, string> = {
                    Pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
                    Completed: "bg-green-100 text-green-700 border border-green-300",
                    Cancelled: "bg-red-100 text-red-700 border border-red-300",
                };

                return (
                    <Badge
                        className={`px-5 rounded-[40px] min-w-[125px] text-sm font-medium ${statusColors[order.status]}`}
                    >
                        {order.status}
                    </Badge>
                );
            },
        },

        {
            id: "actions",
            header: "Action",
            cell: () => (
                <div className="flex gap-3">
                    <button className="text-[#164B88] hover:text-blue-700">
                        <FileText size={18} />
                    </button>
                    <button className="text-[#164B88] hover:text-blue-700">
                        <Eye size={18} />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h1 className="text-[#343434] text-[1.5rem] font-medium mb-10">Quotations</h1>
            <CustomDataTable<Order, any> columns={columns} data={orders} />
        </div>
    );
};

export default QuotationTable;
