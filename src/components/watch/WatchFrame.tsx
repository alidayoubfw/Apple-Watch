import React from 'react';
import { watchTheme } from './theme';

interface WatchFrameProps {
  children: React.ReactNode;
}

export const WatchFrame: React.FC<WatchFrameProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Watch Case (Aluminum/Stainless Steel look) */}
      <div 
        className="relative w-[360px] h-[430px] bg-neutral-800 rounded-[68px] shadow-2xl border-[6px] border-neutral-700/50 flex items-center justify-center"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255,255,255,0.1)'
        }}
      >
        {/* Digital Crown */}
        <div className="absolute -right-[14px] top-[100px] w-[12px] h-[36px] bg-neutral-600 rounded-r-md shadow-md border-l border-neutral-900/50" />
        {/* Side Button */}
        <div className="absolute -right-[14px] top-[150px] w-[12px] h-[24px] bg-neutral-600 rounded-r-md shadow-md border-l border-neutral-900/50" />

        {/* Screen Bezel (Black glass border) */}
        <div className="w-[340px] h-[410px] bg-black rounded-[60px] flex items-center justify-center overflow-hidden relative ring-4 ring-black">
           {/* Active Display Area */}
           <div 
             className="w-full h-full relative overflow-hidden flex flex-col"
             style={{ 
               backgroundColor: watchTheme.colors.background,
               fontFamily: '"SF Pro Rounded", system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
             }}
           >
             {/* Global Status Bar Overlay (Time) - Removed per request */}
             {/* <div className="absolute top-0 left-0 right-0 h-8 z-50 flex justify-between px-6 items-center pointer-events-none opacity-80">
               <span className="text-xs font-medium text-white/60 tracking-wide">9:41</span>
             </div> */}
             
             {/* Main Content */}
             <div className="flex-1 w-full h-full relative">
                {children}
             </div>
           </div>
        </div>
        
        {/* Screen Glare/Reflection (Subtle) */}
        <div className="absolute inset-0 rounded-[68px] pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
      </div>
      
      {/* Watch Band (Top/Bottom visual cue - simplified) */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[180px] h-[60px] bg-neutral-700 rounded-t-3xl -z-10 opacity-50" />
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[180px] h-[60px] bg-neutral-700 rounded-b-3xl -z-10 opacity-50" />
    </div>
  );
};
