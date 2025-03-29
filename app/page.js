import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Advantages from './components/Advantages';
import MainContent from './components/MainContent';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <MainContent />
        <HowItWorks />
        <Team />
        <Advantages />
      </main>
      <ChatWidget />
    </div>
  );
}