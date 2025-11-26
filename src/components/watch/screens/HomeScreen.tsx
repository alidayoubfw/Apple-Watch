import React from 'react';
import { motion } from 'motion/react';
import { Mic, Settings } from 'lucide-react';
import { watchTheme } from '../theme';
import logoImg from 'figma:asset/d9ca623d1d4cdd2543014ad84bfa7d9a587f6bc1.png';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HomeScreenProps {
  onEvent: (event: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onEvent }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
      {/* Header Text */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 flex flex-col items-center space-y-1"
      >
        <div className="w-6 h-6">
          <ImageWithFallback src={logoImg} alt="Companion Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
        </div>
        <span className="text-teal-200/70 text-[13px] font-medium uppercase tracking-wider">Companion</span>
      </motion.div>

      {/* Main Record Button */}
      <div className="relative flex items-center justify-center mt-6">
        {/* Glow Effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 rounded-full blur-xl bg-teal-400/30 w-[140px] h-[140px] -m-2"
        />

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => onEvent('TAP_RECORD')}
          className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center shadow-lg border border-white/10"
          style={{ 
            backgroundColor: watchTheme.colors.primary,
            color: watchTheme.colors.primaryText
          }}
        >
          <Mic size={42} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Label */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg font-semibold text-center"
        style={{ color: watchTheme.colors.text }}
      >
        Tap to Record
      </motion.p>
      
      {/* Optional Settings Shortcut (Bottom) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => onEvent('TAP_SETTINGS')}
        className="absolute bottom-6 p-2 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
      >
        <Settings size={20} />
      </motion.button>
    </div>
  );
};
