import React from "react";
import { Link } from "react-scroll";
import { TbMenu2, TbMenuDeep } from "react-icons/tb";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="z-50 fixed w-full flex min-[680px]:flex-col min-[950px]:flex-row justify-around py-2 min-[680px]:items-center items-start px-4 min-[680px]:px-0 ">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="min-[950px]:text-4xl text-3xl font-Workbench tracking-[0.5rem] p-1 text-cyan-400 cursor-pointer"
      >
        CyberAware
      </Link>
      <span className="min-[680px]:flex gap-4 font-Jost text-xl text-white hidden  ">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer hover:font-medium"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="protection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Protection
        </Link>
        <Link
          activeClass="active"
          to="threats"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Threats
        </Link>
        <Link
          activeClass="active"
          to="demos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Demos
        </Link>
        <Link
          activeClass="active"
          to="quiz"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Quiz
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Contact
        </Link>
      </span>
      <span className="relative">
        <button
          className={`hamburger min-[680px]:hidden my-auto w-fit flex items-center justify-center ${
            anchorEl ? "text-red-600" : "text-white"
          }`}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {/* Menu is Closed <CiMenuBurger />, Menu is Opened <CiMenuFriess /> */}
          {anchorEl ? (
            <>
              <TbMenuDeep size={32} />
            </>
          ) : (
            <>
              <TbMenu2 size={32} />
            </>
          )}
        </button>
        {anchorEl && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="protection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Protection
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="threats"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Threats
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="demos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Demos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="quiz"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Quiz
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 cursor-pointer"
                onClick={handleClose}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>
        )}
      </span>
    </div>
  );
};

export default Navbar;
