module.exports = {
    inputFiles: [
        "demo/*.bundle.js",
        "demo/*.bundle.css",
        "demo/**/index.ejs.html",
        "demo/demo.png",
    ],
    outputFiles: file => file.replace(".ejs", ""),
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
};
