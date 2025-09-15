import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import svgr from "vite-plugin-svgr"
import tailwindcss from "@tailwindcss/vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"), // optional absolute import
    },
  },
})
