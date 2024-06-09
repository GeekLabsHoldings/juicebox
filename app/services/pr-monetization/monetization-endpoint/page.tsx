"use client";
import React from "react";
import styles from "./monetizationEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className={`${styles.monetizationEndPoint} flex flex-col justify-between h-full w-full`}>
      {/* Inner container with relative positioning and full height */}
      <div className="h-full relative">
        {/* Container for the video end point section with custom styles and flexbox centering */}
        <div
          className={`${styles.monetizationEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment with auto horizontal margins and bottom margin */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with bottom margin and underlined text */}
              <h2 className="mb-[1.5vw]">
                Based on everything you told us, the estimated
                <br /> cost will be <span> $XXX </span> to get monetized.
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, auto horizontal margins, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting "Let's get started" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Let's get started
              </CustomCheckBoxText>

              {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                I want to talk to someone first
              </CustomCheckBoxText>
            </div>

            {/* Button for saving progress with various styling */}
            <button className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200 underline">
              Save my Progress
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons container with flexbox layout, center alignment, and justified space between */}
      <div className="flex justify-between items-center">
        {/* Link for going back, styled with background color, text color, padding, rounded corners, and font weight */}
        <button
          onClick={() => router.back()}
          className="bg-[#484848] text-white px-[2vw] py-[0.5vw] w-fit rounded-[41.03px] font-semibold"
        >
          Back
        </button>

        {/* Link for completing the process, styled with background color, text color, padding, rounded corners, and font weight */}
        <Link
          href={"/services"}
          className="bg-[#F8F24B] text-black px-[2vw] py-[0.5vw] w-fit rounded-[41.03px] font-bold"
        >
          All Done
        </Link>
      </div>
    </div>
  );
};

export default page;