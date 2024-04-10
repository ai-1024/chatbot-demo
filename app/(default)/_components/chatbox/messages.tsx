import { Message } from "ai/react";

export default function ({ messages }: { messages: Message[] }) {
  return (
    <div>
      {messages.map((message: Message, idx: number) => {
        const isUser = message.role === "user";

        return (
          <div className={`chat ${isUser ? "chat-end" : "chat-start"}`}>
            <div
              className={`chat-bubble ${
                isUser ? "" : "bg-base-300 text-gray-900"
              }`}
            >
              {message.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
