import React, { useEffect, useState } from "react";
import HomePageExplore from "../../src/data/homepage-explore";

const tabNames = [
  "Free",
  "New to coding",
  "Most Popular",
  "Skills paths",
  "Career paths",
];

const LearnBox = () => {
  const [currentCoursBox, setCurrentCoursBox] = useState(HomePageExplore);
  // console.log(currentCoursBox)

  const [currentTag, setCurrentTag] = useState(tabNames[0]);
  // console.log(currentTag)

  // const [filterData, setFilterData] = useState([])
  let setValue = (value) => {
    setCurrentTag(value);
    // const result = currentCoursBox.filter((val)=>  currentTag == val )

    // console.log(result)
  };

  return (
    <div className="text-white">
      <div className="max-w-[1200px] w-[90%] m-auto">
        <div className="tabs flex justify-between m-auto md:w-[60%] bg-richblack-800 rounded-full p-1 mt-3 overflow-x-auto">
          {tabNames.map((val, i) => {
            return (
              <button
                key={i}
                onClick={() => setValue(val)}
                className={` ${
                  currentTag == val ? "bg-richblack-900" : null
                }  py-1 px-5 rounded-full`}
              >
                {val}
              </button>
            );
          })}
        </div>

        {/* ============================= course Card =========================== */}

        <div className="mt-[3rem] flex gap-5 flex-col md:flex-row justify-between flex-wrap ">
          {currentCoursBox.map((val) => {
            if (val.tag == currentTag) {
              return (
                <div className="relative p-5 md:w-[30%] bg-white ">
                  <p className="text-black font-semibold text-xl">
                    {val.heading}
                  </p>
                  <p className="text-richblack-500">{val.description}</p>

                  <div className="sticky bottom-0 w-full flex justify-between mt-5 text-richblue-500">
                    <p>{val.level}</p>
                    <p>{val.lessionNumber} Lesson</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default LearnBox;
