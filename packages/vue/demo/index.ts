import { createApp, defineComponent } from 'vue'

import { FileUploader } from '../dist/'

const App = defineComponent({
  data: () => {
    return {
      locale: null,
      name: 'test',
      url: 'http://localhost:9997',
      method: 'POST',
    }
  },
  beforeCreate() {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
      })
    }
  },
  methods: {
    fileGot(file: File | Blob) {
      console.log(file)
    },
    fileUploaded(response: any) {
      console.log(response)
    },
  },
  template: `
    <div style="margin: 10px; width: 800px">
        <a href="https://github.com/plantain-00/file-uploader-component/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <h3>just get the file or blob object and print it at console</h3>
        <file-uploader @file-got="fileGot($event)"
            accept="image/*"
            multiple="true"
            :locale="locale">
        </file-uploader>
        <h3>upload the file to server</h3>
        name:
        <input type="text" v-model="name"/>
        url:
        <input type="text" v-model="url"/>
        method:
        <input type="text" v-model="method"/>
        <file-uploader @file-uploaded="fileUploaded($event)"
            @file-got="fileGot($event)"
            accept="image/*"
            multiple="true"
            :locale="locale"
            :name="name"
            :url="url"
            :method="method">
        </file-uploader>
    </div>
    `
})


const app = createApp(App)
app.component('file-uploader', FileUploader)
app.mount('#container')
