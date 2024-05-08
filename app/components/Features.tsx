import Image from "next/image";
import React from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";

import Check from "../../public/assets/check.svg";
import BlueArrow from "../../public/assets/blue-button.svg";
import GreenArrow from "../../public/assets/green-button.svg";
import PinkArrow from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="flex flex-col gap-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="feature1"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] pr-[56px]">
          <h3 className="text-[#0085FF] lg-[18px] font-medium">
            Sales Monitoring
          </h3>
          <h1
            className="pt-3 text-[#172026
] font-medium text-[24px] leading-9 lg:text-[42px] lg:leading-[58px]"
          >
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="features"
            className="pt-[24px] sm:hidden"
          />
          <p
            className="text-[#36485C
]  leading-6 py-6 lg:leading-7 lg:text-[18px] text-wrap"
          >
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 py-6 lg:text-[18px]">
            <li
              className="flex items-center gap-x-2 text-[#36485C
] "
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li
              className="flex items-center gap-x-2 text-[#36485C
]"
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li
              className="flex items-center gap-x-2 text-[#36485C
]"
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="text-[#0085FF] font-medium flex items-center  gap-x-2 lg:text-[18px]">
            Learn More
            <span>
              <Image src={BlueArrow} alt="learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="feature2"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="text-[#00A424] lg:text-[18px] font-medium">
            Customer Support{" "}
          </h3>
          <h1
            className="pt-3 text-[#172026
] font-medium text-[24px] leading-9 lg:text-[42px] lg:leading-[58px]"
          >
            Get in touch with your customers
          </h1>
          <Image
            src={Feature2}
            alt="features"
            className="pt-[24px] sm:hidden"
          />
          <p
            className="text-[#36485C
]  leading-6 py-6 lg:leading-7 lg:text-[18px] text-wrap"
          >
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 py-6 lg:text-[18px]">
            <li
              className="flex items-center gap-x-2 text-[#36485C
] "
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li
              className="flex items-center gap-x-2 text-[#36485C
]"
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li
              className="flex items-center gap-x-2 text-[#36485C
]"
            >
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="text-[#00A424] font-medium flex items-center  gap-x-2 lg:text-[18px]">
            Learn More
            <span>
              <Image src={GreenArrow} alt="learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="feature3"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] pr-[56px]">
          <h3 className="text-[#EB2891] lg-[18px] font-medium">
            Growth Monitoring
          </h3>
          <h1
            className="pt-3 text-[#172026
] font-medium text-[24px] leading-9 lg:text-[42px] lg:leading-[58px]"
          >
            Monitor your site&apos;s new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="features3"
            className="pt-[24px] sm:hidden"
          />
          <p
            className="text-[#36485C
]  leading-6 py-6 lg:leading-7 lg:text-[18px] text-wrap"
          >
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <div className="py-8 w-full flex gap-x-[24px]">
            <div className="flex-col w-1/2 gap-y-3">
              <h3 className="text-[#172026] text-[32px] font-medium">100+</h3>
              <p className="text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
            <div className="flex-col w-1/2 gap-y-3">
              <h3 className="text-[#172026] text-[32px] font-medium">100+</h3>
              <p className="text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
          </div>
          <p className="text-[#EB2891] font-medium flex items-center  gap-x-2  py-32pxlg:text-[18px]">
            Learn More
            <span>
              <Image src={PinkArrow} alt="learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>

    //1:13:17
  );
};

export default Features;
