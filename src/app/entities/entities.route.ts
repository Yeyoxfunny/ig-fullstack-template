import { Routes } from '@angular/router';

import { EntityComponent } from './entity/entity.component';
import { EntityCreateComponent } from './entity/entity-create/entity-create.component';
import { EntityUpdateComponent } from './entity/entity-update/entity-update.component';

export const entitiesRoutes: Routes = [
  {
    path: 'entities',
    children: [
      { path: '', component: EntityComponent },
      { path: 'create', component: EntityCreateComponent},
      { path: 'update/:id', component: EntityUpdateComponent }
    ]
  }
];
