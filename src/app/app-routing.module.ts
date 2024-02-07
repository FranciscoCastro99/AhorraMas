import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { LoginComponent } from './pages/login/login.component';
import {HistorialComponent} from './pages/historial/historial.component'

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'contador',
    component: BoardsComponent
  },
  {
    path:'historial',
    component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
