import { Router } from '@angular/router';
import { EntityService } from '../entity.service';
import { Entity } from '../entity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  providers: [ EntityService ]
})
export class EntityCreateComponent implements OnInit {

  categorias: string[] = ['computers', 'phones', 'accesories'];

  constructor(
    private entityService: EntityService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registrar(formValues) {
    const entity: Entity = {
      name: formValues.name,
      description: formValues.description,
      category: formValues.category,
      price: formValues.price,
      picture: 'xxx.png'
    };

    this.entityService.insert(entity).subscribe((response) => {
      this.router.navigate(['/entities']);
    });
  }
}
