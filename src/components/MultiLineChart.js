import React, { Component } from 'react'
// import Chart from 'react-google-charts'
import {CanvasJSChart} from 'canvasjs-react-charts'


class MultiLineChart extends Component {
  render() {
    const options = {
        // animationEnabled: true,	
        // title:{
        //     text: "Number of New Customers"
        // },
        axisX:{
			valueFormatString: "####"
		},
		axisY:{
			stripLines:[
			{                
				startValue:25,
				endValue:32,                
				color:"#d8d8d8"                
			}
			]                    
		},
        toolTip: {
            // shared: true
        },
        data: [{
            type: "spline",
            // name: "Guest",
            color: "#E9A0A0",
            // showInLegend: true,
            dataPoints: [
                { y: 200, label: " " },
                { y: 390, label: "Week 1" },
                { y: 200, label: "Week 2" },
                { y: 300, label: "Week 3" },
                { y: 220, label: "Week 4" },
                { y: 450, label: " " }
            ]
        },
        {
            type: "spline",
            // name: "User",
            color: "#9BDD7C",
            // showInLegend: true,
            dataPoints: [
                { y: 100, label: " " },
                { y: 400, label: "Week 1" },
                { y: 150, label: "Week 2" },
                { y: 440, label: "Week 3" },
                { y: 190, label: "Week 4" },
                { y: 250, label: " " }
            ]
        }]
}

return (
<div className='line-chart'>
    <CanvasJSChart options = {options} 
        /* onRef={ref => this.chart = ref} */
    />
    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
</div>
);
  }
}
export default MultiLineChart