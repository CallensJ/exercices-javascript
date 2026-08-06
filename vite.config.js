import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))
const exercicesDir = resolve(root, 'exercices')

const exerciseEntries = Object.fromEntries(
  readdirSync(exercicesDir)
    .filter((name) => statSync(join(exercicesDir, name)).isDirectory())
    .map((name) => [
      `exercices/${name}`,
      resolve(exercicesDir, name, 'index.html'),
    ])
)

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        ...exerciseEntries,
      },
    },
  },
})
