import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileUploaderComponent } from './index.component'
export * from './index.component'
export * from 'file-uploader-component'

/**
 * @public
 */
@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileUploaderComponent
  ]
})
export class FileUploaderModule { }
