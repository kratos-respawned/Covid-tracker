"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Overview } from "./Overview";
import { Globe2 } from "lucide-react";

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
          <CardDescription>Recent cases from the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentCases />
        </CardContent>
      </Card>
    </section>
  );
};

const RecentCases = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>
            <Globe2 />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Worldwide</p>
        </div>
        <div className="ml-auto font-medium">+1,99912</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">India</p>
        </div>
        <div className="ml-auto font-medium">+399645</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">United States</p>
        </div>
        <div className="ml-auto font-medium">+29922</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>UK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">United Kingdom</p>
        </div>
        <div className="ml-auto font-medium">+991234</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>EU</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Europe</p>
        </div>
        <div className="ml-auto font-medium">+395342</div>
      </div>
    </div>
  );
};
