import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "heart" | "sparkle" | "star";
}

const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
      type: (["heart", "sparkle", "star"] as const)[Math.floor(Math.random() * 3)],
    }));
  }, []);

  const renderParticle = (type: Particle["type"]) => {
    switch (type) {
      case "heart":
        return "💗";
      case "sparkle":
        return "✨";
      case "star":
        return "⭐";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderParticle(particle.type)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
