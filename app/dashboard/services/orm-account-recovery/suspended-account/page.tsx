"use client";
import classNames from "classnames";
import styles from "./suspended-account.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addOption } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";

function SuspendedAccount() {
  const [email, setEmail] = useState("");
  const router = useRouter()

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (email) {
      itemsArray.push({
        name: "associated email",
        ans: email
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "associated email",
          ans: email
        }))
      router.push("/dashboard/services/orm-account-recovery/suspension-approvel");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-account-recovery/suspended-date"
      nextLink="/dashboard/services/orm-account-recovery/suspension-approvel" nextFunc={nextFunc}
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-[50%] flex justify-center">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.addLinkEdit} w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div
            className={classNames(
              "text-center mx-auto mb-[3.556vh]",
              styles.container
            )}
          >
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh]">
              Please provide the email associated with the suspended account
            </h2>

            {/* Subheading with text centered */}
            <h4 className="text-center">
              Drop the email of your suspended account, and we’ll work our magic
              to get you back online!
            </h4>
          </div>

          {/* Container for input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit">
            {/* Subheading for input field */}
            <h3 className="mb-[1.067vh]">Email</h3>

            {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start">
              {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="h-full w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] pl-[--35px] px-[1.088vw] py-[--13px] placeholder:text-[#FFFFFF80]"
              />

              {/* Button with background color, padding, text color, and rounded corners */}
              <button
                className="bg-[var(--highlight-yellow)] font-bold px-[--30px] py-[--13px] text-black rounded-[var(--33px)]"
                onClick={() => navigator.clipboard.readText().then(setEmail)}
              >
                Paste Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default SuspendedAccount;
