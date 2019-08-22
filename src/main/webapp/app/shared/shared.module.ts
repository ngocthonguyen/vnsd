import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VnsdSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [VnsdSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [VnsdSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VnsdSharedModule {
  static forRoot() {
    return {
      ngModule: VnsdSharedModule
    };
  }
}
