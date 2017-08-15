import { EntityDetailsComponent } from './entity-details.component';
import { Routes } from '@angular/router';

import { EntityComponent } from './entity.component';
import { EntityUpSertComponent } from './entity-upsert.component';

export const entityRoutes: Routes = [
  {
    path: 'entity',
    children: [
      { path: '', component: EntityComponent },
      { path: 'create', component: EntityUpSertComponent },
      { path: ':id', component: EntityDetailsComponent },
      { path: ':id/update', component: EntityUpSertComponent }
    ]
  }
];
