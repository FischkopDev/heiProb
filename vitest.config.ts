import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simuliert einen Browser im Terminal
    globals: true,        // Erlaubt 'describe', 'test', 'expect' ohne Import
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // Damit deine @-Imports funktionieren
    },
  },
});