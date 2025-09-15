import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export interface FilterValues {
  shippingCountry: string;
  materialType: string;
}

interface Props {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
}

const FiltersBar: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* LEFT: Show Material Type buttons only if enabled */}
      {filters.materialType && (
        <div className="flex gap-2 flex-wrap">
          {["Lithium Carbonate", "NMC Black Mass", "Cobalt Sulphate", "Nickel Sulphate"].map((type) => (
            <Button
              key={type}
              variant="outline"
              className={`rounded-md px-4 py-1 ${filters.materialType === type
                  ? "bg-[#164B88] text-white"
                  : "bg-white text-black border"
                }`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  materialType: prev.materialType === type ? "enabled" : type, // toggle selection
                }))
              }
            >
              {type}
            </Button>
          ))}
        </div>
      )}

      {/* RIGHT: Show Shipping Country dropdown only if enabled */}
      <div className="flex items-center gap-4">
        {filters.shippingCountry  && (
          <Select
            value={filters.shippingCountry !== "enabled" ? filters.shippingCountry : ""}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                shippingCountry: value || "enabled",
              }))
            }
          >
            <SelectTrigger className="w-[220px] bg-[#3A6EAA] text-white! border rounded-md px-3 py-2 text-sm relative!">
              <SelectValue placeholder="Select shipping country" />
              <ChevronDown className="h-5 w-5 text-white absolute right-2 top-2" />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded-md shadow-lg">
              <SelectItem
                value="Japan"
                className="cursor-pointer data-[state=checked]:bg-[#3A6EAA] data-[state=checked]:text-white data-[highlighted]:bg-[#3A6EAA] data-[highlighted]:text-white"
              >
                Japan
              </SelectItem>
              <SelectItem
                value="USA"
                className="cursor-pointer data-[state=checked]:bg-[#3A6EAA] data-[state=checked]:text-white data-[highlighted]:bg-[#3A6EAA] data-[highlighted]:text-white"
              >
                USA
              </SelectItem>
              <SelectItem
                value="Germany"
                className="cursor-pointer data-[state=checked]:bg-[#3A6EAA] data-[state=checked]:text-white data-[highlighted]:bg-[#3A6EAA] data-[highlighted]:text-white"
              >
                Germany
              </SelectItem>
              <SelectItem
                value="India"
                className="cursor-pointer data-[state=checked]:bg-[#3A6EAA] data-[state=checked]:text-white data-[highlighted]:bg-[#3A6EAA] data-[highlighted]:text-white"
              >
                India
              </SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* MAIN FILTER DROPDOWN */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-8">
              <SlidersHorizontal size={16} />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            {/* Shipping Country */}
            <DropdownMenuItem
              className={`mt-1 cursor-pointer ${filters.shippingCountry !== "" &&
                  filters.shippingCountry !== "enabled"
                  ? "bg-[#164B88] text-white"
                  : filters.shippingCountry === "enabled"
                    ? "bg-[#164B88] text-white"
                    : ""
                }`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  shippingCountry:
                    prev.shippingCountry === "" ? "enabled" : "",
                }))
              }
            >
              Shipping Country
            </DropdownMenuItem>

            {/* Material Type */}
            <DropdownMenuItem
              className={`mt-1 cursor-pointer ${filters.materialType !== "" &&
                  filters.materialType !== "enabled"
                  ? "bg-[#164B88] text-white"
                  : filters.materialType === "enabled"
                    ? "bg-[#164B88] text-white"
                    : ""
                }`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  materialType:
                    prev.materialType === "" ? "enabled" : "",
                }))
              }
            >
              Material Type
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FiltersBar;
