import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/the-act-cast",
  define: {
    'process.env.REACT_APP_PUBLIC_PATH': JSON.stringify(process.env.REACT_APP_REPO_PUBLIC_PATH),
  },
})
