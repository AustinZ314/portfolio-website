import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ReactComponent as Isometric } from "../assets/isometric.svg";

function IsometricComponent() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      let y1 = 40;
      let y2 = 70;
      let y3 = 120;

      while (true) {
        y1 -= 30;
        y2 -= 30;
        y3 -= 30;

        controls1.start({ y: y1, transition: { type: "spring", stiffness: 120, damping: 12 } });
        controls2.start({ y: y2, transition: { type: "spring", stiffness: 120, damping: 12 } });
        controls3.start({ y: y3, transition: { type: "spring", stiffness: 120, damping: 12 } });

        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    };

    runAnimation();
  }, [controls1, controls2, controls3]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="max-w-full"
      style={{ width: 800, height: 800 }}
    >
      <Isometric style={{ width: "100%", height: "100%" }} />
      <svg
        viewBox="..."  // whatever your SVG's viewBox is
        style={{ width: "100%", height: "100%" }}
      >
        <motion.g animate={controls1}>
          <use href="#message1" />
        </motion.g>
        <motion.g animate={controls2}>
          <use href="#message2" />
        </motion.g>
        <motion.g animate={controls3}>
          <use href="#message3" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export default IsometricComponent;
