import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0D0D0D",
        axis: {
          orange: "#FF6A00",
          gold: "#FFB100",
          burnt: "#CC4E00",
        },
        slate: {
          DEO: "#2A2A2A",
          900: "#2A2A2A",
        },
        platinum: "#E6E6E6",
        soft: "#F9F9F9",
        steel: "#7A7A7A",
        navy: "#0A1A2F",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(135deg, #FF6A00 0%, #FFB100 100%)",
        "gradient-dark": "linear-gradient(135deg, #0D0D0D 0%, #2A2A2A 100%)",
        "gradient-navy": "linear-gradient(135deg, #0A1A2F 0%, #0D0D0D 100%)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
