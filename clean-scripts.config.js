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
      clean: `rimraf demo/**/index.bundle-*.js demo/index.bundle-*.css demo/demo-*.png demo/**/*.index.bundle-*.js`
    },
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: {
    ts: `tslint "src/**/*.tsx" "demo/**/*.tsx" "src/**/*.ts" "demo/**/*.ts" "spec/**/*.ts"`,
    js: `standard "**/*.config.js"`,
    less: `stylelint "src/*.less"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: {
    ts: `tslint --fix "src/**/*.tsx" "demo/**/*.tsx" "src/**/*.ts" "demo/**/*.ts" "spec/**/*.ts"`,
    js: `standard --fix "**/*.config.js"`,
    less: `stylelint --fix "src/*.less"`
  },
  release: `clean-release`
}
