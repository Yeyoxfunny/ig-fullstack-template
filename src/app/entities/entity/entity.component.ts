import { Component, Inject, OnInit, Predicate } from '@angular/core';

import { EntityService } from './entity.service';
import { Entity } from './entity.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {
  entities: Entity[];
  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };

  constructor(
    private entityService: EntityService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.entityService.getAll().subscribe((entities) => {
      this.entities = entities;
    });
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.entityService.delete(id).subscribe(response => {
          this.entities = this.entities.filter(entity => entity.id !== id);
        });
      }
    }, (reason) => {
      console.log('Holaaaa ' + reason);
    });
  }
}
