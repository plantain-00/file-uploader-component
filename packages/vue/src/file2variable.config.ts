export default {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  handler: (file: string) => {
    if (file.endsWith('index.template.html')) {
      return {
        type: 'vue',
        name: 'FileUploader',
        path: './index'
      }
    }
    return { type: 'text' }
  },
  out: 'packages/vue/src/variables.ts'
}
