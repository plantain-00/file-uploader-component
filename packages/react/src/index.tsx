import * as React from 'react'

import * as common from 'file-uploader-component'
export * from 'file-uploader-component'

/**
 * @public
 */
export type Props = {
  accept?: string;
  multiple?: boolean;
  locale?: common.Locale | null
  name?: string;
  url?: string;
  method?: string;
  fileGot?: (file: File | Blob) => void;
  fileUploaded?: (response: any) => void;
  beforeRequest?: (request: XMLHttpRequest, formData: FormData) => void
} & React.Props<any>

/**
 * @public
 */
export function FileUploader(props: Props) {
  const [requests, setRequest] = React.useState<common.UploadRequest[]>([])

  const locale = common.getLocale(props.locale)

  const fileGotCallback = (file: Blob) => {
    if (props.fileGot) {
      props.fileGot(file)
    }
  }
  const fileUploadedCallback = (request: XMLHttpRequest) => {
    if (props.fileUploaded) {
      props.fileUploaded(request.response)
    }
    common.removeRequest(requests, request)
    setRequest(requests)
  }

  const onDrop = (e: DragEvent) => {
    common.onDrop(e, props.name, props.url, props.method, fileGotCallback, fileUploadedCallback, percent => {
      setRequest(requests)
    }, request => {
      requests.push(request)
    }, props.beforeRequest)
  }
  const onPaste = (e: ClipboardEvent) => {
    common.onPaste(e, props.name, props.url, props.method, fileGotCallback, fileUploadedCallback, percent => {
      setRequest(requests)
    }, request => {
      requests.push(request)
    }, props.beforeRequest)
  }
  const onFileUploaded = (e: Event) => {
    common.onFileUploaded(e, props.name, props.url, props.method, fileGotCallback, fileUploadedCallback, percent => {
      setRequest(requests)
    }, request => {
      requests.push(request)
    }, props.beforeRequest)
  }

  const progress = requests.map((request, i) => (
    <div className='file-uploader-progress' title={(request.file as File).name} key={i}>
      <div style={{ width: request.percent + '%' }}>{request.percent}%</div>
    </div>
  ))
  return (
    <div onDrop={(e: React.DragEvent<HTMLElement> | DragEvent) => { onDrop(e as DragEvent) }}
      onPaste={(e: React.ClipboardEvent<HTMLElement> | ClipboardEvent) => { onPaste(e as ClipboardEvent) }}>
      {progress}
      <p className='file-uploader-container'>
        {locale.dragAndDrop}
        <span>{locale.selectFile}</span>
        {locale.pasteFromClipboard}
        <input type='file'
          multiple={props.multiple}
          accept={props.accept}
          onChange={(e: React.FormEvent<HTMLElement> | Event) => { onFileUploaded(e as Event) }} />
      </p>
    </div>
  )
}
