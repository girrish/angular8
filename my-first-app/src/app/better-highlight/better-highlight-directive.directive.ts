import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroudColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroudColor = 'yellow';
    this.color = 'black';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroudColor = 'pink';
    this.color = 'white';
  }
}
