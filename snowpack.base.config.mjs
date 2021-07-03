export default {
  mount: {
    dist: "/",
    src: "/"
  },
  plugins: [
    "@snowpack/plugin-sass",
  ],
  alias: {
    "@components": "./src/components",
    "@views": "./src/views",
    "@modules": "./src/modules",
    "@utils": "./src/utils",
    "@src": "./src"
  }
}
