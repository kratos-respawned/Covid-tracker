import { Separator } from "@/components/ui/separator";
import { Topbar } from "./components/topbar";
import { Graphbar } from "./components/graphbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StateSheet } from "./components/state-sheet";
import { vaccineData } from "@/lib/stateData";

async function Index() {
  const data = await vaccineData();
  return (
    <>
      <Separator />
      <section className=" mt-5">
        <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* @ts-ignore */}
          <Topbar />
        </div>
        {/* @ts-ignore */}
        <Graphbar />
        <Card className="p-4  ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              State Wise Data
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-5 gap-x-7">
            {data.stateWiseData.map((item: any) => {
              return <StateSheet data={item} key={item.title} />;
            })}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
export default Index;
