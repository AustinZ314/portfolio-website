import { motion, AnimatePresence } from "framer-motion";

export default function TypingBubble() {
  return (
    <AnimatePresence>
        <motion.div
          initial={{ x: 150, y: 200, opacity: 1 }}
          exit={{ x: 150, y: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative inline-block"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg font-bold text-4xl flex items-center justify-center min-w-[7rem] h-[4rem]">
            <div className="flex space-x-3">
              <span className="typing-dot" style={{ animationDelay: "0s" }}></span>
              <span className="typing-dot" style={{ animationDelay: "0.2s" }}></span>
              <span className="typing-dot" style={{ animationDelay: "0.4s" }}></span>
            </div>
          </div>
          <div className="absolute bg-purple-500 rounded-full w-5 h-5 bottom-[-8px] left-3 shadow-lg"></div>
          <div className="absolute bg-purple-500 rounded-full w-3 h-3 bottom-[-18px] left-0 shadow-lg"></div>
        </motion.div>
    </AnimatePresence>
  );
}