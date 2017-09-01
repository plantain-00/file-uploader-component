import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "tslib";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode, Component, NgModule } from "@angular/core";

enableProdMode();

let locale: Locale | null = null;

@Component({
    selector: "app",
    template: `
    <div style="margin: 10px; width: 800px">
        <a href="https://github.com/plantain-00/file-uploader-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <h3>just get the file or blob object and print it at console</h3>
        <file-uploader (fileGot)="fileGot($event)"
            accept="image/*"
            multiple="true"
            [locale]="locale">
        </file-uploader>
        <h3>upload the file to server</h3>
        name:
        <input type="text" [(ngModel)]="name"/>
        url:
        <input type="text" [(ngModel)]="url"/>
        method:
        <input type="text" [(ngModel)]="method"/>
        <file-uploader (fileUploaded)="fileUploaded($event)"
            (fileGot)="fileGot($event)"
            accept="image/*"
            multiple="true"
            [locale]="locale"
            [name]="name"
            [url]="url"
            [method]="method">
        </file-uploader>
    </div>
    `,
})
class MainComponent {
    locale = locale;
    name = "test";
    url = "http://localhost:9997";
    method = "POST";
    fileGot(response: any) {
        // tslint:disable-next-line:no-console
        console.log(response);
    }
    fileUploaded(file: File | Blob) {
        // tslint:disable-next-line:no-console
        console.log(file);
    }
}

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FileUploaderModule, Locale } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, FileUploaderModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

function start() {
    platformBrowserDynamic().bootstrapModule(MainModule);
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
