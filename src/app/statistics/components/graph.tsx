"use client";
import { fetcher } from "@/lib/fetcher";

import { Pie, PieChart, ResponsiveContainer, } from "recharts";
import useSWr from "swr";
export  function Graph() {
    const {data,isLoading}=useSWr("vaccinationData",fetcher);
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <>
    <ResponsiveContainer width="100%" height={400}>
    <PieChart width={730} height={250}>
  <Pie data={data?.genderWiseData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#adfa1d" label />
</PieChart>
</ResponsiveContainer>
    </>
  );
}
