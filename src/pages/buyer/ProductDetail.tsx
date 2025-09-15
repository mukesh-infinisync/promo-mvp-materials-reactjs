import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCT_DETAIL } from "@/__mocks__/materials";
import { MaterialImg } from "@/assets";
import DeliveryAddressModal from "@/components/buyer/RequestQuoteModal";
import { toast } from "sonner";
import Breadcrumb from "@/components/common/Breadcrumb";

const breadcrumbItems = [
    { name: 'Products', href: "/buyer/products" },
    { name: "Product Details", href: '/buyer/product/details' }
]

const ProductDetails: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const submitHandler = () => {
        setShowModal(false);
        toast.success('Quotation has been successfully Sent.')
    }

    return (
        <>
            <Breadcrumb items={breadcrumbItems} className="px-4 sm:px-6 lg:px-12" />
            <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-12">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-[#164B88]"
                >
                    Product Details
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-12 sm:pt-8 lg:pt-[45px]">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex justify-center items-start"
                    >
                        <img
                            src={MaterialImg}
                            alt={PRODUCT_DETAIL.title}
                            className="max-w-[420px] w-full object-contain rounded-[30px] shadow-md"
                        />
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        {/* Title + Supplier */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                                {PRODUCT_DETAIL.title}
                            </h2>
                            <p className="text-green-700 font-medium flex items-center gap-2 mt-1">
                                🏅 {PRODUCT_DETAIL.supplier}
                            </p>
                            <p className="text-gray-500 text-sm mt-1">{PRODUCT_DETAIL.code}</p>
                        </div>

                        {/* Specs */}
                        <div className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                <strong>Country of Origin:</strong> {PRODUCT_DETAIL.origin}
                            </p>
                            <p>
                                <strong>Weight:</strong> {PRODUCT_DETAIL.weight}
                            </p>
                            <p>
                                <strong>Metals:</strong> {PRODUCT_DETAIL.metrics}
                            </p>
                            <p>
                                <strong>Critical Items:</strong> {PRODUCT_DETAIL.critical}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className={`${i < PRODUCT_DETAIL.rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                        }`}
                                />
                            ))}
                            <span className="ml-2 text-sm sm:text-base text-gray-600">
                                {PRODUCT_DETAIL.rating}.0 / 5
                            </span>
                        </div>

                        {/* Tags */}
                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >
                            {PRODUCT_DETAIL.tags.map((tag, i) => (
                                <motion.div
                                    key={i}
                                    variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                >
                                    <Badge
                                        variant="outline"
                                        className="bg-white border-green-500 text-green-700 px-3 py-1 rounded-md text-sm"
                                    >
                                        {tag}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Blockchain Records */}
                        <div className="text-sm sm:text-base text-gray-700 space-y-1 mt-2">
                            <p className="font-semibold">Blockchain Records</p>
                            <p>Scrap Collector: {PRODUCT_DETAIL.blockchainRecords.scrapCollector}</p>
                            <p>Recycler: {PRODUCT_DETAIL.blockchainRecords.recycler}</p>
                            <p>Battery Use: {PRODUCT_DETAIL.blockchainRecords.batteryUse}</p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="mt-4"
                        >
                            <Button onClick={() => setShowModal(true)} className="bg-[#164B88] hover:bg-[#0e3970] text-white px-8 py-3 rounded-lg text-base font-medium">
                                Request Quote
                            </Button>
                        </motion.div>
                    </motion.div>
                    {
                        showModal && (
                            <DeliveryAddressModal
                                open={showModal}
                                setOpen={setShowModal}
                                onSubmit={(values) => submitHandler()}
                                product={PRODUCT_DETAIL}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
