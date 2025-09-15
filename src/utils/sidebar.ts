import {
  Home,
  Package,
  List,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

export const buyerNavItems = [
  { label: "Dashboard", path: "/buyer/dashboard", icon: Home },
  { label: "Products", path: "/buyer/products", icon: Package, subitems: ['/buyer/product/details'] },
  { label: "Order History", path: "/buyer/order-history", icon: List, subitems: ['/buyer/certificate'] },
  // { label: "Quotation", path: "/buyer/quotations", icon: FileText },
  { label: "Help", path: "/buyer/help", icon: HelpCircle },
  { label: "Log Out", path: "/logout", icon: LogOut },
];

export const supplierNavItems = [
  { label: "Dashboard", path: "/supplier/dashboard", icon: Home },
  { label: "Products", path: "/supplier/products", icon: Package, subitems: ['/supplier/product/details'] },
  { label: "Order History", path: "/supplier/order-history", icon: List, subitems: ['/supplier/certificate'] },
  { label: "Quotation", path: "/supplier/quotations", icon: FileText },
  { label: "Help", path: "/supplier/help", icon: HelpCircle },
  { label: "Log Out", path: "/logout", icon: LogOut },
];