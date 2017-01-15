import { Component, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector   : 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls  : ['./planet-card.component.css']
})
export class PlanetCardComponent {
  @Input() planet: any;
  @Output() onPlanetClicked: EventEmitter<number> = new EventEmitter<number>();

  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter') onMouseEnter () {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.isHovered = false;
  }

  constructor () {
  }

  planetClicked () {
    this.onPlanetClicked.emit(this.planet.id);
  }

}
