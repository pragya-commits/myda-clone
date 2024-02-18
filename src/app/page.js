import Functions from "@/Components/Functions";
import Herosection from "@/Components/Herosection";
import Network from "@/Components/Network";
import PageLayout from "@/Components/Pagelayout";
import Products from "@/Components/Products";
import Order from "@/Components/Order";
import MyDA from "@/Components/MyDA";
import Nature from "@/Components/Nature";
import React from "react";
import "./globals.css";
import Mydaintro from "@/Components/Aboutus/Mydaintro";
import Address from "@/Components/Help/Address";
import YouTube from "@/Components/Help/Youtube";
export default function Page() {
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
