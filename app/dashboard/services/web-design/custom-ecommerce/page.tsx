"use client";
import classNames from "classnames";
import styles from "./custom-ecommerce.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { useRef } from "react";
import { addOption } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";

const defaultPages = [
  "Sign Up",
  "Log in",
  "Check Out",
  "Product Details",
  "Home Page",
  "Cart",
  "Check Out",
  "Payment Details",
  "Address Details",
  "Contact Us",
  "About Us",
  "Privacy & Security",
  "Terms and Conditions",
  "FAQ",
  "Order Confirmation",
];
const additionalPages = [
  "Wishlist",
  "User Profile",
  "Blog",
  "Returns and Exchanges",
  "Store Locator",
  "Reviews and Testimonials",
  "Community",
  "Careers",
];

function Page() {
  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/mobile-slide-1.png",
    "/assets/mobile-slide-2.png",
    "/assets/mobile-slide-3.png",
    "/assets/mobile-slide-4.png",
    "/assets/mobile-slide-1.png",
    "/assets/mobile-slide-2.png",
    "/assets/mobile-slide-3.png",
    "/assets/mobile-slide-4.png",
  ];

  const route = useRouter()
  const dispatch = useDispatch();
  const all = useSelector((state: RootState) => state.service.options);

  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='checkbox']:checked")) {
      const checkedValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
  .map((checkbox) => (checkbox as HTMLInputElement).value);
      itemsArray.push({
        name: "customize pages",
        choice: checkedValues.join(",")
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "customize pages",
          choice:checkedValues.join(","),
        }))
      route.push("/dashboard/services/web-design/additional-features");
    }
  };
  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/website-style" nextFunc={()=>nextFunc()}
      nextLink="/dashboard/services/web-design/additional-features"
    >
      <div className={`${styles.ecommerce} flex flex-col justify-center ml-[--32px]`}>
        <div
          className={classNames(
            "flex flex-col gap-[var(--16px)]",
            styles.container
          )}
        >
          <h1 className="text-[--32px] font-semibold">
            Customize Your E-commerce Web Pages
          </h1>
          <p className="text-[--18px] text-[#B1B1B1]">
            Below is a list of typical pages in an e-commerce app. You can add
            or remove pages by <br /> clicking on them. If you need additional
            features, you can type them in the box provided.
          </p>
        </div>
        <div className="flex grow">
          <div className="flex gap-[var(--16px)] w-1/2">
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-col gap-[var(--32px)]">
                <div className="flex items-center gap-[var(--16px)]">
                  <h2 className="text-[--24px] font-medium">Default Pages</h2>
                  <span className="relative">
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      className="cursor-pointer peer group h-[var(--18px)] w-[var(--18px)]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                        fill="#484848"
                        className="group-hover:fill-white transition-colors duration-200"
                      />
                    </svg>
                    <span className="bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[var(--7px)] opacity-0 text-[#E4E4E4] absolute top-1/2 left-full transform translate-x-4 -translate-y-1/2 max-w-[30vw] border-l-[--3px] border-[var(--highlight-yellow)] peer-hover:opacity-100 peer-hover:visible transition-all duration-200">
                      <p className="w-max max-w-full">
                        These pages are part of the default configuration and
                        cannot be removed from the application.
                      </p>
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap text-[--14px] gap-[var(--8px)]">
                  {defaultPages.map((page) => (
                    <CustomCheckBoxText
                      btnSize="sm"
                      inputType="checkbox"
                      disabled
                    >
                      {page}
                    </CustomCheckBoxText>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[var(--32px)]">
                <div className="flex items-center gap-[var(--16px)]">
                  <h2 className="text-[--24px] font-medium">
                    Additional Pages
                  </h2>
                  <span className="relative">
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      className="cursor-pointer peer group h-[var(--18px)] w-[var(--18px)]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                        fill="#484848"
                        className="group-hover:fill-white transition-colors duration-200"
                      />
                    </svg>
                    <span className="bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[var(--7px)] opacity-0 text-[#E4E4E4] absolute top-1/2 left-full transform translate-x-4 -translate-y-1/2 max-w-[30vw] border-l-[--3px] border-[var(--highlight-yellow)] peer-hover:opacity-100 peer-hover:visible transition-all duration-200">
                      <p className="w-max max-w-full">
                        Additional pages that you could add to your application.
                      </p>
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap text-[--14px] gap-[var(--8px)]">
                  {additionalPages.map((page, i) => (
                    <CustomCheckBoxText
                      btnSize="sm"
                      inputType="checkbox"
                      value={page}
                      onMouseOver={() => {
                        if (swiperRef.current) {
                          swiperRef.current.slideTo(i); // Slide index is 0-based
                        }
                      }}
                      onClick={() => {
                        // document.querySelectorAll("img.slide").forEach((e) => {
                        //   // e.classList.remove("selected");
                        // });
                        document
                          .querySelector(`.slide${i}`)
                          ?.classList.toggle("selected");
                      }}
                    >
                      {page}
                    </CustomCheckBoxText>
                  ))}
                </div>
              </div>
            </div>
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
            className="mySwiper mobile-swiper"
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
    </NextPrevNav>
  );
}

export default Page;
