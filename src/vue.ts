import Vue from "vue";
import * as common from "./common";
export * from "./common";
import Component from "vue-class-component";
import { vueTemplateHtml } from "./vue-variables";

@Component({
    props: ["accept", "multiple", "locale", "name", "url", "method"],
    template: vueTemplateHtml,
})
class FileUploader extends Vue {
    accept: string;
    multiple: boolean;
    locale: string;
    name: string;
    url: string;
    method: string;

    localeObject = common.getLocale(this.locale);

    requests: common.UploadRequest[] = [];

    getProgressWidth(request: common.UploadRequest) {
        return {
            width: request.percent + "%",
        };
    }

    onDrop(e: DragEvent) {
        common.onDrop(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, request => {
            this.$emit("file-uploaded", request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, request => {
            this.$emit("file-uploaded", request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, request => {
            this.$emit("file-uploaded", request.response);
            common.removeRequest(this.requests, request);
        }, percent => {
            // nothing to do
        }, request => {
            this.requests.push(request);
        });
    }
}

Vue.component("file-uploader", FileUploader);
