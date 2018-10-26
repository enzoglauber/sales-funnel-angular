import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CreatePage } from 'src/app/shared/page.actions';

@Component({
  selector: 'app-opportunity-button-add',
  templateUrl: './opportunity-button-add.component.html',
  styleUrls: ['./opportunity-button-add.component.scss']
})
export class OpportunityButtonAddComponent implements OnInit {
  page: Observable<any>;
  // 
  constructor(private store: Store<AppState>) {
    this.page = store.select('page');
    console.log(this.page);
    
  }
  // 
  ngOnInit() {}

  // 
  toggleNewOpp() {
    console.log('legal');
    this.store.dispatch( new CreatePage ( true ) );
  }


  // _inOpen: boolean ;
  
  // @Input() set inOpen(value: boolean) {
  //   this._inOpen = value;
  //   this.inOpenChange.emit(this._inOpen);
  // }
  // get inOpen(): boolean {
  //   return this._inOpen;
  // }
  // @Output()
  // inOpenChange = new EventEmitter<boolean>();

  // constructor() { }

  // ngOnInit() {
  //   this.inOpen = false;
  // }

  // toggleNewOpp() {
  //   this.inOpen = !this.inOpen;
  // }
}
