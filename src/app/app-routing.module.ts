import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { IngredientComponent } from './ingredients/ingredient/ingredient.component';

const routes: Routes = [
  {
    path:"ingredient",
    component:IngredientComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
