import { NgModule } from '@angular/core';

import { SubLogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SubLogSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SubLogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SubLogSharedCommonModule {}
