import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityModule } from './entity/entity.module';

@NgModule({
  imports: [
    CommonModule,
    EntityModule
  ]
})
export class EntitiesModule { }
