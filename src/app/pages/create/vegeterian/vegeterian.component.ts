import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vegeterian',
  templateUrl: './vegeterian.component.html',
  styleUrls: ['./vegeterian.component.css']
})
export class VegeterianComponent {
  vegeterianInput: boolean;
  @Output() toggleVegeterianEvent = new EventEmitter();

  constructor() { }

  toggleVegeterian() {
    this.toggleVegeterianEvent.emit();
  }

}
