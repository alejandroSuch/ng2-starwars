import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHovered]'
})
export class HoveredDirective {
  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter') onMouseEnter () {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.isHovered = false;
  }

  constructor () {
  }

}
