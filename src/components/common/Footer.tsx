import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D9D9D9] py-3">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
        {/* Desktop: with pipes | , Mobile/Tablet: stacked without pipes */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className="text-[#6E6E6E] text-[1.2rem] font-normal">
            Home <span className="text-[#6E6E6E]">|</span>
          </Link>
          <Link to="/contact-us" className="text-[#6E6E6E] text-[1.2rem] font-normal">
            Contact Us <span className="text-[#6E6E6E]">|</span>
          </Link>
          <Link to="/privacy" className="text-[#6E6E6E] text-[1.2rem] font-normal">
            Privacy Policy <span className="text-[#6E6E6E]">|</span>
          </Link>
          <Link to="/terms" className="text-[#6E6E6E] text-[1.2rem] font-normal">
            Terms & Conditions
          </Link>
        </div>

        {/* Mobile/Tablet stacked links without pipes */}
        <div className="flex flex-col items-center gap-2 md:hidden">
          <Link to="/" className="text-[#6E6E6E] text-[1.2rem] font-normal">Home</Link>
          <Link to="/contact-us" className="text-[#6E6E6E] text-[1.2rem] font-normal">Contact Us</Link>
          <Link to="/privacy" className="text-[#6E6E6E] text-[1.2rem] font-normal">Privacy Policy</Link>
          <Link to="/terms" className="text-[#6E6E6E] text-[1.2rem] font-normal">Terms & Conditions</Link>
        </div>
      </div>

      <p className="text-[1rem] text-[#6E6E6E] font-normal text-center">
        © 2025 MVP Materials
      </p>
    </footer>
  );
};

export default Footer;
