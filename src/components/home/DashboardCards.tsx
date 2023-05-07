import { UserCog, Skull, Activity, Dna } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorldWideData } from "../../../typings/worldwideData";
import { globalStats } from "@/lib/worldStatFetcher";

async function DashboardCards() {
  const WorldWideStats: WorldWideData[] = await globalStats();
  const WorldStats = WorldWideStats[0];
  const Data = [
    {
      number: WorldStats.totalCases,
      title: "Total Cases",
      icon: <UserCog />,
      caption: "new cases ",
      captionNumber: WorldStats.newCases,
    },
    {
      number: WorldStats.totalRecovered,
      title: "Total Recovered",
      icon: <Dna />,
      caption: "new recovered ",
      captionNumber: WorldStats.newRecovered,
    },
    {
      number: WorldStats.totalDeaths,
      title: "Total Deaths",
      icon: <Skull />,
      caption: "new deaths ",
      captionNumber: WorldStats.newDeaths,
    },
    {
      number: WorldStats.activeCases,
      title: "Total Active",
      icon: <Activity className="animate-pulse" />,
    },
  ];

  return (
    <section className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-8">
      {Data.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          number={item.number}
          caption={item.caption}
          captionNumber={item.captionNumber}
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
  caption,
  captionNumber,
}: {
  title: string;
  number: string;
  icon: JSX.Element;
  caption?: string;
  captionNumber?: string;
}) => {
  return (
    <Card className=" transition-transform hover:scale-[1.02]  overflow-clip ">
      <CardHeader className="flex-row space-y-0 justify-between items-center">
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="pb-2  space-y-1.5">
        <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          {number}
        </p>

        <p className="scroll-m-20 text-base  font-semibold tracking-tight">
          {!caption ? "+20.1% from last month" : `${captionNumber} ${caption}`}
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
