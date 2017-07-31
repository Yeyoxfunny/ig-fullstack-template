import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity/entity.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    EntityComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class EntityModule { }
