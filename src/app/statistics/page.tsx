import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { fetchStats } from "@/lib/fetch-stats";
import { School2, Syringe, UserCircle } from "lucide-react";
import { Topbar } from "./components/topbar";
import { Pie, PieChart } from "recharts";
import { Graph } from "./components/graph";

async function page() {
    const data=await fetchStats();
    const {registrationData, sitesConductingVaccination, ageWiseData, stateWiseData, genderWiseData, vaccineWiseData, doseWiseData}=data;
return (
    <>
    <Separator />
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-14">
      <Topbar/>
        </section>
      <Graph  />
    </>)
}
export default page

