import * as Vue from "vue";
import * as common from "./common";
import Component from "vue-class-component";

@Component({
    props: ["accept", "multiple", "locale", "name", "url", "method"],
    template: `
        <div @drop="onDrop($event)"
            @paste="onPaste($event)">
            <p :style="containerStyle">
                {{localeObject.dragAndDrop}}
                <span :style="selectThemStyle">{{localeObject.selectFile}}</span>
                {{localeObject.pasteFromClipboard}}
                <input type="file"
                    :style="fileInputStyle"
                    :multiple="multiple"
                    :accept="accept"
                    @change="onFileUploaded($event)" />
            </p>
        </div>
    `,
})
class FileUploader extends Vue {
    accept: string;
    multiple: boolean;
    locale: string;
    name: string;
    url: string;
    method: string;

    localeObject = common.getLocale(this.locale);
    containerStyle = common.containerStyle;
    selectThemStyle = common.selectThemStyle;
    fileInputStyle = common.fileInputStyle;

    onDrop(e: DragEvent) {
        common.onDrop(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, response => {
            this.$emit("file-uploaded", response);
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, response => {
            this.$emit("file-uploaded", response);
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.name, this.url, this.method, file => {
            this.$emit("file-got", file);
        }, response => {
            this.$emit("file-uploaded", response);
        });
    }
}

Vue.component("file-uploader", FileUploader);
