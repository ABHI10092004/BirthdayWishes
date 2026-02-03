import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import DreamyButton from "../DreamyButton";

interface BeautyMeterFrameProps {
  onNext: () => void;
}

const BeautyMeterFrame = ({ onNext }: BeautyMeterFrameProps) => {
  const [progress, setProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerConfetti = () => {
    const colors = ["#f9a8d4", "#c4b5fd", "#fcd34d", "#f472b6", "#a78bfa"];
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    }, 200);
  };

  const startHolding = useCallback(() => {
    if (isComplete) return;
    setIsHolding(true);
    
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsComplete(true);
          setIsHolding(false);
          triggerConfetti();
          return 100;
        }
        return next;
      });
    }, 50);
  }, [isComplete]);

  const stopHolding = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsHolding(false);
    if (!isComplete) {
      setProgress(0);
    }
  }, [isComplete]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-dreamy"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="measuring"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.h1
                className="font-cursive text-3xl md:text-4xl text-foreground mb-8"
                animate={{ scale: isHolding ? 1.05 : 1 }}
              >
                Let me measure your beauty 💗
              </motion.h1>

              {/* Progress bar container */}
              <div className="h-4 bg-muted rounded-full overflow-hidden mb-8 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-deep via-rose to-lavender-deep rounded-full"
                  style={{ width: `${progress}%` }}
                  animate={{
                    boxShadow: isHolding
                      ? "0 0 20px hsl(340, 80%, 70%)"
                      : "none",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <motion.button
                className="w-full py-5 px-8 bg-gradient-to-r from-pink-deep to-rose text-primary-foreground font-poppins font-semibold text-lg rounded-2xl shadow-button select-none touch-none"
                onMouseDown={startHolding}
                onMouseUp={stopHolding}
                onMouseLeave={stopHolding}
                onTouchStart={startHolding}
                onTouchEnd={stopHolding}
                whileHover={{ scale: 1.02 }}
                animate={{
                  scale: isHolding ? 0.98 : 1,
                  boxShadow: isHolding
                    ? "0 0 30px hsl(340, 80%, 70%)"
                    : "0 4px 16px hsl(340, 70%, 70%, 0.4)",
                }}
              >
                {isHolding ? "Keep holding... ✨" : "Press & Hold 💕"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <motion.div
                className="mb-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                <span className="text-6xl">💖</span>
              </motion.div>

              <motion.h1
                className="font-cursive text-3xl md:text-4xl text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Cuteness Overload 💥💖
              </motion.h1>

              <motion.p
                className="text-muted-foreground mb-8 font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                The meter couldn't handle it!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <DreamyButton onClick={onNext} size="lg">
                  You know what? 👀
                </DreamyButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default BeautyMeterFrame;
