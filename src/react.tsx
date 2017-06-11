import * as React from "react";

import * as common from "./common";

export type Props = {
    accept?: string;
    multiple?: boolean;
    locale?: string;
    name?: string;
    url?: string;
    method?: string;
    fileGot?: (file: File | Blob) => void;
    fileUploaded?: (response: any) => void;
};

export class FileUploader extends React.Component<Props, {}> {
    requests: common.UploadRequest[] = [];

    onDrop(e: DragEvent) {
        common.onDrop(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, request => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(request.response);
            }
            common.removeRequest(this.requests, request);
            this.setState({ requests: this.requests });
        }, percent => {
            this.setState({ requests: this.requests });
        }, request => {
            this.requests.push(request);
        });
    }
    onPaste(e: ClipboardEvent) {
        common.onPaste(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, request => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(request.response);
            }
            common.removeRequest(this.requests, request);
            this.setState({ requests: this.requests });
        }, percent => {
            this.setState({ requests: this.requests });
        }, request => {
            this.requests.push(request);
        });
    }
    onFileUploaded(e: Event) {
        common.onFileUploaded(e, this.props.name, this.props.url, this.props.method, file => {
            if (this.props.fileGot) {
                this.props.fileGot(file);
            }
        }, request => {
            if (this.props.fileUploaded) {
                this.props.fileUploaded(request.response);
            }
            common.removeRequest(this.requests, request);
            this.setState({ requests: this.requests });
        }, percent => {
            this.setState({ requests: this.requests });
        }, request => {
            this.requests.push(request);
        });
    }
    render() {
        const locale = common.getLocale(this.props.locale);
        const progress = this.requests.map(request => (
            <div className="file-uploader-progress" title={(request.file as File).name}>
                <div style={{ width: request.percent + "%" }}>{request.percent}%</div>
            </div>
        ));
        return (
            <div onDrop={(e: React.DragEvent<HTMLElement> | DragEvent) => { this.onDrop(e as DragEvent); }}
                onPaste={(e: React.ClipboardEvent<HTMLElement> | ClipboardEvent) => { this.onPaste(e as ClipboardEvent); }}>
                {progress}
                <p className="file-uploader-container">
                    {locale.dragAndDrop}
                    <span>{locale.selectFile}</span>
                    {locale.pasteFromClipboard}
                    <input type="file"
                        multiple={this.props.multiple}
                        accept={this.props.accept}
                        onChange={(e: React.FormEvent<HTMLElement> | Event) => { this.onFileUploaded(e as Event); }} />
                </p>
            </div>
        );
    }
}
