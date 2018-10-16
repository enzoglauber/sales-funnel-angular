import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityButtonAddComponent } from './opportunity-button-add/opportunity-button-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OpportunityButtonAddComponent],
  declarations: [OpportunityButtonAddComponent]
})
export class OpportunitiesModule { }
