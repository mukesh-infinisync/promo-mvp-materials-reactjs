import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoBg from "@/assets/icons/logo-bg.svg";
import LogoTitle from "@/assets/icons/logo-title.svg";
import LogoText from "@/assets/icons/logo-name.svg";

type HeaderProps = {
  showBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBtn = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navigateHandler = (path: string) => {
    navigate(path);
  }

  return (
    <header className="fixed top-0 left-0 z-50 bg-[#164B88] h-[70px] w-full lg:px-[200px] flex justify-between items-center px-6">
      {/* Logo Section */}
      <div className="relative inline-block w-[220px] md:w-[307px] h-[70px]">
        <img
          src={LogoBg}
          alt="Logo Background"
          className="hidden xl:inline-block absolute top-0 left-0"
        />

        <img
          src={LogoTitle}
          alt="Logo Title"
          className="left-[40px] top-[15px] absolute md:top-[10px] md:left-[10px]"
        />

        <img
          src={LogoText}
          alt="Logo Name"
          className="hidden xl:inline-block md:absolute md:top-[14px] md:right-[30px]"
        />

      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-white font-medium">
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
              : "text-[#F3F3F3] hover:text-gray-200"
          }
          to="/" >Home</NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
              : "text-[#F3F3F3] hover:text-gray-200"
          }
          to="/contact-us" >Contact Us</NavLink>
        {
          showBtn && (
            <div className="flex items-center gap-4">
              <Button onClick={() => navigateHandler('/login')} variant="outline" className="bg-white text-[#164B88] border-none hover:bg-gray-100 px-6 py-1.5 text-sm font-semibold">
                Login
              </Button>
              <Button onClick={() => navigateHandler('/register')} className="bg-[#4CAF50] hover:bg-[#43a047] text-white px-6 py-1.5 text-sm font-semibold">
                Registration
              </Button>
            </div>
          )
        }
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[70px] left-0 w-full bg-[#164B88] flex flex-col items-start gap-4 p-6 text-white font-medium shadow-md md:hidden z-50"
          >
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
                  : "text-[#F3F3F3] hover:text-gray-200"
              }
              to="/" onClick={() => setMobileOpen(false)} >
              Home
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
                  : "text-[#F3F3F3] hover:text-gray-200"
              }
              to="/contact-us" onClick={() => setMobileOpen(false)} >
              Contact Us
            </NavLink>
            {
              showBtn && (
                <div className="flex flex-col gap-3 w-full">
                  <Button onClick={() => navigateHandler('/login')} variant="outline" className="bg-white text-[#164B88] border-none hover:bg-gray-100 w-full py-2 text-sm font-semibold cursor-pointer">
                    Login
                  </Button>
                  <Button onClick={() => navigateHandler('/register')} className="bg-[#4CAF50] hover:bg-[#43a047] text-white w-full py-2 text-sm font-semibold cursor-pointer">
                    Registration
                  </Button>
                </div>
              )
            }
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
