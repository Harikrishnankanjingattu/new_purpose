import React from 'react';
import logo from '../kumbidi.png';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-yellow-50 text-slate-800 flex flex-col items-center px-4 py-6 relative overflow-x-hidden">
      <div className="fixed top-4 left-4 w-10 h-10 md:w-16 md:h-16 z-50 pointer-events-none">
        <img src={logo} alt="Kumbidi Logo" className="w-full h-full object-contain rounded-full border-2 border-yellow-400 bg-white shadow-md" />
      </div>
      <header className="w-full max-w-lg text-center py-6 mb-4 border-b-2 border-yellow-200">
        <h1 className="text-3xl md:text-4xl font-black text-yellow-700 mb-2 px-2">കുമ്പീടി എക്സ്പോർട്ടഡ് ഫ്രം യുകെ</h1>
        <p className="text-base md:text-lg text-yellow-600 italic font-medium">ലണ്ടൻ വഴി വന്ന ദിവ്യജ്ഞാനം!</p>
      </header>
      <main className="w-full max-w-lg flex-1">
        {children}
      </main>
      <footer className="w-full max-w-lg text-center py-8 text-yellow-600 text-xs font-bold opacity-80 uppercase tracking-widest border-t border-yellow-100 mt-8">
        ഭാവിയും ഭൂതവും വർത്തമാനവും... <br /> എല്ലാം ഈ കുമ്പീടിയുടെ കയ്യിൽ ഭദ്രം!
      </footer>

    </div>
  );
};
