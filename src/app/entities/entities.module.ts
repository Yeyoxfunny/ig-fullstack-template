import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppMaterialModule } from '../app.material.module';

import { EntityComponent } from './entity/entity.component';
import { FormsModule } from '@angular/forms';
import { EntityDeleteModalComponent } from './entity/entity-delete-modal.component';
import { EntityCreateComponent } from './entity/entity-create/entity-create.component';
import { RouterModule } from '@angular/router';
import { EntityUpdateComponent } from './entity/entity-update/entity-update.component';

@NgModule({
  declarations: [
    EntityComponent,
    EntityDeleteModalComponent,
    EntityCreateComponent,
    EntityUpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    RouterModule
  ],
  bootstrap: [ EntityDeleteModalComponent ]
})
export class EntityModule { }
