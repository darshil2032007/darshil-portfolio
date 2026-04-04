export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are an AI assistant for Darshil Savaliya's portfolio.

Darshil Savaliya is a B.Tech student in Artificial Intelligence & Machine Learning at LD College of Engineering.

Skills:
Python, C++, JavaScript, Java, TensorFlow, PyTorch, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, SQL.

Projects:
Theft Detection System
Smartphone Market Analysis
Student Performance Analysis
Trip Planner

User question:
${message}
`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";

    return Response.json({ reply });

  } catch (error) {
    console.error("Gemini error:", error);

    return Response.json({
      reply: "AI service error. Check server console.",
    });
  }
}