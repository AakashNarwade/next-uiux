import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/Menu.svg";
import User from "../../public/assets/User.svg";

const Navbar = () => {
  const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Careers" },
  ];
  return (
    <nav className="py-[16px] px-[20px] w-full flex items-center justify-between lg:container lg:mx-auto lg:px-20">
      <div className="flex">
        <Image src={Logo} alt="Logo" />
        <div className="lg:flex  gap-x-[56px] pl-[74px] items-center hidden">
          {navLinks.map((link, index) => (
            <p className="font-medium text-[#36485C]" key={index}>
              {link.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-[20px]">
        <p className="text-[#36485C] font-medium hidden lg:block pr-[56px]">
          Open An Account
        </p>
        <Image src={User} alt="User" />
        <div className="flex items-center gap-x-2">
          <span className="font-medium text-[#36485C]  hidden lg:block">
            Sign In
          </span>
        </div>
        <Image src={Menu} alt="Menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
