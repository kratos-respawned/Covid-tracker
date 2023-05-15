"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    
    total: 74645235
  },
  {
    name: "Feb",
    total: 70236863,
  },
  {
    name: "Mar",
    total: 34523423,
  },
  {
    name: "Apr",
    total: 72564564,
  },
  {
    name: "May",
    total: 42312123,
  },
  {
    name: "Jun",
    total: 53434234,
  },
  {
    name: "Jul",
    total: 43235411,
  },
  {
    name: "Aug",
    total: 46765345,
  },
  {
    name: "Sep",
    total: 82342355,
  },
  {
    name: "Oct",
    total: 34634534,
  },
  {
    name: "Nov",
    total: 42342332,
  },
  {
    name: "Dec",
    total: 72312434,
  },
];

export function Graph() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={
            typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 12
          }
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={
            typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 10
          }
          
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
