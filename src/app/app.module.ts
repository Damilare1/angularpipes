import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModuleModule } from './shared/modules/pipes/pipe-module/pipe-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
