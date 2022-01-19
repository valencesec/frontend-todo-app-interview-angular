import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, HttpClientModule],
})
export class CoreModule {}
