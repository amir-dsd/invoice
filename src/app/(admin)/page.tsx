import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import RecentOrders from "@/components/ecommerce/RecentOrders";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | Invoice - Next.js Dashboard Template",
  description: "This is Next.js Home for Invoice Dashboard Template",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12">
        <RecentOrders />
      </div>
    </div>
  );
}
