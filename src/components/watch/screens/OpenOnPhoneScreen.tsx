import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ArrowLeft } from 'lucide-react';

interface OpenOnPhoneScreenProps {
  onEvent: (event: string) => void;
}

export const OpenOnPhoneScreen: React.FC<OpenOnPhoneScreenProps> = ({ onEvent }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
       <motion.div
         animate={{ y: [0, -10, 0] }}
         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         className="mb-4 relative"
       >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
          <Smartphone size={48} className="text-blue-400 relative z-10" />
       </motion.div>

       <h2 className="text-white font-bold text-center mb-2">Check iPhone</h2>
       <p className="text-white/60 text-xs text-center px-2">
         The companion app has opened on your connected device.
       </p>

       <button 
         onClick={() => onEvent('TAP_BACK')}
         className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70"
       >
         <ArrowLeft size={16} />
       </button>
    </div>
  );
};
