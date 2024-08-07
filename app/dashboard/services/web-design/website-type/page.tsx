import classNames from "classnames";
import styles from "./website-type.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";

function Page() {

  return (
    <NextPrevNav
      nextLink="/dashboard/services/web-design/domain-selection"
      backLink="/dashboard/services/web-design"
    >
      <div className="flex flex-col gap-[var(--sy-64px)] justify-center items-center h-full">
        <div
          className={classNames(
            "flex flex-col items-center text-center",
            styles.container
          )}
        >
          <h2 className="font-bold">What is the type of your website?</h2>
          <p className="w-[60%]">
            Please select the option that best describes your project type. This
            helps us understand the specific requirements for your project.
          </p>
        </div>
        <div className={classNames("flex", styles.cards)}>
          <div
            className={classNames(
              "flex flex-col gap-[var(--sy-8px)]",
              styles.card
            )}
          >
            <div
              className={classNames(
                "flex items-center justify-center relative",
                styles.healthcareCard
              )}
            >
              <img
                src="/assets/website-type-healthcare.gif"
                alt="/assets/website-type-healthcare.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                src="/assets/website-type-healthcare.svg"
                alt="/assets/website-type-healthcare.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Healthcare</div>
            <input
              type="radio"
              name="type"
              value="game"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div
            className={classNames(
              "flex flex-col gap-[var(--sy-8px)]",
              styles.card
            )}
          >
            <div
              className={classNames(
                "flex items-center justify-center relative",
                styles.shippingCard
              )}
            >
              <img
                src="/assets/website-type-shipping.gif"
                alt="/assets/website-type-shipping.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                src="/assets/website-type-shipping.svg"
                alt="/assets/website-type-shipping.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Shipping</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div
            className={classNames(
              "flex flex-col gap-[var(--sy-8px)]",
              styles.card
            )}
          >
            <div
              className={classNames(
                "flex items-center justify-center relative",
                styles.companyCard
              )}
            >
              <img
                src="/assets/website-type-company.gif"
                alt="/assets/website-type-company.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                src="/assets/website-type-company.svg"
                alt="/assets/website-type-company.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Company</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div
            className={classNames(
              "flex flex-col gap-[var(--sy-8px)]",
              styles.card
            )}
          >
            <div
              className={classNames(
                "flex items-center justify-center relative",
                styles.otherCard
              )}
            >
              <img
                src="/assets/website-type-other.gif"
                alt="/assets/website-type-other.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                src="/assets/website-type-other.svg"
                alt="/assets/website-type-other.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Other</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
