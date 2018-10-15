import {  Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StageService } from '../../shared/resources/stage.service';
import { OpportunityService } from '../../shared/resources/opportunity.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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
    private OpportunityService: OpportunityService,
    private toastr: ToastrService
  ) { 
    //add
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required] ),
      value: new FormControl(''),
      customer: new FormControl(''),
      stage_id: new FormControl(1),
      // stage: new FormGroup({
      //   id: new FormControl(1)
      // }),

    }, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.list();
  }

  change($event) {
    // console.log($event.item.initData.id);
    let id = $event.item.initData.id;
    let params = {stage_id: ($event.overZoneIndex + 1)};
    setTimeout(() => {
      this.OpportunityService.update(id, params).subscribe(data => {
        this.toastr.success('Negócio atualizado com sucesso!', 'Sucesso!');
      }, error => {
        console.log(error);
        this.toastr.error('Não é possivel alterar um negócio ganho!', 'Warning!');
        setTimeout(() => {   
          location.reload();
        }, 200);  
      });
    }, 700);  
  }

  sum(opportunities) {    
    let sum = _.reduce(opportunities, function (memo, opportunity) { 
      return memo + (parseFloat (opportunity.value) || 0); 
    }, 0);
    return sum;
  }

  destroy(id) {
    this.OpportunityService.destroy(id).subscribe(data => {
      this.list();
    }, error => {
      console.log('Problem in Opportinity creation', 8000, 'red');
    });
  }

  reset() {
    this.form.reset();
    this.toggleNewOpp(false);
    this.form.patchValue({ stage_id: '1' });
  }

  save() {
    console.log('legal', this.form)
    if (!this.form.pristine) {
      this.OpportunityService.create(this.form.value).subscribe(data => {
        this.pristine.emit(data);
        this.entity = data;
        this.toastr.success('Negócio salvo com sucesso!', 'Sucesso!');
        this.list();
        this.reset();
        // this.ToastService.show('Task updated', 8000, 'green');
      }, error => { 
        console.log('Problem in Opportinity creation', 8000, 'red');
      });
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
