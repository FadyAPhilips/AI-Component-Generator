import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // ⚠️ Required for frontend use (temporary for hackathon)
});

export async function generateHTML(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // ✅ Use GPT-4o for better performance
      messages: [
        {
          role: "system",
          content: "You are an AI that generates self-contained HTML snippets.",
        },
        {
          role: "user",
          content: `Generate an HTML snippet based on this description (return only runable HTML): ${prompt}`,
        },
      ],
      max_tokens: 300,
    });

    return response.choices[0].message.content
      .replace(/```html|```/g, "")
      .trim(); // ✅ Extracts generated HTML
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return "<p>Error generating component</p>"; // Fallback HTML
  }
}
