module.exports = {
    inputFiles: [
        "demo/*.bundle.js",
        "demo/*.bundle.css",
        "demo/**/index.ejs.html",
        "demo/demo.png",
    ],
    outputFiles: [
        "demo/angular/index.html",
        "demo/react/index.html",
        "demo/vue/index.html"
    ],
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
        customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
};
