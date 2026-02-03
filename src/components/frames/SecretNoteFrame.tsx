import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DreamyButton from "../DreamyButton";

interface SecretNoteFrameProps {
  onNext: () => void;
}

const noteLines = [
  "You may not realize this,",
  "but you bring warmth wherever you go.",
  "You make days brighter just by being you ✨",
  "",
  "Your presence is a gift,",
  "and the world is better with you in it 💗",
];

const SecretNoteFrame = ({ onNext }: SecretNoteFrameProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-md w-full">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="envelope"
              className="text-center"
              exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
              transition={{ duration: 0.5 }}
            >
              {/* Envelope design */}
              <motion.div
                className="relative mx-auto mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-64 h-48 mx-auto glass-card rounded-2xl shadow-dreamy flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 8px 32px hsl(340, 50%, 75%, 0.2)",
                      "0 8px 40px hsl(340, 70%, 70%, 0.4)",
                      "0 8px 32px hsl(340, 50%, 75%, 0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-lavender to-transparent opacity-50" />
                  
                  {/* Heart seal */}
                  <motion.span
                    className="text-5xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💌
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.h2
                className="font-cursive text-2xl md:text-3xl text-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                A little secret just for you 🤍
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <DreamyButton onClick={() => setIsRevealed(true)} size="lg">
                  Uncover 💝
                </DreamyButton>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="note"
              className="glass-card rounded-3xl p-8 md:p-10 shadow-dreamy"
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="text-center mb-8">
                <motion.span
                  className="text-4xl inline-block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  💝
                </motion.span>
              </div>

              <div className="space-y-3 mb-8">
                {noteLines.map((line, index) => (
                  <motion.p
                    key={index}
                    className={`font-cursive text-lg md:text-xl text-foreground text-center ${
                      line === "" ? "h-4" : ""
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.3 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <DreamyButton onClick={onNext} size="lg">
                  One more thing 🎂
                </DreamyButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SecretNoteFrame;
