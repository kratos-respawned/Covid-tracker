import { UserCog } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function DashboardCards() {
  return (
    <section className="grid grid-cols-4 gap-x-4">
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </section>
  );
}

export default DashboardCards;
const DashboardCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 justify-between items-center">
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Total Cases
        </CardTitle>
        <UserCog />
      </CardHeader>
      <CardContent>
        <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          1000
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
