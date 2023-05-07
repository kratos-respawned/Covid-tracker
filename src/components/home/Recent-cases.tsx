import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { WorldWideData } from "../../../typings/worldwideData";
import { globalStats } from "@/lib/worldStatFetcher";

export async function RecentCases() {
  const WorldWideStats: WorldWideData[] = await globalStats();

  return (
    <div className="space-y-8">
      {WorldWideStats.slice(1, 6).map((item) => {
        return (
          <div className="flex items-center" key={item.country}>
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              {/* <AvatarImage src="/next.svg" alt="Avatar" /> */}
              <AvatarFallback>{item.country.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.country}</p>
            </div>
            <div className="ml-auto font-medium">{item.activeCases}</div>
          </div>
        );
      })}
    </div>
  );
}
