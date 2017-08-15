import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app.material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    HttpModule,
    RouterModule
  ]
})
export class EntitiesSharedModule { }
