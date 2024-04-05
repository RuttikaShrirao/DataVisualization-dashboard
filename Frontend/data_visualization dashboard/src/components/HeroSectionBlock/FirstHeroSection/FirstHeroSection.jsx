import * as React from 'react';
import { styled } from '@mui/material/styles';
import TodaySales from "./TodaySales";
import Graphs from "../Graphs";
import { useEffect, useState } from "react";

export default function FirstHeroSection() {
  const [countrydata, setCountrydata]=useState([])
  const [regiondata, setRegiondata]=useState([])
  const [relevancedata, setRelivancedata]=useState([])

  useEffect(()=>{
    graphInfoBcked()
  },[])

  const graph=[{
    // width:"40%",
    dataFromBcked:countrydata,
    graphHeading:"Countries having Highest Likelihood"
    },
    {
      width:"35rem",
      dataFromBcked:regiondata,
      graphHeading:"Cities having Highest Intensity"
      },
      {
        width:"20rem",
        dataFromBcked:relevancedata,
        graphHeading:"Sector having Highest relevance"
        }
    ]

  const graphInfoBcked=()=>{
    fetch(`http://localhost:8000/api/filterdata`)
    .then(res=>res.json())
    .then((data)=>{ 
      // console.log(data)
      setCountrydata(data.country);
      setRegiondata(data.region)
      setRelivancedata(data.sector)
    })  
  }

  return (
    <div className="secondblock" style={{ paddingBottom: "1.8rem" }}>

    <div className="firstBlock graphblock">
      <TodaySales />
    {graph.map((e,index)=>(
      <div key={index} style={{ width: e.width }}>
      <Graphs graphData={e.dataFromBcked} blockHading={e.graphHeading} />
    </div>
    ))
    }
      </div>
    </div>
  );
}
