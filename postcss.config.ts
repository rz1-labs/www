import tailwindcss from "@tailwindcss/postcss";
import postcssPresetEnv from "postcss-preset-env";

module.exports = () => ({
  plugins: [
    tailwindcss(),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
});
