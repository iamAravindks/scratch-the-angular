import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
 selector: '[onlyNumber]'
})
export class OnlyNumberDirective {

 constructor(private el: ElementRef) { }

 @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const e = event as KeyboardEvent;
    console.log(e.key);
    const inputValue = this.el.nativeElement.value;

    const isDecimalPointAllowed = !inputValue.includes('.');
    const isNegativeSignAllowed = !inputValue.includes('-');

    const allowedKeys = ['Delete', 'Backspace', 'Tab', 'Escape', 'Enter', 'NumpadDecimal', 'Period', 'Home', 'End', 'ArrowLeft', 'ArrowRight'];

    if (allowedKeys.includes(e.key) ||
        (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'x' && (e.ctrlKey || e.metaKey))) {
      return;
    }

    if ((e.shiftKey || !(e.key >= '0' && e.key <= '9')) && (e.key < '0' || e.key > '9')) {
      if (!(isDecimalPointAllowed && e.key === '.') && !(isNegativeSignAllowed && this.isNegativeSignKey(e))) {
        e.preventDefault();
      }
    }
 }

 private isNegativeSignKey(event: KeyboardEvent): boolean {
    const cursorPosition = this.el.nativeElement.selectionStart;
    return event.key === '-' && cursorPosition !== 0;
 }
}
