import SuspenseWrapper from "@/components/common/SuspenseWrapper";
import AuthGuard from "@/guards/AuthGuard";
import { DevGuard } from "@/guards/DevGuard";
import UnAuthGuard from "@/guards/UnAuthGuard";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/auth/AuthLayout";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

// ✅ Lazy load pages
const Homepage = lazy(() => import("@/pages/Homepage"));
const LoginPage = lazy(() => import('@/pages/auth/Login'));
const RegisterPage = lazy(() => import('@/pages/auth/Signup'));

const BuyerProducts = lazy(() => import("@/pages/buyer/Products"));
const BuyerProductDetail = lazy(() => import('@/pages/buyer/ProductDetail'));
const BuyerOrderHistory = lazy(() => import("@/pages/buyer/OrderHistory"));
const BuyerQuotations = lazy(() => import("@/pages/buyer/Quotation"));
const BuyerHelpPage = lazy(() => import("@/pages/buyer/Help"));

const CertificatePage = lazy(() => import('@/pages/Certificate'));

const SupplierProductsPage = lazy(() => import("@/pages/supplier/Products"));
const SupplierHelpPage = lazy(() => import("@/pages/supplier/Help"));


// ✅ Define routes that are still in development
const devRoutes = ["/login", "/contact-us", "/privacy", "/terms", "/buyer/dashboard", '/supplier/dashboard', '/supplier/order-history', '/supplier/quotation', '/forget-password'];

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <UnAuthGuard>
          <AppLayout>
            <Homepage />
          </AppLayout>
        </UnAuthGuard>
      </SuspenseWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <SuspenseWrapper>
        <UnAuthGuard>
          <LoginPage />
        </UnAuthGuard>
      </SuspenseWrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <SuspenseWrapper>
        <UnAuthGuard>
          <RegisterPage />
        </UnAuthGuard>
      </SuspenseWrapper>
    ),
  },
  {
    path: '/buyer',
    element: <SuspenseWrapper>
      <AuthGuard role="buyer">
        <AuthLayout />
      </AuthGuard>
    </SuspenseWrapper>,
    children: [
      {
        index: true,
        element: <Navigate to="products" replace />,
      },
      {
        element: (
          <BuyerProducts />
        ),
        path: 'products',
      },
      {
        element: (
          <BuyerProductDetail />
        ),
        path: 'product/details',
      },
      {
        element: (
          <BuyerOrderHistory />
        ),
        path: 'order-history',
      },
      {
        element: (
          <BuyerQuotations />
        ),
        path: 'quotations',
      },
      {
        element: (
          <BuyerHelpPage />
        ),
        path: 'help',
      },
      {
        element: <CertificatePage />,
        path: 'certificate',
      },
    ]
  },
  {
    path: '/supplier',
    element: <SuspenseWrapper>
      <AuthGuard role="supplier">
        <AuthLayout />
      </AuthGuard>
    </SuspenseWrapper>,
    children: [
      {
        index: true,
        element: <Navigate to="products" replace />,
      },
      {
        element: (
          <SupplierProductsPage />
        ),
        path: 'products',
      },
      {
        element: <SupplierHelpPage />, 
        path: 'help'
      }
    ]
  },
  // Catch all other routes with DevGuard
  {
    path: "*",
    element: <DevGuard allowedRoutes={devRoutes} />,
  },
]);
