import Functions from "@/Components/Functions";
import Herosection from "@/Components/Herosection";
import Network from "@/Components/Network";
import PageLayout from "@/Components/Pagelayout";
import Products from "@/Components/Products";
import Order from "@/Components/Order";
import MyDA from "@/Components/MyDA";
import Nature from "@/Components/Nature";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import React from "react";

export default function () {
  return (
    <PageLayout>
      <Herosection />
      <Functions />
      <Products />
      <Network />
      <Order />
      <Nature />
      <MyDA />
    </PageLayout>
  );
}
