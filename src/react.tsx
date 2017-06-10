import * as React from "react";

import * as common from "./common";

export type Props = {
    accept?: string;
    multiple?: boolean;
    locale?: string;
    name?: string;
    url?: string;
    method?: string;
    fileGot?: (file: File | Blob) => void;
    fileUploaded?: (response: any) => void;
};

export class FileUploader extends React.Component<Props, {}> {
    onDrop(e: DragEvent) {
        common.onDrop(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, response => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(response);
            }
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, response => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(response);
            }
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, response => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(response);
            }
        });
    }
    render() {
        const locale = common.getLocale(this.props.locale);
        return (
            <div onDrop={(e: React.DragEvent<HTMLElement> | DragEvent) => { this.onDrop(e as DragEvent); }}
                onPaste={(e: React.ClipboardEvent<HTMLElement> | ClipboardEvent) => { this.onPaste(e as ClipboardEvent); }}>
                <p style={common.containerStyle}>
                    {locale.dragAndDrop}
                    <span style={common.selectThemStyle}>{locale.selectFile}</span>
                    {locale.pasteFromClipboard}
                    <input type="file"
                        style={common.fileInputStyle}
                        multiple={this.props.multiple}
                        accept={this.props.accept}
                        onChange={(e: React.FormEvent<HTMLElement> | Event) => { this.onFileUploaded(e as Event); }} />
                </p>
            </div>
        );
    }
}
