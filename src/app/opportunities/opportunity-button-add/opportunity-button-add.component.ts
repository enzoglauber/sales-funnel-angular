import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opportunity-button-add',
  templateUrl: './opportunity-button-add.component.html',
  styleUrls: ['./opportunity-button-add.component.scss']
})
export class OpportunityButtonAddComponent implements OnInit {
  
  _inOpen: boolean ;
  
  @Input() set inOpen(value: boolean) {
    this._inOpen = value;
    this.inOpenChange.emit(this._inOpen);
  }
  get inOpen(): boolean {
    return this._inOpen;
  }
  @Output()
  inOpenChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.inOpen = false;
  }

  toggleNewOpp() {
    this.inOpen = !this.inOpen;
  }
}
