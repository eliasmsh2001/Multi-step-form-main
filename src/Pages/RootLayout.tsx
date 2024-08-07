import React from "react";
import ProgressSteps from "../components/ProgressSteps";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row bg-magnolia h-screen w-screen overflow-hidden">
      <ProgressSteps />
      <Outlet />
    </main>
  );
};

export default RootLayout;
