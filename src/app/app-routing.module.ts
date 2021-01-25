import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m  => m.HomeModule)
      },
      {
        path: 'queues',
        loadChildren: () => import('./queues/queues.module').then(m => m.QueuesModule)
      },
      {
        path: 'stacks',
        loadChildren: () => import('./stacks/stacks.module').then(m => m.StacksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
