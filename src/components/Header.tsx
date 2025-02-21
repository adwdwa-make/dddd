import { useState } from "react";
import Image1 from "../assets/8787.png";
import {
  Logs,
  House,
  Users,
  UserPlus,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-4 md:px-8 flex items-center justify-between p-4 bg-black text-white shadow-md z-50 border-b border-[#494848]">
      {/* Logo */}
      <div>
        <Link to="/">
          <div className="w-9 h-9 lg:w-12 lg:h-12 max-w-[150px] ">
            <img
              src={Image1}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-1 ">
        <button className="flex items-center p-4 md:px-5 py-1 text-black border-[#6894f3] border cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black hover:text-[#6894f3] bg-[#6894f3] rounded-t-lg rounded-r-lg rounded-b-l grounded-l-lg rounded-b-lg">
          Connect Wallet
        </button>

        {/* Hamburger Menu */}
        <button
          className="p-1 rounded-lg text-[#6894f3]  lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Logs size={40} />
        </button>
      </div>

      {/* Mobile Menu - Conditionally Rendered */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-[#6894f3] text-white mr-3 shadow-xl lg:hidden z-50 ">
          <div className="flex flex-col gap-2 p-4">
            {/* Menu Items */}
            <span className="font-light ml-2">Terminal</span>
            <a
              href="/"
              className="flex items-center gap-3 p-2 hover:bg-[#8faef0] rounded-lg transition-all duration-400 ease-in-out"
            >
              <House className="text-xl" />

              <span>Home</span>
            </a>

            <a
              href="/youragent"
              className="flex items-center gap-3 p-2 hover:bg-[#8faef0] rounded-lg transition-all duration-400 ease-in-out"
            >
              <Users className="text-xl" />
              <span>Your Agents</span>
            </a>
            <a
              href="/createagent"
              className="flex items-center gap-3 p-2 hover:bg-[#8faef0] rounded-lg transition-all duration-400 ease-in-out"
            >
              <UserPlus className="text-xl" />
              <span>Create Agents</span>
            </a>
            <a
              target="_blank"
              href="https://x.com/home"
              className="flex items-center gap-3 p-2 hover:bg-[#8faef0] rounded-lg transition-all duration-400 ease-in-out"
            >
              <FileText className="text-xl" />
              <span>Documentation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
