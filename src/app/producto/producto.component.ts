import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  titulo: string = "Gestión Productos";

  subtitulo: string = "Gestión productos en Angular (subtitulo)"

  categorias: string[] = []

  productos: any[] = [];

  http = inject(HttpClient)

  constructor(){
    this.categorias = ["ROPA", "ELECTRONICOS", "MESA", "ELECTRODOMESTICOS"]
    this.obtenerProductos()
  }

  obtenerProductos(){
    this.http.get('http://127.0.0.1:3000/producto').subscribe(
      (res: any) => {
        this.productos = res
      },
      (error: any) => {
        console.log(error);
      }
    )
  }


}
