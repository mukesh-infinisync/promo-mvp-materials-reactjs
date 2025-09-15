import React, { useState } from "react";
import MaterialCard, { MaterialCardProps } from "@/components/common/MaterialCard";
import { useNavigate } from "react-router";
import DeliveryAddressModal from "../RequestQuoteModal";
import { PRODUCT_DETAIL } from "@/__mocks__/materials";
import { toast } from "sonner";

interface Props {
    materials: MaterialCardProps[];
    loading: boolean;
}

const ProductsGrid: React.FC<Props> = ({ materials, loading }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false);
    if (loading) {
        return (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6  mt-4 2xl:mt-[70px]">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-[250px] rounded-md bg-gray-200 animate-pulse"
                    />
                ))}
            </div>
        );
    }

    const onViewDetailsClick = () => {
        navigate('/buyer/product/details');
    }

    const submitHandler = () => {
        setShowModal(false);
        toast.success('Quotation has been successfully Sent.')
    }

    if (materials.length === 0) {
        return <p className="text-gray-500">No products match your filters.</p>;
    }

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4 2xl:mt-[70px]">
                {materials.map((m) => (
                    <MaterialCard key={m.id} material={{ ...m, onViewDetailsClick, showReqQuoteBtn: true, onRequestQuote: () => setShowModal(true) }} />
                ))}
            </div>
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
        </>
    );
};

export default ProductsGrid;
