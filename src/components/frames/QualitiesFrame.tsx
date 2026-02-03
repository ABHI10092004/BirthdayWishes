import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DreamyButton from "../DreamyButton";

interface QualitiesFrameProps {
  onNext: () => void;
}

const qualities = [
  { text: "Your smile 🌷", color: "from-pink-soft to-pink-deep" },
  { text: "Your kindness 💕", color: "from-lavender to-lavender-deep" },
  { text: "Your strength 🌻", color: "from-peach to-peach-deep" },
  { text: "Your positivity ✨", color: "from-rose to-pink-deep" },
  { text: "The way you care 🦋", color: "from-lavender-deep to-pink-soft" },
  { text: "Your laugh 💫", color: "from-peach-deep to-rose" },
];

const QualitiesFrame = ({ onNext }: QualitiesFrameProps) => {
  const [revealed, setRevealed] = useState<number[]>([]);

  const handleReveal = (index: number) => {
    if (!revealed.includes(index)) {
      setRevealed([...revealed, index]);
    }
  };

  const allRevealed = revealed.length >= qualities.length - 1;

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="font-cursive text-3xl md:text-4xl text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Things that make you special ✨
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full mb-8">
        {qualities.map((quality, index) => (
          <motion.div
            key={index}
            className="aspect-square perspective-1000"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <motion.button
              className="w-full h-full relative preserve-3d cursor-pointer"
              onClick={() => handleReveal(index)}
              animate={{
                rotateY: revealed.includes(index) ? 180 : 0,
              }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of card */}
              <div
                className="absolute inset-0 glass-card rounded-2xl shadow-dreamy flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎁
                </motion.span>
              </div>

              {/* Back of card */}
              <div
                className={`absolute inset-0 rounded-2xl shadow-dreamy flex items-center justify-center p-4 bg-gradient-to-br ${quality.color}`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <span className="font-poppins font-medium text-primary-foreground text-center text-sm md:text-base">
                  {quality.text}
                </span>
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {allRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <DreamyButton onClick={onNext} size="lg">
              See more 💌
            </DreamyButton>
          </motion.div>
        )}
      </AnimatePresence>

      {!allRevealed && (
        <motion.p
          className="text-muted-foreground font-poppins text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Tap each box to reveal ✨
        </motion.p>
      )}
    </motion.div>
  );
};

export default QualitiesFrame;
