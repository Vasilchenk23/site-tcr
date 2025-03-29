import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Як це працює</h2>
        <p className="mb-4">
          Наша платформа використовує штучний інтелект для аналізу профілів користувачів та підбору оптимальних вакансій і курсів. 
          Ми збираємо дані з різних джерел, інтегруємо їх через API та пропонуємо рішення, що допомагають швидко знайти роботу або змінити професію.
        </p>
        <p className="mb-4">
          Процес починається із збору інформації від користувача, далі аналіз даних, підбір відповідних вакансій та курсів, і завершуються рекомендаціями, які ви можете легко реалізувати за допомогою нашої платформи.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Дізнатися більше
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
