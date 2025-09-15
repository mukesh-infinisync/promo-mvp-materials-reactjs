import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoBg from "@/assets/icons/logo-bg.svg";
import LogoTitle from "@/assets/icons/logo-title.svg";
import LogoText from "@/assets/icons/logo-name.svg";
import Sidebar from "./AuthSidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const AuthHeader: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { userData } = useSelector((state: RootState) => state.user);

    return (
        <header className="fixed top-0 left-0 z-50 bg-[#164B88] h-[70px] w-full lg:pl-[200px] flex justify-between items-center pr-6">
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

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* User info */}
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/40" 
                        alt="User Profile"
                        className="w-9 h-9 rounded-full border"
                    />
                    <div className="hidden sm:flex flex-col text-right">
                        <span className="text-sm font-semibold text-white">{userData.role}</span>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={26} className="text-white" />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        key="mobile-sidebar"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex"
                    >
                        <Sidebar onClose={() => setSidebarOpen(false)} />
                        <div
                            className="flex-1 bg-black/40"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X size={26} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default AuthHeader;
