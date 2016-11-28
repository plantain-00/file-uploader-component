import * as Vue from "vue";
import * as common from "./common";
import Component from "vue-class-component";

@Component({
    props: ["accept", "multiple", "locale"],
    template: `
        <div @drop="onDrop(arguments[0])"
            @paste="onPaste(arguments[0])"
            contenteditable="true">
            <p :style="containerStyle">
                {{localeObject.dragAndDrop}}
                <span :style="selectThemStyle">{{localeObject.selectFile}}</span>
                {{localeObject.pasteFromClipboard}}
                <input type="file"
                    :style="fileInputStyle"
                    :multiple="multiple"
                    :accept="accept"
                    @change="onFileUploaded(arguments[0])" />
            </p>
        </div>
    `,
})
class FileUploader extends Vue {
    accept: string;
    multiple: boolean;
    locale: string;

    localeObject = common.getLocale(this.locale);
    containerStyle = common.containerStyle;
    selectThemStyle = common.selectThemStyle;
    fileInputStyle = common.fileInputStyle;

    onDrop(e: DragEvent) {
        common.onDrop(file => this.$emit("file-uploaded", file))(e);
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(file => this.$emit("file-uploaded", file))(e);
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(file => this.$emit("file-uploaded", file))(e);
    }
}

Vue.component("file-uploader", FileUploader);
