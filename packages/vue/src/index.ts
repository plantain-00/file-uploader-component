import { defineComponent, PropType } from 'vue'
import * as common from 'file-uploader-component'
export * from 'file-uploader-component'
import { indexTemplateHtml } from './variables'

const fileUploadedEventName = 'file-uploaded'

/**
 * @public
 */
export const FileUploader = defineComponent({
  render: indexTemplateHtml,
  props: {
    accept: {
      type: String,
      required: true,
    },
    multiple: {
      type: Boolean,
      required: true,
    },
    locale: Object as PropType<common.Locale>,
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
  },
  computed: {
    localeObject(): common.Locale {
      return common.getLocale(this.locale)
    }
  },
  data: () => {
    return {
      requests: [] as common.UploadRequest[],
    }
  },
  methods: {
    getProgressWidth(request: common.UploadRequest) {
      return {
        width: request.percent + '%'
      }
    },
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
    },
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
    },
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
    },
  }
})
