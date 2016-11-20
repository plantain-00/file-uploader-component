"use strict";
var Vue = require("vue");
var common = require("./common");
/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-new */
/* tslint:disable:object-literal-shorthand */
Vue.component("file-uploader", {
    template: "\n    <div @drop=\"onDrop(arguments[0])\"\n        @paste=\"onPaste(arguments[0])\"\n        contenteditable=\"true\">\n        <p :style=\"containerStyle\">\n            {{localeObject.dragAndDrop}}\n            <span :style=\"selectThemStyle\">{{localeObject.selectFile}}</span>\n            {{localeObject.pasteFromClipboard}}\n            <input type=\"file\"\n                :style=\"fileInputStyle\"\n                :multiple=\"multiple\"\n                :accept=\"accept\"\n                @change=\"onFileUploaded(arguments[0])\" />\n        </p>\n    </div>\n    ",
    props: ["accept", "multiple", "locale"],
    data: function () {
        var localeObject = common.getLocale(this.locale);
        return {
            localeObject: localeObject,
            containerStyle: common.containerStyle,
            selectThemStyle: common.selectThemStyle,
            fileInputStyle: common.fileInputStyle,
        };
    },
    methods: {
        onDrop: function (e) {
            var _this = this;
            common.onDrop(function (file) { return _this.$emit("file-uploaded", file); })(e);
        },
        onPaste: function (e) {
            var _this = this;
            common.onPaste(function (file) { return _this.$emit("file-uploaded", file); })(e);
        },
        onFileUploaded: function (e) {
            var _this = this;
            common.onFileUploaded(function (file) { return _this.$emit("file-uploaded", file); })(e);
        },
    },
});
//# sourceMappingURL=vue.js.map