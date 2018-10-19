import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityButtonAddComponent } from './opportunity-button-add/opportunity-button-add.component';
import { OpportunityNewComponent } from './opportunity-new/opportunity-new.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  exports: [OpportunityButtonAddComponent, OpportunityNewComponent],
  declarations: [OpportunityButtonAddComponent, OpportunityNewComponent]
})
export class OpportunitiesModule { }
