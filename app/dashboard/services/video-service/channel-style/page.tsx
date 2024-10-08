"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef } from "react";
import styles from "./channelStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption, incrementTotalSteps } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";

export default function Page() {
  const options = [
    "Maps Video",
    "Motion Graphics",
    "Video Style 1",
    "Video Style 2",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/desktop-slide-1.png",
    "/assets/desktop-slide-2.png",
    "/assets/desktop-slide-3.png",
    "/assets/desktop-slide-4.png",
    "/assets/desktop-slide-1.png",
  ];
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "channel style",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "channel style",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }));
      route.push("/dashboard/services/video-service/footage-edit");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])
  return (
    // Main container div with flexbox layout, column direction, and full height
    <NextPrevNav
      nextLink="/dashboard/services/video-service/footage-edit" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/video-service/choose-kind"
    >
      <div className="flex items-center justify-center h-full w-full">
        {/* Inner container with full width and custom styles for channel style selection */}
        <div
          className={`${styles.channelStyle} flex flex-col gap-[--sy-35px] justify-around w-full`}
        >
          {/* Header section with top padding, left padding, and bottom margin */}
          <div className="pl-[4.264vw]">
            {/* Main heading with bottom margin and embedded horizontal rules */}
            <h2 className="mb-[1.851vh]">
              Gotcha! <hr className="border-0" />
              We can match your channel's style exactly, or if you want to mix
              <hr className="border-0" /> things up, we have other YouTube video
              styles to choose from.
            </h2>

            {/* Subheading with embedded horizontal rules */}
            <h4>
              We have a variety of video styles, pick the one you think would
              complement <hr className="border-0" /> the video style you want!
            </h4>
          </div>

          {/* Container for buttons and slider with flexbox layout, padding, and justified content */}
          <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full gap-[20vw]">
            <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
              {/* Iterate over options array and create CustomCheckBoxText components */}
              {options.map((e, i) => (
                <CustomCheckBoxText
                  btnSize="xl"
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
              allowTouchMove={false} // Disable slide navigation by mouse drag
              grabCursor={false}
              pagination={true}
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
