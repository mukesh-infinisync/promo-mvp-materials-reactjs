import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const PageNotFound: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-8 max-w-lg mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated SVG */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-blue-600 drop-shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <line x1="8" y1="15" x2="16" y2="15" strokeWidth="2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
      </motion.svg>

      <h1 className="text-4xl font-bold text-blue-800 mt-6">404 - Page Not Found</h1>
      <p className="text-blue-600 mt-2 text-lg">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Go Home Button */}
      <Link to="/" className="mt-6">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:cursor-pointer">
          Go to Homepage
        </Button>
      </Link>
    </motion.div>
  );
};
