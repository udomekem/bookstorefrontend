import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { CatalogueSearchComponent } from './catalogue-search/catalogue-search.component';
import { CatalogueMaintenanceComponent } from './catalogue-maintenance/catalogue-maintenance.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "site-map",
    component: SiteMapComponent
  },
  {
    path: "catalogue-search",
    component: CatalogueSearchComponent
  },
  {
    path: "maintanance-catalogue",
    component: CatalogueMaintenanceComponent
  },
  {
    path: "about",
    component: AboutComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
