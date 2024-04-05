import React, { PureComponent } from "react";

import {
  LineChart,
  Line,
  BarChart,
  AreaChart,
  Area,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Graphs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  render(props) {
  var newData = []
this.props.graphData.forEach((value,key)=>{
  if(key != " " && key !="world"){
    newData.push({name:value._id, value: value.total})
  }})

  // const datasort=newData.sort(function(a, b){return a - b})

    return (
      <div className="graphs">
        <p className="blockheading">{this.props.blockHading}</p>
        <div className="innerGraph">
          <ResponsiveContainer width="100%" height="100%">
            {this.props.blockHading == "Countries having Highest Likelihood" && (
              <LineChart
                // width={500}
                // height={300}
                data={newData}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
             
              </LineChart>
            )}

            {this.props.blockHading == "Cities having Highest Intensity" && (
              <BarChart
                // width={500}
                // height={300}
                data={newData}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
              </BarChart>
            )}

            {this.props.blockHading == "Sector having Highest relevance" && (
              <AreaChart
                // width={500}
                // height={400}
                data={newData}
                margin={{
                  top: 10,
                  right: 30,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="name"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
          </div>
  
      </div>
    );
  }
}
