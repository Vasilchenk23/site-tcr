"use client"

import React from 'react';

const MainContent = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#C8C9CA] relative">
      {/* Лінії під заголовком */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#557BA7] to-[#042F83]"></div>

      <div className="max-w-xl relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-[#042F83] 
          transform hover:scale-105 transition-all duration-500 ease-in-out shadow-lg">
          Знайди себе з SkillMatch
        </h1>
        <p className="mb-6 text-[#1B478F]">
          Інноваційна платформа на базі штучного інтелекту, яка допомагає знайти або змінити професію, удосконалити навички та захистити себе від шахрайства.
        </p>
        <a 
          href="https://t.me/@Tcr23Bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#557BA7] text-white px-6 py-2 rounded hover:bg-[#36619B] transition transform hover:scale-105 duration-300"
        >
          Дізнатися більше
        </a>  
      </div>

      <div className="mt-8 md:mt-0 relative z-10">
        <img
          src="./img/main.PNG"
          alt="SkillMatch Platform"
          className="w-full max-w-md rounded shadow-lg cursor-pointer hover:opacity-90 transition transform hover:scale-105 duration-500 ease-in-out"
        />
      </div>

      {/* Лінія під картинкою */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#557BA7] to-[#042F83]"></div>
    </section>
  );
};

export default MainContent;
