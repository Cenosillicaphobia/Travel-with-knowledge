import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'form', loadChildren: () => import('./features/form/form.module').then(m => m.FormModule) },
  { path: 'response', loadChildren: () => import('./features/response/response.module').then(m => m.ResponseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
