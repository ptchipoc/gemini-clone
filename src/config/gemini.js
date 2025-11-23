import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDyHiDqjriTZp8q-8bgLJMksSfgq1HQAiQ" });

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
  console.log(response.text);
  return response.text;
}

export default runChat;