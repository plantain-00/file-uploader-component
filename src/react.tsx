import * as React from "react";

import * as common from "./common";

export type Props = {
    fileUploaded: (file: File | Blob) => void;
    accept?: string;
    multiple?: boolean;
    locale?: string;
}

export class FileUploader extends React.Component<Props, {}> {
    onDrop = common.onDrop(this.props.fileUploaded);
    onPaste = common.onPaste(this.props.fileUploaded);
    onFileUploaded = common.onFileUploaded(this.props.fileUploaded);
    render() {
        const locale = common.getLocale(this.props.locale);
        return (
            <div onDrop={(e: React.DragEvent<HTMLElement> | DragEvent) => { this.onDrop(e as DragEvent); } }
                onPaste={(e: React.ClipboardEvent<HTMLElement> | ClipboardEvent) => { this.onPaste(e as ClipboardEvent); } }
                contentEditable={true}>
                <p style={common.containerStyle}>
                    {locale.dragAndDrop}
                    <span style={common.selectThemStyle}>{locale.selectFile}</span>
                    {locale.pasteFromClipboard}
                    <input type="file"
                        style={common.fileInputStyle}
                        multiple={this.props.multiple}
                        accept={this.props.accept}
                        onChange={(e: React.FormEvent<HTMLElement> | Event) => { this.onFileUploaded(e as Event); } } />
                </p>
            </div>
        );
    }
}
