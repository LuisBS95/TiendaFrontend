import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { GaleriaCategoComponent } from '../components/galeria-catego/galeria-catego.component';




const routes: Routes = [
   

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
    {path : 'home' , component: PagesComponent,
    children: [
        {path:'' , component : HomeComponent},
        {path:'producto/:id' , component : ProductoComponent},
        {path:'galeria/:id' , component : GaleriaCategoComponent}
    ]},
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
