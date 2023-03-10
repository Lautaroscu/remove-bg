const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode : 'class' , 
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a202c',
          dark: '#2d3748',
        },
        // ...
      },
    },
  },

  plugins: [],
};

module.exports = config;
