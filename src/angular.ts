import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "./common";

@Component({
    selector: "file-uploader",
    styles: [
        `.container {${common.containerStyleString}}`,
        `.file-input {${common.fileInputStyleString}}`,
        `.select-them {${common.selectThemStyleString}}`,
    ],
    template: `
    <div (drop)="onDrop($event)"
        (paste)="onPaste($event)"
        contenteditable="true">
        <p class="container">
            {{localeObject.dragAndDrop}}
            <span class="select-them">{{localeObject.selectFile}}</span>
            {{localeObject.pasteFromClipboard}}
            <input type="file"
                class="file-input"
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

    ngOnInit() {
        this.localeObject = common.getLocale(this.locale);
    }

    onDrop = (e: DragEvent) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            e.preventDefault();
            for (let i = 0; i < files.length; i++) {
                this.fileUploaded.emit(files.item(i));
            }
        }
    }
    onPaste = (e: ClipboardEvent) => {
        const items = e.clipboardData.items;
        if (items.length > 0) {
            e.preventDefault();
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        this.fileUploaded.emit(file);
                    }
                }
            }
        }
    }
    onFileUploaded = (e: Event) => {
        const files = (e.currentTarget as HTMLInputElement).files;
        if (files) {
            e.preventDefault();
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    this.fileUploaded.emit(files.item(i));
                }
            }
        }
    }
}
