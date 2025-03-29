"use client"

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Як це працює', href: '#how-it-works' },
    { name: 'Команда', href: '#team' },
    { name: 'Наші переваги', href: '#advantages' },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#C8C9CA] text-[#042F83] relative">
      <div className="text-4xl font-bold cursor-pointer mb-4 md:mb-0">
        <a href="#home">SkillMatch</a>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          {menuItems.map((item) => (
            <li key={item.name} className="text-xl hover:text-[#557BA7] cursor-pointer">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden mt-4">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {isMenuOpen && (
            <ul className="absolute right-4 mt-2 w-48 bg-[#C8C9CA] border border-gray-700 rounded shadow-lg">
              {menuItems.map((item) => (
                <li key={item.name} className="px-4 py-2 hover:bg-[#557BA7] cursor-pointer">
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

