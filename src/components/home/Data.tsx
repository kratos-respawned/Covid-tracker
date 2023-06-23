import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Graph } from "./Graph";
import { RecentCases } from "./Recent-cases";

export const Data = () => {
  return (
    <section className="grid  grid-cols-4 md:grid-cols-7 gap-4 mt-8">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Graph /> */}
        </CardContent>
      </Card>
      <Card className="col-span-4 sm:col-span-3">
        <CardHeader>
          <CardTitle>Recent Cases</CardTitle>
          <CardDescription>Cases from all over the world</CardDescription>
        </CardHeader>
        <CardContent>
          {/* @ts-expect-error */}
          <RecentCases />
        </CardContent>
      </Card>
    </section>
  );
};
