"use strict";
var core_1 = require("@angular/core");
var common = require("./common");
var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        var _this = this;
        this.fileUploaded = new core_1.EventEmitter();
        this.onDrop = common.onDrop(function (file) { return _this.fileUploaded.emit(file); });
        this.onPaste = common.onPaste(function (file) { return _this.fileUploaded.emit(file); });
        this.onFileUploaded = common.onFileUploaded(function (file) { return _this.fileUploaded.emit(file); });
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        this.localeObject = common.getLocale(this.locale);
    };
    __decorate([
        core_1.Output()
    ], FileUploaderComponent.prototype, "fileUploaded", void 0);
    __decorate([
        core_1.Input()
    ], FileUploaderComponent.prototype, "accept", void 0);
    __decorate([
        core_1.Input()
    ], FileUploaderComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input()
    ], FileUploaderComponent.prototype, "locale", void 0);
    FileUploaderComponent = __decorate([
        core_1.Component({
            selector: "file-uploader",
            styles: [
                (".container {" + common.containerStyleString + "}"),
                (".file-input {" + common.fileInputStyleString + "}"),
                (".select-them {" + common.selectThemStyleString + "}"),
            ],
            template: "\n    <div (drop)=\"onDrop($event)\"\n        (paste)=\"onPaste($event)\"\n        contenteditable=\"true\">\n        <p class=\"container\">\n            {{localeObject.dragAndDrop}}\n            <span class=\"select-them\">{{localeObject.selectFile}}</span>\n            {{localeObject.pasteFromClipboard}}\n            <input type=\"file\"\n                class=\"file-input\"\n                [multiple]=\"multiple\"\n                [accept]=\"accept\"\n                (change)=\"onFileUploaded($event)\" />\n        </p>\n    </div>\n    ",
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=angular.js.map