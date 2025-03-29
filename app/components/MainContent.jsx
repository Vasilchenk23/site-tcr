import React from 'react';

const MainContent = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      {/* Текстова частина */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Знайди себе з SkillMatch
        </h1>
        <p className="mb-6">
          Інноваційна платформа на базі штучного інтелекту, яка допомагає знайти або змінити професію, удосконалити навички та захистити себе від шахрайства.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Дізнатися більше
        </button>
      </div>
      {/* Ілюстрація */}
      <div className="mt-8 md:mt-0">
        <img
          src="/path-to-your-image.png" // Замініть на фактичний шлях до зображення
          alt="SkillMatch Platform"
          className="w-full max-w-md rounded shadow-lg cursor-pointer hover:opacity-90 transition"
        />
      </div>
    </section>
  );
};

export default MainContent;
