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
};

export const containerStyleString = "padding-top: 16px; padding-bottom: 16px; border-width: 1px; border-radius: 3px; height: 31px; line-height: 31px; font-size: 14px; text-align: center; border-color: #ddd; border-style: dashed; background-color: #fafafa;";

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
};

export const fileInputStyleString = "opacity: 0.0001; margin-left: -350px; cursor: pointer; position: absolute;";

export type Locale = {
    dragAndDrop: string;
    selectFile: string;
    pasteFromClipboard: string;
}

export const defaultLocale: Locale = {
    dragAndDrop: "Upload files by dragging & dropping,",
    selectFile: "selecting them",
    pasteFromClipboard: ", or pasting from the clipboard.",
};

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
        return locales[name] || defaultLocale;
    }
    return name;
}
