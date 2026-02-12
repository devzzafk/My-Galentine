import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  { emoji: "🤣", text: "you laugh at my worst jokes (or maybe AT me)" },
  { emoji: "🍕", text: "you never judge me for anything" },
  { emoji: "📱", text: "U always makes sure i'm good" },
  { emoji: "🤝", text: "you pretend my plans are good lol" },
  { emoji: "💪", text: "you hype me up like i'm beyoncé" },
  { emoji: "🎭", text: "you match my chaos energy perfectly" },
  { emoji: "🥺", text: "you tolerate my dramatic breakdowns" },
  { emoji: "☕", text: "you're my free therapist honestly" },
  { emoji: "📸", text: "you my forever bbg" },
  { emoji: "🌟", text: "you exist. that's literally enough." },
];

const ReasonsSection = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-lg md:text-2xl font-pixel text-gradient-love text-center mb-3 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          10 Reasons
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground font-body mb-10 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          tap the cards to reveal! 🫣
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="aspect-square cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleFlip(index)}
            >
              <AnimatePresence mode="wait">
                {!flipped.has(index) ? (
                  <motion.div
                    key="front"
                    className="w-full h-full bg-primary pixel-border rounded-lg flex flex-col items-center justify-center"
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl mb-1">{reason.emoji}</span>
                    <span className="text-primary-foreground font-body font-bold text-xs">#{index + 1}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    className="w-full h-full bg-card pixel-border rounded-lg flex items-center justify-center p-2"
                    initial={{ rotateY: -180 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[10px] md:text-xs font-body font-bold text-foreground text-center leading-snug">
                      {reason.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
