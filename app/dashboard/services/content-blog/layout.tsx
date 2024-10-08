"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { changeOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  const contentBlogRoute = useSelector((state: RootState) => state.contentBlog.contentBlogRoute);
  const route1 = [
    "",
    "create-website",
    "word-count",
    "reference-sources",
    "estimated-cost",
  ];
  const route2 = [
    "",
    "create-website",
    "blog-write-style",
    "word-count",
    "reference-sources",
    "estimated-cost",
  ];
  const path = contentBlogRoute == "haveWebsite" ? route2 : route1

  const all = useSelector((state: RootState) => state.service.options);
  const dispatch = useDispatch();

  const route = useRouter();

  const [currentPath, setCurrentPath] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const pathname = window.location.pathname;
      if (pathname === currentLocation) return;
      setCurrentLocation(pathname);
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    const moduleName = pathname.split("/")[3];
    const Path = pathname.split("/")[4];
    console.log(moduleName);
    console.log(Path);

    const getCurrentPath = () => {
      if (moduleName && !path) {
        setCurrentPath(0);
        return;
      }
      const index = path.findIndex((p) => {
        if (Array.isArray(p)) {
          return p.includes(Path);
        }
        return p === Path;
      });
      if (index !== -1) {
        setCurrentPath(index);
      }
    };

    getCurrentPath();
  }, [currentLocation]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const page = pathname.split("/")[4];
    const index = path.findIndex((p) => p === page);
    
    const selectedOption = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const parsed = selectedOption ? JSON.parse(selectedOption) : [];
    console.log(Boolean(parsed.length == index));

    if (Boolean(parsed.length > index)) {
      console.log("lllllllllllllllllllllllleeeeeeeeeeeeee");

      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i < parsed.length));

      const pushedRoute = path.filter((p, i) => i <= parsed.length);
      route.push(
        `/dashboard/services/content-blog/${
          pushedRoute[pushedRoute.length - 1]
        }`
      );
    } else if (Boolean(parsed.length < index)) {
      console.log("sadwqewqecxzdwqe");
      console.log(path);
      
      
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i >= parsed.length));
      const pushedRoute = path.filter((p, i) => i >= parsed.length);
      route.push(
        `/dashboard/services/content-blog/${pushedRoute[0]}`
      );
    }
  }, [currentLocation]);

  useEffect(()=>{
console.log(all);

  },[currentLocation,all])


  return (
    <div className="flex flex-col h-full">
      <StepProgress
        title={"Content Blog"}
        steps={path.length}
        currentStep={currentPath}
      />
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
