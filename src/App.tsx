import model from "./lib/lmstudio";
import { generateText } from "ai";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, `ユーザー: ${userMessage}`]);
    setInput("");

    const { text } = await generateText({
      model: model,
      prompt: userMessage,
    });

    setMessages((prev) => [...prev, `AI: ${text}`]);
  }

  return (
    <div className="p-4 h-screen">
      <div className="max-w-2xl mx-auto relative h-full">
        <div className="pb-36  overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-2 ${
                message.startsWith("ユーザー:")
                  ? "bg-blue-100 ml-auto w-fit max-w-[80%] text-right"
                  : "bg-gray-100 mr-auto w-fit max-w-[80%]"
              }`}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0">
          <div className="bg-gradient-to-t from-white to-transparent h-12" />
          <form
            onSubmit={handleSubmit}
            className="w-full flex gap-2 p-4 pb-8 max-w-2xl mx-auto bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力してください"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
