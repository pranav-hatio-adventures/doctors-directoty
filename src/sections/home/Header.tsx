import logo from "../../assets/logo.png";
import gsckLogo from "../../assets/gsck_logo.png";
import Button from "../../common/components/Button";
import { HamburgerIcon } from "../../common/svgIcons";
import { useState } from "react";

const navData: Array<{
  label: string;
  href: string;
}> = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Video", href: "#video" },
];

const Header = () => {
  const [navMenuOpened, setNavMenuOpened] = useState(false);

  const navBar = () => (
    <ul className="flex flex-col md:gap-10 md:flex-row">
      {navData.map(({ href, label }) => (
        <li
          key={`${label}_${href}`}
          className="py-3 border-b md:py-0 md:border-b-0"
        >
          <a href={href} className="font-medium text-sm">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  const headerRightContent = () => (
    <div className="flex items-center gap-8">
      <Button
        label="Find Support"
        link_to="/directory"
        buttonClassName="w-full md:w-fit"
      />
      <img
        src={gsckLogo}
        alt="logo of global shapers community kochi"
        className="w-12 h-12 hidden md:block"
      />
    </div>
  );

  return (
    <header className="flex items-center justify-between px-4 py-1 md:px-8 border-b">
      <img
        src={logo}
        alt="logo of project preteeksha"
        className="h-10 md:h-20"
      />
      <nav className="hidden md:block">{navBar()}</nav>
      <div className="hidden md:block">{headerRightContent()}</div>
      <div className="relative md:hidden">
        <div
          className="p-1 rounded bg-secondary-color"
          typeof="button"
          onClick={() => setNavMenuOpened(!navMenuOpened)}
        >
          <HamburgerIcon
            className="h-6 text-primary-color"
            iconClassName="stroke-primary-color"
          />
        </div>
        {navMenuOpened && (
          <div className="min-w-40 absolute top-10 right-0 rounded px-4 py-3 bg-secondary-color">
            <img
              src={gsckLogo}
              alt="logo of global shapers community kochi"
              className="w-12 h-12"
            />
            <nav>{navBar()}</nav>
            <div className="mt-2">{headerRightContent()}</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
