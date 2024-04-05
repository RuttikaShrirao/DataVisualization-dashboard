import "../../../CSS/HeroSection.css";
import salesImg from "../../../assets/todays_sales/sales.png";
import customer from "../../../assets/todays_sales/customer.png";
import order from "../../../assets/todays_sales/order.png";
import productSale from "../../../assets/todays_sales/sales.png";
import ExportIcon from '../../../assets/todays_sales/Export Icon.png'
import { useState,useEffect } from "react";
export default function TodaySales() {

const [impact, setImpact] = useState([])
  useEffect(()=>{
    blockInfoBcked()
  },[])

  const blockInfoBcked=()=>{
    fetch(`http://localhost:8000/api/filterdata/impact`)
    .then(res=>res.json())
    .then((data)=>{ 
      setImpact(data);
      
    })
  }

  const sales = [
    {
      id: "1",
      backgroundColor: "#FFE2E5",
      img: salesImg,
      money: impact[0],
      moreInfo: "Total Sales",
    },
    {
      id: "2",
      backgroundColor: "#FFF4DE",
      img: order,
      money: impact[1],
      moreInfo: "Total Order",
    },
    {
      id: "3",
      backgroundColor: "#DCFCE7",
      img: productSale,
      money: impact[2],
      moreInfo: "Product Sold",
    }
  ];

  return (
    <div className="todaysSales">
      <div className="exportButton">
      
          <p className="todaySaleHeading">Impact on Sales</p>
          
        <button><img src={ExportIcon} /><span>Export</span> </button>

      </div>
          <p className="SalesSummary">Sales Summary</p>
       

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sales.map((e) => (
          <div
            key={e.id}
            className="todaySalesInfoBlock"
            style={{ backgroundColor: e.backgroundColor }}
          >
            <img src={e.img} alt="Logo" />
            <h2>{e.money}%</h2>
            <p style={{ paddingBottom: "5px" }}>{e.moreInfo}</p>
            <p style={{ color: "#4079ED", fontSize: "13.61px" }}>
              {e.growthInfo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
