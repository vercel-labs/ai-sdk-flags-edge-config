import Link from "next/link";
import { useState } from "react";
import { XIcon } from "lucide-react";
import { disableApp } from "@/lib/utils";

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link target="_blank" href={href} className="underline hover:opacity-70">
      {children}
    </Link>
  );
};

export const CodeSnippet = ({ children }: { children: string }) => {
  return (
    <span className="text-sm mx-1 bg-secondary text-secondary-foreground p-1 rounded-md font-mono">
      {children}
    </span>
  );
};

export function Modal({ closeModal }: { closeModal: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {disableApp ? null : (
        <button className="absolute right-4 top-4" onClick={closeModal}>
          <XIcon />
        </button>
      )}
      <div className="h-full sm:h-fit flex flex-col items-center justify-start sm:justify-center gap-4 sm:rounded-lg bg-white p-8 max-w-2xl overflow-y-scroll">
        <h2 className="text-3xl font-bold">AI SDK Dynamic Model Demo</h2>
        <p className="">
          This Next.js chatbot (
          <ExternalLink href="https://github.com/vercel-labs/ai-sdk-flags-edge-config">
            source
          </ExternalLink>
          ) uses the{" "}
          <ExternalLink href="https://sdk.vercel.ai/docs">
            Vercel AI SDK
          </ExternalLink>
          &apos;s{" "}
          <ExternalLink href="https://sdk.vercel.ai/docs/ai-sdk-core/provider-management#provider-registry">
            Model Registry
          </ExternalLink>{" "}
          feature in combination with{" "}
          <ExternalLink href="https://vercel.com/docs/workflow-collaboration/feature-flags">
            Feature Flags
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://vercel.com/docs/storage/edge-config">
            Edge Config
          </ExternalLink>{" "}
          to dynamically change the model the chatbot is using.
        </p>

        <div>
          <video
            src="https://ztaacy9ly66axcws.public.blob.vercel-storage.com/ff_demo-tYRfcdUcpeUuc18et0rO2n2NrGiBGv.mp4"
            autoPlay
            controls
            loop
            height={360}
            width={780}
            preload="auto"
          />
        </div>
        <div className="flex items-start p-4 bg-zinc-100 rounded-lg">
          <svg
            className="w-6 h-6 text-zinc-600 mr-3 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            To use this demo, you must deploy the template as it uses the Vercel
            toolbar to toggle the <CodeSnippet>model_id</CodeSnippet> Feature
            Flag.
          </p>
        </div>
        <div>
          <a href="https://vercel.com/templates/Next.js/ai-sdk-feature-flags-edge-config">
            <div className="min-h-8">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
