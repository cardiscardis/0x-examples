import { useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Welcome Text with Waving Hand */}
        <div className="text-2xl font-bold glow-text flex items-center">
          <Link href="/" className="hover:text-gray-300 flex items-center">
            Welcome&nbsp;<span className="wave">👋</span>
          </Link>
        </div>

        {/* Hamburger/Close Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 text-lg glow-text transition-all`}
        >
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link href="/wallet" className="hover:text-cyan-400">
            About
          </Link>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff;
        }

        nav {
          background-color: #121212; /* Dark theme background */
        }

        a {
          transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
        }

        a:hover {
          text-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff;
        }

        .wave {
          animation: wave-animation 2s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }

        @keyframes wave-animation {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
