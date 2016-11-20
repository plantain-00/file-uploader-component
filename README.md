[![Dependency Status](https://david-dm.org/plantain-00/file-uploader-component.svg)](https://david-dm.org/plantain-00/file-uploader-component)
[![devDependency Status](https://david-dm.org/plantain-00/file-uploader-component/dev-status.svg)](https://david-dm.org/plantain-00/file-uploader-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/file-uploader-component.svg?branch=master)](https://travis-ci.org/plantain-00/file-uploader-component)
[![npm version](https://badge.fury.io/js/file-uploader-component.svg)](https://badge.fury.io/js/file-uploader-component)
[![Downloads](https://img.shields.io/npm/dm/file-uploader-component.svg)](https://www.npmjs.com/package/file-uploader-component)

# file-uploader-component

#### install

`npm i file-uploader-component`

#### reactjs component demo

```js
import { JSONEditor } from "file-uploader-component/dist/react";
```

```jsx
<FileUploader fileUploaded={this.fileUploaded}
    accept="image/*"
    multiple={true}
    locale="zh-cn">
</FileUploader>
```

the online demo: https://plantain-00.github.io/file-uploader-component/demo/react/index.html

the source code of the demo: https://github.com/plantain-00/file-uploader-component/tree/master/demo/react

#### angular2 component demo

```js
import { FileUploaderComponent } from "schema-based-json-editor/dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, FileUploaderComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```jsx
<file-uploader (fileUploaded)="fileUploaded($event)"
    accept="image/*"
    multiple="true"
    locale="zh-cn">
</file-uploader>
```

the online demo: https://plantain-00.github.io/file-uploader-component/demo/angular/index.html

the source code of the demo: https://github.com/plantain-00/file-uploader-component/tree/master/demo/angular

#### properties of the component

+ fileUploaded: the function that is invoked when a file is uploaded
+ accept: optional, a string value
+ multiple: optional, a boolean value
+ locale: optional, support "zh-cn" for now

#### features

+ reactjs component
+ angular2 component
+ vuejs component
+ drag file(s) and drop to the component
+ click to choose file(s)
+ paste file from clipboard
