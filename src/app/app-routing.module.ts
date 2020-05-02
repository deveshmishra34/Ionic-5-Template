import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'page-one',
    loadChildren: () => import('./pages/courses/page-one/page-one.module').then( m => m.PageOnePageModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./pages/courses/page-two/page-two.module').then( m => m.PageTwoPageModule)
  },
  {
    path: 'page-three',
    loadChildren: () => import('./pages/courses/page-three/page-three.module').then( m => m.PageThreePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
