import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'item-list', pathMatch: 'full' },
  {
    path: 'item-list',
    loadChildren: () => import('./components/item-list/item-list.module').then(m => m.ItemListPageModule)
  },
  {
    path: 'item-form',
    loadChildren: () => import('./components/item-form/item-form.module').then(m => m.ItemFormPageModule)
  },
  {
    path: 'item-detail/:id',
    loadChildren: () => import('./components/item-detail/item-detail.module').then(m => m.ItemDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
