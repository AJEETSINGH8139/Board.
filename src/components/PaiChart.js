import React, { Component } from 'react'
// import Chart from 'react-google-charts'
import {CanvasJSChart} from 'canvasjs-react-charts'


class PaiChart extends Component {
  render() {
    const options = {
        // theme: "dark2",
        animationEnabled: true,
        // exportFileName: "New Year Resolutions",
        // exportEnabled: true,

        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            // toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 55, label: "Basic Tees" },
                { y: 31, label: "Custom Short Pants" },
                { y: 14, label: "Super Hoodies" }
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}
}

export default PaiChart;
