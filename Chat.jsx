import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola, ¿cómo te sientes hoy?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.from === "bot" ? "text-left" : "text-right"}`}
          >
            <span className="inline-block p-2 bg-white rounded shadow">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button
          className="p-2 bg-black text-white rounded-r"
          onClick={sendMessage}
        >
          ➤
        </button>
      </div>
    </div>
  );
}