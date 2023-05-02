"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Navmenu = () => {
  return (
    <TabsList className="mb-4 text-xs sm:text-base child:p-1 child:sm:py-1.5 child:sm:px-3 ">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports" disabled>
        Reports
      </TabsTrigger>
      <TabsTrigger value="notifications" disabled>
        Notifications
      </TabsTrigger>
    </TabsList>
  );
};
export default Navmenu;
