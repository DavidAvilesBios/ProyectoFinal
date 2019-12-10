import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FulllayoutComponent } from './components/fulllayout/fulllayout.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { llamadaComponent } from './components/heroe/llamada.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { EditUserResolver } from './components/edit-user/edit-user.resolver';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ClientComponent } from './components/clients/cliente.component';

const routes: Routes = [

  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  {path: 'fulllayout', component: FulllayoutComponent, canActivate: [AuthGuard], children:[
  { path: 'home' , component: HomeComponent,  },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'llamada' , component: llamadaComponent },
  { path: 'llamada/:id' , component: llamadaComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'details/:id', component: EditUserComponent, resolve:{ data : EditUserResolver} },
  { path: '**', redirectTo: 'home' }]},

  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
