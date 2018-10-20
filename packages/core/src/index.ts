import { __extends } from 'tslib'
(window as any).__extends = __extends

/**
 * @public
 */
export const defaultLocale = {
  dragAndDrop: 'Upload files by dragging & dropping,',
  selectFile: 'selecting them',
  pasteFromClipboard: ', or pasting from the clipboard.'
}

export type Locale = typeof defaultLocale

/**
 * @public
 */
export function getLocale(locale: null | undefined | Locale): Locale {
  return locale || defaultLocale
}

function upload(name: string | undefined, url: string | undefined, method: string | undefined, file: File | Blob, fileGot: () => void, fileUploaded: (request: XMLHttpRequest) => void, progress: (percent: number) => void, requestCreated: (uploadRequest: UploadRequest) => void) {
  fileGot()

  if (name && url && method) {
    const request = new XMLHttpRequest()
    const uploadRequest: UploadRequest = {
      request,
      file,
      percent: 0
    }
    request.upload.onprogress = e => {
      const percent = Math.round(100 * e.loaded / e.total)
      progress(percent)
      uploadRequest.percent = percent
    }
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        fileUploaded(request)
      }
    }
    request.open(method, url)
    const formData = new FormData()
    formData.append(name, file)
    request.send(formData)
    requestCreated(uploadRequest)
  }
}

/**
 * @public
 */
export function onDrop(e: DragEvent, name: string | undefined, url: string | undefined, method: string | undefined, fileGot: (file: File | Blob) => void, fileUploaded: (request: XMLHttpRequest) => void, progress: (percent: number) => void, requestCreated: (uploadRequest: UploadRequest) => void) {
  if (e.dataTransfer) {
    const files = e.dataTransfer.files
    if (files.length > 0) {
      e.preventDefault()
      e.stopPropagation()
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i)
        if (file) {
          upload(name, url, method, file, () => {
            fileGot(file)
          }, request => {
            fileUploaded(request)
          }, percent => {
            progress(percent)
          }, fileRequest => {
            requestCreated(fileRequest)
          })
        }
      }
    }
  }
}

/**
 * @public
 */
export function onPaste(e: ClipboardEvent, name: string | undefined, url: string | undefined, method: string | undefined, fileGot: (file: File | Blob) => void, fileUploaded: (request: XMLHttpRequest) => void, progress: (percent: number) => void, requestCreated: (uploadRequest: UploadRequest) => void) {
  const items = e.clipboardData.items
  if (items.length > 0) {
    e.preventDefault()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item.kind === 'file') {
        const file = item.getAsFile()
        if (file) {
          upload(name, url, method, file, () => {
            fileGot(file)
          }, request => {
            fileUploaded(request)
          }, percent => {
            progress(percent)
          }, fileRequest => {
            requestCreated(fileRequest)
          })
        }
      }
    }
  }
}

/**
 * @public
 */
export function onFileUploaded(e: Event, name: string | undefined, url: string | undefined, method: string | undefined, fileGot: (file: File | Blob) => void, fileUploaded: (request: XMLHttpRequest) => void, progress: (percent: number) => void, requestCreated: (uploadRequest: UploadRequest) => void) {
  const files = (e.currentTarget as HTMLInputElement).files
  if (files) {
    e.preventDefault()
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i)
        if (file) {
          upload(name, url, method, file, () => {
            fileGot(file)
          }, request => {
            fileUploaded(request)
          }, percent => {
            progress(percent)
          }, fileRequest => {
            requestCreated(fileRequest)
          })
        }
      }
    }
  }
}

/**
 * @public
 */
export type UploadRequest = {
  percent: number;
  file: File | Blob;
  request: XMLHttpRequest;
}

/**
 * @public
 */
export function removeRequest(requests: UploadRequest[], request: XMLHttpRequest) {
  for (let i = 0; i < requests.length; i++) {
    if (requests[i].request === request) {
      requests.splice(i, 1)
      break
    }
  }
}
