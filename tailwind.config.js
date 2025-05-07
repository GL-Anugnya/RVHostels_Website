module.exports = {
  content: [".//*.html"], // Update this to include your HTML files
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#0000ff",
          
"secondary": "#008300",
          
"accent": "#daab00",
          
"neutral": "#332539",
          
"base-100": "#fff6ff",
          
"info": "#00a8ff",
          
"success": "#00c8a0",
          
"warning": "#c36c00",
          
"error": "#fa5e6f",
          },
        },
      ],
    },
}
