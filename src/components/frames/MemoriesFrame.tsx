import { motion } from "framer-motion";
import im1 from "./im1.jpg";
import im2 from "./im2.jpeg";
import ve1 from "./ve1.mp4";
import ve2 from "./ve2.mp4";
import ve3 from "./ve3.mp4";
import ve4 from "./ve4.mp4";

interface MemoriesFrameProps {
  creatorName: string;
}

// Placeholder memories - these can be replaced with actual photos
const memories = [
  { id: 1, caption: "Special moments ✨", media: ve1, type: "video" },
  { id: 2, caption: "Laughs we shared 😄", media: ve2, type: "video" },
  { id: 3, caption: "Adventures together 🌟", media: ve3, type: "video" },
  { id: 4, caption: "Precious times 💖", media: ve4, type: "video" },
  { id: 5, caption: "Beautiful memories 🌷", media: im1, type: "image" },
  { id: 6, caption: "Forever grateful 🤍", media: im2, type: "image" },
];

const MemoriesFrame = ({ creatorName }: MemoriesFrameProps) => {
  return (
    <motion.div
      className="min-h-screen py-8 px-4 md:py-12 md:px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-cursive text-3xl md:text-5xl text-foreground mb-2 md:mb-4">
            Our Beautiful Memories 📸
          </h1>
          <p className="font-poppins text-muted-foreground text-sm md:text-base">
            Moments we'll treasure forever 💗
          </p>
        </motion.div>

        {/* Photo grid - Polaroid style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12">
          {memories.map((memory, index) => {
             // Random rotation between -6 and 6 degrees
             const randomRotate = (index * 7 % 12) - 6;
             
             return (
            <motion.div
              key={memory.id}
              className="relative"
              initial={{ opacity: 0, y: 50, rotate: randomRotate * 2 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: randomRotate,
              }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Polaroid frame */}
              <div className="bg-white p-3 md:p-4 pb-14 md:pb-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform rounded-sm border border-gray-100">
                {/* Photo container */}
                <div className={`aspect-square overflow-hidden shadow-inner border border-gray-100 rounded-sm relative group ${memory.type === 'video' ? 'bg-black' : 'bg-gray-50'}`}>
                  {memory.type === 'video' ? (
                    <motion.video
                      src={memory.media}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      initial={{ scale: 1.2, filter: "brightness(0.9) sepia(0.1)" }}
                      animate={{ scale: 1, filter: "brightness(1) sepia(0)" }}
                      transition={{ duration: 1.5 }}
                    />
                  ) : (
                    <motion.img
                      src={memory.media}
                      alt={memory.caption}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      initial={{ scale: 1.2, filter: "brightness(0.9) sepia(0.1)" }}
                      animate={{ scale: 1, filter: "brightness(1) sepia(0)" }}
                      transition={{ duration: 1.5 }}
                    />
                  )}
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Caption */}
                <p className="absolute bottom-5 md:bottom-6 left-0 right-0 text-center font-cursive text-gray-700 text-base md:text-xl tracking-wide rotate-1 px-2">
                  {memory.caption}
                </p>
              </div>

              {/* Decorative tape */}
              <div 
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 opacity-80 shadow-sm backdrop-blur-sm transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-3'}`}
                style={{
                  backgroundColor: ['rgba(255, 182, 193, 0.5)', 'rgba(230, 230, 250, 0.6)', 'rgba(255, 218, 185, 0.6)', 'rgba(176, 224, 230, 0.6)'][index % 4]
                }}
              />
            </motion.div>
          )})}
        </div>

        {/* Closing message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p
            className="font-cursive text-2xl md:text-3xl text-foreground mb-6"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Forever grateful for these moments 🤍
          </motion.p>

          <div className="glass-card inline-block px-8 py-4 rounded-2xl shadow-soft">
            <p className="font-poppins text-muted-foreground text-sm md:text-base">
              Made with 💖 by{" "}
              <span className="font-cursive text-pink-deep text-lg">
                {creatorName}
              </span>
            </p>
          </div>

          {/* Final decorative hearts */}
          <motion.div
            className="flex justify-center gap-3 mt-8 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {["💕", "🌸", "💖", "🌷", "💗"].map((heart, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [-3, 3, -3],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemoriesFrame;
