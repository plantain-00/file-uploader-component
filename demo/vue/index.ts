import * as Vue from "vue";
import Component from "vue-class-component";

import "../../dist/vue";

@Component({
    template: `
    <div style="margin: 10px; width: 800px">
        <file-uploader @file-uploaded="fileUploaded(arguments[0])"
            accept="image/*"
            multiple="true"
            :locale="locale">
        </file-uploader>
    </div>
    `,
})
class App extends Vue {
    locale = navigator.language;

    fileUploaded(file: File | Blob) {
        console.log(file);
    }
}

/* tslint:disable:no-unused-expression */
new App({ el: "#container" });
/* tslint:enable:no-unused-expression */
