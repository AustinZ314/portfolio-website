import { motion, AnimatePresence } from "framer-motion";

export default function NameBubble() {
  const fullText = "Hi, I'm Austin! I'm a...";

  return (
    <AnimatePresence>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="relative inline-block"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg font-bold text-4xl flex items-center justify-center min-w-[7rem] h-[4rem]">
            {fullText}
          </div>
          <div className="absolute left-7 bottom-[-7px] w-4 h-4 bg-purple-500 rotate-45 rounded-sm shadow-lg"></div>
        </motion.div>
    </AnimatePresence>
  );
}