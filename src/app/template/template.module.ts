import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [TemplateComponent],
})
export class TemplateModule {
}
