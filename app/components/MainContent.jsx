import React from 'react';

const MainContent = () => {
  return (
    <>
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-[#042F83]">
          Знайди себе з SkillMatch
        </h1>
        <p className="mb-6 text-[#1B478F]">
          Інноваційна платформа на базі штучного інтелекту, яка допомагає знайти або змінити професію, удосконалити навички та захистити себе від шахрайства.
        </p>
        <a 
          href="https://t.me/@Tcr23Bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#557BA7] text-white px-6 py-2 rounded hover:bg-[#36619B] transition"
        >
          Дізнатися більше
        </a>  
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="./img/main.PNG"
          alt="SkillMatch Platform"
          className="w-full max-w-md rounded shadow-lg cursor-pointer hover:opacity-90 transition"
        />
      </div>
    </section>
    <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-end justify-end">
        {/* Первое изображение */}
        <img
          src="./img/IMG_5649.PNG"  // Укажи путь к первому векторному изображению
          alt="Vector 1"
          className="w-full md:w-64 max-w-xs "
        />
      </div>
    </>
  );
};

export default MainContent;
