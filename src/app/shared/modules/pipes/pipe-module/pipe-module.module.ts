import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayFilterPipe } from '../../../pipes/filterArray/array-filter.pipe';
import { FormatStringPipe } from '../../../pipes/formatString/format-string.pipe';
import { MemoizePipe } from '../../../pipes/memoize/memoize.pipe';


@NgModule({
  declarations: [ArrayFilterPipe,FormatStringPipe,MemoizePipe],
  imports: [
    CommonModule
  ],
  exports: [ArrayFilterPipe,FormatStringPipe,MemoizePipe],

})
export class PipeModuleModule { }
