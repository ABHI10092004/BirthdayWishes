import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import BeautyMeterFrame from "@/components/frames/BeautyMeterFrame";
import QualitiesFrame from "@/components/frames/QualitiesFrame";
import SecretNoteFrame from "@/components/frames/SecretNoteFrame";
import BirthdayWishFrame from "@/components/frames/BirthdayWishFrame";
import MemoriesFrame from "@/components/frames/MemoriesFrame";

// Customize these values!
const BIRTHDAY_NAME = "Beautiful Soul";
const CREATOR_NAME = "Someone Special";

type Frame = "beauty" | "qualities" | "secret" | "birthday" | "memories";

const Index = () => {
  const [currentFrame, setCurrentFrame] = useState<Frame>("beauty");

  const goToFrame = (frame: Frame) => {
    setCurrentFrame(frame);
  };

  return (
    <div className="min-h-screen bg-dreamy overflow-hidden relative">
      {/* Floating background particles */}
      <FloatingParticles />

      {/* Main content with frame transitions */}
      <AnimatePresence mode="wait">
        {currentFrame === "beauty" && (
          <BeautyMeterFrame 
            key="beauty"
            onNext={() => goToFrame("qualities")} 
          />
        )}

        {currentFrame === "qualities" && (
          <QualitiesFrame 
            key="qualities"
            onNext={() => goToFrame("secret")} 
          />
        )}

        {currentFrame === "secret" && (
          <SecretNoteFrame 
            key="secret"
            onNext={() => goToFrame("birthday")} 
          />
        )}

        {currentFrame === "birthday" && (
          <BirthdayWishFrame 
            key="birthday"
            name={BIRTHDAY_NAME}
            onNext={() => goToFrame("memories")} 
          />
        )}

        {currentFrame === "memories" && (
          <MemoriesFrame 
            key="memories"
            creatorName={CREATOR_NAME} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
