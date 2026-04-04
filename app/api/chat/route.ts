export async function POST(req: Request) {

  try {

    const { message } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          max_tokens: 80,   // limits response length

          messages: [
            {
              role: "system",
              content: `
You are Darshil's AI portfolio assistant.

Rules:
- Answer ONLY about Darshil.
- Keep answers short (2–4 lines maximum).
- Be clear and professional.

If the question is unrelated say:
"I am Darshil's portfolio assistant and can answer questions about his skills, projects, and education."

About Darshil:

Darshil Savaliya is a B.Tech student in Artificial Intelligence & Machine Learning at LD College of Engineering.

Skills:
Python, C++, JavaScript, Java, TensorFlow, PyTorch, Pandas, NumPy, SQL.

Projects:
Theft Detection System
Smartphone Market Analysis
Student Performance Analysis
Trip Planner
`,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "AI did not return a response.",
    });

  } catch (error) {

    return Response.json({
      reply: "AI server error",
    });

  }
}