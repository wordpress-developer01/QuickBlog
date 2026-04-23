import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

async function main(prompt) {
  try {
    if (!apiKey) {
      console.warn("Warning: GEMINI_API_KEY not set. Gemini features will not work.");
      return "Gemini API not configured";
    }
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text
  } catch (error) {
    console.error("Gemini API error:", error.message);
    if (error.status === 429 || error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED')) {
      throw new Error("Gemini quota exceeded. Try again later or upgrade your plan.");
    }
    throw error;
  }
}

export default main;