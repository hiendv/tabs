import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import postcss from 'rollup-plugin-postcss'

const reslv = p => {
  return path.resolve(__dirname, p)
}

export default [
  {
    input: reslv('src/main.js'),
    output: [
      {
        format: 'es',
        file: reslv('dist/es.js')
      },
      {
        format: 'cjs',
        file: reslv('dist/common.js')
      }
    ],
    plugins: [
      resolve(),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]'
        }
      }),
      buble({
        objectAssign: 'Object.assign'
      }),
      commonjs({
        include: /node_modules/
      })
    ],
    external: ['react', 'react-dom', '@hiendv/tabs', '@primer/octicons-react']
  },
  {
    input: reslv('src/main.js'),
    output: {
      name: 'reacttabs',
      format: 'iife',
      file: reslv('dist/iife.js'),
      exports: 'named'
    },
    plugins: [
      resolve(),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]'
        }
      }),
      buble({
        objectAssign: 'Object.assign'
      }),
      commonjs({
        include: /node_modules/
      })
    ],
    external: ['react', 'react-dom', '@hiendv/tabs', '@primer/octicons-react']
  }
]
