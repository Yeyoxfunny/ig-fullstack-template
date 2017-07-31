import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from "@angular/cdk";

import { EntityDeleteModalComponent } from './entity-delete-modal.component';

import { EntityService } from './entity.service';
import { Entity } from './entity.model';

import { Observable } from 'rxjs/Observable';
import { MdDialog } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  providers: [ EntityService ]
})
export class EntityComponent implements OnInit {

  displayedColumns = ['name', 'description', 'category', 'picture', 'price', 'actions'];

  dataSource: EntityDataSource | null;
  entityDatabase: EntityDatabase | null;

  constructor(
    private entityService: EntityService,
    public dialog: MdDialog
  ) {
    this.entityDatabase = new EntityDatabase(this.entityService);
    this.dataSource = new EntityDataSource(this.entityDatabase);
   }

  ngOnInit() {
  }

  deleteEntity(id: string) {
    let dialogRef = this.dialog.open(EntityDeleteModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === "0") {
        this.entityService.delete(id).subscribe((response) => {
          this.entityDatabase.getData();
        });
      }
    });
  }
}

export class EntityDatabase {

  dataChange: BehaviorSubject<Entity[]> = new BehaviorSubject<Entity[]>([]);

  constructor(private entityService: EntityService) {
    this.getData();
  }

  getData() {
    this.entityService.getAll().subscribe(entities => this.dataChange.next(entities));
  }
}

export class EntityDataSource extends DataSource<Entity> {

  constructor(private database: EntityDatabase) {
    super();
  }

  connect(): Observable<Entity[]> {
    return this.database.dataChange;
  }

  disconnect() {
  }
}
