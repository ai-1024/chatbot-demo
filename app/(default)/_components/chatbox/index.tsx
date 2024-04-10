"use client";

import { Message, useChat } from "ai/react";

import AudioInput from "../audioinput";
import Messages from "./messages";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, stop } = useChat({
    api: "/api/chat",
    initialInput: "say hello",
    initialMessages: [
      {
        role: "system",
        content: "你可以问我任何问题",
        id: "xxx",
      },
    ],
    onResponse: (res: Response) => {
      console.log("resp", res);
    },
    onFinish: (message: Message) => {
      console.log("msg", message);
    },
    onError: (err: Error) => {
      console.log("error", err);
    },
    headers: {
      "X-Model": "gpt-4",
    },
    body: {
      model: "gpt-3.t-turbo",
    },
    sendExtraMessageFields: false,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {/* {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))} */}
      <Messages messages={messages} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="fixed bottom-8 input input-bordered w-full max-w-xs"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <AudioInput />
      </form>
    </div>
  );
}
