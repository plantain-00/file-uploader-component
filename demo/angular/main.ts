import { Component } from "@angular/core";
import { Locale } from "../../dist/angular";

let locale: Locale | null = null;

export function setLocale(newLocale: Locale) {
    locale = newLocale;
}

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
