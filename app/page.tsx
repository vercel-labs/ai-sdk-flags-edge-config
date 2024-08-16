"use client";

import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { BotMessage, UserMessage } from "@/components/messages";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { disableApp } from "@/lib/utils";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [showModal, setShowModal] = useState(true);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="relative min-h-screen w-full">
      {showModal && <Modal closeModal={closeModal} />}
      <div className="flex flex-col w-full max-w-2xl pt-16 pb-20 mx-auto stretch relative ">
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

        <div className="fixed bottom-0 pb-2 bg-white left-0 w-full">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            <form
              onSubmit={handleSubmit}
              className="bg-background px-4 py-3 sticky bottom-0 w-full"
            >
              <div>
                <div className="flex space-x-2">
                  <div className="relative w-full">
                    <Input
                      placeholder="Type your message..."
                      className="w-full rounded-lg pr-16 resize-none"
                      value={input}
                      disabled={disableApp}
                      min={8}
                      onChange={handleInputChange}
                    />
                    <Button
                      type="submit"
                      disabled={disableApp}
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 right-0 -translate-y-1/2"
                    >
                      <SendIcon className="w-5 h-5 p-[2px]" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={openModal}
                  >
                    <InfoIcon className="p-[2px]" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
