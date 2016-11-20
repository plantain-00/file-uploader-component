import * as React from "react";

import * as common from "./common";

export type Props = {
    fileUploaded: (file: File | Blob) => void;
    accept?: string;
    multiple?: boolean;
    locale?: string;
}

export class FileUploader extends React.Component<Props, {}> {
    onDragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }
    onDrop = (e: React.DragEvent<HTMLElement>) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            e.preventDefault();
            for (let i = 0; i < files.length; i++) {
                this.props.fileUploaded(files.item(i));
            }
        }
    }
    onPaste = (e: React.ClipboardEvent<HTMLElement>) => {
        const items = e.clipboardData.items;
        if (items.length > 0) {
            e.preventDefault();
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        this.props.fileUploaded(file);
                    }
                }
            }
        }
    }
    onFileUploaded = (e: React.FormEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) {
            e.preventDefault();
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    this.props.fileUploaded(files.item(i));
                }
            }
        }
    }
    render() {
        const locale = common.getLocale(this.props.locale);
        return (
            <div onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                onPaste={this.onPaste}
                contentEditable={true}>
                <p style={common.containerStyle}>
                    {locale.dragAndDrop}
                    <span style={common.selectThemStyle}>{locale.selectFile}</span>
                    {locale.pasteFromClipboard}
                    <input type="file"
                        style={common.fileInputStyle}
                        multiple={this.props.multiple}
                        accept={this.props.accept}
                        onChange={this.onFileUploaded} />
                </p>
            </div>
        );
    }
}
