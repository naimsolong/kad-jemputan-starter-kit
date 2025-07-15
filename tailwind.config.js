import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
    ],
    theme: {
        extend: {
            colors: {
                ...defaultTheme.colors,
                ...{
                    groomPrimary: "#fdfbf6",
                    groomSecondary: "#9b8579",
                    groomTertiary: "#b38f69",
                    bridePrimary: "#fcfbff",
                    brideSecondary: "#6b6b6b",
                    brideTertiary: "#4e4e4e"
                },
            },
            fontFamily: {
                sans: [
                    ...defaultTheme.fontFamily.sans,
                    'Figtree',
                    'Proxima Nova',
                ],
                Miama: 'Miama',
                Cormorant: 'Cormorant',
                CormorantInfanct: 'CormorantInfanct',
                CormorantGaramond: 'CormorantGaramond',
                CormorantUpright: 'CormorantUpright',
                CormorantUnicase: 'CormorantUnicase',
                Baskerville: 'Baskerville',
                spinwerad: 'spinwerad',
                GreatVibes: 'GreatVibes',
                PlayfairDisplay: 'PlayfairDisplay',
            },
            transitionDuration: {
                '2000': '2000ms',
                '3000': '3000ms',
                '4000': '4000ms',
                '5000': '5000ms',
            }
        },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
