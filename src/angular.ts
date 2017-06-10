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
        (paste)="onPaste($event)">
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
    @Input()
    accept?: string;
    @Input()
    multiple?: boolean;
    @Input()
    locale?: string;
    @Input()
    name?: string;
    @Input()
    url?: string;
    @Input()
    method?: string;

    @Output()
    fileGot = new EventEmitter<File | Blob>();
    @Output()
    fileUploaded = new EventEmitter<any>();

    localeObject: common.Locale;

    onDrop(e: DragEvent) {
        common.onDrop(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, response => {
            this.fileUploaded.emit(response);
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, response => {
            this.fileUploaded.emit(response);
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, response => {
            this.fileUploaded.emit(response);
        });
    }

    ngOnInit() {
        this.localeObject = common.getLocale(this.locale);
    }
}
