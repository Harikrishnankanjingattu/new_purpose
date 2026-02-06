import React, { useEffect, useRef } from 'react';
import splashImage from '../services/Untitled design (2).png';
import splashAudio from '../kumbidi.mp3';

interface SplashScreenProps {
    onStarted: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStarted }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasStarted, setHasStarted] = React.useState(false);

    const handleStart = () => {
        audioRef.current = new Audio(splashAudio);
        audioRef.current.play().catch(err => console.error("Splash audio failed:", err));
        setHasStarted(true);
        onStarted(); // Notify App to start the 7s timer
    };

    useEffect(() => {
        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-4 md:p-6 overflow-hidden">
            {!hasStarted ? (
                <button
                    onClick={handleStart}
                    className="group flex flex-col items-center gap-4 md:gap-6 animate-in fade-in zoom-in duration-700 w-full max-w-xs"
                >
                    <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500 relative">
                        <img
                            src={splashImage}
                            alt="Kumbidi"
                            className="w-full h-full object-cover scale-110"
                        />
                        <div className="absolute inset-0 bg-yellow-400/10 mix-blend-overlay"></div>
                    </div>
                    <div className="w-full bg-yellow-400 text-yellow-900 px-6 py-4 rounded-3xl font-black text-lg md:text-xl shadow-lg group-hover:bg-yellow-500 transition-all uppercase tracking-widest active:scale-95 leading-tight">
                        കുമ്പീടിയെ ഉണർത്തുക
                    </div>
                    <p className="text-yellow-700 font-bold animate-pulse text-xs md:text-sm uppercase tracking-tighter opacity-80">
                        (Tap to wake up Kumbidi)
                    </p>
                </button>
            ) : (
                <div className="max-w-md w-full animate-in fade-in duration-1000 px-4">
                    <img
                        src={splashImage}
                        alt="Kumbidi Digital Kavadi"
                        className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-yellow-400/20"
                    />
                    <div className="mt-8 text-center bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200 shadow-inner">
                        <p className="text-yellow-800 font-black italic animate-pulse text-lg md:text-xl leading-snug">
                            ലണ്ടനിൽ നിന്നും വരികയാണ്... <br />
                            <span className="text-sm font-bold opacity-75 not-italic uppercase tracking-widest mt-2 block">കാത്തിരിക്കൂ!</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
