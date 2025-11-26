import React, { useState, useEffect } from 'react';
import { WatchFrame } from './components/watch/WatchFrame';
import { HomeScreen } from './components/watch/screens/HomeScreen';
import { RecordingScreen } from './components/watch/screens/RecordingScreen';
import { LockedScreen } from './components/watch/screens/LockedScreen';
import { StoppedScreen } from './components/watch/screens/StoppedScreen';
import { DoneScreen } from './components/watch/screens/DoneScreen';
import { SettingsScreen } from './components/watch/screens/SettingsScreen';
import { OpenOnPhoneScreen } from './components/watch/screens/OpenOnPhoneScreen';

export type WatchState = 
  | 'HOME'
  | 'RECORDING_ACTIVE'
  | 'LOCKED_RECORDING'
  | 'RECORDING_STOPPED'
  | 'DONE'
  | 'SETTINGS'
  | 'OPEN_ON_PHONE';

export default function App() {
  const [currentState, setCurrentState] = useState<WatchState>('HOME');
  const [recordingDuration, setRecordingDuration] = useState(0);

  // Transitions
  const handleEvent = (event: string) => {
    console.log(`Event: ${event} triggered from State: ${currentState}`);
    
    switch (event) {
      case 'TAP_RECORD':
        setCurrentState('RECORDING_ACTIVE');
        break;
      case 'TAP_STOP':
        setCurrentState('RECORDING_STOPPED');
        break;
      case 'SCREEN_OFF':
        setCurrentState('LOCKED_RECORDING');
        break;
      case 'TAP_UNLOCK':
        setCurrentState('RECORDING_ACTIVE');
        break;
      case 'AUTO_SAVE':
        setCurrentState('DONE');
        break;
      case 'TAP_RECORD_AGAIN':
        setRecordingDuration(0);
        setCurrentState('RECORDING_ACTIVE');
        break;
      case 'TAP_OPEN_ON_PHONE':
        setCurrentState('OPEN_ON_PHONE');
        break;
      case 'TAP_SETTINGS': // Added for navigation to settings
        setCurrentState('SETTINGS');
        break;
      case 'TAP_BACK':
        setCurrentState('HOME');
        break;
      case 'RESET':
        setRecordingDuration(0);
        setCurrentState('HOME');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-8 font-sans text-slate-900">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">AI Companion Watch Prototype</h1>
          <p className="text-slate-500">Current State: <span className="font-mono font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded">{currentState}</span></p>
        </div>

        <WatchFrame>
          {currentState === 'HOME' && <HomeScreen onEvent={handleEvent} />}
          {currentState === 'RECORDING_ACTIVE' && <RecordingScreen onEvent={handleEvent} duration={recordingDuration} setDuration={setRecordingDuration} />}
          {currentState === 'LOCKED_RECORDING' && <LockedScreen onEvent={handleEvent} />}
          {currentState === 'RECORDING_STOPPED' && <StoppedScreen onEvent={handleEvent} />}
          {currentState === 'DONE' && <DoneScreen onEvent={handleEvent} />}
          {currentState === 'SETTINGS' && <SettingsScreen onEvent={handleEvent} />}
          {currentState === 'OPEN_ON_PHONE' && <OpenOnPhoneScreen onEvent={handleEvent} />}
        </WatchFrame>

        <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 max-w-[300px]">
          <div>Debug Controls:</div>
          <button onClick={() => handleEvent('RESET')} className="hover:text-teal-600 text-left">Reset to Home</button>
        </div>
      </div>
    </div>
  );
}
