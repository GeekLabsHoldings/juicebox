"use client";
import React, { use, useContext, useEffect, useRef, useState } from "react";
import styles from "./services.module.css";
import ServicesTable from "../../_components/Services/ServicesTable";
import CustomCheckBoxText from "../../_components/customCheckBox/CustomCheckBoxText";
import { globalContext } from "../../_context/GlobalContext";

export default function Page() {
  const filters = [
    "Finance",
    "Design",
    "Marketing",
    "Sales",
    "Human Resources",
    "Web Development",
    "UX/UI",
    "Content Creation",
    "Video Editing",
    "Motion Graphics",
    "Finance",
    "Design",
    "Marketing",
    "Sales",
    "Human Resources",
    "Web Development",
    "UX/UI",
    "Content Creation",
    "Video Editing",
    "Motion Graphics",
  ];

  const [isAdvancedFilterActive, setIsAdvancedFilterActive] =
    useState<boolean>(false);

  const { setOpen } = useContext(globalContext);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleToggleAdvancedFilter() {
    setIsAdvancedFilterActive(!isAdvancedFilterActive);
    // close SideNav
    setOpen(false);
  }

  const dragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    if (carouselRef.current !== null) {
      setStartScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const dragging = (e: React.MouseEvent) => {
    if (!isDragging || carouselRef.current === null) return;

    e.preventDefault();
    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // // Check if the new scroll position exceeds
    // // the carousel boundaries
    // if (
    //   newScrollLeft <= 0 ||
    //   newScrollLeft >=
    //     carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    // ) {
    //   // If so, prevent further dragging
    //   setIsDragging(false);
    //   return;
    // }

    // Otherwise, update the scroll position of the carousel
    console.log("newScrollLeft", newScrollLeft);
    carouselRef.current.scrollLeft = newScrollLeft;
  };

  const scroll = (e: React.WheelEvent) => {
    if (carouselRef.current === null) return;
    if (e.deltaY == 0) return;
    e.preventDefault();
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft + e.deltaY * 3,
      behavior: "smooth",
    });
  };

  const dragStop = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    console.log("startX", startX);
    console.log("startScrollLeft", startScrollLeft);
  }, [startScrollLeft]);

  useEffect(() => {
    if (isDragging) {
      console.log("start dragging", isDragging);
    } else {
      console.log("stop dragging", isDragging);
    }
  }, [isDragging]);

  return (
    <section
      className="services-page"
      onMouseMove={dragging}
      onMouseUp={dragStop}
    >
      {/* ===== Start Filter Tabs ===== */}
      <div
        className={styles.filterTabs + " flex mx-[1.5vw]"}
        ref={carouselRef}
        onMouseDown={dragStart}
        onWheel={scroll}
      >
        <div className="flex flex-shrink-0">
          {filters.map((e, idx) => (
            <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
              {e}
            </CustomCheckBoxText>
          ))}
        </div>
      </div>
      {/* ===== End Filter Tabs ===== */}

      {/* ===== Start Search & Advanced Filters ===== */}
      <div
        className={
          styles.searchAndFilter +
          " flex justify-between items-center gap-[0.85vw] px-[1.5vw]"
        }
      >
        <div className="relative w-[90%]">
          <input
            type="search"
            placeholder="Search"
            className="w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            className="absolute top-1/2 transform -translate-y-1/2"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4446 14.0636C16.4446 14.0636 14.1688 12.0729 13.6244 11.5292C12.8255 10.7344 12.5058 10.3516 12.7879 9.70531C14.0216 7.18915 13.5948 4.06558 11.5023 1.97363C8.87138 -0.657876 4.60461 -0.657876 1.9734 1.97363C-0.657801 4.60546 -0.657801 8.87094 1.9734 11.5031C4.06472 13.5944 7.18926 14.0212 9.70445 12.7878C10.3508 12.5061 10.7345 12.8257 11.529 13.625C12.073 14.169 14.0627 16.4452 14.0627 16.4452C15.095 17.4769 15.8892 16.842 16.366 16.3658C16.8418 15.8894 17.4769 15.0955 16.4446 14.0636ZM9.49667 9.49656C7.97263 11.0196 5.50269 11.0196 3.97929 9.49656C2.45592 7.97348 2.45592 5.50292 3.97929 3.97984C5.50269 2.45677 7.97263 2.45677 9.49667 3.97984C11.0201 5.50292 11.0201 7.97348 9.49667 9.49656Z"
              fill="#F8F24B"
              fill-opacity="0.44"
            />
          </svg>
        </div>

        <span
          className={isAdvancedFilterActive ? styles.active : ""}
          onClick={() => handleToggleAdvancedFilter()}
        >
          Advanced Filter
        </span>
      </div>
      {/* ===== End Search & Advanced Filters ===== */}

      {/* ===== Start Services Table ===== */}
      <ServicesTable
        isAdvancedFilterActive={isAdvancedFilterActive}
        searchQuery={searchValue}
      />
      {/* ===== End Services Table ===== */}
    </section>
  );
}
