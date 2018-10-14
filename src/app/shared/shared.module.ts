import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';

import { CoreService } from './resources/core.service';
import { CustomerService } from './resources/customer.service';
import { StageService } from './resources/stage.service';
import { OpportunityService } from './resources/opportunity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormDebugComponent],
  exports: [FormDebugComponent],
  providers: [CoreService, CustomerService, StageService, OpportunityService], 
})
export class SharedModule { }
