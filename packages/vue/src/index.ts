import Vue from 'vue'
import * as common from 'file-uploader-component'
export * from 'file-uploader-component'
import Component from 'vue-class-component'
import { indexTemplateHtml, indexTemplateHtmlStatic } from './variables'

const fileUploadedEventName = 'file-uploaded'

@Component({
  props: ['accept', 'multiple', 'locale', 'name', 'url', 'method'],
  render: indexTemplateHtml,
  staticRenderFns: indexTemplateHtmlStatic
})
export class FileUploader extends Vue {
  accept!: string
  multiple!: boolean
  locale?: common.Locale
  name!: string
  url!: string
  method!: string

  get localeObject() {
    return common.getLocale(this.locale)
  }

  requests: common.UploadRequest[] = []

  getProgressWidth(request: common.UploadRequest) {
    return {
      width: request.percent + '%'
    }
  }

  onDrop(e: DragEvent) {
    common.onDrop(e, this.name, this.url, this.method, file => {
      this.$emit('file-got', file)
    }, request => {
      this.$emit(fileUploadedEventName, request.response)
      common.removeRequest(this.requests, request)
    }, percent => {
      // nothing to do
    }, request => {
      this.requests.push(request)
    })
  }
  onPaste(e: ClipboardEvent) {
    common.onPaste(e, this.name, this.url, this.method, file => {
      this.$emit('file-got', file)
    }, request => {
      this.$emit(fileUploadedEventName, request.response)
      common.removeRequest(this.requests, request)
    }, percent => {
      // nothing to do
    }, request => {
      this.requests.push(request)
    })
  }
  onFileUploaded(e: Event) {
    common.onFileUploaded(e, this.name, this.url, this.method, file => {
      this.$emit('file-got', file)
    }, request => {
      this.$emit(fileUploadedEventName, request.response)
      common.removeRequest(this.requests, request)
    }, percent => {
      // nothing to do
    }, request => {
      this.requests.push(request)
    })
  }
}

Vue.component('file-uploader', FileUploader)
