import type { Metadata } from "next";
import EcommerceLanding from "@/components/industry/EcommerceLanding";

export const metadata: Metadata = {
  title: "Semrush for Ecommerce — Dominate Search Across the Entire Ecommerce Journey",
  description:
    "AI-powered search is reshaping how shoppers discover, compare, and choose products. Semrush One helps ecommerce teams win visibility across Google Search, AI Overviews, and AI-driven answers.",
};

export default function EcommercePage() {
  return <EcommerceLanding />;
}
