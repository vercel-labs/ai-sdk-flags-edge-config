// UserMessage.tsx
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MemoizedReactMarkdown } from "./markdown";

function MessageContent({ message }: { message: string }) {
  return (
    <MemoizedReactMarkdown className="prose">{message}</MemoizedReactMarkdown>
  );
}
interface MessageProps {
  message: string;
}

export function UserMessage({ message }: MessageProps) {
  return (
    <div className="flex justify-end mb-4">
      <Card className="sm:max-w-[70%]">
        <CardContent className="p-3">
          <MessageContent message={message} />
        </CardContent>
      </Card>
      <Avatar className="w-8 h-8 ml-2 mt-2">
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function BotMessage({ message }: MessageProps) {
  return (
    <div className="flex mb-4 w-full">
      <Avatar className="w-8 h-8 mr-2 mt-2">
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Card className="sm:max-w-[70%]">
        <CardContent className="p-3">
          <MessageContent message={message} />
        </CardContent>
      </Card>
    </div>
  );
}
