import * as React from "react";
import * as ReactDOM from "react-dom";
import { FileUploader } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    locale = navigator.language;
    name = "test";
    url = "http://localhost:9997";
    method = "POST";
    fileGot(response: any) {
        // tslint:disable-next-line:no-console
        console.log(response);
    }
    fileUploaded(file: File | Blob) {
        // tslint:disable-next-line:no-console
        console.log(file);
    }
    render() {
        return (
            <div style={{ margin: "10px", width: "800px" }}>
                <a href="https://github.com/plantain-00/file-uploader-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <h3>just get the file or blob object and print it at console</h3>
                <FileUploader fileGot={this.fileGot}
                    accept="image/*"
                    multiple={true}
                    locale={this.locale}>
                </FileUploader>
                <h3>upload the file to server</h3>
                name:
                <input type="text" defaultValue={this.name} onChange={e => this.name = e.currentTarget.value} />
                url:
                <input type="text" defaultValue={this.url} onChange={e => this.url = e.currentTarget.value} />
                method:
                <input type="text" defaultValue={this.method} onChange={e => this.method = e.currentTarget.value} />
                <FileUploader fileUploaded={this.fileUploaded}
                    fileGot={this.fileGot}
                    accept="image/*"
                    multiple={true}
                    locale={this.locale}
                    name={this.name}
                    url={this.url}
                    method={this.method}>
                </FileUploader>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
