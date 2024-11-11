/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "#1E3A5F",
        "light-gray": "#F4F4F4",
      },
      backgroundImage: {
        patagonia: "url('/src/assets/patagonia.webp')",
        interior: "url('/src/assets/interior1.jpeg')",
        sky: "url('/src/assets/sky.jpg')",
        interior2: "url('/src/assets/interior.jpg')",
        projection: "url('/src/assets/planeacion.webp')",
        construction: "url('/src/assets/construccion.jpeg')",
        reparacion: "url('/src/assets/reparacion.jpg')",
      },
      fontFamily: {
        roboto: "roboto",
        inter: "Inter",
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
