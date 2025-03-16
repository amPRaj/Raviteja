import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.JPG", "**/*.jpeg"], // Include image assets
  build: {
    outDir: "dist", // Ensure build files go into "dist" folder
    emptyOutDir: true, // Clears old files before building
  },
});
