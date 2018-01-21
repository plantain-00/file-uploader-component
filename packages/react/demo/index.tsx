import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FileUploader } from '../dist/'

class Main extends React.Component<{}, {}> {
  private locale = null
  private name = 'test'
  private url = 'http://localhost:9997'
  private method = 'POST'

  componentWillMount () {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
        this.setState({ locale: this.locale })
      })
    }
  }

  render () {
    return (
            <div style={{ margin: '10px', width: '800px' }}>
                <a href='https://github.com/plantain-00/file-uploader-component/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
                <h3>just get the file or blob object and print it at console</h3>
                <FileUploader fileGot={this.fileGot}
                    accept='image/*'
                    multiple={true}
                    locale={this.locale}>
                </FileUploader>
                <h3>upload the file to server</h3>
                name:
                <input type='text' defaultValue={this.name} onChange={e => this.name = e.currentTarget.value} />
                url:
                <input type='text' defaultValue={this.url} onChange={e => this.url = e.currentTarget.value} />
                method:
                <input type='text' defaultValue={this.method} onChange={e => this.method = e.currentTarget.value} />
                <FileUploader fileUploaded={this.fileUploaded}
                    fileGot={this.fileGot}
                    accept='image/*'
                    multiple={true}
                    locale={this.locale}
                    name={this.name}
                    url={this.url}
                    method={this.method}>
                </FileUploader>
            </div>
    )
  }

  private fileGot (response: any) {
    console.log(response)
  }
  private fileUploaded (file: File | Blob) {
    console.log(file)
  }
}

ReactDOM.render(<Main />, document.getElementById('container'))
