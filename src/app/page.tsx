import { CalendarDateRangePicker } from "@/components/home/CalendarDateRangePicker";
import DashboardCards from "@/components/home/DashboardCards";
import { Data } from "@/components/home/Data";
import Navmenu from "@/components/home/Navmenu";
import ThemeChanger from "@/components/home/ThemeChanger";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-4 rounded-md border  ">
      <header className="flex flex-col md:flex-row gap-y-9 justify-between relative ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          Covid-19 Dashboard
        </h1>
        <div className="flex gap-x-4 items-center">
          <CalendarDateRangePicker className="w-fit gap-0 " />
          <ThemeChanger />
        </div>
      </header>
      <Tabs defaultValue="overview" className="space-y-4 mt-12 ">
        <Navmenu />
        <TabsContent className="space-y-8" value="overview">
          <DashboardCards />
          <Data />
        </TabsContent>
        <TabsContent value="analytics" className=" grid place-items-center">
          <h1 className="scroll-m-20 text-2xl py-64 font-extrabold tracking-tight lg:text-4xl">
            Coming Soon
          </h1>
        </TabsContent>
      </Tabs>
    </main>
  );
}
