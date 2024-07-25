import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; 2023 FreshFarm. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            About us
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Careers
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            FAQs
          </a>
        </nav>
      </div>
    </footer>
  );
}
