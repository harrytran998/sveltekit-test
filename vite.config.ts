import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  mode: process.env.MODE || 'uat',
  plugins: [sveltekit()],
  server: {
    port: 3000,
  },
}

export default config
