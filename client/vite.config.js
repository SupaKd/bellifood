import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/client', // Laisse '/' si tu déploies à la racine du domaine
});
