import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://desktop-win:1234/v1",
});

const model = lmstudio("lmstudio-community/Qwen2.5-7B-Instruct-1M-GGUF");

export default model;
