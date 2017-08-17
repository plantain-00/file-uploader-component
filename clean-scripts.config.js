const childProcess = require('child_process')

module.exports = {
  build: [
    `rimraf dist`,
    `mkdirp dist`,
    {
      js: [
        `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
        `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
        `ngc -p src`,
        `tsc -p demo`,
        `webpack --display-modules --config demo/webpack.config.js`
      ],
      css: [
        `lessc src/file-uploader.less > dist/file-uploader.css`,
        `cleancss -o dist/file-uploader.min.css dist/file-uploader.css`,
        `cleancss -o demo/index.bundle.css dist/file-uploader.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`
      ],
      clean: `rimraf demo/**/index.bundle-*.js demo/index.bundle-*.css demo/demo-*.png demo/**/*.index.bundle-*.js`,
      cpy: `cpy src/lib.d.ts dist`
    },
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: {
    ts: `tslint "src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx"`,
    js: `standard "**/*.config.js"`,
    less: `stylelint "src/*.less"`,
    export: `no-unused-export "src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx" --exclude "src/compiled/**/*"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js',
    () => new Promise((resolve, reject) => {
      childProcess.exec('git status -s', (error, stdout, stderr) => {
        if (error) {
          reject(error)
        } else {
          if (stdout) {
            reject(new Error(`generated files doesn't match.`))
          } else {
            resolve()
          }
        }
      }).stdout.pipe(process.stdout)
    })
  ],
  fix: {
    ts: `tslint --fix "src/**/*.tsx" "demo/**/*.tsx" "src/**/*.ts" "demo/**/*.ts" "spec/**/*.ts"`,
    js: `standard --fix "**/*.config.js"`,
    less: `stylelint --fix "src/*.less"`
  },
  release: `clean-release`,
  watch: `watch-then-execute "src/**/*.tsx" "demo/**/*.tsx" "src/**/*.ts" "demo/**/*.ts" "spec/**/*.ts" "src/**/*.template.html" --exclude "src/compiled/**/*,src/*-variables.ts" --script "npm run build"`
}
