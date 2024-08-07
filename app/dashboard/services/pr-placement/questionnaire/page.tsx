import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Questionnaire = () => {
  return (
    <NextPrevNav
      backLink="/dashboard/services/pr-placement/create-article"
      nextLink="/dashboard/services/pr-placement/artical-brand"
    >
      <div className="w-full h-full flex flex-col gap-[--60px]">
        {/* Text center alignment and margin bottom */}
        <div className="flex flex-col gap-[var(--64px)] justify-center">
          <div className="flex flex-col gap-[var(--16px)] w-full sm:w-[40%] md:w-[45%] lg:w-[35%] pt-[--30px]">
            <h1 className="text-[--30px] font-bold">
              Here’s a quick questionnaire to help us know more about your PR
              topic:
            </h1>
            <p className="text-[--18px] w-[95%]">
              Please fill out this short questionnaire so we can better
              understand your PR needs and tailor our services to your topic.
            </p>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Questionnaire;
