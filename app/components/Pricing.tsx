import Image from "next/image";
import Check from "../../public/assets/check.svg";

export default function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="font-medium text-[24px] leading-9 text-2xl text-[#172026] text-center lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="text-4 text-[#36485C] leading-6 pt-4 pb-[40px] text-center lg:text-[18px]">
        No hidden Fees
      </p>
      <div className="flex gap-x-[24px] lg:flex-row  gap-y-6 flex-col py-6">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col  lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="text-[#36485C] pt-[12px] lg:text-[18px]">
              Perfect for testing the waters
            </p>
            <h2 className="text-[#172026] text-2xl  font-medium pt-4 lg:text-[32px] ">
              $0 <span className="text-[#36485C] ">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 text-[#5F7896] pt-4">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col  lg:justify-between">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="text-[#F4F8FA] pt-[12px] lg:text-[18px]">
              Perfect for small business
            </p>
            <h2 className="text-white text-2xl  font-medium pt-4 lg:text-[32px] ">
              $500 <span className="text-white ">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 text-[#F4F8FA] pt-4">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col  lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Enterprise{" "}
            </h3>
            <p className="text-[#36485C] pt-[12px] lg:text-[18px]">
              Perfect for big companies
            </p>
            <h2 className="text-[#172026] text-2xl  font-medium pt-4 lg:text-[32px] ">
              Custom
            </h2>
            <p className="text-[#36485C] pt-4 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-[#36485C] pt-2 text-[16px]">
              {" "}
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            {/* <ul className="flex flex-col gap-y-2 text-[#5F7896] pt-4">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul> */}
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
