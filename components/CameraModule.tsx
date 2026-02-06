
import React, { useRef, useState } from 'react';

interface CameraModuleProps {
  onCapture: (imageData: string) => void;
}

export const CameraModule: React.FC<CameraModuleProps> = ({ onCapture }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPreview(base64);
        onCapture(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border-4 border-yellow-400 flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      <div className="w-full aspect-video md:h-80 bg-yellow-100 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-dashed border-yellow-300 relative">
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="text-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 mx-auto text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-yellow-600 font-bold text-sm md:text-base">നിങ്ങളുടെ മുഖം ഒന്ന് കാണട്ടെ...</p>
          </div>
        )}
      </div>

      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full py-4 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-black text-lg rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>ഫോട്ടോ എടുക്കുക / അപ്‌ലോഡ് ചെയ്യുക</span>
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="user"
        className="hidden"
      />

      <p className="text-xs font-bold text-yellow-700 text-center px-2 opacity-80 uppercase tracking-wide">
        കുറിപ്പ്: നിങ്ങളുടെ ഫോട്ടോ കാണാതെ ഭാവി പ്രവചിക്കാൻ കുമ്പീടിക്ക് കഴിയില്ല!
      </p>
    </div>
  );
};
