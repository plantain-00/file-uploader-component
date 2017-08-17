import Vue from "vue";
import Component from "vue-class-component";

import "../../dist/vue";
import { Locale } from "../../dist/vue";

let locale: Locale | null = null;

@Component({
    template: `
    <div style="margin: 10px; width: 800px">
        <a href="https://github.com/plantain-00/file-uploader-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <h3>just get the file or blob object and print it at console</h3>
        <file-uploader @file-got="fileGot($event)"
            accept="image/*"
            multiple="true"
            :locale="locale">
        </file-uploader>
        <h3>upload the file to server</h3>
        name:
        <input type="text" v-model="name"/>
        url:
        <input type="text" v-model="url"/>
        method:
        <input type="text" v-model="method"/>
        <file-uploader @file-uploaded="fileUploaded($event)"
            @file-got="fileGot($event)"
            accept="image/*"
            multiple="true"
            :locale="locale"
            :name="name"
            :url="url"
            :method="method">
        </file-uploader>
    </div>
    `,
})
class App extends Vue {
    locale = locale;
    name = "test";
    url = "http://localhost:9997";
    method = "POST";

    fileGot(file: File | Blob) {
        // tslint:disable-next-line:no-console
        console.log(file);
    }
    fileUploaded(response: any) {
        // tslint:disable-next-line:no-console
        console.log(response);
    }
}

function start() {
    new App({ el: "#container" });
}

if (navigator.language === "zh-CN") {
    import ("../../dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
