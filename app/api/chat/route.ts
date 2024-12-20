import { convertToCoreMessages, streamText } from 'ai';
import { registry } from '@/lib/ai-config';
import { modelId } from '@/flags';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const model = await modelId() as string;

  const result = streamText({
    model: registry.languageModel(model),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
