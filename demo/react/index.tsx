import * as React from "react";
import * as ReactDOM from "react-dom";
import { FileUploader } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    locale = navigator.language ? navigator.language.toLowerCase() : undefined;
    fileUploaded(file: File | Blob) {
        console.log(file);
    }
    render() {
        return (
            <div style={{ margin: "10px", width: "800px" }}>
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
