import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MessageBox({ step }) {
    const [messages, setMessages] = useState([]);
    const [messageIndex, setMessageIndex] = useState(0);

    const texts = [
        "Software Engineer",
        "Community Builder",
        "Hackathon Organizer",
        "CS Tutor",
        "Math Researcher",
        "Rutgers Scarlet Knight"
    ];

    useEffect(() => {
        if (step === 0) return;

        const text = texts[messageIndex % texts.length];
        setMessageIndex(prev => prev + 1);

        setMessages(prev => {
            let x, y, overlapping;

            do {
                overlapping = false;
                x = Math.random() * 400 - 100;
                y = Math.random() * 180;
                for (const msg of prev) {
                    const dx = msg.x - x;
                    const dy = msg.y - y;
                    if (Math.abs(dx) < 200 && Math.abs(dy) < 140) {
                        overlapping = true;
                        break;
                    }
                }
            } while (overlapping);

            let newMsg = { id: Date.now(), text, x, y, tail: Math.random() < 0.5 };

            setTimeout(() => {
                setMessages(prev => prev.filter(m => m.id !== newMsg.id));
            }, 8000);

            return [...prev, newMsg]
        });
    }, [step]);

    return (
        <div className="relative w-[300px] h-[200px] mt-4 ml-6">
            <AnimatePresence>
                {messages.map(msg => {
                    const tail = Math.random() < 0.5;
                    return (
                        <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 300 }}
                        animate={{ opacity: 1, y: msg.y }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                            y: { type: "spring", stiffness: 100, damping: 12 },
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.3 }
                        }}
                        className="absolute"
                        style={{
                            left: `0`,
                            top: `0`,
                            x: msg.x
                        }}
                        >
                        <div className="relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-2xl drop-shadow-[0_0_2px_black]">
                                {msg.text}
                            </div>
                            {/* shadow under tail */}
                            <div
                                className={`absolute w-3 h-3 rotate-45 ${
                                msg.tail ? 'left-4' : 'right-4'
                                } bottom-[-7px] bg-black/30 z-0`}
                                style={{ transform: 'rotate(45deg) translateY(2px)' }}
                            ></div>
                            {/* text bubble tail */}
                            <div
                                className={`absolute w-3 h-3 rotate-45 ${
                                msg.tail ? 'left-4' : 'right-4'
                                } bottom-[-6px] z-10 ${
                                msg.tail ? 'bg-purple-500' : 'bg-purple-600'
                                }`}
                            ></div>
                        </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    );
};

export default MessageBox;