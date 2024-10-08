"use client";
import React, { useEffect, useState } from "react";
import styles from "./campaignFollowers.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

const Page = () => {
  const [num,setNum] = useState(0)
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (num) {
      itemsArray.push({
        name: "How many follow ups would you like in your campaign?",
        ans: `${String(num)} Follow Up`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "How many follow ups would you like in your campaign?",
          ans: `${String(num)} Follow Up`,
        }))
      route.push("/dashboard/services/email-marketing/emailEndPoint");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/email-marketing/emailEndPoint" nextFunc={nextFunc}
      backLink="/dashboard/services/email-marketing/campaign-implementation"
    >
      <div className=" flex justify-center items-center h-full w-full mb-[--sy-60px]">
        <div className={`${styles.campaignFollowers} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[--55px]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[--sy-24px]">
            How many follow ups would you like in your campaign?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <h4>
              Please select the desired number of follow ups for your campagin.{" "}
              <hr className="border-0" /> The price may vary based on the
              selected rank.
            </h4>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}

          <div className=" w-full md:w-1/2 mx-auto">
            <CustomTypeRange word="Follow Up" max={100} setNum={setNum}/>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
