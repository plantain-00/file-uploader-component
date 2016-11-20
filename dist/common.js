"use strict";
require("tslib");
exports.containerStyle = {
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
exports.selectThemStyle = {
    color: "#4078c0",
    cursor: "pointer",
};
exports.fileInputStyle = {
    opacity: 0.0001,
    marginLeft: -350,
    cursor: "pointer",
    position: "absolute",
};
exports.defaultLocale = {
    dragAndDrop: "Upload files by dragging & dropping,",
    selectFile: "selecting them",
    pasteFromClipboard: ", or pasting from the clipboard.",
};
exports.locales = {
    "zh-cn": {
        dragAndDrop: "通过拖放、",
        selectFile: "选择",
        pasteFromClipboard: "、或者从剪切板粘贴来上传文件。",
    },
};
function getLocale(name) {
    if (name === undefined) {
        return exports.defaultLocale;
    }
    if (typeof name === "string") {
        return exports.locales[name] || exports.defaultLocale;
    }
    return name;
}
exports.getLocale = getLocale;
//# sourceMappingURL=common.js.map