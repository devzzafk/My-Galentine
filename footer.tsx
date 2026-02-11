import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center relative overflow-hidden mb-20">
      <div className="absolute inset-0 bg-primary/5" />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-3xl mb-3">💖🩷💗💕💓</p>
        <p className="font-pixel text-xs md:text-sm text-gradient-love mb-2 leading-relaxed">
          made with love by sudu
        </p>
        <p className="font-body text-muted-foreground text-base font-semibold">
          for the one and only ammu 🩷
        </p>
        <p className="font-body text-xs text-muted-foreground mt-3">
          happy valentine's day 2026 💖
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
