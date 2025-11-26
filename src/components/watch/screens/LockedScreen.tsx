import React from 'react';
import { motion } from 'motion/react';
import { Mic, LockOpen } from 'lucide-react';
import { watchTheme } from '../theme';

interface LockedScreenProps {
  onEvent: (event: string) => void;
}

export const LockedScreen: React.FC<LockedScreenProps> = ({ onEvent }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-black/40 backdrop-blur-sm">
      
      {/* Minimal Pulse Ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-48 h-48 rounded-full border-2 border-teal-500/30"
      />

      <div className="flex flex-col items-center space-y-6 z-10">
        <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center border border-teal-500/20">
           <Mic size={24} className="text-teal-400 animate-pulse" />
        </div>
        
        <div className="text-center space-y-1">
            <h3 className="text-lg font-medium text-white">Locked</h3>
            <p className="text-sm text-white/50">Recording in progress...</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onEvent('TAP_UNLOCK')}
          className="px-6 py-3 rounded-full bg-neutral-800 border border-neutral-700 flex items-center gap-2 text-sm font-medium text-white hover:bg-neutral-700"
        >
          <LockOpen size={16} />
          <span>Tap to Resume</span>
        </motion.button>
      </div>
    </div>
  );
};
