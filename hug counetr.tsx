import { useState } from "react";
import { motion } from "framer-motion";

const hugs = ["🤗", "💖", "🥰", "😘", "💕", "🫂", "🩷", "✨"];

const HugCounter = () => {
  const [count, setCount] = useState(0);
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number }>>([]);

  const sendHug = () => {
    setCount((c) => c + 1);
    const id = Date.now();
    const emoji = hugs[Math.floor(Math.random() * hugs.length)];
    setEmojis((prev) => [...prev, { id, emoji, x: Math.random() * 200 - 100, y: -(Math.random() * 100 + 50) }]);
    setTimeout(() => setEmojis((prev) => prev.filter((e) => e.id !== id)), 1500);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-lg md:text-2xl font-pixel text-gradient-love mb-3 leading-relaxed">
          Virtual Hugs
        </h2>
        <p className="text-muted-foreground font-body mb-8 text-base">
          send ammu as many hugs as u want!! 🤗
        </p>

        <div className="relative inline-block">
          {emojis.map((e) => (
            <motion.span
              key={e.id}
              className="absolute text-2xl pointer-events-none"
              style={{ left: "50%", top: "50%" }}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{ opacity: 0, x: e.x, y: e.y, scale: 1.5 }}
              transition={{ duration: 1 }}
            >
              {e.emoji}
            </motion.span>
          ))}

          <motion.button
            className="relative w-28 h-28 rounded-lg pixel-btn bg-primary text-4xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={sendHug}
          >
            🤗
          </motion.button>
        </div>

        <motion.p
          className="mt-5 text-xl font-body font-bold text-foreground"
          key={count}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
        >
          {count} hug{count !== 1 ? "s" : ""} sent! 💖
        </motion.p>
        {count >= 10 && (
          <motion.p
            className="text-primary font-body font-bold mt-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {count >= 50 ? "OKAY YOU REALLY LOVE HER 😭💖" : count >= 25 ? "the love is REAL 🥺✨" : "aww keep going! 🩷"}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default HugCounter;
