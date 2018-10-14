import {  Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StageService } from '../../shared/resources/stage.service';

import { FormGroup, FormControl, Validators}
  from '@angular/forms';


import { _ } from "underscore";


@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StageListComponent implements OnInit {
  //list
  private data: Array<any> = [];
  private newOpp: Boolean = false;

  //add
  @Input() entity:any;
  @Output() pristine = new EventEmitter<any>();  
  form: FormGroup;

  constructor(
    private StageService: StageService,
  ) { 
    //add
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required] ),
      // description: new FormControl()
    }, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.list();
    
    // add
    this.form.valueChanges.subscribe(data => {
      this.save();      
    });
  }

  //add

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.entity.firstChange) {
      this.form.setValue(_.omit(changes.entity.currentValue, 'user_id', 'created_at', 'updated_at'));
    }
  }

  save() {    
    if (!this.form.pristine) {
      if (this.entity.id) {
        this.StageService.update(this.entity.id, this.form.value).subscribe(data => {
          this.pristine.emit(data);
          this.entity = data;
          // this.ToastService.show('Task updated', 8000, 'green');
        }, error => {
         console.log('Problem in Task creation', 8000, 'red');
        });
      }
    }
  }

  toggleNewOpp(open) {
    this.newOpp = open;
  }

  list() {
    this.data = [];
    this.StageService.list().subscribe(data => {
      for (const item of data) {
        this.data.push(item);
      }
    });
  }
}
