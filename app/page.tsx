"use client";

import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { BotMessage, UserMessage } from "@/components/messages";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-2xl py-24 px-4 sm:px-0 mx-auto stretch">
      {messages.map((m) => (
        <div key={m.id} className="my-2">
          {m.role === "user" ? (
            <UserMessage message={m.content} />
          ) : (
            <BotMessage message={m.content} />
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 w-full max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
