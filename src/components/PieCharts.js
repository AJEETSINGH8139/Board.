import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class PieCharts extends React.Component {
   COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
   pieData = [
      {
         name: "Basic Tees",
         value: 55
      },
      {
         name: "Custom Short Pants",
         value: 31
      },
      {
         name: "Super Hoodies",
         value: 14
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
      <PieChart width={480} height={200} className="piechart">
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
        //  cx="50%"
        //  cy="50%"
         outerRadius={80}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      );
   }
}
export default PieCharts;