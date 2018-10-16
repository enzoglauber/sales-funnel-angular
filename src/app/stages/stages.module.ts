import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageListComponent } from './stage-list/stage-list.component';
import { ContenteditableDirective } from 'ng-contenteditable';
import { SortableModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { OpportunitiesModule } from '../opportunities/opportunities.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SortableModule.forRoot(), AlertModule.forRoot(), OpportunitiesModule
  ],
  declarations: [StageListComponent, ContenteditableDirective]
})
export class StagesModule { }
