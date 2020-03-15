import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
