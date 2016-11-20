import { EventEmitter } from "@angular/core";
import * as common from "./common";
export declare class FileUploaderComponent {
    fileUploaded: EventEmitter<File | Blob>;
    accept?: string;
    multiple?: boolean;
    locale?: string;
    localeObject: common.Locale;
    onDrop: (e: DragEvent) => void;
    onPaste: (e: ClipboardEvent) => void;
    onFileUploaded: (e: Event) => void;
    ngOnInit(): void;
}
