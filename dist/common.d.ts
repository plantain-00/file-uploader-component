import "tslib";
export declare const containerStyle: {
    paddingTop: string;
    paddingBottom: string;
    borderWidth: string;
    borderRadius: string;
    height: string;
    lineHeight: string;
    fontSize: string;
    textAlign: string;
    borderColor: string;
    borderStyle: string;
    backgroundColor: string;
};
export declare const containerStyleString: string;
export declare const selectThemStyle: {
    color: string;
    cursor: string;
};
export declare const selectThemStyleString: string;
export declare const fileInputStyle: {
    opacity: number;
    marginLeft: string;
    cursor: string;
    position: string;
};
export declare const fileInputStyleString: string;
export declare type Locale = {
    dragAndDrop: string;
    selectFile: string;
    pasteFromClipboard: string;
};
export declare const defaultLocale: Locale;
export declare const locales: {
    [name: string]: Locale;
};
export declare function getLocale(name: string | undefined | Locale): Locale;
export declare function onDrop(fileUploaded: (file: File | Blob) => void): (e: DragEvent) => void;
export declare function onPaste(fileUploaded: (file: File | Blob) => void): (e: ClipboardEvent) => void;
export declare function onFileUploaded(fileUploaded: (file: File | Blob) => void): (e: Event) => void;
