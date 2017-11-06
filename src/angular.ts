import { Component, Input, Output, EventEmitter, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { angularTemplateHtml } from "./angular-variables";

/**
 * @public
 */
@Component({
    selector: "file-uploader",
    template: angularTemplateHtml,
})
export class FileUploaderComponent {
    @Input()
    accept?: string;
    @Input()
    multiple?: boolean;
    @Input()
    locale?: common.Locale;
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

    requests: common.UploadRequest[] = [];

    onDrop(e: DragEvent) {
        common.onDrop(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, request => {
            this.fileUploaded.emit(request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, request => {
            this.fileUploaded.emit(request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.name, this.url, this.method, file => {
            this.fileGot.emit(file);
        }, request => {
            this.fileUploaded.emit(request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }

    ngOnInit() {
        this.localeObject = common.getLocale(this.locale);
    }
    trackBy(request: common.UploadRequest, index: number) {
        return index;
    }
}

/**
 * @public
 */
@NgModule({
    declarations: [
        FileUploaderComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FileUploaderComponent,
    ],
})
export class FileUploaderModule { }
