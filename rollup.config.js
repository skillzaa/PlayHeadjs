
import { rollup } from "rollup";
//import { uglify } from "rollup-plugin-uglify";
//import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/PlayHead.js',
 //   plugins: [terser()],
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    }
  };