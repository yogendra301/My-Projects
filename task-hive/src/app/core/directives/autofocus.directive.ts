import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(
    private ele: ElementRef
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.ele.nativeElement && typeof this.ele.nativeElement.focus === 'function') {
        this.ele.nativeElement.focus();
      }
    }, 100);
  }
}
