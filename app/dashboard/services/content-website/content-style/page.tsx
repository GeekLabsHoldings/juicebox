"use client";
import classNames from "classnames";
import styles from "./contentStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
const RewriteWebsite = () => {
  const data = ["Causal Tone", "Serious Tone"];
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "How do you want the written content tone to be?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "How do you want the written content tone to be?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-website/reference-sources");
    }
  };

  return (
    <NextPrevNav
      backLink="/dashboard/services/content-website/live-website" nextFunc={nextFunc}
      nextLink="/dashboard/services/content-website/reference-sources"
    >
      <div
        className={classNames(
          "flex flex-col gap-[--sy-64px] justify-center mx-auto items-center h-full pb-[--sy-60px]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--sy-8px)] text-center w-full md:w-[65%]">
          <h1 className="text-[--32px] font-bold">
          How do you want the written content tone to be?
          </h1>
          <p className="text-[--18px] font-light text-[#FFFFFFCC]">
          Please select the type of the tone you want.
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-[--16px]",
            styles.cards
          )}
        >
          {data.map((item, i) => (
            <div className={`relative grow ${styles.customCheckBoxText}`}>
              <input
                type="radio"
                name="removalReason"
                id={`removalReason-${i}`}
                className="opacity-0 w-full h-full absolute"
                value={item}
              />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
};

export default RewriteWebsite;
