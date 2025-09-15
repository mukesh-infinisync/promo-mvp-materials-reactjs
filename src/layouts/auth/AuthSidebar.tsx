import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { buyerNavItems, supplierNavItems } from "@/utils/sidebar";
import { logout } from "@/store/user/userSlice";
import LogoutModal from "@/components/common/LogoutModal";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const AuthSidebar: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const { userData } = useSelector((state: RootState) => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState<boolean>(false);

  const [showLogout, setShowLogout] = useState(false);

  const navItems = userData?.role === "buyer" ? buyerNavItems : supplierNavItems;

  const confirmLogout = () => {
    try {
      setLoader(true);
      setTimeout(() => {
        setShowLogout(false);
        dispatch(logout());
        setLoader(false);
        toast.success('User logged out successfully');
      }, 2000);
    } catch (err: any) {
      setLoader(false);
      toast.error("Unable to logut user at the moment, Please try again later");
    }
  };

  return (
    <>
      <aside className="h-full w-[240px] bg-white shadow-md flex flex-col py-8 border-t-2 border-t-[#164B88]">
        <nav className="flex flex-col gap-2">
          {navItems.map(({ label, path, subitems = [], icon: Icon }) =>
            label.toLowerCase() !== "log out" ? (
              <Link
                key={path}
                to={path}
                onClick={onClose}
                className={clsx(
                  "flex items-center gap-3 px-6 py-1 text-[1rem] font-medium hover:bg-blue-100 transition-colors",
                  (pathname.toLocaleLowerCase().includes(path) ||
                    subitems.includes(pathname.toLocaleLowerCase())) &&
                  "bg-[#BAE6FF] font-semibold"
                )}
              >
                <Icon size={18} className="text-gray-700" />
                <span className="text-gray-800">{label}</span>
              </Link>
            ) : (
              <p
                key={path}
                onClick={() => setShowLogout(true)}
                className="flex items-center gap-3 px-6 py-1 text-[1rem] font-medium hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <Icon size={18} className="text-gray-700" />
                <span className="text-gray-800">{label}</span>
              </p>
            )
          )}
        </nav>
      </aside>

      {/* Logout Modal */}
      <LogoutModal
        open={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={confirmLogout}
      />
      {
        loader && (
          <div className="fixed z-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col items-center justify-center">
              <Loader className="animate-spin w-10 h-10 text-blue-600" />
            </div>
          </div>
        )
      }
    </>
  );
};

export default AuthSidebar;
