import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MethOnePageComponent } from './meth-one-page/meth-one-page.component';
import { MethTwoPageComponent } from './meth-two-page/meth-two-page.component';
import { MethThreePageComponent } from './meth-three-page/meth-three-page.component';
import { MethFourPageComponent } from './meth-four-page/meth-four-page.component';
import { MethFivePageComponent } from './meth-five-page/meth-five-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'methone', component: MethOnePageComponent},
  {path: 'methtwo', component: MethTwoPageComponent},
  {path: 'meththree', component: MethThreePageComponent},
  {path: 'methfour', component: MethFourPageComponent},
  {path: 'methfive', component: MethFivePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
