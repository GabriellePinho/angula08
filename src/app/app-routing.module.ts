import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FotolistComponent } from './fotolist/fotolist.component';

const routes: Routes = [
  {path:'', component: FotolistComponent},
  {path:'form',component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
