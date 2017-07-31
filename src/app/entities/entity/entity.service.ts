import { Entity } from './entity.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EntityService {

  private entityUrl:string = 'http://10.75.7.70:3000/api/product/';

  constructor(private http: Http) {

  }

  getAll(): Observable<Entity[]> {
    return this.http.get(this.entityUrl)
                    .map(this.checkStatus)
                    .map(this.extractEntities);
  }

  getById(id: string): Observable<Entity> {
    return this.http.get(this.entityUrl + id)
                    .map(this.checkStatus)
                    .map(this.extractEntity);
  }

  insert(entity: Entity): Observable<any> {
    return this.http.post(this.entityUrl, entity)
                    .map(this.checkStatus);
  }

  update(id: string, entity: Entity) {
    return this.http.put(this.entityUrl + id, entity).map(this.checkStatus);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.entityUrl + id)
                    .map(this.checkStatus);
  }

  private checkStatus(response: Response) {
    const status = response.status;
    if (status === 200 || status === 201) {
      return response;
    }
    throw response;
  }

  private extractEntities = (response: Response): Entity[] => {
    return response.json().products.map(this.convertToEntity);
  }

  private extractEntity = (response: Response): Entity => {
    const entity = response.json().product;
    return this.convertToEntity(entity);
  }

  private convertToEntity = (data): Entity => {
    const entity: Entity = {
      id: data._id,
      name: data.name,
      description: data.description,
      category: data.category,
      picture: data.picture,
      price: data.price
    };
    return entity;
  }

  private handleError(error: Response | any){
		let errMsg: string;
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.msg || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else{
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		console.log(error);
		return Observable.throw(errMsg);
	}
}
