import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Pixel grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, hsl(340,70%,65%) 0px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, hsl(340,70%,65%) 0px, transparent 1px, transparent 16px)',
      }} />

      {/* Soft blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-bubblegum/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-lavender/20 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      >
        <motion.div
          className="inline-block bg-card pixel-border rounded-lg px-4 py-2 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-body text-base font-bold text-primary">
            ✨ from sudu to ammu ✨
          </p>
        </motion.div>

        <motion.h1
          className="text-2xl md:text-4xl font-pixel text-gradient-love mb-6 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy Valentine's
          <br />
          Day!
        </motion.h1>

        <motion.div
          className="text-5xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💖
        </motion.div>

        <motion.p
          className="text-lg md:text-xl font-body font-semibold text-muted-foreground max-w-md mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          this website is made with love (and pixels) just for you, ammu! 🩷
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="pixel-btn bg-primary text-primary-foreground font-body font-bold px-8 py-4 rounded-md text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("ammu-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            scroll down bestieee 👇🩷
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-2xl text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ▼
      </motion.div>
    </section>
  );
};

export default HeroSection;
