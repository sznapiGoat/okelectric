import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1512",
          soft: "#3A4440",
          faint: "#626D68",
        },
        paper: "#FFFFFF",
        mist: "#F4F6F4",
        line: {
          DEFAULT: "#E1E6E1",
          strong: "#C9D1C9",
        },
        brand: {
          DEFAULT: "#60B23A",
          deep: "#3D7A22",
          wash: "#EEF7E9",
        },
        tech: {
          DEFAULT: "#005AA5",
          deep: "#00447D",
          wash: "#E9F1F8",
        },
        alert: "#E31E24",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-text)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 6.2vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.1rem, 4.6vw, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.65rem, 3vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.022em" }],
        "display-sm": ["clamp(1.3rem, 2vw, 1.6rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        shell: "84rem",
        prose: "38rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
