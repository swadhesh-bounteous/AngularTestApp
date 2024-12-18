import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}
    @HostListener('mouseenter') onMouseEnter(){
      this.highlight('rgba(251, 255, 0, 0.551)','pointer');
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.highlight('','');
    }

    private highlight(backgroundColor?: string, cursor?: string) {
      this.el.nativeElement.style.backgroundColor = backgroundColor;
      this.el.nativeElement.style.cursor = cursor;
    }

}
