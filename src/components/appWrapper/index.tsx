"use client";

import React, { ReactNode } from "react";

import Footer from "../footer";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen">
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default AppWrapper;
