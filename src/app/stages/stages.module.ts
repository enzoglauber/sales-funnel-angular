import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageListComponent } from './stage-list/stage-list.component';
import { ContenteditableDirective } from 'ng-contenteditable';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [StageListComponent, ContenteditableDirective]
})
export class StagesModule { }
