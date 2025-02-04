import Image from "next/image";
import BlueArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import CNN from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10 ">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>

        <div className="flex w-full pt-8 justify-center  ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlueArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex w-full h-full justify-center">
        <Image
          className="min-h-[500px] w-full object-cover lg:h-auto"
          src={Gradient}
          alt="Gradient"
        />
        <div className="absolute bottom-5  flex flex-col w-full items-center">
          <Image
            src={HeroImage}
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%] "
            alt="hero image"
          />
          <div className="flex flex-col w-full items-center lg:container  lg:flex-row lg:justify-between lg:px-20 ">
            <p className="text-[#FFFFFF] font-normal lg:text-[18px] ">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center gap-3 px-5 align-middle lg:grid-cols-5 ">
              <Image src={Google} alt="CompanyLogo" />

              <Image src={Slack} alt="CompanyLogo" />
              <Image src={Trustpilot} alt="CompanyLogo" />
              <Image src={CNN} alt="CompanyLogo" />
              <Image src={Clutch} alt="CompanyLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
