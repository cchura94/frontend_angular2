import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'pedido',
        component: PedidoComponent
    }
];
