import React, { useState, useEffect } from 'react';
import { PromoCard } from './PromoCard';
import { HoroscopeResult } from '../types';

interface ResultViewProps {
  result: HoroscopeResult;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  const [showPromo, setShowPromo] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-600 relative overflow-hidden animate-in fade-in duration-500">
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-600"></div>

      <div className="mb-6 text-center">
        <h2 className="text-xl md:text-2xl font-black text-yellow-800 mb-1 leading-tight">{result.title}</h2>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
          ))}
        </div>
      </div>

      <div className="space-y-6 text-right w-full" dir="rtl">
        <div className="bg-yellow-50 p-4 rounded-xl border-r-4 border-yellow-500 shadow-sm">
          <label className="block text-[10px] md:text-xs text-yellow-600 font-bold mb-1 opacity-70 uppercase tracking-wider">നിങ്ങൾക്കിട്ട പേര്:</label>
          <p className="text-lg md:text-xl font-black text-yellow-900 leading-tight">{result.nameGiven}</p>
        </div>

        <div>
          <label className="block text-[10px] md:text-xs text-yellow-600 font-bold mb-1 opacity-70 uppercase tracking-wider">ഗ്രഹനില പ്രകാരം:</label>
          <p className="text-base md:text-lg leading-relaxed text-slate-700 whitespace-pre-wrap font-medium">{result.prediction}</p>
        </div>

        <div className="bg-red-50 p-4 rounded-xl border-r-4 border-red-400 shadow-sm">
          <label className="block text-[10px] md:text-xs text-red-600 font-bold mb-1 opacity-70 uppercase tracking-wider">പരിഹാരം:</label>
          <p className="text-sm md:text-md font-bold text-red-800 leading-normal">{result.remedy}</p>
        </div>

        <div className="pt-4 border-t border-yellow-100 italic text-yellow-600 text-xs md:text-sm font-medium leading-relaxed">
          {result.funnyNote}
        </div>

        {showPromo && !promoDismissed && (
          <PromoCard onClose={() => setPromoDismissed(true)} />
        )}
      </div>

      <button
        onClick={onReset}
        className="mt-8 w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
        മറ്റൊരാൾക്ക് നോക്കാം
      </button>
    </div>
  );
};
