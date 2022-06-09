import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-auto container mx-auto py-4 px-2">{children}</main>

      <Footer />
    </div>
  );
};
