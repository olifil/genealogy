import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ObligationsComponent } from './pages/obligations/obligations.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'obligations', component: ObligationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
