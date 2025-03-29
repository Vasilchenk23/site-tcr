import React from 'react';

const ChatWidget = () => {
  const telegramBotLink = 'https://t.me/@Tcr23Bot'; // замініть на фактичне посилання

  return (
    <div className="fixed bottom-4 right-4">
      <a
        href={telegramBotLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.29 2.71a1 1 0 00-1.17-.27L3.97 9.49a1 1 0 00-.04 1.82l5.69 1.78a1 1 0 01.76.76l1.78 5.69a1 1 0 001.82-.04l7.05-16.15a1 1 0 00-.27-1.17z" />
        </svg>
      </a>
    </div>
  );
};

export default ChatWidget;
