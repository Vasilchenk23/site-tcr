import React from 'react';

const teamMembers = [
  { name: 'Анна Литвиненко', role: 'Founder & Designer' },
  { name: 'Дар’я Іванова', role: 'CO-Founder & SMM manager' },
  { name: 'Ігнат Шматько', role: 'HR manager' },
  { name: 'Артем Карпенко', role: 'Product manager' },
  { name: 'Оксана Ходирєва', role: 'Mentor' },
  { name: 'Максим Васильченко', role: 'IT specialist' },
  { name: 'Анастасія Юрченко', role: 'UX Designer' },
  { name: 'Аліса Кобець', role: 'Copywriter' },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Наша Команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-2">
                {/* Тут можна розмістити фото */}
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
