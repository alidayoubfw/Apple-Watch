import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Mic, Zap } from 'lucide-react';
import { watchTheme } from '../theme';

interface SettingsScreenProps {
  onEvent: (event: string) => void;
}

const ToggleItem = ({ icon: Icon, label, initial = true }: { icon: any, label: string, initial?: boolean }) => {
    const [isOn, setIsOn] = useState(initial);
    
    return (
        <div className="flex items-center justify-between w-full p-3 rounded-2xl bg-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${isOn ? 'bg-teal-500 text-teal-900' : 'bg-neutral-700 text-neutral-400'}`}>
                    <Icon size={16} />
                </div>
                <span className="text-sm font-medium text-white">{label}</span>
            </div>
            <button 
                onClick={() => setIsOn(!isOn)}
                className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${isOn ? 'bg-green-500' : 'bg-neutral-600'}`}
            >
                <motion.div 
                    layout 
                    className="w-4 h-4 bg-white rounded-full shadow-sm"
                    animate={{ x: isOn ? 20 : 0 }}
                />
            </button>
        </div>
    );
};

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onEvent }) => {
  return (
    <div className="w-full h-full flex flex-col p-2 pt-8 bg-black">
      {/* Header */}
      <div className="flex items-center gap-1 mb-4 px-1">
         <button 
            onClick={() => onEvent('TAP_BACK')}
            className="flex items-center text-teal-400 text-sm font-medium active:opacity-50"
         >
            <ChevronLeft size={20} />
            <span>Back</span>
         </button>
         <span className="text-lg font-bold text-white ml-4">Settings</span>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 overflow-y-auto pb-10 mask-image-gradient">
         <ToggleItem icon={Mic} label="Microphone" />
         <ToggleItem icon={Zap} label="Haptics" />
         
         <div className="mt-4 px-2">
             <p className="text-[10px] text-neutral-500 text-center">
                 Version 1.0.2 (Build 45)
                 <br/>
                 ID: 882-11B
             </p>
         </div>
      </div>
    </div>
  );
};
