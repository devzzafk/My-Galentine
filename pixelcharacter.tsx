import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sanrio-inspired pixel character as SVG
const SuduCharacter = ({ flipped = false }: { flipped?: boolean }) => (
  <svg width="48" height="56" viewBox="0 0 48 56" style={{ transform: flipped ? 'scaleX(-1)' : 'none' }} className="pixel-character">
    {/* Hair */}
    <rect x="12" y="2" width="24" height="4" fill="hsl(340, 30%, 15%)" />
    <rect x="8" y="6" width="32" height="4" fill="hsl(340, 30%, 15%)" />
    <rect x="8" y="10" width="8" height="8" fill="hsl(340, 30%, 15%)" />
    <rect x="32" y="10" width="8" height="8" fill="hsl(340, 30%, 15%)" />
    {/* Face */}
    <rect x="12" y="10" width="24" height="20" fill="hsl(25, 60%, 85%)" rx="0" />
    {/* Blush */}
    <rect x="12" y="22" width="6" height="4" fill="hsl(350, 80%, 80%)" opacity="0.6" />
    <rect x="30" y="22" width="6" height="4" fill="hsl(350, 80%, 80%)" opacity="0.6" />
    {/* Eyes */}
    <rect x="16" y="16" width="4" height="6" fill="hsl(340, 30%, 15%)" />
    <rect x="28" y="16" width="4" height="6" fill="hsl(340, 30%, 15%)" />
    {/* Eye shine */}
    <rect x="16" y="16" width="2" height="2" fill="white" />
    <rect x="28" y="16" width="2" height="2" fill="white" />
    {/* Mouth */}
    <rect x="20" y="24" width="8" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="18" y="22" width="2" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="28" y="22" width="2" height="2" fill="hsl(350, 70%, 55%)" />
    {/* Bow */}
    <rect x="4" y="6" width="8" height="4" fill="hsl(340, 80%, 65%)" />
    <rect x="6" y="4" width="4" height="8" fill="hsl(340, 80%, 65%)" />
    <rect x="8" y="8" width="2" height="2" fill="hsl(340, 90%, 50%)" />
    {/* Body - cute dress */}
    <rect x="12" y="30" width="24" height="4" fill="hsl(340, 70%, 65%)" />
    <rect x="8" y="34" width="32" height="12" fill="hsl(340, 70%, 65%)" />
    {/* Dress pattern */}
    <rect x="16" y="36" width="4" height="4" fill="hsl(340, 80%, 75%)" />
    <rect x="28" y="36" width="4" height="4" fill="hsl(340, 80%, 75%)" />
    <rect x="22" y="40" width="4" height="4" fill="hsl(340, 80%, 75%)" />
    {/* Arms */}
    <rect x="4" y="32" width="8" height="4" fill="hsl(25, 60%, 85%)" />
    <rect x="36" y="32" width="8" height="4" fill="hsl(25, 60%, 85%)" />
    {/* Legs */}
    <rect x="14" y="46" width="6" height="8" fill="hsl(25, 60%, 85%)" />
    <rect x="28" y="46" width="6" height="8" fill="hsl(25, 60%, 85%)" />
    {/* Shoes */}
    <rect x="12" y="52" width="10" height="4" fill="hsl(340, 80%, 65%)" />
    <rect x="26" y="52" width="10" height="4" fill="hsl(340, 80%, 65%)" />
  </svg>
);

const AmmuCharacter = ({ flipped = false }: { flipped?: boolean }) => (
  <svg width="48" height="56" viewBox="0 0 48 56" style={{ transform: flipped ? 'scaleX(-1)' : 'none' }} className="pixel-character">
    {/* Hair */}
    <rect x="12" y="2" width="24" height="4" fill="hsl(30, 40%, 25%)" />
    <rect x="8" y="6" width="32" height="4" fill="hsl(30, 40%, 25%)" />
    <rect x="8" y="10" width="8" height="12" fill="hsl(30, 40%, 25%)" />
    <rect x="32" y="10" width="8" height="12" fill="hsl(30, 40%, 25%)" />
    {/* Face */}
    <rect x="12" y="10" width="24" height="20" fill="hsl(25, 55%, 82%)" />
    {/* Blush */}
    <rect x="12" y="22" width="6" height="4" fill="hsl(350, 80%, 80%)" opacity="0.6" />
    <rect x="30" y="22" width="6" height="4" fill="hsl(350, 80%, 80%)" opacity="0.6" />
    {/* Eyes */}
    <rect x="16" y="16" width="4" height="6" fill="hsl(340, 30%, 15%)" />
    <rect x="28" y="16" width="4" height="6" fill="hsl(340, 30%, 15%)" />
    {/* Eye shine */}
    <rect x="16" y="16" width="2" height="2" fill="white" />
    <rect x="28" y="16" width="2" height="2" fill="white" />
    {/* Mouth - cat mouth :3 */}
    <rect x="22" y="24" width="4" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="18" y="24" width="4" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="26" y="24" width="4" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="20" y="26" width="2" height="2" fill="hsl(350, 70%, 55%)" />
    <rect x="26" y="26" width="2" height="2" fill="hsl(350, 70%, 55%)" />
    {/* Cat ears headband */}
    <rect x="10" y="0" width="6" height="6" fill="hsl(270, 50%, 70%)" />
    <rect x="12" y="2" width="2" height="2" fill="hsl(350, 70%, 80%)" />
    <rect x="32" y="0" width="6" height="6" fill="hsl(270, 50%, 70%)" />
    <rect x="34" y="2" width="2" height="2" fill="hsl(350, 70%, 80%)" />
    {/* Body - cute overalls */}
    <rect x="12" y="30" width="24" height="4" fill="hsl(270, 45%, 75%)" />
    <rect x="8" y="34" width="32" height="12" fill="hsl(270, 45%, 75%)" />
    {/* Overalls detail */}
    <rect x="20" y="34" width="8" height="4" fill="hsl(270, 50%, 65%)" />
    <rect x="22" y="36" width="4" height="2" fill="hsl(45, 80%, 70%)" />
    {/* Arms */}
    <rect x="4" y="32" width="8" height="4" fill="hsl(25, 55%, 82%)" />
    <rect x="36" y="32" width="8" height="4" fill="hsl(25, 55%, 82%)" />
    {/* Legs */}
    <rect x="14" y="46" width="6" height="8" fill="hsl(25, 55%, 82%)" />
    <rect x="28" y="46" width="6" height="8" fill="hsl(25, 55%, 82%)" />
    {/* Shoes */}
    <rect x="12" y="52" width="10" height="4" fill="hsl(270, 50%, 60%)" />
    <rect x="26" y="52" width="10" height="4" fill="hsl(270, 50%, 60%)" />
  </svg>
);

const PixelCharacters = () => {
  const [suduPos, setSuduPos] = useState({ x: 10, direction: 1 });
  const [ammuPos, setAmmuPos] = useState({ x: 80, direction: -1 });
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(b => !b);
      setSuduPos(prev => {
        let newX = prev.x + prev.direction * 0.5;
        let newDir = prev.direction;
        if (newX > 85) newDir = -1;
        if (newX < 5) newDir = 1;
        return { x: newX, direction: newDir };
      });
      setAmmuPos(prev => {
        let newX = prev.x + prev.direction * 0.4;
        let newDir = prev.direction;
        if (newX > 90) newDir = -1;
        if (newX < 10) newDir = 1;
        return { x: newX, direction: newDir };
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none h-16">
      <motion.div
        className="absolute bottom-0"
        style={{ left: `${suduPos.x}%` }}
        animate={{ y: bounce ? -4 : 0 }}
        transition={{ duration: 0.08 }}
      >
        <SuduCharacter flipped={suduPos.direction === -1} />
        <div className="text-center mt-1">
          <span className="font-body text-[10px] font-bold text-primary bg-card/80 px-1.5 py-0.5 rounded pixel-shadow text-nowrap">
            sudu
          </span>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0"
        style={{ left: `${ammuPos.x}%` }}
        animate={{ y: bounce ? 0 : -4 }}
        transition={{ duration: 0.08 }}
      >
        <AmmuCharacter flipped={ammuPos.direction === -1} />
        <div className="text-center mt-1">
          <span className="font-body text-[10px] font-bold text-accent bg-card/80 px-1.5 py-0.5 rounded pixel-shadow text-nowrap">
            ammu
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default PixelCharacters;
