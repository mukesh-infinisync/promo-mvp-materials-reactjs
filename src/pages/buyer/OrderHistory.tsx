import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, Eye, FileText, Star, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import CustomDataTable from "@/components/common/CustomDataTable";
import { motion, AnimatePresence } from "framer-motion";
import { MaterialImg } from "@/assets";
import { useNavigate } from "react-router";

// Mock product details
const mockProductDetail = {
  title: "Lithium-ion Battery Scrap",
  supplier: "Green Recyclers Pvt Ltd",
  code: "LBS-2024-001",
  origin: "India",
  weight: "250 Kg",
  metrics: "Lithium, Cobalt, Nickel",
  critical: "Yes",
  rating: 4,
  tags: ["Eco-Friendly", "Sustainable", "Certified"],
  blockchainRecords: {
    scrapCollector: "Collector XYZ",
    recycler: "Recycle Corp Ltd",
    batteryUse: "Electric Vehicles (EVs)",
  },
  image: MaterialImg, 
};

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

const OrderHistoryTable: React.FC = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [showProductModal, setShowProductModal] = useState(false);
  const navigate = useNavigate();

  const updateStatus = (id: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

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
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1 cursor-pointer">
                <Badge
                  className={`px-5 rounded-[40px] min-w-[125px] text-sm font-medium ${statusColors[order.status]}`}
                >
                  {order.status}
                </Badge>
                <span className="text-gray-600">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              side="right"
              align="start"
              className="w-40 p-2 flex flex-col gap-2"
            >
              {(["Pending", "Completed", "Cancelled"] as OrderStatus[])
                .filter((status) => status !== order.status)
                .map((status) => (
                  <Badge
                    key={status}
                    onClick={() => updateStatus(order.id, status)}
                    className={`cursor-pointer w-full px-5 py-1 rounded-md text-sm font-medium ${statusColors[status]}`}
                  >
                    {status}
                  </Badge>
                ))}
            </PopoverContent>
          </Popover>
        );
      },
    },

    {
      id: "actions",
      header: "Action",
      cell: () => (
        <div className="flex gap-3">
          <button className="text-[#164B88] hover:text-blue-700 cursor-pointer" onClick={() => navigate('/buyer/certificate')}>
            <FileText size={18} />
          </button>
          <button
            className="text-[#164B88] hover:text-blue-700 cursor-pointer"
            onClick={() => setShowProductModal(true)}
          >
            <Eye size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-[#343434] text-[1.5rem] font-medium mb-10">
        Order History
      </h1>
      <CustomDataTable<Order, any> columns={columns} data={orders} />

      {/* Product Detail Modal */}
      <AnimatePresence>
        {showProductModal && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl w-[95%] max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              {/* Close */}
              <button
                onClick={() => setShowProductModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X size={22} />
              </button>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image */}
                <img
                  src={mockProductDetail.image}
                  alt={mockProductDetail.title}
                  className="w-full rounded-lg shadow-md object-cover"
                />

                {/* Info */}
                <div className="flex flex-col gap-3 text-sm text-gray-700">
                  <h3 className="text-xl font-bold text-[#164B88]">
                    {mockProductDetail.title}
                  </h3>
                  <p className="text-green-700 font-medium">
                    🏅 {mockProductDetail.supplier}
                  </p>
                  <p className="text-gray-500 text-sm">{mockProductDetail.code}</p>

                  <div className="space-y-1 mt-2">
                    <p>
                      <strong>Country of Origin:</strong> {mockProductDetail.origin}
                    </p>
                    <p>
                      <strong>Weight:</strong> {mockProductDetail.weight}
                    </p>
                    <p>
                      <strong>Metals:</strong> {mockProductDetail.metrics}
                    </p>
                    <p>
                      <strong>Critical Items:</strong> {mockProductDetail.critical}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < mockProductDetail.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">
                      {mockProductDetail.rating}.0 / 5
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mockProductDetail.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-white border-green-500 text-green-700 px-3 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Blockchain */}
                  <div className="space-y-1 mt-3 text-sm">
                    <p className="font-semibold text-gray-800">
                      Blockchain Records:
                    </p>
                    <p>
                      <strong>Scrap Collector:</strong>{" "}
                      {mockProductDetail.blockchainRecords.scrapCollector}
                    </p>
                    <p>
                      <strong>Recycler:</strong>{" "}
                      {mockProductDetail.blockchainRecords.recycler}
                    </p>
                    <p>
                      <strong>Battery Use:</strong>{" "}
                      {mockProductDetail.blockchainRecords.batteryUse}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderHistoryTable;
