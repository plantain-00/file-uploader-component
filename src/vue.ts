import * as Vue from "vue";
import * as common from "./common";

/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-new */
/* tslint:disable:object-literal-shorthand */

Vue.component("file-uploader", {
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
    props: ["accept", "multiple", "locale"],
    data: function (this: This) {
        const localeObject = common.getLocale(this.locale);
        return {
            localeObject,
            containerStyle: common.containerStyle,
            selectThemStyle: common.selectThemStyle,
            fileInputStyle: common.fileInputStyle,
        };
    },
    methods: {
        onDrop: function (this: This, e: DragEvent) {
            common.onDrop(file => this.$emit("file-uploaded", file))(e);
        },
        onPaste: function (this: This, e: ClipboardEvent) {
            common.onPaste(file => this.$emit("file-uploaded", file))(e);
        },
        onFileUploaded: function (this: This, e: Event) {
            common.onFileUploaded(file => this.$emit("file-uploaded", file))(e);
        },
    },
});

export type This = {
    $emit: (event: string, args: File | Blob) => void;
    locale: common.Locale;
}
