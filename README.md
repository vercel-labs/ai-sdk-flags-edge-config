# Vercel AI SDK, Next.js, Edge Config and Feature Flags Example

This example demonstrates how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/), [Feature Flags](https://vercel.com/docs/workflow-collaboration/feature-flags), and [Edge Config](https://vercel.com/docs/storage/edge-config) to create a flexible AI-powered application with dynamic model switching capabilities.

## Deploy your own


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/templates/Next.js/ai-sdk-feature-flags-edge-config)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel-labs/ai-sdk-flags-edge-config ai-sdk-flags-edge-config-example
```

```bash
yarn create next-app --example https://github.com/vercel-labs/ai-sdk-flags-edge-config ai-sdk-flags-edge-config-example
```

```bash
pnpm create next-app --example https://github.com/vercel-labs/ai-sdk-flags-edge-config ai-sdk-flags-edge-config-example
```

To run the example locally you need to:

1. Sign up for accounts with the AI providers you want to use (e.g., OpenAI, Anthropic).
2. Get / Add API keys for each provider.
3. [ Set up Edge Config ](https://vercel.com/docs/storage/edge-config/get-started) in your Vercel dashboard.
4. Set the required environment variables as shown in the `.env.example` file, but in a new file called `.env`.
5. `npm install` to install the required dependencies.
6. `npm run dev` to launch the development server.

Note: you can generate the value for the `FLAGS_SECRET` by running the following code in your terminal:
```bash
node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
```

To run the `node-example.ts` file run the following command in your terminal
```bash
pnpm tsx node-example.ts
```

## Learn More

To learn more about Vercel AI SDK, Next.js, Feature Flags, and Edge Config, take a look at the following resources:

- [Vercel AI SDK docs](https://sdk.vercel.ai/docs)
- [Vercel AI Playground](https://play.vercel.ai)
- [Vercel Feature Flags documentation](https://vercel.com/docs/workflow-collaboration/feature-flags)
- [Vercel Edge Config documentation](https://vercel.com/docs/concepts/edge-network/edge-config)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
