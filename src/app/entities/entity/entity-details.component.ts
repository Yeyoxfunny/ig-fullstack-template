import { Entity } from './entity.model';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from './entity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html'
})
export class EntityDetailsComponent implements OnInit {

  entity: Entity;

  constructor(
    private entityService: EntityService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.entityService.getById(id).subscribe((entityData) => {
        this.entity = entityData;
      });
    });
  }
}
