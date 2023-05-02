import { UserCog, Skull, Activity, Dna } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function DashboardCards() {
  return (
    <section className="grid grid-cols-4 gap-x-8">
      {Data.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          number={item.number}
          icon={item.icon}
        />
      ))}
    </section>
  );
}

export default DashboardCards;

const DashboardCard = ({
  title,
  number,
  icon,
}: {
  title: string;
  number: number;
  icon: any;
}) => {
  return (
    <Card className=" transition-transform hover:scale-[1.02]  overflow-clip ">
      <CardHeader className="flex-row space-y-0 justify-between items-center">
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="pb-2">
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {number}
        </p>
      </CardContent>
      <CardFooter>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight">
          +20.1% from last month
        </p>
      </CardFooter>
    </Card>
  );
};

const Data = [
  {
    number: 1100,
    title: "Total Cases",
    icon: <UserCog />,
  },
  {
    number: 700,
    title: "Total Recovered",
    icon: <Dna />,
  },
  {
    number: 300,
    title: "Total Deaths",
    icon: <Skull />,
  },
  {
    number: 100,
    title: "Total Active",
    icon: <Activity />,
  },
];
