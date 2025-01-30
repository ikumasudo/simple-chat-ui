import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "https://desktop-win.tailb587a6.ts.net/v1",
});

const model = lmstudio("lmstudio-community/Qwen2.5-7B-Instruct-1M-GGUF");

export default model;
