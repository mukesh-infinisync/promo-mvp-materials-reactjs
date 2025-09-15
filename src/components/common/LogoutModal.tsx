import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center"
          >
            {/* Icon */}
            <XCircle className="w-12 h-12 text-[#164B88] mx-auto mb-4" />

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Confirm Logout
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to log out of your account?
            </p>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="hover:cursor-pointer px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="hover:cursor-pointer px-6 py-2 rounded-lg bg-[#164B88] text-white hover:bg-[#0e3970] transition"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
