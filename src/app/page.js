import Functions from "@/Components/Functions";
import Herosection from "@/Components/Herosection";
import PageLayout from "@/Components/Pagelayout";
import Products from "@/Components/Products";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import React from "react";

export default function () {
  return (
    <PageLayout>
      <Herosection />
      <Functions />
      <Products />
    </PageLayout>
  );
}
