"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
const RewriteWebsite = () => {
  const data = ["Re-write copy", "Write a new copy"];

  return (
    <NextPrevNav
      backLink="/dashboard/services/content-website/"
      nextLink="/dashboard/services/content-website/live-website"
    >
      <div
        className={classNames(
          "flex flex-col gap-[--sy-60px] justify-center mx-auto items-center h-full pb-[--sy-60px]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-full md:w-[65%]">
          <h1 className="text-[--30px] font-bold">
            Would you like us to rewrite your existing website copy?
          </h1>
          <p className="text-[--18px] w-[90%] md:w-[80%] font-light">
            Our content team can write new content for your website in no time,
            or you can rewrite your old content
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
