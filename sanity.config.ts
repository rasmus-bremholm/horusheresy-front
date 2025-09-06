import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
	name: "default",
	title: "Heresy Docs",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	basePath: "/studio",
	plugins: [structureTool(), visionTool(), codeInput()],
	schema: { types: schemas },
});
