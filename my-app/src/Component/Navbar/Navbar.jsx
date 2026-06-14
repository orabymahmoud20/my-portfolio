import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // استدعاء اللينك بتاع الراوتر مهم جداً

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // تعديل المسارات عشان تبدأ بـ /
  const NavbarLinks = [
    { id: 1, name: "Home", link: "/" },       // المسار الرئيسي
    { id: 2, name: "About", link: "/about" }, // مسار صفحة about
    { id: 3, name: "Skills", link: "/Skills" }, // دول هنسيبهم زي ما هما لو بتعمل سكرول
    { id: 4, name: "My projects", link: "/projects" },
    { id: 4, name: "Contect", link: "/Contect" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white" data-aos="fade-up" data-aos-delay="300">
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* LOGO */}
        {/* استخدمنا Link بدل a و to بدل href */}
        <Link to="/" className="text-4xl font-bold italic text-white">
          Portfolio
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="w-8 h-8 text-white" /> : <FiMenu className="w-8 h-8 text-white" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => {
            // لو اللينك بيبدأ بـ # (زي skills) نستخدم <a> عادي عشان ده سكرول في نفس الصفحة
            if (link.link.startsWith("#")) {
              return (
                <a key={link.id} href={link.link} className="hover:text-gray-200 text-lg transition-colors">
                  {link.name}
                </a>
              );
            }
            // لو صفحة تانية نستخدم Link
            return (
              <Link key={link.id} to={link.link} className="hover:text-gray-200 text-lg transition-colors">
                {link.name}
              </Link>
            );
          })}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg transition-colors">
            Contact Me
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isOpen ? "flex" : "hidden"
          } md:hidden bg-purple-900 absolute top-0 left-0 w-full h-screen flex-col items-center justify-center space-y-8 pt-16 transition-all duration-300`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-white focus:outline-none" onClick={() => setIsOpen(false)}>
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile Links */}
        {NavbarLinks.map((link) => {
          if (link.link.startsWith("#")) {
            return (
              <a
                key={link.id}
                href={link.link}
                className="text-2xl text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          }
          return (
            <Link
              key={link.id}
              to={link.link}
              className="text-2xl text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Contact Button (Mobile) */}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-xl transition-colors">
          <a
            href="tel:01111023458"
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg transition-colors cursor-pointer"
          >
            Contact Me
          </a>
        </button>
      </div>
    </header>
  );
}