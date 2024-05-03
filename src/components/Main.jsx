import React from "react";
import Left from "./Left";
import Right from "./Right";
import { useSelector } from "react-redux";
import { getPageData } from "../features/pageSlice";

export default function Main({ children }) {
  const pageData = useSelector(getPageData);
  const pageNo = useSelector((state) => state.page.pageNo);

  return (
    <div className="grid grid-cols-8 gap-3 place-items-center my-[20%] lg:my-[10%]">
      <div className="col-span-1 ">{pageNo > 0 && <Left />}</div>
      <div className="col-span-6">{children}</div>
      <div className="  col-span-1 ">
        {pageNo < pageData.length - 1 && <Right />}
      </div>
    </div>
  );
}
