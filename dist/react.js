"use strict";
var React = require("react");
var common = require("./common");
var FileUploader = (function (_super) {
    __extends(FileUploader, _super);
    function FileUploader() {
        _super.apply(this, arguments);
        this.onDrop = common.onDrop(this.props.fileUploaded);
        this.onPaste = common.onPaste(this.props.fileUploaded);
        this.onFileUploaded = common.onFileUploaded(this.props.fileUploaded);
    }
    FileUploader.prototype.render = function () {
        var _this = this;
        var locale = common.getLocale(this.props.locale);
        return (React.createElement("div", {onDrop: function (e) { _this.onDrop(e); }, onPaste: function (e) { _this.onPaste(e); }, contentEditable: true}, 
            React.createElement("p", {style: common.containerStyle}, 
                locale.dragAndDrop, 
                React.createElement("span", {style: common.selectThemStyle}, locale.selectFile), 
                locale.pasteFromClipboard, 
                React.createElement("input", {type: "file", style: common.fileInputStyle, multiple: this.props.multiple, accept: this.props.accept, onChange: function (e) { _this.onFileUploaded(e); }}))
        ));
    };
    return FileUploader;
}(React.Component));
exports.FileUploader = FileUploader;
//# sourceMappingURL=react.js.map