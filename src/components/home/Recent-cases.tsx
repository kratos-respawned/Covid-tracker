"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { WorldWideData } from "../../../typings/worldwideData";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { Skeleton } from "../ui/skeleton";
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
      {isLoading &&
        Array(5)
          .fill(0)
          .map((_, index) => <SkeletonRecentCases key={index} />)}
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

const SkeletonRecentCases = () => {
  return (
    <div className="flex items-center">
      <Skeleton className="flex h-9 w-9 aspect-square rounded-full " />
      <Skeleton className="ml-4 space-y-1 h-6 w-full" />
      <Skeleton className="justify-self-end ml-5 h-6 w-20" />
    </div>
  );
};
