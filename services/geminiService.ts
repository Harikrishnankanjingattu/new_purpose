
import { GoogleGenAI, Type } from "@google/genai";
import { HoroscopeResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateKumbidiHoroscope = async (base64Image: string): Promise<HoroscopeResult> => {
  const model = "gemini-3-flash-preview";

  const systemInstruction = `
    You are 'Kumbidi', the legendary humorous and eccentric Namboothiri astrologer from Malayalam cinema. 
    Your tone is traditional, slightly fraudulent, and extremely funny. 
    You use Malayalam script and terms like 'Kudumba Mahathmyam', 'Chovvadosham', 'Grahanila', 'Kavadi'.
    
    When shown a photo:
    1. Give them a funny traditional Namboothiri-style name (e.g., "Kumbidi", "Dasan", "Pappan").
    2. Write a 'prediction' (horoscope) in Malayalam that is satirical and funny. Mention things like their "face cut" or "aura" in a mock-astrological way.
    3. Suggest a 'remedy' (parikaram) that is absolutely ridiculous (e.g., "Walk backwards while eating a banana").
    4. Keep the output strictly in JSON format.
  `;

  const prompt = "Analyze this person's 'vibe' and 'grahanila' based on their image and tell their destiny in Kumbidi's style.";

  const response = await ai.models.generateContent({
    model: model,
    contents: [
      {
        parts: [
          { inlineData: { data: base64Image.split(',')[1], mimeType: "image/jpeg" } },
          { text: prompt }
        ]
      }
    ],
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A funny title for the reading" },
          nameGiven: { type: Type.STRING, description: "Funny name given by Kumbidi" },
          prediction: { type: Type.STRING, description: "The funny Malayalam horoscope text" },
          remedy: { type: Type.STRING, description: "The ridiculous Malayalam remedy" },
          funnyNote: { type: Type.STRING, description: "A short closing joke in Malayalam" }
        },
        required: ["title", "nameGiven", "prediction", "remedy", "funnyNote"]
      }
    }
  });

  const jsonStr = response.text?.trim();
  if (!jsonStr) throw new Error("Empty response from Kumbidi");
  
  return JSON.parse(jsonStr) as HoroscopeResult;
};
