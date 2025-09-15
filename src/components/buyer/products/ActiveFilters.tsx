import React from "react";
import { X } from "lucide-react";
import { FilterValues } from "./FiltersBar";

interface Props {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
}

const ActiveFilters: React.FC<Props> = ({ filters, setFilters }) => {
  const clearFilter = (key: keyof FilterValues) =>
    setFilters((prev) => ({ ...prev, [key]: "" }));

  return (
    <div className="flex flex-wrap gap-2">
      {filters.shippingCountry && (
        <span className="flex items-center gap-2 bg-[#164B88]/10 text-[#164B88] px-3 py-1 rounded-full text-sm">
          {filters.shippingCountry}
          <X
            size={14}
            className="cursor-pointer"
            onClick={() => clearFilter("shippingCountry")}
          />
        </span>
      )}
      {filters.materialType && (
        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {filters.materialType}
          <X
            size={14}
            className="cursor-pointer"
            onClick={() => clearFilter("materialType")}
          />
        </span>
      )}
    </div>
  );
};

export default ActiveFilters;
