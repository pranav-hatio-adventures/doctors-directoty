import { ReactNode } from "react";
import logo from "../../assets/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../common/svgIcons";

const Footer = () => {
  const socialListData: Array<{ icon: ReactNode; href: string }> = [
    { icon: <TwitterIcon />, href: "" },
    { icon: <FacebookIcon />, href: "" },
    { icon: <InstagramIcon />, href: "" },
    { icon: <YoutubeIcon />, href: "" },
  ];

  const socialList = () => (
    <ul className="flex gap-7">
      {socialListData.map(({ icon, href }) => (
        <li key={href}>
          <a href={href} target="__blank__">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center px-4 py-4 gap-2">
        <img
          src={logo}
          alt="logo of project preteeksha"
          className="w-32 md:w-auto"
        />
        <span className="font-normal text-xs md:text-sm">
          Project Pratiksha
        </span>
        <span className="font-normal text-xs text-tertiary-color md:text-md">
          A Global Shapers Kochi Hub Initiative
        </span>
        {socialList()}
        <small className="font-normal text-xs text-gray-color">
          Copyright&copy;Project Pratiksha 2025
        </small>
      </div>
    </footer>
  );
};

export default Footer;
