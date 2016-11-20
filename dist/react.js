"use strict";
var React = require("react");
var common = require("./common");
var FileUploader = (function (_super) {
    __extends(FileUploader, _super);
    function FileUploader() {
        var _this = this;
        _super.apply(this, arguments);
        this.onDrop = function (e) {
            var files = e.dataTransfer.files;
            if (files.length > 0) {
                e.preventDefault();
                for (var i = 0; i < files.length; i++) {
                    _this.props.fileUploaded(files.item(i));
                }
            }
        };
        this.onPaste = function (e) {
            var items = e.clipboardData.items;
            if (items.length > 0) {
                e.preventDefault();
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.kind === "file") {
                        var file = item.getAsFile();
                        if (file) {
                            _this.props.fileUploaded(file);
                        }
                    }
                }
            }
        };
        this.onFileUploaded = function (e) {
            var files = e.currentTarget.files;
            if (files) {
                e.preventDefault();
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        _this.props.fileUploaded(files.item(i));
                    }
                }
            }
        };
    }
    FileUploader.prototype.render = function () {
        var locale = common.getLocale(this.props.locale);
        return (React.createElement("div", {onDrop: this.onDrop, onPaste: this.onPaste, contentEditable: true}, 
            React.createElement("p", {style: common.containerStyle}, 
                locale.dragAndDrop, 
                React.createElement("span", {style: common.selectThemStyle}, locale.selectFile), 
                locale.pasteFromClipboard, 
                React.createElement("input", {type: "file", style: common.fileInputStyle, multiple: this.props.multiple, accept: this.props.accept, onChange: this.onFileUploaded}))
        ));
    };
    return FileUploader;
}(React.Component));
exports.FileUploader = FileUploader;
//# sourceMappingURL=react.js.map