import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasComponent } from './components/facturas/facturas.component';

const routes: Routes = [
  {path: 'cliente', component: ClientesComponent},
  {path: 'factura', component: FacturasComponent},
  {path: '**', redirectTo:'cliente'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
