/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {   
  screens: {
    'xs': '375px',
    // => @media (min-width: 400px) { ... }
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '744px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
    '3xl': '1536px',

  },container: {
    center: true,
  },
 
  extend: {
    spacing: {
      'xsmall': '1.5rem', //24
      'small': '2rem',    //32
      'medium': '2.5rem',   //40
      "large": '5rem', // 80
    },
    translate: {
      '-1/2': '-50%',
      '1/2': '50%',
    },
  
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      dark:"var(--dark-color)",
    },
    backgroundImage: {
      'custom-hero': "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('<path-to-image>')",
    },
  },
},
plugins: [],
}
