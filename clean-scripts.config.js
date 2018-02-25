const { Service, checkGitStatus, executeScriptAsync } = require('clean-scripts')
const { watch } = require('watch-then-execute')

const tsFiles = `"packages/@(core|vue|react|angular)/@(src|demo)/**/*.@(ts|tsx)" "spec/**/*.ts" "screenshots/**/*.ts"`
const lessFiles = `"packages/core/src/**/*.less"`
const jsFiles = `"*.config.js" "spec/**/*.config.js"`
const excludeTsFiles = `"packages/@(core|vue|react|angular)/@(src|demo)/**/*.d.ts"`

const vueTemplateCommand = `file2variable-cli --config packages/vue/src/file2variable.config.js`
const angularTemplateCommand = `file2variable-cli packages/angular/src/*.template.html -o packages/angular/src/variables.ts --html-minify --base packages/angular/src`

const tscCoreSrcCommand = `ngc -p packages/core/src`
const tscVueSrcCommand = `tsc -p packages/vue/src`
const tscReactSrcCommand = `tsc -p packages/react/src`
const tscAngularSrcCommand = `ngc -p packages/angular/src`

const tscVueDemoCommand = `tsc -p packages/vue/demo`
const tscReactDemoCommand = `tsc -p packages/react/demo`
const tscAngularDemoCommand = `ngc -p packages/angular/demo`

const webpackCommand = `webpack`
const revStaticCommand = `rev-static`
const cssCommand = [
  `lessc packages/core/src/file-uploader.less -sm=on > packages/core/src/file-uploader.css`,
  `postcss packages/core/src/file-uploader.css -o packages/core/dist/file-uploader.css`,
  `cleancss packages/core/dist/file-uploader.css -o packages/core/dist/file-uploader.min.css`,
  `cleancss packages/core/dist/file-uploader.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css -o packages/core/demo/index.bundle.css`
]

module.exports = {
  build: [
    {
      js: [
        {
          vueTemplateCommand,
          angularTemplateCommand
        },
        tscCoreSrcCommand,
        {
          tscVueSrcCommand,
          tscReactSrcCommand,
          tscAngularSrcCommand
        },
        {
          tscVueDemoCommand,
          tscReactDemoCommand,
          tscAngularDemoCommand
        },
        webpackCommand
      ],
      css: cssCommand,
      clean: `rimraf "packages/@(core|vue|react|angular)/demo/**/@(*.bundle-*.js|*.bundle-*.css)"`,
      cpy: `cpy packages/core/src/lib.d.ts packages/core/dist`
    },
    revStaticCommand
  ],
  lint: {
    ts: `tslint ${tsFiles} --exclude ${excludeTsFiles}`,
    js: `standard ${jsFiles}`,
    less: `stylelint ${lessFiles}`,
    export: `no-unused-export ${tsFiles} ${lessFiles} --exclude ${excludeTsFiles}`,
    commit: `commitlint --from=HEAD~1`,
    markdown: `markdownlint README.md`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js',
    () => checkGitStatus()
  ],
  fix: {
    ts: `tslint --fix ${tsFiles} --exclude ${excludeTsFiles}`,
    js: `standard --fix ${jsFiles}`,
    less: `stylelint --fix ${lessFiles}`
  },
  watch: {
    vueTemplateCommand: `${vueTemplateCommand} --watch`,
    angularTemplateCommand: `${angularTemplateCommand} --watch`,
    tscCoreSrcCommand: `${tscCoreSrcCommand} --watch`,
    tscVueSrcCommand: `${tscVueSrcCommand} --watch`,
    tscReactSrcCommand: `${tscReactSrcCommand} --watch`,
    tscAngularSrcCommand: `${tscAngularSrcCommand} --watch`,
    tscVueDemoCommand: `${tscVueDemoCommand} --watch`,
    tscReactDemoCommand: `${tscReactDemoCommand} --watch`,
    tscAngularDemoCommand: `${tscAngularDemoCommand} --watch`,
    webpack: `${webpackCommand} --watch`,
    less: () => watch(['src/**/*.less'], [], () => executeScriptAsync(cssCommand)),
    rev: `${revStaticCommand} --watch`
  },
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
