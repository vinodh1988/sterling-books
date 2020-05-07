import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DealsComponent } from './pages/deals/deals.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BestsellersComponent } from './pages/bestsellers/bestsellers.component';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"deals",component:DealsComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"contacts",component:ContactComponent},
  {path:"bestsellers",component:BestsellersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
