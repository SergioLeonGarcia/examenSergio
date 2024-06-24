import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloriasComponent } from './calorias/calorias.component';

const routes: Routes = [
  { path: 'calorias', component: CaloriasComponent },
  { path: '', redirectTo: '/calorias', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


