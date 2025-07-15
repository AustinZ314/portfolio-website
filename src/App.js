import { useState, useEffect } from "react";
import Isometric from "./components/IsometricComponent";
import MessageBox from "./components/MessageBox";
import NameBubble from "./components/NameBubble";
import TypingBubble from "./components/TypingBubble";

function App() {
  const [step, setStep] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTyping(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < 5 ? prev + 1 : 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#1E2432",
      backgroundImage: "radial-gradient(circle, #4A5568 1px, transparent 2px)",
      backgroundSize: "30px 30px",
      backgroundAttachment: "fixed",
    }}>
    <div className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Austin Zhang</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contact</a> 
        </div>
      </div>
    </div>


    <div className="flex items-end justify-center relative p-8">
      <div className="absolute left-0 top-0 translate-x-[30%] translate-y-[40%]">
        {showTyping ? <TypingBubble /> : <NameBubble />}
        <MessageBox step={step} />
      </div>
      <div className="translate-x-[10rem] translate-y-[1rem]">
        <Isometric className="w-[30rem] h-auto" step={step} />
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
