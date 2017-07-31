import { Entity } from '../entity.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from '../entity.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-update',
  templateUrl: './entity-update.component.html',
  providers: [ EntityService ]
})
export class EntityUpdateComponent implements OnInit {
  categorias: string[] = ['computers', 'phones', 'accesories'];
  entity: Entity = {
    name: '',
    description: '',
    category: '',
    price: 0,
    picture: 'xxx.png'
  };

  constructor(
    private entityService: EntityService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.entityService.getById(id).subscribe((entityData) => {
        this.entity = entityData;
      });
    });
  }

  actualizar() {
    this.entityService
        .update(this.entity.id, this.entity)
        .subscribe(response => {
          this.router.navigate(['/entities']);
        });
  }
}
