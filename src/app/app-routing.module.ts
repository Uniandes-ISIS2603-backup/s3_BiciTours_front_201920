import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
    [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'usuario-login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'seguros',
        loadChildren: () => import('./seguros/seguros.module').then(m => m.SegurosModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'tours',
        loadChildren: () => import('./tour/tour.module').then(m => m.TourModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [NgxPermissionsGuard],
        data: {permissions: {only: ['ADMIN']}}
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
