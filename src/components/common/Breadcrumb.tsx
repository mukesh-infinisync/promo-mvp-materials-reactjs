import React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      className={cn("flex items-center text-sm text-gray-600", className)}
      aria-label="breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-[#164B88] font-medium hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-700 font-semibold">
                  {item.name}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  size={16}
                  className="text-gray-400 mx-1 flex-shrink-0"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
