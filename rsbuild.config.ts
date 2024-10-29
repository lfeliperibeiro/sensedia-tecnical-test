import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const templates = {
  index: "./public/index.html",
};

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Sensedia Teste",
    meta: {
      description: "Aplicações de teste para a Sensedia",
    },
  },
});
