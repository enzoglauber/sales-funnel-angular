import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { StagesModule } from './stages/stages.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';
import { ToastrModule } from 'ngx-toastr';


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
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
