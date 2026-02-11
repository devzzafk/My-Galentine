import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  y: number;
  speed: number;
  emoji: string;
  points: number;
}

const heartTypes = [
  { emoji: "💖", points: 1 },
  { emoji: "💗", points: 1 },
  { emoji: "🩷", points: 2 },
  { emoji: "⭐", points: 3 },
  { emoji: "💎", points: 5 },
];

const badItems = [
  { emoji: "💔", points: -3 },
  { emoji: "🥀", points: -2 },
];

const CatchHeartsGame = () => {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("catchHearts_highScore");
    return saved ? parseInt(saved) : 0;
  });
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [catcherX, setCatcherX] = useState(50);
  const [timeLeft, setTimeLeft] = useState(30);
  const [catchEffect, setCatchEffect] = useState<{ x: number; y: number; text: string } | null>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>();
  const lastSpawnRef = useRef(0);

  const spawnHeart = useCallback(() => {
    const isBad = Math.random() < 0.2;
    const type = isBad
      ? badItems[Math.floor(Math.random() * badItems.length)]
      : heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    return {
      id: Date.now() + Math.random(),
      x: 5 + Math.random() * 90,
      y: -5,
      speed: 0.3 + Math.random() * 0.4,
      emoji: type.emoji,
      points: type.points,
    };
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!gameRef.current || !started || gameOver) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setCatcherX(Math.max(5, Math.min(95, x)));
  }, [started, gameOver]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!gameRef.current || !started || gameOver) return;
    const rect = gameRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setCatcherX(Math.max(5, Math.min(95, x)));
  }, [started, gameOver]);

  useEffect(() => {
    if (!started || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, gameOver]);

  useEffect(() => {
    if (!started || gameOver) return;

    const gameLoop = () => {
      const now = Date.now();
      if (now - lastSpawnRef.current > 600) {
        setHearts(prev => [...prev, spawnHeart()]);
        lastSpawnRef.current = now;
      }

      setHearts(prev => {
        const updated = prev.map(h => ({ ...h, y: h.y + h.speed }));
        const alive: Heart[] = [];
        for (const heart of updated) {
          if (heart.y > 100) continue; // fell off
          // Check catch
          if (heart.y > 82 && heart.y < 95 && Math.abs(heart.x - catcherX) < 10) {
            setScore(s => s + heart.points);
            setCatchEffect({ x: heart.x, y: 85, text: heart.points > 0 ? `+${heart.points}` : `${heart.points}` });
            setTimeout(() => setCatchEffect(null), 500);
            continue;
          }
          alive.push(heart);
        }
        return alive;
      });

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [started, gameOver, catcherX, spawnHeart]);

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
      localStorage.setItem("catchHearts_highScore", score.toString());
    }
  }, [gameOver, score, highScore]);

  const restart = () => {
    setScore(0);
    setTimeLeft(30);
    setHearts([]);
    setGameOver(false);
    setStarted(true);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-lg md:text-2xl font-pixel text-gradient-love mb-3 leading-relaxed">
          Catch Hearts!
        </h2>
        <p className="text-muted-foreground font-body mb-6 text-base">
          move your finger/mouse to catch falling hearts for ammu 🩷
        </p>

        <div
          ref={gameRef}
          className="relative w-full aspect-[3/4] bg-card pixel-border rounded-lg overflow-hidden cursor-none touch-none select-none"
          onPointerMove={handlePointerMove}
          onTouchMove={handleTouchMove}
        >
          {/* Stars background */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{ left: `${10 + (i * 7.5)}%`, top: `${5 + (i * 8)}%` }}
            />
          ))}

          {!started && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card/90 z-10">
              <p className="text-4xl">🩷</p>
              <p className="font-pixel text-xs text-foreground leading-relaxed px-4">
                catch hearts, dodge broken ones!
              </p>
              <p className="font-body text-sm text-muted-foreground">
                💎=5pts ⭐=3pts 🩷=2pts 💖=1pt 💔=-3pts
              </p>
              <p className="font-body text-xs text-muted-foreground">
                high score: {highScore}
              </p>
              <button
                className="pixel-btn bg-primary text-primary-foreground font-body font-bold px-6 py-3 rounded-md text-sm"
                onClick={() => setStarted(true)}
              >
                play! 🎮
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/90 z-10">
              <p className="text-4xl">{score > highScore * 0.8 ? "🎉" : "🩷"}</p>
              <p className="font-pixel text-xs text-foreground">game over!</p>
              <p className="font-body text-2xl font-bold text-foreground">{score} pts</p>
              {score >= highScore && score > 0 && (
                <p className="font-body text-sm text-primary font-bold">✨ new high score! ✨</p>
              )}
              <p className="font-body text-xs text-muted-foreground">
                best: {highScore}
              </p>
              <button
                className="pixel-btn bg-primary text-primary-foreground font-body font-bold px-6 py-3 rounded-md text-sm"
                onClick={restart}
              >
                again! 🔄
              </button>
            </div>
          )}

          {started && !gameOver && (
            <>
              {/* HUD */}
              <div className="absolute top-2 left-3 right-3 flex justify-between z-10">
                <span className="font-body text-sm font-bold text-foreground bg-card/70 px-2 py-1 rounded">
                  🩷 {score}
                </span>
                <span className={`font-body text-sm font-bold px-2 py-1 rounded ${timeLeft <= 5 ? 'text-love bg-card/70' : 'text-foreground bg-card/70'}`}>
                  ⏰ {timeLeft}s
                </span>
              </div>

              {/* Hearts */}
              {hearts.map(heart => (
                <div
                  key={heart.id}
                  className="absolute text-2xl transition-none"
                  style={{ left: `${heart.x}%`, top: `${heart.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {heart.emoji}
                </div>
              ))}

              {/* Catch effect */}
              {catchEffect && (
                <motion.div
                  className="absolute font-body font-bold text-lg z-20 pointer-events-none"
                  style={{ left: `${catchEffect.x}%`, top: `${catchEffect.y}%` }}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{ opacity: 0, y: -30, scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={catchEffect.text.startsWith('-') ? 'text-love' : 'text-primary'}>
                    {catchEffect.text}
                  </span>
                </motion.div>
              )}

              {/* Catcher - pixel basket */}
              <div
                className="absolute bottom-4 z-10 transition-none"
                style={{ left: `${catcherX}%`, transform: 'translateX(-50%)' }}
              >
                <svg width="48" height="32" viewBox="0 0 48 32">
                  <rect x="4" y="0" width="40" height="4" fill="hsl(340, 70%, 65%)" />
                  <rect x="0" y="4" width="48" height="4" fill="hsl(340, 70%, 65%)" />
                  <rect x="4" y="8" width="40" height="20" fill="hsl(340, 80%, 75%)" />
                  <rect x="8" y="8" width="4" height="4" fill="hsl(340, 70%, 65%)" />
                  <rect x="20" y="12" width="8" height="8" fill="hsl(350, 80%, 60%)" />
                  <rect x="16" y="16" width="4" height="4" fill="hsl(350, 80%, 60%)" />
                  <rect x="28" y="16" width="4" height="4" fill="hsl(350, 80%, 60%)" />
                  <rect x="22" y="20" width="4" height="4" fill="hsl(350, 80%, 60%)" />
                  <rect x="4" y="28" width="40" height="4" fill="hsl(340, 50%, 50%)" />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CatchHeartsGame;
