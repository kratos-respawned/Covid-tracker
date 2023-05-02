import { CalendarDateRangePicker } from "@/components/home/CalendarDateRangePicker";
import DashboardCards from "@/components/home/DashboardCards";
import Navmenu from "@/components/home/Navmenu";

export default function Home() {
  return (
    <main className="p-4 rounded-md border  ">
      <header className="flex justify-between ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Dashboard
        </h1>
        <CalendarDateRangePicker className="w-fit gap-0 " />
      </header>
      <Navmenu />
      <DashboardCards />
    </main>
  );
}
