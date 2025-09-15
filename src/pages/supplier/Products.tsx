import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";

import CustomDataTable from "@/components/common/CustomDataTable";
import { SUPPLIER_PRODUCTS } from "@/__mocks__/materials";
import { MaterialImg } from "@/assets";
import ViewDetailsModal from "@/components/supplier/ProductModal";

interface Product {
  id: string;
  updatedOn: string;
  name: string;
  image: string;
}

export default function SupplierProductsPage() {
  const [products] = useState<Product[]>(SUPPLIER_PRODUCTS);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setDetailsOpen(true);
  };

  const handleAddProduct = (val: string) => {
    console.log("Add product:", val);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns: ColumnDef<Product>[] = [
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={MaterialImg}
          alt={row.original.name}
          className="h-12 w-12 object-cover rounded"
        />
      ),
    },
    {
      header: "Product ID",
      accessorKey: "id",
    },
    {
      header: "Updated on",
      accessorKey: "updatedOn",
    },
    {
      header: "Product",
      accessorKey: "name",
    },
    {
      header: "Actions",
      meta: {
        className: 'text-right', 
      }, 
      cell: ({ row }) => (
        <div className="flex justify-end gap-2">
          <Badge
            className="bg-[#164B88] rounded-[20px] text-[0.8rem] px-4 cursor-pointer hover:opacity-90"
            onClick={() => handleViewDetails(row.original)}
          >
            View Details
          </Badge>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 hover:bg-gray-50"
          >
            <Edit />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl px-5 lg:px-0">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex md:flex-row flex-col gap-8 items-center flex-1">
          <h2 className="text-[#343434] text-[1.5rem] font-medium">
            Battery Products
          </h2>
          <Input
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-2 md:min-w-[320px] max-w-[320px] bg-white sm:w-full"
          />
        </div>

        {/* Add product dropdown */}
        <Select onValueChange={handleAddProduct}>
          <SelectTrigger className="hover:cursor-pointer w-48 min-w-[200px] min-h-[40px] bg-[#60B244] border border-[#C8C8C8] text-white hover:bg-green-700 text-[1.2rem] font-normal">
            <SelectValue placeholder="Add product" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
            {["NMC Black Mass", "Lithium", "Cobalt", "Nickel"].map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="text-gray-800 text-sm px-4 py-2 cursor-pointer 
                  data-[state=checked]:bg-[#164B88] data-[state=checked]:text-white 
                  data-[highlighted]:bg-[#E6F4EA] data-[highlighted]:text-[#164B88] 
                  rounded-sm"
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <CustomDataTable columns={columns} data={filteredProducts} />

      {/* View Details Modal */}
      <ViewDetailsModal
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        product={selectedProduct}
      />
    </div>
  );
}
