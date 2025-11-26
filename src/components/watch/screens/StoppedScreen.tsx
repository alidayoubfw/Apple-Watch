import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { watchTheme } from '../theme';

interface StoppedScreenProps {
  onEvent: (event: string) => void;
}

export const StoppedScreen: React.FC<StoppedScreenProps> = ({ onEvent }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onEvent('AUTO_SAVE');
    }, 2500); // 2.5 seconds delay
    return () => clearTimeout(timer);
  }, [onEvent]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-24 h-24 rounded-full bg-teal-400 flex items-center justify-center mb-6 shadow-xl shadow-teal-900/50"
      >
        <Check size={48} className="text-teal-900" strokeWidth={3} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-2"
      >
        <h2 className="text-xl font-bold text-white">Saved</h2>
        <p className="text-teal-200/80 text-sm">Sent to your phone</p>
      </motion.div>
    </div>
  );
};
