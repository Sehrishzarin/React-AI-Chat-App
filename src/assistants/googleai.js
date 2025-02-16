import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Initialize GoogleGenerativeAI instance
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export class Assistant {
  #chat;
  constructor(model = "gemini-1.5-flash") {
    const gemini = googleai.getGenerativeModel({ model });
    this.#chat = gemini.startChat({ history: [] });
  }
  async chat(content) {
    try {
      const result = await this.#chat.sendMessage(content);
      console.log("API Response:", result); // Log the full response
      return await result.response.text();
    } catch (error) {
      console.error("Chat Error:", error);
      throw error;
    }
  }
}
