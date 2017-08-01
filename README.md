[![Dependency Status](https://david-dm.org/plantain-00/file-uploader-component.svg)](https://david-dm.org/plantain-00/file-uploader-component)
[![devDependency Status](https://david-dm.org/plantain-00/file-uploader-component/dev-status.svg)](https://david-dm.org/plantain-00/file-uploader-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/file-uploader-component.svg?branch=master)](https://travis-ci.org/plantain-00/file-uploader-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/file-uploader-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/file-uploader-component/branch/master)
[![npm version](https://badge.fury.io/js/file-uploader-component.svg)](https://badge.fury.io/js/file-uploader-component)
[![Downloads](https://img.shields.io/npm/dm/file-uploader-component.svg)](https://www.npmjs.com/package/file-uploader-component)

# file-uploader-component

#### features

+ reactjs component
+ angular component
+ vuejs component
+ drag file(s) and drop to the component
+ click to choose file(s)
+ paste file from clipboard
+ just get the file object, or uploaded to server by `XMLHttpRequest`
+ progress bar
+ multiple-language

#### install

`npm i file-uploader-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/file-uploader-component/file-uploader.min.css" />
```

#### reactjs component demo

```js
import { JSONEditor } from "file-uploader-component/react";
```

```jsx
<FileUploader fileUploaded={this.fileUploaded}
    fileGot={this.fileGot}
    accept="image/*"
    multiple={true}>
</FileUploader>
```

the online demo: https://plantain-00.github.io/file-uploader-component/demo/react/index.html

#### angular component demo

```js
import { FileUploaderComponent } from "file-uploader-component/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, FileUploaderComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```jsx
<file-uploader (fileUploaded)="fileUploaded($event)"
    (fileGot)="fileGot($event)"
    accept="image/*"
    multiple="true">
</file-uploader>
```

the online demo: https://plantain-00.github.io/file-uploader-component/demo/angular/index.html

#### vuejs component demo

`npm i vue vue-class-component`

```js
import "file-uploader-component/vue";
```

```jsx
<file-uploader @file-uploaded="fileUploaded($event)"
    @file-got="fileGot($event)"
    accept="image/*"
    multiple="true">
</file-uploader>
```

the online demo: https://plantain-00.github.io/file-uploader-component/demo/vue/index.html

#### properties and events of the component

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

#### change logs

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

```
// v3
// link css

// v2
// no css file to link
```

```
// v2
fileUploaded: 
// the event that is triggered when a file is uploaded to server

// v1
fileUploaded: (file: File or Blob) => void
// the event that is triggered when got the file object
```
