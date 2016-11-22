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
    boxSizing: "content-box",
};
exports.containerStyleString = "padding-top: 16px; padding-bottom: 16px; border-width: 1px; border-radius: 3px; height: 31px; line-height: 31px; font-size: 14px; text-align: center; border-color: #ddd; border-style: dashed; background-color: #fafafa; box-sizing: content-box;";
exports.selectThemStyle = {
    color: "#4078c0",
    cursor: "pointer",
};
exports.selectThemStyleString = "color: #4078c0; cursor: pointer";
exports.fileInputStyle = {
    opacity: 0.0001,
    marginLeft: "-350px",
    cursor: "pointer",
    position: "absolute",
    display: "inline",
};
exports.fileInputStyleString = "opacity: 0.0001; margin-left: -350px; cursor: pointer; position: absolute; display: inline;";
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
function onDrop(fileUploaded) {
    return function (e) {
        var files = e.dataTransfer.files;
        if (files.length > 0) {
            e.preventDefault();
            for (var i = 0; i < files.length; i++) {
                fileUploaded(files.item(i));
            }
        }
    };
}
exports.onDrop = onDrop;
function onPaste(fileUploaded) {
    return function (e) {
        var items = e.clipboardData.items;
        if (items.length > 0) {
            e.preventDefault();
            /* tslint:disable:prefer-for-of */
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.kind === "file") {
                    var file = item.getAsFile();
                    if (file) {
                        fileUploaded(file);
                    }
                }
            }
        }
    };
}
exports.onPaste = onPaste;
function onFileUploaded(fileUploaded) {
    return function (e) {
        var files = e.currentTarget.files;
        if (files) {
            e.preventDefault();
            if (files.length > 0) {
                for (var i = 0; i < files.length; i++) {
                    fileUploaded(files.item(i));
                }
            }
        }
    };
}
exports.onFileUploaded = onFileUploaded;
//# sourceMappingURL=common.js.map