import { CalendarDateRangePicker } from "@/components/home/CalendarDateRangePicker";
import DashboardCards from "@/components/home/DashboardCards";
import { LineChart } from "@/components/home/LineChart";
import Navmenu from "@/components/home/Navmenu";
import ThemeChanger from "@/components/home/ThemeChanger";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-4 rounded-md border  ">
      <header className="flex justify-between ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          Dashboard
        </h1>
        <div className="flex gap-x-4 items-center">
          <CalendarDateRangePicker className="w-fit gap-0 " />
          <ThemeChanger />
        </div>
      </header>
      <Tabs defaultValue="overview" className="space-y-4 mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <DashboardCards />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
