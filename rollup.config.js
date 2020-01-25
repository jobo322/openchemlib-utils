export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['ml-matrix', 'ml-floyd-warshall'],
};
