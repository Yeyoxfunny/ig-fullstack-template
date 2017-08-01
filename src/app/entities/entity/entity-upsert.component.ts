import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from './entity.service';
import { Entity } from './entity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-upsert',
  templateUrl: './entity-upsert.component.html'
})
export class EntityUpSertComponent implements OnInit {

  categorias: string[] = ['Computers', 'Phones', 'Accesories'];
  crudOperationTitle = 'Create';
  isCreate = true;

  entity: Entity = {
    name: '',
    description: '',
    category: '',
    price: 0,
    picture: 'xxx.png'
  };

  constructor(
    private entityService: EntityService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) { // If exist id in params
        this.crudOperationTitle = 'Update';
        this.isCreate = false;
        this.entityService.getById(id).subscribe((entityData) => {
          this.entity = entityData;
        });
      }
    });
  }

  registrar() {
    this.entityService.insert(this.entity).subscribe(
      (response) => {
        this.router.navigate(['/entities/entity']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizar() {
    this.entityService.update(this.entity.id, this.entity).subscribe(
      (response) => {
        this.router.navigate(['/entities/entity']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
