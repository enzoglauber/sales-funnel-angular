import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Angular2TokenService } from 'angular2-token';
// 

import { StageListComponent } from './stages/stage-list/stage-list.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: StageListComponent },
  { path: 'stages', component: StageListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);