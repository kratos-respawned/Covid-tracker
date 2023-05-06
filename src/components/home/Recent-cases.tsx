"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { WorldWideData } from "../../../typings/worldwideData";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export const RecentCases = () => {
  const {
    data: WorldWideStats,
    isLoading,
    error,
  }: {
    data: WorldWideData[];
    isLoading: boolean;
    error: any;
  } = useSWR("countryWise", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
  return (
    <div className="space-y-8">
      {!isLoading &&
        !error &&
        WorldWideStats.slice(1, 6).map((item) => (
          <div className="flex items-center" key={item._id}>
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>{item.country.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.country}</p>
            </div>
            <div className="ml-auto font-medium">{item.activeCases}</div>
          </div>
        ))}
      {!isLoading && error && <p className="text-red-500">Error</p>}
    </div>
  );
};
