import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export const StateSheet=({data}:{
    data:any
})=>{
    
    
    
      return (
        <Sheet>
          <SheetTrigger asChild>
          <Card className="p-4 cursor-pointer">
               <CardTitle className="text-xl text-center">{data.title}</CardTitle>
                       <CardDescription>
                         <span className=" block text-lg mt-2 text-center">Total : {data.total}</span>
                       </CardDescription>
          </Card>
          </SheetTrigger>
          <SheetContent position="right" className="w-fit pr-28">
            <SheetHeader className="mt-7">
              <SheetTitle className="text-4xl">State <br /> <span className="text-2xl"> {data.title}</span> </SheetTitle>
              <SheetDescription>
                <span className="text-base block">Total : {data.total}</span>
              </SheetDescription>
            </SheetHeader>
            <div className=" space-y-4 py-4">
                <h3></h3>
                <div>
                        <p className="text-2xl font-medium">Partial  Vaccinated   </p>
                        <p className="text-lg text-muted-foreground">{data.partial_vaccinated}</p>
                </div>
                <div>
                        <p className="text-2xl font-medium">Fully Vaccinated   </p>
                        <p className="text-lg text-muted-foreground">{data.totally_vaccinated}</p>
                </div>
                <div>
                        <p className="text-2xl font-medium">Precaution  Dose</p>
                        <p className="text-lg text-muted-foreground">{data.precaution_dose}</p>
                </div>
                <div>
                        <p className="text-2xl font-medium">Today</p>
                        <p className="text-lg text-muted-foreground">{data.today}</p>
                </div>  
            </div>
          </SheetContent>
        </Sheet>
      )
    
    
}