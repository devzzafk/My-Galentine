import { motion } from "framer-motion";
import ammuImg from "@/assets/ammu.jpeg";

const AmmuSection = () => {
  return (
    <section id="ammu-section" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-lg md:text-2xl font-pixel text-gradient-love mb-3 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Ammu
        </motion.h2>
        <motion.p
          className="text-base text-muted-foreground font-body mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          aka the cutest human ever to exist 🩷
        </motion.p>

        <motion.div
          className="relative inline-block"
          initial={{ scale: 0, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <div className="pixel-border rounded-lg overflow-hidden bg-card p-2">
            <img
              src={ammuImg}
              alt="Ammu - the cutest bestie"
              className="w-56 h-72 md:w-72 md:h-88 object-cover rounded"
            />
          </div>
          {/* Pixel decorations */}
          <motion.div
            className="absolute -top-4 -right-4 text-2xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👑
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-4 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 text-lg font-body font-bold text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          main character energy always 💅
        </motion.p>
      </div>
    </section>
  );
};

export default AmmuSection;
