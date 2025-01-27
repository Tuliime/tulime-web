// import type { Config } from "tailwindcss";

// export default {
//     darkMode: ["class"],
//     content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//   	extend: {
//   		screens: {
//   			sm: '0px',
//   			md: '598px',
//   			lg: '877px',
//   			xl: '930px',
//   			'2xl': '1536px'
//   		},
//   		colors: {
//   			green: {
//   				'100': '#37b24d',
//   				'500': '#24AE7C',
//   				'600': '#0D2A1F'
//   			},
//   			yellow: {
//   				'100': '#f59f00'
//   			},
//   			blue: {
//   				'100': '#1c7ed6',
//   				'500': '#79B5EC',
//   				'600': '#152432'
//   			},
//   			red: {
//   				'500': '#F37877',
//   				'600': '#3E1716',
//   				'700': '#F24E43'
//   			},
//   			light: {
//   				'200': '#E8E9E9'
//   			},
//   			dark: {
//   				'200': '#0D0F10',
//   				'300': '#131619',
//   				'400': '#1A1D21',
//   				'500': '#363A3D',
//   				'600': '#76828D',
//   				'700': '#ABB8C4'
//   			},
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		fontFamily: {
//   			sans: [\r\n          "Inter",\r\n        "ui-sans-serif",\r\n      "system-ui",\r\n          "sans-serif",\r\n          "Apple Color Emoji",\r\n          "Segoe UI Emoji",\r\n          "Segoe UI Symbol",\r\n          "Noto Color Emoji",\r\n        ],
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "598px",
        lg: "877px",
        xl: "930px",
        "2xl": "1536px",
      },
      colors: {
        green: {
          "100": "#37b24d",
          "500": "#24AE7C",
          "600": "#0D2A1F",
        },
        yellow: {
          "100": "#f59f00",
        },
        blue: {
          "100": "#1c7ed6",
          "500": "#79B5EC",
          "600": "#152432",
        },
        red: {
          "500": "#F37877",
          "600": "#3E1716",
          "700": "#F24E43",
        },
        light: {
          "200": "#E8E9E9",
        },
        dark: {
          "200": "#0D0F10",
          "300": "#131619",
          "400": "#1A1D21",
          "500": "#363A3D",
          "600": "#76828D",
          "700": "#ABB8C4",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        flyIn: {
          "0%": { top: "1.8rem" },
          // "20%": { transform: "translateY(-20px)", opacity: "0.3" },
          // "40%": { transform: "translateY(-10px)", opacity: "0.5" },
          // "80%": { transform: "translateY(-10px)", opacity: "0.8" },
          "100%": { top: "2.75rem" },
        },
      },
      animation: {
        flyIn: "flyIn 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
