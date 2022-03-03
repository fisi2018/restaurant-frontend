module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      "inner-md":`-5px -60px 59px 2px rgba(0,0,0,0.66) inset`,
      "my-format":"0 0.5rem 1.5rem rgba(0,0,0,0.2)",
      "inner-header":`-4px 45px 40px 2px rgba(0,0,0,0.66) inset`
    },
    extend: {
      backgroundImage:{
        "form-login":`url("https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg")`,
        "main-restaurant":`url("https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg")`,
        "entrada":`url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcrm.org%2Fsites%2Fdefault%2Ffiles%2Fensalada-quinoa-frijoles-5.jpg&f=1&nofb=1")`,
        "main-plate":`url("https://www.diariamenteali.com/medias/receta-de-arroz-con-mariscos-1900Wx500H?context=bWFzdGVyfHJvb3R8MjU4OTQwfGltYWdlL2pwZWd8aDcyL2g2YS85MDc0MTg2NjgyMzk4L3JlY2V0YS1kZS1hcnJvei1jb24tbWFyaXNjb3NfMTkwMFd4NTAwSHw3NzczNmEyZDk0MDUxMzgxNDczNWY0MjM0ZTg1ODZmNmFjNThlZTE3NmM1NjIwZGI1YzViMzNhYWUyMDI2ODlm")`,
        "bebida":`url("https://cdn.pixabay.com/photo/2017/02/01/10/46/cocktail-2029572_1280.jpg")`,
        "postre":`url("https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg")`,
        "hdr-wood":`url("https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379_1280.jpg")`
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
