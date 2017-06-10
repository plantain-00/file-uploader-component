import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "tslib";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

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
export class MainComponent {
    locale = navigator.language;
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

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FileUploaderComponent } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, FileUploaderComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
