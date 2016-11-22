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
        <file-uploader (fileUploaded)="fileUploaded($event)"
            accept="image/*"
            multiple="true"
            [locale]="locale">
        </file-uploader>
    </div>
    `,
})
export class MainComponent {
    locale = navigator.language ? navigator.language.toLowerCase() : undefined;
    fileUploaded(file: File | Blob) {
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
