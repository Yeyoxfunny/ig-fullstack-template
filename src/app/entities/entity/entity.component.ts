import { Component, OnInit } from '@angular/core';

export interface Producto {
  id: number;
  descripcion: string;
  precio: number;
  ultimaCompra: string;
  stock: number;
};

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  productos: Producto[] = [
    { id: 1, descripcion: 'Mackbook Pro', precio: 2000000, ultimaCompra: '19/08/2017', stock: 23 },
    { id: 1, descripcion: 'iPad 2', precio: 2000000, ultimaCompra: '19/08/2017', stock: 10 },
    { id: 1, descripcion: 'iPhone', precio: 2000000, ultimaCompra: '19/08/2017', stock: 43 },
    { id: 1, descripcion: 'Portatil ASUS', precio: 2000000, ultimaCompra: '19/08/2017', stock: 53 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
