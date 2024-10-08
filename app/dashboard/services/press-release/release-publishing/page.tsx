"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { globalContext } from "@/app/_context/GlobalContext";
import React, { useContext } from "react";
import styles from "./releasePublishing.module.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const { step, setStep } = useContext(globalContext);

  const websites = [
    {
      name: "Facebook",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1169_72866)">
            <path
              d="M38.2014 18.7013C38.2014 8.37292 29.8285 0 19.5001 0C9.17175 0 0.798828 8.37292 0.798828 18.7013C0.798828 28.0356 7.63766 35.7725 16.578 37.1754V24.1071H11.8297V18.7013H16.578V14.5812C16.578 9.89416 19.3701 7.3052 23.6419 7.3052C25.6879 7.3052 27.828 7.67046 27.828 7.67046V12.2727H25.4699C23.1467 12.2727 22.4222 13.7143 22.4222 15.1933V18.7013H27.6089L26.7798 24.1071H22.4222V37.1754C31.3626 35.7725 38.2014 28.0357 38.2014 18.7013Z"
              fill="#1877F2"
            />
            <path
              d="M26.7802 24.1066L27.6093 18.7008H22.4226V15.1928C22.4226 13.7137 23.1471 12.2722 25.4703 12.2722H27.8285V7.66995C27.8285 7.66995 25.6883 7.30469 23.6421 7.30469C19.3705 7.30469 16.5785 9.89365 16.5785 14.5807V18.7008H11.8301V24.1066H16.5785V37.1749C17.5451 37.3264 18.5221 37.4023 19.5005 37.4021C20.479 37.4024 21.456 37.3264 22.4226 37.1749V24.1066H26.7802Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_72866">
              <rect
                width="37.4026"
                height="37.4026"
                fill="white"
                transform="translate(0.798828)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1169_72866)">
            <path
              d="M38.2014 18.7013C38.2014 8.37292 29.8285 0 19.5001 0C9.17175 0 0.798828 8.37292 0.798828 18.7013C0.798828 28.0356 7.63766 35.7725 16.578 37.1754V24.1071H11.8297V18.7013H16.578V14.5812C16.578 9.89416 19.3701 7.3052 23.6419 7.3052C25.6879 7.3052 27.828 7.67046 27.828 7.67046V12.2727H25.4699C23.1467 12.2727 22.4222 13.7143 22.4222 15.1933V18.7013H27.6089L26.7798 24.1071H22.4222V37.1754C31.3626 35.7725 38.2014 28.0357 38.2014 18.7013Z"
              fill="#1877F2"
            />
            <path
              d="M26.7802 24.1066L27.6093 18.7008H22.4226V15.1928C22.4226 13.7137 23.1471 12.2722 25.4703 12.2722H27.8285V7.66995C27.8285 7.66995 25.6883 7.30469 23.6421 7.30469C19.3705 7.30469 16.5785 9.89365 16.5785 14.5807V18.7008H11.8301V24.1066H16.5785V37.1749C17.5451 37.3264 18.5221 37.4023 19.5005 37.4021C20.479 37.4024 21.456 37.3264 22.4226 37.1749V24.1066H26.7802Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_72866">
              <rect
                width="37.4026"
                height="37.4026"
                fill="white"
                transform="translate(0.798828)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4352 0H9.56506C4.7236 0 0.798828 3.92478 0.798828 8.76623V28.6364C0.798828 33.4778 4.7236 37.4026 9.56506 37.4026H29.4352C34.2766 37.4026 38.2014 33.4778 38.2014 28.6364V8.76623C38.2014 3.92478 34.2766 0 29.4352 0Z"
            fill="url(#paint0_radial_1169_72880)"
          />
          <path
            d="M29.4352 0H9.56506C4.7236 0 0.798828 3.92478 0.798828 8.76623V28.6364C0.798828 33.4778 4.7236 37.4026 9.56506 37.4026H29.4352C34.2766 37.4026 38.2014 33.4778 38.2014 28.6364V8.76623C38.2014 3.92478 34.2766 0 29.4352 0Z"
            fill="url(#paint1_radial_1169_72880)"
          />
          <path
            d="M19.5014 4.0918C15.5335 4.0918 15.0354 4.10918 13.4771 4.18004C11.9216 4.25134 10.8599 4.49753 9.93096 4.85884C8.96989 5.23199 8.15478 5.73123 7.34273 6.54357C6.52996 7.35576 6.03072 8.17087 5.6564 9.1315C5.29406 10.0607 5.04759 11.1229 4.9776 12.6776C4.90791 14.2361 4.88965 14.7343 4.88965 18.7023C4.88965 22.6704 4.90718 23.1668 4.9779 24.7252C5.04949 26.2806 5.29567 27.3423 5.65669 28.2713C6.03014 29.2323 6.52937 30.0474 7.34171 30.8595C8.15361 31.6723 8.96872 32.1727 9.92906 32.5458C10.8587 32.9071 11.9206 33.1533 13.4757 33.2246C15.0342 33.2955 15.5319 33.3129 19.4996 33.3129C23.4679 33.3129 23.9644 33.2955 25.5227 33.2246C27.0782 33.1533 28.1411 32.9071 29.0707 32.5458C30.0314 32.1727 30.8453 31.6723 31.6571 30.8595C32.4698 30.0474 32.9689 29.2323 33.3434 28.2717C33.7025 27.3423 33.9491 26.2803 34.0222 24.7255C34.0922 23.1671 34.1104 22.6704 34.1104 18.7023C34.1104 14.7343 34.0922 14.2364 34.0222 12.6779C33.9491 11.1225 33.7025 10.0609 33.3434 9.13194C32.9689 8.17087 32.4698 7.35576 31.6571 6.54357C30.8444 5.73094 30.0316 5.2317 29.0698 4.85899C28.1384 4.49753 27.0761 4.2512 25.5207 4.18004C23.9622 4.10918 23.466 4.0918 19.4968 4.0918H19.5014ZM18.1907 6.72474C18.5797 6.72415 19.0138 6.72474 19.5014 6.72474C23.4025 6.72474 23.8647 6.73876 25.4053 6.80874C26.8298 6.87391 27.603 7.11191 28.118 7.31193C28.7998 7.57667 29.2859 7.89327 29.797 8.40478C30.3084 8.91615 30.6248 9.40311 30.8903 10.085C31.0903 10.5993 31.3286 11.3724 31.3935 12.797C31.4635 14.3372 31.4787 14.7998 31.4787 18.699C31.4787 22.5982 31.4635 23.0609 31.3935 24.601C31.3283 26.0255 31.0903 26.7987 30.8903 27.3131C30.6256 27.995 30.3084 28.4805 29.797 28.9916C29.2856 29.5029 28.8001 29.8194 28.118 30.0843C27.6035 30.2852 26.8298 30.5226 25.4053 30.5877C23.865 30.6577 23.4025 30.6729 19.5014 30.6729C15.6001 30.6729 15.1377 30.6577 13.5976 30.5877C12.1731 30.522 11.3999 30.284 10.8844 30.084C10.2027 29.8191 9.71561 29.5026 9.20424 28.9913C8.69288 28.4799 8.37642 27.9941 8.11095 27.3119C7.91093 26.7975 7.67264 26.0243 7.60777 24.5998C7.53778 23.0596 7.52376 22.597 7.52376 18.6953C7.52376 14.7938 7.53778 14.3335 7.60777 12.7933C7.67293 11.3688 7.91093 10.5956 8.11095 10.0806C8.37583 9.39873 8.69288 8.91176 9.20439 8.4004C9.71575 7.88904 10.2027 7.57243 10.8846 7.30711C11.3996 7.10621 12.1731 6.86879 13.5976 6.80334C14.9454 6.74241 15.4677 6.72415 18.1907 6.72108V6.72474ZM27.3004 9.15064C26.3324 9.15064 25.5471 9.93522 25.5471 10.9033C25.5471 11.8712 26.3324 12.6566 27.3004 12.6566C28.2683 12.6566 29.0536 11.8712 29.0536 10.9033C29.0536 9.93537 28.2683 9.15006 27.3004 9.15006V9.15064ZM19.5014 11.1992C15.3578 11.1992 11.9983 14.5587 11.9983 18.7023C11.9983 22.846 15.3578 26.2039 19.5014 26.2039C23.645 26.2039 27.0034 22.846 27.0034 18.7023C27.0034 14.5588 23.6447 11.1992 19.5011 11.1992H19.5014ZM19.5014 13.8321C22.191 13.8321 24.3716 16.0124 24.3716 18.7023C24.3716 21.392 22.191 23.5726 19.5014 23.5726C16.8116 23.5726 14.6313 21.392 14.6313 18.7023C14.6313 16.0124 16.8116 13.8321 19.5014 13.8321Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1169_72880"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7339 40.2833) rotate(-90) scale(37.0687 34.4769)"
            >
              <stop stop-color="#FFDD55" />
              <stop offset="0.1" stop-color="#FFDD55" />
              <stop offset="0.5" stop-color="#FF543E" />
              <stop offset="1" stop-color="#C837AB" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1169_72880"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-5.46625 2.6943) rotate(78.681) scale(16.5699 68.3018)"
            >
              <stop stop-color="#3771C8" />
              <stop offset="0.128" stop-color="#3771C8" />
              <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1169_72871)">
            <rect
              x="0.798828"
              width="37.4026"
              height="37.4026"
              rx="18.7013"
              fill="white"
            />
            <path
              d="M0.798828 18.7016C0.798828 26.3595 5.40373 32.9382 11.9932 35.8307C11.9406 34.5248 11.9838 32.9571 12.3187 31.5362C12.6782 30.0181 14.725 21.3458 14.725 21.3458C14.725 21.3458 14.1276 20.1517 14.1276 18.3869C14.1276 15.6154 15.7339 13.5456 17.7343 13.5456C19.4354 13.5456 20.2572 14.8233 20.2572 16.3533C20.2572 18.0633 19.1666 20.6211 18.6057 22.9902C18.1371 24.974 19.6004 26.5921 21.5574 26.5921C25.1007 26.5921 27.4872 22.0411 27.4872 16.649C27.4872 12.5502 24.7266 9.48229 19.7054 9.48229C14.0325 9.48229 10.4984 13.7129 10.4984 18.4385C10.4984 20.0678 10.9788 21.2168 11.7312 22.1065C12.0772 22.5152 12.1252 22.6796 12 23.1488C11.9103 23.4929 11.7043 24.3213 11.619 24.6496C11.4945 25.1233 11.1107 25.2926 10.6826 25.1177C8.06969 24.051 6.85279 21.1896 6.85279 17.973C6.85279 12.6605 11.3332 6.29036 20.2187 6.29036C27.3588 6.29036 32.0582 11.4572 32.0582 17.0034C32.0582 24.3397 27.9796 29.8205 21.9674 29.8205C19.9484 29.8205 18.0492 28.7291 17.3986 27.4894C17.3986 27.4894 16.3129 31.7983 16.0829 32.6304C15.6864 34.0723 14.9103 35.5135 14.2006 36.6367C15.9214 37.1455 17.7065 37.4038 19.5009 37.4036C29.8281 37.4036 38.2016 29.0306 38.2016 18.7016C38.2016 8.37307 29.8281 0 19.5009 0C9.17263 0 0.798828 8.37307 0.798828 18.7016Z"
              fill="#CB1F27"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_72871">
              <rect
                x="0.798828"
                width="37.4026"
                height="37.4026"
                rx="18.7013"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.798828"
            y="0.361328"
            width="37.4026"
            height="37.4026"
            rx="4.45269"
            fill="white"
          />
          <path
            d="M34.0456 0.361328C35.1478 0.361328 36.2048 0.799175 36.9842 1.57855C37.7636 2.35792 38.2014 3.41497 38.2014 4.51717V33.6081C38.2014 34.7103 37.7636 35.7673 36.9842 36.5467C36.2048 37.3261 35.1478 37.7639 34.0456 37.7639H4.95467C3.85247 37.7639 2.79542 37.3261 2.01605 36.5467C1.23667 35.7673 0.798828 34.7103 0.798828 33.6081V4.51717C0.798828 3.41497 1.23667 2.35792 2.01605 1.57855C2.79542 0.799175 3.85247 0.361328 4.95467 0.361328H34.0456ZM33.0066 32.5691V21.5561C33.0066 19.7595 32.2929 18.0365 31.0226 16.7662C29.7522 15.4958 28.0292 14.7821 26.2326 14.7821C24.4664 14.7821 22.4092 15.8626 21.4118 17.4834V15.1769H15.6144V32.5691H21.4118V22.325C21.4118 20.725 22.7001 19.4159 24.3001 19.4159C25.0717 19.4159 25.8116 19.7224 26.3572 20.2679C26.9027 20.8135 27.2092 21.5534 27.2092 22.325V32.5691H33.0066ZM8.86117 11.9146C9.78701 11.9146 10.6749 11.5468 11.3296 10.8921C11.9843 10.2374 12.3521 9.34951 12.3521 8.42367C12.3521 6.4912 10.7936 4.91198 8.86117 4.91198C7.92981 4.91198 7.0366 5.28196 6.37803 5.94053C5.71946 6.5991 5.34948 7.49231 5.34948 8.42367C5.34948 10.3561 6.9287 11.9146 8.86117 11.9146ZM11.7495 32.5691V15.1769H5.99363V32.5691H11.7495Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
  ];

  const router = useRouter();
  const all = useSelector((state:RootState)=>state.service)
    const dispatch = useDispatch();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
  
      itemsArray.push({
        name: "Your press release will be published on the following websites:",
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "Your press release will be published on the following websites:",
      }));
      router.push("/dashboard/services/press-release/pr-ready");
    
  };

  return (
    <>
      <NextPrevNav
        backLink="/dashboard/services/press-release/" nextFunc={nextFunc}
        nextOnClick={() => setStep(step + 1)}
        nextLink="/dashboard/services/press-release/pr-ready"
      >
        <div
          className={`${styles.releasePublishing} h-full w-full flex flex-col justify-center items-center py-[--sy-15px]`}
        >
          <div className=" pt-[--sy-20px]">
            <h2 className="mb-[1.5vh] text-[--32px] font-bold text-center">
              Your press release will be published on the following websites:
            </h2>
            <p className="text-[--18px] text-center text-[#FFFFFFCC] mb-[--sy-27px]">
              Here are some of the 400+ websites where your press release will
              be published.
            </p>
          </div>
          <div className=" rounded-[12px] bg-[--dark-gray-2] h-[50vh] overflow-y-scroll w-[98%]" style={{scrollbarWidth:"none"}}>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
            
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
              
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
              
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
              
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
            <ul className="px-[--55px] py-[--sy-24px] border-b border-b-[#494949] flex gap-[--55px] justify-between">
              {websites.map((e, i) => (
                <li className=" flex flex-col gap-[--sy-10px] items-center">
                  {e.icon}
                  <span>{e.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </NextPrevNav>
    </>
  );
};

export default Page;
