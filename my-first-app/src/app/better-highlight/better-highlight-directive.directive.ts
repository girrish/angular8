import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgroudColor: string;
  @HostBinding('style.backgroundColor') backgroudColor: string = this.defaultColor;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroudColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroudColor = this.highlightColor;
    this.color = 'black';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroudColor = this.defaultColor;
    this.color = 'white';
  }
}
