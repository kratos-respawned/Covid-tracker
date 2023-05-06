"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "./Overview";
import { RecentCases } from "./Recent-cases";

export const Data = () => {
  return (
    <section className="grid  grid-cols-4 md:grid-cols-7 gap-4">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <Card className="col-span-4 sm:col-span-3">
        <CardHeader>
          <CardTitle>Recent Cases</CardTitle>
          <CardDescription>Cases from all over the world</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentCases />
        </CardContent>
      </Card>
    </section>
  );
};
