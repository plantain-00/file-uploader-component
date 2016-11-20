import * as React from "react";
import * as ReactDOM from "react-dom";
import { FileUploader } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    fileUploaded(file: File) {
        console.log(file);
    }
    render() {
        return (
            <div style={{ margin: "10px", width: "800px" }}>
                <FileUploader fileUploaded={this.fileUploaded}
                    accept="image/*"
                    multiple={true}
                    locale="zh-cn">
                </FileUploader>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
