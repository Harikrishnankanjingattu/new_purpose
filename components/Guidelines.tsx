
import React from 'react';

interface GuidelinesProps {
    onAgree: () => void;
}

export const Guidelines: React.FC<GuidelinesProps> = ({ onAgree }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-4 md:p-6 overflow-y-auto">
            <div className="max-w-md w-full bg-white border-4 border-yellow-400 rounded-[2.5rem] p-6 md:p-10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
                <h2 className="text-xl md:text-2xl font-black text-yellow-800 mb-6 text-center leading-tight">
                    കുമ്പീടിയുടെ ഉപദേശം! <br />
                    <span className="text-sm font-bold opacity-60 uppercase tracking-widest">(AI Guidelines)</span>
                </h2>

                <div className="space-y-5 text-yellow-900 font-bold leading-relaxed text-right" dir="rtl">
                    <p className="text-sm md:text-base">
                        ശ്രദ്ധിക്കുക! ഈ കുമ്പീടി ഇപ്പോൾ യുകെയിൽ നിന്നുള്ള എക്സ്പോർട്ടഡ് സാധനമാണ്.
                    </p>
                    <p className="text-sm md:text-base opacity-90">
                        ഈ കാണുന്നതൊക്കെ ഒരു AI (ദിവ്യയന്ത്രം) വിളമ്പുന്നതാണ്. ഇതിൽ പറയുന്ന ജാതകവും ഫലവും ഒക്കെ വെറും തമാശ മാത്രം! ലക്ഷണമൊത്ത നുണയാണെന്ന് ഉറപ്പിച്ചു വിശ്വസിക്കാം.
                    </p>
                    <p className="text-sm md:text-base opacity-90">
                        യന്ത്രത്തിന് വല്ല പിശകും പറ്റിയാൽ ഈ കുമ്പീടി ഉത്തരവാദിയല്ല. എല്ലാം നിങ്ങളുടെ സ്വന്തം റിസ്കിൽ മാത്രം!
                    </p>
                    <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-100 mt-6 shadow-inner">
                        <p className="font-black text-center text-red-600 text-sm md:text-md uppercase tracking-wide">
                            ഇതൊക്കെ കേട്ടിട്ട് സമ്മതമാണെങ്കിൽ മാത്രം മുന്നോട്ട് പോവുക!
                        </p>
                    </div>
                </div>

                <button
                    onClick={onAgree}
                    className="mt-10 w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-black text-lg md:text-xl rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                    ശരി കുമ്പീടി, സമ്മതിച്ചിരിക്കുന്നു!
                </button>
            </div>
        </div>
    );
};
