import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import DreamyButton from "../DreamyButton";
import finalImage from "./Finalimage.png";

interface BirthdayWishFrameProps {
  name: string;
  onNext: () => void;
}

const BirthdayWishFrame = ({ name, onNext }: BirthdayWishFrameProps) => {
  useEffect(() => {
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ["#f9a8d4", "#c4b5fd", "#fcd34d", "#f472b6", "#a78bfa"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating decorations */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-xl md:text-2xl pointer-events-none select-none"
          style={{
            left: `${5 + (i % 5) * 20}%`,
            top: `${10 + Math.floor(i / 5) * 30}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            rotate: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["💖", "🌸", "🎀", "💗", "🌷", "✨", "🦋", "💐"][i % 8]}
        </motion.span>
      ))}

      <motion.div
        className="glass-card rounded-3xl p-6 md:p-10 max-w-md w-full text-center shadow-dreamy relative z-10 border border-pink-200/30"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        {/* Profile Image Placeholder */}
        <motion.div
          className="relative mx-auto mb-6 w-32 h-32 md:w-40 md:h-40"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
        >
          {/* Decorative ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-lavender-100" />
          </motion.div>
          
          {/* Image container */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-lavender-200 flex items-center justify-center shadow-lg">
            {/* Replace this with an actual image: <img src="her-photo.jpg" className="w-full h-full object-cover" /> */}
            <img src={finalImage} className="w-full h-full object-cover" alt="Birthday Girl" />
          </div>

          {/* Sparkle decorations around image */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.span
              key={angle}
              className="absolute text-sm"
              style={{
                top: `${50 + 55 * Math.sin((angle * Math.PI) / 180)}%`,
                left: `${50 + 55 * Math.cos((angle * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.span>
          ))}
        </motion.div>

        {/* Cake with enhanced animation */}
        <motion.div
          className="text-5xl md:text-6xl mb-4"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [-3, 3, -3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎂
        </motion.div>

        {/* Main title with gradient */}
        <motion.h1
          className="font-cursive text-3xl md:text-5xl bg-gradient-to-r from-pink-deep via-purple-500 to-pink-deep bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          className="font-cursive text-2xl md:text-4xl text-pink-deep mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {name} 🎉
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
          <span className="text-pink-400">💕</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-poppins text-muted-foreground text-base md:text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          May your days be as beautiful as your heart 💖
        </motion.p>

        {/* Celebration emojis with staggered animation */}
        <motion.div
          className="flex justify-center gap-3 text-2xl md:text-3xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {["🎈", "🎁", "🎊", "🎉", "🎀"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{
                y: [-6, 6, -6],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <DreamyButton onClick={onNext} size="lg">
            Memories 📸
          </DreamyButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayWishFrame;
