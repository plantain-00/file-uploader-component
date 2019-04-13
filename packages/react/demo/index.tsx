import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FileUploader, Locale } from '../dist/'

function Main() {
  const [locale, setLocale] = React.useState<Locale | null>(null)
  const [name, setName] = React.useState('test')
  const [url, setUrl] = React.useState('http://localhost:9997')
  const [method, setMethod] = React.useState('POST')

  React.useEffect(
    () => {
      if (navigator.language === 'zh-CN') {
        import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
          setLocale(module.locale)
        })
      }
    },
    []
  )

  const fileGot = (response: any) => {
    console.log(response)
  }
  const fileUploaded = (file: File | Blob) => {
    console.log(file)
  }

  return (
    <div style={{ margin: '10px', width: '800px' }}>
      <a href='https://github.com/plantain-00/file-uploader-component/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
      <h3>just get the file or blob object and print it at console</h3>
      <FileUploader fileGot={fileGot}
        accept='image/*'
        multiple={true}
        locale={locale}>
      </FileUploader>
      <h3>upload the file to server</h3>
      name:
      <input type='text' defaultValue={name} onChange={e => setName(e.currentTarget.value)} />
      url:
      <input type='text' defaultValue={url} onChange={e => setUrl(e.currentTarget.value)} />
      method:
      <input type='text' defaultValue={method} onChange={e => setMethod(e.currentTarget.value)} />
      <FileUploader fileUploaded={fileUploaded}
        fileGot={fileGot}
        accept='image/*'
        multiple={true}
        locale={locale}
        name={name}
        url={url}
        method={method}>
      </FileUploader>
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('container'))
