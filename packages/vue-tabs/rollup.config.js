import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
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
      commonjs(),
      resolve(),
      vue({
        style: {
          preprocessOptions: {
            scss: {
              includePaths: [reslv('src')]
            }
          }
        }
      })
    ],
    external: ['@hiendv/tabs', 'octicons-vue']
  },
  {
    input: reslv('src/main.js'),
    output: {
      name: 'vuetabs',
      format: 'iife',
      file: reslv('dist/iife.js'),
      exports: 'named'
    },
    plugins: [
      commonjs(),
      resolve(),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]'
        }
      }),
      vue({
        style: {
          preprocessOptions: {
            scss: {
              includePaths: [reslv('src')]
            }
          }
        }
      }),
      buble({
        objectAssign: 'Object.assign'
      })
    ]
  }
]
