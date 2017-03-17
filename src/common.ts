import "tslib";

export const containerStyle = {
    paddingTop: "16px",
    paddingBottom: "16px",
    borderWidth: "1px",
    borderRadius: "3px",
    height: "31px",
    lineHeight: "31px",
    fontSize: "14px",
    textAlign: "center",
    borderColor: "#ddd",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    boxSizing: "content-box",
};

export const containerStyleString = "padding-top: 16px; padding-bottom: 16px; border-width: 1px; border-radius: 3px; height: 31px; line-height: 31px; font-size: 14px; text-align: center; border-color: #ddd; border-style: dashed; background-color: #fafafa; box-sizing: content-box;";

export const selectThemStyle = {
    color: "#4078c0",
    cursor: "pointer",
};

export const selectThemStyleString = "color: #4078c0; cursor: pointer";

export const fileInputStyle = {
    opacity: 0.0001,
    marginLeft: "-350px",
    cursor: "pointer",
    position: "absolute",
    display: "inline",
};

export const fileInputStyleString = "opacity: 0.0001; margin-left: -350px; cursor: pointer; position: absolute; display: inline;";

export const defaultLocale = {
    dragAndDrop: "Upload files by dragging & dropping,",
    selectFile: "selecting them",
    pasteFromClipboard: ", or pasting from the clipboard.",
};

export type Locale = typeof defaultLocale;

export const locales: { [name: string]: Locale } = {
    "zh-cn": {
        dragAndDrop: "通过拖放、",
        selectFile: "选择",
        pasteFromClipboard: "、或者从剪切板粘贴来上传文件。",
    },
};

export function getLocale(name: string | undefined | Locale): Locale {
    if (name === undefined) {
        return defaultLocale;
    }
    if (typeof name === "string") {
        return locales[name.toLowerCase()] || defaultLocale;
    }
    return name;
}

export function onDrop(fileUploaded: (file: File | Blob) => void) {
    return (e: DragEvent) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            e.preventDefault();
            for (let i = 0; i < files.length; i++) {
                fileUploaded(files.item(i));
            }
        }
    };
}

export function onPaste(fileUploaded: (file: File | Blob) => void) {
    return (e: ClipboardEvent) => {
        const items = e.clipboardData.items;
        if (items.length > 0) {
            e.preventDefault();
            /* tslint:disable:prefer-for-of */
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        fileUploaded(file);
                    }
                }
            }
        }
    };
}

export function onFileUploaded(fileUploaded: (file: File | Blob) => void) {
    return (e: Event) => {
        const files = (e.currentTarget as HTMLInputElement).files;
        if (files) {
            e.preventDefault();
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    fileUploaded(files.item(i));
                }
            }
        }
    };
}
