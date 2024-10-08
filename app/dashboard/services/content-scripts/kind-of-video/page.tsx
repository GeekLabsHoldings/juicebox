"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef } from "react";
import styles from "./kindOfVideo.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

export default function Page() {
  const options = ["Option 1", "Option 1", "Option 1", "Option 1"];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/desktop-slide-1.png",
    "/assets/desktop-slide-2.png",
    "/assets/desktop-slide-3.png",
    "/assets/desktop-slide-4.png",
  ];
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "choose kind",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray))
        dispatch(addOption({
          name: "choose kind",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-scripts/ad-platforms");
    }
  };

  return (
    // Main container div with full height, column flex direction, and space-between alignment
    <NextPrevNav nextLink="/dashboard/services/content-scripts/ad-platforms" nextFunc={nextFunc} backLink="/dashboard/services/content-scripts/video-style">
      <div className="flex items-center justify-center h-full w-full">
        {/* Inner container with full width and custom editing styles */}
        <div className={`${styles.kindOfVideo} w-full`}>
          {/* Header section with padding and bottom margin */}
          <div className="pt-[2.667vh] pl-[4.264vw] mb-[6.222vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[1.851vh] w-[33%]">
              What kind of video do you want to be published on your channel? 
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4 className="text-[#FFFFFFCC]">
            we have a variety of video styles, pick the one you think would complement <br /> the video style you want!
            </h4>
          </div>

          {/* Container for options and slider with padding */}
          <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full gap-[20vw]">
            <div className={`${styles.btns} flex flex-col gap-[1.851vh]`}>
              {/* Iterate over options array and create CustomCheckBoxText components */}
              {options.map((e, i) => (
                <CustomCheckBoxText
                  btnSize="lg"
                  inputType="radio"
                  name="type"
                  value={e}
                  // Mouse move event to highlight the hovered item
                  onMouseOver={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(i); // Slide index is 0-based
                    }
                  }}
                  onClick={() => {
                    document.querySelectorAll("img.slide").forEach((e) => {
                      e.classList.remove("selected");
                    });
                    document
                      .querySelector(`.slide${i}`)
                      ?.classList.add("selected");
                  }}
                >
                  {e}
                </CustomCheckBoxText>
              ))}
            </div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={500}
              initialSlide={2}
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              allowTouchMove={false} // Disable slide navigation by mouse drag
              grabCursor={false}
              // modules={[EffectCoverflow, Pagination]}
              className="mySwiper desktop-swiper"
            >
              {slides.map((e, i) => (
                <SwiperSlide key={i}>
                  <img src={e} className={`slide slide${i} `} />
                  <div className="custom-shadow"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}
