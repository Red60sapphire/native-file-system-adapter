import { terser } from 'rollup-plugin-terser'

// import urlImport from 'rollup-plugin-url-import'

export default {
  input: ['src/es6.js'],
  inlineDynamicImports: true,
  output: {
    file: "dist/output.js",
  },
  plugins: [
    // urlImport(),
    terser()
  ]
}
