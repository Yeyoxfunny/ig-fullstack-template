import { EntityDetailsComponent } from './entity-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EntityComponent } from './entity.component';
import { EntityUpSertComponent } from './entity-upsert.component';
import { EntityDeleteModalComponent } from './entity-delete-modal.component';
import { EntityService } from './entity.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  declarations: [
    EntityComponent,
    EntityDeleteModalComponent,
    EntityUpSertComponent,
    EntityDetailsComponent
  ],
  providers: [ EntityService ],
  bootstrap: [ EntityDeleteModalComponent ]
})
export class EntityModule { }
