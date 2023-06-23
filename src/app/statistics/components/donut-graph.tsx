"use client"
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart"
export const DonutGraph = ({data}:{data:any}) => {    
  data = JSON.parse(data);
  const shiftSize = 0;
  const defaultLabelStyle = {
    fontSize: '3px',
    fontFamily: 'sans-serif',
  };
    return(
        <>    
            <PieChart
            data={data.sort((a:any,b:any)=>a.value-b.value)}
            radius={pieChartDefaultProps.radius-13}
            
            segmentsShift={(index) => (index === 0 ? shiftSize : 1)}
            animate
            label={({ dataEntry }) => dataEntry.value>1 && dataEntry.title}
            labelStyle={{
          ...defaultLabelStyle,
          accentColor: '#fff',
          filter:'invert(1)'
        }}
        />
        </>
    )
}