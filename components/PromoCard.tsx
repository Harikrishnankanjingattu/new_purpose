
import React from 'react';

interface PromoCardProps {
    onClose: () => void;
}

export const PromoCard: React.FC<PromoCardProps> = ({ onClose }) => {
    return (
        <div className="bg-white rounded-3xl shadow-xl border-4 border-yellow-200 p-6 md:p-8 relative animate-in slide-in-from-bottom duration-500 mt-8 w-full max-w-lg mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-400"></div>
            <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 text-yellow-600 hover:text-yellow-800 transition-colors bg-yellow-50 rounded-full"
                title="Close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <span className="text-3xl">✨</span>
                </div>

                <p className="text-base md:text-lg font-black text-yellow-900 mb-6 leading-tight px-2">
                    കുമ്പീടിയെ കൊള്ളാമെന്നു തോന്നുന്നുണ്ടോ? <br />
                    <span className="text-sm md:text-md text-yellow-700 font-bold opacity-80 mt-1 block uppercase tracking-wide">ഇതിന്റെ പിന്നിലെ ശരിക്കുള്ള മജീഷ്യൻ! 👇</span>
                </p>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <a
                        href="https://www.linkedin.com/in/harikrishnan-kanjingattu-48a172275/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-all shadow-sm flex flex-col items-center gap-1.5 group border border-blue-100"
                    >
                        <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">LinkedIn</span>
                    </a>

                    <a
                        href="https://www.instagram.com/harikrishnan__kk?igsh=MXNhcmV0am43ZjVhdA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-pink-50 text-pink-600 rounded-2xl hover:bg-pink-100 transition-all shadow-sm flex flex-col items-center gap-1.5 group border border-pink-100"
                    >
                        <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.222-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
