# file-uploader-component

[![Dependency Status](https://david-dm.org/plantain-00/file-uploader-component.svg)](https://david-dm.org/plantain-00/file-uploader-component)
[![devDependency Status](https://david-dm.org/plantain-00/file-uploader-component/dev-status.svg)](https://david-dm.org/plantain-00/file-uploader-component#info=devDependencies)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/file-uploader-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/file-uploader-component/branch/master)
![Github CI](https://github.com/plantain-00/file-uploader-component/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/file-uploader-component.svg)](https://badge.fury.io/js/file-uploader-component)
[![Downloads](https://img.shields.io/npm/dm/file-uploader-component.svg)](https://www.npmjs.com/package/file-uploader-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Ffile-uploader-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/file-uploader-component)

## features

+ reactjs component
+ vuejs component
+ drag file(s) and drop to the component
+ click to choose file(s)
+ paste file from clipboard
+ just get the file object, or uploaded to server by `XMLHttpRequest`
+ progress bar
+ multiple-language

## link css

```html
<link rel="stylesheet" href="./node_modules/file-uploader-component/dist/file-uploader.min.css" />
```

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/file-uploader-react-component?compression=gzip)](https://unpkg.com/file-uploader-react-component)

`npm i file-uploader-react-component`

```js
import { FileUploader } from "file-uploader-react-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/file-uploader-react-component/dist/file-uploader-react-component.min.js"></script>
```

```jsx
<FileUploader fileUploaded={this.fileUploaded}
    fileGot={this.fileGot}
    accept="image/*"
    multiple={true}>
</FileUploader>
```

the online demo: <https://plantain-00.github.io/file-uploader-component/packages/react/demo>

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/file-uploader-vue-component?compression=gzip)](https://unpkg.com/file-uploader-vue-component)

`npm i file-uploader-vue-component`

```js
import { FileUploader } from "file-uploader-vue-component";
app.component('file-uploader', FileUploader)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/file-uploader-vue-component/dist/file-uploader-vue-component.min.js"></script>
```

```jsx
<file-uploader @file-uploaded="fileUploaded($event)"
    @file-got="fileGot($event)"
    accept="image/*"
    multiple="true">
</file-uploader>
```

the online demo: <https://plantain-00.github.io/file-uploader-component/packages/vue/demo>

## properties and events of the component

name | type | description
--- | --- | ---
accept | string? | the extension names in the file chosen dialog
multiple | boolean? | whether multiple file can be selected
locale | Locale? | the locale object
name | string? | will be the key of the file in `FormData`
url | string? | the upload API url
method | string? | the upload API method
fileUploaded | (response: any) => void | the event that is triggered when a file is uploaded
fileGot | (file: File or Blob) => void | the event that is triggered when got the file object

## change logs

```ts
// v7 vue2
import "file-uploader-vue-component";

// v8 vue3
import { FileUploader } from "file-uploader-vue-component";
app.component('file-uploader', FileUploader)
```

```bash
# v6
npm i file-uploader-component

# v7
npm i file-uploader-vue-component
npm i file-uploader-react-component
npm i file-uploader-angular-component
```

```ts
// v6
import "file-uploader-component/vue";
import { FileUploader } from "file-uploader-component/react";
import { FileUploaderModule } from "file-uploader-component/angular";

// v7
import "file-uploader-vue-component";
import { FileUploader } from "file-uploader-react-component";
import { FileUploaderModule } from "file-uploader-angular-component";
```

```html
// v6
<link rel="stylesheet" href="./node_modules/file-uploader-component/file-uploader.min.css" />

// v7
<link rel="stylesheet" href="./node_modules/file-uploader-component/dist/file-uploader.min.css" />
```

```ts
// v5 angular AOT:
import { FileUploaderModule } from "file-uploader-component/angular";

// v6 angular AOT:
import { FileUploaderModule } from "file-uploader-component/aot/angular";
```

```bash
// v5
import "file-uploader-component/vue";

// v4
import "file-uploader-component/dist/vue";
```

```bash
// v4
locale is an object that can be imported dynamicly

// v3
locale is a string
```

```bash
// v3
// link css

// v2
// no css file to link
```

```bash
// v2
fileUploaded:
// the event that is triggered when a file is uploaded to server

// v1
fileUploaded: (file: File or Blob) => void
// the event that is triggered when got the file object
```
