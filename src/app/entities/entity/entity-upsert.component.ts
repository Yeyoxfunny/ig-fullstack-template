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
  crudOperationTitle = 'Crear';
  isCreate = true;
  entity: Entity;

  constructor(
    private entityService: EntityService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.entityService.getById(id).subscribe((entity) => {
          this.entity = entity;
        });
      }
    });
  }

  registrar(formValues) {
    this.entity = formValues;
    this.entityService.insert(this.entity).subscribe(
      (response) => {
        this.router.navigate(['/entities/entity']);
      }
    );
  }

  actualizar() {
    this.entityService.update(this.entity.id, this.entity).subscribe(
      (response) => {
        this.router.navigate(['/entities/entity']);
      }
    );
  }
}
