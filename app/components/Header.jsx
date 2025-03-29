"use client"

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Як це працює', href: '#how-it-works' },
    { name: 'Команда', href: '#team' },
    { name: 'Наші переваги', href: '#advantages' },
    { name: 'Контакти', href: '#contacts' },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white relative">
      <div className="text-lg font-bold cursor-pointer">
        <a href="#home">SkillMatch</a>
      </div>
      <nav>
        {/* Меню для великих екранів */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name} className="hover:text-blue-400 cursor-pointer">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Бургер-меню для мобільних */}
        <div className="md:hidden">
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
            <ul className="absolute right-4 mt-2 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg">
              {menuItems.map((item) => (
                <li key={item.name} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
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
