import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector   : 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls  : ['./planet-card.component.css']
})
export class PlanetCardComponent {
  @Input() planet: any;
  @Output() onPlanetClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor () {
  }

  planetClicked () {
    this.onPlanetClicked.emit(this.planet.id);
  }

}
