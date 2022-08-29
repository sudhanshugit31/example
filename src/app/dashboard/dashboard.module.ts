import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
 
      path: 'dash',
      component: DasboardComponent
    }
  
];


@NgModule({
  declarations: [
    DasboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
