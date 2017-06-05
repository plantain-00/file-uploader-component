import * as React from "react";
import * as ReactDOM from "react-dom";
import { FileUploader } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    locale = navigator.language;
    fileUploaded(file: File | Blob) {
        // tslint:disable-next-line:no-console
        console.log(file);
    }
    render() {
        return (
            <div style={{ margin: "10px", width: "800px" }}>
                <a href="https://github.com/plantain-00/file-uploader-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <FileUploader fileUploaded={this.fileUploaded}
                    accept="image/*"
                    multiple={true}
                    locale={this.locale}>
                </FileUploader>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
