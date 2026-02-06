
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { CameraModule } from './components/CameraModule';
import { ResultView } from './components/ResultView';
import { SplashScreen } from './components/SplashScreen';
import { Guidelines } from './components/Guidelines';
import { AppState } from './types';
import { generateKumbidiHoroscope } from './services/geminiService';
import loadingAudio from './loading.mp3';

const App: React.FC = () => {
  const [step, setStep] = useState<'splash' | 'guidelines' | 'app'>('splash');
  const [state, setState] = useState<AppState>({
    image: null,
    loading: false,
    result: null,
    error: null,
  });

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (state.loading) {
      if (!audioRef.current) {
        audioRef.current = new Audio(loadingAudio);
        audioRef.current.loop = true;
      }
      audioRef.current.play().catch(err => console.error("Audio Playback Error:", err));
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [state.loading]);

  const [splashStarted, setSplashStarted] = useState(false);

  React.useEffect(() => {
    if (splashStarted && step === 'splash') {
      const timer = setTimeout(() => setStep('guidelines'), 7000);
      return () => clearTimeout(timer);
    }
  }, [splashStarted, step]);

  if (step === 'splash') {
    return <SplashScreen onStarted={() => setSplashStarted(true)} />;
  }

  if (step === 'guidelines') {
    return <Guidelines onAgree={() => setStep('app')} />;
  }

  const handleCapture = async (imageData: string) => {
    setState(prev => ({ ...prev, image: imageData, loading: true, error: null }));

    try {
      const horoscope = await generateKumbidiHoroscope(imageData);
      setState(prev => ({
        ...prev,
        loading: false,
        result: horoscope,
        error: null
      }));
    } catch (err) {
      console.error("Gemini Error:", err);
      setState(prev => ({
        ...prev,
        loading: false,
        error: "കവടി നിരത്തുന്നതിനിടയിൽ ഒരു തടസ്സം! വീണ്ടും ശ്രമിക്കൂ. (Check API Key or Connection)"
      }));
    }
  };

  const handleReset = () => {
    setState({
      image: null,
      loading: false,
      result: null,
      error: null,
    });
  };

  return (
    <Layout>
      {!state.image && !state.result && (
        <CameraModule onCapture={handleCapture} />
      )}

      {state.loading && (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-xl border-4 border-yellow-400">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-6"></div>
          <p className="text-xl font-bold text-yellow-700 text-center animate-pulse">
            കുമ്പീടി കവടി നിരത്തുകയാണ്... <br />
            <span className="text-sm font-normal text-yellow-600 mt-2 block">കാത്തിരിക്കൂ, ഭാഗ്യം തെളിയട്ടെ!</span>
          </p>
        </div>
      )}

      {state.error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 p-6 rounded-2xl mb-4 text-center">
          <p className="font-bold mb-4">{state.error}</p>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            വീണ്ടും ശ്രമിക്കാം
          </button>
        </div>
      )}

      {state.result && !state.loading && (
        <ResultView result={state.result} onReset={handleReset} />
      )}
    </Layout>
  );
};

export default App;
