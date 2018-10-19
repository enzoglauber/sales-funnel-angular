import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StageService } from '../../shared/resources/stage.service';
import { OpportunityService } from '../../shared/resources/opportunity.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-opportunity-new',
  templateUrl: './opportunity-new.component.html',
  styleUrls: ['./opportunity-new.component.scss']
})
export class OpportunityNewComponent implements OnInit {
  form: FormGroup;
  // 
  constructor(
    private OpportunityService: OpportunityService,
    private toastr: ToastrService
  ) {
    //add
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      value: new FormControl(''),
      customer: new FormControl(''),
      stage_id: new FormControl(1),
      // stage: new FormGroup({
      //   id: new FormControl(1)
      // }),

    }, { updateOn: 'blur' });
  }

  ngOnInit() {
  }

  reset() {
    this.form.reset();
    // this.toggleNewOpp(false);
    this.form.patchValue({ stage_id: '1' });
  }

  save() {
    console.log('legal', this.form)
    if (!this.form.pristine) {
      this.OpportunityService.create(this.form.value).subscribe(data => {
        this.toastr.success('Negócio salvo com sucesso!', 'Sucesso!');
        // this.list();
        this.reset();
        // this.ToastService.show('Task updated', 8000, 'green');
      }, error => {
        console.log('Problem in Opportinity creation', 8000, 'red');
      });
    }
  }

}
