import React from 'react';
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-[#ffffff] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#042F83]">Як це працює</h2>
        <p className="mb-4 text-[#1B478F]">
          Наша платформа використовує штучний інтелект для аналізу профілів користувачів та підбору оптимальних вакансій і курсів. 
          Ми збираємо дані з різних джерел, інтегруємо їх через API та пропонуємо рішення, що допомагають швидко знайти роботу або змінити професію.
        </p>
        <p className="mb-4 text-[#1B478F]">
          Процес починається із збору інформації від користувача, далі аналіз даних, підбір відповідних вакансій та курсів, і завершується рекомендаціями, які ви можете легко реалізувати за допомогою нашої платформи.
        </p>
        <a 
          href="https://t.me/@Tcr23Bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#557BA7] text-white px-6 py-2 rounded hover:bg-[#36619B] transition"
        >
          Дізнатися більше
        </a>  
      </div>
       {/* Второе изображение */}
       <img
          src="./img/IMG_5802.PNG"  // Укажи путь ко второму векторному изображению
          alt="Vector 2"
          className="w-full md:w-64 max-w-xs mt-4 md:mt-0 "
        />
    </section>
  );
};

export default HowItWorks;
