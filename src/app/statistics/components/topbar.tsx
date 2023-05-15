import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School2, Syringe, UserCircle } from "lucide-react"

export const Topbar = () => {
    return (
        <>
            <Card className="hover:scale-[1.02] transition-transform">
                <CardHeader className="flex-col  justify-between items-center">
                    <School2 className=" w-20 h-20 -mt-14 " />
                    <CardTitle className="mt-20 text-center  text-xl">Sites Conducting Vaccination</CardTitle>
                    <CardDescription className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">111200</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 justify-around">
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Government</h3>
                        <p className="text-sm text-center">123123</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Private</h3>
                        <p className="text-sm text-center">1231231</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
                <CardHeader className="flex-col  justify-between items-center">
                    <Syringe className="animate-pulse w-20 h-20 -mt-14 " />
                    <CardTitle className="mt-20 text-center text-xl">Total Vaccination Doses</CardTitle>
                    <CardDescription className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">111200</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 justify-around">
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Dose 1</h3>
                        <p className="text-sm">123123</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Dose 2</h3>
                        <p className="text-sm">1231231</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base  capitalize">Precaution Dose</h3>
                        <p className="text-sm text-center">1231231</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
                <CardHeader className="flex-col  justify-between items-center">
                    <UserCircle className=" w-20 h-20 -mt-14 " />
                    <CardTitle className="mt-20 text-center  text-xl">Total Registrations</CardTitle>
                    <CardDescription className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">111200</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 justify-around">
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Age 12-14</h3>
                        <p className="text-sm text-center">123123</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Age 15-17</h3>
                        <p className="text-sm text-center">1231231</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Age 18-44</h3>
                        <p className="text-sm text-center">1231231</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-base capitalize">Age 45+</h3>
                        <p className="text-sm text-center">1231231</p>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}