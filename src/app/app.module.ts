import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { StagesModule } from './stages/stages.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';
import { ToastrModule } from 'ngx-toastr';
import { storeLogger } from 'ngrx-store-logger';

import { StoreModule, ActionReducer  } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StageReducer } from './stages/stage.reducer';
import { PageReducer } from './shared/page.reducer';


export function logger(PageReducer: ActionReducer<any>): any {
  return storeLogger()(PageReducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    SharedModule,
    StagesModule,
    OpportunitiesModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      stage: StageReducer,
      page: PageReducer
    },{ metaReducers })
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
