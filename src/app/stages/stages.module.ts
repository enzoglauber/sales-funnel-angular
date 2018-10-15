import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageListComponent } from './stage-list/stage-list.component';
import { ContenteditableDirective } from 'ng-contenteditable';
import { SortableModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SortableModule.forRoot(), AlertModule.forRoot()
  ],
  declarations: [StageListComponent, ContenteditableDirective]
})
export class StagesModule { }
