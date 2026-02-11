import { motion } from "framer-motion";

const LoveLetterSection = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="text-lg md:text-2xl font-pixel text-gradient-love text-center mb-8 leading-relaxed">
          A Letter For You 💌
        </h2>

        <motion.div
          className="bg-card pixel-border rounded-lg p-6 md:p-10 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3 }}
        >
          <motion.span
            className="absolute -top-5 -right-3 text-3xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💌
          </motion.span>

          <div className="font-body text-foreground space-y-3 text-base leading-relaxed">
            <p className="font-bold">dear ammu,</p>
            <p>
              happy valentine's day u absolute cutie! 🩷 i know this is supposed 
              to be a romantic holiday but honestly? our friendship is the REAL love story here.
            </p>
            <p>
              thank you for being the person who gets my weird humor, tolerates my dramatic phases, 
              and still somehow chooses to be my bestie every single day. you literally make my life 
              so much better just by existing in it. 🥺
            </p>
            <p>
              i made this whole pixel website just for you because you DESERVE the effort okay?? 
              (also because i wanted to procrastinate but shhh 🤫)
            </p>
            <p>
              never change, never stop being you, and never forget that you have someone who 
              thinks you're the most amazing person in the entire universe. 🌟
            </p>
            <p className="font-bold text-primary">
              love you to the moon and back,
            </p>
            <p className="font-pixel text-sm text-gradient-love leading-relaxed">
              your sudu 💖
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
