import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutGraph } from "./donut-graph"

export const Graphbar = ({ vaccineWiseData, ageWiseData, genderWiseData }: {
    vaccineWiseData: any,
    ageWiseData: any,
    genderWiseData: any
}) => {
    return (
        <div className=" p-4  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Vaccination By Type
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <DonutGraph data={vaccineWiseData} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Vaccination By Age
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <DonutGraph data={ageWiseData} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Vaccination By Gender
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <DonutGraph data={genderWiseData} />
                </CardContent>
            </Card>
        </div>
    )
}