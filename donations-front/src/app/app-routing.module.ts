import { DetailsComponent } from './donations/details/details.component';
import { DonorsComponent } from './donations/donors/donors.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "donors", component: DonorsComponent},
  {path: "details", component: DetailsComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
