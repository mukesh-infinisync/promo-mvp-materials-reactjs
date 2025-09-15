import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { MaterialImg } from "@/assets";

interface Product {
  id: string;
  updatedOn: string;
  name: string;
  image: string;
}

interface ViewDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product | null;
}

export default function ViewDetailsModal({
  open,
  onOpenChange,
  product,
}: ViewDetailsModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl shadow-2xl">
        {/* Animated wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-white"
        >
          {/* Header */}
          <DialogHeader className="bg-[#164B88] text-white px-6 py-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-white" />
            <DialogTitle className="text-lg font-semibold">
              Product Details
            </DialogTitle>
          </DialogHeader>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Product main info */}
            <div className="flex items-center gap-6">
              <img
                src={MaterialImg}
                alt={product.name}
                className="h-20 w-20 rounded-lg object-cover border shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.id}</p>
              </div>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Updated On</p>
                <p className="text-base font-medium text-gray-800">
                  {product.updatedOn}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Status</p>
                <Badge className="bg-[#164B88] text-white px-3 py-1 rounded-full">
                  Active
                </Badge>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="bg-gray-50 px-6 py-4 flex justify-end gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-lg"
            >
              Close
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
