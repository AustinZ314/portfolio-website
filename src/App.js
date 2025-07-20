import { useState, useEffect } from "react";
import Isometric from "./components/IsometricComponent";
import MessageBox from "./components/MessageBox";
import NameBubble from "./components/NameBubble";
import TypingBubble from "./components/TypingBubble";
//import profileImage from "./assets/pfp.jpg";
import { ImageCarousel } from "./components/ImageCarousel";

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
      {/* navbar */}
      <div
        className="w-full text-white shadow-md fixed top-0 left-0 z-50"
        style={{ backgroundColor: "#111827" }}
      >
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

      {/* cool svg text message section */}
      <div style={{ minHeight: "100vh", backgroundColor: "#011638" }}>
        <div className="flex items-end justify-center relative p-8">
          <div className="absolute left-0 top-0 translate-x-[25%] translate-y-[40%]">
            {showTyping ? <TypingBubble /> : <NameBubble />}
            <MessageBox step={step} />
          </div>
          <div className="absolute right-0 top-0 translate-y-[5%]">
            <Isometric className="w-[15rem] h-auto" step={step} />
          </div>
        </div>
      </div>

      {/* about me */}
      <div className="w-full bg-[#1E293B] text-white py-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-16">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 flex-shrink-0">
            {/* <img src={profileImage} alt="profileimage" className="w-full h-full object-cover" /> */}
          </div>

          <ul className="text-lg space-y-4 max-w-xl">
            <li>👋 placeholder</li>
            <li>🛠️ placeholder</li>
            <li>📚 placeholder</li>
            <li>🎮 placeholder</li>
          </ul>
        </div>
      </div>

      {/* projects */}
      <section className="bg-[#000000] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold flex items-center justify-center mb-8">Projects</h2>
          
        </div>
      </section>

      {/* club pictures :D */}
      <section className="bg-gray-900 text-white py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Community Involvement</h2>
        <div className="h-[600px]">
          <ImageCarousel />
        </div>
      </section>
    </>
  );
}

export default App;
