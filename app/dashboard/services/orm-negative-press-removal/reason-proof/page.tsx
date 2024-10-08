"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addFile, addOption } from "@/app/reducers/serviceSlice";
const ReasonProof = () => {
  const [file, setFile] = useState<any>(null);

  const convertFileToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event:any) => {
    const file = event.target.files[0];
    setFile(file?.name)
    console.log(file);
    

    if (file) {
      // Convert file to Base64 for storing in localStorage
      const base64File = await convertFileToBase64(file);

      // Store file metadata and Base64 string in localStorage
      const fileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        base64: base64File,
      };
      localStorage.setItem('uploadedFile', JSON.stringify(fileData));

      // Store the file in Redux
      dispatch(addFile(file));
    }
  };

  const all = useSelector((state: RootState) => state.service);
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (file) {
      itemsArray.push({
        name: "upload documentation supporting the reason for removal.",
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "upload documentation supporting the reason for removal.",
        })
      );
      route.push(
        "/dashboard/services/orm-negative-press-removal/estimated-cost"
      );
    }
  };
  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-negative-press-removal/removal-reason"
      nextLink="/dashboard/services/orm-negative-press-removal/estimated-cost" nextFunc={nextFunc}
    >
      <div
        className={classNames(
          "flex flex-col gap-[var(--45px)] justify-center mx-auto items-center h-full",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-full md:w-[60%] lg:w-[50%]">
          <h1 className="text-[--30px] font-bold">
            Please upload documentation supporting the reason for removal.
          </h1>
          <p className="text-[--18px] font-light w-[90%] text-[#FFFFFFCC]">
            Upload any relevant documentation, screenshots, or additional
            information to support your query.
          </p>
        </div>

        <div className=" w-full md:w-[60%] mx-auto">
          <div className="bg-[#353535] px-[--26px] py-[--sy-18px] rounded-[--12px]">
            <label className="font-semibold block text-[--19px] mb-[--sy-20px]">
              {" "}
              Upload File
            </label>
            <div className="border-dashed border-2 border-gray-500 rounded-lg p-6 w-full flex justify-center items-center mb-[--sy-20px]">
              <div className="text-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex items-center gap-[--5px]">
                    {file ? (
                      <div>{file}</div>
                    ) : (
                      <>
                        <svg
                          className=" mr-[--10px]"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.798828 10.6575C0.798828 5.1294 5.27784 0.650391 10.806 0.650391C16.3341 0.650391 20.8131 5.1294 20.8131 10.6575C20.8131 16.1857 16.3341 20.6647 10.806 20.6647C5.27784 20.6647 0.798828 16.1857 0.798828 10.6575ZM6.59329 11.8237L9.51474 8.77717V16.1453C9.51474 16.682 9.9465 17.1138 10.4832 17.1138H11.1288C11.6655 17.1138 12.0972 16.682 12.0972 16.1453V8.77717L15.0187 11.8237C15.3939 12.2151 16.0194 12.2232 16.4027 11.8398L16.8426 11.396C17.2219 11.0167 17.2219 10.4033 16.8426 10.0281L11.492 4.67343C11.1127 4.29413 10.4993 4.29413 10.124 4.67343L4.76537 10.0281C4.38607 10.4074 4.38607 11.0207 4.76537 11.396L5.2052 11.8398C5.59258 12.2232 6.21803 12.2151 6.59329 11.8237Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        Drag and drop files here or{" "}
                        <span className="underline text-[#F8F24B]">
                          choose file
                        </span>
                      </>
                    )}
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf, .xlsx, image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="text-gray-400 text-sm mt-0">
                Files Supported: PDF, XLSX, Image, Scanner.
              </div>
              <div className="text-gray-400 text-sm">Maximum Size: 5MB</div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default ReasonProof;
