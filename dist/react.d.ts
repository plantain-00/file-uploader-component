/// <reference types="react" />
import * as React from "react";
export declare type Props = {
    fileUploaded: (file: File | Blob) => void;
    accept?: string;
    multiple?: boolean;
    locale?: string;
};
export declare class FileUploader extends React.Component<Props, {}> {
    onDrop: (e: React.DragEvent<HTMLElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLElement>) => void;
    onFileUploaded: (e: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
