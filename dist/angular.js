"use strict";
var core_1 = require("@angular/core");
var common = require("./common");
var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        var _this = this;
        this.fileUploaded = new core_1.EventEmitter();
        this.onDrop = function (e) {
            var files = e.dataTransfer.files;
            if (files.length > 0) {
                e.preventDefault();
                for (var i = 0; i < files.length; i++) {
                    _this.fileUploaded.emit(files.item(i));
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
                            _this.fileUploaded.emit(file);
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
                        _this.fileUploaded.emit(files.item(i));
                    }
                }
            }
        };
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