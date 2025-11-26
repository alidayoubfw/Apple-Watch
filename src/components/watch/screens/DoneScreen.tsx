import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Smartphone } from 'lucide-react';
import { watchTheme } from '../theme';

interface DoneScreenProps {
  onEvent: (event: string) => void;
}

export const DoneScreen: React.FC<DoneScreenProps> = ({ onEvent }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 space-y-3">
      
      <div className="text-center mb-2">
        <p className="text-white text-sm font-medium">Ready for next</p>
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onEvent('TAP_RECORD_AGAIN')}
        className="w-full h-12 rounded-full bg-teal-500 text-teal-950 font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg"
      >
        <RotateCcw size={18} strokeWidth={2.5} />
        Record Again
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onEvent('TAP_OPEN_ON_PHONE')}
        className="w-full h-12 rounded-full bg-neutral-800 text-white font-medium text-[15px] flex items-center justify-center gap-2 border border-white/10"
      >
        <Smartphone size={18} />
        Open on Phone
      </motion.button>
      
      <motion.button
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
         onClick={() => onEvent('TAP_BACK')}
         className="text-xs text-white/40 mt-2 hover:text-white"
      >
          Go Home
      </motion.button>

    </div>
  );
};
