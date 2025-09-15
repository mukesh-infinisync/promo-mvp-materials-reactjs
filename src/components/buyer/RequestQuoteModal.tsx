import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { deliveryAddressSchema } from "@/schemas/requestQuote";
import { Badge } from "@/components/ui/badge";
import { MaterialImg } from "@/assets";

type DeliveryAddressFormValues = z.infer<typeof deliveryAddressSchema>;

interface DeliveryAddressModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onSubmit: (values: DeliveryAddressFormValues) => void;
  product: typeof import("@/__mocks__/materials").PRODUCT_DETAIL;
}

const DeliveryAddressModal: React.FC<DeliveryAddressModalProps> = ({
  open,
  setOpen,
  onSubmit,
  product,
}) => {
  const form = useForm<DeliveryAddressFormValues>({
    resolver: zodResolver(deliveryAddressSchema),
    defaultValues: {
      fullName: "",
      deliveryAddress: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    mode: "onBlur",
  });

  // 🔑 wrapper for input animation
  const fieldWrapper = (hasError: boolean, children: React.ReactNode) => (
    <motion.div
      animate={{
        backgroundColor: hasError ? "#FEE2E2" : "#FFFFFF",
        borderColor: hasError ? "#DC2626" : "#929292",
      }}
      transition={{ duration: 0.25 }}
      className="rounded-[12px] border overflow-hidden"
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Card */}
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 w-[95%] max-w-3xl relative h-[90vh] overflow-y-auto no-scrollbar"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-[#164B88]" size={28} />
              <h2 className="text-xl font-semibold text-gray-800">
                Request Quote
              </h2>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={MaterialImg}
                  alt={product.title}
                  className="max-w-[300px] w-full rounded-lg object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-green-700 font-medium">
                  🏅 {product.supplier}
                </p>
                <p className="text-gray-500 text-sm">{product.code}</p>

                <div className="space-y-1 mt-2">
                  <p>
                    <strong>Country of Origin:</strong> {product.origin}
                  </p>
                  <p>
                    <strong>Weight:</strong> {product.weight}
                  </p>
                  <p>
                    <strong>Metals:</strong> {product.metrics}
                  </p>
                  <p>
                    <strong>Critical Items:</strong> {product.critical}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < product.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">
                    {product.rating}.0 / 5
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-white border-green-500 text-green-700 px-3 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Blockchain Records */}
                <div className="space-y-1 mt-3 text-sm">
                  <p className="font-semibold text-gray-800">
                    Blockchain Records:
                  </p>
                  <p>
                    <strong>Scrap Collector:</strong>{" "}
                    {product.blockchainRecords.scrapCollector}
                  </p>
                  <p>
                    <strong>Recycler:</strong>{" "}
                    {product.blockchainRecords.recycler}
                  </p>
                  <p>
                    <strong>Battery Use:</strong>{" "}
                    {product.blockchainRecords.batteryUse}
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((values) => {
                  onSubmit(values);
                  setOpen(false);
                })}
                className="flex flex-col gap-4"
              >
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => {
                    const hasError = !!form.formState.errors.fullName;
                    return (
                      <FormItem>
                        <FormLabel>
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          {fieldWrapper(
                            hasError,
                            <Input
                              placeholder="Enter recipient name"
                              {...field}
                              className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                            />
                          )}
                        </FormControl>
                        <FormMessage className="text-red-600 text-sm" />
                      </FormItem>
                    );
                  }}
                />

                {/* Delivery Address */}
                <FormField
                  control={form.control}
                  name="deliveryAddress"
                  render={({ field }) => {
                    const hasError = !!form.formState.errors.deliveryAddress;
                    return (
                      <FormItem>
                        <FormLabel>
                          Delivery Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          {fieldWrapper(
                            hasError,
                            <Input
                              placeholder="Street, Building, Area"
                              {...field}
                              className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                            />
                          )}
                        </FormControl>
                        <FormMessage className="text-red-600 text-sm" />
                      </FormItem>
                    );
                  }}
                />

                {/* City / State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => {
                      const hasError = !!form.formState.errors.city;
                      return (
                        <FormItem>
                          <FormLabel>
                            City <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            {fieldWrapper(
                              hasError,
                              <Input
                                placeholder="Enter City"
                                {...field}
                                className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                              />
                            )}
                          </FormControl>
                          <FormMessage className="text-red-600 text-sm" />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => {
                      const hasError = !!form.formState.errors.state;
                      return (
                        <FormItem>
                          <FormLabel>
                            State <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            {fieldWrapper(
                              hasError,
                              <Input
                                placeholder="Enter State"
                                {...field}
                                className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                              />
                            )}
                          </FormControl>
                          <FormMessage className="text-red-600 text-sm" />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Country / Zip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => {
                      const hasError = !!form.formState.errors.country;
                      return (
                        <FormItem>
                          <FormLabel>
                            Country <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            {fieldWrapper(
                              hasError,
                              <Input
                                placeholder="Enter Country"
                                {...field}
                                className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                              />
                            )}
                          </FormControl>
                          <FormMessage className="text-red-600 text-sm" />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => {
                      const hasError = !!form.formState.errors.zip;
                      return (
                        <FormItem>
                          <FormLabel>
                            Zip / Postal Code{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            {fieldWrapper(
                              hasError,
                              <Input
                                placeholder="e.g. 110001"
                                {...field}
                                className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                              />
                            )}
                          </FormControl>
                          <FormMessage className="text-red-600 text-sm" />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md"
                >
                  Save Delivery Address
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeliveryAddressModal;
