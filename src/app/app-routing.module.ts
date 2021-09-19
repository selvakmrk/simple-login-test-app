import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '', component: LoginComponent, },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module')
      .then(mod => mod.HomeModule),
      canActivate: [AuthGuard]
  },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
