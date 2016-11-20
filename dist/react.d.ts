/// <reference types="react" />
import * as React from "react";
export declare type Props = {
    fileUploaded: (file: File | Blob) => void;
    accept?: string;
    multiple?: boolean;
    locale?: string;
};
export declare class FileUploader extends React.Component<Props, {}> {
    onDrop: (e: DragEvent) => void;
    onPaste: (e: ClipboardEvent) => void;
    onFileUploaded: (e: Event) => void;
    render(): JSX.Element;
}
