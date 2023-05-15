import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

 function page() {
    return (
        <Card className="w-full ">
            <CardHeader >
                <CardTitle className="text-4xl font-semibold" >
                    Analytics Using
                </CardTitle>
                    <CardDescription className="text-4xl font-semibold">
                     Open AI
                    </CardDescription>
            </CardHeader>
            <CardContent className="py-14">
        <h1 className="text-5xl font-bold text-center text-white">Coming Soon</h1>
        </CardContent>
        <CardFooter>

        </CardFooter>
        </Card>
    )
}
export default page;