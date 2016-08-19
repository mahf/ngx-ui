import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({ selector: '[dbl-click-copy]' })
export class DblClickCopy {

  constructor(elm: ElementRef) {
    this.element = elm.nativeElement;
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event) {

    const selection = getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.element);
    selection.removeAllRanges();
    selection.addRange(range);
  }

}