"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { BsRobot } from "react-icons/bs";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";
import { MdClose } from "react-icons/md";

type Msg = { role: "user" | "assistant"; content: string };

export default function AIChat() {

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"chat" | "voice">("chat");

  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! Ask me anything about Darshil." },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // central scroll helper
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  // auto scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage: Msg = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    scrollToBottom();

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const fullText = data.reply;

    let assistantMessage: Msg = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, assistantMessage]);

    setLoading(false);

    let i = 0;

    const typing = setInterval(() => {

      i++;

      assistantMessage.content = fullText.slice(0, i);

      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { ...assistantMessage };
        return newMessages;
      });

      scrollToBottom(); // 🔥 auto scroll during typing

      if (i >= fullText.length) clearInterval(typing);

    }, 20);

  }

  const startListening = () => {

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    setListening(true);

    recognition.onresult = async (event: any) => {

      const text = event.results[0][0].transcript;

      setMessages((prev) => [...prev, { role: "user" as const, content: text }]);

      setListening(false);

      scrollToBottom();

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      speakWithCaptions(data.reply);

    };

    recognition.onerror = () => {
      setListening(false);
    };

  };

  const speakWithCaptions = (text: string) => {

    const words = text.split(" ");

    let index = 0;

    let assistantMsg: Msg = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, assistantMsg]);

    const interval = setInterval(() => {

      index++;

      assistantMsg.content = words.slice(0, index).join(" ");

      setMessages((prev) => {

        const updated = [...prev];

        updated[updated.length - 1] = { ...assistantMsg };

        return updated;

      });

      scrollToBottom(); // 🔥 auto scroll during voice captions

      if (index >= words.length) clearInterval(interval);

    }, 120);

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);

  };

  return (
    <>
      {/* Floating Button */}

      <button
        id="ai-chat-button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center
        rounded-full bg-gradient-to-r from-purple-500 to-purple-600
        hover:scale-110 transition shadow-lg shadow-purple-500/30 z-[9999]"
      >
        <BsRobot className="text-white text-xl" />
      </button>

      {/* Assistant Window */}

      {open && (

        <div className="fixed bottom-20 right-6 w-[340px] h-[440px]
        bg-black/70 backdrop-blur-xl border border-purple-500/30
        rounded-xl shadow-xl flex flex-col z-[9999]">

          {/* Header */}

          <div className="flex items-center justify-between p-3 border-b border-gray-700">

            <div className="flex items-center gap-2 text-purple-400 font-semibold">
              <BsRobot />
              Darshil AI
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <MdClose />
            </button>

          </div>

          {/* Mode Switch */}

          <div className="flex border-b border-gray-800 text-sm">

            <button
              onClick={() => setMode("chat")}
              className={`flex-1 py-2 ${
                mode === "chat"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-400"
              }`}
            >
              🤖 Chat
            </button>

            <button
              onClick={() => setMode("voice")}
              className={`flex-1 py-2 ${
                mode === "voice"
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-400"
              }`}
            >
              🎤 Voice
            </button>

          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto p-3 space-y-3">

            {messages.map((msg, i) => (

              <div
                key={i}
                className={`text-sm p-3 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >

                <ReactMarkdown>{msg.content}</ReactMarkdown>

              </div>

            ))}

            {loading && (

              <div className="bg-gray-800 text-gray-400 text-sm p-3 rounded-lg w-fit">
                AI is thinking...
              </div>

            )}

            <div ref={chatEndRef}></div>

          </div>

          {/* Chat Input */}

          {mode === "chat" && (

            <div className="p-3 border-t border-gray-700 flex gap-2">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg outline-none"
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white transition
                ${
                  input.trim()
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-purple-500 opacity-40"
                }`}
              >
                <FaPaperPlane />
              </button>

            </div>

          )}

          {/* Voice Mode */}

          {mode === "voice" && (

            <div className="p-6 flex flex-col items-center justify-center gap-4 border-t border-gray-700">

              <button
                onClick={startListening}
                className={`w-14 h-14 rounded-full flex items-center justify-center
                bg-gradient-to-r from-purple-500 to-cyan-500
                shadow-lg hover:scale-110 transition
                ${listening ? "animate-pulse" : ""}`}
              >

                <FaMicrophone className="text-white text-lg" />

              </button>

              <p className="text-gray-400 text-sm">
                {listening ? "Listening..." : "Tap to speak"}
              </p>

            </div>

          )}

        </div>

      )}
    </>
  );
}