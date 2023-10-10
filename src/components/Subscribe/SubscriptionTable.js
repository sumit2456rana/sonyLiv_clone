import React, { useState } from "react"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BottomSection from "./BottomSection";
function SubscriptionTable() {
  const [selected, setSelected] = useState("999");
  const handlePlanSelection = (plan) => {
    setSelected(plan);
  };

  return (
    <>
    <div className="table_main_container">
      <div className="subscriptionTable">
        <TableFixedColumn />
        <div className="plan_selection_main_container">
          <EachPlan
            premium={"Mobile Only"}
            price={"599"}
            period={"Yearly"}
            noOfLoggedDevices={"1"}
            noOfWatchOnSameTime={"1"}
            videoQuality={"HD (720p)"} 
            isSelected={selected === "599"}
            onSelect={() => handlePlanSelection("599")}
          />
          <EachPlan
            premium={"LIV Premium"}
            price={"999"}
            period={"Yearly"}
            noOfLoggedDevices={"5"}
            noOfWatchOnSameTime={"2"}
            videoQuality={"FULL HD (1080p)"} 
            isSelected={selected === "999"}
            onSelect={() => handlePlanSelection("999")}
          />
          <EachPlan
            premium={"LIV Premium"}
            price={"699"}
            period={"6 Months"}
            noOfLoggedDevices={"5"}
            noOfWatchOnSameTime={"2"}
            videoQuality={"FULL HD (1080p)"} 
            isSelected={selected === "699"}
            onSelect={() => handlePlanSelection("699")}
          />
          <EachPlan
            premium={"LIV Premium"}
            price={"299"}
            period={"Monthly"}
            noOfLoggedDevices={"5"}
            noOfWatchOnSameTime={"1"}
            videoQuality={"FULL HD (1080p)"} 
            isSelected={selected === "299"}
            onSelect={() => handlePlanSelection("299")}
          />
        </div>
      </div>
      
    </div>
    <BottomSection price={selected} />
    </>
  )
};

function TableFixedColumn() {
  return (
    <div className="table_fixed_col">
      <div className="head_first_cell">
        <h5>Access All Content</h5>
        <p>Movies, Originals And Live Sports</p>
      </div>
      <div className="first_cell">
        <div className="firstInfo">
          <div>Number of logged in devices </div>
          <div className="infoIcon"><InfoOutlinedIcon /></div>
        </div>
        <div className="firstInfo">
          <div>Watch on devices at same time </div>
          <div className="infoIcon"><InfoOutlinedIcon /></div>
        </div>
        <div className="firstInfo">
          <div>Max Video Quality </div>
          <div className="infoIcon"><InfoOutlinedIcon /></div>
        </div>
        <div className="firstInfo">
          <div>Max Audio Quality </div>
          <div className="infoIcon"><InfoOutlinedIcon /></div>
        </div>
        <div className="firstInfo">
          <div>Advertisement </div>
          <div className="infoIcon"><InfoOutlinedIcon /></div>
        </div>
      </div>
    </div>
  )
}
function EachPlan({ premium, price, period, noOfLoggedDevices, noOfWatchOnSameTime, videoQuality ,isSelected,
  onSelect, }) {
  return (
    <div className={`each_plan ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <div className="head" >
        <div className="radio_container">
          <span className="outer_circle">
            <input type="radio" name="plan" checked={isSelected} onChange={onSelect} />
            <span className="inner_circle"></span>
          </span>

        </div>
        <div className="devices">
          <p>{premium}</p>
        </div>
        <div className="price_val">
          <span className="price">&#8377;{price} </span>
          <span className="period">{period}</span>
        </div>
      </div>
      <div className="subCells">
        <div className="noOfLoggedDev">
          <span>{noOfLoggedDevices}</span>
        </div>
        <div className="noOfWatchOnsame">
          <span>{noOfWatchOnSameTime}</span>
        </div>
        <div className="maxVidQua">
          <span>{videoQuality}</span>
        </div>
        <div className="maxAudQua">
          <span>Stereo 2.1</span>
        </div>
        <div className="add">
          <span>On Live Sports & Reality TV Shows</span>
        </div>
      </div>
    </div>
  )
}
export default SubscriptionTable;
