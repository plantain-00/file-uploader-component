import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "./common";

@Component({
    selector: "file-uploader",
    styles: [
        `.file-uploader-container {${common.containerStyleString}}`,
        `.file-uploader-file-input {${common.fileInputStyleString}}`,
        `.file-uploader-select-them {${common.selectThemStyleString}}`,
    ],
    template: `
    <div (drop)="onDrop($event)"
        (paste)="onPaste($event)"
        contenteditable="true">
        <p class="file-uploader-container">
            {{localeObject.dragAndDrop}}
            <span class="file-uploader-select-them">{{localeObject.selectFile}}</span>
            {{localeObject.pasteFromClipboard}}
            <input type="file"
                class="file-uploader-file-input"
                [multiple]="multiple"
                [accept]="accept"
                (change)="onFileUploaded($event)" />
        </p>
    </div>
    `,
})
export class FileUploaderComponent {
    @Output()
    fileUploaded = new EventEmitter<File | Blob>();
    @Input()
    accept?: string;
    @Input()
    multiple?: boolean;
    @Input()
    locale?: string;

    localeObject: common.Locale;
    onDrop = common.onDrop(file => this.fileUploaded.emit(file));
    onPaste = common.onPaste(file => this.fileUploaded.emit(file));
    onFileUploaded = common.onFileUploaded(file => this.fileUploaded.emit(file));

    ngOnInit() {
        this.localeObject = common.getLocale(this.locale);
    }
}
