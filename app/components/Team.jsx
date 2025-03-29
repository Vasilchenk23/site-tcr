import React from 'react';

const teamMembers = [
  { name: 'Анна Литвиненко', role: 'Founder & Designer', image: './img/1.jpg' },
  { name: 'Дар’я Іванова', role: 'CO-Founder & SMM manager', image: './img/2.jpg' },
  { name: 'Ігнат Шматько', role: 'HR manager', image: './img/3.jpg' },
  { name: 'Артем Карпенко', role: 'Product manager', image: './img/4.jpg' },
  { name: 'Оксана Ходирєва', role: 'Mentor', image: './img/8.jpg' },
  { name: 'Максим Васильченко', role: 'IT specialist', image: './img/5.jpg' },
  { name: 'Анастасія Юрченко', role: 'UX Designer', image: './img/6.jpg' },
  { name: 'Аліса Кобець', role: 'Business Analyst', image: './img/7.jpg' },
];

const Team = () => {
  return (
    <section id="team" className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#042F83]">Наша Команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#9EB0BE] p-4 rounded border border-[#557BA7] shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#557BA7]"
                />
              </div>
              <h3 className="font-semibold text-[#1B478F]">{member.name}</h3>
              <p className="text-sm text-[#36619B]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-end justify-end">
        <img
          src="./img/IMG_5804.PNG" 
          alt="Vector 1"
          className="w-full md:w-64 max-w-xs "
        />
      </div>
    </section>
  );
};

export default Team;
