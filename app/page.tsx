"use client";

import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { BotMessage, UserMessage } from "@/components/messages";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-2xl py-24 mx-auto stretch relative min-h-screen">
      <div className="flex-grow overflow-y-auto px-4">
        {messages.map((m) => (
          <div key={m.id} className="my-2">
            {m.role === "user" ? (
              <UserMessage message={m.content} />
            ) : (
              <BotMessage message={m.content} />
            )}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          <form onSubmit={handleSubmit} className="pb-4 px-4 pt-1 bg-white">
            <Input
              className="w-full p-2 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
