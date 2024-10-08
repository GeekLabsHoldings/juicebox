"use client";
import React, { useState } from "react";
import styles from "./createAccount.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const router = useRouter();
  const [haveAccount, setHaveAccount] = useState(false);
  const [doLater, setDoLater] = useState(false);
  const [pastedText, setPastedText] = useState<string>("");

  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveAccount && !doLater && pastedText) {
      itemsArray.push({
        name: "Do you currently have a account to run ads on?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Do you currently have a account to run ads on?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
        route.push("/dashboard/services/paid-ads-flow/trying-paid-ads");
    } else if (
      !haveAccount &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "Do you currently have a account to run ads on?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "Do you currently have a account to run ads on?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
        route.push("/dashboard/services/paid-ads-flow/trying-paid-ads");
    } else if (doLater) {
      itemsArray.push({
        name: "Do you currently have a account to run ads on?",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "Do you currently have a account to run ads on?",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/paid-ads-flow/trying-paid-ads");
    }
  };

  return (
    <NextPrevNav
      nextLink="/dashboard/services/paid-ads-flow/trying-paid-ads" nextFunc={nextFunc}
      backLink="/dashboard/services/paid-ads-flow/"
    >
      {/* // Main container div with relative positioning */}
      <div className=" h-full relative w-full">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw] w-[60%] mx-auto">
              Do you currently have a account to run ads on?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC] text-[--18px]">
                Our expert developers can craft a website for you in no time, or
                you can provide your own design!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveAccount(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"I have an account"}
              >
                I have an account
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveAccount(false)
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setPastedText("")
                }}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Make one for me"}
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div
              className={`mx-auto w-full ${
                haveAccount ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw] font-semibold text-[--20px]">
                Account URL
              </h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveAccount ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                onClick={handlePaste}
                  disabled={haveAccount ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
                >
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  haveAccount && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveAccount ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 ${
                    haveAccount ? "cursor-pointer" : ""
                  }`}
                  onChange={() => setDoLater((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
