import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopy]'
})
export class DisableCopyDirective {

  constructor() { }

  @HostListener('document:copy')
  onCopy(event: ClipboardEvent) {
    event.preventDefault();
  }

  // @HostListener('document:paste')
  // onPaste(event: ClipboardEvent) {
  //   event.preventDefault();
  // }
}
