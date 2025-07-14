import React, { useState, useEffect } from "react";
import Isometric from "./components/IsometricComponent";
import MessageBox from "./components/MessageBox";

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < 5 ? prev + 1 : 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center relative p-8">
      <div className="absolute left-0 top-0 translate-x-[40%] translate-y-[20%]">
        <div className="bg-purple-600 text-white py-3 rounded-xl shadow-lg relative inline-block">
          <h1 className="text-4xl font-bold px-6">Hi, I'm Austin! I'm a...</h1>
          <div className="absolute left-4 bottom-[-7px] w-4 h-4 bg-purple-600 rotate-45 rounded-sm shadow-lg"></div>
      </div>
        <MessageBox step={step} />
      </div>
      <div className="translate-x-[8rem]">
        <Isometric className="w-[30rem] h-auto" step={step} />
      </div>
    </div>
  );
}

export default App;
