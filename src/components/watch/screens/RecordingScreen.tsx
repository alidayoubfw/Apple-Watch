import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Square, Lock } from 'lucide-react';
import { watchTheme } from '../theme';

interface RecordingScreenProps {
  onEvent: (event: string) => void;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export const RecordingScreen: React.FC<RecordingScreenProps> = ({ onEvent, duration, setDuration }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setDuration]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-8 relative overflow-hidden">
      {/* Ambient Background Pulse - shifted to bottom */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-500/20 to-transparent blur-xl z-0"
      />

      {/* Top Content: Timer */}
      <div className="flex flex-col items-center mt-4 z-10">
        <span className="text-teal-200/80 text-[10px] font-bold tracking-widest uppercase mb-1">Recording</span>
        <span className="text-6xl font-bold tabular-nums tracking-tight text-white drop-shadow-md">
          {formatTime(duration)}
        </span>
      </div>

      {/* Middle Content: Action Buttons */}
      <div className="flex items-center gap-6 z-10 mb-4">
        {/* Lock Button (Mini) */}
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onEvent('SCREEN_OFF')}
            className="w-12 h-12 rounded-full bg-teal-950/40 border border-teal-500/20 flex items-center justify-center text-teal-200/70 backdrop-blur-md hover:bg-teal-900/60 transition-colors"
        >
            <Lock size={18} />
        </motion.button>

        {/* Stop Button (Main) */}
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEvent('TAP_STOP')}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-900/40 border-4 border-red-400/20"
        >
            <Square size={28} fill="white" className="text-white" />
        </motion.button>
      </div>

      {/* Horizontal Waveform Animation in Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-60">
        <div className="flex items-center gap-1 h-32">
          {Array.from({ length: 42 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ 
                height: [4, Math.random() * 64 + 12, 4],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                delay: i * 0.02, // Tighter stagger for more fluid wave
                ease: "easeInOut",
                repeatType: "mirror"
              }}
              className="w-1 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(94,234,212,0.3)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
