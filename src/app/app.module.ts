import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatStringPipe } from './format-string.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { MemoizePipe } from './memoize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatStringPipe,
    ArrayFilterPipe,
    MemoizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
