import React from 'react';

const advantages = [
  {
    title: 'Збір вакансій',
    description: 'Автоматизований збір вакансій з провідних сервісів за допомогою інтеграції API.',
  },
  {
    title: 'Інтеграція API',
    description: 'Синхронізація даних з популярних платформ для швидкого оновлення інформації.',
  },
  {
    title: 'Мобільний додаток',
    description: 'Зручний мобільний додаток, що дозволяє користуватися платформою де завгодно.',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 bg-[#C8C9CA] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#042F83]">Наші Переваги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-[#557BA7] rounded bg-[#9EB0BE] hover:bg-[#7896B2] hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1B478F]">{item.title}</h3>
              <p className="text-[#36619B]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;