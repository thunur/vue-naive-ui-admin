import { defineConfig } from 'vite-plugin-windicss';
import { getWindiBreakpoint } from './src/enums/breakpointEnum';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx,ts,js}', 'public/**/*.{html}', './*.html'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      screens: getWindiBreakpoint,
      fontFamily: {
        segoe: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      outline: {
        primary: [`2px solid var(--app-primary-color)`, '0px'],
      },
    },
  },
  alias: {
    'center-layout': 'flex justify-center items-center',
    'hb-layout': 'flex justify-between items-center',
    'hs-layout': 'flex justify-center',
    'vs-layout': 'flex items-center',
    spin: 'animate-spin animate-ease-[cubic-bezier(0.37,0.35,0.35,0.97)]',
    'n-ease-in-out': 'duration-300 ease-in-out',
  },
  shortcuts: {
    'app-layout-header-anction-icon':
      'cursor-pointer h-full px-2.5 flex justify-between items-center hover:bg-$hover-color',
  },
  variants: {},
  plugins: [createEnterPlugin()],
});

/**
 * Used for animation when the element is displayed.
 * @param maxOutput The larger the maxOutput output, the larger the generated css volume.
 */
function createEnterPlugin(maxOutput = 6) {
  const createCss = (index: number, d = 'x') => {
    const upd = d.toUpperCase();
    return {
      [`*> .enter-${d}:nth-child(${index})`]: {
        transform: `translate${upd}(50px)`,
      },
      [`*> .-enter-${d}:nth-child(${index})`]: {
        transform: `translate${upd}(-50px)`,
      },
      [`* > .enter-${d}:nth-child(${index}),* > .-enter-${d}:nth-child(${index})`]: {
        'z-index': `${10 - index}`,
        opacity: '0',
        animation: `enter-${d}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 10}s`,
      },
    };
  };
  const handler = ({ addBase }) => {
    const addRawCss = {};
    for (let index = 1; index < maxOutput; index++) {
      Object.assign(addRawCss, {
        ...createCss(index, 'x'),
        ...createCss(index, 'y'),
      });
    }
    addBase({
      ...addRawCss,
      [`@keyframes enter-x-animation`]: {
        to: {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      [`@keyframes enter-y-animation`]: {
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    });
  };
  return { handler };
}
