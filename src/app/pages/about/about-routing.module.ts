import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutHomeComponent } from './about-home/about-home.component';

const routes: Routes = [
  {
    path: '',
    component: AboutHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }