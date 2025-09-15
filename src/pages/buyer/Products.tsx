import React, { useEffect, useState } from "react";
import { MaterialCardProps } from "@/components/common/MaterialCard";
import FiltersBar, { FilterValues } from "@/components/buyer/products/FiltersBar";
import ProductsGrid from "@/components/buyer/products/ProductsGrid";
import { fetchMaterials } from "@/__mocks__/apis/material";

const BuyerProducts: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [materials, setMaterials] = useState<MaterialCardProps[]>([]);
    const [filters, setFilters] = useState<FilterValues>({
        shippingCountry: "",
        materialType: "",
    });

    useEffect(() => {
        fetchMaterials().then((data) => {
            setMaterials(data);
            setLoading(false);
        });
    }, []);

    const getFilteredMaterials = () => {
        if ((filters.materialType === 'enabled' && filters.shippingCountry !== 'enabled') || (filters.shippingCountry === 'enabled' && filters.materialType !== 'enabled')) {
            return materials;
        }
        return materials.filter((m) => {
            const countryMatch =
                !filters.shippingCountry || m.country === filters.shippingCountry;
            const typeMatch =
                !filters.materialType || m.title === filters.materialType;
            return countryMatch && typeMatch;
        });
    }

    // Apply filters
    const filteredMaterials = getFilteredMaterials();

    return (
        <div className="flex flex-col gap-6 w-full max-w-[1300px]">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-[#164B88]">Battery Materials</h1>

                {/* Filters */}
                <FiltersBar filters={filters} setFilters={setFilters} />
            </div>

            {/* Products Grid */}
            <ProductsGrid materials={filteredMaterials} loading={loading} />
        </div>
    );
};

export default BuyerProducts;
