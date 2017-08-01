module.exports = {
  build: [
    `rimraf demo/**/index.bundle-*.js demo/index.bundle-*.css demo/demo-*.png demo/**/*.index.bundle-*.js`,
    `rimraf dist`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `lessc src/file-uploader.less > dist/file-uploader.css`,
    `webpack --config demo/webpack.config.js`,
    `cleancss -o dist/file-uploader.min.css dist/file-uploader.css`,
    `cleancss -o demo/index.bundle.css dist/file-uploader.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.tsx" "demo/**/*.tsx" "src/**/*.ts" "demo/**/*.ts" "spec/**/*.ts"`,
    `standard "**/*.config.js"`,
    `stylelint "src/*.less" --syntax less`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
